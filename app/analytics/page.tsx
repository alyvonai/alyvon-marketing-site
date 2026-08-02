import Link from "next/link"
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
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { CTA } from "@/lib/site"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Analytics - Alyvon",
  description:
    "Alyvon Analytics scopes, builds, and deploys data pipelines, reporting layers, applied AI workflows, and custom agents inside your business environment. A custom build engagement, not a self-serve product.",
  path: "/analytics",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Analytics", path: "/analytics" },
]

const SYSTEM = [
  { name: "Data engineering", copy: "Get the data reliable — pipelines, warehouse, and hygiene so every number downstream can be trusted." },
  { name: "Data analysis", copy: "Answer the operational questions — the reports and reads your team acts on week to week." },
  { name: "Data science", copy: "Model what should happen next — forecasting, segmentation, and experimentation." },
  { name: "Applied AI", copy: "Automate the decision or workflow once the data is trustworthy — custom agents in your environment." },
]

const ENGAGEMENTS = [
  "A reporting layer your team actually uses",
  "A pipeline that makes a messy source reliable",
  "A forecasting or segmentation model",
  "An applied-AI workflow or custom agent deployed in your infrastructure",
]

const FAQ_ITEMS = [
  {
    q: "What is Alyvon Analytics?",
    a: "Alyvon Analytics is a custom build practice. We scope, build, and deploy data pipelines, reporting layers, applied AI workflows, and custom agents inside your business environment.",
  },
  {
    q: "How is Analytics different from Workforce?",
    a: "Workforce is self-serve: departments produce finished files inside Alyvon on your connected tools. Analytics is a custom engagement that builds and deploys data systems and agents in your own infrastructure.",
  },
  {
    q: "What is a custom AI engagement?",
    a: "A scoped project to build an AI workflow or agent for one clear problem — after the data and the workflow are clear — deployed where your data lives.",
  },
  {
    q: "What data does Alyvon need access to?",
    a: "Only what the engagement requires, agreed during scoping. Access, environment, and controls are defined before any build begins.",
  },
  {
    q: "Does Alyvon deploy into our infrastructure?",
    a: "Yes, when the engagement calls for it. Deployment environment and security model are part of scoping.",
  },
  {
    q: "How is Analytics priced?",
    a: "Engagements are scoped after a discovery call because data access, deployment environment, and workflow risk change the build. There is no self-serve price.",
  },
]

export default function AnalyticsPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: analytics"
        heading="Turn your data into a system your team can actually act on."
        subhead="Alyvon Analytics scopes, builds, and deploys data pipelines, reporting layers, applied AI workflows, and custom agents inside your business environment."
        actions={
          <div className="flex flex-col gap-3">
            <BookingCta
              href={CTA.analytics.href}
              label={CTA.analytics.label}
              product="analytics"
              placement="analytics_hero"
              className={cn(buttonVariants({ size: "lg" }))}
            />
            <Link
              href="/contact"
              className="text-body-s font-medium text-accent-strong underline underline-offset-4"
            >
              Prefer to send details? Contact us →
            </Link>
          </div>
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/analytics/dashboard-reporting-layer.webp"
              alt="A reporting dashboard with clean charts built on top of a reliable data pipeline"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">What Analytics is</h2>
          <p className="text-body-l text-text-secondary">
            Analytics is a custom build engagement, not a self-serve product. We start with your
            data and your questions, make the data reliable, and build the reporting and AI on top of
            it — deployed where your data already lives.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">A four-part system</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SYSTEM.map((s, i) => (
              <Card key={s.name} className="flex flex-col gap-3 p-6">
                <span className="font-mono text-label uppercase text-accent-strong">
                  Step {i + 1}
                </span>
                <h3 className="text-body-l font-semibold text-text-primary">{s.name}</h3>
                <p className="text-body text-text-secondary">{s.copy}</p>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/analytics/four-part-system-diagram.webp"
              alt="A four-part system stacked on reliable data at the base: data engineering, analysis, data science, and applied AI"
              aspect="16:9"
              sizes="(min-width: 1024px) 1000px, 100vw"
            />
            <IllustrativeCaption>Illustrative.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Example engagements</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ENGAGEMENTS.map((e) => (
              <Card key={e}>
                <CardHeader>
                  <CardTitle className="text-body-l">{e}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Why it’s custom</h2>
          <p className="text-body-l text-text-secondary">
            Data access, deployment environment, and workflow risk are different in every business,
            so the build is scoped, not bought. That’s why Analytics starts with a scoping call, not
            a signup.
          </p>
        </div>
      </Section>

      {/* Workforce boundary (spec §26) */}
      <Section tone="surface">
        <div className="max-w-[760px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <p className="text-body-l text-text-primary">
            Looking for self-serve research deliverables instead of a custom analytics build? See{" "}
            <Link
              href="/workforce/product-engineering#research-insights"
              className="text-accent-strong underline-offset-4 hover:underline"
            >
              Workforce Research &amp; Insights
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Engagements &amp; pricing</h2>
          <p className="text-body-l text-text-secondary">
            Analytics engagements are scoped after a discovery call because data access, deployment
            environment, and workflow risk change the build.
          </p>
          <div>
            <Link href="/analytics/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See engagement details
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Start with the data you already have."
        subhead="Book a scoping call and we’ll map the engagement to your environment."
        actions={
          <BookingCta
            href={CTA.analytics.href}
            label={CTA.analytics.label}
            product="analytics"
            placement="analytics_final"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: "Alyvon Analytics",
            description:
              "Custom data engineering, analysis, data science, and applied AI built and deployed in your environment.",
            url: "/analytics",
          }),
          faqSchema(FAQ_ITEMS),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
