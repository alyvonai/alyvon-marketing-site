import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { BookingCta } from "@/components/marketing/booking-cta"
import { CTA } from "@/lib/site"
import { faqSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Marketing Hub pricing - Alyvon",
  description:
    "Marketing Hub pricing depends on CRM setup, automation volume, AI Employee scope, and the systems you need connected. Book a walkthrough to scope it.",
  path: "/marketing-hub/pricing",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Hub", path: "/marketing-hub" },
  { name: "Pricing", path: "/marketing-hub/pricing" },
]

const INCLUDED = [
  "CRM setup and data model for your pipeline",
  "Automation build for your funnel’s key events",
  "AI Employee trained on your approved knowledge base",
  "Integrations to the systems you already run",
  "Consent, quiet-hours, and opt-out configuration",
]

const ENGAGEMENTS = [
  {
    name: "Launch",
    copy: "Stand up the CRM, the core automations, and a scoped AI Employee, connected to your existing tools.",
  },
  {
    name: "Operate",
    copy: "Run and tune the system month to month as volume grows and new events and segments come online.",
  },
  {
    name: "Migrate",
    copy: "Move off a patchwork of tools — or extend an existing GoHighLevel setup — into one operating layer.",
  },
]

const FAQ_ITEMS = [
  {
    q: "How is Marketing Hub priced?",
    a: "Pricing depends on CRM setup, automation volume, AI Employee scope, and the systems you need connected. We scope it with you on a walkthrough rather than list a one-size number.",
  },
  {
    q: "Is there a setup step?",
    a: "Yes. Setup covers the CRM data model, the automation build, and training the AI Employee on your approved knowledge base and integrations.",
  },
  {
    q: "Do you work with our existing GoHighLevel?",
    a: "Yes. Where you already run GoHighLevel we connect to and extend it rather than forcing a rip-and-replace.",
  },
]

export default function MarketingHubPricingPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub pricing"
        heading="Scoped to your setup, not a one-size number."
        subhead="Marketing Hub pricing depends on CRM setup, automation volume, AI Employee scope, and the systems you need connected. Book a walkthrough and we’ll scope it with you."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="mh_pricing_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">What’s included</h2>
          <ul className="flex max-w-[720px] list-disc flex-col gap-2 pl-5 text-body-l text-text-secondary marker:text-text-tertiary">
            {INCLUDED.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Engagement shapes</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ENGAGEMENTS.map((e) => (
              <Card key={e.name}>
                <CardHeader>
                  <CardTitle className="text-body-l">{e.name}</CardTitle>
                  <CardDescription>{e.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Setup and integration</h2>
          <p className="text-body-l text-text-secondary">
            Most of the value is in the setup: modeling your pipeline, building automations for your
            real events, training the AI Employee, and connecting your tools. We scope that work on
            the walkthrough so the number reflects your systems, not a template.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Book a Marketing Hub walkthrough."
        subhead="We’ll map it to your funnel and scope the setup with you."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="mh_pricing_final"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd data={[faqSchema(FAQ_ITEMS), breadcrumbSchema(crumbs)]} />
    </>
  )
}
