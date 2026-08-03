"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { ALYVON_SPECIALISTS } from "@/lib/kanban-demo-data"
import type { Task } from "./use-kanban-demo"

// Faithful replica of the live site's kanban TaskCard. Structure and animation are
// unchanged; only the design tokens/colors are re-pointed at the new brand.
const FONT = "var(--font-archivo), Arial, Helvetica, sans-serif"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const spec = ALYVON_SPECIALISTS[task.spec]
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (task.column !== "progress") return
    const update = () => {
      const elapsed = (Date.now() - task.startedAt) / 1000
      setProgress(Math.min(100, (elapsed / task.duration) * 100))
    }
    update()
    const id = setInterval(update, 500)
    return () => clearInterval(id)
  }, [task.column, task.startedAt, task.duration])

  const isShipped = task.column === "shipped"
  const isNeedsYou = task.column === "needsyou"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.94 }}
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        background: isShipped ? "rgba(236,239,243,0.6)" : "#fff",
        border: `1px solid ${isNeedsYou ? "#F5A623" : "var(--border-subtle)"}`,
        borderRadius: "12px",
        padding: "14px 16px",
        marginBottom: "8px",
        opacity: isShipped ? 0.65 : 1,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: spec.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontFamily: FONT,
            fontSize: "11px",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {spec.name[0]}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: FONT,
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            {spec.name}
          </p>
          <p
            style={{
              fontFamily: FONT,
              fontSize: "11px",
              color: "var(--text-secondary)",
              marginTop: "1px",
            }}
          >
            {spec.role}
          </p>
        </div>
        {isShipped && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M 2 7 L 6 11 L 12 3"
              stroke="#4A8B7A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {task.column === "progress" && (
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: spec.color,
              flexShrink: 0,
              animation: "workingPulse 1.4s ease-in-out infinite",
            }}
          />
        )}
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: FONT,
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text-primary)",
          lineHeight: 1.45,
          marginBottom: task.column === "progress" ? "10px" : "0",
        }}
      >
        {task.title}
      </p>

      {/* Progress bar */}
      {task.column === "progress" && (
        <div
          style={{
            height: "3px",
            background: "var(--bg-surface-sunken)",
            borderRadius: "99px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: spec.color,
              borderRadius: "99px",
              transition: "width 0.5s linear",
            }}
          />
        </div>
      )}

      {/* Needs-you question bubble */}
      {isNeedsYou && task.question && (
        <div
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            background: "rgba(245,166,35,0.08)",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              fontFamily: FONT,
              fontSize: "12px",
              color: "#B8851A",
              fontStyle: "italic",
            }}
          >
            {task.question}
          </p>
        </div>
      )}
    </motion.div>
  )
}
