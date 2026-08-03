import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { BookingCta } from "@/components/marketing/booking-cta"
import { MediaFrame } from "@/components/ui/media-frame"
import { CTA } from "@/lib/site"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Analytics Custom AI",
  description:
    "Custom AI engagements from Alyvon Analytics — internal workflow agents, data QA agents, reporting assistants, and more, built only when the workflow and data are clear, and deployed in your environment.",
  path: "/analytics/custom-ai",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Analytics", path: "/analytics" },
  { name: "Custom AI", path: "/analytics/custom-ai" },
]

const QUALIFIES = [
  "The workflow is well understood and repeatable",
  "The data it needs exists and can be made reliable",
  "A human owns the outcome and can review it",
  "The value is clear if the task is automated",
]

const BUILDS = [
  "Internal workflow agent",
  "Data QA / reconciliation agent",
  "Reporting assistant",
  "Customer operations assistant",
  "Knowledge-base assistant",
  "Lead qualification or routing agent",
]

const WONT_BUILD = [
  "Anything that acts on data you can’t make reliable first",
  "Fully autonomous systems with no human review of consequential actions",
  "“Do everything” agents with no clear workflow or owner",
  "Use cases that require exposing sensitive data without controls",
]

const FAQ_ITEMS = [
  {
    q: "What makes a good custom AI project?",
    a: "A clear, repeatable workflow, reliable data, a human owner, and obvious value if the task is automated. When those aren’t true, we fix the data and the workflow first.",
  },
  {
    q: "Where does it run?",
    a: "In your environment. Deployment model, data access, and controls are defined during scoping before any build begins.",
  },
  {
    q: "Will it act without review?",
    a: "No. Consequential actions keep a human in the loop. We don’t ship fully autonomous systems for decisions that need review.",
  },
]

export default function CustomAiPage() {
  return (
    <>
      <Hero
        eyebrow="Analytics / Custom AI"
        heading="Custom AI only works when the workflow and data are clear first."
        subhead="We build custom agents for a specific problem, deployed in your environment — after the workflow is understood and the data can be trusted."
        actions={
          <BookingCta
            href={CTA.analytics.href}
            label={CTA.analytics.label}
            product="analytics"
            placement="custom_ai_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/analytics/custom-ai-deployment-diagram.webp"
              alt="A custom AI agent deployed inside your environment on top of your data pipeline, with a human-review gate on consequential actions"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">What qualifies as a good project</h2>
          <ul className="flex max-w-[720px] list-disc flex-col gap-2 pl-5 text-body-l text-text-secondary marker:text-text-tertiary">
            {QUALIFIES.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What Alyvon builds</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUILDS.map((b) => (
              <Card key={b}>
                <CardHeader>
                  <CardTitle className="text-body-l">{b}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">What Alyvon won’t build</h2>
          <ul className="flex max-w-[720px] list-disc flex-col gap-2 pl-5 text-body-l text-text-secondary marker:text-text-tertiary">
            {WONT_BUILD.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Security and deployment</h2>
          <p className="text-body-l text-text-secondary">
            Custom AI runs where your data lives. The deployment environment, the data it can reach,
            and the controls around it are defined during scoping — before any build — and
            consequential actions keep a human in the loop.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">The process</h2>
          <ol className="flex flex-col gap-3 text-body-l text-text-primary">
            <li><strong>Scope.</strong> Define the workflow, the data, the owner, and the value.</li>
            <li><strong>Prepare.</strong> Make the data reliable and set the deployment and controls.</li>
            <li><strong>Build.</strong> Ship the agent into your environment with human review.</li>
            <li><strong>Operate.</strong> Measure, tune, and expand once it’s proven.</li>
          </ol>
        </div>
      </Section>

      <Section tone="canvas">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Start with the problem, not the model."
        subhead="Book a scoping call and we’ll pressure-test the workflow and the data first."
        actions={
          <BookingCta
            href={CTA.analytics.href}
            label={CTA.analytics.label}
            product="analytics"
            placement="custom_ai_final"
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
            name: "Alyvon Analytics — Custom AI",
            description: "Custom AI agents built for a specific problem and deployed in your environment.",
            url: "/analytics/custom-ai",
          }),
          faqSchema(FAQ_ITEMS),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
