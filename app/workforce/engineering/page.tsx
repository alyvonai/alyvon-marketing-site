import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Engineering is the one department whose delivery mechanism is a real GitHub pull
// request (Pattern D in the app), not a create_deliverable file. Copy is persona/pain-led
// and leads with that difference. Pricing is intentionally generic + links to /pricing
// rather than claiming a tier we can't verify from this repo.

const TRIAL_URL = "https://app.alyvon.com/signup"

export const metadata = buildMetadata({
  title: "Engineering - Alyvon",
  description:
    "Engineering: ships real product changes as GitHub pull requests your team reviews and merges — landing pages, fixes, features, and full projects — not a doc describing what to build.",
  path: "/workforce/engineering",
})

const USE_CASES = [
  {
    title: "A landing page that's been 'next sprint' for a month",
    brief: "Build a pricing-page variant with this copy and open it as a pull request.",
    artifact: "A pull request with the new page, ready to review and merge.",
  },
  {
    title: "A copy fix nobody's had time to deploy",
    brief: "Change the homepage hero headline to this and open a PR.",
    artifact: "A one-file pull request on a new branch.",
  },
  {
    title: "A standalone internal tool with no owner",
    brief: "Build an internal ROI calculator as a small web app.",
    artifact: "A zipped project, or a pull request to a new repo.",
  },
  {
    title: "A backlog ticket that keeps slipping",
    brief: "Implement this small feature from our issue tracker and open a PR.",
    artifact: "A pull request linked to the issue.",
  },
]

const PAIRS_WITH = [
  {
    department: "Content and Editorial",
    copy: "Content writes the page copy; Engineering ships it as a real page in a PR — the words and the build arrive together.",
  },
  {
    department: "Brand",
    copy: "Brand's voice and design rules constrain what Engineering builds, so a shipped page matches the canonical look and sell.",
  },
  {
    department: "Research and Insights",
    copy: "Research supplies the numbers a tool or dashboard is built around, so Engineering ships something accurate, not a mockup.",
  },
]

export default function EngineeringDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Engineering"
        subhead="Ships real product changes as pull requests your team reviews and merges — landing pages, fixes, and features — not a doc describing what to build."
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
              src="/images/workforce/library-files.webp"
              alt="The Alyvon Library showing an Engineering deliverable — a Next.js project shipped by Hugo"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>
              Engineering's output lands in your Library and your repo. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        }
      />

      <Section tone="canvas" spacing="sm">
        <div className="max-w-[860px] rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
          <p className="text-body-l text-text-primary">
            Engineering is Alyvon&apos;s build department, led by Hugo, the Engineering Director, who
            turns a plain-language brief into a real GitHub pull request — code, a landing page, or a
            full project — that your team reviews and merges.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who this is for</h2>
          <p className="text-body-l text-text-secondary">
            For founders and operators with a build backlog and no spare engineering hours — the
            landing page that&apos;s been &ldquo;next sprint&rdquo; for a month, the copy fix nobody
            has deployed, the small feature stuck behind bigger ones. Brief it and the change comes
            back as a pull request, not a to-do.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Who runs it</h2>
            <p className="text-body-l text-text-secondary">
              Hugo, the Engineering Director, reads your repo&apos;s real current state, creates a
              branch, commits, and opens a pull request. He never pushes to your main branch and never
              merges his own PR — your team always has the final review.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/groups/product-engineering.webp"
              alt="A pull request diff view showing code changes ready for a team to review and merge"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              A pull request, ready for your team to review and merge. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      <Section tone="canvas">
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

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">How Engineering delivers</h2>
          <p className="text-body-l text-text-secondary">
            Engineering doesn&apos;t hand you a document about code — it ships the code. Hugo works
            through your connected GitHub: he reads the repo&apos;s true current state (never
            assumes), branches, commits, and opens a pull request. Humans merge — that&apos;s the
            safety gate, and it&apos;s always yours.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing</h2>
          <p className="text-body-l text-text-primary">
            Engineering is included in your plan the same as any other department — there is no
            per-department add-on fee.
          </p>
          <p className="text-body text-text-secondary">
            Once a department is included in your plan, every seat can brief it directly. See which
            departments each plan includes on the pricing page.
          </p>
          <div>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "secondary", size: "md" }))}>
              See pricing
            </Link>
          </div>
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
            Pairing departments costs nothing extra beyond your plan. Every seat can brief any
            included department, and they hand work to each other automatically — the page copy, the
            brand rules, and the build arrive as one shipped result.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Ship your first pull request this week."
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
