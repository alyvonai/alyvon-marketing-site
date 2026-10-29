import { describe, expect, it } from "vitest"
import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/llms"
import { getAllPosts } from "@/lib/blog"
import { ALYVON_IS, SITE_URL } from "@/lib/site"
import robots from "@/app/robots"

// llms.txt must stay a faithful, complete map of the site as posts are added.

describe("llms.txt", () => {
  const txt = buildLlmsTxt()

  it("follows the llmstxt.org shape: H1, then a blockquote summary", () => {
    const [h1, quote] = txt.split("\n\n")
    expect(h1).toBe("# Alyvon")
    expect(quote).toBe(`> ${ALYVON_IS}`)
  })

  it("lists every Insights post with an absolute link", () => {
    for (const p of getAllPosts()) expect(txt).toContain(`${SITE_URL}/insights/${p.slug}`)
  })

  it("never links relatively", () => {
    expect(txt).not.toMatch(/\]\(\//)
  })
})

describe("llms-full.txt", () => {
  const full = buildLlmsFullTxt()

  it("contains the full text of every post, with absolute links", () => {
    for (const p of getAllPosts()) {
      expect(full).toContain(`# ${p.title}`)
      expect(full).toContain(p.answer)
    }
    expect(full).not.toMatch(/\]\(\//)
  })
})

describe("robots.txt", () => {
  it("allows AI answer-engine crawlers by name in production", () => {
    const rules = [robots().rules].flat()
    const named = rules.flatMap((r) => [r.userAgent].flat())
    for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) expect(named).toContain(bot)
    for (const r of rules) expect([r.disallow].flat()).toContain("/api/")
  })
})
