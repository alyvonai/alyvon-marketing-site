"use client"

import * as React from "react"
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react"
import { Chip } from "@/components/home/ui"

// "The routine today" visual. Scroll-scrubbed: on lg+ screens tall enough to show it whole, the panel pins while the six busywork
// cards drop in one at a time and the elapsed counter climbs from Week 1 to Week 3; elsewhere
// the same progress plays as the panel scrolls through (no pinning). Under
// prefers-reduced-motion everything renders in its final state.

const ROUTINE: { step: string; title: string; note?: string; tag: string; late?: boolean }[] = [
  { step: "01", title: "Discovery calls", tag: "Zoom" },
  { step: "02", title: "Chasing stakeholders", tag: "No reply, 4 days", late: true },
  { step: "03", title: "Rewriting notes into requirements", tag: "Docs" },
  { step: "04", title: "Waiting on IT for data", tag: "Sent 9 days ago", late: true },
  { step: "05", title: "Mapping the workflow by hand", tag: "Miro" },
  { step: "06", title: "Second round of calls", note: "Because the first answers disagreed.", tag: "Rescheduled twice", late: true },
]

// Progress windows: each card drops across its own slice; the verdict lands last.
const CARD_SPAN = 0.8 / ROUTINE.length
const cardWindow = (i: number) => [0.04 + i * CARD_SPAN, 0.04 + (i + 0.85) * CARD_SPAN] as const

function RoutineCard({
  item,
  index,
  progress,
  animate,
}: {
  item: (typeof ROUTINE)[number]
  index: number
  progress: MotionValue<number>
  animate: boolean
}) {
  const [a, b] = cardWindow(index)
  const opacity = useTransform(progress, [a, b], [0, 1])
  const y = useTransform(progress, [a, b], [-56, 0])
  const rotate = useTransform(progress, [a, b], [index % 2 ? 2.5 : -2.5, 0])

  return (
    <motion.li
      style={animate ? { opacity, y, rotate, marginLeft: index * 6 } : { marginLeft: index * 6 }}
      className="flex origin-top items-start justify-between gap-3 rounded-[10px] border border-border-subtle bg-canvas px-4 py-3 shadow-sm"
    >
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">Step {item.step}</p>
        <p className="text-[15px] font-semibold text-text-primary">{item.title}</p>
        {item.note ? <p className="text-[13px] text-text-secondary">{item.note}</p> : null}
      </div>
      <Chip tone={item.late ? "gap" : "neutral"}>{item.tag}</Chip>
    </motion.li>
  )
}

export function RoutineVisual() {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end end"] })

  // Week 1 → 3 as the cards land; held at 3 once the last card is in.
  const [week, setWeek] = React.useState(reduce ? 3 : 1)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return
    setWeek(Math.min(3, 1 + Math.floor((v / cardWindow(ROUTINE.length - 1)[1]) * 3)))
  })

  const verdictOpacity = useTransform(scrollYProgress, [0.86, 0.96], [0, 1])
  const verdictY = useTransform(scrollYProgress, [0.86, 0.96], [12, 0])

  return (
    <div ref={ref} className="relative [@media(min-width:1024px)_and_(min-height:820px)]:h-[190vh]">
      <figure
        aria-label="Six manual discovery steps, three of them stalled, and by week 3 the buildable scope is still unknown."
        className="grid gap-4 [@media(min-width:1024px)_and_(min-height:820px)]:sticky [@media(min-width:1024px)_and_(min-height:820px)]:top-24 lg:grid-cols-[1fr_1.15fr]"
      >
        <div aria-hidden="true" className="flex flex-col justify-between gap-10 rounded-[14px] border border-border-subtle bg-canvas p-6 sm:p-8">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-text-secondary">Elapsed</p>
            <p className="mt-2 text-[64px] font-bold leading-none tracking-[-0.04em] text-text-primary tabular-nums sm:text-[88px]">
              Week{" "}
              <motion.span
                key={week}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                className="inline-block"
              >
                {week}
              </motion.span>
            </p>
            <div className="mt-6 flex gap-1.5">
              {[1, 2, 3].map((w) => (
                <span
                  key={w}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-panel ${w <= week ? "bg-accent" : "bg-surface-sunken"}`}
                />
              ))}
            </div>
          </div>
          <motion.p style={reduce ? undefined : { opacity: verdictOpacity, y: verdictY }} className="text-body-l text-text-secondary">
            What can we actually build? <strong className="font-semibold text-accent-strong">Still unknown.</strong>
          </motion.p>
        </div>
        <ol aria-hidden="true" className="flex flex-col gap-2">
          {ROUTINE.map((r, i) => (
            <RoutineCard key={r.step} item={r} index={i} progress={scrollYProgress} animate={!reduce} />
          ))}
        </ol>
      </figure>
    </div>
  )
}
