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
-- don't reach for a second icon library.

## Construction rules (non-negotiable)

- 24 x 24 viewBox grid
- 2px stroke width
- Round caps, round joins
- No fills (`fill="none"`)
- `stroke="currentColor"` -- color is set by CSS/Tailwind text-color utilities,
  never a hardcoded hex value in the SVG
- No inline `width`/`height` attributes -- size is set by the consuming
  component/CSS (e.g. `h-6 w-6`), so the same file works at any size up to the
  32px ceiling below
- Never place a filled icon next to a stroked one
- Never scale a 24px icon past 32px (`h-8 w-8`) without redrawing it at the
  larger optical size -- Lucide glyphs get visually thin/off-balance past that
  size at a fixed 2px stroke

## Delivery form

1. **`svg/`** -- one `.svg` file per icon, kebab-case filenames, cleaned to the
   construction rules above (no license comments, no width/height/class
   attributes). This is the framework-agnostic source of truth -- use these
   directly for anything outside React (Figma import, `<img>`, sprite
   generation, emails, etc).
2. **`index.tsx`** -- a typed `<Icon name="..." />` component for the site to
   consume in React. It wraps the equivalent `lucide-react` glyphs (same
   package, same version already pinned in `package.json`) through one
   wrapper that hard-codes `stroke="currentColor"`, `strokeWidth={2}`,
   `strokeLinecap="round"`, `strokeLinejoin="round"`, `fill="none"` -- so no
   call site can accidentally drift from spec. `IconName` is a full union
   type of every registered icon, so unknown names fail at compile time.

Both forms are generated from the exact same name -> Lucide-source mapping, so
they cannot drift apart. See `gen_icons.js` / `gen_component.js` in this PR's
build history if the set needs to be regenerated later.

## Stroke-width conflict -- resolved 2026-07-29

`components/ui/icon-wrapper.tsx` previously used 1.5px stroke width while this
icon system used 2px, per `alyvon-imagery-ui-icon-spec.md` section 8. Engineering
resolved this by migrating `IconWrapper` to 2px (see the ratified icon-system
spec note in that file) so the whole site now shares one construction rule:
**2px stroke, 24x24 viewBox, line-only icons.** Do not reintroduce 1.5px
anywhere -- if you find a 1.5px stroke on an icon, it is a regression, not an
alternate convention.

## Department icons -- canonical 16, confirmed 2026-07-29

The operator confirmed the canonical, exactly-16 department list (matching the
brand positioning "117 specialists across 16 departments" and the app's "Your
Team" section):

Brand; Communications & PR; Content & Editorial; Creative; Customer Success;
Customer Support; Engineering; Executive & Strategy; Finance & Accounting;
Marketing Operations; People & HR; Product Design; Research & Insights;
Revenue Operations; Sales Development; Security & Compliance.

**All 16 now have an icon in the registry**, each a real Lucide glyph at the
24x24 / 2px / round-cap construction rules above, added the same way as the
original 5 confirmed/live-routed icons:

| Department | Icon name | Lucide glyph |
| --- | --- | --- |
| Brand | `department-brand` | Palette |
| Communications & PR | `department-communications-pr` | Megaphone |
| Content & Editorial | `department-content` | FileText |
| Creative | `department-creative` | PenTool |
| Customer Success | `department-customer-success` | HeartHandshake |
| Customer Support | `department-customer-support` | Headphones |
| Engineering | `department-engineering` | Code |
| Executive & Strategy | `department-executive-strategy` | Compass |
| Finance & Accounting | `department-finance-accounting` | CircleDollarSign |
| Marketing Operations | `department-marketing-operations` | SlidersHorizontal |
| People & HR | `department-people-hr` | UsersRound |
| Product Design | `department-product-design` | Layers |
| Research & Insights | `department-research` | Microscope |
| Revenue Operations | `department-revenue-operations` | TrendingUpDown |
| Sales Development | `department-sales-development` | PhoneOutgoing |
| Security & Compliance | `department-security-compliance` | ShieldCheck |

The 5 legacy org-chart cluster icons added earlier (`department-brand-content`,
`department-marketing-sales`, `department-customer-people`,
`department-product-engineering`, `department-strategy-leadership`) represent
the org chart's 5 director/cluster groupings, not individual departments, and
are kept in the registry for backward compatibility -- they are not part of the
16-department count above and should not be confused with it.
