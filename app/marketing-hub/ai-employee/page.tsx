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
  title: "Marketing Hub AI Employee - Alyvon",
  description:
    "A trained front-line assistant for routine questions and booking — it answers from your approved knowledge base, qualifies inbound, books and reschedules meetings, and escalates anything outside its scope.",
  path: "/marketing-hub/ai-employee",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marketing Hub", path: "/marketing-hub" },
  { name: "AI Employee", path: "/marketing-hub/ai-employee" },
]

const USE_CASES = [
  "Answer routine service questions",
  "Qualify inbound leads",
  "Book a meeting",
  "Reschedule appointments",
  "Hand off complex questions",
]

export default function AiEmployeePage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / AI Employee"
        heading="A trained front-line assistant for routine questions and booking."
        subhead="It answers from your approved knowledge base, qualifies inbound, and books meetings — and knows when to hand off to a person."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="ai_employee_hero"
            className={cn(buttonVariants({ size: "lg" }))}
          />
        }
        visual={
          <div className="mx-auto flex max-w-[320px] flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/ai-employee-chat.webp"
              alt="A chat thread where the AI Employee answers routine questions, with one message escalated to a human highlighted"
              aspect="4:5"
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
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

      {/* Guardrail */}
      <Section tone="canvas">
        <div className="max-w-[760px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <h2 className="text-body-l font-medium text-text-primary">Trained on what you approve</h2>
          <p className="mt-1 text-body text-text-secondary">
            Anything outside the approved knowledge base is escalated instead of guessed. The AI
            Employee answers only what you’ve trained it on, and routes everything else — pricing
            exceptions, edge cases, anything sensitive — to a human.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Train it on what you already have."
        subhead="See the AI Employee answering and booking from your knowledge base on a walkthrough."
        actions={
          <BookingCta
            href={CTA.marketingHub.href}
            label={CTA.marketingHub.label}
            product="marketing_hub"
            placement="ai_employee_final"
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
            name: "Alyvon Marketing Hub AI Employee",
            description: "A trained front-line assistant for routine questions and booking.",
            url: "/marketing-hub/ai-employee",
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
