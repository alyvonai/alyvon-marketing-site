import { NextResponse } from "next/server"
import { EMAIL_PATTERN, forwardLead } from "@/lib/lead-webhook"

// Founding partner application handler. Validates the five questions and forwards the
// application to GoHighLevel (FOUNDING_APPLICATION_WEBHOOK_URL, server-only) for review.

const MIN_FILL_MS = 4000 // a real application takes longer than this to write
const CADENCE = new Set(["yes", "monthly", "no"])

const field = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max)

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const app = {
    name: field(body.name, 120),
    email: field(body.email, 254).toLowerCase(),
    agency: field(body.agency, 300),
    builds: field(body.builds, 2000),
    firstProject: field(body.firstProject, 2000),
    lastStall: field(body.lastStall, 2000),
    cadence: field(body.cadence, 20),
  }

  const errors: Record<string, string> = {}
  if (!app.name) errors.name = "Enter your name."
  if (!EMAIL_PATTERN.test(app.email)) errors.email = "Enter a valid work email, like name@agency.com."
  if (!app.agency) errors.agency = "Tell us your agency name, website and team size."
  if (!app.builds) errors.builds = "Tell us what you build for clients."
  if (!app.firstProject) errors.firstProject = "Tell us which client project you would run first."
  if (!app.lastStall) errors.lastStall = "Tell us where your last pilot stalled."
  if (!CADENCE.has(app.cadence)) errors.cadence = "Choose one option."
  if (Object.keys(errors).length) return NextResponse.json({ error: "Check the highlighted fields.", errors }, { status: 422 })

  // Bots: pretend success, never forward.
  if (field(body.website, 200) || Number(body.elapsedMs ?? 0) < MIN_FILL_MS) return NextResponse.json({ ok: true })

  const result = await forwardLead("FOUNDING_APPLICATION_WEBHOOK_URL", "founding-application", {
    email: app.email,
    full_name: app.name,
    agency: app.agency,
    what_they_build: app.builds,
    first_client_project: app.firstProject,
    last_pilot_stall: app.lastStall,
    biweekly_call: app.cadence,
    tags: ["founding-partner-application"],
    source_page: "/founding-partners",
  })
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: result.status })

  return NextResponse.json({ ok: true })
}
