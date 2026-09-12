// Pricing data. Workforce carries real published prices (master spec §4/§19 + the
// current pricing config). Marketing Hub and Analytics are sales-assisted — never invent
// dollar amounts (spec §22/§25). This module is the ONLY place a price, a credit amount,
// or an all-departments count is written; pages read from here (see `__tests__/claims.test.ts`).
//
// Priced around task credits, not deliverables or department selection (every plan
// includes the full Workforce — all departments, no per-tier gating). Matches the app's
// actual billing model: credits are the unit of charge, department access is not gated by
// tier, and video (not any department) is the thing metered separately below Scale.

import { WORKFORCE_STATS } from "@/lib/site"

const ALL_DEPARTMENTS_FEATURE = `All ${WORKFORCE_STATS.departments} departments`

export interface WorkforcePlan {
  name: string
  tagline: string
  priceMonthly: string
  priceAnnual: string
  /** Monthly-equivalent shown only in the annual toggle state, e.g. "$333". Empty for Enterprise. */
  priceAnnualMonthlyEquivalent: string
  /** Raw number/word for the comparison table cell, e.g. "50" or "Committed". */
  creditsPerMonth: string
  /** Raw number/word for the comparison table cell, e.g. "2" or "Unlimited". */
  seatsCount: string
  /** Bullets beyond credits/seats. Enterprise has no separate credits/seats line, so its
   * card renders this list alone (see PricingCard). */
  features: string[]
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
    tagline: "For the one department that is underwater right now.",
    priceMonthly: "$399",
    priceAnnual: "$3,990",
    priceAnnualMonthlyEquivalent: "$333",
    creditsPerMonth: "50",
    seatsCount: "2",
    features: [
      ALL_DEPARTMENTS_FEATURE,
      "Library, approvals, images included",
      "Add credit or video packs any time",
    ],
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Growth",
    tagline: "For teams that need most of the business covered.",
    priceMonthly: "$1,499",
    priceAnnual: "$14,990",
    priceAnnualMonthlyEquivalent: "$1,249",
    creditsPerMonth: "150",
    seatsCount: "10",
    features: [ALL_DEPARTMENTS_FEATURE, "Routines and 1,000+ integrations", "Custom agents"],
    highlighted: true,
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Scale",
    tagline: "For companies running every department at once.",
    priceMonthly: "$2,999",
    priceAnnual: "$29,990",
    priceAnnualMonthlyEquivalent: "$2,499",
    creditsPerMonth: "400",
    seatsCount: "20",
    features: [
      "Everything in Growth",
      "Video generation included",
      "Improvement engine and white glove onboarding",
    ],
    cta: "Start free trial",
    ctaHref: SIGNUP,
  },
  {
    name: "Enterprise",
    tagline: "Imagine a team running 24 hours a day.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    priceAnnualMonthlyEquivalent: "",
    creditsPerMonth: "Committed",
    seatsCount: "Unlimited",
    features: [
      "Committed credit volume",
      "Unlimited seats",
      "Everything in Scale",
      "Dedicated onboarding",
      "Bring your own model keys",
      "Security review and custom terms",
    ],
    cta: "Book a call",
    ctaHref: BOOK_ENTERPRISE,
  },
]

export const CREDIT_PACK = {
  name: "Credit pack",
  summary: "25 task credits, added to your current month. Available on every plan.",
  price: "$199",
}

export const VIDEO_PACK = {
  name: "Video pack",
  summary:
    "120 seconds of generated video, about 15 clips of 6 to 8 seconds. For Starter and Growth. Scale includes video.",
  price: "$79",
}

export interface CreditCostExample {
  label: string
  sublabel?: string
  cost: string
}

// "What things usually cost" scale table on the pricing page's credits explainer.
export const CREDIT_COST_EXAMPLES: CreditCostExample[] = [
  { label: "One finished file", sublabel: "A report, deck, sheet, or page", cost: "about 1 credit" },
  {
    label: "Two or three files from one brief",
    sublabel: "A plan plus the deck that presents it",
    cost: "3 to 6 credits",
  },
  {
    label: "A full package",
    sublabel: "Positioning, deck, launch plan, and campaign copy",
    cost: "7 to 18 credits",
  },
  { label: "Image", cost: "close to free" },
  { label: "Video clip, 6 to 8 seconds", cost: "about 1 credit" },
  { label: "Video clip with audio, 6 to 8 seconds", cost: "about 2 credits" },
]
