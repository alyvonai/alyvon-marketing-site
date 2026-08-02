import Link from "next/link"
import { CalendarClock, Inbox, MessageCircle, PhoneMissed, Share2, Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MARKETING_HUB_FEATURES } from "@/lib/nav-data"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable 21aa1393-4494-42ec-b221-c01ada1bfcea
// (Ticket 0j, only version -- the /marketing-hub/automations section, lines 39-73
// of the source docx). Mined from the real service.alyvon.com audit per the manifest.

export const metadata = buildMetadata({
  title: "Automations - Alyvon Marketing Hub",
  description:
    "The automations inside Alyvon Marketing Hub: booking, follow-up, and messaging that runs without someone at a keyboard.",
  path: "/marketing-hub/automations",
})

const WHAT_IT_DOES = [
  {
    icon: CalendarClock,
    title: "Appointment automation",
    text: "Self-serve booking with automatic reminders, no back-and-forth to land a time.",
  },
  {
    icon: PhoneMissed,
    title: "Missed call text back",
    text: "A missed call automatically sends a text, so a missed call still starts a conversation.",
  },
  {
    icon: MessageCircle,
    title: "Automated web chat",
    text: "A website chat widget that captures a lead and can book them directly.",
  },
  {
    icon: Inbox,
    title: "Unified messaging",
    text: "Email, SMS, web chat, Facebook, and Instagram in a single inbox, so no channel is checked separately.",
  },
  {
    icon: Star,
    title: "Reputation management",
    text: "Requests and tracks reviews after a job or engagement closes.",
  },
  {
    icon: Share2,
    title: "Social media management",
    text: "Schedules and publishes across platforms from one place.",
  },
]

// "Related" links pulled from MARKETING_HUB_FEATURES rather than hardcoded,
// filtering out this page's own entry.
const RELATED = MARKETING_HUB_FEATURES.filter((f) => f.label !== "Automations")

export default function AutomationsDetailPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / Automations"
        heading="Follow-up that runs whether or not someone's watching."
        subhead="Booking, reminders, and the first reply to a missed call or a web chat all run automatically, and land on the same contact record as everything else."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {WHAT_IT_DOES.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <item.icon
                    className="mb-2 h-6 w-6 text-text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <CardTitle className="text-body-l">{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">How it connects</h2>
            <p className="text-body-l text-text-secondary">
              Every automated touch, a booked appointment, a text sent after a missed call, a
              message answered in web chat, writes back to the same CRM record. The AI Employee can
              also act inside these same conversations when a routine question comes in outside
              business hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/automations-flow.webp"
              alt="An automation flow showing a missed call, follow-up text, and booked appointment writing back to one contact record"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Product interface. Data shown is illustrative.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Related</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {RELATED.map((item) => (
              <Link key={item.href} href={item.href} className="group">
                <Card className="transition-colors duration-micro ease-out-standard group-hover:bg-surface">
                  <CardHeader>
                    <CardTitle className="text-body-l">{item.label}</CardTitle>
                    <CardDescription>
                      <span className="font-mono text-label uppercase text-accent-strong">
                        Marketing Hub
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Stop losing leads between channels."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
