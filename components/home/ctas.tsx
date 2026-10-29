import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { CTA } from "@/lib/site"

// Site CTAs. The founding partner application is the primary action everywhere; a demo is
// the secondary path for agencies that want a walkthrough first. DemoCta is styled for dark
// sections.

export function PrimaryCta({
  placement,
  className,
  label = CTA.founding.label,
}: {
  placement: string
  className?: string
  label?: string
}) {
  return (
    <TrackedCta
      href={CTA.founding.href}
      className={cn(buttonVariants({ size: "lg" }), "h-[52px] rounded-full px-8", className)}
      event="founding_cta_clicked"
      eventProps={{ product: "workforce", placement }}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </TrackedCta>
  )
}

const DEMO_HREF = "/book?product=workforce&source="

export function DemoCta({ placement }: { placement: string }) {
  return (
    <TrackedCta
      href={`${DEMO_HREF}${placement}`}
      className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-8 text-body-l font-medium text-white transition-colors duration-micro ease-out-standard hover:border-white/60 hover:bg-white/5"
      event="book_call_clicked"
      eventProps={{ product: "workforce", placement }}
    >
      Book a demo
    </TrackedCta>
  )
}
