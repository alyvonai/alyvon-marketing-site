import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "how-to-scope-an-ai-project",
  title: "How to scope an AI project before you price it: 4 steps and a free template",
  seoTitle: "How to scope an AI project (4 steps + free scope template)",
  description:
    "How to scope an AI project in four steps: stakeholder interviews, a read-only data check, a scope with a baseline, and sign-off. Free project scope template.",
  answer:
    "To scope an AI project, do four things before you name a price: interview each stakeholder separately, check the client’s data read-only, write a scope with a baseline, a target and an explicit out-of-scope list, then get both sides to sign it. Most scoping failures come from skipping the data check or the out-of-scope list. A one-page AI project scope template follows.",
  takeaways: [
    "Scope before you price: interviews and a data check come first, the number comes last.",
    "Interview stakeholders separately. Disagreement you find in discovery is free; disagreement you find in week three is unbilled rework.",
    "Look at the data, read-only, before quoting. Descriptions of data are not evidence.",
    "Every scope needs a baseline, a target and a list of what is excluded.",
    "Estimate from the client’s own workload numbers, and show the math.",
  ],
  track: "agency",
  category: "Scoping",
  author: "shawn-sias",
  published: "2026-10-29",
  updated: "2026-10-29",
  body: [
    {
      type: "p",
      text: "Most AI projects are priced in the first sales call and scoped afterwards. That order is backwards, and it is where agency margins go. The client describes the work, the agency estimates it, and three weeks later everyone discovers the data lives in PDFs and the operations lead wanted something different from the CEO.",
    },
    {
      type: "p",
      text: "This guide is the method we built Alyvon around: four steps that move the surprises before the quote, where they cost nothing.",
    },
    { type: "h2", id: "what-is", text: "What is AI project scoping?" },
    {
      type: "definition",
      term: "AI project scoping",
      text: "AI project scoping is the work of turning a client’s request for AI into a signed definition of what will be built, with which data, for whom, measured against which baseline, and what is explicitly excluded.",
    },
    { type: "h2", id: "different", text: "Why is scoping an AI project different from scoping software?" },
    {
      type: "p",
      text: "A normal software scope describes features. An AI scope has to pin down five things that features alone do not cover:",
    },
    {
      type: "ul",
      items: [
        "**The data.** An AI system is only as good as the inputs it can reach. If the inputs are missing, unstructured or locked behind a slow IT request, the estimate is wrong before work starts.",
        "**Probabilistic output.** An agent that is right 94% of the time needs acceptance criteria that say what “done” means, on which test set.",
        "**The humans in the loop.** Someone has to approve, review exceptions and own the result. If nobody is named, nobody will do it.",
        "**Expectations.** Clients who see a demo imagine ten more uses. Without a written boundary, each one becomes “can it also.”",
        "**Running costs.** Model and API usage grows with volume. Someone has to agree who pays.",
      ],
    },
    { type: "h2", id: "steps", text: "What are the steps to scope an AI project?" },
    {
      type: "table",
      caption: "The four steps of scoping an AI project",
      head: ["Step", "What you do", "What you leave with"],
      rows: [
        ["1. Interview", "Talk to each stakeholder separately, with the same core questions", "Confirmed requirements per person, and a list of disagreements"],
        ["2. Check the data", "Connect read-only and run the queries the use case depends on", "What exists, what is missing, what moves to phase two"],
        ["3. Write the scope", "Turn interview and data evidence into a scope with a baseline and target", "A one-page scope, a delivery plan and measures of success"],
        ["4. Sign off", "Your team reviews; the client signs", "An agreed scope, and a change process for everything after"],
      ],
    },
    {
      type: "p",
      text: "Steps 1 and 2 can run at the same time. That is the main reason scoping can take days rather than weeks: the slow parts are waiting for calendars and waiting for access, not the work itself.",
    },
    { type: "h2", id: "interviews", text: "Who should you interview, and what should you ask?" },
    {
      type: "p",
      text: "Interview at least three people: the person who does the work, the person who manages it, and the person who pays for it. Add IT or security if the project touches client systems, which most do. Ask each the same questions, separately, so their answers can be compared.",
    },
    {
      type: "p",
      text: "A complete set of requirements for an AI agent covers twelve areas. These are the twelve Alyvon’s interviewer works through, and each gets its own confidence score, from vague to quantified:",
    },
    {
      type: "table",
      caption: "Twelve requirement areas for an AI agent",
      head: ["Area", "What you need to know"],
      rows: [
        ["Use case", "What the AI should do, in one sentence"],
        ["Goal and outcome", "The business result the client wants"],
        ["Pain point and its cost", "What goes wrong today, in hours, errors or money"],
        ["Scope boundaries", "What is in, and what is explicitly out"],
        ["Approvers", "Who signs off on the output before it is used"],
        ["Current workflow", "The work step by step, as it happens today"],
        ["Tools and systems", "Every system the work touches"],
        ["Exceptions and human review", "Which cases must always go to a person"],
        ["Constraints", "Deadlines, budgets, policies, regulations"],
        ["Sensitive data", "What the AI must never see or change"],
        ["Success definition", "How the client will know it worked"],
        ["Baseline and target", "Today’s number, and the number that counts as a win"],
      ],
    },
    {
      type: "p",
      text: "For the exact questions to ask, see the stakeholder interview questions in the [AI readiness assessment guide](/insights/ai-readiness-assessment).",
    },
    { type: "h2", id: "disagree", text: "How do you handle stakeholders who disagree?" },
    {
      type: "p",
      text: "Expect them to. In a typical intake project the COO says the report runs weekly and the coordinator who actually runs it says daily. Neither is wrong; they are describing different parts of the same process. Interviewed together, the more senior answer wins and the real workflow is never captured.",
    },
    {
      type: "ol",
      items: [
        "Record each answer against the person who gave it.",
        "List every conflict side by side, with the exact words used.",
        "Resolve each one in writing with the sponsor before the scope is drafted.",
        "Put the resolved answer in the scope, so it is signed, not remembered.",
      ],
    },
    { type: "h2", id: "data", text: "How do you check the data before you quote?" },
    {
      type: "p",
      text: "Ask the client for read-only access to the systems the use case depends on, and look. A few queries answer the questions that decide the price: how many records exist, which fields are populated, which inputs are documents rather than data, and whether today’s performance can be measured from the same system.",
    },
    {
      type: "callout",
      title: "What a data check changes",
      text: "In a commercial quote intake pilot, read-only queries found 412 submissions in 90 days and 14 of 16 portal fields populated, but loss runs stored only as PDFs. Portal pre-fill stayed in scope and loss-run reading moved to phase two, before the price was set. (Illustrative sample engagement.)",
    },
    { type: "h2", id: "estimate", text: "How do you estimate an AI project?" },
    {
      type: "p",
      text: "Start from the client’s own numbers, not from a rate card. The workload math gives you the baseline and the size of the prize in one step:",
    },
    {
      type: "ol",
      items: [
        "**Measure the work today.** In one sample engagement, an SDR spent about 40 hours a week on roughly 200 leads: about 12 minutes per lead.",
        "**Decide what the AI takes on.** Researching missing lead details, say, instead of the SDR finding them by hand.",
        "**Size the gain.** The minutes removed per lead, times leads per month, is the capacity the project returns.",
        "**List the effort drivers.** Number of systems to integrate, data that needs extraction, exception paths, review steps and the measurement work.",
        "**Price the effort, and show the gain next to it.** A client compares your fee with the gain, so put both on the page.",
      ],
    },
    {
      type: "p",
      text: "Write the assumptions down: working days per month, volumes, which cases are excluded. When the volume changes, the assumptions tell everyone what the change order should say.",
    },
    { type: "h2", id: "template", text: "AI project scope template" },
    {
      type: "p",
      text: "A scope document should fit on one page. If it needs more, the detail belongs in the [statement of work](/insights/statement-of-work-template-ai), and the scope should link to it.",
    },
    {
      type: "template",
      title: "AI project scope: one page",
      download: "ai-project-scope-template",
      sections: [
        { label: "Project", lines: ["Client: ___   Project: ___", "Stage: proof of concept / pilot / production"] },
        { label: "Goal", lines: ["What the AI will do, in one sentence: ___", "The business result it serves: ___"] },
        { label: "In scope", lines: ["Use cases, ranked by gain: ___"] },
        { label: "Out of scope", lines: ["Explicitly excluded, including phase-two items: ___"] },
        { label: "Data", lines: ["Systems and access level (read-only or write): ___", "Findings: exists ___ / missing ___ / deferred ___"] },
        { label: "People", lines: ["Owner: ___   Approvers: ___", "Cases always routed to a person: ___"] },
        { label: "Success", lines: ["Metric, baseline, target, source: ___"] },
        { label: "Assumptions", lines: ["Volumes, working days, client inputs the plan depends on: ___"] },
        { label: "Changes", lines: ["Requests outside this scope are handled by written change order."] },
        { label: "Sign-off", lines: ["Agency: name, date   Client: name, date"] },
      ],
    },
    { type: "h2", id: "limits", text: "Where does this scoping method break down?" },
    { type: "p", text: "Four situations where it needs adjusting. Knowing them up front saves you from forcing the method onto a project it doesn’t fit." },
    { type: "ul", items: [
      "**Stakeholders who must negotiate live.** Separate interviews surface a conflict between the COO and the CFO; resolving it still takes a meeting with both of them.",
      "**No access before the contract.** Some clients will not grant even read-only access until something is signed. Sell the data check as a short, paid first phase instead of skipping it.",
      "**Regulated data.** Health, financial and personal records can need a data processing agreement before any query runs. Add that time to the plan.",
      "**Very small projects.** For a two-day automation, one call and a one-page scope is enough. The full method pays off when the build is weeks, not days.",
    ] },
    { type: "h2", id: "mistakes", text: "What are the most common AI scoping mistakes?" },
    {
      type: "ul",
      items: [
        "Pricing in the sales call, before discovery",
        "Interviewing stakeholders together, so the loudest answer wins",
        "Accepting a description of the data instead of looking at it",
        "No out-of-scope list, so every new idea looks included",
        "A success measure with no baseline, or a baseline from a different system",
        "Calling a proof of concept a pilot; see [POC vs pilot](/insights/why-ai-pilots-fail)",
        "No change process, so scope creep becomes free work; see the [change order template](/insights/change-order-template)",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    { type: "ol", items: [
      "Copy the scope template above, or [download the editable .docx](/templates/ai-project-scope-template).",
      "Send your next client’s stakeholders the questions from the [AI readiness assessment guide](/insights/ai-readiness-assessment) before the scoping call, not during it.",
      "When the scope is signed, turn it into a contract with the [AI statement of work template](/insights/statement-of-work-template-ai).",
    ] },
  ],
  faq: [
    {
      q: "How do you scope an AI project?",
      a: "Interview each stakeholder separately, check the client’s data with read-only access, write a one-page scope with a baseline, target and out-of-scope list, then have your team review it and the client sign it, all before setting the price.",
    },
    {
      q: "What questions should you ask in AI project discovery?",
      a: "Cover twelve areas: use case, goal, pain point and its cost, scope boundaries, approvers, current workflow, tools and systems, exceptions and human review, constraints, sensitive data, success definition, and baseline and target.",
    },
    {
      q: "How long should scoping an AI project take?",
      a: "Done with scheduled calls and manual data requests it often runs several weeks. Running stakeholder interviews asynchronously and the data check in parallel brings it down to days.",
    },
    {
      q: "What is the difference between a project scope and a statement of work?",
      a: "The scope defines the work: what is in, what is out, the data, the people and the success measures. The statement of work is the contract document that contains the scope plus timeline, price, acceptance and the change process.",
    },
    {
      q: "What requirements does an AI agent need?",
      a: "A defined use case and goal, the workflow it joins, the systems and data it can access, the cases it must hand to a person, who approves its output, what data it must never touch, and a baseline and target to measure it against.",
    },
  ],
  cta: {
    heading: "Scope your next client project in days, not weeks.",
    body: "Send each stakeholder one link, check the data read-only, and get scored requirements across all twelve areas. First 30 days free for founding partners.",
  },
  related: ["ai-readiness-assessment", "statement-of-work-template-ai"],
}
