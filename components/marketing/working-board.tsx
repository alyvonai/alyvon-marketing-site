"use client"

import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/marketing/section"
import { KanbanBoard } from "@/components/marketing/kanban/kanban-board"
import { WorkFeed } from "@/components/marketing/kanban/work-feed"
import { useKanbanDemo } from "@/components/marketing/kanban/use-kanban-demo"

// The moving "working board" on /workforce — a faithful replica of the live alyvon.com
// kanban demo (three columns on desktop, a single growing feed on mobile). Cards appear in
// "In Progress", advance to "Needs You" or straight to "Shipped", and the Shipped column
// grows before old cards retire. Structure and animation match the live site exactly; only
// the colors are re-pointed at the new brand. The simulation is driven by a 1s tick, paused
// when the board scrolls out of view and skipped entirely under prefers-reduced-motion (the
// seeded snapshot stays on screen).
export function WorkingBoard() {
  const { tasks, seed, tick } = useKanbanDemo()
  const boardRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    seed()
  }, [seed])

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const apply = () => setIsDesktop(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (isDesktop === null) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const el = boardRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        pausedRef.current = !entry.isIntersecting
      },
      { threshold: 0.1 },
    )
    if (el) observer.observe(el)

    const retireSec = isDesktop ? 18 : 10
    const id = setInterval(() => {
      if (!pausedRef.current) tick(Date.now(), retireSec)
    }, 1000)

    return () => {
      clearInterval(id)
      observer.disconnect()
    }
  }, [tick, isDesktop])

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

        <div ref={boardRef} style={{ minHeight: 320 }}>
          {isDesktop === false ? <WorkFeed tasks={tasks} /> : <KanbanBoard tasks={tasks} />}
        </div>
      </div>
    </Section>
  )
}
