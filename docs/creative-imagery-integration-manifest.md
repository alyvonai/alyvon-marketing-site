# Creative Imagery Integration — Asset → Slot Manifest

Per the Creative → Engineering handoff (5 upstream Creative cards), this PR exports every
finished Creative deliverable to WebP (≤2880px wide, hero ≤200KB / section ≤120KB per
`lib/imagery.ts`), and wires each into an existing `MediaFrame` slot — no page layout changes,
aspect-ratio-correct crops only. Two new `MediaFrameAspect` variants (`9:16`, `ad` for 1200×627)
were added additively to `components/ui/media-frame.tsx`, consistent with that file's own
"additive only" convention. One new page, `/workforce/creative`, was built to host the gallery
(it did not exist before this PR).

Status: scaffold commit. Assets and page wiring land in follow-up commits on this same branch/PR.

## Manifest (final)

| Asset (source) | Exported file | Page / slot |
|---|---|---|
| CRM (Marketing Hub) | `public/images/marketing-hub/crm-contact-record.webp` | `/marketing-hub/crm` — MediaFrame 4:3, "Product UI. Illustrative data." caption |
| Automations (Marketing Hub) | `public/images/marketing-hub/automations-flow.webp` | `/marketing-hub/automations` — MediaFrame 4:3, illustrative caption |
| AI Employee (Marketing Hub) | `public/images/marketing-hub/ai-employee-chat.webp` | `/marketing-hub/ai-employee` — MediaFrame 4:5, illustrative caption |
| Overview (Marketing Hub) | `public/images/marketing-hub/overview-loop-diagram.webp` | `/marketing-hub` — MediaFrame 16:9 hero, illustrative caption |
| Analytics — Four-Part System | `public/images/analytics/four-part-system-diagram.webp` | `/analytics` — MediaFrame 16:9 hero |
| Analytics — Dashboard/Reporting | `public/images/analytics/dashboard-reporting-layer.webp` | `/analytics` — MediaFrame 4:3 section, illustrative caption |
| Analytics — Custom AI Deployment | `public/images/analytics/custom-ai-deployment-diagram.webp` | `/analytics/custom-ai` — MediaFrame 4:3 hero |
| Workforce Group — Strategy & Leadership | `public/images/workforce/groups/strategy-leadership.webp` | `/workforce` — MediaFrame 4:3 section |
| Workforce Group — Customer & People | `public/images/workforce/groups/customer-people.webp` | `/workforce` — MediaFrame 4:3 section |
| Workforce Index — Finished-File Still Life | `public/images/workforce/finished-file-still-life.webp` | `/workforce` — MediaFrame 4:3 section |
| Workforce Group — Brand & Content | `public/images/workforce/groups/brand-content.webp` | `/workforce/brand` and `/workforce/content` — MediaFrame 4:3 section |
| Workforce Group — Marketing & Sales | `public/images/workforce/groups/marketing-sales.webp` | `/workforce/sales-development` and `/workforce/marketing-ops` — MediaFrame 4:3 section |
| Workforce Group — Product & Engineering | `public/images/workforce/groups/product-engineering.webp` | `/workforce/engineering` — MediaFrame 4:3 section |
| Gallery Tile 01 (Ledgerly, 1:1) | `public/images/workforce/creative/tile-01-saas-ad-ledgerly-1x1.webp` | `/workforce/creative` masonry |
| Gallery Tile 02 (Pathwise, 4:5) | `public/images/workforce/creative/tile-02-saas-ad-pathwise-4x5.webp` | `/workforce/creative` masonry |
| Gallery Tile 03 (Northlane, 16:9) | `public/images/workforce/creative/tile-03-feature-launch-northlane-16x9.webp` | `/workforce/creative` masonry |
| Gallery Tile 04 (Orbit Metrics, 16:9) | `public/images/workforce/creative/tile-04-ui-demo-orbit-metrics-16x9.webp` | `/workforce/creative` masonry, illustrative caption |
| Gallery Tile 05 (Solstice, 4:5) | `public/images/workforce/creative/tile-05-dtc-social-solstice-4x5.webp` | `/workforce/creative` masonry |
| Gallery Tile 06 (Halcyon Air campaign, 16:9) | `public/images/workforce/creative/tile-06-campaign-key-visual-halcyon-16x9.webp` | `/workforce/creative` masonry |
| Gallery Tile 07 (Halcyon Air carousel, 1:1) | `public/images/workforce/creative/tile-07-carousel-halcyon-1x1.webp` | `/workforce/creative` masonry |
| Gallery Tile 08 (Cobalt consult ad, 1200×627) | `public/images/workforce/creative/tile-08-consult-ad-cobalt-1200x627.webp` | `/workforce/creative` masonry, `ad` aspect |
| Gallery Tile 09 (Cobalt LinkedIn, 1200×627) | `public/images/workforce/creative/tile-09-linkedin-post-cobalt-1200x627.webp` | `/workforce/creative` masonry, `ad` aspect |
| Gallery Tile 10 (nano-banana photoreal, 1:1) | `public/images/workforce/creative/tile-10-photoreal-composite-1x1.webp` | `/workforce/creative` masonry |
| Gallery Tile 11 (nano-banana before/after, 4:5) | `public/images/workforce/creative/tile-11-before-after-fleetrun-4x5.webp` | `/workforce/creative` masonry |
| Video — Ember & Co Story/Reel (9:16) | `public/images/workforce/creative/video-story-reel-ember-9x16.mp4` + poster `video-story-reel-ember-9x16-poster.webp` | `/workforce/creative` masonry, video MediaFrame slot, `9:16` aspect, play affordance on poster |
| Video — Orbital Motion Ad (16:9) | `public/images/workforce/creative/video-motion-ad-orbital-16x9.mp4` + poster `video-motion-ad-orbital-16x9-poster.webp` | `/workforce/creative` masonry, video MediaFrame slot, play affordance on poster |
