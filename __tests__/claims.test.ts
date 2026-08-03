import { readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"
import { WORKFORCE_GROUPS, ALL_DEPARTMENTS, WORKFORCE_STATS } from "@/lib/site"

// This suite is the guardrail the master finalization spec asked for (M1/M5/M6). The
// 102-vs-117 divergence that reached production came from hand-typed count literals drifting
// from the data. These tests fail the build if a count/price/title/CTA is hardcoded again.

describe("WORKFORCE_STATS invariants (counts are computed, not typed)", () => {
  it("specialists === sum of per-group specialist counts", () => {
    const sum = WORKFORCE_GROUPS.reduce((n, g) => n + g.specialists, 0)
    expect(WORKFORCE_STATS.specialists).toBe(sum)
  })

  it("departments === flattened department count", () => {
    expect(WORKFORCE_STATS.departments).toBe(ALL_DEPARTMENTS.length)
  })

  it("groups === number of groups", () => {
    expect(WORKFORCE_STATS.groups).toBe(WORKFORCE_GROUPS.length)
  })

  it("holds the canonical values — change these only by changing the data", () => {
    expect(WORKFORCE_STATS).toEqual({ departments: 16, specialists: 102, groups: 6 })
  })
})

// --- Source-scan guards: read every app/ + components/ .ts(x) file (except tests) ---
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next") continue
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(entry) && !entry.endsWith(".test.ts")) out.push(p)
  }
  return out
}

const SOURCE = ["app", "components"].flatMap((d) => walk(join(ROOT, d)))
const rel = (f: string) => f.slice(ROOT.length + 1)
const offenders = (re: RegExp) =>
  SOURCE.filter((f) => re.test(readFileSync(f, "utf8"))).map(rel)

describe("no drifting claim literals in app/ or components/", () => {
  it("never hardcodes a stale specialist count (117 / 118)", () => {
    expect(offenders(/\b11[78]\b/)).toEqual([])
  })

  it("never hardcodes the count prose — it must come from WORKFORCE_STATS", () => {
    expect(offenders(/102 specialists|16 departments|6 groups/)).toEqual([])
  })

  it("never hardcodes a Workforce plan price — prices live in lib/pricing.ts", () => {
    expect(offenders(/\$299|\$899|\$2,?400|\$5,?000/)).toEqual([])
  })
})

describe("titles do not double the brand (layout template adds ' | Alyvon')", () => {
  it("no page metadata title carries a '- Alyvon' / '| Alyvon' brand suffix", () => {
    // Matches the doubling defect only — content headings like "Talk to Alyvon" are fine.
    const bad = offenders(/title:\s*"[^"]*(?:-|\|)\s*Alyvon/)
    expect(bad).toEqual([])
  })
})

describe("trial CTA canon", () => {
  it("no page hardcodes the off-canon 'Start your free trial' label (use CTA.workforce)", () => {
    expect(offenders(/Start your free trial/)).toEqual([])
  })
})
