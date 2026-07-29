import Link from "next/link"
import { buildMetadata } from "@/lib/metadata"
import { Hero } from "@/components/marketing/hero"
import { Section } from "@/components/marketing/section"
import { CtaBand } from "@/components/marketing/cta-band"
import { buttonVariants } from "@/components/ui/button"
import { OrderedList, List, DataTable } from "@/components/ui/typography"
import { ProductShot } from "@/components/ui/product-shot"

export const metadata = buildMetadata({
  title: "Direct a team. Not a tool.",
  description:
    "Alyvon is an AI workforce platform. One hundred and seventeen specialists across sixteen departments, each led by a Director, deliver finished work product. Start a 14-day free trial.",
  path: "/",
})

const TRIAL_URL = "https://app.alyvon.com"

const DEPARTMENTS_TABLE: { name: string; href: string; produces: string }[] = [
  {
    name: "Content and Editorial",
    href: "/workforce/content",
    produces: "Briefs, articles, page copy, email sequences, and edited final drafts",
  },
  {
    name: "Research and Insights",
    href: "/workforce/research",
    produces: "Market scans, competitor audits, customer and data research",
  },
  {
    name: "Brand",
    href: "/workforce/brand",
    produces: "Identity systems, voice and copy rules, campaign concepts, design tokens",
  },
  {
    name: "Sales Development",
    href: "/workforce/sales-development",
    produces: "Prospect research, outbound sequences, call and meeting prep",
  },
  {
    name: "Marketing Operations",
    href: "/workforce/marketing-ops",
    produces: "Campaign builds, funnel copy, CRM and automation work, reporting",
  },
]

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="AI workforce platform"
        heading="Direct a team. Not a tool."
        subhead="Alyvon gives you 117 specialists across 16 departments, each led by a Director who turns a brief into a finished file. You direct the work. The work ships."
        actions={
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                Start your free trial
              </a>
              <Link href="/pricing" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                See pricing
              </Link>
            </div>
            <p className="text-body-s text-text-secondary">
              14 days or 10 deliverables, whichever comes first. No credit card.
            </p>
          </div>
        }
        visual={
          <ProductShot
            src="/images/homepage/workforce-board-dashboard-hero.png"
            alt="Alyvon workforce board dashboard showing departments, specialists, and task status"
            aspect="tier1Hero"
            priority
            illustrative
            caption="The workforce board: every department, every specialist, every task in flight."
          />
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-5">
          <h2 className="text-display-m text-text-primary">
            Hiring is slow. Agencies are expensive. Point tools still need a person to run them.
          </h2>
          <p className="text-body-l text-text-secondary">
            A single specialist hire takes months to source, interview, and onboard, and it covers
            one function. An agency retainer covers a few functions at a fixed monthly cost
            regardless of output. A point tool answers prompts, but someone on your team still has
            to direct it, check its work, and assemble the result into something you can send to a
            client or a board.
          </p>
          <p className="text-body-l text-text-primary">
            Alyvon is built to close that gap: a full workforce, briefed like a team, delivering
            finished files.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">How it works</h2>
          <OrderedList className="max-w-[720px] text-body-l">
            <li>Write a brief. Tell a Director what you need, in plain language, the way you would brief a hire.</li>
            <li>The Director routes it. Your brief goes to the right specialist or specialists inside their department.</li>
            <li>You get a finished file. A document, a spreadsheet, a slide deck, a piece of code, or a project archive, ready to use.</li>
            <li>Anything that sends, publishes, or pays waits for your approval. Nothing goes out on its own.</li>
          </OrderedList>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[720px] flex-col gap-3">
            <h2 className="text-display-m text-text-primary">Departments overview</h2>
            <p className="text-body-l text-text-secondary">
              Alyvon runs 16 departments. This site currently documents five in depth, the
              departments most agencies, SaaS teams, and professional service firms lean on first:
            </p>
          </div>

          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Department</DataTable.HeaderCell>
                <DataTable.HeaderCell>What it produces</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {DEPARTMENTS_TABLE.map((dept) => (
                <DataTable.Row key={dept.href}>
                  <DataTable.Cell className="font-medium text-text-primary">
                    <Link href={dept.href} className="hover:text-accent-strong">
                      {dept.name}
                    </Link>
                  </DataTable.Cell>
                  <DataTable.Cell>{dept.produces}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>

          <p className="max-w-[720px] text-body text-text-secondary">
            The remaining 11 departments are live inside the product today. Their dedicated pages
            are built only when there is enough demand to justify one each, the same standard this
            site holds itself to. Until then, they are represented as department cards, not empty
            pages.
          </p>

          <div>
            <Link href="/workforce" className={buttonVariants({ variant: "ghost", size: "md" })}>
              See all 16 departments
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-3">
            <h2 className="text-display-m text-text-primary">What you get, not what it does</h2>
            <p className="text-body-l text-text-secondary">
              Alyvon does not answer prompts. It delivers files: a docx brief, an xlsx model, a
              pptx deck, a pdf report, working code, or a packaged project archive, built by a
              specialist and reviewed inside a Director-led workflow.
            </p>
          </div>

          <div className="flex max-w-[720px] flex-col gap-3">
            <h3 className="font-mono text-label uppercase text-text-secondary">
              How the platform is built
            </h3>
            <List className="text-body-l">
              <li>Every task runs in a fresh, isolated sandbox that is destroyed when the task completes.</li>
              <li>Alyvon connects to roughly 200 apps you already use, exposing more than 1,000 individual actions across them.</li>
              <li>Sending an email, publishing a post, or spending money always waits for a human approval step.</li>
              <li>Your data is never used to train underlying models.</li>
            </List>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Direct your first team this week."
        subhead="14 days or 10 deliverables, whichever comes first. No credit card. Cancel anytime."
        actions={
          <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
            Start your free trial
          </a>
        }
      />
    </>
  )
}
