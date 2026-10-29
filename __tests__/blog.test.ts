import { describe, expect, it } from "vitest"
import { getAllPosts, getPost } from "@/lib/blog"
import { getAuthor } from "@/lib/blog/authors"
import { TEMPLATES } from "@/lib/templates"
import { SITE_ROUTES } from "@/lib/nav-data"

// Guards for the SEO/AEO structure rules every post must follow (see the keyword map):
// answer first, question H2s, 4 to 6 FAQs, real authors, and internal links that resolve.

const posts = getAllPosts()
const words = (s: string) => s.trim().split(/\s+/).length
// Blog-writing guide: phrases that read as corporate filler. Say what you mean instead.
const BANNED =
  /\b(seamless(ly)?|leverag\w*|unlock\w*|empower\w*|robust|streamlin\w*|best-in-class|industry-leading|cutting-edge|excited to|thrilled|that being said|it'?s worth noting|at the end of the day|without further ado|in this (blog )?post)\b/i
const linksIn = (s: string) => [...s.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1])

const knownPaths = new Set<string>([
  ...SITE_ROUTES.map((r) => r.path),
  ...posts.map((p) => `/insights/${p.slug}`),
  ...TEMPLATES.map((t) => `/templates/${t.slug}`),
  "/#how-it-works",
])

describe("blog posts", () => {
  it("have unique slugs", () => {
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length)
  })

  for (const p of posts) {
    describe(p.slug, () => {
      it("answers the question in roughly the first 60 words", () => {
        expect(words(p.answer)).toBeGreaterThanOrEqual(40)
        expect(words(p.answer)).toBeLessThanOrEqual(75)
      })

      it("keeps the TL;DR to 2 or 3 sentences", () => {
        const n = p.answer.split(/(?<=[.!?])\s+(?=[A-Z“"])/).length
        expect(n).toBeGreaterThanOrEqual(2)
        expect(n).toBeLessThanOrEqual(3)
      })

      it("has exactly 5 self-contained FAQ answers under 50 words", () => {
        expect(p.faq.length).toBe(5)
        for (const f of p.faq) {
          expect(words(f.a), f.q).toBeLessThan(50)
          expect(/as (mentioned|noted|discussed) (above|earlier)/i.test(f.a), f.q).toBe(false)
        }
      })

      it("opens on the problem, then a 'What…' definition section", () => {
        expect(p.body[0].type).toBe("p")
        const firstH2 = p.body.findIndex((b) => b.type === "h2")
        const h2 = p.body[firstH2]
        expect(h2.type === "h2" && /^What /.test(h2.text), JSON.stringify(h2)).toBe(true)
        expect(p.body[firstH2 + 1]?.type).toBe("definition")
      })

      it("closes with concrete next steps, not a recap", () => {
        const h2s = p.body.filter((b) => b.type === "h2")
        expect(h2s.at(-1)?.text).toBe("What should you do next?")
      })

      it("avoids banned marketing language", () => {
        const text = JSON.stringify(p)
        expect(text).not.toMatch(BANNED)
      })

      it("phrases H2s as questions (template headings excepted) with unique ids", () => {
        const h2s = p.body.filter((b) => b.type === "h2")
        expect(new Set(h2s.map((h) => h.id)).size).toBe(h2s.length)
        for (const h of h2s) if (!/template$/i.test(h.text)) expect(h.text.endsWith("?"), h.text).toBe(true)
      })

      it("has a definition block", () => {
        expect(p.body.some((b) => b.type === "definition")).toBe(true)
      })

      it("is written by a real author on file", () => {
        expect(getAuthor(p.author)).toBeDefined()
      })

      it("has a 150 to 160 character meta description", () => {
        expect(p.description.length).toBeGreaterThanOrEqual(150)
        expect(p.description.length).toBeLessThanOrEqual(160)
      })

      it("closes with 3 to 5 key takeaways", () => {
        expect(p.takeaways.length).toBeGreaterThanOrEqual(3)
        expect(p.takeaways.length).toBeLessThanOrEqual(5)
      })

      it("only links to pages that exist", () => {
        const text = JSON.stringify(p.body)
        for (const href of linksIn(text)) expect(knownPaths.has(href), href).toBe(true)
        for (const r of p.related ?? []) expect(getPost(r), r).toBeDefined()
      })
    })
  }
})

describe("downloadable templates", () => {
  for (const t of TEMPLATES) {
    it(`${t.slug} points at an open post that teaches it`, () => {
      const post = getPost(t.post)
      expect(post).toBeDefined()
      const hasBlock = post!.body.some((b) => b.type === "template" && b.download === t.slug)
      const linksHere = JSON.stringify(post!.body).includes(`/templates/${t.slug}`)
      expect(hasBlock || linksHere).toBe(true)
    })
  }
})
