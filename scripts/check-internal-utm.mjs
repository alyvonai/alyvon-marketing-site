// Fails if any INTERNAL link href contains a utm_ param (spec §11). External links
// (http/mailto) may carry UTMs and are ignored. Field names like "utm_source" in form
// configs are not hrefs and are not matched.
import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, extname } from "node:path"

const ROOTS = ["app", "components", "lib"]
const EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs"])

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".next")) continue
    const p = join(dir, entry)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...walk(p))
    else if (EXT.has(extname(p))) out.push(p)
  }
  return out
}

// Capture href="..." | href='...' | href={"..."} | href={`...`}
const HREF_RE = /href\s*=\s*(?:"([^"]*)"|'([^']*)'|\{\s*[`"']([^`"']*)[`"']\s*\})/g

const violations = []
for (const root of ROOTS) {
  let files = []
  try {
    files = walk(root)
  } catch {
    continue
  }
  for (const file of files) {
    const src = readFileSync(file, "utf8")
    let m
    while ((m = HREF_RE.exec(src))) {
      const href = m[1] ?? m[2] ?? m[3] ?? ""
      const isExternal = /^(https?:|mailto:|tel:)/.test(href)
      if (!isExternal && href.includes("utm_")) {
        violations.push(`${file}: ${href}`)
      }
    }
  }
}

if (violations.length) {
  console.error("Internal links must not contain utm_ (spec §11):")
  for (const v of violations) console.error("  " + v)
  process.exit(1)
}
console.log("check-internal-utm: OK (no internal utm_ links)")
