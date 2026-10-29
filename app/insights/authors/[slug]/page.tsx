import Link from "next/link"
import { notFound } from "next/navigation"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { PageHero } from "@/components/marketing/page-hero"
import { JsonLd } from "@/components/marketing/json-ld"
import { smartQuotes } from "@/components/blog/post-body"
import { getAllPosts } from "@/lib/blog"
import { AUTHORS, getAuthor } from "@/lib/blog/authors"
import { ALYVON_IS } from "@/lib/site"
import { personSchema } from "@/lib/jsonld"

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}
  return buildMetadata({ title: `${author.name}, ${author.role}`, description: author.bio, path: `/insights/authors/${slug}` })
}

export default async function AuthorPage({ params }: Params) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()
  const path = `/insights/authors/${slug}`
  const posts = getAllPosts().filter((p) => p.author === slug)
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: author.name, path },
  ]

  return (
    <>
      <PageHero
        size="md"
        crumbs={crumbs}
        eyebrow={author.role}
        title={author.name}
        subhead={smartQuotes(author.bio)}
        meta={
          <div className="flex flex-col gap-3">
            <p>{ALYVON_IS}</p>
            {author.sameAs?.length ? (
              <ul className="flex flex-wrap gap-4">
                {author.sameAs.map((u) => (
                  <li key={u}>
                    <a href={u} rel="me noopener" target="_blank" className="text-white underline underline-offset-4 hover:text-accent">
                      {new URL(u).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        }
      />
      <Section tone="canvas">
        <h2 className="text-[24px] font-bold tracking-[-0.02em]">Articles</h2>
        <ul className="mt-6 flex flex-col divide-y divide-border-subtle border-y border-border-subtle">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/insights/${p.slug}`} className="flex flex-col gap-1 py-5 hover:bg-surface sm:px-2">
                <span className="text-[19px] font-semibold text-text-primary">{smartQuotes(p.title)}</span>
                <span className="text-body-s text-text-secondary">{smartQuotes(p.description)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <JsonLd
        data={personSchema({ name: author.name, role: author.role, path, sameAs: author.sameAs })}
      />
    </>
  )
}
