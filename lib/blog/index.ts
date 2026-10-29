import type { Block, Post } from "@/lib/blog/types"
import { post as aiReadiness } from "@/lib/blog/posts/ai-readiness-assessment"
import { post as pilotsFail } from "@/lib/blog/posts/why-ai-pilots-fail"
import { post as changeOrder } from "@/lib/blog/posts/change-order-template"
import { post as aiWorkforce } from "@/lib/blog/posts/what-is-an-ai-workforce"
import { post as sowTemplate } from "@/lib/blog/posts/statement-of-work-template-ai"
import { post as scopeAiProject } from "@/lib/blog/posts/how-to-scope-an-ai-project"

// Register a post here to publish it (index, sitemap, RSS and static params all read this).
const POSTS: Post[] = [scopeAiProject, aiReadiness, pilotsFail, changeOrder, aiWorkforce, sowTemplate]

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title))
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

function blockText(b: Block): string {
  switch (b.type) {
    case "p":
    case "h2":
    case "h3":
      return b.text
    case "ul":
    case "ol":
      return b.items.join(" ")
    case "definition":
      return `${b.term} ${b.text}`
    case "table":
      return [...b.head, ...b.rows.flat()].join(" ")
    case "callout":
      return `${b.title} ${b.text}`
    case "template":
      return b.sections.flatMap((s) => [s.label, ...s.lines]).join(" ")
  }
}

export function readingMinutes(post: Post): number {
  const words = [post.answer, ...post.takeaways, ...post.body.map(blockText), ...post.faq.flatMap((f) => [f.q, f.a])]
    .join(" ")
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 230))
}

export function tableOfContents(post: Post): { id: string; text: string }[] {
  return post.body.flatMap((b) => (b.type === "h2" ? [{ id: b.id, text: b.text }] : []))
}

export const TRACK_LABEL: Record<Post["track"], string> = {
  agency: "For agencies",
  buyer: "For buyers",
  both: "Agencies and buyers",
}
