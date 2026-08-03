"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { Section } from "@/components/marketing/section"

// The moving "working board" — a restyled lift of the live site's animated board. Cards
// enter at Queued and slide Queued -> Working -> Shipped on a loop; the status pill,
// progress bar, and check update as each card advances. Two horizontal lanes, driven by a
// timer with CSS position transitions. Motion is skipped under prefers-reduced-motion (a
// static snapshot is shown instead). Content is illustrative.

interface Brief {
  initials: string
  color: string
  name: string
  role: string
  task: string
}

const POOL: Brief[] = [
  { initials: "VE", color: "#2563EB", name: "Vera", role: "Insights Analyst", task: "Q3 enterprise renewal cohort — find what's driving the churn." },
  { initials: "QU", color: "#DE4B12", name: "Quinn", role: "Executive Asst.", task: "Schedule the exec offsite and draft the agenda." },
  { initials: "CL", color: "#0F9D6B", name: "Clio", role: "Content Writer", task: "1,840-word SEO strategy article, ready to publish." },
  { initials: "HU", color: "#0E7490", name: "Hugo", role: "Head of Engineering", task: "Open a pricing-page pull request for the team to review." },
  { initials: "PE", color: "#7C3AED", name: "Pemberton", role: "Analytics Director", task: "Weekly performance readout, every number checked." },
  { initials: "TO", color: "#DB2777", name: "Tobias", role: "Marketing Ops", task: "Multi-touch attribution report for last quarter's spend." },
  { initials: "AV", color: "#E11D48", name: "Avery", role: "Brand Director", task: "Refresh the brand voice guide with wrong/right examples." },
  { initials: "CA", color: "#0891B2", name: "Casey", role: "Sales Development", task: "Build a 200-account target list matching our ICP." },
  { initials: "CY", color: "#4F46E5", name: "Cyrus", role: "Editorial Director", task: "Edit the launch sequence into one consistent voice." },
  { initials: "NI", color: "#16A34A", name: "Niall", role: "Customer Success", task: "QBR deck for the top account, ready to present." },
]

// station 0 = Queued, 1 = Working, 2 = Shipped, 3 = exiting (off-board right)
const LEFT = ["1%", "35%", "69%", "106%"]
const ROW_TOP = [56, 210] // px offsets for the two lanes (below the column headers)
const TICK_MS = 2400

interface LiveCard {
  key: number
  brief: Brief
  row: number
  station: number
  fresh: boolean
}

function statusFor(station: number): "queued" | "working" | "shipped" {
  if (station <= 0) return "queued"
  if (station === 1) return "working"
  return "shipped"
}

function StatusPill({ status }: { status: "queued" | "working" | "shipped" }) {
  if (status === "working") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-wash px-2.5 py-0.5 font-mono text-label uppercase text-accent-strong">
        <span className="size-1.5 rounded-full bg-accent-strong" />
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

function CardBody({ brief, station }: { brief: Brief; station: number }) {
  const status = statusFor(station)
  return (
    <div className="flex h-full flex-col rounded-card border border-border-subtle bg-canvas p-4 shadow-[0_12px_32px_-16px_rgba(11,13,17,0.18)]">
      <div className="flex items-center gap-3">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold text-white"
          style={{ backgroundColor: brief.color }}
        >
          {brief.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-body-s font-semibold text-text-primary">{brief.name}</p>
          <p className="truncate text-label text-text-tertiary">{brief.role}</p>
        </div>
        <StatusPill status={status} />
      </div>
      <p className="mt-3 line-clamp-2 text-body-s leading-snug text-text-secondary">{brief.task}</p>
      {status === "working" ? (
        <div className="mt-auto pt-3">
          <div className="h-1 overflow-hidden rounded-full bg-surface-sunken">
            <div className="animate-board-progress h-full w-1/3 rounded-full bg-accent" />
          </div>
        </div>
      ) : null}
      {status === "shipped" ? (
        <span className="mt-auto inline-flex w-fit items-center gap-1 pt-3 font-mono text-label uppercase text-text-tertiary">
          In your Library
        </span>
      ) : null}
    </div>
  )
}

const COLUMNS = ["Queued", "Working", "Shipped"]

export function WorkingBoard() {
  // Seed: each lane starts with a card in Queued, Working, and Shipped.
  const seed: LiveCard[] = []
  let k = 0
  for (let row = 0; row < 2; row++) {
    for (let station = 0; station < 3; station++) {
      seed.push({ key: k, brief: POOL[k % POOL.length], row, station, fresh: false })
      k++
    }
  }
  const [cards, setCards] = useState<LiveCard[]>(seed)
  const nextKey = useRef(k)
  const nextBrief = useRef(k)

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => {
      setCards((prev) => {
        const advanced = prev
          .map((c) => ({ ...c, station: c.station + 1, fresh: false }))
          .filter((c) => c.station <= 3) // keep the exiting frame, drop after
        for (let row = 0; row < 2; row++) {
          advanced.push({
            key: nextKey.current++,
            brief: POOL[nextBrief.current++ % POOL.length],
            row,
            station: 0,
            fresh: true,
          })
        }
        return advanced
      })
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])

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

        {/* Animated board (md+) */}
        <div className="relative hidden h-[350px] md:block">
          {/* Column headers */}
          {COLUMNS.map((label, i) => (
            <div key={label} className="absolute top-0 flex w-[30%] items-center justify-between px-1" style={{ left: LEFT[i] }}>
              <span className="font-mono text-label uppercase text-text-secondary">{label}</span>
            </div>
          ))}
          <div className="absolute inset-x-0 top-9 h-px bg-border-subtle" />
          {cards.map((c) => (
            <div
              key={c.key}
              className={`absolute w-[30%] ${c.fresh ? "animate-card-enter" : ""}`}
              style={{
                left: LEFT[c.station],
                top: ROW_TOP[c.row],
                height: 126,
                opacity: c.station >= 3 ? 0 : 1,
                transition: "left 900ms cubic-bezier(0.4,0,0.2,1), opacity 600ms ease",
                zIndex: 3 - c.station,
              }}
            >
              <CardBody brief={c.brief} station={c.station} />
            </div>
          ))}
        </div>

        {/* Static stacked version (mobile) */}
        <div className="flex flex-col gap-4 md:hidden">
          {[0, 1, 2].map((station) => (
            <div key={station} className="flex flex-col gap-2">
              <span className="font-mono text-label uppercase text-text-secondary">{COLUMNS[station]}</span>
              <div className="h-[126px]">
                <CardBody brief={POOL[station]} station={station} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-body-s text-text-tertiary">Illustrative. The live board is in the product.</p>
      </div>
    </Section>
  )
}
