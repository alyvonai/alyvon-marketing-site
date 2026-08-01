"use client"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { track } from "@/lib/analytics"
import { CTA } from "@/lib/site"

// Sticky bottom trial CTA, mobile only (spec §30 "mobile sticky CTA where useful"). The
// spacer reserves room so the bar never covers the page's closing content.
export function MobileCtaBar({ placement }: { placement: string }) {
  return (
    <>
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-canvas/95 px-4 py-3 backdrop-blur lg:hidden">
        <a
          href={CTA.workforce.href}
          onClick={() => track("trial_cta_clicked", { product: "workforce", placement })}
          className={cn(buttonVariants({ size: "md" }), "w-full")}
        >
          {CTA.workforce.label}
        </a>
      </div>
    </>
  )
}
