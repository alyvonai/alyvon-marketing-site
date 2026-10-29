import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, FileText } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Container } from "@/components/marketing/container"
import { Eyebrow } from "@/components/home/ui"
import { smartQuotes } from "@/components/blog/post-body"
import { TemplateDownloadForm } from "@/components/templates/template-download-form"
import { TEMPLATES, getTemplate } from "@/lib/templates"
import { getPost } from "@/lib/blog"

// Download (squeeze) pages: noindex,follow. The open blog post is the page meant to rank;
// these pages only exchange an email for the editable file.

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }))
}

export const dynamicParams = false

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const t = getTemplate(slug)
  if (!t) return {}
  return buildMetadata({
    title: `Free download: ${t.title}`,
    description: t.summary,
    path: `/templates/${t.slug}`,
    noindex: true,
  })
}

export default async function TemplatePage({ params }: Params) {
  const { slug } = await params
  const t = getTemplate(slug)
  if (!t) notFound()
  const post = getPost(t.post)
  const block = post?.body.find((b) => b.type === "template" && b.download === t.slug)
  const sections = block && block.type === "template" ? block.sections.map((s) => s.label) : []

  return (
    <section className="bg-grid-dark bg-inverse text-text-on-inverse">
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
          <Eyebrow tone="dark">Free template · Editable Word file</Eyebrow>
          <h1 className="text-balance text-[38px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[52px]">{t.title}</h1>
          <p className="text-body-l text-white/80">{smartQuotes(t.summary)}</p>
          <ul className="flex flex-col gap-3">
            {t.includes.map((i) => (
              <li key={i} className="flex gap-3 text-body-l text-white/90">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
          {sections.length ? (
            <div className="rounded-[14px] border border-white/10 p-5">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                <FileText className="h-4 w-4" aria-hidden="true" /> Sections in the document
              </p>
              <p className="mt-2 text-body-s text-white/75">{sections.join(" · ")}</p>
            </div>
          ) : null}
          {post ? (
            <p className="text-body-s text-white/60">
              Prefer to read it first? The full template and how to use it are open in{" "}
              <Link href={`/insights/${post.slug}`} className="font-medium text-white underline underline-offset-4">
                {smartQuotes(post.title)}
              </Link>
              .
            </p>
          ) : null}
        </div>
        <div className="text-text-primary">
          <TemplateDownloadForm slug={t.slug} file={t.file} title={t.title} />
        </div>
      </Container>
    </section>
  )
}
