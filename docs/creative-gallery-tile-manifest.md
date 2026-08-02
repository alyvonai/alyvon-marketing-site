# Creative Gallery (`/workforce/creative`) — Tile → MediaFrame Slot Manifest

Scope: the 11-tile static creative sample gallery plus its 2 motion/video tiles, all
live on the single page `app/workforce/creative/page.tsx` (`/workforce/creative`).
Page and wiring are already committed on this branch/PR — this manifest is the
one-row-per-tile reference for Engineering (or anyone editing this page later) to
see exactly which asset feeds which `MediaFrame` slot, in what aspect, with what
caption/alt requirements.

Grid mechanics: CSS multi-column masonry (`columns-1 sm:columns-2 lg:columns-3`),
each tile in a `break-inside-avoid` wrapper, DOM/tab order = table order below.
Static tiles use `<MediaFrame>` directly; the 2 video tiles use `<VideoTile>`
(poster `MediaFrame` + click-to-play `<video>`).

## Static tiles (11)

| # | Tile (source brand / concept) | File | `MediaFrameAspect` | Format label on tile | Caption | ICP |
|---|---|---|---|---|---|---|
| 01 | SaaS product ad — Ledgerly (finance automation) | `public/images/workforce/creative/tile-01-saas-ad-ledgerly-1x1.webp` | `1:1` | SAAS PRODUCT AD – 1:1 – META FEED | — | SaaS |
| 02 | SaaS product ad variant — Pathwise (workflow analytics) | `public/images/workforce/creative/tile-02-saas-ad-pathwise-4x5.webp` | `4:5` | SAAS PRODUCT AD – 4:5 – IG FEED | — | SaaS |
| 03 | Feature-launch graphic — Northlane (PM tool) | `public/images/workforce/creative/tile-03-feature-launch-northlane-16x9.webp` | `16:9` | FEATURE LAUNCH – 16:9 | — | SaaS |
| 04 | UI demo / dashboard shot — Orbit Metrics (analytics) | `public/images/workforce/creative/tile-04-ui-demo-orbit-metrics-16x9.webp` | `16:9` | SAAS UI DEMO – 16:9 | **"Product UI. Illustrative data."** | SaaS |
| 05 | DTC/ecom social post — Solstice Supply Co. (candles) | `public/images/workforce/creative/tile-05-dtc-social-solstice-4x5.webp` | `4:5` | DTC SOCIAL – 4:5 | — | DTC/ecom |
| 06 | Campaign key visual — Ember & Co. for Halcyon Air (agency) | `public/images/workforce/creative/tile-06-campaign-key-visual-halcyon-16x9.webp` | `16:9` | CAMPAIGN KEY VISUAL – 16:9 | — | Agencies |
| 07 | Case-study carousel tile — Ember & Co. for Halcyon Air | `public/images/workforce/creative/tile-07-carousel-halcyon-1x1.webp` | `1:1` | CAROUSEL TILE – 1:1 | — | Agencies |
| 08 | "Book a Consult" ad — Cobalt Advisory (consulting) | `public/images/workforce/creative/tile-08-consult-ad-cobalt-1200x627.webp` | `ad` (1200×627) | BOOK-A-CONSULT AD – 1200×627 | — | Professional services |
| 09 | LinkedIn credibility post — Cobalt Advisory | `public/images/workforce/creative/tile-09-linkedin-post-cobalt-1200x627.webp` | `ad` (1200×627) | LINKEDIN POST – 1200×627 | — | Professional services |
| 10 | Nano-banana photoreal product-in-scene composite (candle) | `public/images/workforce/creative/tile-10-photoreal-composite-1x1.webp` | `1:1` | NANO-BANANA EDIT – PHOTOREAL COMPOSITE – 1:1 | — | Range/quality showcase |
| 11 | Nano-banana before/after background-swap — Fleet Run Co. | `public/images/workforce/creative/tile-11-before-after-fleetrun-4x5.webp` | `4:5` | NANO-BANANA EDIT – BEFORE/AFTER – 4:5 | — | Range/quality showcase |

## Motion/video tiles (2)

| Tile (source brand / concept) | Video file | Poster file | `MediaFrameAspect` | Interaction | Caption |
|---|---|---|---|---|---|
| Story/Reel — Ember & Co. (fake DTC skincare) | `public/images/workforce/creative/video-story-reel-ember-9x16.mp4` | `public/images/workforce/creative/video-story-reel-ember-9x16-poster.webp` | `9:16` | Click-to-play (`VideoTile`): poster `MediaFrame` + play-affordance overlay → `<video controls autoPlay playsInline>` on click | — |
| Motion ad — "Orbital" (fake SaaS) | `public/images/workforce/creative/video-motion-ad-orbital-16x9.mp4` | `public/images/workforce/creative/video-motion-ad-orbital-16x9-poster.webp` | `16:9` | Click-to-play (`VideoTile`), same pattern | Beat 3 of the motion contains an in-video "Product UI. Illustrative data." caption baked into the frame |

## Implementation notes for Engineering

- `MediaFrameAspect` gained two additive variants for this integration: `9:16`
  (vertical Reel/Story video posters) and `ad` (1200×627 static ad units) —
  both added in `components/ui/media-frame.tsx` alongside the pre-existing
  `16:9 / 1:1 / 4:3 / 16:10 / 3:2 / 4:5` set. No existing variant was changed.
- All 11 static tiles render through the shared `<MediaFrame>` component with
  `sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"` for
  responsive `next/image` loading inside the masonry grid.
- Both video tiles use the new `<VideoTile>` client component
  (`app/workforce/creative/video-tile.tsx`): renders the poster via
  `MediaFrame` at rest (so it matches the static tiles visually and carries
  the same lazy-load/aspect behavior), swaps to a native `<video>` element
  with `controls autoPlay playsInline` on click. No captions track is
  supplied for either video yet — flagged in-code for Content/Product to
  supply one before this ships with audio narration.
- Only Tile 04 (Orbit Metrics UI demo) carries the "Product UI. Illustrative
  data." caption via `<IllustrativeCaption>`, matching brand-canon rules for
  any tile depicting a mocked product UI. No other static tile depicts a
  product UI, so no other caption is required.
- Every filename referenced in `app/workforce/creative/page.tsx` was
  cross-checked against the committed files under
  `public/images/workforce/creative/` — all 13 assets (11 stills + 2
  video/poster pairs) resolve correctly; nothing is missing or misnamed.
