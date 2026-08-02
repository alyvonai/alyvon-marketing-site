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
  title: "Brand - Alyvon",
  description:
    "Brand: Owns positioning, naming, voice, and the design system's non-visual rules, the layer every page and every ad has to pass through before it ships.",
  path: "/workforce/brand",
})

const SPECIALISTS = [
  {
    name: "Brennan",
    line: "Brand Strategist: positioning, narrative, and brand architecture",
  },
  {
    name: "Devon",
    line: "Naming Strategist: product names, taglines, and branded vocabulary",
  },
  {
    name: "Elliot",
    line: "Brand Editor: voice and tone enforcement, auditing brand language across every surface",
  },
]

const USE_CASES = [
  {
    title: "Five departments about to write with no shared rulebook",
    brief:
      "Write the voice and copy rules every writer loads before starting, with wrong and right examples.",
    artifact: "A brand layer reference as a docx.",
  },
  {
    title: "A feature that needs a real name before it ships",
    brief: "Name this new feature inside Marketing Hub.",
    artifact: "A naming options memo as a docx, three names with the reasoning for each.",
  },
  {
    title: "A draft that reads off-voice",
    brief: "Read this draft and flag every line that breaks a voice rule.",
    artifact: "A markup as a docx, each flagged line paired with the fix.",
  },
  {
    title: "A sales pitch that changes on every call",
    brief:
      "Write the canonical sell: what we are, what we're not, and how a founder buys versus how a VP buys.",
    artifact: "A positioning spine as a docx.",
  },
  {
    title: "A page close to launch with an unchecked claim",
    brief: "Audit this page against the banned-claims list before it ships.",
    artifact: "A claims audit as a docx, page by page.",
  },
]

const PAIRS_WITH = [
  {
    department: "Content and Editorial",
    copy:
      "Brand hands Content the voice rules and positioning spine before a word is written, so every page executes one voice.",
  },
  {
    department: "Marketing Operations",
    copy:
      "Brand's naming and positioning decisions set the vocabulary Marketing Operations builds campaigns and creative angles around.",
  },
  {
    department: "Sales Development",
    copy:
      "Brand's canonical sell gives Sales Development one consistent script instead of a different pitch on every call.",
  },
]

export default function BrandDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Brand"
        subhead="Owns positioning, naming, voice, and the copy rules every page and every ad has to pass before it ships."
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
              alt="The Alyvon board with the Brand department running inside a live team run"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>
              Brand, live inside a team run. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        }
      />

      <Section tone="canvas" spacing="sm">
        <div className="max-w-[860px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <p className="text-body-l text-text-primary">
            Brand is Alyvon&apos;s positioning department: a Brand Director and three strategists who
            own naming, voice, and the canonical sell — the layer every page and campaign passes
            through before it launches.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who this is for</h2>
          <p className="text-body-l text-text-secondary">
            For the operator scaling past the point where the brand lives in your head — every writer
            sounds different, the pitch changes on every call, and half the drafts come back
            off-voice. Brand sets the rules once, so everything after it ships in one voice.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who runs it</h2>
          <p className="text-body-l text-text-secondary">
            Avery, Brand Director, owns brand strategy, positioning, naming, taglines, brand
            guidelines, and brand voice. Text and strategy deliverables only; image and video
            production route to the separate Creative department.
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
            Brand is one of eight departments included in Growth at $899 a month.
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
            Pairing departments costs nothing extra beyond your plan. Growth already includes eight
            departments working together at no added charge; every seat can brief any of them, not
            one department at a time.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              Brand sets the rules Content writes by.
            </h2>
            <p className="text-body-l text-text-secondary">
              Positioning, naming, and voice don&apos;t stay on a shelf — Brand hands them straight
              to Content and Editorial before a single page or email gets written, so every
              specialist across both departments is working from the same rulebook.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/groups/brand-content.webp"
              alt="Brand and Content and Editorial specialists reviewing voice rules and positioning together"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              Product interface. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Brief Brand this week."
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
