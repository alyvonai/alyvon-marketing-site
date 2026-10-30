import * as React from "react"
import Link from "next/link"
import type { Block } from "@/lib/blog/types"
import { CopyTemplateButton } from "@/components/blog/copy-template-button"

// Renders a post's typed blocks. Inline syntax is deliberately tiny: **bold** and
// [label](/path). Straight quotes are typeset as curly quotes at render time.

export function smartQuotes(t: string): string {
  return t
    .replace(/(\w)'(\w)/g, "$1’$2")
    .replace(/(^|[\s(])"/g, "$1“")
    .replace(/"/g, "”")
}

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g

export function Inline({ text }: { text: string }) {
  const out: React.ReactNode[] = []
  const src = smartQuotes(text)
  let last = 0
  for (const m of src.matchAll(INLINE)) {
    if (m.index > last) out.push(src.slice(last, m.index))
    if (m[1]) {
      out.push(
        <strong key={m.index} className="font-semibold text-text-primary">
          {m[1]}
        </strong>
      )
    } else {
      const href = m[3]
      const cls = "font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
      out.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href} className={cls}>
            {m[2]}
          </Link>
        ) : (
          <a key={m.index} href={href} className={cls} rel="noopener" target="_blank">
            {m[2]}
          </a>
        )
      )
    }
    last = m.index + m[0].length
  }
  if (last < src.length) out.push(src.slice(last))
  return <>{out}</>
}

function templateText(b: Extract<Block, { type: "template" }>): string {
  return [b.title, "", ...b.sections.flatMap((s) => [s.label, ...s.lines.map((l) => `  ${l}`), ""])].join("\n")
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6 text-body-l text-text-secondary">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            )
          case "h2":
            return (
              <h2
                key={i}
                id={b.id}
                className="mt-6 scroll-mt-24 text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary sm:text-[32px]"
              >
                {smartQuotes(b.text)}
              </h2>
            )
          case "h3":
            return (
              <h3 key={i} className="mt-2 text-[20px] font-semibold text-text-primary">
                {smartQuotes(b.text)}
              </h3>
            )
          case "ul":
          case "ol": {
            const List = b.type === "ul" ? "ul" : "ol"
            return (
              <List key={i} className={b.type === "ul" ? "flex list-disc flex-col gap-2 pl-6" : "flex list-decimal flex-col gap-2 pl-6"}>
                {b.items.map((it) => (
                  <li key={it} className="pl-1">
                    <Inline text={it} />
                  </li>
                ))}
              </List>
            )
          }
          case "definition":
            return (
              <div key={i} className="rounded-[14px] border-l-4 border-accent bg-accent-wash px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-strong">Definition</p>
                <p className="mt-1 text-body-l text-text-primary">
                  <dfn className="font-semibold not-italic">{b.term}</dfn>: <Inline text={b.text.replace(new RegExp(`^${b.term} (is|means) `, "i"), "")} />
                </p>
              </div>
            )
          case "table":
            return (
              <figure key={i} className="flex flex-col gap-2">
                <div className="overflow-x-auto rounded-[12px] border border-border-subtle">
                  <table className="w-full min-w-[560px] border-collapse text-left text-body-s">
                    {b.caption ? <caption className="sr-only">{b.caption}</caption> : null}
                    <thead className="bg-surface text-text-primary">
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j} scope="col" className="px-4 py-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {b.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((c, k) =>
                            k === 0 ? (
                              <th key={k} scope="row" className="px-4 py-3 align-top font-medium text-text-primary">
                                <Inline text={c} />
                              </th>
                            ) : (
                              <td key={k} className="px-4 py-3 align-top">
                                <Inline text={c} />
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption ? <figcaption className="text-body-s text-text-secondary">{smartQuotes(b.caption)}</figcaption> : null}
              </figure>
            )
          case "callout":
            return (
              <aside key={i} className="rounded-[14px] border border-border-subtle bg-surface px-5 py-4">
                <p className="text-body font-semibold text-text-primary">{smartQuotes(b.title)}</p>
                <p className="mt-1 text-body">
                  <Inline text={b.text} />
                </p>
              </aside>
            )
          case "flow":
            return (
              <figure key={i} className="flex flex-col gap-2">
                <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {b.steps.map((s, n) => (
                    <li key={s.label} className="flex flex-col gap-1 rounded-[12px] border border-border-subtle bg-surface p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-strong">
                        Step {n + 1}
                      </p>
                      <p className="text-body font-semibold text-text-primary">{smartQuotes(s.label)}</p>
                      <p className="text-body-s text-text-secondary">{smartQuotes(s.note)}</p>
                    </li>
                  ))}
                </ol>
                <figcaption className="text-body-s text-text-secondary">{smartQuotes(b.caption)}</figcaption>
              </figure>
            )
          case "template":
            return (
              <section key={i} aria-label={b.title} className="overflow-hidden rounded-[14px] border border-border-subtle">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-inverse px-5 py-3">
                  <p className="text-body font-semibold text-text-on-inverse">{smartQuotes(b.title)}</p>
                  <CopyTemplateButton text={templateText(b)} />
                </div>
                <dl className="divide-y divide-border-subtle bg-canvas">
                  {b.sections.map((s) => (
                    <div key={s.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
                      <dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent-strong">{s.label}</dt>
                      <dd className="flex flex-col gap-1 text-body text-text-primary">
                        {s.lines.map((l) => (
                          <span key={l}>{smartQuotes(l)}</span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
                {b.download ? (
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle bg-surface px-5 py-3">
                    <p className="text-body-s text-text-secondary">Want it as an editable Word document?</p>
                    <Link
                      href={`/templates/${b.download}`}
                      className="inline-flex items-center gap-1.5 text-body-s font-semibold text-accent-strong underline underline-offset-4 hover:text-accent"
                    >
                      Download the .docx <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ) : null}
              </section>
            )
        }
      })}
    </div>
  )
}
