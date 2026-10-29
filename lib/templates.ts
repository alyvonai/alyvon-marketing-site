// Downloadable templates offered behind an email form at /templates/[slug].
//
// SEO rule: the template text is always open on its blog post (that is the page that ranks).
// Only the editable .docx is behind the form, and the download pages are noindexed so they
// never compete with the post. Files are generated from the post content by
// scripts/build-template-downloads.mjs, so the download and the article cannot drift.

export interface DownloadTemplate {
  slug: string
  title: string
  /** One-line promise shown under the H1. */
  summary: string
  /** What is inside the file. */
  includes: string[]
  /** Public path of the generated file. */
  file: string
  /** The open blog post that teaches the template. */
  post: string
}

export const TEMPLATES: DownloadTemplate[] = [
  {
    slug: "ai-project-scope-template",
    title: "AI project scope template",
    summary: "A one-page scope with the baseline, the target and the out-of-scope list built in.",
    includes: [
      "Goal, stage and ranked use cases",
      "An explicit out-of-scope list",
      "Data findings: exists, missing, deferred",
      "Owner, approvers, success measure and sign-off",
    ],
    file: "/downloads/alyvon-ai-project-scope-template.docx",
    post: "how-to-scope-an-ai-project",
  },
  {
    slug: "statement-of-work-template",
    title: "AI statement of work template",
    summary: "An editable SOW with the clauses AI projects need and most templates miss.",
    includes: [
      "All 14 sections, ready to fill in",
      "Data access and readiness clause",
      "Baseline, target and acceptance criteria for probabilistic output",
      "Usage cost and change order clauses",
    ],
    file: "/downloads/alyvon-ai-statement-of-work-template.docx",
    post: "statement-of-work-template-ai",
  },
  {
    slug: "change-order-template",
    title: "AI change order template",
    summary: "Turn “can it also” into signed, paid work in one page.",
    includes: [
      "Request, reason and scope change",
      "Cost with the calculation shown",
      "Effect on timeline, baseline and target",
      "Assumptions and two-party approval",
    ],
    file: "/downloads/alyvon-ai-change-order-template.docx",
    post: "change-order-template",
  },
  {
    slug: "proof-of-concept-template",
    title: "AI proof of concept template",
    summary: "A one-page POC plan that says what it tests, what passes, and what happens next.",
    includes: [
      "The single question the POC answers",
      "Pass criteria you can measure",
      "Out of scope and timebox",
      "The decision on pass and on fail",
    ],
    file: "/downloads/alyvon-ai-proof-of-concept-template.docx",
    post: "why-ai-pilots-fail",
  },
  {
    slug: "ai-readiness-checklist",
    title: "AI readiness assessment checklist",
    summary: "The five-area audit, data readiness checks and stakeholder questions in one document.",
    includes: [
      "Five readiness areas with evidence and red flags",
      "Four stages of AI readiness",
      "Six data readiness checks",
      "Ten stakeholder interview questions",
    ],
    file: "/downloads/alyvon-ai-readiness-assessment-checklist.docx",
    post: "ai-readiness-assessment",
  },
]

export function getTemplate(slug: string): DownloadTemplate | undefined {
  return TEMPLATES.find((t) => t.slug === slug)
}
