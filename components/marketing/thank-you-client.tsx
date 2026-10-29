"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { track } from "@/lib/analytics"

// One thank-you page for every source (calendar, form, or other). It reads ?type,
// ?product, and ?source, tailors the copy, and fires a single `conversion` event to both
// PostHog and the GTM dataLayer so Ads/Meta/LinkedIn conversion tags can trigger on this
// page and branch on the values. Direct people here after the action, e.g.
//   /thank-you?type=booking&product=marketing_hub&source=ghl_calendar
const COPY: Record<string, { title: string; body: string }> = {
  booking: {
    title: "You’re booked.",
    body: "Your call is confirmed — check your email for the calendar invite and a short prep note. Need to reschedule? Use the link in that email.",
  },
  lead: {
    title: "Thanks — we’ve got it.",
    body: "Your details are in. Someone from the team will reach out shortly, so keep an eye on your inbox.",
  },
  trial: {
    title: "Your trial is on its way.",
    body: "Check your email to finish setting up. You can send your first stakeholder interview the moment you’re in.",
  },
  default: {
    title: "Thanks — we’ve got it.",
    body: "We’ve received your request and will be in touch shortly.",
  },
}

const PRODUCT_HOME: Record<string, { label: string; href: string }> = {
  workforce: { label: "Explore the platform", href: "/platform" },
}

function readBookingContext(): {
  product?: string
  source?: string
  plan?: string
  type?: string
} {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(window.localStorage.getItem("alyvon_booking_context") || "{}") || {}
  } catch {
    return {}
  }
}

export function ThankYouClient() {
  const params = useSearchParams()
  const ctx = readBookingContext()
  // A single generic calendar has one redirect URL, so booking product/source/plan come
  // from the context /book stashed; explicit query params still win when present.
  const type = params.get("type") || ctx.type || "default"
  const product = params.get("product") || ctx.product || undefined
  const source = params.get("source") || ctx.source || undefined
  const plan = params.get("plan") || ctx.plan || undefined

  useEffect(() => {
    // Server-confirmed conversion signal — fires once on load.
    track("conversion", {
      conversion_type: type,
      product: product ?? null,
      source: source ?? null,
      plan: plan ?? null,
      page_path: "/thank-you",
    })
    try {
      window.localStorage.removeItem("alyvon_booking_context")
    } catch {
      // best-effort cleanup
    }
  }, [type, product, source, plan])

  const copy = COPY[type] ?? COPY.default
  const productLink = product ? PRODUCT_HOME[product] : undefined

  return (
    <div className="flex max-w-[680px] flex-col gap-6">
      <p className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.12em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        Confirmed
      </p>
      <h1 className="text-balance text-[40px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[60px]">{copy.title}</h1>
      <p className="text-body-l text-white/80">{copy.body}</p>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={productLink?.href ?? "/"}
          className={cn(buttonVariants({ size: "lg" }), "h-[52px] rounded-full px-8")}
        >
          {productLink?.label ?? "Back to home"}
        </Link>
        <Link
          href="/insights"
          className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-8 text-body-l font-medium text-white transition-colors duration-micro ease-out-standard hover:border-white/60 hover:bg-white/5"
        >
          Read Insights while you wait
        </Link>
      </div>
    </div>
  )
}
