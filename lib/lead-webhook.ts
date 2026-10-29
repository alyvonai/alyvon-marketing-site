// Forwards a lead to a GoHighLevel inbound-webhook workflow. Shared by the template download
// and founding partner application routes.
//
// Production fails closed when the webhook is missing: a form that says "done" while the
// lead goes nowhere is worse than a visible error. In development the webhook is optional so
// forms can be previewed locally.

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export type ForwardResult = { ok: true } | { ok: false; status: number; error: string }

export async function forwardLead(
  envVar: "TEMPLATE_LEAD_WEBHOOK_URL" | "FOUNDING_APPLICATION_WEBHOOK_URL",
  tag: string,
  payload: Record<string, unknown>
): Promise<ForwardResult> {
  const webhook = process.env[envVar]
  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      console.error(`${tag}: ${envVar} is not set`)
      return { ok: false, status: 503, error: "This form is briefly unavailable. Email hello@alyvon.com and we’ll take it from there." }
    }
    console.warn(`${tag}: ${envVar} not set, lead not forwarded (development)`)
    return { ok: true }
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submitted_at: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) throw new Error(`webhook ${res.status}`)
    return { ok: true }
  } catch (err) {
    console.error(`${tag}: webhook failed`, err)
    return { ok: false, status: 502, error: "Something went wrong saving your request. Try again, or email hello@alyvon.com." }
  }
}
