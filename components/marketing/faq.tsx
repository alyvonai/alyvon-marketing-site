"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FaqItem {
  q: string
  a: string
}

// Accessible FAQ accordion (spec §30: buttons, aria-expanded, keyboard). The matching
// FAQPage JSON-LD is emitted by each page via <JsonLd data={faqSchema(...)} /> so the
// schema lives in one place per page (no duplicate blocks).
export function Faq({
  items,
  heading = "Frequently asked questions",
}: {
  items: FaqItem[]
  heading?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-display-m text-text-primary">{heading}</h2>
      <div className="flex flex-col divide-y divide-border-subtle rounded-card border border-border-subtle">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          const panelId = `faq-panel-${i}`
          const btnId = `faq-btn-${i}`
          return (
            <div key={item.q}>
              <h3 className="m-0">
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-body-l font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-5 shrink-0 text-text-secondary transition-transform duration-micro",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </h3>
              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={btnId} className="px-5 pb-5">
                  <p className="text-body text-text-secondary">{item.a}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
