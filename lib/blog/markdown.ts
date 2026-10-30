import type { Block, Post } from "@/lib/blog/types"
import { getAuthor } from "@/lib/blog/authors"
import { SITE_URL } from "@/lib/site"

// Renders posts as clean Markdown for /llms-full.txt: same content as the HTML page,
// with relative links made absolute so they still work outside the site.

const absolute = (t: string) => t.replace(/\]\((\/[^)]*)\)/g, (_, p) => `](${SITE_URL}${p})`)
const cell = (t: string) => absolute(t).replace(/\|/g, "\\|")

function block(b: Block): string {
  switch (b.type) {
    case "p":
      return absolute(b.text)
    case "h2":
      return `## ${b.text}`
    case "h3":
      return `### ${b.text}`
    case "ul":
      return b.items.map((i) => `- ${absolute(i)}`).join("\n")
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${absolute(i)}`).join("\n")
    case "definition":
      return `**${b.term}:** ${absolute(b.text)}`
    case "table":
      return [
        b.caption ? `*${b.caption}*\n` : "",
        `| ${b.head.map(cell).join(" | ")} |`,
        `| ${b.head.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
      ].join("\n")
    case "callout":
      return `> **${b.title}** ${absolute(b.text)}`
    case "flow":
      return [`*${b.caption}*`, "", ...b.steps.map((s, i) => `${i + 1}. **${s.label}:** ${s.note}`)].join("\n")
    case "template":
      return [
        `### ${b.title}`,
        ...b.sections.map((s) => `**${s.label}**\n${s.lines.map((l) => `- ${l}`).join("\n")}`),
        b.download ? `Editable .docx: ${SITE_URL}/templates/${b.download}` : "",
      ]
        .filter(Boolean)
        .join("\n\n")
  }
}

export function postToMarkdown(post: Post): string {
  const author = getAuthor(post.author)
  return [
    `# ${post.title}`,
    [
      `URL: ${SITE_URL}/insights/${post.slug}`,
      author ? `Author: ${author.name}, ${author.role}` : "",
      `Published: ${post.published}${post.updated !== post.published ? ` · Updated: ${post.updated}` : ""}`,
    ]
      .filter(Boolean)
      .join("\n"),
    `**TL;DR:** ${post.answer}`,
    ...post.body.map(block),
    `## Key takeaways\n\n${post.takeaways.map((t) => `- ${t}`).join("\n")}`,
    `## Frequently asked questions\n\n${post.faq.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}`,
    post.sources?.length ? `## Sources\n\n${post.sources.map((s) => `- [${s.label}](${s.url})`).join("\n")}` : "",
  ]
    .filter(Boolean)
    .join("\n\n")
}
