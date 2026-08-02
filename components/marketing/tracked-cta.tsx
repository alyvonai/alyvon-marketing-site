"use client"

import Link from "next/link"
import { track } from "@/lib/analytics"

export interface TrackedCtaProps {
  href: string
  children: React.ReactNode
  className?: string
  /** Event name (default cta_click). Use trial_cta_clicked / book_call_clicked for those. */
  event?: string
  /** Extra event properties (product, placement, plan, workforce_group, department_anchor…). */
  eventProps?: Record<string, unknown>
  ariaLabel?: string
}

// A CTA that fires the dual PostHog + dataLayer event on click. External links (http,
// mailto) render as <a>; internal links use next/link.
export function TrackedCta({
  href,
  children,
  className,
  event = "cta_click",
  eventProps = {},
  ariaLabel,
}: TrackedCtaProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  const onClick = () => {
    track(event, {
      destination: href,
      page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
      ...eventProps,
    })
  }

  if (isExternal) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
