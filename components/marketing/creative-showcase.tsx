import { Section } from "@/components/marketing/section"
import { MediaFrame, type MediaFrameAspect } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { CreativeVideoTile } from "@/components/marketing/creative-video-tile"

// Creative-only showcase (rendered for the /workforce/creative group page): the output
// types, a "right sizes and formats" proof strip, and the example gallery. Gallery uses
// fake brands on purpose — the point is the range and quality, not authorship.
const OUTPUT_TYPES = [
  "Ads — static + video",
  "Social posts — feed, story, reel",
  "Launch graphics",
  "Product visuals & SaaS UI",
  "Photoreal product edits",
]

const FORMATS = ["1:1", "4:5", "9:16", "16:9", "1200×627", "300×250"]

// The sample gallery. Each entry maps to one committed asset under
// public/images/workforce/creative/ (see docs/creative-gallery-tile-manifest.md).
// Order is tuned for a balanced 3-column masonry, not grouped by ICP.
type GalleryItem =
  | { kind: "image"; src: string; alt: string; aspect: MediaFrameAspect; label: string; caption?: string }
  | { kind: "video"; videoSrc: string; posterSrc: string; aspect: "9:16" | "16:9"; title: string; label: string }

const B = "/images/workforce/creative"

const GALLERY: GalleryItem[] = [
  { kind: "image", src: `${B}/tile-01-saas-ad-ledgerly-1x1.webp`, alt: "Paid-social product ad for a fictional finance-automation SaaS, Ledgerly", aspect: "1:1", label: "SaaS product ad · 1:1 · Meta feed" },
  { kind: "video", videoSrc: `${B}/video-story-reel-ember-9x16.mp4`, posterSrc: `${B}/video-story-reel-ember-9x16-poster.webp`, aspect: "9:16", title: "Vertical story/reel spot for a fictional skincare brand, Ember & Co.", label: "Story / Reel · 9:16 · video" },
  { kind: "image", src: `${B}/tile-03-feature-launch-northlane-16x9.webp`, alt: "Feature-launch announcement graphic for a fictional PM tool, Northlane", aspect: "16:9", label: "Feature launch · 16:9" },
  { kind: "image", src: `${B}/tile-05-dtc-social-solstice-4x5.webp`, alt: "DTC social post for a fictional candle brand, Solstice Supply Co.", aspect: "4:5", label: "DTC social · 4:5" },
  { kind: "image", src: `${B}/tile-06-campaign-key-visual-halcyon-16x9.webp`, alt: "Campaign key visual by a fictional agency for its client, Halcyon Air", aspect: "16:9", label: "Agency campaign key visual · 16:9" },
  { kind: "image", src: `${B}/tile-08-consult-ad-cobalt-1200x627.webp`, alt: "“Book a consult” ad for a fictional consultancy, Cobalt Advisory", aspect: "ad", label: "Book-a-consult ad · 1200×627" },
  { kind: "image", src: `${B}/tile-02-saas-ad-pathwise-4x5.webp`, alt: "Product ad variant for a fictional workflow-analytics SaaS, Pathwise", aspect: "4:5", label: "SaaS product ad · 4:5 · IG feed" },
  { kind: "image", src: `${B}/tile-10-photoreal-composite-1x1.webp`, alt: "Photoreal AI product-in-scene composite of a candle in a styled setting", aspect: "1:1", label: "Photoreal composite edit · 1:1" },
  { kind: "video", videoSrc: `${B}/video-motion-ad-orbital-16x9.mp4`, posterSrc: `${B}/video-motion-ad-orbital-16x9-poster.webp`, aspect: "16:9", title: "Motion ad for a fictional SaaS, Orbital", label: "Motion ad · 16:9 · video" },
  { kind: "image", src: `${B}/tile-07-carousel-halcyon-1x1.webp`, alt: "Case-study carousel tile by a fictional agency for its client, Halcyon Air", aspect: "1:1", label: "Case-study carousel · 1:1" },
  { kind: "image", src: `${B}/tile-04-ui-demo-orbit-metrics-16x9.webp`, alt: "Clean SaaS dashboard UI demo for a fictional analytics product, Orbit Metrics", aspect: "16:9", label: "SaaS UI demo · 16:9", caption: "Product UI. Illustrative data." },
  { kind: "image", src: `${B}/tile-09-linkedin-post-cobalt-1200x627.webp`, alt: "LinkedIn single-image credibility post for a fictional consultancy, Cobalt Advisory", aspect: "ad", label: "LinkedIn post · 1200×627" },
  { kind: "image", src: `${B}/tile-11-before-after-fleetrun-4x5.webp`, alt: "Before/after background-swap product edit for a fictional brand, Fleet Run Co.", aspect: "4:5", label: "Before/after product edit · 4:5" },
]

const TILE_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"

export function CreativeShowcase() {
  return (
    <Section tone="canvas">
      <div className="flex flex-col gap-8">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">What Creative produces</h2>
          <p className="text-body-l text-text-secondary">
            Ads and social posts, in images and video — plus launch graphics, product visuals, and
            photoreal product edits. Whether you run a SaaS product, an agency, or a services firm,
            it looks like your brand made it.
          </p>
          <div className="flex flex-wrap gap-2">
            {OUTPUT_TYPES.map((t) => (
              <span
                key={t}
                className="rounded-card border border-border-subtle bg-surface px-3 py-1.5 text-body-s text-text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-card border border-border-subtle bg-surface p-6">
          <span className="font-mono text-label uppercase text-accent-strong">
            Trained on the right sizes and formats
          </span>
          <p className="text-body text-text-secondary">
            Every piece comes back in the correct dimensions for where it runs — so nothing needs
            re-cropping before it ships.
          </p>
          <div className="flex flex-wrap gap-2">
            {FORMATS.map((f) => (
              <span
                key={f}
                className="rounded-card bg-accent-wash px-2.5 py-1 font-mono text-label uppercase text-accent-strong"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Sample gallery — CSS masonry so mixed aspect ratios pack naturally. */}
        <div className="[column-gap:1rem] columns-1 sm:columns-2 lg:columns-3">
          {GALLERY.map((item) => (
            <figure
              key={item.kind === "video" ? item.videoSrc : item.src}
              className="mb-4 flex break-inside-avoid flex-col gap-2"
            >
              {item.kind === "video" ? (
                <CreativeVideoTile
                  videoSrc={item.videoSrc}
                  posterSrc={item.posterSrc}
                  aspect={item.aspect}
                  title={item.title}
                />
              ) : (
                <MediaFrame src={item.src} alt={item.alt} aspect={item.aspect} sizes={TILE_SIZES} />
              )}
              <figcaption className="font-mono text-label uppercase text-text-tertiary">
                {item.label}
              </figcaption>
              {item.kind === "image" && item.caption ? (
                <IllustrativeCaption>{item.caption}</IllustrativeCaption>
              ) : null}
            </figure>
          ))}
        </div>

        <IllustrativeCaption>
          Illustrative gallery — fake brands. The point is the range, not the authorship.
        </IllustrativeCaption>
      </div>
    </Section>
  )
}
