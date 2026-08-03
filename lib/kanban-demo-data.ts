// Data for the moving "working board" on /workforce — a faithful replica of the live
// alyvon.com kanban demo. Structure matches the live site's specialist + task-pool model
// exactly; only the avatar colors are re-picked to sit with the new brand (an orange-led,
// cool-neutral palette) instead of the old identity's muted set.

export type SpecialistKey = "vera" | "quinn" | "clio" | "atlas" | "marlowe" | "sage"

export const ALYVON_SPECIALISTS: Record<
  SpecialistKey,
  { name: string; role: string; color: string }
> = {
  vera: { name: "Vera", role: "Insights Analyst", color: "#3B5B8C" },
  quinn: { name: "Quinn", role: "Executive Asst.", color: "#2F6F5E" },
  clio: { name: "Clio", role: "Content Writer", color: "#B33A0B" },
  atlas: { name: "Atlas", role: "RevOps Analyst", color: "#A23C6B" },
  marlowe: { name: "Marlowe", role: "Brand Strategist", color: "#6B4A8B" },
  sage: { name: "Sage", role: "Customer Success", color: "#5E7A3C" },
}

export interface TaskTemplate {
  spec: SpecialistKey
  title: string
  duration: number
  needsYou: boolean
  question?: string
}

export const ALYVON_TASK_POOL: TaskTemplate[] = [
  { spec: "vera", title: "Pull Q3 pipeline forecast from Salesforce", duration: 8, needsYou: false },
  { spec: "quinn", title: "Triage 47 emails from this morning", duration: 6, needsYou: false },
  {
    spec: "clio",
    title: "Draft launch announcement for Wednesday",
    duration: 9,
    needsYou: true,
    question: "Tone — playful or executive?",
  },
  { spec: "atlas", title: "Build deal hygiene report for sales standup", duration: 7, needsYou: false },
  { spec: "marlowe", title: "Outline next week's customer story", duration: 8, needsYou: false },
  { spec: "sage", title: "Review at-risk accounts before EOQ", duration: 7, needsYou: false },
  { spec: "vera", title: "Compare CAC trend across the last 4 quarters", duration: 8, needsYou: false },
  { spec: "quinn", title: "Schedule 1:1s with all 8 reports for next week", duration: 6, needsYou: false },
  { spec: "clio", title: "Rewrite the careers page intro", duration: 7, needsYou: false },
  {
    spec: "atlas",
    title: "Tag 23 stale opportunities for review",
    duration: 6,
    needsYou: true,
    question: "Auto-close or assign to AE?",
  },
]
