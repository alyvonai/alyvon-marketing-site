"use client"

import { useCallback, useRef, useState } from "react"
import { ALYVON_TASK_POOL, type SpecialistKey } from "@/lib/kanban-demo-data"

// Self-contained replica of the live site's kanban demo store (originally zustand). Same
// time-based simulation, ported to a local hook so the marketing site takes on no store
// dependency: progress cards ship (or ask a question first) after `duration`; needs-you
// cards ship 4s later; shipped cards retire after `retireSec`; the board refills so three
// cards are always in progress.

export interface Task {
  id: number
  spec: SpecialistKey
  title: string
  duration: number
  needsYou: boolean
  question?: string
  column: "progress" | "needsyou" | "shipped"
  startedAt: number
  needsYouAt?: number
  shippedAt?: number
}

export function useKanbanDemo() {
  const [tasks, setTasks] = useState<Record<number, Task>>({})
  const nextId = useRef(1)
  const nextTaskIdx = useRef(0)
  const seeded = useRef(false)

  const seed = useCallback(() => {
    if (seeded.current) return
    seeded.current = true

    const now = Date.now()
    const initial: Record<number, Task> = {}
    let id = nextId.current
    let idx = nextTaskIdx.current

    const add = (
      template: TaskTemplate,
      colOverride?: Task["column"],
      extra?: Partial<Task>,
    ) => {
      initial[id] = {
        id,
        spec: template.spec,
        title: template.title,
        duration: template.duration,
        needsYou: template.needsYou,
        question: template.question,
        column: colOverride ?? "progress",
        startedAt: now - 3000,
        ...extra,
      }
      id++
      idx = (idx + 1) % ALYVON_TASK_POOL.length
    }

    add(ALYVON_TASK_POOL[idx])
    add(ALYVON_TASK_POOL[(idx + 1) % ALYVON_TASK_POOL.length])
    add(ALYVON_TASK_POOL[(idx + 2) % ALYVON_TASK_POOL.length], "shipped", {
      startedAt: now - 20000,
      shippedAt: now - 5000,
    })

    nextId.current = id
    nextTaskIdx.current = idx
    setTasks(initial)
  }, [])

  const tick = useCallback((now: number, retireSec = 18) => {
    setTasks((prev) => {
      const next = { ...prev }
      let changed = false

      for (const task of Object.values(next)) {
        if (task.column === "progress") {
          if ((now - task.startedAt) / 1000 >= task.duration) {
            changed = true
            next[task.id] = task.needsYou
              ? { ...task, column: "needsyou", needsYouAt: now }
              : { ...task, column: "shipped", shippedAt: now }
          }
        } else if (task.column === "needsyou" && task.needsYouAt != null) {
          if ((now - task.needsYouAt) / 1000 >= 4) {
            changed = true
            next[task.id] = { ...task, column: "shipped", shippedAt: now }
          }
        } else if (task.column === "shipped" && task.shippedAt != null) {
          if ((now - task.shippedAt) / 1000 >= retireSec) {
            changed = true
            delete next[task.id]
          }
        }
      }

      const inProgress = Object.values(next).filter((t) => t.column === "progress").length
      if (inProgress < 3) {
        const template = ALYVON_TASK_POOL[nextTaskIdx.current]
        next[nextId.current] = {
          id: nextId.current,
          spec: template.spec,
          title: template.title,
          duration: template.duration,
          needsYou: template.needsYou,
          question: template.question,
          column: "progress",
          startedAt: now,
        }
        nextId.current += 1
        nextTaskIdx.current = (nextTaskIdx.current + 1) % ALYVON_TASK_POOL.length
        changed = true
      }

      return changed ? next : prev
    })
  }, [])

  return { tasks, seed, tick }
}

type TaskTemplate = (typeof ALYVON_TASK_POOL)[number]
