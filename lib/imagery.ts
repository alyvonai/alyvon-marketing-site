// Imagery pipeline constants -- Alyvon Imagery, UI, and Icon Specification
// (alyvon-imagery-ui-icon-spec.md), Sections 2, 3, and 7.
export type ImageTier = "tier1" | "tier2" | "tier3" | "tier4" | "og"

export const ASPECT_RATIOS = {
  tier1Hero: "16 / 10",
  tier2Desktop: "3 / 2",
  tier2Mobile: "4 / 5",
  tier3Device: "16 / 9",
  og: "1200 / 630",
} as const

export const OG_DIMENSIONS = { width: 1200, height: 630 } as const

export const WEIGHT_BUDGET_BYTES = {
  hero: 200 * 1024,
  section: 120 * 1024,
  tier4Svg: 30 * 1024,
} as const

export const ILLUSTRATIVE_CAPTION = "Product interface. Data shown is illustrative."

export const MAX_RENDERED_WIDTH_PX = 1440
export const MAX_SOURCE_WIDTH_PX = MAX_RENDERED_WIDTH_PX * 2
