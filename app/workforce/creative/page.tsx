import { MediaFrame } from "@/components/ui/media-frame";
import { IllustrativeCaption } from "@/components/ui/illustrative-caption";
import { buildMetadata } from "@/lib/metadata";
import { VideoTile } from "./video-tile";

export const metadata = buildMetadata({
  title: "Creative — Workforce | Alyvon",
  description:
    "A sample of finished creative-asset output from Alyvon's Brand and Content specialists — key art, social, paid ad units, and motion.",
  path: "/workforce/creative",
});

const BASE = "/images/workforce/creative";

type Ratio = "1x1" | "4x5" | "16x9" | "1200x627";

function aspectFromRatio(ratio: Ratio) {
  switch (ratio) {
    case "1x1":
      return "1:1" as const;
    case "4x5":
      return "4:5" as const;
    case "16x9":
      return "16:9" as const;
    case "1200x627":
      return "ad" as const;
  }
}

interface Tile {
  id: string;
  file: string; // filename only, resolved against BASE
  ratio: Ratio;
  alt: string;
  caption?: string;
}

const tiles: Tile[] = [
  { id: "tile-01", file: "tile-01-saas-ad-ledgerly-1x1.webp", ratio: "1x1", alt: "Ledgerly SaaS paid ad — square format" },
  { id: "tile-02", file: "tile-02-saas-ad-pathwise-4x5.webp", ratio: "4x5", alt: "Pathwise SaaS paid ad — portrait format" },
  { id: "tile-03", file: "tile-03-feature-launch-northlane-16x9.webp", ratio: "16x9", alt: "Northlane feature launch key visual" },
  {
    id: "tile-04",
    file: "tile-04-ui-demo-orbit-metrics-16x9.webp",
    ratio: "16x9",
    alt: "Orbit Metrics product UI demo mockup",
    caption: "Product UI. Data shown is illustrative.",
  },
  { id: "tile-05", file: "tile-05-dtc-social-solstice-4x5.webp", ratio: "4x5", alt: "Solstice DTC social post" },
  { id: "tile-06", file: "tile-06-campaign-key-visual-halcyon-16x9.webp", ratio: "16x9", alt: "Halcyon campaign key visual" },
  { id: "tile-07", file: "tile-07-carousel-halcyon-1x1.webp", ratio: "1x1", alt: "Halcyon social carousel tile" },
  { id: "tile-08", file: "tile-08-consult-ad-cobalt-1200x627.webp", ratio: "1200x627", alt: "Cobalt Consulting paid ad unit" },
  { id: "tile-09", file: "tile-09-linkedin-post-cobalt-1200x627.webp", ratio: "1200x627", alt: "Cobalt Consulting LinkedIn post" },
  { id: "tile-10", file: "tile-10-photoreal-composite-1x1.webp", ratio: "1x1", alt: "Photoreal product composite" },
  { id: "tile-11", file: "tile-11-before-after-fleetrun-4x5.webp", ratio: "4x5", alt: "FleetRun before/after comparison" },
];

export default function CreativePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-[#AEA8A8]">Workforce</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Creative</h1>
        <p className="mt-4 text-base text-[#AEA8A8]">
          A sample of finished creative assets produced by Alyvon&apos;s Brand and Content specialists — key
          art, social, ad units, and motion.
        </p>
      </header>

      {/*
        CSS-only masonry: native multi-column layout.
        - `columns-*` lets each item keep its own intrinsic aspect ratio (set inside
          MediaFrame) with no manual row-span math and no JS measuring/library.
        - `break-inside-avoid` on every item stops a tile splitting across columns.
        - Trade-off vs a JS masonry lib: items fill down each column before wrapping
          to the next (col 1 top-to-bottom, then col 2, ...) rather than strict
          left-to-right reading order. DOM order — and so screen-reader/tab order —
          is unaffected either way, since that follows source order, not the
          column-fill visual order.
        - `grid-template-rows: masonry` would remove even that visual trade-off, but
          it isn't at baseline across evergreen browsers yet, so it's not used here.
      */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {tiles.map((tile) => (
          <div key={tile.id} className="mb-6 break-inside-avoid">
            <MediaFrame
              src={`${BASE}/${tile.file}`}
              alt={tile.alt}
              aspect={aspectFromRatio(tile.ratio)}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            {tile.caption ? <IllustrativeCaption>{tile.caption}</IllustrativeCaption> : null}
          </div>
        ))}

        <div className="mb-6 break-inside-avoid">
          <VideoTile
            videoSrc={`${BASE}/video-story-reel-ember-9x16.mp4`}
            posterSrc={`${BASE}/video-story-reel-ember-9x16-poster.webp`}
            aspect="9:16"
            title="Story reel — Ember"
          />
        </div>

        <div className="mb-6 break-inside-avoid">
          <VideoTile
            videoSrc={`${BASE}/video-motion-ad-orbital-16x9.mp4`}
            posterSrc={`${BASE}/video-motion-ad-orbital-16x9-poster.webp`}
            aspect="16:9"
            title="Motion ad — Orbital"
          />
        </div>
      </div>
    </main>
  );
}
