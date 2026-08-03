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
  title: "Analytics pricing & engagements",
  description:
    "Analytics engagements are scoped after a discovery call because data access, deployment environment, and workflow risk change the build. See engagement types and what affects scope.",
  path: "/analytics/pricing",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Analytics", path: "/analytics" },
  { name: "Pricing & engagements", path: "/analytics/pricing" },
]

const ENGAGEMENT_TYPES = [
  { name: "Data foundation", copy: "Pipelines, warehouse, and hygiene that make a messy source reliable." },
  { name: "Reporting layer", copy: "A semantic layer and dashboards your team acts on week to week." },
  { name: "Modeling", copy: "Forecasting, segmentation, or experimentation on trustworthy data." },
  { name: "Applied AI / agent", copy: "A custom workflow or agent deployed in your environment." },
]

const SCOPE_FACTORS = [
  "How reliable your data is today",
  "Where it needs to be deployed and who can access it",
  "The risk of the workflow being automated",
  "The number of sources and systems to connect",
  "How much ongoing operation and tuning you want",
]

const FAQ_ITEMS = [
  {
    q: "How much does an Analytics engagement cost?",
    a: "Engagements are scoped after a discovery call. Data access, deployment environment, and workflow risk change the build, so there’s no self-serve price.",
  },
  {
    q: "Is there a trial?",
    a: "No. Analytics is a custom build engagement, not a self-serve product. It starts with a scoping call.",
  },
  {
    q: "What happens on the scoping call?",
    a: "We define the problem, the data, the deployment environment, and the risk, then propose an engagement shape and timeline.",
  },
]

export default function AnalyticsPricingPage() {
  return (
    <>
      <Hero
        eyebrow="Analytics pricing & engagements"
        heading="Scoped after a discovery call, not sold off a shelf."
        subhead="Analytics engagements are scoped after a discovery call because data access, deployment environment, and workflow risk change the build."
        actions={
          <BookingCta
            href={CTA.analytics.href}
            label={CTA.analytics.label}
            product="analytics"
            placement="analytics_pricing_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Engagement types</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ENGAGEMENT_TYPES.map((e) => (
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

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">What affects scope</h2>
          <ul className="flex max-w-[720px] list-disc flex-col gap-2 pl-5 text-body-l text-text-secondary marker:text-text-tertiary">
            {SCOPE_FACTORS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">The scoping process</h2>
          <ol className="flex flex-col gap-3 text-body-l text-text-primary">
            <li><strong>Discovery call.</strong> Understand the problem, the data, and the environment.</li>
            <li><strong>Scope.</strong> Propose an engagement shape, timeline, and controls.</li>
            <li><strong>Build &amp; deploy.</strong> Ship into your infrastructure with review.</li>
          </ol>
        </div>
      </Section>

      <Section tone="canvas">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Book an Analytics scoping call."
        subhead="We’ll scope the engagement to your data and environment."
        actions={
          <BookingCta
            href={CTA.analytics.href}
            label={CTA.analytics.label}
            product="analytics"
            placement="analytics_pricing_final"
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
