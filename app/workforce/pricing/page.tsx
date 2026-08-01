import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { PricingCard } from "@/components/marketing/pricing-card"
import { CTA } from "@/lib/site"
import { WORKFORCE_PLANS, CREATIVE_ADDON } from "@/lib/pricing"
import { faqSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Workforce pricing - Alyvon",
  description:
    "Alyvon Workforce pricing: Starter at $299 (core routing + 2 departments), Growth at $899 (+7), Scale at $2,400 (all 16), and Enterprise. Priced around deliverables, not seats. Creative is a paid add-on.",
  path: "/workforce/pricing",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Workforce", path: "/workforce" },
  { name: "Pricing", path: "/workforce/pricing" },
]

const FAQ_ITEMS = [
  {
    q: "What counts as a deliverable?",
    a: "A deliverable is one finished, operator-facing file returned to your Library — a document, spreadsheet, deck, code, or a zipped project. Internal intermediate steps don’t count against your allowance.",
  },
  {
    q: "How does department selection work?",
    a: "Starter includes Alyvon core routing plus 2 selected departments; Growth plus 7. Scale and Enterprise include the full Workforce — all 16 departments. Every seat on your plan can brief any activated department.",
  },
  {
    q: "What happens if I go over my deliverables?",
    a: "You’re billed per additional deliverable at your plan’s overage rate: $9 on Starter, $7 on Growth, $5 on Scale. Enterprise overage is negotiated.",
  },
  {
    q: "Is Creative included?",
    a: "Creative is a paid add-on on every plan. Media generation and creative QA carry real incremental cost, so it’s priced as its own capacity line rather than bundled into a base plan.",
  },
  {
    q: "How does the free trial work?",
    a: "The trial runs 14 days or 10 deliverables, whichever comes first. No credit card is required to start.",
  },
  {
    q: "Is annual cheaper?",
    a: "Yes. Annual billing is priced at ten months for twelve — effectively two months free versus paying monthly.",
  },
]

export default function WorkforcePricingPage() {
  return (
    <>
      <Hero
        eyebrow="Workforce pricing"
        heading="Priced around deliverables, not seats."
        subhead="Pick a plan by how much finished work you need and how many departments you want to activate. Start with a 14-day free trial — no credit card."
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "workforce_pricing_hero" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      {/* Plan cards */}
      <Section tone="surface">
        <div className="grid gap-6 lg:grid-cols-4">
          {WORKFORCE_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Section>

      {/* Department selection */}
      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">How department selection works</h2>
          <p className="text-body-l text-text-secondary">
            Starter includes Alyvon core routing plus 2 selected departments. Growth includes Alyvon
            core routing plus 7 selected departments. Scale and Enterprise include the full
            Workforce — all 16 departments. Creative carries separate add-on pricing where
            applicable.
          </p>
          <p className="text-body text-text-tertiary">
            Every seat on your plan can brief any department you’ve activated. Upgrading unlocks more
            departments for every seat, not one department at a time.
          </p>
        </div>
      </Section>

      {/* Creative add-on */}
      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">{CREATIVE_ADDON.name}</h2>
          <p className="text-body-l text-text-secondary">{CREATIVE_ADDON.summary}</p>
        </div>
      </Section>

      {/* Deliverables + overage */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">What a deliverable is</h2>
            <p className="text-body-l text-text-secondary">
              A deliverable is one finished, ready-to-use file returned to your Library — a document,
              spreadsheet, deck, code, or a zipped project. Internal intermediate steps a Director
              uses along the way don’t count against your monthly allowance.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Overage</h2>
            <p className="text-body-l text-text-secondary">
              Go past your monthly deliverables and you’re billed per additional deliverable at your
              plan rate — $9 on Starter, $7 on Growth, $5 on Scale, negotiated on Enterprise. No
              surprise tier jumps.
            </p>
          </div>
        </div>
      </Section>

      {/* Trial rules */}
      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">The free trial</h2>
          <p className="text-body-l text-text-secondary">
            Every plan starts with a 14-day free trial, capped at 10 deliverables — whichever comes
            first. No credit card to start, and you can cancel anytime.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="canvas">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Start with the plan that fits the work."
        subhead={CTA.workforce.micro}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "workforce_pricing_final" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd data={[faqSchema(FAQ_ITEMS), breadcrumbSchema(crumbs)]} />

      <MobileCtaBar placement="workforce_pricing_sticky" />
    </>
  )
}
