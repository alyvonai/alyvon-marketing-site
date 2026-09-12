import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import type { WorkforcePlan } from "@/lib/pricing"

export type PricingPeriod = "monthly" | "annual"

// A single Workforce plan card (spec §19). Highlighted plan (Growth) gets the accent
// ring. Enterprise (priced "Custom") skips the credits/seats line and ignores the period
// toggle — its bullets already spell those out. The CTA fires trial_cta_clicked for signup
// plans.
export function PricingCard({ plan, period }: { plan: WorkforcePlan; period: PricingPeriod }) {
  const isSignup = plan.ctaHref.includes("app.alyvon.com")
  const isBooking = plan.ctaHref.startsWith("/book")
  const isCustom = plan.priceMonthly === "Custom"
  const ctaEvent = isSignup ? "trial_cta_clicked" : isBooking ? "book_call_clicked" : "cta_click"

  const bullets = isCustom
    ? plan.features
    : [`${plan.creditsPerMonth} task credits a month`, `${plan.seatsCount} seats`, ...plan.features]

  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-card border bg-canvas p-6",
        plan.highlighted ? "border-accent ring-2 ring-accent/20" : "border-border-subtle",
        isCustom && "bg-surface"
      )}
    >
      {plan.highlighted ? (
        <span className="absolute -top-3 left-6 rounded-full bg-text-primary px-3 py-1 font-mono text-label uppercase text-text-on-inverse">
          Most popular
        </span>
      ) : null}

      <div className="flex flex-col gap-1">
        <h3 className="text-body-l font-semibold text-text-primary">{plan.name}</h3>
        <p className="min-h-10 text-body-s text-text-tertiary">{plan.tagline}</p>
      </div>

      <div className="flex flex-col gap-2">
        {isCustom ? (
          <span className="text-display-m text-text-primary">Custom</span>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-display-m text-text-primary">
              {period === "monthly" ? plan.priceMonthly : plan.priceAnnual}
            </span>
            <span className="text-body-s text-text-secondary">{period === "monthly" ? "/ mo" : "/ yr"}</span>
          </div>
        )}
        <span className="text-body-s text-text-tertiary">
          {isCustom
            ? "Committed volume, set with you"
            : period === "monthly"
              ? `or ${plan.priceAnnual} / yr, 2 months free`
              : `${plan.priceAnnualMonthlyEquivalent} / mo billed annually`}
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {bullets.map((row) => (
          <li key={row} className="flex items-start gap-2 text-body text-text-secondary">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
            <span>{row}</span>
          </li>
        ))}
      </ul>

      <TrackedCta
        href={plan.ctaHref}
        className={cn(
          buttonVariants({ variant: plan.highlighted ? "primary" : "secondary", size: "md" }),
          "mt-auto w-full"
        )}
        event={ctaEvent}
        eventProps={{ product: "workforce", placement: "pricing_card", plan: plan.name, tier: plan.name }}
      >
        {plan.cta}
      </TrackedCta>
    </div>
  )
}
