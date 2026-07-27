import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable 8d4b0d0b-d24b-4e6b-a8f9-e55ea2b7fc34
// (Ticket 0i, final -- "every department is on every plan" framing). Vertical-neutral
// per docs/tickets-2-21-manifest.md: this department page does not invent an industry
// focus beyond what the source copy states.

export const metadata = buildMetadata({
  title: "Content and Editorial - Alyvon",
  description:
    "Content and Editorial: Writes and edits every word a customer reads before they buy and every word they receive after.",
  path: "/workforce/content",
})

const SPECIALISTS = [
  { name: "Dora", line: "Senior Conversion Copywriter: sales pages, landing pages, and CRO copy" },
  { name: "Esme", line: "Email Copywriter: sequences, broadcasts, and lifecycle email" },
  { name: "Finn", line: "Long-Form Content Writer: articles and whitepapers" },
  { name: "Gemma", line: "SEO Content Writer: search-intent content" },
  { name: "Harvey", line: "Ad Copywriter: paid social, search, and native ad copy" },
  { name: "Indira", line: "Sales Copywriter: pitch decks and spoken-word scripts" },
  { name: "Joaquin", line: "Technical Writer: docs and onboarding flows" },
  { name: "Linus", line: "Brand-Voice Copywriter: long-form factual prose, including first-pass legal drafts" },
  { name: "Sara", line: "Copy Editor: final-pass proofing and site-wide consistency" },
]

const USE_CASES = [
  {
    title: "A launch email nobody has drafted",
    brief:
      "Write a three-email launch sequence for a new feature, aimed at trial users, one CTA: book a walkthrough.",
    artifact: "A three-email sequence as a docx, with subject-line variants for each send.",
  },
  {
    title: "Ad copy that has gone stale",
    brief:
      "Give me eight new headline and primary-text variants for the ad running against the pricing page, same offer.",
    artifact: "An ad variant sheet as an xlsx, one row per variant.",
  },
  {
    title: "A blog gone quiet",
    brief: "Write a 1,500-word article targeting a term a real buyer searches, that reads to the end.",
    artifact: "An SEO article as a docx, with a meta title and description.",
  },
  {
    title: "A pitch deck with no talk track",
    brief: "Write the talk track for this deck, timed to roughly 90 seconds a slide.",
    artifact: "A speaker script as a docx, slide-numbered to match the deck.",
  },
  {
    title: "A 21-page site with no single reader",
    brief: "Read every page end to end and confirm nothing breaks a copy rule or drifts in voice.",
    artifact: "A page-by-page consistency report as a docx.",
  },
]

const PAIRS_WITH = [
  {
    department: "Research and Insights",
    copy:
      "Research hands Content the verified facts and the discard register. Content will not publish a claim Research hasn't corroborated. Together they produce a claims-checked page, such as a pricing FAQ or a security page, neither could produce alone.",
  },
  {
    department: "Brand",
    copy:
      "Brand hands Content the voice rules and the positioning spine before a word is written. Together they produce a page that reads in one company voice and matches the canonical sell.",
  },
  {
    department: "Sales Development",
    copy:
      "Sales Development's field-heard objections shape the objection language Content writes. Together they produce a pricing FAQ that pairs a real objection with a claim Content can defend.",
  },
  {
    department: "Marketing Operations",
    copy:
      "Marketing Operations names which ad or landing page is underperforming and why. Together they produce a tested ad variant sheet neither could produce alone.",
  },
]

export default function ContentDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Content and Editorial"
        subhead="Writes and edits every word a customer reads before they buy and every word they receive after."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who runs it</h2>
          <p className="text-body-l text-text-secondary">
            Cyrus, Editorial Director, routes copywriting work to the right specialist by medium,
            audience awareness, and objective, and is the final voice-and-tone gate before
            anything publishes.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Specialists</h2>
          <List className="max-w-[720px]">
            {SPECIALISTS.map((s) => (
              <li key={s.name}>
                <strong className="text-text-primary">{s.name}</strong>, {s.line}
              </li>
            ))}
          </List>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">
            What you can brief this department to do
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {USE_CASES.map((uc) => (
              <Card key={uc.title}>
                <CardHeader>
                  <CardTitle className="text-body-l">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-label uppercase text-accent-strong">
                      Brief
                    </span>
                    <p className="mt-1 text-body text-text-primary">{uc.brief}</p>
                  </div>
                  <div>
                    <span className="font-mono text-label uppercase text-accent-strong">
                      Artifact
                    </span>
                    <p className="mt-1 text-body text-text-secondary">{uc.artifact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing</h2>
          <p className="text-body-l text-text-primary">
            Content is one of three departments included in Starter at $299 a month.
          </p>
          <p className="text-body text-text-secondary">
            There is no per-department add-on fee. Once a department is included in your plan,
            every seat on that plan can brief it directly, the same as any other included
            department.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Pairs with</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAIRS_WITH.map((p) => (
              <Card key={p.department}>
                <CardHeader>
                  <CardTitle className="text-body-l">{p.department}</CardTitle>
                  <CardDescription>{p.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="max-w-[720px] text-body text-text-secondary">
            Pairing departments costs nothing extra beyond your plan. Starter already includes
            three departments working together at no added charge; upgrading unlocks more
            departments for every seat, not one department at a time.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Brief Content and Editorial this week."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
