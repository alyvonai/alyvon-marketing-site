"use client"

import { AnimatePresence } from "motion/react"
import { TaskCard } from "./task-card"
import type { Task } from "./use-kanban-demo"

// Faithful replica of the live site's three-column kanban. Cards appear in "In Progress",
// move to "Needs You" or straight to "Shipped", and the Shipped column grows — column moves
// handled by AnimatePresence + the card's `layout` animation. Column dots are re-pointed at
// the new brand: orange = active, amber = attention, green = done (matches the check).
const FONT = "var(--font-archivo), Arial, Helvetica, sans-serif"

const COLUMNS = [
  { key: "progress" as const, label: "In Progress", dot: "#DE4B12" },
  { key: "needsyou" as const, label: "Needs You", dot: "#F5A623" },
  { key: "shipped" as const, label: "Shipped", dot: "#4A8B7A" },
]

interface KanbanBoardProps {
  tasks: Record<number, Task>
}

export function KanbanBoard({ tasks }: KanbanBoardProps) {
  const allTasks = Object.values(tasks)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        alignItems: "start",
      }}
    >
      {COLUMNS.map(({ key, label, dot }) => {
        const columnTasks = allTasks.filter((t) => t.column === key)
        return (
          <div key={key}>
            {/* Column header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: dot,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: FONT,
                  fontSize: "12px",
                  color: "var(--text-tertiary)",
                  fontWeight: 500,
                }}
              >
                {columnTasks.length}
              </span>
            </div>

            {/* Cards */}
            <div style={{ minHeight: "120px" }}>
              <AnimatePresence initial={false}>
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )
      })}
    </div>
  )
}
