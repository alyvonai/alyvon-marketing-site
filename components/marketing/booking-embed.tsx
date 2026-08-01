"use client"

import { useEffect } from "react"
import { track } from "@/lib/analytics"

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js"

// Embeds the GHL booking widget on-site. It stashes the booking context (product/source/
// plan) in localStorage so /thank-you can attribute the completed booking even though the
// generic calendar has a single redirect URL. Fires book_page_viewed on load.
export function BookingEmbed({
  calendarUrl,
  calendarId,
  product,
  source,
  plan,
}: {
  calendarUrl: string
  calendarId: string
  product: string
  source: string
  plan?: string
}) {
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "alyvon_booking_context",
        JSON.stringify({ product, source, plan: plan ?? null })
      )
    } catch {
      // localStorage can throw in private mode — attribution is best-effort.
    }
    track("book_page_viewed", { product, source, plan: plan ?? null })

    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SCRIPT
      s.async = true
      document.body.appendChild(s)
    }
  }, [product, source, plan])

  return (
    <iframe
      src={calendarUrl}
      id={calendarId}
      title="Book a call with Alyvon"
      allow="payment"
      scrolling="no"
      className="w-full"
      style={{ minHeight: 720, border: "none", overflow: "hidden" }}
    />
  )
}
