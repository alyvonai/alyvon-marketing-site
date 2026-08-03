// Internal QA/demo route for the imagery pipeline (imagery spec Sections 2, 3, 7).
// Not linked from any nav, noindexed, and not part of the marketing site's page set --
// this exists purely so engineering/creative can eyeball ProductShot, MediaFrame, the
// four canonical aspect ratios, and the illustrative-data caption against real brand
// tokens before Creative's real assets are ratified (spec Section 10).
import type { Metadata } from "next"
import { ProductShot } from "@/components/ui/product-shot"
import { MediaFrame } from "@/components/ui/media-frame"
import { WEIGHT_BUDGET_BYTES, MAX_RENDERED_WIDTH_PX } from "@/lib/imagery"

export const metadata: Metadata = {
  title: "Imagery QA -- internal",
  robots: { index: false, follow: false },
}

const PLACEHOLDER = {
  tier1: "/images/placeholders/tier1-hero-16x10.svg",
  tier2Desktop: "/images/placeholders/tier2-section-3x2.svg",
  tier2Mobile: "/images/placeholders/tier2-section-4x5.svg",
  tier3: "/images/placeholders/tier3-device-16x9.svg",
  og: "/images/placeholders/og-1200x630.svg",
}

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-b border-border-subtle pb-12">
      <div>
        <h2 className="text-heading-s font-semibold text-text-primary">{title}</h2>
        {note ? <p className="mt-1 text-body-s text-text-secondary">{note}</p> : null}
      </div>
      {children}
    </section>
  )
}

export default function ImageryQaPage() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-heading-l font-semibold text-text-primary">Imagery pipeline -- internal QA</h1>
        <p className="max-w-[640px] text-body-s text-text-secondary">
          Renders every imagery component against brand-token placeholder assets. Not part of the
          public site (noindexed, unlinked). Real Creative assets swap in per-instance once
          ratified -- see docs/imagery-pipeline.md.
        </p>
        <p className="text-body-s text-text-tertiary">
          Budgets: hero &lt; {WEIGHT_BUDGET_BYTES.hero / 1024}KB, section &lt; {WEIGHT_BUDGET_BYTES.section / 1024}KB,
          Tier 4 SVG &lt; {WEIGHT_BUDGET_BYTES.tier4Svg / 1024}KB after conversion. Max rendered width{" "}
          {MAX_RENDERED_WIDTH_PX}px.
        </p>
      </header>

      <Section title="ProductShot -- Tier 1, with caption" note="Hero use: priority load, blur placeholder, optional descriptive caption.">
        <div className="max-w-[720px]">
          <ProductShot
            src={PLACEHOLDER.tier1}
            alt="Placeholder product interface screenshot"
            aspect="tier1Hero"
            priority
            caption="Live conversation view"
          />
        </div>
      </Section>

      <Section title="ProductShot -- Tier 1, no caption" note="Caption renders only if explicitly passed.">
        <div className="max-w-[720px]">
          <ProductShot src={PLACEHOLDER.tier1} alt="Placeholder product interface screenshot" aspect="tier1Hero" />
        </div>
      </Section>

      <Section title="ProductShot -- Tier 3 device aspect (16:9)">
        <div className="max-w-[560px]">
          <ProductShot src={PLACEHOLDER.tier3} alt="Placeholder device-context screenshot" aspect="tier3Device" />
        </div>
      </Section>

      <Section title="MediaFrame -- Tier 2 section break, 3:2 desktop / 4:5 mobile">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <MediaFrame src={PLACEHOLDER.tier2Desktop} alt="Placeholder section-break art, desktop crop" aspect="3:2" />
          <div className="max-w-[300px]">
            <MediaFrame src={PLACEHOLDER.tier2Mobile} alt="Placeholder section-break art, mobile crop" aspect="4:5" />
          </div>
        </div>
      </Section>

      <Section title="MediaFrame -- 16:10 (Tier 1 alt use)">
        <div className="max-w-[560px]">
          <MediaFrame src={PLACEHOLDER.tier1} alt="Placeholder, 16:10 alt use" aspect="16:10" />
        </div>
      </Section>

      <Section title="OG image -- 1200x630">
        <div className="max-w-[600px] overflow-hidden rounded-card border border-border-subtle">
          {/* Plain img, not next/image: OG assets are consumed by crawlers, not the client pipeline. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PLACEHOLDER.og} alt="Placeholder Open Graph share image" className="w-full" />
        </div>
      </Section>
    </main>
  )
}
