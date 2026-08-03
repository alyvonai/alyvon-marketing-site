"use client"

import { AnimatePresence } from "motion/react"
import { TaskCard } from "./task-card"
import type { Task } from "./use-kanban-demo"

// Mobile variant of the working board — a single growing feed of the most recent cards,
// ported from the live site. Same TaskCard, same enter/exit motion.
const MAX_VISIBLE = 4

interface WorkFeedProps {
  tasks: Record<number, Task>
}

export function WorkFeed({ tasks }: WorkFeedProps) {
  const visible = Object.values(tasks)
    .sort((a, b) => b.startedAt - a.startedAt)
    .slice(0, MAX_VISIBLE)

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <AnimatePresence initial={false}>
        {visible.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </div>
  )
}
