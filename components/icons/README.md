# Icon system

Source of truth for every icon used on the Alyvon marketing site. Built per
`alyvon-imagery-ui-icon-spec.md`, section 8.

## Library

**Lucide only.** No other icon set is mixed in anywhere on the site. Where a
needed glyph didn't exist under the exact right name in this Lucide version,
the closest semantically-correct Lucide glyph was used (e.g. `chart-column`
for analytics, `house` for home) rather than importing from another set or
hand-drawing a divergent style. If a genuinely new glyph is ever needed that
Lucide has no equivalent for, draw it by hand to the construction rules below
— don't reach for a second icon library.

## Construction rules (non-negotiable)

- 24 × 24 viewBox grid
- 2px stroke width
- Round caps, round joins
- No fills (`fill="none"`)
- `stroke="currentColor"` — color is set by CSS/Tailwind text-color utilities,
  never a hardcoded hex value in the SVG
- No inline `width`/`height` attributes — size is set by the consuming
  component/CSS (e.g. `h-6 w-6`), so the same file works at any size up to the
  32px ceiling below
- Never place a filled icon next to a stroked one
- Never scale a 24px icon past 32px (`h-8 w-8`) without redrawing it at the
  larger optical size — Lucide glyphs get visually thin/off-balance past that
  size at a fixed 2px stroke

## Delivery form

1. **`svg/`** — one `.svg` file per icon, kebab-case filenames, cleaned to the
   construction rules above (no license comments, no width/height/class
   attributes). This is the framework-agnostic source of truth — use these
   directly for anything outside React (Figma import, `<img>`, sprite
   generation, emails, etc).
2. **`index.tsx`** — a typed `<Icon name="..." />` component for the site to
   consume in React. It wraps the equivalent `lucide-react` glyphs (same
   package, same version already pinned in `package.json`) through one
   wrapper that hard-codes `stroke="currentColor"`, `strokeWidth={2}`,
   `strokeLinecap="round"`, `strokeLinejoin="round"`, `fill="none"` — so no
   call site can accidentally drift from spec. `IconName` is a full union
   type of every registered icon, so unknown names fail at compile time.

Both forms are generated from the exact same name → Lucide-source mapping, so
they cannot drift apart. See `gen_icons.js` / `gen_component.js` in this PR's
build history if the set needs to be regenerated later.

## ⚠️ Flagged: stroke-width conflict with the existing site convention

`components/ui/icon-wrapper.tsx` (from Ticket 0c / `docs/design-tokens-reference.md`)
already established a sitewide icon convention using **1.5px** stroke width.
This new icon system uses **2px** stroke width, per the explicit instruction
in `alyvon-imagery-ui-icon-spec.md` section 8. Both conventions are real and
currently coexist in the codebase.

This was a deliberate choice, not an oversight: the section-8 spec is this
card's authoritative brief, and rewriting the legacy `IconWrapper` (used
elsewhere in the site) was out of scope for this card. **This needs an
explicit Engineering decision**: either
(a) migrate the rest of the site from `IconWrapper`/1.5px onto this new
`Icon`/2px component, or
(b) revise this spec down to 1.5px to match the existing convention.
Do not ship both stroke weights side-by-side on the same screen.

## Department icons — provenance and an open gap

The spec asks for "the 16 department icons ... matching what the product
already uses on its Departments screen," pulled from the product rather than
invented. Two real, independent sources of product evidence were checked:

- `lib/nav-data.ts` in this repo — the site's own navigation code — defines
  exactly **5** departments with live routes: Content, Research, Brand, Sales
  Development, Marketing Operations. Its own inline comment explicitly warns
  against inventing names/routes for any other departments.
- The real "Your Team" org-chart product screenshot shows **5** top-level
  director/cluster groups: Strategy & Leadership, Brand & Content, Marketing &
  Sales, Customer & People, Product & Engineering — each with named leads
  underneath, not one icon per individual department.

Neither source contains 16 distinct, individually-iconed departments. The
spec's own section 11 (open questions) already flags this exact number as
unresolved ("the org chart screenshot says fifteen departments plus a Chief
of Staff. The site says sixteen departments... which is right?").

**What's built now:** icons for all 10 departments with real product
evidence — the 5 confirmed/live-routed departments plus the 5 org-chart
cluster groups (clearly namespaced `department-strategy-leadership`,
`department-brand-content`, etc. so they're never confused with the 5
confirmed ones). Nothing was invented for the remaining gap.

**What's still open:** the exact canonical list of 16 (or 15?) departments
the site claims. Once that list is confirmed, extending this set is a
five-minute addition to `ICONS` in `gen_icons.js` / `gen_component.js` — the
naming convention and construction pipeline are already in place.
