import Link from "next/link"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { FormEmbed } from "@/components/marketing/form-embed"
import { WEBINAR, WORKFORCE_STATS } from "@/lib/site"
import { faqSchema, breadcrumbSchema } from "@/lib/jsonld"

// Webinar registration funnel (on-site replacement for the GHL funnel builder).
// One page: hero -> what you'll learn -> embedded GHL registration form -> FAQ -> closing
// CTA. Submission redirects (configured on the GHL form itself, not here) should point to
// /thank-you?type=webinar&product=webinar&source=webinar_page so the shared /thank-you
// page shows the webinar confirmation copy (see components/marketing/thank-you-client.tsx).
//
// WEBINAR.title / dateLabel are placeholder copy -- confirm the real topic, date/time,
// and timezone with the operator before this goes live, then update lib/site.ts (the
// single source of truth this page, the FAQ, and JSON-LD all read from).
export const metadata = buildMetadata({
  title: WEBINAR.title,
  description:
    "Join Alyvon's free live webinar on replacing your next hire with an AI workforce -- see how founders scope departments, brief work, and get deliverables back without growing headcount. Save your seat.",
  path: "/webinar",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Webinar", path: "/webinar" },
]

const LEARN_ITEMS = [
  {
    name: "How the AI workforce model actually works",
    copy: `See how ${WORKFORCE_STATS.specialists} specialists across ${WORKFORCE_STATS.departments} departments take a plain-language brief and hand back finished, reviewable work.`,
  },
  {
    name: "Where founders start",
    copy: "The departments most agencies, SaaS teams, and professional service firms lean on first -- and how to scope your first brief.",
  },
  {
    name: "What it costs vs. hiring",
    copy: "A practical look at labour replacement at a fraction of headcount cost, and where a hire still makes more sense than a workforce.",
  },
]

const FAQ_ITEMS = [
  {
    q: "Is the webinar free?",
    a: "Yes -- this session is free to attend live, no credit card required to register.",
  },
  {
    q: "Will I get a replay if I can't attend live?",
    a: "Yes. Everyone who registers gets the replay sent to their email, whether or not they can make it live.",
  },
  {
    q: "How long is the session?",
    a: `Plan for about ${WEBINAR.duration}, including time for live questions at the end.`,
  },
  {
    q: "Who is this for?",
    a: "Founders, owners, and C-suite operators at agencies, SaaS teams, and professional service firms who are cost-conscious about growing headcount.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "No -- just show up. If you already have a backlog of work you'd hand to a new hire, bring it; we'll use it as a live example.",
  },
]

export default function WebinarPage() {
  return (
    <>
      <Hero
        eyebrow="Free live webinar"
        heading={WEBINAR.title}
        subhead={
          <>
            {WEBINAR.dateLabel} &middot; {WEBINAR.duration} &middot; Live + replay
            <br />
            See how founders are using Alyvon to cover departments they can&rsquo;t yet
            justify hiring for -- without slowing delivery.
          </>
        }
        actions={
          <Link href="#register" className={cn(buttonVariants({ size: "lg" }))}>
            Save my seat
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What you&rsquo;ll learn</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {LEARN_ITEMS.map((item) => (
              <Card key={item.name} className="flex flex-col gap-3 p-6">
                <h3 className="text-body-l font-semibold text-text-primary">{item.name}</h3>
                <p className="text-body text-text-secondary">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="register" tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[680px] flex-col gap-3">
            <span className="font-mono text-label uppercase text-accent-strong">
              Save your seat
            </span>
            <h2 className="text-display-m text-text-primary">Register in under a minute</h2>
            <p className="text-body-l text-text-secondary">
              Fill in your details below -- we&rsquo;ll email your confirmation, calendar
              invite, and the replay link either way.
            </p>
          </div>
          <div className="overflow-hidden rounded-card border border-border-subtle bg-canvas p-2 sm:p-4">
            <FormEmbed
              formId={WEBINAR.formId}
              formName="Alyvon Webinar"
              product="webinar"
              source="webinar_page"
            />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Seats are limited to keep the Q&A useful."
        subhead="Register free -- you'll get the replay either way."
        actions={
          <Link href="#register" className={cn(buttonVariants({ size: "lg" }))}>
            Save my seat
          </Link>
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd data={[faqSchema(FAQ_ITEMS), breadcrumbSchema(crumbs)]} />
    </>
  )
}
