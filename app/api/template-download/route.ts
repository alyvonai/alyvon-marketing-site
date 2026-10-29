import { NextResponse } from "next/server"
import { getTemplate } from "@/lib/templates"
import { EMAIL_PATTERN, forwardLead } from "@/lib/lead-webhook"

// Template download form handler. Validates the submission, forwards the lead to the
// GoHighLevel inbound webhook (TEMPLATE_LEAD_WEBHOOK_URL, server-only), then returns the
// file path so the page can reveal the download.

const MIN_FILL_MS = 1500 // faster than a person can type an email: almost certainly a bot

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const email = String(body.email ?? "").trim().toLowerCase()
  const firstName = String(body.firstName ?? "").trim().slice(0, 80)
  const template = getTemplate(String(body.template ?? ""))
  const honeypot = String(body.website ?? "")
  const elapsed = Number(body.elapsedMs ?? 0)

  if (!template) return NextResponse.json({ error: "Unknown template." }, { status: 404 })
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Enter a valid email address, like name@agency.com." }, { status: 422 })
  }
  // Bots: pretend success, never forward, never reveal the trap.
  if (honeypot || elapsed < MIN_FILL_MS) return NextResponse.json({ ok: true, file: template.file })

  const result = await forwardLead("TEMPLATE_LEAD_WEBHOOK_URL", `template-download (${template.slug})`, {
    email,
    first_name: firstName,
    template: template.slug,
    template_title: template.title,
    source_page: String(body.sourcePage ?? `/templates/${template.slug}`).slice(0, 200),
    tags: ["template-download", `template:${template.slug}`],
    consent: "Email updates for AI agencies; unsubscribe any time",
  })
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: result.status })

  return NextResponse.json({ ok: true, file: template.file })
}
