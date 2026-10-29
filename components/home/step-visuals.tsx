import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { AppWindow, Chip, Dots, MockCard, MockRow, MockStage } from "@/components/home/ui"

// Coded product visuals for "How Alyvon works". All names and figures are the Lakeside
// Insurance sample engagement from the hero film; illustrative, not customer data.

const field = "rounded-[8px] border border-border-subtle bg-canvas px-3 py-2 text-[12px] text-text-tertiary"

export function DiscoveryFormVisual() {
  return (
    <AppWindow
      description="New discovery form: client, project goal, and the stakeholders to interview, each sent a private link."
      crumbs={["Clients", "New discovery"]}
      title="New discovery."
      subtitle="Hear from the people closest to the work."
    >
      <div className="grid gap-3 md:grid-cols-[1fr_200px]">
        <div className="flex min-w-0 flex-col gap-3 rounded-[10px] bg-canvas p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className={field}>Lakeside Insurance</div>
            <div className={field}>Commercial quote intake</div>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-text-primary">
              What is this project about? <span className="font-normal text-accent-strong">Required</span>
            </p>
            <div className={cn(field, "mt-1.5 h-14")}>One to three sentences: what the client wants AI to do, and why now…</div>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-text-primary">Who should we interview?</p>
            <div className="mt-1.5 flex flex-col gap-1.5">
              {[
                ["Dana Whitfield", "COO"],
                ["Priya Shah", "Underwriting coordinator"],
                ["Tom Reyes", "CEO"],
              ].map(([n, t]) => (
                <div key={n} className="grid grid-cols-[1fr_1fr] gap-2">
                  <div className={cn(field, "text-text-primary")}>{n}</div>
                  <div className={field}>{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-3">
            <p className="text-[11px] text-text-secondary">3 interviews · about 10 to 15 minutes each · links expire in 30 days</p>
            <span className="rounded-full bg-accent px-3 py-1.5 text-[12px] font-medium text-text-on-accent">
              Send requirements gathering ↗
            </span>
          </div>
        </div>
        <div className="hidden flex-col gap-2 rounded-[10px] bg-canvas p-3 md:flex">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-secondary">How it works</p>
          {[
            "Each person talks with the AI consultant on their own time.",
            "It keeps asking until it has the goal, workflow, tools, approvals and success measures.",
            "You get structured requirements for each person, ready for the SOW.",
          ].map((t, i) => (
            <p key={t} className="flex gap-2 text-[12px] leading-[17px] text-text-secondary">
              <span className="font-mono text-accent-strong">0{i + 1}</span>
              {t}
            </p>
          ))}
        </div>
      </div>
    </AppWindow>
  )
}

const STATUS = {
  done: { label: "Completed", cls: "bg-success-bg text-success-ink" },
  partial: { label: "Partial", cls: "bg-warning-bg text-warning-ink" },
  waiting: { label: "Not opened", cls: "bg-surface-sunken text-text-secondary" },
} as const

export function PipelineVisual() {
  const rows: { name: string; title: string; status: keyof typeof STATUS; progress: number; note: string }[] = [
    { name: "Dana Whitfield", title: "COO", status: "done", progress: 100, note: "All areas covered · confirmed" },
    { name: "Priya Shah", title: "Underwriting coordinator", status: "partial", progress: 45, note: "Stopped at question 7 of 15" },
    { name: "Tom Reyes", title: "CEO", status: "waiting", progress: 0, note: "Link sent Oct 14" },
  ]
  return (
    <AppWindow
      description="Discovery progress: each stakeholder's interview shows completed, partial, or not yet opened."
      crumbs={["Clients", "Lakeside Insurance", "Quote intake"]}
      title="Quote intake."
      subtitle="Discovery in progress."
    >
      <div className="rounded-[10px] bg-canvas">
        <div className="grid grid-cols-3 border-b border-border-subtle py-4 text-center">
          {[
            ["1", "of 3", "Completed"],
            ["1", "partial", "In progress"],
            ["1", "waiting", "Not opened yet"],
          ].map(([n, s, l]) => (
            <div key={l}>
              <p className="text-[24px] tabular-nums text-text-primary">
                {n} <span className="text-[12px] text-text-secondary">{s}</span>
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary">{l}</p>
            </div>
          ))}
        </div>
        <div className="divide-y divide-border-subtle">
          {rows.map((r) => (
            <div key={r.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.4fr)]">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold text-text-primary">{r.name}</p>
                <p className="truncate text-[11px] text-text-secondary">{r.title}</p>
              </div>
              <span className={cn("rounded-full px-2 py-0.5 text-[11px]", STATUS[r.status].cls)}>
                {STATUS[r.status].label}
              </span>
              <div className="col-span-2 min-w-0 sm:col-span-1">
                <p className="truncate text-[11px] text-text-secondary">{r.note}</p>
                <div className="mt-1 h-1.5 rounded-full bg-surface-sunken">
                  <div
                    className={cn("h-1.5 rounded-full", r.status === "done" ? "bg-success-ink" : "bg-accent")}
                    style={{ width: `${r.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  )
}

const AREAS: [string, 1 | 2 | 3][] = [
  ["Use case", 3],
  ["Goal and outcome", 3],
  ["Pain point and its cost", 3],
  ["Scope boundaries", 2],
  ["Approvers", 2],
  ["Current workflow", 3],
  ["Tools and systems", 2],
  ["Exceptions and human review", 2],
  ["Constraints", 3],
  ["Sensitive data", 3],
  ["Success definition", 3],
  ["Baseline and target", 3],
]

export function RequirementsVisual() {
  return (
    <AppWindow
      description="A completed stakeholder interview: confirmed requirements by section, and twelve findings areas each with a confidence score."
      crumbs={["Clients", "Lakeside Insurance", "Dana Whitfield"]}
      title="Dana Whitfield, COO."
      subtitle="Interview complete."
    >
      <p className="mb-3 px-1 text-[11px] text-text-secondary">15 questions · 14 minutes · Confirmed by Dana</p>
      <div className="grid gap-3 lg:grid-cols-[1fr_300px]">
        <div className="flex min-w-0 flex-col gap-3 rounded-[10px] bg-canvas p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[16px] font-semibold text-text-primary">What Dana confirmed</p>
            <Chip tone="ok">Confirmed by stakeholder</Chip>
          </div>
          {[
            [
              "Goal and scope",
              "Pre-fill the carrier portal from the agency management system so a commercial quote request goes out the same day. Loss runs stay manual for now. Live before Q1 renewals.",
            ],
            [
              "How the work happens today",
              "Two coordinators re-key 16 fields per submission from the AMS into each carrier portal, about 140 submissions a month. Turnaround averages 2.4 days.",
            ],
            [
              "How success will be measured",
              "Quote turnaround under one day, re-keyed fields down to two, measured from the same AMS report the baseline came from.",
            ],
          ].map(([h, b]) => (
            <div key={h}>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-strong">{h}</p>
              <p className="mt-1 text-[13px] leading-[20px] text-text-primary">{b}</p>
            </div>
          ))}
          <div className="mt-1 border-t border-border-subtle pt-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[15px] font-semibold text-text-primary">Use cases <span className="font-normal text-text-secondary">3</span></p>
              <p className="text-[11px] text-text-secondary">Scored by the interviewer. Never shown to the stakeholder.</p>
            </div>
            {[
              ["Pre-fill carrier portals from the AMS instead of re-keying 16 fields", "Structural gain", "ok"],
              ["Daily turnaround report from the same AMS data", "Quick win", "ok"],
              ["Read loss-run PDFs into the submission", "Needs data", "gap"],
            ].map(([u, g, t]) => (
              <MockRow key={u}>
                <span className="min-w-0 text-[12px]">{u}</span>
                <Chip tone={t as "ok" | "gap"}>{g}</Chip>
              </MockRow>
            ))}
          </div>
        </div>
        <div className="min-w-0 rounded-[10px] bg-canvas p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-[16px] font-semibold text-text-primary">Findings by area</p>
            <p className="text-[11px] text-text-secondary">12 of 12 met</p>
          </div>
          <div className="mt-2 divide-y divide-border-subtle">
            {AREAS.map(([a, n]) => (
              <div key={a} className="flex items-center justify-between gap-2 py-1.5 text-[12px] text-text-primary">
                <span className="min-w-0 truncate">{a}</span>
                <Dots n={n} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  )
}

export function DataCheckVisual() {
  return (
    <MockStage description="Read-only access to the client's agency management system, what the agent found, and how each finding changes the pilot's scope.">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <MockCard label="Client permission" title="Read-only access granted">
            <p className="text-[12px] text-text-secondary">Agency management system</p>
            <div className="mt-2">
              <MockRow>
                <span>Connection</span>
                <Chip tone="ok">Connected · read-only</Chip>
              </MockRow>
              <MockRow last>
                <span>Audit</span>
                <Chip>Every call logged</Chip>
              </MockRow>
            </div>
          </MockCard>
          <div className="rounded-[10px] border border-white/10 p-4 font-mono text-[12px] leading-[20px] text-white/85">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">Read-only query</p>
            <p className="mt-2 break-all">
              GET /v3/submissions
              <br />
              &nbsp;&nbsp;?created_after=2026-07-01
              <br />
              &nbsp;&nbsp;&amp;fields=status,lines,client
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <MockCard label="What the agent found">
            <MockRow>
              <span>412 submissions, last 90 days</span>
              <Chip tone="ok">Evidence</Chip>
            </MockRow>
            <MockRow>
              <span>14 of 16 portal fields present</span>
              <Chip tone="ok">Evidence</Chip>
            </MockRow>
            <MockRow>
              <span>Loss runs exist only as PDFs</span>
              <Chip tone="gap">Gap</Chip>
            </MockRow>
            <MockRow last>
              <span>Turnaround baseline 2.4 days</span>
              <Chip tone="ok">Measured</Chip>
            </MockRow>
          </MockCard>
          <MockCard label="Effect on the pilot" accentEdge>
            <MockRow>
              <span>Portal pre-fill</span>
              <Chip tone="ok">In scope</Chip>
            </MockRow>
            <MockRow>
              <span>Daily turnaround report</span>
              <Chip tone="ok">In scope</Chip>
            </MockRow>
            <MockRow last>
              <span>Loss-run reading</span>
              <Chip tone="gap">Phase 2</Chip>
            </MockRow>
          </MockCard>
        </div>
      </div>
    </MockStage>
  )
}

export function ScopeVisual() {
  return (
    <MockStage description="Drafted scope of work, delivery plan, and measures of success, reviewed by your team and signed off by the client.">
      <div className="grid gap-3 sm:grid-cols-3">
        <MockCard label="Draft · Scope of work" title="Scope of work">
          <div className="mt-2">
            {["Portal pre-fill from AMS", "Daily turnaround report", "Send to carriers"].map((s, i, a) => (
              <MockRow key={s} last={i === a.length - 1}>
                <span>
                  <span className="mr-2 font-mono text-[11px] text-text-secondary">0{i + 1}</span>
                  {s}
                </span>
              </MockRow>
            ))}
          </div>
          <p className="mt-2 rounded-[6px] bg-error-bg px-2 py-1.5 font-mono text-[11px] text-error-ink">Excludes loss-run reading</p>
        </MockCard>
        <MockCard label="Draft · Delivery plan" title="Delivery plan">
          {[
            ["Week 1 to 2 · Build", "w-[40%] bg-inverse"],
            ["Week 2 to 3 · Review with your team", "ml-[30%] w-[30%] bg-inverse"],
            ["Week 3 to 4 · Pilot and measure", "ml-[55%] w-[45%] bg-accent"],
          ].map(([l, bar]) => (
            <div key={l} className="mt-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">{l}</p>
              <div className="mt-1 h-2 rounded-full bg-surface-sunken">
                <div className={cn("h-2 rounded-full", bar)} />
              </div>
            </div>
          ))}
        </MockCard>
        <MockCard label="Draft · Measures of success" title="Measures of success">
          <div className="mt-2">
            {[
              ["Quote turnaround", "2.4 days", "Under 1 day"],
              ["Re-keyed fields", "16", "2"],
              ["Submissions pre-filled", "0%", "80%"],
            ].map(([m, from, to], i, a) => (
              <div key={m} className={cn("flex flex-col gap-0.5 py-2 text-[13px]", i < a.length - 1 && "border-b border-border-subtle")}>
                <span>{m}</span>
                <span className="font-mono text-[11px] tabular-nums">
                  <span className="text-text-secondary">{from}</span>
                  <span className="text-accent"> → </span>
                  <strong>{to}</strong>
                </span>
              </div>
            ))}
          </div>
        </MockCard>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-success-bg px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-success-ink">
          <Check className="h-3.5 w-3.5" /> Your team reviewed
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-accent-wash px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-strong">
          <Check className="h-3.5 w-3.5" /> Client signed off
        </span>
      </div>
    </MockStage>
  )
}

export function BuildVisual() {
  return (
    <MockStage description="Workstreams from the approved plan waiting for your OK, a new client request turned into a change order, and results tracked against the agreed baseline.">
      <div className="grid gap-3 sm:grid-cols-2">
        <MockCard label="Workstreams · Approved plan">
          <div className="mt-2">
            <MockRow>
              <span className="min-w-0">
                <strong>Portal pre-fill agent</strong> <span className="text-text-secondary">Custom agent</span>
              </span>
              <Chip tone="ok">Accepted</Chip>
            </MockRow>
            <MockRow>
              <span className="min-w-0">
                <strong>Daily turnaround report</strong> <span className="text-text-secondary">Routine</span>
              </span>
              <Chip tone="ok">Accepted</Chip>
            </MockRow>
            <MockRow last>
              <span className="min-w-0">
                <strong>Send to carriers</strong> <span className="text-text-secondary">Custom agent</span>
              </span>
              <Chip tone="gap">Awaiting your OK</Chip>
            </MockRow>
          </div>
          <p className="mt-2 border-t border-dashed border-border-subtle pt-2 text-[12px] text-text-secondary">
            Every deliverable waits for your OK before it reaches the client.
          </p>
        </MockCard>
        <div className="flex flex-col gap-3">
          <MockCard label="Client · Week 2" accentEdge>
            <p className="mt-2 rounded-[8px] bg-surface p-3 text-[13px]">“Can it also chase renewals while it’s in there?”</p>
            <div className="mt-2 flex items-center justify-between gap-2 text-[13px]">
              <span>Not in the approved plan</span>
              <Chip tone="accent">Change order drafted</Chip>
            </div>
          </MockCard>
          <MockCard label="Results vs agreed baseline">
            <MockRow>
              <span>Quote turnaround</span>
              <span className="font-mono text-[11px] tabular-nums">
                <span className="text-text-secondary">2.4 days</span>
                <span className="text-accent"> → </span>
                <strong>0.9 days</strong>
              </span>
            </MockRow>
            <MockRow last>
              <span>Re-keyed fields</span>
              <span className="font-mono text-[11px] tabular-nums">
                <span className="text-text-secondary">16</span>
                <span className="text-accent"> → </span>
                <strong>2</strong>
              </span>
            </MockRow>
            <p className="mt-1 text-[11px] text-text-secondary">Week 4, same query and system the baseline came from.</p>
          </MockCard>
        </div>
      </div>
    </MockStage>
  )
}
