import { Check } from "lucide-react"
import { Section } from "@/components/marketing/section"

// The moving "working board" — a restyled lift of the live site's floating specialist
// cards. Task cards sit across Queued / Working / Shipped and gently float (CSS only, no
// client JS); the Working card's progress bar sweeps. Motion is disabled under
// prefers-reduced-motion (see globals.css). Content is illustrative.

type Status = "queued" | "working" | "shipped"

interface Task {
  initials: string
  color: string
  name: string
  role: string
  status: Status
  line: string
  /** chip shown on shipped cards, e.g. "In your Library" */
  chip?: string
}

const COLUMNS: { key: Status; label: string; tasks: Task[] }[] = [
  {
    key: "queued",
    label: "Queued",
    tasks: [
      {
        initials: "PE",
        color: "#7C3AED",
        name: "Pemberton",
        role: "Analytics Director",
        status: "queued",
        line: "Pull the Q3 renewal cohort and flag the churn risk.",
      },
    ],
  },
  {
    key: "working",
    label: "Working",
    tasks: [
      {
        initials: "VE",
        color: "#2563EB",
        name: "Vera",
        role: "Insights Analyst",
        status: "working",
        line: "Pulled 12 months of BigQuery data. Found a 23% drop in enterprise renewals — drafting the narrative.",
      },
      {
        initials: "QU",
        color: "#DE4B12",
        name: "Quinn",
        role: "Executive Asst.",
        status: "working",
        line: "Sent calendar polls to 8 execs. Booked Conference Room B. Drafting the agenda.",
      },
    ],
  },
  {
    key: "shipped",
    label: "Shipped",
    tasks: [
      {
        initials: "CL",
        color: "#0F9D6B",
        name: "Clio",
        role: "Content Writer",
        status: "shipped",
        line: "Draft complete — 1,840 words on SEO strategy.",
        chip: "In your Library",
      },
      {
        initials: "HU",
        color: "#0E7490",
        name: "Hugo",
        role: "Head of Engineering",
        status: "shipped",
        line: "Pricing-page change opened for your team to review.",
        chip: "PR opened",
      },
    ],
  },
]

function StatusPill({ status }: { status: Status }) {
  if (status === "working") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-wash px-2.5 py-0.5 font-mono text-label uppercase text-accent-strong">
        <span className="size-1.5 animate-float-y rounded-full bg-accent-strong" />
        Working
      </span>
    )
  }
  if (status === "shipped") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E4F4EB] px-2.5 py-0.5 font-mono text-label uppercase text-[#0F7A42]">
        <Check aria-hidden="true" className="size-3" />
        Shipped
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full bg-surface-sunken px-2.5 py-0.5 font-mono text-label uppercase text-text-tertiary">
      Queued
    </span>
  )
}

function TaskCard({ task, delay }: { task: Task; delay: number }) {
  return (
    <div
      className="animate-float-y rounded-card border border-border-subtle bg-canvas p-4 shadow-[0_12px_32px_-16px_rgba(11,13,17,0.18)]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold text-white"
          style={{ backgroundColor: task.color }}
        >
          {task.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-body-s font-semibold text-text-primary">{task.name}</p>
          <p className="truncate text-label text-text-tertiary">{task.role}</p>
        </div>
        <StatusPill status={task.status} />
      </div>
      <p className="mt-3 text-body-s leading-snug text-text-secondary">{task.line}</p>
      {task.status === "working" ? (
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-surface-sunken">
          <div className="animate-board-progress h-full w-1/3 rounded-full bg-accent" />
        </div>
      ) : null}
      {task.status === "shipped" && task.chip ? (
        <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-surface-sunken px-2.5 py-0.5 font-mono text-label uppercase text-text-secondary">
          {task.chip}
        </span>
      ) : null}
    </div>
  )
}

export function WorkingBoard() {
  return (
    <Section tone="surface">
      <div className="flex flex-col gap-8">
        <div className="flex max-w-[720px] flex-col gap-4">
          <span className="font-mono text-label uppercase text-accent-strong">Watch it work</span>
          <h2 className="text-display-m text-text-primary">Your specialists are already working.</h2>
          <p className="text-body-l text-text-secondary">
            Assign the work once. Watch it move across the board — questions asked, drafts written,
            actions held for approval — and land in your Library, finished.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {COLUMNS.map((col, ci) => (
            <div key={col.key} className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-label uppercase text-text-secondary">{col.label}</span>
                <span className="font-mono text-label text-text-tertiary">{col.tasks.length}</span>
              </div>
              {col.tasks.map((task, ti) => (
                <TaskCard key={task.name} task={task} delay={ci * 0.6 + ti * 1.2} />
              ))}
            </div>
          ))}
        </div>

        <p className="text-body-s text-text-tertiary">Illustrative. Live board shown in the product.</p>
      </div>
    </Section>
  )
}
