import { Bot, Brain, CalendarClock, KeyRound, Plug, ScrollText, ShieldCheck, Sparkles } from "lucide-react"

// The agent harness: what ships with every client workspace, so agencies stop rebuilding it
// per project. Each line maps to a shipped feature (see /platform).
export const HARNESS = [
  {
    icon: Bot,
    title: "Custom agents",
    body: "Define the role, the tools and the instructions. The agent runs on the harness from its first task, with no scaffolding to write.",
  },
  {
    icon: Brain,
    title: "Memory per client",
    body: "Docs, past work and data are embedded as searchable knowledge for that client, so every agent starts with context instead of a blank prompt.",
  },
  {
    icon: ShieldCheck,
    title: "Approvals built in",
    body: "Anything that sends, publishes or spends waits for a person’s OK, from the desk or the phone. Your client sees a human in the loop because there is one.",
  },
  {
    icon: Plug,
    title: "1,000+ integrations, auth handled",
    body: "OAuth and API keys are brokered and stored per client, scoped to what each agent needs, and revocable in one click.",
  },
  {
    icon: CalendarClock,
    title: "Routines and triggers",
    body: "Run an agent on a schedule, on an event in the client’s system, or from a webhook. No cron jobs or queue workers to host.",
  },
  {
    icon: Sparkles,
    title: "Improvement Engine",
    body: "After launch it surfaces ranked improvements and experiments. You approve what runs, and it measures the result and reports back.",
  },
  {
    icon: ScrollText,
    title: "Audit trail",
    body: "Every query, API call and agent action is logged, so you can answer the client’s IT team with a record instead of a reassurance.",
  },
  {
    icon: KeyRound,
    title: "Bring your own model keys",
    body: "Run on your own model accounts when the client or the contract requires it.",
  },
]

// What an agency rebuilds per client today vs. what ships on Alyvon.
export const REBUILT = ["Credential storage and OAuth", "Retrieval and memory", "A human approval step", "Logging for client IT", "Schedulers and webhooks", "Post-launch tuning"]
