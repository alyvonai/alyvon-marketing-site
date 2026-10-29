// Builds the gated .docx downloads in public/downloads/ from the blog post content, so the
// editable file and the open article never drift. No dependencies: writes a minimal
// WordprocessingML package into a stored (uncompressed) zip.
//
// Run after editing a template in lib/blog/posts: `npm run build:templates`
// (Node 22.18+ / 23.6+, which strips TypeScript types on import.)

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const load = async (slug) => (await import(join(ROOT, "lib/blog/posts", `${slug}.ts`))).post
const { TEMPLATES } = await import(join(ROOT, "lib/templates.ts"))
const summary = (slug) => TEMPLATES.find((t) => t.slug === slug).summary

// ---- content ------------------------------------------------------------------------------

const strip = (t) => t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")

function fromTemplateBlock(post, slug) {
  const block = post.body.find((b) => b.type === "template" && b.download === slug)
  if (!block) throw new Error(`No template block with download "${slug}" in ${post.slug}`)
  return {
    title: block.title,
    intro: summary(slug),
    sections: block.sections.map((s) => ({ heading: s.label, lines: s.lines })),
    source: `https://www.alyvon.com/insights/${post.slug}`,
  }
}

function readinessChecklist(post) {
  const tables = post.body.filter((b) => b.type === "table")
  const lists = post.body.filter((b) => b.type === "ol")
  const [areas, stages] = tables
  const [dataChecks, questions] = lists
  return {
    title: "AI readiness assessment checklist",
    intro: summary("ai-readiness-checklist"),
    sections: [
      {
        heading: "1. The five readiness areas",
        lines: areas.rows.map((r) => `☐ ${r[0]}: ${r[1]} Evidence that counts: ${r[2]}. Red flag: ${r[3]}.`),
      },
      {
        heading: "2. Which stage is this use case at?",
        lines: stages.rows.map((r) => `☐ ${r[0]}: ${r[1]}. Next: ${r[2]}.`),
      },
      { heading: "3. Data readiness checks", lines: dataChecks.items.map((i) => `☐ ${strip(i)}`) },
      { heading: "4. Stakeholder interview questions", lines: questions.items.map((q, n) => `${n + 1}. ${strip(q)}`) },
      {
        heading: "5. Outputs to leave with",
        lines: post.body.find((b) => b.type === "ul" && b.items.some((i) => i.includes("baseline and a target"))).items.map((i) => `☐ ${strip(i)}`),
      },
    ],
    source: `https://www.alyvon.com/insights/${post.slug}`,
  }
}

// ---- docx ---------------------------------------------------------------------------------

const xmlEsc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const run = (text, { bold = false, size = 22, color } = {}) =>
  `<w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/>${bold ? "<w:b/>" : ""}${color ? `<w:color w:val="${color}"/>` : ""}<w:sz w:val="${size}"/></w:rPr><w:t xml:space="preserve">${xmlEsc(text)}</w:t></w:r>`
const para = (runs, { before = 0, after = 120 } = {}) =>
  `<w:p><w:pPr><w:spacing w:before="${before}" w:after="${after}"/></w:pPr>${runs}</w:p>`

function documentXml(doc) {
  const body = [
    para(run("ALYVON", { bold: true, size: 18, color: "DE4B12" }), { after: 60 }),
    para(run(doc.title, { bold: true, size: 40 }), { after: 200 }),
    para(run(doc.intro, { size: 22, color: "585F6A" }), { after: 280 }),
    ...doc.sections.flatMap((s) => [
      para(run(s.heading, { bold: true, size: 26 }), { before: 240, after: 100 }),
      ...s.lines.map((l) => para(run(l))),
    ]),
    para(run(`The guide behind this template: ${doc.source}`, { size: 18, color: "585F6A" }), { before: 400 }),
  ].join("")
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1200" w:right="1200" w:bottom="1200" w:left="1200" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>`
}

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`
const RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`
const core = (title) => `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>${xmlEsc(title)}</dc:title><dc:creator>Alyvon</dc:creator></cp:coreProperties>`

// ---- zip (stored) -------------------------------------------------------------------------

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function zip(files) {
  const locals = []
  const centrals = []
  let offset = 0
  for (const [name, text] of files) {
    const data = Buffer.from(text, "utf8")
    const nameBuf = Buffer.from(name, "utf8")
    const crc = crc32(data)
    const local = Buffer.alloc(30)
    local.writeUInt32LE(0x04034b50, 0)
    local.writeUInt16LE(20, 4)
    local.writeUInt16LE(0x0800, 6) // UTF-8 names
    local.writeUInt16LE(0, 8) // stored
    local.writeUInt32LE(0, 10) // time/date
    local.writeUInt32LE(crc, 14)
    local.writeUInt32LE(data.length, 18)
    local.writeUInt32LE(data.length, 22)
    local.writeUInt16LE(nameBuf.length, 26)
    local.writeUInt16LE(0, 28)
    const central = Buffer.alloc(46)
    central.writeUInt32LE(0x02014b50, 0)
    central.writeUInt16LE(20, 4)
    central.writeUInt16LE(20, 6)
    central.writeUInt16LE(0x0800, 8)
    central.writeUInt16LE(0, 10)
    central.writeUInt32LE(0, 12)
    central.writeUInt32LE(crc, 16)
    central.writeUInt32LE(data.length, 20)
    central.writeUInt32LE(data.length, 24)
    central.writeUInt16LE(nameBuf.length, 28)
    central.writeUInt32LE(offset, 42)
    locals.push(local, nameBuf, data)
    centrals.push(central, nameBuf)
    offset += local.length + nameBuf.length + data.length
  }
  const cd = Buffer.concat(centrals)
  const end = Buffer.alloc(22)
  end.writeUInt32LE(0x06054b50, 0)
  end.writeUInt16LE(files.length, 8)
  end.writeUInt16LE(files.length, 10)
  end.writeUInt32LE(cd.length, 12)
  end.writeUInt32LE(offset, 16)
  return Buffer.concat([...locals, cd, end])
}

// ---- build --------------------------------------------------------------------------------

const DOCS = [
  ["alyvon-ai-project-scope-template.docx", fromTemplateBlock(await load("how-to-scope-an-ai-project"), "ai-project-scope-template")],
  ["alyvon-ai-statement-of-work-template.docx", fromTemplateBlock(await load("statement-of-work-template-ai"), "statement-of-work-template")],
  ["alyvon-ai-change-order-template.docx", fromTemplateBlock(await load("change-order-template"), "change-order-template")],
  ["alyvon-ai-proof-of-concept-template.docx", fromTemplateBlock(await load("why-ai-pilots-fail"), "proof-of-concept-template")],
  ["alyvon-ai-readiness-assessment-checklist.docx", readinessChecklist(await load("ai-readiness-assessment"))],
]

const outDir = join(ROOT, "public/downloads")
mkdirSync(outDir, { recursive: true })
for (const [file, doc] of DOCS) {
  const buf = zip([
    ["[Content_Types].xml", CONTENT_TYPES],
    ["_rels/.rels", RELS],
    ["docProps/core.xml", core(doc.title)],
    ["word/document.xml", documentXml(doc)],
  ])
  writeFileSync(join(outDir, file), buf)
  console.log(`wrote public/downloads/${file} (${buf.length} bytes)`)
}
