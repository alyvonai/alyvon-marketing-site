import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "statement-of-work-template-ai",
  title: "Statement of work template for AI projects: the 7 clauses most SOWs miss",
  seoTitle: "Statement of work template (free) with AI project clauses",
  description:
    "A statement of work template for AI projects: what a SOW includes, SOW vs scope of work, and the AI clauses most templates miss, from data to change orders.",
  answer:
    "A statement of work (SOW) is the contract document that defines what will be delivered, by when, for how much, and how acceptance is decided. For AI projects it also needs clauses ordinary templates miss: data access and readiness, a measured baseline and target, acceptance criteria for probabilistic output, human review, change orders, and usage costs. A free template follows.",
  takeaways: [
    "The scope of work describes the work; the statement of work is the whole contract document around it.",
    "AI SOWs need clauses most templates miss: data readiness, baseline and target, acceptance and usage costs.",
    "Acceptance criteria must fit probabilistic output: a threshold on a defined test set.",
    "Write the SOW after the data check, not before.",
  ],
  track: "agency",
  category: "Templates",
  author: "shawn-sias",
  published: "2026-10-28",
  updated: "2026-10-28",
  body: [
    { type: "p", text: "Most AI project disputes trace back to the statement of work: a baseline nobody measured, acceptance criteria that demanded perfect output, or a usage bill nobody agreed to pay. Standard SOW templates were written for software and staffing, and they miss all three." },
    { type: "h2", id: "what-is", text: "What is a statement of work?" },
    {
      type: "definition",
      term: "Statement of work",
      text: "A statement of work (SOW) is a project document, usually attached to a master services agreement, that defines the deliverables, timeline, price, responsibilities and acceptance criteria for a specific piece of work.",
    },
    { type: "h2", id: "sow-vs-scope", text: "What is the difference between a statement of work and a scope of work?" },
    {
      type: "ul",
      items: [
        "**Scope of work:** the description of the work itself: what is included, what is excluded, the deliverables. It is usually a section inside the SOW.",
        "**Statement of work:** the whole document: scope plus timeline, price, payment terms, responsibilities, acceptance and change process.",
        "**Proposal:** the sales document that comes before either. It persuades; the SOW commits.",
      ],
    },
    { type: "h2", id: "include", text: "What should an AI statement of work include?" },
    {
      type: "ol",
      items: [
        "Background and the business goal, in the client’s words",
        "Scope: in scope, and an explicit out-of-scope list",
        "Deliverables, each with an owner and a format",
        "Data access and readiness: systems, access level, findings so far",
        "Success measures: baseline, target and how each is measured",
        "Acceptance criteria that fit probabilistic output",
        "Human review and approval points",
        "Timeline and milestones",
        "Price, payment terms and usage costs",
        "Responsibilities on each side, including client inputs",
        "Change order process",
        "Data handling, intellectual property and handover",
        "Signatures",
      ],
    },
    { type: "h2", id: "template", text: "Statement of work template" },
    {
      type: "template",
      title: "Statement of work for an AI project",
      download: "statement-of-work-template",
      sections: [
        { label: "1. Parties and reference", lines: ["Client: ___   Agency: ___", "Master agreement reference and date: ___", "SOW number and effective date: ___"] },
        { label: "2. Background and goal", lines: ["The problem, in the client’s words: ___", "The business goal this work serves: ___"] },
        {
          label: "3. Scope",
          lines: ["In scope: ___", "Out of scope (explicit list): ___", "Project stage: proof of concept / pilot / production"],
        },
        { label: "4. Deliverables", lines: ["Deliverable, owner, format, due date: ___"] },
        {
          label: "5. Data access and readiness",
          lines: [
            "Systems to be accessed and access level (read-only or write): ___",
            "Data readiness findings to date (exists, missing, deferred): ___",
            "Fields the AI must never see or change: ___",
          ],
        },
        {
          label: "6. Success measures",
          lines: ["Metric, current baseline, target, data source, measurement date: ___", "Baseline measured on: ___ from: ___"],
        },
        {
          label: "7. Acceptance criteria",
          lines: [
            "Accuracy or quality threshold on a defined test set: ___",
            "Volume or time window over which it is measured: ___",
            "Cases that are always routed to a person: ___",
          ],
        },
        { label: "8. Human review and approvals", lines: ["Actions that require approval before taking effect: ___", "Approvers on the client side: ___"] },
        { label: "9. Timeline", lines: ["Milestones and dates: ___", "Dependencies on client inputs: ___"] },
        {
          label: "10. Price and payment",
          lines: ["Fee and basis (fixed, milestone, time and materials): ___", "Model and API usage costs: included up to ___ / billed at ___", "Payment schedule: ___"],
        },
        { label: "11. Responsibilities", lines: ["Agency: ___", "Client (access, reviewers, decisions, timing): ___"] },
        {
          label: "12. Changes",
          lines: ["Any request outside section 3 is handled by a written change order stating its effect on scope, cost, timeline and success measures."],
        },
        { label: "13. Data, IP and handover", lines: ["Data handling and retention: ___", "Ownership of prompts, configurations and outputs: ___", "Handover and documentation at close: ___"] },
        { label: "14. Signatures", lines: ["Client: name, title, signature, date", "Agency: name, title, signature, date"] },
      ],
    },
    { type: "h2", id: "ai-clauses", text: "Which clauses do AI statements of work usually miss?" },
    {
      type: "table",
      caption: "AI-specific clauses and the problem each prevents",
      head: ["Clause", "Prevents"],
      rows: [
        ["Data access and readiness findings", "Discovering after kickoff that the data is missing, unstructured or inaccessible"],
        ["Baseline with its data source", "Arguing at the end about whether the pilot worked"],
        ["Acceptance on a defined test set", "Disputes over AI output that is right most of the time, not all of the time"],
        ["Always-human cases", "An agent acting alone on decisions the client never meant to automate"],
        ["Usage cost terms", "Model and API costs rising with volume and nobody agreeing who pays"],
        ["Change order clause", "Scope creep becoming unbilled work"],
        ["Project stage", "A proof of concept being judged as if it were a production system"],
      ],
    },
    {
      type: "p",
      text: "The change order clause only works with a process behind it. The [change order template](/insights/change-order-template) covers what each one should contain. For the difference between a proof of concept and a pilot, see [why AI pilots fail](/insights/why-ai-pilots-fail).",
    },
    { type: "h2", id: "mistakes", text: "What are the most common SOW mistakes?" },
    {
      type: "ul",
      items: [
        "Writing the scope before checking the data",
        "Listing what is included but not what is excluded",
        "Success measures with no baseline, or a baseline from a different system",
        "Acceptance criteria that demand perfect output from a probabilistic system",
        "No named reviewers on the client side, so approvals stall",
        "Leaving usage costs out because they were small in testing",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    { type: "ol", items: [
      "Copy the template above, or [download the editable .docx](/templates/statement-of-work-template).",
      "Fill sections 5 to 7 from evidence: run the [AI readiness assessment](/insights/ai-readiness-assessment) first.",
      "Pair it with the [change order template](/insights/change-order-template) so section 12 has a process behind it.",
    ] },
  ],
  faq: [
    {
      q: "What is a statement of work?",
      a: "A statement of work is a project document, usually attached to a master services agreement, that defines the deliverables, timeline, price, responsibilities and acceptance criteria for a specific piece of work.",
    },
    {
      q: "What is the difference between a SOW and a scope of work?",
      a: "The scope of work describes the work itself, what is in and out. The statement of work is the full document that contains the scope plus timeline, price, responsibilities, acceptance and the change process.",
    },
    {
      q: "What should an AI statement of work include?",
      a: "Everything a normal SOW has, plus data access and readiness findings, a baseline and target for each success measure, acceptance criteria on a defined test set, human review points, usage cost terms and a change order clause.",
    },
    {
      q: "Who writes the statement of work?",
      a: "Usually the agency or vendor drafts it from discovery findings, and the client reviews and signs it. The better the discovery, the fewer revisions it needs.",
    },
    {
      q: "How do you write acceptance criteria for AI?",
      a: "Define a test set of real cases, a quality or accuracy threshold on that set, the time window over which it is measured, and the cases that always go to a person instead of being automated.",
    },
  ],
  cta: {
    heading: "Write the SOW from evidence, not from a guess.",
    body: "Stakeholder interviews and a read-only data check give you the baseline, the gaps and the out-of-scope list before you price. First 30 days free for founding partners.",
  },
  related: ["how-to-scope-an-ai-project", "change-order-template"],
}
