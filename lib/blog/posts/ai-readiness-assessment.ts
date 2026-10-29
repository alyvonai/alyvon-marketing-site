import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "ai-readiness-assessment",
  title: "AI readiness assessment: the 5 checks to run before you sell an AI pilot",
  seoTitle: "AI readiness assessment: a 5-part AI audit before any pilot",
  description:
    "What an AI readiness assessment checks, the four stages of AI maturity, how to test data readiness for AI, and ten questions to ask stakeholders before a pilot.",
  answer:
    "An AI readiness assessment, often called an AI audit, checks whether a business can run an AI pilot that reaches production. It tests five things: a specific use case with a cost attached, agreement between stakeholders, data that exists and can be reached, named people who approve the work, and a measurable baseline. Most businesses fail on data or agreement, not on technology.",
  takeaways: [
    "AI readiness is always readiness for one specific use case, not a company-wide score.",
    "Check five areas: the use case, stakeholder agreement, data, ownership and a baseline.",
    "Most businesses stall between scoped and data-ready, so look at the data before the quote.",
    "Ask every stakeholder the same questions separately so disagreements surface early.",
    "Leave with documents someone can act on, not a readiness rating.",
  ],
  track: "buyer",
  category: "AI readiness",
  author: "shawn-sias",
  published: "2026-10-28",
  updated: "2026-10-28",
  body: [
    { type: "p", text: "Most AI pilots that stall were never ready to start. The data lived in PDFs, the stakeholders wanted different things, or nobody could say how the work was measured. An AI readiness assessment finds that out before anyone signs, while fixing it is still cheap." },
    { type: "h2", id: "what-is", text: "What is an AI readiness assessment?" },
    { type: "definition", term: "AI readiness assessment", text: "An AI readiness assessment is a structured check of whether a business can put one specific AI use case into production, covering the use case and its cost, stakeholder agreement, data, ownership and a measurable baseline." },
    {
      type: "definition",
      term: "AI readiness",
      text: "AI readiness is the degree to which a business can put a specific AI use case into production: the problem is defined and costed, the people involved agree on it, the data it needs exists and is accessible, and there is a baseline to measure the result against.",
    },
    {
      type: "p",
      text: "Readiness is always readiness **for something**. A company can be ready to automate quote intake and nowhere near ready to automate underwriting decisions. That is why a useful assessment starts from a named use case, not a company-wide maturity score.",
    },
    { type: "h2", id: "what-it-checks", text: "What does an AI readiness assessment check?" },
    {
      type: "p",
      text: "A complete assessment covers five areas. Each one has a question to answer, evidence that actually counts, and a red flag that should stop or reshape the pilot.",
    },
    {
      type: "table",
      caption: "The five areas of an AI readiness assessment",
      head: ["Area", "The question", "Evidence that counts", "Red flag"],
      rows: [
        [
          "Use case",
          "What exactly should AI do, and what does it cost today?",
          "A workflow described step by step, with hours or errors attached",
          "“We want to use AI” with no workflow named",
        ],
        [
          "Agreement",
          "Do the people who do, manage and pay for the work describe it the same way?",
          "Separate interviews that match on the goal and the success measure",
          "The COO says weekly, the coordinator says daily",
        ],
        [
          "Data",
          "Does the data exist, in a usable form, and can it be reached?",
          "Read-only queries that return the fields the use case needs",
          "Key inputs live in PDFs, inboxes or one person’s head",
        ],
        [
          "Ownership",
          "Who approves the work, reviews exceptions and owns it in production?",
          "Named approvers and a human-review step for edge cases",
          "Nobody will own it after the pilot ends",
        ],
        [
          "Baseline",
          "How is the work measured today, and what result would count as a win?",
          "A current number from a real system, and a target",
          "Success is “it feels faster”",
        ],
      ],
    },
    { type: "h2", id: "stages", text: "What are the stages of AI maturity?" },
    {
      type: "p",
      text: "Generic AI maturity models score a whole company from “awareness” to “transformational”. That is useful for a board slide and not much else. For deciding whether to start a pilot, these four stages are more practical, because each one names the work required to reach the next.",
    },
    {
      type: "table",
      caption: "Four stages of AI readiness for a single use case",
      head: ["Stage", "What is true", "What to do next"],
      rows: [
        ["1. Curious", "Interest in AI, no specific workflow named", "Pick one workflow with a measurable cost"],
        ["2. Scoped", "Workflow named, stakeholders interviewed and in agreement", "Check the data the workflow depends on"],
        ["3. Data-ready", "Required data confirmed, gaps known, access granted", "Agree a baseline, a target and an owner"],
        ["4. Pilot-ready", "Signed scope with baseline, target, approvers and change process", "Build, then measure against the baseline"],
      ],
    },
    {
      type: "p",
      text: "Most companies that say they are ready for AI are at stage 1 or 2. The jump from 2 to 3 is where most pilots quietly fail, because the data problem is discovered after the price was agreed.",
    },
    { type: "h2", id: "data-readiness", text: "How do you assess data readiness for AI?" },
    {
      type: "definition",
      term: "Data readiness for AI",
      text: "Data readiness for AI means the data a specific use case needs exists, is structured enough to use, has enough history to test against, can be accessed with the client’s permission, and is understood well enough to protect.",
    },
    {
      type: "p",
      text: "Do not accept a description of the data. Look at it. A read-only connection and a handful of queries answer in an afternoon what a month of email cannot. Check six things:",
    },
    {
      type: "ol",
      items: [
        "**Existence.** Does the system hold the records the workflow touches, and how many in the last 90 days?",
        "**Completeness.** Of the fields the use case needs, how many are actually populated?",
        "**Format.** Are the inputs structured records, or documents such as PDFs and email attachments that need extraction first?",
        "**Access.** Who grants access, how long does it take, and can it be read-only?",
        "**Sensitivity.** Which fields are personal, financial or regulated, and what must the AI never see?",
        "**Baseline.** Can today’s performance be measured from the same system the pilot will be measured in?",
      ],
    },
    {
      type: "callout",
      title: "Example: a commercial quote intake pilot",
      text: "Read-only queries against an insurance agency’s management system found 412 submissions in 90 days, 14 of the 16 carrier-portal fields populated, and loss runs stored only as PDFs. Portal pre-fill stayed in scope; reading loss runs moved to phase two. The surprise happened before the quote, where it costs nothing. (Illustrative sample engagement.)",
    },
    { type: "h2", id: "how-long", text: "How long does an AI readiness assessment take?" },
    {
      type: "p",
      text: "Run the traditional way, with scheduled discovery calls, notes rewritten into requirements and a ticket to IT for data access, an assessment commonly stretches across several weeks. Most of that time is waiting, not work.",
    },
    {
      type: "p",
      text: "It shrinks to days when the two slow parts run in parallel: stakeholders answer a structured interview on their own time (10 to 15 minutes each, all at once) and the data check runs read-only as soon as access is granted. This is the approach [Alyvon](/#how-it-works) takes, and the first half of [how to scope an AI project](/insights/how-to-scope-an-ai-project).",
    },
    { type: "h2", id: "audit-vs-maturity", text: "What is the difference between an AI audit, an AI readiness assessment and an AI maturity model?" },
    {
      type: "ul",
      items: [
        "**AI readiness assessment:** forward-looking. Can this business run this specific AI use case? Ends in a go, no-go or reshape decision.",
        "**AI audit:** used two ways. Before a project it means the same as a readiness assessment. After deployment it means reviewing an existing AI system for accuracy, bias, security and compliance.",
        "**AI maturity model:** a company-wide scale. Useful for strategy and benchmarking, too coarse to decide whether one pilot should start.",
      ],
    },
    { type: "h2", id: "output", text: "What should an AI readiness assessment produce?" },
    {
      type: "p",
      text: "A slide that says “medium readiness” is not an output. The assessment should leave you with documents someone can act on:",
    },
    {
      type: "ul",
      items: [
        "Requirements per stakeholder, confirmed by that stakeholder",
        "Disagreements between stakeholders, listed for someone to resolve",
        "Use cases ranked by gain, with the workload math shown",
        "A data findings table: what exists, what is missing, what moves to a later phase",
        "A baseline and a target for each success measure",
        "A go, no-go or reshape recommendation, and the scope that follows from it",
      ],
    },
    { type: "h2", id: "questions", text: "What questions should you ask stakeholders?" },
    {
      type: "p",
      text: "Interview the people who do the work, the people who manage it and the person who pays for it, separately. Ask each the same core questions so disagreements surface:",
    },
    {
      type: "ol",
      items: [
        "What would you want AI to do here, in one sentence?",
        "Walk me through the work as it happens today, step by step.",
        "How long does it take, how often, and who does it?",
        "Where does it go wrong, and what does that cost?",
        "Which systems and documents are involved?",
        "Who has to approve the output before it is used?",
        "Which cases should always go to a person?",
        "What data must AI never see or change?",
        "How do you measure this work today?",
        "Six months from now, what number would tell you this worked?",
      ],
    },
    { type: "h2", id: "limits", text: "What can a readiness assessment not tell you?" },
    { type: "ul", items: [
      "**Whether the data is right.** A read-only check shows a field is populated, not that the value in it is correct. Spot-check a sample of records by hand with someone who knows them.",
      "**What people will actually do.** Interviews capture how stakeholders describe the work. Where the description and the data disagree, trust the data and ask why.",
      "**How long it stays true.** Systems, staff and priorities change. If more than a few months pass between the assessment and the build, run the data check again.",
    ] },
    { type: "h2", id: "mistakes", text: "What are the most common AI readiness mistakes?" },
    { type: "ul", items: [
      "Scoring the whole company instead of one use case",
      "Accepting a description of the data instead of looking at it",
      "Interviewing managers but not the people who do the work",
      "Skipping the baseline because the client is in a hurry",
      "Treating readiness as pass or fail, when the useful answer is usually “reshape the scope”",
    ] },
    {
      type: "callout",
      title: "Take the checklist with you",
      text: "The five areas, the four stages, the data readiness checks and these questions are in one editable document: [download the AI readiness assessment checklist](/templates/ai-readiness-checklist).",
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    { type: "ol", items: [
      "Pick one use case for your next client and run the five checks against it.",
      "Use the ten questions above as the interview script, one stakeholder at a time.",
      "Turn what you find into a signed scope with [how to scope an AI project](/insights/how-to-scope-an-ai-project).",
    ] },
  ],
  faq: [
    {
      q: "What is an AI readiness assessment?",
      a: "An AI readiness assessment checks whether a business can put a specific AI use case into production. It reviews the use case and its cost, stakeholder agreement, data readiness, ownership and approvals, and the baseline the result will be measured against.",
    },
    {
      q: "Is an AI audit the same as an AI readiness assessment?",
      a: "Before a project, yes: both check whether the business is ready for a specific use case. After deployment, an AI audit usually means reviewing an existing AI system for accuracy, bias, security and compliance.",
    },
    {
      q: "What is data readiness for AI?",
      a: "Data readiness for AI means the data a use case needs exists, is structured enough to use, has enough history to test against, can be accessed with permission, and is understood well enough to protect sensitive fields.",
    },
    {
      q: "How long does an AI readiness assessment take?",
      a: "Done with scheduled calls and manual data requests, it often takes several weeks. Running stakeholder interviews asynchronously and checking data with read-only access in parallel brings it down to days.",
    },
    {
      q: "What are the stages of AI maturity?",
      a: "For a single use case, four stages are practical: curious (interest, no workflow named), scoped (workflow named and agreed), data-ready (data confirmed and accessible), and pilot-ready (signed scope with baseline, target, approvers and a change process).",
    },
  ],
  cta: {
    heading: "Run the readiness assessment on your next client.",
    body: "Send each stakeholder one link, check their data read-only, and get scored requirements back in days. First 30 days free for founding partners.",
  },
  related: ["how-to-scope-an-ai-project", "why-ai-pilots-fail"],
}
