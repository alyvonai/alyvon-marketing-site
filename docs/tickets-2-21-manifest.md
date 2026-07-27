# Tickets 2-21 build manifest — content pages

This document scopes the follow-on work that `docs/section-manifest.md` (Ticket
0b/1/22 PR) explicitly deferred: the 18 real content pages, built as parallel,
independently-committing section runs against this same PR/branch
(`feat/design-system-foundation`).

Read this file, plus `docs/design-tokens-reference.md` and the shared
components below, before writing any page. Do not invent copy — every page's
source paragraph tells you which registered Library deliverable (by id) has
the real, operator-reviewed copy to use verbatim (light formatting/markup
only). If a section of a page isn't covered by the cited deliverable, leave a
`{/* TODO: content gap, see docs/tickets-2-21-manifest.md */}` comment rather
than inventing marketing claims.

## Shared conventions already committed (do not rebuild)

- `lib/nav-data.ts` — `PRIMARY_NAV`, `DEPARTMENTS`, `MARKETING_HUB_FEATURES`,
  `FOOTER_LINK_GROUPS`, `SITE_ROUTES`. Import hrefs/labels from here; don't
  hardcode a department or feature name/slug in a page.
- `components/site-header.tsx` / `components/site-footer.tsx` — rendered once
  from `app/layout.tsx`. **Do not render a header or footer inside any page
  file.**
- `components/marketing/container.tsx`, `section.tsx`, `hero.tsx`,
  `cta-band.tsx` — compose every page from these. `Section` takes `tone`
  ("canvas" | "surface" | "inverse") and `spacing` ("sm" | "lg"); alternate
  `canvas`/`surface` tone between stacked sections for visual rhythm instead
  of introducing new background colors.
- `components/ui/*` — `Button` (renders a native `<button>`, no `asChild`;
  for a link styled as a button use `buttonVariants({ variant, size })` from
  `components/ui/button.tsx` directly on a `next/link` `<Link>`, e.g.
  `<Link href="/pricing" className={cn(buttonVariants({ size: "lg" }))}>`),
  `Card`/`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`,
  `List`/`OrderedList`/`DataTable`/`Blockquote`/`InlineCode`/`CodeBlock`
  (`components/ui/typography.tsx`), `IconWrapper` (`components/ui/icon-wrapper.tsx`
  — required `aria-label` for icon-only meaning; render a `lucide-react` icon
  directly, uncwrapped, when it's purely decorative beside a visible label),
  `Input`, `FormField`, `Skeleton`, `Spinner`, `EmptyState`, `ErrorPanel`,
  `MediaFrame`.
- `lib/metadata.ts` — every page exports
  `export const metadata = buildMetadata({ title, description, path })`
  instead of hand-rolling a `Metadata` object.
- `app/sitemap.ts` — already maps `SITE_ROUTES`. When you ship a page whose
  route isn't yet in `lib/nav-data.ts` `SITE_ROUTES` (it already lists all 18),
  double check the entry rather than adding a second one.

## Design-token / visual conventions (recap — full detail in docs/design-tokens-reference.md)

- Cool/white system: Archivo (display + body) + JetBrains Mono (labels,
  eyebrows, numerals). **Fraunces and Inter Tight are retired and must not
  appear anywhere in new page code, copy comments, or generated OG text.**
  Colors: `bg-canvas` #fff, `bg-inverse` #0b0d11, `accent` #de4b12,
  `accent-strong` #b33a0b (use for body-copy links/small labels — passes
  normal-text AA; plain `accent` is large-text/non-text only).
- Only semantic Tailwind classes (`bg-canvas`, `text-text-primary`,
  `border-border-subtle`, etc.) — never a literal hex value in a page file.
- `rounded-card` (12px) on every card **and** every marketing image/media
  frame, per Ticket 0c Section 5.
- `text-text-tertiary` is usage-restricted to ≥14px-bold or ≥18px-normal
  contexts only (WCAG AA normal-text contrast gap otherwise) — default to
  `text-text-secondary` for anything smaller, including any 12px label text.
- Motion: `transition-colors duration-micro ease-out-standard` for hover/focus
  states; no hover scale-transforms. `.hero-entrance` (in `globals.css`) is
  available for a hero's one-time fade/rise-in and already respects
  `prefers-reduced-motion`.
- Focus state is never color-only — rely on the global `:focus-visible`
  outline (globals.css) and the `focus-visible:ring-2 ring-accent
  ring-offset-2` pattern already in `Button`/`Input`; don't override it.

## Scoping judgment calls (carried forward from Content's copy)

- **`/workforce/departments` is not a separate route.** `docs/0b-repo-audit.md`'s
  original routing plan listed a standalone department-index page, but
  Content's final Ticket 0h copy treats `/workforce` itself as the combined
  pillar + department-index page (hero, "what a department is," the 5-department
  table, and an honest reference to the other 11 departments as "built only on
  demand" — no invented names/pages for those 11). Build `/workforce` as that
  combined page; do not create `app/workforce/departments/page.tsx`.
- Department pages stay **vertical-neutral** per spec — don't invent an
  industry focus a department page doesn't already state.
- `/privacy` and `/terms` copy (Ticket 0k) is explicitly flagged **NOT FINAL,
  pending lawyer review**, including a known Orlando/Windermere address
  conflict. Ship the copy as drafted; do not silently resolve the address
  conflict yourself. Add an HTML comment at the top of each page noting the
  legal-review flag so it isn't lost.

## Copy sources (Library deliverable ids — pull real copy, do not invent)

| Pages | Deliverable id | Notes |
|---|---|---|
| Home (`/`), Pricing (`/pricing`), Security (`/security`), Login (`/login`) | `4ccea028-0024-42f6-92f2-92db2276cd9d` | Ticket 0g, final post-consistency-pass version. Login is a two-choice router (existing customer vs. new). Pricing includes the full four-tier table + overage + FAQ. |
| Workforce pillar (`/workforce`), Marketing Hub pillar (`/marketing-hub`), Analytics pillar (`/analytics`) | `e0adc23e-9115-4d27-ab08-b1cd1896e9b2` | Ticket 0h, final version (created 03:51:20, registered alongside the same consistency-pass batch as 0g/0i — use this one, not the earlier `cc857c3b…` draft). |
| 5 department pages: Content, Research, Brand, Sales Development, Marketing Ops (`/workforce/content`, `/workforce/research`, `/workforce/brand`, `/workforce/sales-development`, `/workforce/marketing-ops`) | `8d4b0d0b-d24b-4e6b-a8f9-e55ea2b7fc34` | Ticket 0i, final. "Every department is on every plan" framing. |
| CRM, Automations, AI Employee, Custom AI detail pages (`/marketing-hub/crm`, `/marketing-hub/automations`, `/marketing-hub/ai-employee`, `/analytics/custom-ai`) | `21aa1393-4494-42ec-b221-c01ada1bfcea` | Ticket 0j, only one version. Mined from the real service.alyvon.com audit. |
| Privacy, Terms (`/privacy`, `/terms`) | `8640c2e0-8077-477e-abaa-10e5ccbabb7d` | Ticket 0k, only one version. **NOT FINAL — see judgment-call note above.** |

Pull each deliverable via `mcp__org_knowledge__read_org_knowledge` (or the
equivalent org-knowledge read tool available to your run) before writing the
page — read the full body, not just the summary shown above.

## Dispatch units (7 parallel `create_section_run` units, all against this branch/PR)

| Unit | Pages | `allowed_paths` |
|---|---|---|
| 1 | Home, Pricing | `app/page.tsx`, `app/pricing/` |
| 2 | Security, Login | `app/security/`, `app/login/` |
| 3 | Workforce pillar, Content dept, Research dept | `app/workforce/page.tsx`, `app/workforce/content/`, `app/workforce/research/` |
| 4 | Brand dept, Sales Development dept, Marketing Ops dept | `app/workforce/brand/`, `app/workforce/sales-development/`, `app/workforce/marketing-ops/` |
| 5 | Marketing Hub pillar, CRM, Automations | `app/marketing-hub/page.tsx`, `app/marketing-hub/crm/`, `app/marketing-hub/automations/` |
| 6 | AI Employee, Analytics pillar, Custom AI | `app/marketing-hub/ai-employee/`, `app/analytics/page.tsx`, `app/analytics/custom-ai/` |
| 7 | Privacy, Terms | `app/privacy/`, `app/terms/` |

Each unit must:
1. Read this manifest and `docs/design-tokens-reference.md` first.
2. Pull the real copy from the deliverable id(s) listed above for its pages —
   never invent marketing claims, pricing figures, or proof points.
3. Build each page from `Container`/`Section`/`Hero`/`CtaBand` +
   `components/ui/*`, with `buildMetadata()` for its `metadata` export.
4. Commit and push as each page completes, not batched at the end of the unit.

## Known open item

This session's engineering brand-context defaults to a warm/cream palette
(Fraunces + Inter Tight, `#F5F0E8` background) that predates and conflicts
with the cool/white system (Archivo + JetBrains Mono, `#DE4B12` accent,
`#0B0D11` ink) already committed to this branch and documented in
`docs/0b-repo-audit.md` / `docs/design-tokens-reference.md` as the operator-
supplied, corrected Ticket 0c spec. All Tickets 2-21 work should continue
against the already-committed cool/white system — flag the discrepancy to
Shawn for a final sign-off, but do not change tokens mid-build.
