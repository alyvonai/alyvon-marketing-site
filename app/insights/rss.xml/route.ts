import { getAllPosts } from "@/lib/blog"
import { getAuthor } from "@/lib/blog/authors"
import { SITE_URL } from "@/lib/site"

// RSS feed for Insights: lets readers, aggregators and AI crawlers pick up new posts.
export const dynamic = "force-static"

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export function GET() {
  const posts = getAllPosts()
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/insights/${p.slug}`
      const author = getAuthor(p.author)?.name ?? "Alyvon"
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.published).toUTCString()}</pubDate>
      <dc:creator>${esc(author)}</dc:creator>
      <category>${esc(p.category)}</category>
      <description>${esc(p.answer)}</description>
    </item>`
    })
    .join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alyvon Insights</title>
    <link>${SITE_URL}/insights</link>
    <atom:link href="${SITE_URL}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guides and free templates for AI agencies: AI readiness, pilots, statements of work, change orders and the AI workforce.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
