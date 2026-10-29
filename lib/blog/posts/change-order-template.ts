import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "change-order-template",
  title: "Change order template for AI projects: get paid for “can it also”",
  seoTitle: "Change order template (free) for AI and software projects",
  description:
    "A free change order template for AI projects, a plain definition of scope creep, and how to price and introduce change orders without souring the client.",
  answer:
    "A change order is a short signed document that adds, removes or alters work after a scope is agreed, with its effect on cost, timeline and success measures stated up front. A good one has eight parts: the request, the reason, what changes in scope, cost, timeline, effect on the baseline and target, assumptions, and two signatures. Below is a free template you can copy.",
  takeaways: [
    "Scope creep is work that grows without a matching change to price, timeline or success measures.",
    "A change order makes yes visible: the client gets the change and the agency gets paid for it.",
    "Every change order states its effect on cost, timeline, and the baseline and target.",
    "Put the change process in the SOW so the first change order is a formality, not a fight.",
    "Many mid-pilot requests are better sold as phase two.",
  ],
  track: "agency",
  category: "Templates",
  author: "shawn-sias",
  published: "2026-10-28",
  updated: "2026-10-28",
  body: [
    { type: "p", text: "Every AI pilot gets the same question around week two: can it also do this other thing? Say yes for free and the margin goes. Say no and the relationship suffers. A change order is the third option, and it takes one page." },
    { type: "h2", id: "scope-creep", text: "What is scope creep?" },
    {
      type: "definition",
      term: "Scope creep",
      text: "Scope creep is the gradual growth of a project’s work beyond what was agreed, without a matching change to price, timeline or success measures. Each addition looks small; together they consume the margin and push the delivery date.",
    },
    {
      type: "p",
      text: "AI projects are especially exposed, because the client sees what the system can do and immediately imagines what else it could do. “Can it also chase renewals while it’s in there?” is a reasonable question. Answering it for free is how a profitable pilot becomes unbilled rework.",
    },
    {
      type: "p",
      text: "AI work also has creep sources that ordinary software projects rarely do:",
    },
    {
      type: "ul",
      items: [
        "A new data source the original data check never covered",
        "A higher accuracy or automation target than the one signed",
        "New document types or edge cases routed to the agent",
        "A new integration or a write action where the scope said read-only",
        "Model or API usage costs rising with volume beyond the planned load",
      ],
    },
    { type: "h2", id: "what-is", text: "What is a change order?" },
    {
      type: "definition",
      term: "Change order",
      text: "A change order is a signed amendment to an agreed scope of work that records a requested change and its effect on cost, timeline and deliverables before the work starts.",
    },
    {
      type: "p",
      text: "The point of a change order is not to say no. It is to make yes visible. The client gets what they asked for; the agency gets paid for it; and the original success measures stay honest because any change to them is written down.",
    },
    { type: "h2", id: "include", text: "What should a change order include?" },
    {
      type: "ol",
      items: [
        "**Reference** to the signed statement of work and the change order number",
        "**The request** in the client’s words, with who asked and when",
        "**The reason** the change is needed (new requirement, new data, new constraint)",
        "**Scope change:** what is added, removed or altered, and what is still excluded",
        "**Cost:** fixed fee, time and materials, or usage-based, with the calculation",
        "**Timeline:** effect on milestones and the delivery date",
        "**Effect on success measures:** whether the baseline or target changes",
        "**Approval:** names, dates and signatures from both sides",
      ],
    },
    { type: "h2", id: "template", text: "Change order template" },
    {
      type: "template",
      title: "Change order for an AI project",
      download: "change-order-template",
      sections: [
        { label: "Header", lines: ["Change order #: ___", "Client: ___   Project: ___", "Statement of work reference and date: ___"] },
        { label: "Request", lines: ["Requested by: ___   Date: ___", "Request in the requester’s words: ___"] },
        { label: "Reason", lines: ["Why the change is needed: ___", "Is it a new requirement, new data, a new constraint, or a correction? ___"] },
        {
          label: "Scope change",
          lines: [
            "Added: ___",
            "Removed or deferred: ___",
            "Still out of scope: ___",
            "New systems or data accessed (read-only or write): ___",
          ],
        },
        { label: "Cost", lines: ["Pricing basis (fixed, time and materials, usage): ___", "Amount and how it was calculated: ___", "Change to ongoing model or API costs, if any: ___"] },
        { label: "Timeline", lines: ["Affected milestones: ___", "New delivery date: ___"] },
        {
          label: "Success measures",
          lines: ["Baseline unchanged / changed to: ___", "Target unchanged / changed to: ___", "How it will be measured: ___"],
        },
        { label: "Assumptions and risks", lines: ["Data, access or client inputs this change depends on: ___"] },
        { label: "Approval", lines: ["Client: name, title, signature, date", "Agency: name, title, signature, date"] },
      ],
    },
    { type: "h2", id: "price", text: "How do you price a change order?" },
    { type: "table", caption: "Three ways to price a change order", head: ["Pricing basis", "Use it when", "Watch out for"], rows: [
      ["Fixed fee", "The change is well defined and close to work already scoped", "Underestimating data work nobody has looked at yet"],
      ["Time and materials", "The change depends on unknowns, such as untested data", "Open-ended bills; always state a cap"],
      ["Usage-based", "The change mostly adds volume: more documents, conversations or runs", "Volume spikes; tie the price to one measured unit"],
    ] },
    {
      type: "p",
      text: "Whatever the basis, show the calculation. A number with its working attached gets approved faster than a round number with none.",
    },
    { type: "h2", id: "introduce", text: "How do you introduce change orders without souring the client?" },
    {
      type: "ol",
      items: [
        "**Put the process in the SOW.** If the client signed a change order clause, the first change order is a formality, not a confrontation. See the [statement of work template](/insights/statement-of-work-template-ai).",
        "**Make out of scope explicit.** A list of what is excluded does more to prevent creep than a long list of what is included.",
        "**Respond fast.** Turn a request into a drafted change order the same day, while the client still remembers why they asked.",
        "**Offer a phase two.** Many requests are better as the next engagement than as a mid-pilot change. That is a renewal, not a refusal.",
        "**Keep a small-changes allowance** if the relationship needs it, and say in writing what fits inside it.",
      ],
    },
    {
      type: "callout",
      title: "Example",
      text: "Week two of a quote-intake pilot, the client asks whether the agent can also chase policy renewals. It is not in the approved plan. The agency drafts a change order that day: renewal chasing as phase two, its own baseline (renewal response rate), its own fee. The pilot ships on time; the renewal work becomes the next engagement. (Illustrative sample engagement.)",
    },
    { type: "h2", id: "mistakes", text: "What are the most common change order mistakes?" },
    { type: "ul", items: [
      "Starting the work before the change order is signed",
      "Accepting a vague request, like “improve accuracy”, without a measure attached",
      "Forgetting to update the baseline and target the change affects",
      "Pricing it without showing the calculation",
      "Letting small unbilled changes pile up instead of agreeing an allowance",
    ] },
    { type: "h2", id: "next", text: "What should you do next?" },
    { type: "ol", items: [
      "Copy the template above, or [download the editable .docx](/templates/change-order-template).",
      "Add a change order clause to your next statement of work; the [AI SOW template](/insights/statement-of-work-template-ai) includes one.",
      "Draft a change order the same day a client asks for something outside the scope.",
    ] },
  ],
  faq: [
    {
      q: "What is a change order?",
      a: "A change order is a signed amendment to an agreed scope of work that records a requested change and its effect on cost, timeline and deliverables before the work starts.",
    },
    {
      q: "What is scope creep?",
      a: "Scope creep is the gradual growth of a project’s work beyond what was agreed, without a matching change to price, timeline or success measures.",
    },
    {
      q: "What should a change order include?",
      a: "The SOW reference, the request and who made it, the reason, the scope change, the cost and how it was calculated, the effect on timeline, the effect on success measures, and signatures from both sides.",
    },
    {
      q: "Who signs a change order?",
      a: "Someone with authority to commit budget on the client side and someone with authority to commit delivery on the agency side, usually the same people who signed the statement of work.",
    },
    {
      q: "How do you prevent scope creep on AI projects?",
      a: "Check the data before quoting, list what is out of scope, write a change order clause into the SOW, and turn every new request into a drafted change order quickly, often as a phase two.",
    },
  ],
  cta: {
    heading: "Fewer change orders start with a better scope.",
    body: "Interview every stakeholder and check the data read-only before you quote, so the scope you sign is the work you deliver. First 30 days free for founding partners.",
  },
  related: ["how-to-scope-an-ai-project", "statement-of-work-template-ai"],
}
