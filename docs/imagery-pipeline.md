# Imagery pipeline -- engineering reference

Source: `alyvon-imagery-ui-icon-spec.md` (Sections 2, 3, 7, 10).

This covers the imagery-infrastructure work package delivered in this PR. It
does **not** cover page-by-page image placement (brief WP6/WP7) -- that work
is explicitly **blocked pending Creative's asset ratification** (spec
Section 10) and is out of scope here. Everything below was built and verified
against placeholder SVG assets only.

## 1. Components

- **`components/ui/product-shot.tsx` (`<ProductShot>`)** -- the Tier 1
  "product truth" wrapper for real, unretouched screenshots: browser chrome
  bar (three dots + a blank address pill, no fabricated URL text), a subtle
  drop shadow (`rgba(11,13,17,0.25)`, the RGB decomposition of
  `--bg-inverse`), and an `illustrative` flag that renders the shared
  `ILLUSTRATIVE_CAPTION` disclaimer for any screenshot carrying demo-workspace
  data. Supports `tier1Hero` (16:10) and `tier3Device` (16:9) aspects.
- **`components/ui/media-frame.tsx` (`<MediaFrame>`)** -- extended
  additively with `16:10`, `3:2`, and `4:5` aspects for Tier 1 alt-use and
  Tier 2 section-break art, alongside the existing `16:9`/`1:1`/`4:3`. No
  shadow or frame chrome was added; aspect ratio remains its only axis of
  variation.
- **`lib/imagery.ts`** -- single source of truth for the four canonical
  aspect ratios, OG dimensions (1200x630), weight budgets, the disclaimer
  string, and the 1440px rendered-width / 2880px source-width contract.

## 2. Delivery pipeline (`next.config.mjs`)

`images.formats` is set to AVIF-first with WebP fallback (Next.js negotiates
by `Accept` header). `deviceSizes` tops out at 2880px, matching the 2x-source
cap for a 1440px max rendered width. Every `ProductShot`/`MediaFrame`
instance renders inside a fixed `aspect-*` wrapper before the image mounts,
giving zero CLS regardless of actual asset dimensions. Weight budgets (hero
< 200KB, section < 120KB, Tier 4 SVG < 30KB) are defined as constants for
manual/CI checks; no automated build-time enforcement script exists yet --
flagged as a follow-up, not silently skipped.

## 3. Dark-mode guard (`app/globals.css`)

The site applies no `.dark` class today. A forward-looking selector
(`.dark .product-shot, .dark [data-imagery-tier]`) neutralizes any future
dark theme so light-background screenshots and composed art sit on a neutral
card instead of being auto-inverted.

## 4. Placeholder assets

Five brand-token-only SVGs in `public/images/placeholders/` (Tier 1 hero
16:10, Tier 2 section 3:2/4:5, Tier 3 device 16:9, OG 1200x630), each clearly
labeled with tier and pixel dimensions so none can be mistaken for a real
asset. Previewed at the internal `/dev/imagery` route (noindexed, unlinked).

## 5. Out of scope

Page-by-page placement (WP6/WP7) is **not** part of this PR and remains
blocked until Creative ratifies real assets per spec Section 10.
