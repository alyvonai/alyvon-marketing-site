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
  title: "Sales Development - Alyvon",
  description:
    "Sales Development: Builds the account lists, outbound sequences, and enablement material that get a qualified prospect into a first conversation, then arms whoever takes the call.",
  path: "/workforce/sales-development",
})

const SPECIALISTS = [
  { name: "Parker", line: "Prospect Researcher: target account lists, buying signals, CRM enrichment" },
  { name: "Hadley", line: "Sales Enablement Specialist: playbooks, scripts, objection handling" },
  { name: "Garrett", line: "Lead Generation Strategist: channel mix, lead magnets, funnel design" },
  { name: "Rowan", line: "Sales Engineer: technical RFP responses and security questionnaires" },
  { name: "Ines", line: "Sales Development Specialist: outbound sequences and BDR operations design" },
]

const USE_CASES = [
  { title: "A campaign with no matching account list", brief: "Build a list of 200 accounts matching our ICP: US agencies and SaaS companies, 5 to 150 employees, founder or VP title.", artifact: "An account list as an xlsx with firmographic and signal columns." },
  { title: "A security questionnaire nobody can answer live", brief: "Draft answers to this security questionnaire using our actual data-handling facts.", artifact: "A completed questionnaire as a docx." },
  { title: "An outbound sequence that has flatlined", brief: "Write a new five-touch outbound sequence for VP-title prospects at agencies.", artifact: "A sequence as a docx, ready to load into the outbound tool." },
  { title: "A new AE with no objection script", brief: "Write the objection-handling script for the five most common objections we hear.", artifact: "A playbook as a docx." },
  { title: "A funnel bringing in the weaker buyer", brief: "Redesign the lead magnet and channel mix to reach more VP-title prospects at 25-to-150-employee companies.", artifact: "A lead-gen plan as a docx." },
]

const PAIRS_WITH = [
  { department: "Research and Insights", copy: "Research supplies churn and usage patterns Sales Development uses to prioritize which accounts to re-engage." },
  { department: "Content and Editorial", copy: "Sales Development's field-heard objections shape the objection language Content writes into customer-facing copy." },
  { department: "Marketing Operations", copy: "Sales Development's ICP definitions and account signals inform which channels and audiences Marketing Operations targets." },
]

export default function SalesDevelopmentDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Sales Development"
        subhead="Builds the account lists, outbound sequences, and enablement that get a qualified prospect into a first conversation — then arms whoever takes the call."
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
              alt="The Alyvon board with the Sales Development department running inside a live team run"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>
              Sales Development, live inside a team run. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        }
      />

      <Section tone="canvas" spacing="sm">
        <div className="max-w-[860px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <p className="text-body-l text-text-primary">
            Sales Development is Alyvon&apos;s outbound department: five specialists led by a Head of
            Sales Development who build target lists, cold sequences, and objection scripts, then
            hand the rep everything they need for the call.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who this is for</h2>
          <p className="text-body-l text-text-secondary">
            For founder-led sales or the first SDR hire with no list, no sequences, and no
            enablement — a campaign with no account list, a security questionnaire nobody can answer
            live, an outbound sequence that flatlined. Brief it and the pipeline work comes back
            built.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Who runs it</h2>
            <p className="text-body-l text-text-secondary">
              Casey, Head of Sales Development, owns the outbound motion: account research, cold
              sequences, ICP qualification, and the SDR team&apos;s workflows.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/groups/marketing-sales.webp"
              alt="A visual of the Sales Development pipeline: a target account list, an outbound sequence, and booked meetings as the result"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              Accounts in, sequence out, meetings booked. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
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
            Sales Development is one of three departments included in Starter at $299 a month.
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
        heading="Brief Sales Development this week."
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
