"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WORKFORCE_PLANS } from "@/lib/pricing"
import { PricingCard, type PricingPeriod } from "@/components/marketing/pricing-card"

// Monthly/annual toggle + the four plan cards. Client component only for the toggle state —
// the plan data itself still comes from lib/pricing.ts, so nothing here duplicates a price.
export function WorkforcePlans() {
  const [period, setPeriod] = useState<PricingPeriod>("monthly")

  return (
    <div className="flex flex-col gap-8">
      <div
        role="group"
        aria-label="Billing period"
        className="inline-flex w-fit items-center gap-1 rounded-full border border-border-subtle bg-canvas p-1"
      >
        {(["monthly", "annual"] as const).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={period === p}
            onClick={() => setPeriod(p)}
            className={cn(
              "rounded-full px-4 py-2 text-body-s transition-colors duration-micro",
              period === p ? "bg-inverse text-text-on-inverse" : "text-text-secondary hover:text-text-primary"
            )}
          >
            {p === "monthly" ? (
              "Monthly"
            ) : (
              <>
                Annual{" "}
                <span
                  className={cn(
                    "text-label",
                    period === p ? "text-text-on-inverse/70" : "text-accent-strong"
                  )}
                >
                  2 months free
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {WORKFORCE_PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} period={period} />
        ))}
      </div>
    </div>
  )
}
