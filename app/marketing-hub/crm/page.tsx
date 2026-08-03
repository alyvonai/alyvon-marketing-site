import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { BookingCta } from "@/components/marketing/booking-cta"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { CTA } from "@/lib/site"
import { softwareApplicationSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Marketing Hub CRM",
  description:
    "A CRM for the work that happens after the lead arrives — one record from first contact to close, with capture, staging, handoff, and pipeline recovery built in.",
  path: "/marketing-hub/crm",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Hub", path: "/marketing-hub" },
  { name: "CRM", path: "/marketing-hub/crm" },
]

const USE_CASES = [
  "Capture new leads with their source and context",
  "Update opportunity stage as deals move",
  "Route the handoff to sales cleanly",
  "Recover stale pipeline before it dies",
  "Segment contacts for the right follow-up",
]

export default function CrmPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / CRM"
        heading="A CRM for the work that happens after the lead arrives."
        subhead="One record for every lead, from first contact to close — so automations and your team always act on the same context."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="crm_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/crm-contact-record.webp"
              alt="The Marketing Hub contacts list — every lead in one place with source, stage, and tags (contact details blurred)"
              aspect="16:9"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <Card key={u}>
                <CardHeader>
                  <CardTitle className="text-body-l">{u}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">One record, everything acts on it</h2>
          <p className="text-body-l text-text-secondary">
            The CRM is the source of truth Marketing Hub runs on. Automations fire against it and the
            AI Employee reads from it, so a missed call, a booking, and a stage change all update the
            same record — no exports, no drift between tools.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Put every lead in one place."
        subhead="See the CRM working with automations and the AI Employee on a walkthrough."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="crm_final"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd
        data={[
          softwareApplicationSchema({
            name: "Alyvon Marketing Hub CRM",
            description: "A CRM for the work that happens after the lead arrives.",
            url: "/marketing-hub/crm",
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
