"use client"

import { track } from "@/lib/analytics"

// Book-a-call CTA for Marketing Hub and Analytics (spec §5). Renders an <a> to the
// resolved booking URL (env-driven, mailto fallback handled by lib/site CTA config) and
// fires the book_call_clicked event.
export function BookingCta({
  href,
  label,
  product,
  placement,
  className,
}: {
  href: string
  label: string
  product: "marketing_hub" | "analytics"
  placement: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() =>
        track("book_call_clicked", { product, placement, destination: href })
      }
    >
      {label}
    </a>
  )
}
