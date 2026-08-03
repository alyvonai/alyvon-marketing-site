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
import { CTA } from "@/lib/site"
import { softwareApplicationSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Marketing Hub Automations",
  description:
    "Follow-up that happens on time without someone remembering — missed-call text-back, lead nurture, appointment reminders, no-show recovery, review requests, and reactivation.",
  path: "/marketing-hub/automations",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Hub", path: "/marketing-hub" },
  { name: "Automations", path: "/marketing-hub/automations" },
]

const USE_CASES = [
  "Missed-call text-back",
  "Lead nurture",
  "Appointment reminders",
  "No-show recovery",
  "Review request",
  "Reactivation campaign",
]

export default function AutomationsPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / Automations"
        heading="Follow-up that happens on time without someone remembering."
        subhead="Automations respond to the event — a missed call, a booking, a stale lead — across SMS and email, so the next step never waits on a person to notice."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="automations_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/automations-flow.webp"
              alt="A Marketing Hub automation in the workflow builder — a cold-outreach sequence branching across email, SMS, waits, and booking"
              aspect="16:9"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
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

      {/* Consent / control */}
      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Consent and control, built in</h2>
          <p className="text-body-l text-text-secondary">
            SMS and email automations run on consent. Contacts are only messaged where you have the
            right to reach them, every message carries the required identification and opt-out, and
            an unsubscribe or STOP is honored automatically across the system.
          </p>
          <p className="text-body text-text-tertiary">
            You control quiet hours, sending limits, and which segments are eligible — so
            automations stay compliant with SMS and email rules and with your own brand standards.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Stop losing leads between channels."
        subhead="See the automations mapped to your funnel on a walkthrough."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="automations_final"
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
            name: "Alyvon Marketing Hub Automations",
            description: "Event-driven follow-up across SMS and email.",
            url: "/marketing-hub/automations",
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
