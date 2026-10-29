// The founding partner offer: the only published pricing while the platform opens to its
// first cohort. This module is the ONLY place the price, term, free period, usage or cohort
// facts are written; pages read from here (see `__tests__/claims.test.ts`).
//
// Deliberately no live "spots remaining" count: only publish one if it is kept accurate.

export const FOUNDING = {
  cohortName: "The Founders’ Dozen",
  cohortSize: 12,
  price: "$499",
  priceSuffix: "per month",
  lockedMonths: 12,
  freeDays: 30,
  /** Included usage: monthly task credits, or the partner's own model keys. */
  credits: 75,
  /** ISO date applications close; shown as e.g. "December 15". */
  closes: "2026-12-15",
} as const

const CLOSE_DATE = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: "UTC" })

/** "December 15" */
export const FOUNDING_CLOSES_LABEL = CLOSE_DATE.format(new Date(FOUNDING.closes))

/** "$499/mo" */
export const FOUNDING_RATE_SHORT = `${FOUNDING.price}/mo`

/** "75 credits a month, or bring your own model keys" */
export const FOUNDING_USAGE = `${FOUNDING.credits} credits a month, or bring your own model keys`
