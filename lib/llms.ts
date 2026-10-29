import { getAllPosts } from "@/lib/blog"
import { postToMarkdown } from "@/lib/blog/markdown"
import { TEMPLATES } from "@/lib/templates"
import { FOUNDING, FOUNDING_CLOSES_LABEL, FOUNDING_RATE_SHORT, FOUNDING_USAGE } from "@/lib/pricing"
import { ALYVON_IS, SITE_URL } from "@/lib/site"

// /llms.txt and /llms-full.txt (llmstxt.org): a Markdown map of the site for AI tools.
// Built from the same data as the pages, so new posts, offer changes and the entity
// sentence flow through without editing these files by hand.

const url = (path: string) => `${SITE_URL}${path}`

export function buildLlmsTxt(): string {
  const posts = getAllPosts()
  return [
    "# Alyvon",
    `> ${ALYVON_IS}`,
    [
      "Alyvon is built for AI agencies and automation consultancies (typically 2 to 25 people) that deploy custom AI agents for their clients. It covers the whole engagement:",
      "",
      "- Stakeholder interviews: each client stakeholder gets a private link and talks to an AI consultant for 10 to 15 minutes; answers are scored across 12 requirement areas and confirmed by the stakeholder.",
      "- Data discovery and AI readiness: with the client's permission, read-only checks against their systems show what data exists, what is missing and what moves to a later phase.",
      "- Scopes and statements of work built from that evidence, with a baseline, a target and an out-of-scope list.",
      "- Implementation decks and measurement frameworks for the client.",
      "- The AI workforce and agent harness: custom agents, memory per client, approvals on anything that sends, publishes or spends, 1,000+ integrations, routines, an Improvement Engine and a full audit trail.",
      "",
      `Pricing: Alyvon is opening to a founding cohort of ${FOUNDING.cohortSize} agencies at ${FOUNDING_RATE_SHORT}, locked for ${FOUNDING.lockedMonths} months, with the first ${FOUNDING.freeDays} days free and no lock-in contract. Included usage: ${FOUNDING_USAGE}. Applications close ${FOUNDING_CLOSES_LABEL}, 2026.`,
    ].join("\n"),
    "## Product",
    [
      `- [Homepage](${url("/")}): How Alyvon takes an agency from stakeholder discovery to a built, measured AI project, in four steps.`,
      `- [Platform](${url("/platform")}): The agent harness agencies would otherwise rebuild on every client project, and what ships with each client workspace.`,
      `- [Founding partners](${url("/founding-partners")}): The founding cohort offer, what is included, what is asked of partners, and the application.`,
      `- [Security](${url("/security")}): Read-only discovery, call logging, per-client vaults, approval gates and how client data is handled.`,
    ].join("\n"),
    "## Insights",
    posts.map((p) => `- [${p.title}](${url(`/insights/${p.slug}`)}): ${p.description}`).join("\n"),
    "## Templates",
    TEMPLATES.map((t) => {
      const post = posts.find((p) => p.slug === t.post)
      return `- [${t.title}](${url(`/insights/${t.post}`)}): ${t.summary} The full template is open in ${post ? `"${post.title}"` : "the linked guide"}; an editable .docx is at ${url(`/templates/${t.slug}`)}.`
    }).join("\n"),
    "## Optional",
    [
      `- [Full text of all Insights posts](${url("/llms-full.txt")}): Every post in Markdown, for tools that want the complete content.`,
      `- [Book a demo](${url("/book")}): Book a call with the founding team.`,
      `- [Contact](${url("/contact")}): Questions for the founding team.`,
      `- [RSS feed](${url("/insights/rss.xml")}): New Insights posts.`,
      `- [Privacy Policy](${url("/privacy")})`,
      `- [Terms of Service](${url("/terms")})`,
      `- [Subprocessors](${url("/subprocessors")})`,
    ].join("\n"),
  ].join("\n\n") + "\n"
}

export function buildLlmsFullTxt(): string {
  return [
    "# Alyvon Insights: full text",
    `> ${ALYVON_IS}`,
    `Source: ${url("/insights")} · Index: ${url("/llms.txt")}`,
    ...getAllPosts().map((p) => `---\n\n${postToMarkdown(p)}`),
  ].join("\n\n") + "\n"
}
