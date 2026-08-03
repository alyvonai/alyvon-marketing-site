// Pricing data. Workforce carries real published prices (master spec §4/§19 + the
// current pricing config). Marketing Hub and Analytics are sales-assisted — never invent
// dollar amounts (spec §22/§25). This module is the ONLY place a price or an
// all-departments count is written; pages read from here (see `__tests__/claims.test.ts`).

import { WORKFORCE_STATS } from "@/lib/site"

const ALL_DEPARTMENTS_PHRASE = `The full Workforce — all ${WORKFORCE_STATS.departments} departments`

export interface WorkforcePlan {
  name: string
  priceMonthly: string
  priceAnnual: string
  /** Department access, phrased for the plan card. */
  departments: string
  deliverables: string
  seats: string
  overage: string
  highlighted?: boolean
  /** CTA label for the card; all route to signup except Enterprise. */
  cta: string
  ctaHref: string
}

const SIGNUP = "https://app.alyvon.com/signup"
// Enterprise books a call via the on-site /book embed, tagged as the enterprise placement.
const BOOK_ENTERPRISE = "/book?product=workforce&plan=enterprise&source=pricing_enterprise"

// Annual is billed as 10× monthly (2 months free), per the pricing spec.
export const WORKFORCE_PLANS: WorkforcePlan[] = [
  {
    name: "Starter",
    priceMonthly: "$299",
    priceAnnual: "$2,990",
    departments: "Alyvon core routing + 2 selected departments",
    deliverables: "40 deliverables / mo",
    seats: "2 seats",
    overage: "$9 per additional deliverable",
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Growth",
    priceMonthly: "$899",
    priceAnnual: "$8,990",
    departments: "Alyvon core routing + 7 selected departments",
    deliverables: "150 deliverables / mo",
    seats: "8 seats",
    overage: "$7 per additional deliverable",
    highlighted: true,
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Scale",
    priceMonthly: "$2,400",
    priceAnnual: "$24,000",
    departments: ALL_DEPARTMENTS_PHRASE,
    deliverables: "400 deliverables / mo",
    seats: "25 seats",
    overage: "$5 per additional deliverable",
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    departments: ALL_DEPARTMENTS_PHRASE,
    deliverables: "Committed volume, set with you",
    seats: "Unlimited seats",
    overage: "Negotiated",
    cta: "Talk to us",
    ctaHref: BOOK_ENTERPRISE,
  },
]

// Creative is a paid add-on across all tiers (media generation + creative QA carry real
// incremental cost). No config was found that includes it in a base plan.
export const CREATIVE_ADDON = {
  name: "Creative add-on",
  summary:
    "Creative is a paid add-on on every plan. Media generation and creative QA carry real incremental cost, so Creative capacity is priced separately rather than folded into a base plan.",
}
