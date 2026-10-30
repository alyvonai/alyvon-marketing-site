import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "human-in-the-loop-ai",
  title: "Human in the loop AI: where the approval gate belongs, and where it backfires",
  seoTitle: "Human in the loop AI: where to put the approval gate",
  description:
    "Human in the loop AI explained: where approval gates belong, how to tier agent actions by risk, and how to stop reviewers rubber-stamping everything they see.",
  answer:
    "Human in the loop AI means an AI system pauses at defined points so a person can approve, edit or reject its work before it takes effect. Put the gate on actions that are hard to undo or that reach people outside the team, and let low-risk work run on its own. Approving everything fails too, because reviewers stop reading.",
  takeaways: [
    "Tier agent actions by two questions: can it be undone, and who does it reach?",
    "Gate sends, publishes, spends and writes to systems of record. Let reads and drafts run.",
    "Approving everything creates rubber-stamping, which is worse than no gate because it looks like oversight.",
    "Track edit rate and time in queue. They tell you which gates to keep and which to loosen.",
    "Write the approval points and the named approvers into the statement of work.",
  ],
  track: "agency",
  category: "AI workforce",
  author: "shawn-sias",
  published: "2026-10-30",
  updated: "2026-10-30",
  body: [
    {
      type: "p",
      text: "Most human in the loop designs fail in one of two ways. Either nothing is gated, and the first bad email to a customer ends the pilot. Or everything is gated, and by week three your client’s team is clicking approve on 200 items a day without reading them. The second failure is harder to spot, because the dashboard still says a human reviewed everything.",
    },
    {
      type: "p",
      text: "The useful question is not whether to keep a human in the loop. It is which actions need one, and which ones just need a log.",
    },
    { type: "h2", id: "what-is", text: "What is human in the loop AI?" },
    {
      type: "definition",
      term: "Human in the loop AI",
      text: "Human in the loop AI is a system design in which an AI pauses at defined points for a person to review, correct or approve its work before that work takes effect.",
    },
    {
      type: "p",
      text: "The term covers three different levels of control, and most arguments about it are really arguments about which one you mean.",
    },
    {
      type: "table",
      caption: "Three levels of human oversight for AI agents",
      head: ["Model", "What the person does", "Use it when", "The cost"],
      rows: [
        ["Human in the loop", "Approves each action before it runs", "A mistake is hard to undo or reaches outsiders", "Latency, and reviewer time on every item"],
        ["Human on the loop", "Watches actions as they run and can step in", "Volume or speed rules out per-item approval", "Some mistakes land before anyone intervenes"],
        ["Human out of the loop", "Reviews logs and samples afterwards", "Actions are low-risk and reversible", "Problems surface later, in bulk"],
      ],
    },
    { type: "h2", id: "why", text: "Why does human in the loop matter for AI agents?" },
    {
      type: "p",
      text: "A chatbot that gets something wrong produces a bad sentence. An agent that gets something wrong sends the email, updates the record or spends the money. Once software can act, review stops being a quality step and becomes a control.",
    },
    {
      type: "p",
      text: "It is also what gets deployments approved. A client’s IT and legal teams rarely ask whether the model is clever. They ask what it can do without asking, and who is accountable when it’s wrong. A clear gate answers both.",
    },
    {
      type: "p",
      text: "In regulated work it can be a legal requirement. **Article 14 of the EU AI Act** requires high-risk AI systems to be designed so they can be effectively overseen by people, and **Article 22 of the GDPR** gives people a right not to be subject to solely automated decisions with legal or similarly significant effects. Neither is a complete compliance checklist, and whether they apply depends on the use case, so take legal advice for your client’s situation.",
    },
    { type: "h2", id: "where", text: "Which AI actions need a human in the loop?" },
    {
      type: "p",
      text: "Ask two questions about every action an agent can take. Can it be undone? And who does it reach? Those two answers decide the tier, so you can sort a whole agent’s tool list in an afternoon rather than debating each one.",
    },
    {
      type: "table",
      caption: "Tiering agent actions by reversibility and reach",
      head: ["Tier", "Reversible?", "Reaches", "Examples", "Control"],
      rows: [
        ["1. Run freely", "Nothing changes", "No one", "Reading records, searching, research", "Logged"],
        ["2. Run and sample", "Yes, easily", "Your team", "Drafts, internal summaries, tagging, routing", "Logged, with a sample reviewed"],
        ["3. Approve each", "Hard to undo", "Clients, customers or systems of record", "Sending, publishing, spending, writing to a CRM or ledger", "A person approves every action"],
        ["4. Never automate", "No", "People’s rights, money or safety", "Final credit, hiring, medical or legal decisions", "AI prepares; a person decides"],
      ],
    },
    {
      type: "p",
      text: "Tier 4 is the one to agree with the client in writing. It is usually short, and it is the list that the people accountable for the work care about most.",
    },
    { type: "h2", id: "how", text: "How does an approval gate actually work?" },
    {
      type: "p",
      text: "A gate is more than a confirm button. The agent has to stop before the action, not after, and the reviewer needs enough context to decide in seconds.",
    },
    {
      type: "flow",
      caption: "The path of one agent action through an approval gate",
      steps: [
        { label: "Agent proposes", note: "It prepares the action and stops before executing it." },
        { label: "Tier check", note: "Tier 1 and 2 actions run. Tier 3 goes to a queue." },
        { label: "Reviewer sees context", note: "The exact action, the evidence behind it and what it will change." },
        { label: "Approve, edit or reject", note: "From the desk or the phone, by a named person." },
        { label: "Action runs", note: "Only the approved version executes." },
        { label: "Everything is logged", note: "The proposal, the decision, the reviewer and any edit." },
      ],
    },
    {
      type: "p",
      text: "This is how approvals work in [Alyvon](/platform): anything that sends, publishes or spends waits for a person, and each call is logged. The tiering itself is a decision you make with your client, whatever tool you use.",
    },
    {
      type: "callout",
      title: "Example: a commercial quote intake agent",
      text: "The agent reads submissions from the agency management system (tier 1), pre-fills carrier portal fields as a draft (tier 2), and waits for a coordinator’s OK before anything goes to a carrier (tier 3). Declining a risk stays with an underwriter (tier 4). (Illustrative sample engagement.)",
    },
    { type: "h2", id: "rubber-stamping", text: "Why does approving everything backfire?" },
    {
      type: "p",
      text: "People trust systems that are usually right. It is called automation bias, and Article 14 of the EU AI Act names it directly as a risk that human overseers need to stay aware of. Give someone a long queue of mostly correct items and they will stop reading and start clicking.",
    },
    {
      type: "p",
      text: "That leaves you with the worst of both options: the latency of human review and the risk of no review, plus a log suggesting someone checked. Three things keep a gate honest:",
    },
    {
      type: "ul",
      items: [
        "**Keep the queue short.** A gate only protects you if the reviewer has time to use it. Move low-risk work down a tier rather than asking people to read faster.",
        "**Show the evidence.** Put the source next to the output, so checking takes seconds rather than a trip to another system.",
        "**Make rejecting easy.** If editing takes longer than approving, people approve.",
      ],
    },
    { type: "h2", id: "measure", text: "How do you know when to loosen a gate?" },
    {
      type: "p",
      text: "Measure the gate like any other part of the system. Four numbers are enough:",
    },
    {
      type: "table",
      caption: "Four measures for an approval gate",
      head: ["Measure", "What it tells you"],
      rows: [
        ["Edit rate", "How often the reviewer changes the output. This is your real quality signal."],
        ["Rejection rate", "How often the agent proposes the wrong action altogether."],
        ["Time in queue", "What the gate costs in delay."],
        ["Time per review", "Falling sharply while volume rises can mean people have stopped reading."],
      ],
    },
    {
      type: "p",
      text: "Earn autonomy one action type at a time. A reasonable starting rule, which you should tune to the stakes, is to move an action from tier 3 to tier 2 only after a long run of approvals with no material edits, and only with the client’s agreement. Keep sampling afterwards, and move it back if quality slips. A gate that has never been loosened or tightened usually means nobody is reading the numbers.",
    },
    { type: "h2", id: "limits", text: "What can human in the loop not fix?" },
    {
      type: "ul",
      items: [
        "**A bad use case.** Review catches errors. It doesn’t make a system worth running if most of its output needs rework.",
        "**Real-time work.** You can’t approve each sentence of a live voice call. Use human on the loop, with narrow limits on what the agent may do and a fast handoff.",
        "**Unclear accountability.** If nobody is named as the approver, the queue simply grows.",
        "**Errors that look right.** A reviewer can only catch what they can check, which is why the evidence has to sit next to the output.",
      ],
    },
    { type: "h2", id: "mistakes", text: "What are the most common human in the loop mistakes?" },
    {
      type: "ul",
      items: [
        "Gating everything because it feels safe",
        "Adding the gate after the action, as a notification instead of a stop",
        "Naming a team as the approver rather than a person, with no cover for holidays",
        "Asking reviewers to approve without the source material in front of them",
        "Never reviewing the gate’s own numbers",
        "Leaving approval points out of the contract, so nobody budgets the review time",
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    {
      type: "ol",
      items: [
        "List every action your agent can take, and sort each one into the four tiers.",
        "Write tier 3 and tier 4 into section 8 of the [AI statement of work template](/insights/statement-of-work-template-ai), with a named approver for each.",
        "Add the agreed tiers to the scope, using [how to scope an AI project](/insights/how-to-scope-an-ai-project), so review time is planned from the start.",
      ],
    },
  ],
  faq: [
    {
      q: "What does human in the loop mean in AI?",
      a: "Human in the loop means an AI system pauses at defined points so a person can review, correct or approve its work before it takes effect, such as before sending an email or changing a record.",
    },
    {
      q: "What is the difference between human in the loop and human on the loop?",
      a: "In human in the loop, a person approves each action before it runs. In human on the loop, actions run automatically while a person monitors them and can step in. On the loop trades some safety for speed.",
    },
    {
      q: "Which AI agent actions need human approval?",
      a: "Actions that are hard to undo or that reach people outside the team: sending messages, publishing, spending money and writing to systems of record. Reads and internal drafts can usually run with logging and sampling.",
    },
    {
      q: "What is automation bias?",
      a: "Automation bias is the tendency to over-trust automated output. In AI review it shows up as people approving items without really checking them, especially in long queues where most items are correct.",
    },
    {
      q: "Does the EU AI Act require human in the loop?",
      a: "Article 14 of the EU AI Act requires high-risk AI systems to be designed for effective human oversight. It does not require approval of every action, and whether it applies depends on the system, so take legal advice.",
    },
  ],
  sources: [
    { label: "EU AI Act, Article 14: Human oversight", url: "https://artificialintelligenceact.eu/article/14/" },
    { label: "GDPR, Article 22: Automated individual decision-making", url: "https://gdpr-info.eu/art-22-gdpr/" },
  ],
  cta: {
    heading: "Ship agents your client’s IT team will approve.",
    body: "Approvals, an audit trail and memory per client are already built, so your team can spend the engagement on the work itself. First 30 days free for founding partners.",
  },
  related: ["what-is-an-ai-workforce", "statement-of-work-template-ai"],
}
