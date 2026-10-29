import Link from "next/link"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Container } from "@/components/marketing/container"
import { PageHero } from "@/components/marketing/page-hero"
import { Faq } from "@/components/marketing/faq"
import { JsonLd } from "@/components/marketing/json-ld"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { PostBody, smartQuotes } from "@/components/blog/post-body"
import { TRACK_LABEL, getAllPosts, getPost, readingMinutes, tableOfContents } from "@/lib/blog"
import { getAuthor } from "@/lib/blog/authors"
import { blogPostingSchema, faqSchema } from "@/lib/jsonld"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const author = getAuthor(post.author)
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    article: {
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: author ? [author.name] : [],
    },
  })
}

const DATE = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })

export default async function BlogPost({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const author = getAuthor(post.author)
  const authorPath = `/insights/authors/${post.author}`
  const toc = tableOfContents(post)
  const related = (post.related ?? []).map(getPost).filter((p) => p !== undefined)
  const path = `/insights/${post.slug}`
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: post.title, path },
  ]

  return (
    <>
      <article>
        <PageHero
          size="md"
          crumbs={crumbs}
          eyebrow={
            <>
              {post.category} · {TRACK_LABEL[post.track]}
            </>
          }
          title={smartQuotes(post.title)}
          subhead={smartQuotes(post.description)}
          meta={
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {author ? (
                <>
                  By{" "}
                  <Link href={authorPath} rel="author" className="font-medium text-white underline underline-offset-4 hover:text-accent">
                    {author.name}
                  </Link>
                  <span aria-hidden="true">·</span>
                </>
              ) : null}
              <time dateTime={post.published}>{DATE.format(new Date(post.published))}</time>
              {post.updated !== post.published ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{DATE.format(new Date(post.updated))}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post)} min read</span>
            </p>
          }
        />

        <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="flex min-w-0 max-w-[760px] flex-col gap-10">
            {/* TL;DR first: the question answered outright, for readers, snippets and AI answers. */}
            <section aria-labelledby="short-answer" className="rounded-[16px] border border-border-subtle bg-canvas p-6 shadow-sm">
              <h2 id="short-answer" className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent-strong">
                TL;DR
              </h2>
              <p className="mt-2 text-[19px] leading-[30px] text-text-primary">{smartQuotes(post.answer)}</p>
            </section>

            <PostBody blocks={post.body} />

            <section aria-labelledby="takeaways" className="rounded-[16px] bg-surface p-6 sm:p-7">
              <h2 id="takeaways" className="text-[22px] font-bold tracking-[-0.02em] text-text-primary">
                Key takeaways
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-body-l text-text-primary">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {smartQuotes(t)}
                  </li>
                ))}
              </ul>
            </section>

            {post.sources?.length ? (
              <section aria-labelledby="sources" className="border-t border-border-subtle pt-6">
                <h2 id="sources" className="text-body font-semibold text-text-primary">
                  Sources
                </h2>
                <ul className="mt-2 flex flex-col gap-1 text-body-s text-text-secondary">
                  {post.sources.map((s) => (
                    <li key={s.url + s.label}>
                      <a href={s.url} rel="noopener" target="_blank" className="underline underline-offset-4 hover:text-text-primary">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <Faq items={post.faq.map((f) => ({ q: smartQuotes(f.q), a: smartQuotes(f.a) }))} />

            {/* CTA */}
            <section className="bg-grid-dark flex flex-col gap-5 rounded-[18px] bg-inverse p-7 text-text-on-inverse sm:p-10">
              <h2 className="text-balance text-[26px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-[32px]">
                {smartQuotes(post.cta.heading)}
              </h2>
              <p className="text-body-l text-white/80">{smartQuotes(post.cta.body)}</p>
              <div className="flex flex-wrap items-center gap-3">
                <PrimaryCta placement={`blog_${post.slug}`} />
                <DemoCta placement={`blog_${post.slug}`} />
              </div>
            </section>

            {author ? (
              <section aria-label="About the author" className="flex flex-col gap-1 border-t border-border-subtle pt-6">
                <p className="text-body font-semibold text-text-primary">
                  <Link href={authorPath} className="underline underline-offset-4">
                    {author.name}
                  </Link>
                  <span className="font-normal text-text-secondary">, {author.role}</span>
                </p>
                <p className="text-body-s text-text-secondary">{smartQuotes(author.bio)}</p>
              </section>
            ) : null}
          </div>

          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24 flex flex-col gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">On this page</p>
              <ol className="flex flex-col gap-2 border-l border-border-subtle">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:border-accent hover:text-text-primary"
                    >
                      {smartQuotes(t.text)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </Container>
      </article>

      {related.length ? (
        <section aria-labelledby="related" className="border-t border-border-subtle bg-surface py-14">
          <Container className="flex flex-col gap-6">
            <h2 id="related" className="text-[24px] font-bold tracking-[-0.02em] text-text-primary">
              Keep reading
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/insights/${r.slug}`}
                    className="flex h-full flex-col gap-2 rounded-[14px] border border-border-subtle bg-canvas p-6 transition-colors duration-micro ease-out-standard hover:border-border-input"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-strong">{r.category}</span>
                    <span className="text-[19px] font-semibold leading-snug text-text-primary">{smartQuotes(r.title)}</span>
                    <span className="text-body-s text-text-secondary">{smartQuotes(r.description)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <MobileCtaBar placement={`blog_${post.slug}_mobile_bar`} />
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.description,
            path,
            published: post.published,
            updated: post.updated,
            author: { name: author?.name ?? "Alyvon", path: authorPath },
          }),
          faqSchema(post.faq),
        ]}
      />
    </>
  )
}
