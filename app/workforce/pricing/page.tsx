import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { WorkforcePlans } from "@/components/marketing/workforce-plans"
import { DataTable } from "@/components/ui/typography"
import { CTA, WORKFORCE_STATS } from "@/lib/site"
import { WORKFORCE_PLANS, CREDIT_PACK, VIDEO_PACK, CREDIT_COST_EXAMPLES } from "@/lib/pricing"
import { faqSchema, breadcrumbSchema } from "@/lib/jsonld"

const DEPTS = WORKFORCE_STATS.departments
const [STARTER, GROWTH, SCALE] = WORKFORCE_PLANS

export const metadata = buildMetadata({
  title: "Workforce pricing",
  description: `Alyvon Workforce pricing: Starter at ${STARTER.priceMonthly}, Growth at ${GROWTH.priceMonthly}, Scale at ${SCALE.priceMonthly}, and Enterprise — every plan includes all ${DEPTS} departments. Priced around task credits, not seats.`,
  path: "/workforce/pricing",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Workforce", path: "/workforce" },
  { name: "Pricing", path: "/workforce/pricing" },
]

const FAQ_ITEMS = [
  {
    q: "What is a task credit?",
    a: "One unit of work. A brief that returns one finished file uses about 1 credit. A brief that returns a set of files, or needs several Directors working together, uses more. You see the estimate before you send.",
  },
  {
    q: "Do I pick departments?",
    a: `No. Every plan includes all ${DEPTS} departments and all ${WORKFORCE_STATS.specialists} specialists. Alyvon, your Chief of Staff, routes each brief to the right Director. Plans differ on credits, seats, automation, custom agents, and video.`,
  },
  {
    q: "What happens when I run out of credits?",
    a: "Tasks already running finish. New tasks wait until you add a credit pack or your next month begins. You are never billed automatically for overage.",
  },
  {
    q: "Is video included?",
    a: `Images are included on every plan. Video generation is included on Scale and Enterprise. On Starter and Growth, add a video pack of 120 seconds, about 15 clips, for ${VIDEO_PACK.price}.`,
  },
  {
    q: "How does the free trial work?",
    a: "14 days or 15 credits, whichever comes first. You get the Growth feature set during the trial. No credit card to start, and you can cancel any time.",
  },
  {
    q: "Can we use our own model keys?",
    a: "Yes, on Enterprise. Connect your own Anthropic, OpenAI, or Google keys and your workforce runs on your accounts, your rate limits, and your data agreements. Talk to us to set it up.",
  },
  {
    q: "Is annual cheaper?",
    a: "Yes. Annual is 10 times the monthly price, so you get 2 months free.",
  },
]

const Yes = () => <Check aria-hidden="true" className="mx-auto size-4 text-accent-strong" />
const No = () => (
  <span aria-hidden="true" className="text-border-subtle">
    —
  </span>
)

export default function WorkforcePricingPage() {
  return (
    <>
      <Hero
        eyebrow="Workforce pricing"
        heading="Priced around finished work, not seats."
        subhead={`Pick a plan by how much work you need done each month. Every plan includes all ${DEPTS} departments and ${WORKFORCE_STATS.specialists} specialists. Start with a 14-day free trial, no credit card.`}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "workforce_pricing_hero" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      {/* Plan cards */}
      <Section tone="surface">
        <WorkforcePlans />
      </Section>

      {/* Feature comparison */}
      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Compare plans</h2>
          <p className="text-body-l text-text-secondary">
            Every plan gets the full Workforce. Higher plans add automation, custom agents, video,
            and more credits.
          </p>
        </div>

        <div className="mt-8">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.HeaderCell key={plan.name}>{plan.name}</DataTable.HeaderCell>
                ))}
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell className="font-medium text-text-primary">Monthly price</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="font-semibold text-text-primary">
                    {plan.priceMonthly}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Annual price
                  <span className="block text-text-tertiary">2 months free</span>
                </DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name}>{plan.priceAnnual}</DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Task credits a month</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="font-semibold text-text-primary">
                    {plan.creditsPerMonth}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Seats</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name}>{plan.seatsCount}</DataTable.Cell>
                ))}
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell
                  colSpan={5}
                  className="bg-surface font-mono text-label uppercase text-text-secondary"
                >
                  The workforce
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Departments</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    All {DEPTS}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Specialists</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    {WORKFORCE_STATS.specialists}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Alyvon, your Chief of Staff
                  <span className="block text-text-tertiary">Routes every brief to the right Director</span>
                </DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Finished files
                  <span className="block text-text-tertiary">Word, PowerPoint, Excel, PDF, web pages, code</span>
                </DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Library and board</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Approvals
                  <span className="block text-text-tertiary">Send, publish, and spend actions wait for you</span>
                </DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Brand voice</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Org memory
                  <span className="block text-text-tertiary">Context and decisions carry across tasks</span>
                </DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell
                  colSpan={5}
                  className="bg-surface font-mono text-label uppercase text-text-secondary"
                >
                  Automation and tools
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Routines
                  <span className="block text-text-tertiary">Scheduled, event based, or webhook triggered</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Integrations
                  <span className="block text-text-tertiary">Gmail, Slack, HubSpot, GHL, Notion, Drive and 1,000 more</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Custom agents
                  <span className="block text-text-tertiary">Build a specialist with its own brain and tools</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Improvement engine
                  <span className="block text-text-tertiary">Your team gets better from your feedback</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  Bring your own model keys
                  <span className="block text-text-tertiary">Run on your Anthropic, OpenAI, or Google keys</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <No />
                </DataTable.Cell>
                <DataTable.Cell className="text-center">
                  <Yes />
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell
                  colSpan={5}
                  className="bg-surface font-mono text-label uppercase text-text-secondary"
                >
                  Media
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Image generation</DataTable.Cell>
                {WORKFORCE_PLANS.map((plan) => (
                  <DataTable.Cell key={plan.name} className="text-center">
                    <Yes />
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Video generation</DataTable.Cell>
                <DataTable.Cell className="text-center text-text-tertiary">{VIDEO_PACK.name}</DataTable.Cell>
                <DataTable.Cell className="text-center text-text-tertiary">{VIDEO_PACK.name}</DataTable.Cell>
                <DataTable.Cell className="text-center">Included</DataTable.Cell>
                <DataTable.Cell className="text-center">Included</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell
                  colSpan={5}
                  className="bg-surface font-mono text-label uppercase text-text-secondary"
                >
                  Add-ons and support
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  {CREDIT_PACK.name}
                  <span className="block text-text-tertiary">25 credits</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">{CREDIT_PACK.price}</DataTable.Cell>
                <DataTable.Cell className="text-center">{CREDIT_PACK.price}</DataTable.Cell>
                <DataTable.Cell className="text-center">{CREDIT_PACK.price}</DataTable.Cell>
                <DataTable.Cell className="text-center">In contract</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>
                  {VIDEO_PACK.name}
                  <span className="block text-text-tertiary">120 seconds of video, about 15 clips</span>
                </DataTable.Cell>
                <DataTable.Cell className="text-center">{VIDEO_PACK.price}</DataTable.Cell>
                <DataTable.Cell className="text-center">{VIDEO_PACK.price}</DataTable.Cell>
                <DataTable.Cell className="text-center text-text-tertiary">Not needed</DataTable.Cell>
                <DataTable.Cell className="text-center text-text-tertiary">Not needed</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Onboarding</DataTable.Cell>
                <DataTable.Cell className="text-center">Self serve</DataTable.Cell>
                <DataTable.Cell className="text-center">Self serve</DataTable.Cell>
                <DataTable.Cell className="text-center">White glove</DataTable.Cell>
                <DataTable.Cell className="text-center">Dedicated</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Free trial</DataTable.Cell>
                <DataTable.Cell className="text-center">14 days or 15 credits</DataTable.Cell>
                <DataTable.Cell className="text-center">14 days or 15 credits</DataTable.Cell>
                <DataTable.Cell className="text-center">14 days or 15 credits</DataTable.Cell>
                <DataTable.Cell className="text-center text-text-tertiary">Pilot, scoped with you</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </Section>

      {/* Credits explainer */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-display-m text-text-primary">How credits work</h2>
              <p className="text-body-l text-text-secondary">
                A task credit is one unit of work. You spend credits on tasks, not on seats or files.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  n: "1",
                  title: "One finished file, about 1 credit.",
                  copy: "A report, a deck, a spreadsheet, a page of code. Most briefs land here.",
                },
                {
                  n: "+",
                  title: "A set of files uses more.",
                  copy: "Ask for a launch plan, a deck, and a press release in one brief and several Directors work it together. The task draws credits for each piece.",
                },
                {
                  n: "?",
                  title: "You see the estimate before you send.",
                  copy: "Every task shows its expected credit range up front. Nothing is a surprise.",
                },
                {
                  n: "0",
                  title: "Failed runs never cost a credit.",
                  copy: "If a task does not finish, you are not charged for it. Retries are on us.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-card bg-accent-wash font-mono text-label text-accent-strong">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-semibold text-text-primary">{item.title}</p>
                    <p className="text-body text-text-secondary">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-card border border-border-subtle bg-canvas p-6">
            <h3 className="text-body-l font-semibold text-text-primary">What things usually cost</h3>
            <dl className="mt-4 flex flex-col divide-y divide-border-subtle">
              {CREDIT_COST_EXAMPLES.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-body-s text-text-secondary">
                    {row.label}
                    {row.sublabel ? <span className="block text-text-tertiary">{row.sublabel}</span> : null}
                  </dt>
                  <dd className="whitespace-nowrap text-body-s font-semibold text-text-primary">{row.cost}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-body-s text-text-tertiary">
              Unused credits reset each month. Need more? Add a pack below at the same rate as your plan.
            </p>
          </aside>
        </div>
      </Section>

      {/* Packs */}
      <Section tone="canvas">
        <div className="flex max-w-[760px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Add more when you need it</h2>
          <p className="text-body-l text-text-secondary">
            No penalty pricing and no forced upgrade. Packs are one click from inside the app.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[CREDIT_PACK, VIDEO_PACK].map((pack) => (
            <div
              key={pack.name}
              className="flex items-center justify-between gap-4 rounded-card border border-border-subtle bg-canvas p-6"
            >
              <div>
                <h3 className="text-body-l font-semibold text-text-primary">{pack.name}</h3>
                <p className="mt-1 text-body-s text-text-secondary">{pack.summary}</p>
              </div>
              <span className="whitespace-nowrap text-display-m text-text-primary">{pack.price}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <Faq items={FAQ_ITEMS} heading="Questions" />
      </Section>

      <CtaBand
        heading="Start with the plan that fits the work."
        subhead={CTA.workforce.micro}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "workforce_pricing_final" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd data={[faqSchema(FAQ_ITEMS), breadcrumbSchema(crumbs)]} />

      <MobileCtaBar placement="workforce_pricing_sticky" />
    </>
  )
}
