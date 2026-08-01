import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { StatBar } from "@/components/marketing/stat-bar"
import { RoleSelector } from "@/components/marketing/role-selector"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { CTA, WORKFORCE_GROUPS, groupBySlug } from "@/lib/site"
import { GROUP_CONTENT } from "@/lib/workforce-group-content"
import {
  softwareApplicationSchema,
  faqSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/jsonld"

export function groupMetadata(slug: string) {
  const g = groupBySlug(slug)
  if (!g) return buildMetadata({ title: "Workforce", description: "Alyvon Workforce", path: "/workforce" })
  return buildMetadata({
    title: `${g.label} - Alyvon Workforce`,
    description: g.subhead,
    path: g.href,
  })
}

function trialActions(placement: string) {
  return (
    <div className="flex flex-col gap-3">
      <TrackedCta
        href={CTA.workforce.href}
        className={cn(buttonVariants({ size: "lg" }))}
        event="trial_cta_clicked"
        eventProps={{ product: "workforce", placement, workforce_group: placement }}
      >
        {CTA.workforce.label}
      </TrackedCta>
      <p className="text-body-s text-text-secondary">{CTA.workforce.micro}</p>
    </div>
  )
}

// Shared 17-section Workforce group template (spec §17). Structure is identical across
// groups; copy comes from lib/site (H1/subhead/CTA + departments) and
// lib/workforce-group-content (bullets, use cases, FAQ, anchor notes).
export function WorkforceGroupPage({ slug }: { slug: string }) {
  const group = groupBySlug(slug)
  const content = GROUP_CONTENT[slug]
  if (!group || !content) return null

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Workforce", path: "/workforce" },
    { name: group.label, path: group.href },
  ]
  const others = WORKFORCE_GROUPS.filter((g) => g.slug !== slug).slice(0, 3)
  const deptRoles = group.departments.map((d) => ({ label: d.name, href: `#${d.anchor}` }))

  return (
    <>
      <Hero
        eyebrow={group.addOn ? "Workforce group · paid add-on" : "Workforce group"}
        heading={group.h1}
        subhead={group.subhead}
        actions={trialActions(`${slug}_hero`)}
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/library-files.webp"
              alt={`Finished files produced by the ${group.label} group`}
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
        }
      />

      {/* Proof bar */}
      <Section tone="surface" spacing="sm">
        <StatBar
          items={[
            `${group.departments.length} department${group.departments.length > 1 ? "s" : ""}`,
            `${group.specialists} specialists`,
            "finished files, not transcripts",
          ]}
        />
      </Section>

      {/* Role selector + you're in the right place if */}
      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          {deptRoles.length > 1 ? (
            <RoleSelector items={deptRoles} label="Jump to a department" />
          ) : null}
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">You’re in the right place if…</h2>
            <ul className="flex flex-col gap-3">
              {content.rightPlace.map((b) => (
                <li key={b} className="flex items-start gap-2 text-body-l text-text-secondary">
                  <Check aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-accent-strong" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Use cases */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">What you can brief this group to do</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {content.useCases.map((uc) => (
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

      {/* Mid CTA */}
      <Section tone="canvas" spacing="sm">
        <div className="flex flex-col items-start gap-3">{trialActions(`${slug}_mid`)}</div>
      </Section>

      {/* How these departments work together */}
      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">How these departments work together</h2>
          <p className="text-body-l text-text-secondary">{content.together}</p>
        </div>
      </Section>

      {/* Department anchor sections */}
      {group.departments.map((d, i) => {
        const note = content.anchorNotes?.[d.anchor]
        return (
          <Section
            key={d.anchor}
            id={d.anchor}
            tone={i % 2 === 0 ? "canvas" : "surface"}
            className="scroll-mt-24"
          >
            <div className="flex max-w-[760px] flex-col gap-4">
              <span className="font-mono text-label uppercase text-accent-strong">Department</span>
              <h2 className="text-display-m text-text-primary">{d.name}</h2>
              {d.director ? (
                <p className="text-body-s text-text-secondary">Led by {d.director}.</p>
              ) : null}
              <p className="text-body-l text-text-secondary">Produces: {d.produces}.</p>
              {note ? (
                <div className="mt-2 rounded-r-card border-l-4 border-accent bg-accent-wash p-6">
                  <h3 className="text-body-l font-medium text-text-primary">{note.title}</h3>
                  <p className="mt-1 text-body text-text-secondary">{note.body}</p>
                  {note.ctaHref && note.ctaLabel ? (
                    <Link
                      href={note.ctaHref}
                      className="mt-3 inline-block font-mono text-label uppercase text-accent-strong underline-offset-4 hover:underline"
                    >
                      {note.ctaLabel}
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Section>
        )
      })}

      {/* How Alyvon delivers (routing shot) + integrations + cost framing */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/board-run.webp"
              alt="The Alyvon board routing a brief across Directors"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">How Alyvon delivers</h2>
            <p className="text-body-l text-text-secondary">
              Brief the Chief of Staff in plain language. It routes to the right Director and
              specialists, who work inside the tools you already run — Alyvon connects to 1,000+
              integrations — and a Director reviews the file before it reaches your Library.
            </p>
            <p className="text-body text-text-tertiary">
              Internal telemetry shows recurring work can run at model/runtime costs measured in
              dollars per week. Examples on this site use illustrative data.
            </p>
          </div>
        </div>
      </Section>

      {/* Pairs with (other groups) */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Pairs with</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((g) => (
              <Card key={g.slug}>
                <CardHeader>
                  <CardTitle className="text-body-l">
                    <Link href={g.href} className="underline-offset-4 hover:underline">
                      {g.label}
                    </Link>
                  </CardTitle>
                  <CardDescription>{g.tagline}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing</h2>
          <p className="text-body-l text-text-secondary">
            {group.addOn
              ? "Creative is a paid add-on on every plan — media generation and creative QA carry real incremental cost, so it’s priced as its own capacity line."
              : "Starter includes core routing plus 2 selected departments, Growth plus 7, and Scale and Enterprise include the full Workforce. Creative carries separate add-on pricing."}
          </p>
          <div>
            <Link href="/workforce/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See Workforce pricing
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <Faq items={content.faq} />
      </Section>

      <CtaBand
        heading={group.finalCta}
        subhead={CTA.workforce.micro}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: `${slug}_final_cta`, workforce_group: slug }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd
        data={[
          softwareApplicationSchema({
            name: `Alyvon Workforce — ${group.label}`,
            description: group.subhead,
            url: group.href,
          }),
          itemListSchema({
            name: `${group.label} departments`,
            items: group.departments.map((d) => ({ name: d.name, path: `${group.href}#${d.anchor}` })),
          }),
          faqSchema(content.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  )
}
