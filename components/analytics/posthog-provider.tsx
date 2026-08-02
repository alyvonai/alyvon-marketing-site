"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import posthog from "posthog-js"
import { captureFirstTouch } from "@/lib/analytics"

// Initializes PostHog client-side and exposes it to lib/analytics via window. No-ops
// entirely when NEXT_PUBLIC_POSTHOG_KEY is absent (spec §10 — fail gracefully). In
// production it sets the cookie on the top-level domain (cross_subdomain_cookie) so
// anonymous→signup stitching works across *.alyvon.com — the supported posthog-js way to
// express the spec's ".alyvon.com" cookie-domain intent. Pageviews are captured manually
// on pathname change (capture_pageview off) so we don't need useSearchParams and can stay
// statically rendered.
let initialized = false

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key || initialized) return
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: false,
      persistence: "localStorage+cookie",
      cross_subdomain_cookie: process.env.NODE_ENV === "production",
    })
    window.__alyvon_posthog = posthog
    initialized = true
    captureFirstTouch()
  }, [])

  useEffect(() => {
    if (!initialized) return
    posthog.capture("$pageview", { $current_url: window.location.href })
  }, [pathname])

  return <>{children}</>
}
