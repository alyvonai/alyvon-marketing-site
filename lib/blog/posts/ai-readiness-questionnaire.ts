import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "ai-readiness-questionnaire",
  title: "AI readiness questionnaire: 30 questions to ask before an AI project",
  seoTitle: "AI readiness questionnaire: 30 questions to ask first",
  description:
    "A free AI readiness questionnaire: 30 questions grouped by role and area, who should answer them, how to score the answers, and when to run it as an interview.",
  answer:
    "An AI readiness questionnaire is the set of questions you ask a client’s stakeholders before an AI project, to find out whether the use case, the data and the people are ready. Ask it separately to the people who do, manage and pay for the work. The 30 questions below cover all five areas of an AI readiness audit.",
  takeaways: [
    "Ask about one workflow, not the whole company. Company-wide maturity surveys produce a score and change nothing.",
    "Ask the same questions to each role separately, so disagreements surface before the scope does.",
    "Score each answer from vague to quantified, and treat conflicts between roles as findings.",
    "A questionnaire covers what people say. Pair it with a read-only data check for what is true.",
  ],
  track: "both",
  category: "AI readiness",
  author: "shawn-sias",
  published: "2026-11-09",
  updated: "2026-11-09",
  body: [
    {
      type: "p",
      text: "Most AI readiness questionnaires are surveys about the whole company: do you have a data strategy, rate your AI maturity from one to five. They produce a score and change nothing. The questions that predict whether a pilot reaches production are about one workflow, asked to the people closest to it.",
    },
    { type: "h2", id: "what-is", text: "What is an AI readiness questionnaire?" },
    {
      type: "definition",
      term: "AI readiness questionnaire",
      text: "An AI readiness questionnaire is a structured set of questions, asked to each stakeholder separately, that establishes whether a specific AI use case has a clear goal, agreement, accessible data, named approvers and a measurable baseline.",
    },
    {
      type: "p",
      text: "It is the interview half of an [AI readiness audit](/insights/ai-readiness-assessment). The other half is checking the data itself, read-only, so that what people say can be compared with what the systems hold.",
    },
    { type: "h2", id: "who", text: "Who should answer an AI readiness questionnaire?" },
    {
      type: "table",
      caption: "Who to ask, and what only they can tell you",
      head: ["Role", "Why ask them", "What only they know"],
      rows: [
        ["The person who does the work", "They know the real workflow, not the documented one", "The workarounds, exceptions and time each step takes"],
        ["The person who manages it", "They own the outcome and the team’s time", "How performance is measured today and what good looks like"],
        ["The sponsor who pays for it", "They decide whether the project continues", "The business goal, the budget and the deadline"],
        ["IT or security", "They grant or refuse access", "Which systems hold the data, and what may never leave them"],
        ["The approver", "They will review the AI’s output", "Which cases must always come to a person"],
      ],
    },
    { type: "h2", id: "use-case", text: "What should you ask about the use case and its cost?" },
    {
      type: "ol",
      items: [
        "In one sentence, what should AI do here?",
        "Why now? What changed that makes this worth doing this quarter?",
        "How often does this work happen, and how long does each instance take?",
        "Who does it today, and what else would they do with the time back?",
        "What goes wrong today, and what does a mistake cost?",
        "If this worked perfectly, what would you stop doing?",
      ],
    },
    { type: "h2", id: "workflow", text: "What should you ask about the workflow and tools?" },
    {
      type: "ol",
      items: [
        "Walk me through the last time you did this, step by step.",
        "Which systems, documents and inboxes do you touch along the way?",
        "Where do you copy information from one place to another?",
        "Which steps need a judgment call, and how do you make it?",
        "What are the most common exceptions, and how are they handled?",
        "Who else has to see or sign off the work before it is done?",
      ],
    },
    { type: "h2", id: "data", text: "What should you ask about data and access?" },
    {
      type: "ol",
      items: [
        "Where does the information this work depends on live?",
        "Is it structured records, or documents such as PDFs and email attachments?",
        "How many records are created in a typical month, and how far back does history go?",
        "Which fields are often missing or wrong?",
        "Who can grant read-only access, and how long does that usually take?",
        "Which data is personal, financial or regulated, and must never be seen or changed?",
      ],
    },
    { type: "h2", id: "approvals", text: "What should you ask about approvals, exceptions and risk?" },
    {
      type: "ol",
      items: [
        "Which actions would you never want AI to take without a person checking first?",
        "Which decisions should always stay with a person, whatever the AI suggests?",
        "Who will review the AI’s output, and how much time can they give it each day?",
        "What would happen if the AI got this wrong once? And a hundred times?",
        "Who needs to approve the project itself: legal, IT, a client, a regulator?",
        "Who owns this once it is live and the project team has gone?",
      ],
    },
    { type: "h2", id: "success", text: "What should you ask about success and the baseline?" },
    {
      type: "ol",
      items: [
        "How do you measure this work today, and where does that number come from?",
        "What is the number right now?",
        "Six months from now, what number would tell you this worked?",
        "What would tell you it failed, or should be stopped?",
        "Who will check the number, and how often?",
        "Is there anything you are worried this project will make worse?",
      ],
    },
    { type: "h2", id: "score", text: "How do you score the answers?" },
    {
      type: "p",
      text: "Score each answer for how much evidence it carries, not whether you like it. A four-point scale is enough:",
    },
    {
      type: "table",
      caption: "Scoring questionnaire answers",
      head: ["Score", "What the answer looks like", "Example"],
      rows: [
        ["0. Missing", "No answer, or “I don’t know”", "Nobody can say how the work is measured"],
        ["1. Vague", "A direction, with no specifics", "“It takes ages”"],
        ["2. Specific", "Concrete, but not measured", "“Two coordinators spend most of Monday on it”"],
        ["3. Quantified", "A number, with a source", "“16 fields per submission, 140 submissions a month, from the AMS report”"],
      ],
    },
    {
      type: "p",
      text: "Then compare roles. When the manager says the report runs weekly and the person who runs it says daily, that disagreement matters more than any low score, because it means the scope would have been built on the wrong process.",
    },
    { type: "h2", id: "format", text: "Should you send it as a form or run it as an interview?" },
    {
      type: "table",
      caption: "Three ways to run an AI readiness questionnaire",
      head: ["Format", "Strength", "Weakness"],
      rows: [
        ["Form or survey", "Fast to send, easy to compare", "Short answers and no follow-up questions, so most answers score 1"],
        ["Live interview", "Follow-up questions get to quantified answers", "Weeks of scheduling across five or more people"],
        ["Guided async interview", "Follow-ups without the calendar, 10 to 15 minutes each, all in parallel", "Cannot resolve a conflict between two people; that still needs a meeting"],
      ],
    },
    {
      type: "p",
      text: "Alyvon runs the third format: each stakeholder gets a private link, an AI consultant asks and follows up, and answers come back scored and confirmed by the person who gave them. Whatever you use, the follow-up question is where the value is. “It takes ages” is a 1; “how many hours last week?” turns it into a 3.",
    },
    { type: "h2", id: "mistakes", text: "What are the most common questionnaire mistakes?" },
    {
      type: "ul",
      items: [
        "Asking about AI in general instead of one workflow",
        "Sending one shared form that the most senior person fills in for everyone",
        "Accepting “it takes ages” without asking how long",
        "Asking about data without asking who can grant access",
        "Skipping the baseline question because it feels awkward",
        "Treating disagreements as noise rather than as findings",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    {
      type: "ol",
      items: [
        "Pick one workflow and send these questions to each role separately.",
        "Take the [AI readiness audit checklist](/templates/ai-readiness-checklist) with you, so the questions sit next to the data checks.",
        "Turn the answers into a signed scope with [how to scope an AI project](/insights/how-to-scope-an-ai-project).",
      ],
    },
  ],
  faq: [
    {
      q: "What is an AI readiness questionnaire?",
      a: "It is a structured set of questions, asked to each stakeholder separately, that shows whether a specific AI use case has a clear goal, agreement, accessible data, named approvers and a measurable baseline.",
    },
    {
      q: "What questions are in an AI readiness assessment?",
      a: "Questions about the use case and its cost, the current workflow and tools, data and access, approvals and risk, and how success is measured today. Ask about one workflow, not the whole company.",
    },
    {
      q: "Who should fill out an AI readiness questionnaire?",
      a: "The person who does the work, the person who manages it, the sponsor who pays for it, IT or security, and whoever will review the AI’s output. Ask each one separately.",
    },
    {
      q: "How long does an AI readiness questionnaire take?",
      a: "About 10 to 15 minutes per person as a guided interview. A form is faster to complete but tends to produce short answers that need follow-up calls.",
    },
    {
      q: "Is an AI readiness questionnaire the same as an AI readiness audit?",
      a: "No. The questionnaire is the interview half of an AI readiness audit. A full audit also checks the data itself, usually with read-only access, to confirm what people said.",
    },
  ],
  cta: {
    heading: "Send the questionnaire as one link per stakeholder.",
    body: "An AI consultant asks the follow-up questions, scores every answer and flags disagreements, while your team keeps its calendar. First 30 days free for founding partners.",
  },
  related: ["ai-readiness-assessment", "how-to-scope-an-ai-project"],
}
