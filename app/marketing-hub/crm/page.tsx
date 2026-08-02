import Link from "next/link"
import { History, LayoutList, UserCheck } from "lucide-react"
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
// (Ticket 0j, only version -- the /marketing-hub/crm section, lines 7-38 of the
// source docx). Mined from the real service.alyvon.com audit per the manifest.

export const metadata = buildMetadata({
  title: "CRM - Alyvon Marketing Hub",
  description:
    "The CRM inside Alyvon Marketing Hub: one pipeline for every lead and client, from first contact through close.",
  path: "/marketing-hub/crm",
})

const WHAT_IT_DOES = [
  {
    icon: UserCheck,
    text: "Lead management: organizes, tracks, and nurtures every lead from the moment they reach you.",
  },
  {
    icon: LayoutList,
    text: "One pipeline view across every stage, from first contact through a closed deal.",
  },
  {
    icon: History,
    text: "Every contact record carries its full history: messages, bookings, and notes in one place.",
  },
]

// "Related" links pulled from MARKETING_HUB_FEATURES rather than hardcoded,
// filtering out this page's own entry.
const RELATED = MARKETING_HUB_FEATURES.filter((f) => f.label !== "CRM")

export default function CrmDetailPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing Hub / CRM"
        heading="One record for every lead, from first contact to close."
        subhead="Every conversation, booking, and note lives on one contact record, so nothing about a lead lives only in someone's inbox."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What it does</h2>
          <ul className="flex flex-col gap-4">
            {WHAT_IT_DOES.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <item.icon
                  className="mt-1 h-6 w-6 shrink-0 text-accent-strong"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-body-l text-text-primary">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">How it connects</h2>
            <p className="text-body-l text-text-secondary">
              The CRM is the record Automations and the AI Employee both write to and read from. A
              booked appointment, an inbound text, or an AI Employee conversation all land on the
              same contact record, so a lead&apos;s history is never split across three separate
              systems.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/marketing-hub/crm-contact-record.webp"
              alt="A CRM contact record showing a lead's full history in one place: messages, bookings, and notes on a single timeline"
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
        heading="Put every lead in one place."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
