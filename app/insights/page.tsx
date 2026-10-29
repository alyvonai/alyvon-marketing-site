import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { PageHero } from "@/components/marketing/page-hero"
import { Container } from "@/components/marketing/container"
import { Eyebrow } from "@/components/home/ui"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { JsonLd } from "@/components/marketing/json-ld"
import { smartQuotes } from "@/components/blog/post-body"
import { TRACK_LABEL, getAllPosts, readingMinutes } from "@/lib/blog"
import { itemListSchema } from "@/lib/jsonld"
import { TEMPLATES } from "@/lib/templates"
import { CTA } from "@/lib/site"

export const metadata = {
  ...buildMetadata({
    title: "Insights: scoping, AI readiness and delivery for AI agencies",
    description:
      "Practical guides and free templates for AI agencies: AI readiness assessments, why AI pilots fail, statements of work, change orders, and what an AI workforce is.",
    path: "/insights",
  }),
  alternates: {
    canonical: "https://www.alyvon.com/insights",
    types: { "application/rss+xml": "https://www.alyvon.com/insights/rss.xml" },
  },
}

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insights", path: "/insights" },
]

const DATE = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })

export default function InsightsIndex() {
  const posts = getAllPosts()
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Insights"
        title={
          <>
            Scope it right. <span className="text-accent">Prove it worked.</span>
          </>
        }
        subhead="Guides and free templates for AI agencies and the clients they work with: readiness, scoping, pilots, statements of work, change orders and the AI workforce."
      />

      <Section tone="canvas">
        <ul className="grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col gap-3 rounded-[16px] border border-border-subtle bg-canvas p-6 transition-colors duration-micro ease-out-standard hover:border-border-input hover:bg-surface sm:p-7"
              >
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                  <span className="text-accent-strong">{p.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{TRACK_LABEL[p.track]}</span>
                </p>
                <h2 className="text-balance text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-text-primary sm:text-[24px]">
                  {smartQuotes(p.title)}
                </h2>
                <p className="text-body text-text-secondary">{smartQuotes(p.description)}</p>
                <p className="mt-auto flex items-center justify-between gap-3 pt-2 text-body-s text-text-secondary">
                  <span>
                    <time dateTime={p.published}>{DATE.format(new Date(p.published))}</time> · {readingMinutes(p)} min read
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-accent-strong transition-transform duration-micro ease-out-standard group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Free templates */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[760px] flex-col gap-4">
            <Eyebrow>Free templates</Eyebrow>
            <h2 className="text-balance text-display-l">Editable Word templates from these guides.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/templates/${t.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-[14px] border border-border-subtle bg-canvas p-6 transition-colors duration-micro ease-out-standard hover:border-border-input"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[18px] font-semibold leading-snug text-text-primary">{t.title}</span>
                  <span className="text-body-s text-text-secondary">{smartQuotes(t.summary)}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-body-s font-semibold text-accent-strong">
                    Get the .docx <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-ember bg-inverse py-20 text-center text-text-on-inverse sm:py-24">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
            Put the method to work on your next client.
          </h2>
          <p className="text-body-l text-white/80">{CTA.founding.micro}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta placement="blog_index_final_cta" />
            <DemoCta placement="blog_index_final_cta" />
          </div>
        </Container>
      </section>

      <JsonLd
        data={itemListSchema({ name: "Alyvon Insights", items: posts.map((p) => ({ name: p.title, path: `/insights/${p.slug}` })) })}
      />
    </>
  )
}
