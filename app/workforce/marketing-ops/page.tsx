import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

const TRIAL_URL = "https://app.alyvon.com/signup"

// Copy pulled verbatim from Library deliverable 8d4b0d0b-d24b-4e6b-a8f9-e55ea2b7fc34
// (Ticket 0i, final -- "every department is on every plan" framing). Vertical-neutral
// per docs/tickets-2-21-manifest.md: this department page does not invent an industry
// focus beyond what the source copy states.

export const metadata = buildMetadata({
  title: "Marketing Operations - Alyvon",
  description:
    "Marketing Operations: Plans, buys, tags, and optimizes every paid channel, then proves which dollar actually produced a trial signup.",
  path: "/workforce/marketing-ops",
})

const SPECIALISTS = [
  { name: "Zev", line: "Attribution Analyst: multi-touch attribution and lift testing" },
  { name: "Anya", line: "Pixel and Tagging Specialist: GTM, server-side tracking, conversion API setup" },
  { name: "Boaz", line: "Affiliate and Partnership Manager: affiliate programs and partner negotiations" },
  { name: "Wyatt", line: "Creative Strategist: ad creative ideation, hooks, and angles" },
  { name: "Yara", line: "Conversion Rate Optimizer: landing page CRO and friction diagnosis" },
  { name: "Xena", line: "Media Buyer: campaign build, bid management, budget pacing" },
  { name: "Ulrike", line: "Paid Search Specialist: Google Ads and Bing, query mining" },
  { name: "Veda", line: "Paid Social Strategist: Meta, TikTok, and LinkedIn ads" },
  { name: "Cleo", line: "Influencer Marketing Manager: creator sourcing, briefs, performance tracking" },
]

const USE_CASES = [
  { title: "A campaign launching before tracking is wired up", brief: "Set up server-side conversion tracking for the pricing page trial signup before the campaign goes live.", artifact: "A tagging implementation spec as a docx, plus the working GTM container." },
  { title: "A landing page converting at half the rate", brief: "Run a friction audit on this landing page against the pricing page and tell me what's costing conversions.", artifact: "A CRO audit as a docx." },
  { title: "A quarter with no channel-level answer", brief: "Build a multi-touch attribution report for this quarter's paid spend.", artifact: "An attribution report as a docx with a channel-ranked table." },
  { title: "A creative angle that has flattened", brief: "Give me three new creative angles for the Meta campaign targeting agency owners.", artifact: "A creative brief as a docx for Content to write from." },
  { title: "A budget reallocation with no pacing data", brief: "Tell me where this month's budget stands against pacing and where to reallocate for the last two weeks.", artifact: "A pacing report as an xlsx." },
]

const PAIRS_WITH = [
  { department: "Content and Editorial", copy: "Marketing Operations names which ad or landing page is underperforming and why. Content rewrites the copy against that diagnosis." },
  { department: "Research and Insights", copy: "Research's cohort and attribution data feeds directly into Marketing Operations' channel and budget decisions." },
  { department: "Sales Development", copy: "Sales Development's ICP definitions and account signals inform which channels and audiences Marketing Operations targets." },
]

export default function MarketingOperationsDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Marketing Operations"
        subhead="Plans, buys, tags, and optimizes every paid channel — then proves which dollar actually produced a signup."
        actions={
          <div className="flex flex-col gap-3">
            <a href={TRIAL_URL} className={cn(buttonVariants({ size: "lg" }))}>
              Start your 14-day free trial
            </a>
            <p className="text-body-s text-text-secondary">No credit card. Cancel anytime.</p>
          </div>
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/board-run.webp"
              alt="The Alyvon board with the Marketing Operations department running inside a live team run"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>
              Marketing Operations, live inside a team run. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        }
      />

      <Section tone="canvas" spacing="sm">
        <div className="max-w-[860px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <p className="text-body-l text-text-primary">
            Marketing Operations is Alyvon&apos;s performance-marketing department: nine specialists
            led by a Director of Performance Marketing who plan and buy paid media, wire up tracking,
            run CRO, and attribute every dollar to a result.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who this is for</h2>
          <p className="text-body-l text-text-secondary">
            For the performance marketer buying media on tracking held together with tape — a
            campaign live before tracking is wired, a landing page converting at half the rate, a
            quarter with no channel-level answer. Brief it and get the build, the audit, or the
            report back.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who runs it</h2>
          <p className="text-body-l text-text-secondary">
            Tobias, Director of Performance Marketing, plans paid media and routes work to
            channel specialists, creative strategists, CRO, attribution, and ops.
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
                    <span className="font-mono text-label uppercase text-accent-strong">Brief</span>
                    <p className="mt-1 text-body text-text-primary">{uc.brief}</p>
                  </div>
                  <div>
                    <span className="font-mono text-label uppercase text-accent-strong">Artifact</span>
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
            Marketing Operations is one of three departments included in Starter at $299 a month.
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
        heading="Brief Marketing Operations this week."
        subhead="14 days or 10 deliverables, whichever comes first. No credit card."
        actions={
          <a href={TRIAL_URL} className={cn(buttonVariants({ size: "lg" }))}>
            Start your 14-day free trial
          </a>
        }
      />
    </>
  )
}
