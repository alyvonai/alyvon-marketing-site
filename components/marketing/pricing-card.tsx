import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import type { WorkforcePlan } from "@/lib/pricing"

// A single Workforce plan card (spec §19). Highlighted plan (Growth) gets the accent
// ring. The CTA fires trial_cta_clicked for signup plans.
export function PricingCard({ plan }: { plan: WorkforcePlan }) {
  const rows = [plan.departments, plan.deliverables, plan.seats, plan.overage]
  const isSignup = plan.ctaHref.includes("app.alyvon.com")

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-card border bg-canvas p-6",
        plan.highlighted
          ? "border-accent ring-2 ring-accent/20"
          : "border-border-subtle"
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-body-l font-semibold text-text-primary">{plan.name}</h3>
          {plan.highlighted ? (
            <span className="rounded-card bg-accent-wash px-2 py-1 font-mono text-label uppercase text-accent-strong">
              Popular
            </span>
          ) : null}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-display-m text-text-primary">{plan.priceMonthly}</span>
          <span className="text-body-s text-text-secondary">/ mo</span>
        </div>
        <span className="text-body-s text-text-tertiary">
          or {plan.priceAnnual}
          {plan.priceAnnual === "Custom" ? "" : " / yr (2 months free)"}
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {rows.map((row) => (
          <li key={row} className="flex items-start gap-2 text-body text-text-secondary">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
            <span>{row}</span>
          </li>
        ))}
      </ul>

      <TrackedCta
        href={plan.ctaHref}
        className={cn(buttonVariants({ variant: plan.highlighted ? "primary" : "secondary", size: "md" }), "w-full")}
        event={isSignup ? "trial_cta_clicked" : "cta_click"}
        eventProps={{ product: "workforce", placement: "pricing_card", plan: plan.name, tier: plan.name }}
      >
        {plan.cta}
      </TrackedCta>
    </div>
  )
}
