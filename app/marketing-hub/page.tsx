import Link from "next/link"
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
import { CTA } from "@/lib/site"
import { softwareApplicationSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Marketing Hub - Alyvon",
  description:
    "Alyvon Marketing Hub is the operating layer for leads, follow-up, automations, and routine conversations — a CRM, automations, and an AI Employee that keep leads moving after the first form fill, missed call, or booked meeting.",
  path: "/marketing-hub",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Hub", path: "/marketing-hub" },
]

const PARTS = [
  {
    name: "CRM",
    href: "/marketing-hub/crm",
    copy: "One record for every lead, from first contact to close — capture, stage, and hand off without losing context.",
  },
  {
    name: "Automations",
    href: "/marketing-hub/automations",
    copy: "Follow-up that runs on time without someone remembering — missed-call text-back, nurture, reminders, reactivation.",
  },
  {
    name: "AI Employee",
    href: "/marketing-hub/ai-employee",
    copy: "A trained front-line assistant that answers routine questions, qualifies leads, and books meetings — and escalates the rest.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Alyvon Marketing Hub?",
    a: "Marketing Hub is the operating layer for leads and conversations: a CRM, follow-up automations, and an AI Employee that keep leads moving after the first form fill, missed call, or booked meeting.",
  },
  {
    q: "Is Marketing Hub a CRM?",
    a: "It includes a CRM, but it’s more than a database. The CRM holds the record; automations and the AI Employee act on it so follow-up actually happens.",
  },
  {
    q: "How are automations different from email sequences?",
    a: "Sequences send email on a timer. Automations respond to events across channels — a missed call triggers a text-back, a no-show triggers recovery, a stale lead triggers reactivation — not just a scheduled email drip.",
  },
  {
    q: "What can the AI Employee answer?",
    a: "It answers routine questions from your approved knowledge base, qualifies inbound leads, and books or reschedules meetings. Anything outside the approved knowledge base is escalated instead of guessed.",
  },
  {
    q: "Does Marketing Hub replace GoHighLevel?",
    a: "Marketing Hub is built to run your CRM, automations, and conversations as one system. Where you already use GoHighLevel, we connect to it rather than forcing a rip-and-replace.",
  },
]

export default function MarketingHubPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: marketing hub"
        heading="Every missed follow-up is a revenue leak."
        subhead="Alyvon Marketing Hub gives you the CRM, automations, and AI Employee that keep leads moving after the first form fill, missed call, or booked meeting."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="marketing_hub_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">
            The lead arrived. Then nothing happened.
          </h2>
          <p className="text-body-l text-text-secondary">
            A form fills at 9pm. A call gets missed during a demo. A meeting gets booked and never
            confirmed. Every one of those is a lead that cools while the follow-up waits on someone
            to remember. Marketing Hub makes the follow-up automatic and the record complete.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Three parts, one system</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PARTS.map((p) => (
              <Card key={p.name} className="flex flex-col justify-between gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-l font-semibold text-text-primary">{p.name}</h3>
                  <p className="text-body text-text-secondary">{p.copy}</p>
                </div>
                <Link
                  href={p.href}
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-fit")}
                >
                  Explore {p.name}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">How the loop works</h2>
          <ol className="flex flex-col gap-3 text-body-l text-text-primary">
            <li><strong>Capture.</strong> The lead lands in the CRM with its source and context.</li>
            <li><strong>Respond.</strong> Automations fire on the event — a text-back, a reminder, a nurture.</li>
            <li><strong>Converse.</strong> The AI Employee answers routine questions and books the meeting.</li>
            <li><strong>Escalate.</strong> Anything outside the approved knowledge base routes to a human.</li>
          </ol>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What teams run on it</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Recover a missed call with an instant text-back",
              "Nurture a new lead until it’s ready to talk",
              "Confirm and remind bookings to cut no-shows",
              "Reactivate a stale pipeline segment",
              "Qualify inbound before it reaches a rep",
              "Request reviews after a win",
            ].map((u) => (
              <Card key={u}>
                <CardHeader>
                  <CardTitle className="text-body-l">{u}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing</h2>
          <p className="text-body-l text-text-secondary">
            Marketing Hub pricing depends on your CRM setup, automation volume, AI Employee scope,
            and the systems you need connected. We scope it with you on a walkthrough.
          </p>
          <div>
            <Link href="/marketing-hub/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See Marketing Hub pricing
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Put your follow-up on a system."
        subhead="See the CRM, automations, and AI Employee working together on a walkthrough."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="marketing_hub_final"
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
            name: "Alyvon Marketing Hub",
            description:
              "A CRM, follow-up automations, and an AI Employee that keep leads moving after the first touch.",
            url: "/marketing-hub",
          }),
          faqSchema(FAQ_ITEMS),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
