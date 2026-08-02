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
    body: "Check your email to finish setting up. You can brief your first department the moment you’re in.",
  },
  default: {
    title: "Thanks — we’ve got it.",
    body: "We’ve received your request and will be in touch shortly.",
  },
}

const PRODUCT_HOME: Record<string, { label: string; href: string }> = {
  workforce: { label: "Explore Workforce", href: "/workforce" },
  marketing_hub: { label: "Explore Marketing Hub", href: "/marketing-hub" },
  analytics: { label: "Explore Analytics", href: "/analytics" },
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
    <div className="flex max-w-[640px] flex-col gap-6">
      <span className="font-mono text-label uppercase text-accent-strong">Confirmed</span>
      <h1 className="text-display-l text-text-primary sm:text-display-xl">{copy.title}</h1>
      <p className="text-body-l text-text-secondary">{copy.body}</p>
      <div className="flex flex-wrap items-center gap-3">
        {productLink ? (
          <Link href={productLink.href} className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            {productLink.label}
          </Link>
        ) : (
          <Link href="/" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            Back to home
          </Link>
        )}
        <Link href="/" className="text-body font-medium text-accent-strong underline underline-offset-4">
          Return to alyvon.com
        </Link>
      </div>
    </div>
  )
}
