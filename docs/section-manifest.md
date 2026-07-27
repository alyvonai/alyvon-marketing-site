# Section manifest — design system foundation build

Scope of this PR (`feat/design-system-foundation`): Ticket 0b (repo audit),
Ticket 1 (component library), Ticket 22 (utility routes). Tickets 2 through 21,
23, 24, and 25 (global shell, all 21 content pages, GHL, PostHog wiring, QA
pass, final PR assembly) are follow-on work and are NOT built in this PR --
see `docs/0b-repo-audit.md` for why the scope is cut here.

Foundation already committed (do not rebuild):
- `tailwind.config.ts`, `app/globals.css` — full token set, corrected per
  Ticket 0c's own "Verification & Flags" section
- `lib/utils.ts` — shared `cn()` helper
- `components/ui/button.tsx`, `card.tsx`, `input.tsx` — base primitives,
  Default-state only where states apply
- `app/layout.tsx`, `app/page.tsx` — root shell + placeholder route, fonts
  wired (Archivo + JetBrains Mono via `next/font/google`)
- `docs/design-tokens-reference.md` — condensed token/rule reference every
  build unit should read instead of the full Ticket 0c memo

No upstream copy document needed extraction for this PR: the source material
is Brand's Ticket 0c spec (supplied inline to Engineering, condensed into
`docs/design-tokens-reference.md` above) plus the written build spec. There is
no long-form Content/Creative document being split into per-page chunks here.

## Unit 1 — Component states, treatments, and layout rules

Builds out the state and treatment layer of the component library on top of
the tokens already committed. Read `docs/design-tokens-reference.md` first.

Covers (Ticket 0c Sections 1, 2, 3, 4, 5, 6, 7, 8):
- Color tokens: confirm usage against the corrected table (already wired;
  this unit should use them, not redefine them)
- Typography: confirm Archivo/JetBrains Mono usage in every new component
  (already configured in `tailwind.config.ts` / `app/layout.tsx`)
- Empty, error, and loading states: build `components/ui/empty-state.tsx`,
  `components/ui/error-panel.tsx` (inline + page-level), `components/ui/skeleton.tsx`
  (using the existing `.skeleton-shimmer` CSS class), and a `components/ui/spinner.tsx`
- Form field states: build `components/ui/form-field.tsx` implementing all
  six states (default, focus, filled, error, disabled, success) as a
  composable wrapper around `components/ui/input.tsx`. Use
  `border-input` (`#7C838C`, already corrected), `border-focus`, `error-ink`,
  `bg-disabled`, `success-ink` tokens exactly as wired in globals.css --
  do not reintroduce the spec's superseded literal hex values.
- Image treatment and iconography: build `components/ui/icon-wrapper.tsx`
  (enforces 24px box, 1.5px stroke via lucide-react `strokeWidth`, aria-label
  requirement for icon-only controls) and an `components/ui/media-frame.tsx`
  for the 16:9/1:1/4:3 aspect-ratio + `rounded-card` + `border-subtle`
  photography treatment
- List, table, blockquote, inline code: build `components/ui/typography.tsx`
  exporting `List`, `OrderedList`, `DataTable`, `Blockquote`, `InlineCode`,
  `CodeBlock` per Ticket 0c Section 6. Note: Section 6's blockquote rule
  itself is unchanged from the approved version (Display M, no italic) --
  its old parenthetical referenced Fraunces by name and is stale; write the
  component comment referencing Archivo instead, per the flag in Ticket 0c's
  "Verification & Flags" item 4. Do not otherwise alter the approved rule.
- Breakpoint behavior: verify every component above renders cleanly 360px to
  2560px, matching Section 7's per-breakpoint behavior table
- Motion and transition rules: use the existing `duration-*`/`ease-*`
  Tailwind tokens and the existing reduced-motion handling in globals.css,
  do not hardcode new durations

Also address, as code comments plus a short note appended to
`docs/design-tokens-reference.md`:
- `border-input` contrast flag: already fixed at the token level (globals.css)
  -- this unit's job is to make sure no new component reintroduces the old
  `#A9B0B9` value literally instead of the `border-input` Tailwind class
- `text-tertiary` contrast flag: apply the usage restriction (>=14px bold or
  >=18px normal) to every place this unit uses it, e.g. empty-state captions
  and table metadata columns

Deliver as code in `components/ui/*` plus a short `docs/unit-1-notes.md`
summarizing any judgment calls.

## Unit 2 — Spec text corrections + utility routes (Ticket 22)

Two unrelated but small pieces of work bundled together because both are
short.

**A. Spec text corrections** (documentation only, no app code): create
`docs/ticket-0c-corrections-applied.md` that cleanly restates the three
items Brand's "Verification & Flags" section left as open text edits rather
than silent changes:
1. Section 4's form field table: confirm the hex values now match Section 1
   (this is already true in `docs/design-tokens-reference.md` and
   `app/globals.css` -- just cross-reference, don't reintroduce old values)
2. Section 6's blockquote footnote: the approved rule is unchanged (Display
   M, no italic, size/color for emphasis) but its rationale used to name
   Fraunces, which is retired. Write the corrected parenthetical: "Archivo at
   Display M weight already carries enough presence without italic."
3. Section 5 border-subtle's contrast note: restate plainly that
   `border-subtle` (1.42:1) is intentionally decorative, needs no non-text
   contrast compliance, and nothing essential depends on it being visible
   unaided. No code or token change, just document it so the next person
   doesn't "fix" it into a compliance failure it was never meant to solve.

**B. Utility routes (Ticket 22)**, in code:
- `app/not-found.tsx` — 404 page. bg-canvas, Display M headline, one
  supporting sentence, link home. Do not invent a "most likely intended page"
  link since routing isn't built yet in this PR -- link home only, and note
  in a code comment that a smarter suggestion can be added once real pages
  exist.
- `app/sitemap.ts` — Next.js sitemap route. Since only `/` exists as a real
  page in this PR, include just `/` for now with a code comment explaining
  the rest of the 21-page list from spec-2-marketing-site.md section 4 should
  be added as those pages are built. Do not fabricate entries for pages that
  don't exist yet.
- `app/robots.ts` — allow all, point to the sitemap
- `lib/metadata.ts` — a small `buildMetadata()` helper other page tickets
  will import for consistent Open Graph/meta tags (title template, default OG
  image path, twitter card type). No per-page metadata yet since no other
  pages exist in this PR.

Deliver as code plus the `docs/ticket-0c-corrections-applied.md` doc above.
