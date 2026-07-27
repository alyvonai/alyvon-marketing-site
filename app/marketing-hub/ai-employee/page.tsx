import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable 21aa1393-4494-42ec-b221-c01ada1bfcea
// (Ticket 0j, only version -- mined from the real service.alyvon.com audit).
// Reframed away from the original site's novelty headline per Content's rewrite.

export const metadata = buildMetadata({
  title: "AI Employee - Alyvon Marketing Hub",
  description:
    "The AI Employee inside Alyvon Marketing Hub: a trained conversational assistant that answers routine questions and books time on your calendar.",
  path: "/marketing-hub/ai-employee",
})

const CAPABILITIES = [
  {
    title: "Availability",
    body: "Operates continuously and replies immediately to an inbound message.",
  },
  {
    title: "Easily trained",
    body: "Trained from your website, your FAQs, and your Google Docs, not a blank prompt.",
  },
  {
    title: "Easily taught",
    body: "A feedback mechanism lets you correct a wrong or off-brand response directly.",
  },
  {
    title: "Easily customized",
    body: "Styled to match your brand, not a generic chat widget.",
  },
  {
    title: "Playground included",
    body: "A private testing environment to check its answers before it talks to a real lead.",
  },
  {
    title: "Private and secure",
    body: "Runs on encrypted servers with access controls.",
  },
]

const RELATED = [
  { label: "CRM", href: "/marketing-hub/crm" },
  { label: "Automations", href: "/marketing-hub/automations" },
]

export default function AiEmployeePage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / AI Employee"
        heading="A trained assistant for the questions that repeat."
        subhead="Train it on what you already have. It answers the routine questions and books the routine meetings, and hands off anything it shouldn't handle alone."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <CardTitle className="text-body-l">{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text-secondary">{c.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Where it fits</h2>
          <p className="text-body-l text-text-secondary">
            The AI Employee works inside the same inbox as your unified messaging and the same
            contact records as your CRM. It is scoped to routine, repeatable conversations.
            Anything that sends, publishes, or commits you to something still follows Alyvon's
            standard approval gate.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Related</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {RELATED.map((r) => (
              <Card key={r.href}>
                <CardHeader>
                  <CardTitle className="text-body-l">
                    <Link
                      href={r.href}
                      className="transition-colors duration-micro ease-out-standard hover:text-accent-strong"
                    >
                      {r.label}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Train it on what you already have."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
