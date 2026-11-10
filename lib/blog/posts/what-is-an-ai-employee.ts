import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "what-is-an-ai-employee",
  title: "What is an AI employee? What agencies actually build when they sell one",
  seoTitle: "What is an AI employee? What it does, and what it doesn’t",
  description:
    "What an AI employee is, how an AI marketing employee or AI SDR differs from a chatbot, what one needs to work, and how agencies should scope and sell them.",
  answer:
    "An AI employee is an AI agent set up to do one job role’s recurring work, such as qualifying leads, answering support tickets or drafting marketing content, inside the tools that role already uses. Underneath, it is an agent with instructions, tools, memory and a person approving its riskier actions. Treat it as a role you are automating, not a person you are hiring.",
  takeaways: [
    "An AI employee is a product framing for an agent with a job description, not a new kind of technology.",
    "Scope it like a role: inputs, outputs, decisions, the tools it uses and what it must never do.",
    "Every AI employee needs an escalation path and a person approving actions that reach customers.",
    "Sell it against the role’s measured workload, so the client can see the baseline you are improving.",
  ],
  track: "both",
  category: "AI workforce",
  author: "shawn-sias",
  published: "2026-11-09",
  updated: "2026-11-09",
  body: [
    {
      type: "p",
      text: "“AI employee” is one of the fastest-growing ways AI services are sold, and one of the vaguest. Buyers hear a hire that never sleeps. What gets delivered is usually an agent with a job description, and the gap between those two pictures is where engagements go wrong.",
    },
    { type: "h2", id: "what-is", text: "What is an AI employee?" },
    {
      type: "definition",
      term: "AI employee",
      text: "An AI employee is an AI agent configured to perform the recurring work of one job role, using that role’s tools and knowledge, with defined limits and a person who reviews its higher-risk actions.",
    },
    {
      type: "p",
      text: "The term is most common in sales and marketing. An **AI marketing employee** drafts posts, emails and reports. An AI SDR qualifies leads and follows up. An AI receptionist answers enquiries and books appointments. A **virtual AI employee** usually means the same thing, with the emphasis on working inside your existing systems rather than as a separate app.",
    },
    { type: "h2", id: "compare", text: "How is an AI employee different from a chatbot, an automation or an AI workforce?" },
    {
      type: "table",
      caption: "AI employee compared with related tools",
      head: ["", "What it does", "Handles judgment?", "Scope"],
      rows: [
        ["Chatbot", "Answers questions in a conversation", "Within the conversation only", "One channel"],
        ["Automation (if this, then that)", "Runs fixed steps when a trigger fires", "No: the rules decide", "One process"],
        ["AI employee", "Does a role’s recurring tasks across its tools", "Yes, within written limits", "One role"],
        ["AI workforce", "Coordinates many agents across roles, with shared memory and approvals", "Yes, with routing between roles", "Many roles"],
      ],
    },
    {
      type: "p",
      text: "If the work never needs judgment, a plain automation is cheaper and more predictable. An AI employee earns its place when the inputs vary, such as free-text enquiries, messy documents or replies that need reading.",
    },
    { type: "h2", id: "parts", text: "What does an AI employee need to work?" },
    {
      type: "ol",
      items: [
        "**A job description.** The inputs it receives, the outputs it produces and the decisions it may make.",
        "**Tools and access.** The CRM, inbox or calendar it works in, with only the permissions the role needs.",
        "**Memory of the business.** Products, pricing, tone and past decisions, so it does not start from a blank prompt.",
        "**Approval rules.** Which actions run on their own and which wait for a person. See [where the approval gate belongs](/insights/human-in-the-loop-ai).",
        "**An escalation path.** Who it hands off to, and how fast, when a case is outside its limits.",
        "**A measure.** The number it is meant to move, taken from the same system before and after.",
      ],
    },
    { type: "h2", id: "examples", text: "What do common AI employees actually do?" },
    {
      type: "table",
      caption: "Common AI employee roles and where a person stays involved",
      head: ["Role", "Typical recurring tasks", "What should stay with a person"],
      rows: [
        ["AI marketing employee", "Drafting posts and emails, repurposing content, weekly reporting", "Publishing, brand-sensitive messages, budget changes"],
        ["AI SDR", "Researching leads, qualifying, drafting follow-ups", "Sending to new prospects until quality is proven, pricing conversations"],
        ["AI support agent", "Answering known questions, triaging and routing tickets", "Refunds, complaints and anything legal or medical"],
        ["AI receptionist", "Answering enquiries, booking and rescheduling", "Unusual requests and upset callers"],
        ["AI operations assistant", "Pre-filling forms, reconciling records, chasing missing information", "Writing to systems of record and anything that spends money"],
      ],
    },
    { type: "h2", id: "sell", text: "How should an agency scope and sell an AI employee?" },
    {
      type: "ol",
      items: [
        "**Start from the role’s real workload.** Interview the people in the role and measure the hours and volumes first. See [how to scope an AI project](/insights/how-to-scope-an-ai-project).",
        "**Write a job description, not a feature list.** Clients understand “qualifies inbound leads and books meetings” faster than a list of integrations.",
        "**Name what it never does.** A short written list of actions that always stay with a person reassures the client and their IT team.",
        "**Agree the baseline before launch.** Response time, hours per week or conversion rate, from the system it will be measured in.",
        "**Plan for new duties.** Clients will ask it to take on more. A [change order](/insights/change-order-template) turns that into paid work.",
      ],
    },
    { type: "h2", id: "limits", text: "What can an AI employee not do?" },
    {
      type: "ul",
      items: [
        "**Be accountable.** Responsibility for its output stays with the person or business that deployed it.",
        "**Work without the data.** If the information a role depends on is in someone’s head, the agent cannot use it.",
        "**Replace relationships.** It can draft the follow-up; the long-term client relationship still needs a person.",
        "**Run unattended forever.** Products, prices and policies change. Someone has to review its output and update its instructions.",
      ],
    },
    { type: "h2", id: "mistakes", text: "What are the most common AI employee mistakes?" },
    {
      type: "ul",
      items: [
        "Selling it as a person, which sets expectations no agent can meet",
        "Giving it every permission the human in the role has",
        "Launching without an escalation path for cases outside its limits",
        "Skipping the baseline, so nobody can prove it worked",
        "Treating launch as the finish line instead of the start of tuning",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    {
      type: "ol",
      items: [
        "Pick one role at your next client and list its recurring tasks with the hours each takes.",
        "Sort those tasks into what runs alone and what needs approval, using the four tiers in [human in the loop AI](/insights/human-in-the-loop-ai).",
        "If the client needs more than one role, read [what an AI workforce is](/insights/what-is-an-ai-workforce) before scoping each employee separately.",
      ],
    },
  ],
  faq: [
    {
      q: "What is an AI employee?",
      a: "An AI employee is an AI agent configured to do one job role’s recurring work, such as qualifying leads or answering tickets, inside that role’s tools, with defined limits and a person reviewing higher-risk actions.",
    },
    {
      q: "What is an AI marketing employee?",
      a: "An AI marketing employee is an AI agent that handles recurring marketing tasks, such as drafting posts and emails, repurposing content and reporting, while a person approves anything that publishes or spends money.",
    },
    {
      q: "Is an AI employee the same as an AI agent?",
      a: "Technically, yes. An AI employee is an AI agent framed around a single job role, with that role’s tools, knowledge and limits. The term describes how it is scoped and sold, not a different technology.",
    },
    {
      q: "Can an AI employee replace a human employee?",
      a: "It can take on recurring, well-defined tasks in a role. Accountability, judgment outside its limits, exceptions and relationships stay with people, so most deployments change a role rather than remove it.",
    },
    {
      q: "What is a virtual AI employee?",
      a: "A virtual AI employee is another name for an AI employee: an AI agent doing one role’s recurring work inside a business’s existing tools, such as its CRM, inbox and calendar.",
    },
  ],
  cta: {
    heading: "Deliver AI employees on a harness that is already built.",
    body: "Custom agents, memory per client, approvals and an audit trail come with every client workspace, so you can focus on the role itself. First 30 days free for founding partners.",
  },
  related: ["what-is-an-ai-workforce", "human-in-the-loop-ai"],
}
