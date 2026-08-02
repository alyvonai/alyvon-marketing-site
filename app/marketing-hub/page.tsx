import Link from "next/link"
import { Bot, MessageSquareText, Users, Workflow } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { MARKETING_HUB_FEATURES } from "@/lib/nav-data"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable e0adc23e-9115-4d27-ab08-b1cd1896e9b2
// (Ticket 0h, final -- the /marketing-hub section, lines 44-80 of the source docx,
// including the "three parts" table). Vertical-neutral per
// docs/tickets-2-21-manifest.md.

export const metadata = buildMetadata({
  title: "Marketing Hub - Alyvon",
  description:
    "Alyvon Marketing Hub: the CRM, automations, and AI Employee behind your lead and client messaging, in one connected system.",
  path: "/marketing-hub",
})

// "Part | What it does" table from the source docx. Icons are decorative --
// each card already carries a visible label, so a bare lucide icon is used
// instead of IconWrapper per docs/tickets-2-21-manifest.md.
const PARTS = [
  {
    icon: Users,
    title: "CRM",
    description: "Tracks every lead and client in one pipeline, from first contact through close.",
  },
  {
    icon: Workflow,
    title: "Automations",
    description:
      "Runs the follow-up sequences and appointment reminders your team would otherwise send by hand.",
  },
  {
    icon: Bot,
    title: "AI Employee",
    description: "Answers routine questions and books time on your calendar, trained on your business.",
  },
]

const CAPABILITIES = [
  "Two-way SMS conversations with leads and clients",
  "Reputation management: requesting and tracking reviews",
  "Appointment automation and reminders",
  "Social media management from one place",
  "Unified messaging across channels in a single inbox",
  "Automated web chat on your site",
  "Missed call text back, so a missed call still starts a conversation",
  "Lead management from first contact to close",
]

export default function MarketingHubPillarPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: marketing hub"
        heading="One system for every conversation with a lead or a client."
        subhead="Marketing Hub runs your CRM, your follow-up automations, and an AI Employee that handles routine conversations, so nothing sits unanswered."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/overview-loop-diagram.webp"
              alt="Diagram of the Marketing Hub loop: the CRM tracks every lead and client, automations run the follow-up sequences, and the AI Employee handles routine conversations, feeding activity back into the CRM."
              aspect="16:9"
            />
            <IllustrativeCaption>Product interface. Data shown is illustrative.</IllustrativeCaption>
          </div>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">What&apos;s inside</h2>
            <p className="text-body-l text-text-secondary">
              Marketing Hub is built around three parts, each documented on its own page.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PARTS.map((part) => {
              const feature = MARKETING_HUB_FEATURES.find((f) => f.label === part.title)
              return (
                <Card key={part.title}>
                  <CardHeader>
                    <part.icon
                      className="mb-2 h-6 w-6 text-text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-body-l">{part.title}</CardTitle>
                    <CardDescription>{part.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {feature ? (
                      <Link
                        href={feature.href}
                        className="font-mono text-label uppercase text-accent-strong transition-colors duration-micro ease-out-standard hover:text-accent"
                      >
                        Learn more &rarr;
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Capabilities</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((capability) => (
              <li key={capability} className="flex items-start gap-3">
                <MessageSquareText
                  className="mt-1 h-6 w-6 shrink-0 text-accent-strong"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-body text-text-primary">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who it&apos;s for</h2>
          <p className="text-body-l text-text-secondary">
            Any team fielding inbound leads and client questions faster than a small staff can
            answer them by hand. The pain is the same whether you run an agency, a SaaS business,
            or a professional service firm: messages pile up, and the CRM and the follow-up have
            to move together or leads go cold.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Put your follow-up on a system."
        actions={
          <>
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Start your free trial
            </Link>
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Log in to Marketing Hub
            </Link>
          </>
        }
      />
    </>
  )
}
