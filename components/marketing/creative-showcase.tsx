import { Section } from "@/components/marketing/section"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"

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

        <div className="flex flex-col gap-3">
          <MediaFrame
            src="/images/workforce/creative-gallery.webp"
            alt="A gallery of illustrative creative: SaaS product ads, social posts, video thumbnails, a product UI demo, and product edits across formats"
            aspect="3:2"
            className="object-top"
            sizes="(min-width: 1024px) 1120px, 100vw"
          />
          <IllustrativeCaption>
            Illustrative gallery — fake brands. The point is the range, not the authorship.
          </IllustrativeCaption>
        </div>
      </div>
    </Section>
  )
}
