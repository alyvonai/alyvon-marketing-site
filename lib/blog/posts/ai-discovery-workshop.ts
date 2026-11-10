import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "ai-discovery-workshop",
  title: "How to run an AI discovery workshop that ends in a decision, not sticky notes",
  seoTitle: "How to run an AI discovery workshop: agenda and template",
  description:
    "How to run an AI discovery workshop with a client: who to invite, a two-hour agenda, how to rank use cases in the room, and what the session should produce.",
  answer:
    "An AI discovery workshop is a working session where a client’s decision-makers agree which AI use case to pursue, how success will be measured and what is out of scope. Run it after stakeholder interviews and a data check, not instead of them, and keep it to about two hours. It should end with a ranked use case list and a draft scope.",
  takeaways: [
    "Use the workshop to decide, not to gather. Interviews and a data check gather; the room chooses.",
    "Keep it to five to eight people and about two hours, with the sponsor present.",
    "Rank use cases on gain, data readiness, risk and effort, using numbers from the interviews.",
    "Leave with a decision, a baseline, an out-of-scope list and named owners, not a whiteboard photo.",
  ],
  track: "agency",
  category: "Scoping",
  author: "shawn-sias",
  published: "2026-11-09",
  updated: "2026-11-09",
  body: [
    {
      type: "p",
      text: "Most AI discovery workshops are a day of sticky notes that ends with forty use cases, no data and no decision. The client leaves energised, the agency leaves with nothing it can price, and the real discovery starts the following week anyway.",
    },
    { type: "h2", id: "what-is", text: "What is an AI discovery workshop?" },
    {
      type: "definition",
      term: "AI discovery workshop",
      text: "An AI discovery workshop is a facilitated session in which a client’s decision-makers review stakeholder and data findings, choose the AI use case to pursue, and agree its success measure, scope boundaries and owners.",
    },
    {
      type: "p",
      text: "The distinction that matters: a workshop is for deciding. Gathering requirements in a room of eight people is slow, and the most senior voice tends to win.",
    },
    { type: "h2", id: "order", text: "Why should interviews come before the workshop?" },
    {
      type: "table",
      caption: "Workshop-first vs interviews-first",
      head: ["", "Workshop first", "Interviews and data check first"],
      rows: [
        ["What the room spends time on", "Describing the current process", "Choosing between known options"],
        ["Whose view wins", "The most senior or loudest person", "The evidence, with disagreements already listed"],
        ["Data", "Assumed", "Checked: you know what exists and what is missing"],
        ["Typical output", "A long list of ideas", "A ranked shortlist and a draft scope"],
      ],
    },
    {
      type: "p",
      text: "Interview each stakeholder separately beforehand, with the questions in the [AI readiness questionnaire](/insights/ai-readiness-questionnaire), and run a read-only data check. The workshop then starts from what you found instead of from a blank wall.",
    },
    { type: "h2", id: "who", text: "Who should attend an AI discovery workshop?" },
    {
      type: "table",
      caption: "Who to invite",
      head: ["Who", "Why they need to be there"],
      rows: [
        ["The sponsor", "Only they can make the decision the workshop exists to make"],
        ["The process owner", "Owns the outcome and the team’s time"],
        ["Someone who does the work", "Keeps the room honest about how the work really happens"],
        ["IT or data", "Confirms what access is possible, and how quickly"],
        ["Your lead and solution engineer", "Facilitate, and say plainly what is buildable"],
      ],
    },
    {
      type: "p",
      text: "Five to eight people is the working range. Smaller and a decision-maker is missing; larger and it becomes a presentation.",
    },
    { type: "h2", id: "agenda", text: "What is a good AI discovery workshop agenda?" },
    {
      type: "template",
      title: "AI discovery workshop agenda (two hours)",
      sections: [
        { label: "0:00 · Goal (10 min)", lines: ["The one decision this session will make, and the ground rules."] },
        { label: "0:10 · What we heard (20 min)", lines: ["Interview findings by area, and every disagreement between roles, side by side."] },
        { label: "0:30 · What the data supports (20 min)", lines: ["What exists, what is missing, and which ideas the data rules out for now."] },
        { label: "0:50 · Rank the use cases (30 min)", lines: ["Score the shortlist on gain, data readiness, risk and effort. Agree the top one."] },
        { label: "1:20 · Define success (20 min)", lines: ["The metric, today’s baseline, the target, and where both are measured."] },
        { label: "1:40 · Draw the line (20 min)", lines: ["The out-of-scope list, the owner, the approvers, and open questions with names and dates."] },
      ],
    },
    { type: "h2", id: "rank", text: "How do you rank AI use cases in the room?" },
    {
      type: "p",
      text: "Score each shortlisted use case from 1 to 3 on four factors, using numbers you gathered beforehand rather than opinions in the room:",
    },
    {
      type: "table",
      caption: "Use case scoring",
      head: ["Factor", "The question", "Where the answer comes from"],
      rows: [
        ["Gain", "How many hours or how much money does it return each month?", "Workload numbers from the interviews"],
        ["Data readiness", "Does the data exist and can it be reached?", "The read-only data check"],
        ["Risk", "How many actions would need a person’s approval?", "The approval tiers in [human in the loop AI](/insights/human-in-the-loop-ai)"],
        ["Effort", "How many systems, documents and exceptions are involved?", "The workflow walkthrough"],
      ],
    },
    {
      type: "p",
      text: "High gain with low data readiness is a phase two, not a pilot. Say so in the room, so the sponsor hears why their favourite idea is second.",
    },
    { type: "h2", id: "output", text: "What should come out of an AI discovery workshop?" },
    {
      type: "ul",
      items: [
        "One chosen use case, and the next two in order",
        "A success measure with a baseline, a target and a named data source",
        "An out-of-scope list, written while everyone is in the room",
        "An owner and named approvers",
        "Open questions, each with a person and a date",
      ],
    },
    {
      type: "p",
      text: "Send this the same day as a one-page draft scope. The [AI project scope template](/templates/ai-project-scope-template) has every field.",
    },
    { type: "h2", id: "remote", text: "Should an AI discovery workshop be remote or in person?" },
    {
      type: "p",
      text: "Either works when the findings are prepared in advance, because the session is about deciding rather than drawing. In person helps when the sponsor and the process owner disagree and need to settle it. Remote is fine when the decision is mostly a ranking exercise, as long as the pre-read goes out at least a day before.",
    },
    { type: "h2", id: "mistakes", text: "What are the most common AI workshop mistakes?" },
    {
      type: "ul",
      items: [
        "Using the workshop to gather requirements instead of to decide",
        "Running it before anyone has looked at the data",
        "Leaving the sponsor out, so nothing is actually decided",
        "Generating forty ideas and ranking none of them",
        "Ending without a baseline or an out-of-scope list",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    {
      type: "ol",
      items: [
        "Before booking the workshop, send the [AI readiness questionnaire](/insights/ai-readiness-questionnaire) to each stakeholder.",
        "Copy the agenda above into the invite, with the findings as a pre-read.",
        "Turn the outcome into a signed scope with [how to scope an AI project](/insights/how-to-scope-an-ai-project).",
      ],
    },
  ],
  faq: [
    {
      q: "What is an AI discovery workshop?",
      a: "A facilitated session in which a client’s decision-makers review stakeholder and data findings, choose the AI use case to pursue, and agree its success measure, scope boundaries and owners.",
    },
    {
      q: "How long should an AI workshop be?",
      a: "About two hours, if interviews and a data check happen first. Full-day workshops usually mean the room is gathering requirements, which separate interviews do faster and with less bias.",
    },
    {
      q: "Who should attend an AI discovery workshop?",
      a: "The sponsor, the process owner, someone who does the work, someone from IT or data, and the agency’s lead and solution engineer. Five to eight people in total.",
    },
    {
      q: "What is the output of an AI discovery workshop?",
      a: "A chosen use case, a success measure with a baseline and target, an out-of-scope list, named owners and approvers, and open questions with owners and dates.",
    },
    {
      q: "What is the difference between an AI workshop and an AI readiness audit?",
      a: "An AI readiness audit gathers evidence through interviews and a data check. A discovery workshop uses that evidence to make a decision. Run the audit first, then the workshop.",
    },
  ],
  cta: {
    heading: "Walk into the workshop with the findings already in hand.",
    body: "Stakeholder interviews and a read-only data check, done before anyone books a room. First 30 days free for founding partners.",
  },
  related: ["ai-readiness-questionnaire", "how-to-scope-an-ai-project"],
}
