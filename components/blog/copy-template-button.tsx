"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { track } from "@/lib/analytics"

// Copies an open template as plain text and records it as a "template used" goal.
export function CopyTemplateButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      track("template_copied", { page_path: window.location.pathname })
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked (permissions, insecure context); the template stays readable on the page.
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex h-9 items-center gap-2 rounded-full bg-white/10 px-4 text-body-s font-medium text-white transition-colors duration-micro ease-out-standard hover:bg-white/20"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy template"}</span>
    </button>
  )
}
