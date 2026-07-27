# Design tokens reference (extracted from Ticket 0c, corrected version)

This is the condensed, engineering-facing extraction of Brand's Design System
Extension Spec (Ticket 0c) correction pass. Build units should read THIS file
rather than the full Brand memo. Every literal hex value lives in
`app/globals.css`; everywhere else, use the Tailwind color name (e.g.
`bg-surface`, `text-text-secondary`, `border-border-input`).

Fonts: **Archivo** (display + body) and **JetBrains Mono** (labels, eyebrows,
timestamps, numeric figures). Fraunces and Inter Tight are retired from the
brand permanently. Do not reintroduce them, including in font fallback chains.

## Token table (already wired into globals.css + tailwind.config.ts)

| Tailwind name | CSS var | Hex | Notes |
|---|---|---|---|
| `bg-canvas` | `--bg-canvas` | `#FFFFFF` | page background |
| `bg-surface` | `--bg-surface` | `#F6F7F9` | section bands, card fills |
| `bg-surface-sunken` | `--bg-surface-sunken` | `#ECEFF3` | inset fills: inputs, code blocks |
| `bg-inverse` | `--bg-inverse` | `#0B0D11` | footer, closing CTA, dark callouts |
| `bg-disabled` | `--bg-disabled` | `#EFF1F4` | disabled fields/controls |
| `border-subtle` | `--border-subtle` | `#D4D9E0` | decorative only, never load-bearing |
| `border-input` | `--border-input` | `#7C838C` | **corrected from spec's #A9B0B9** -- see flag below |
| `border-focus` | `--border-focus` | `#DE4B12` | 2px + offset, never color-only |
| `text-text-primary` | `--text-primary` | `#0B0D11` | headings/body |
| `text-text-secondary` | `--text-secondary` | `#585F6A` | supporting copy, captions |
| `text-text-tertiary` | `--text-tertiary` | `#767D88` | **usage-restricted** -- see flag below |
| `text-text-disabled` | `--text-disabled` | `#979EA8` | disabled labels/values |
| `text-text-on-accent` | `--text-on-accent` | `#FFFFFF` | text on accent fills |
| `text-text-on-inverse` | `--text-on-inverse` | `#F6F7F9` | text on bg-inverse |
| `text-accent` / `bg-accent` | `--accent` | `#DE4B12` | AA large-text + non-text only |
| `text-accent-strong` | `--accent-strong` | `#B33A0B` | AA normal-text -- use for body links/small labels |
| `bg-accent-wash` | `--accent-wash` | `#FDEEE7` | tinted backgrounds, active nav, badges |
| `success-ink` / `success-bg` | | `#276241` / `#E7F1EA` | |
| `error-ink` / `error-bg` | | `#B3261E` / `#FBEAE8` | |
| `warning-ink` / `warning-bg` | | `#8A5A00` / `#FBF0DC` | |
| `info-ink` / `info-bg` | | `#2B5C8A` / `#E9F0F6` | |

## Two engineering deviations (already applied in globals.css, do not re-flag)

1. **`border-input`** ships at `#7C838C` (3.35:1 vs white), not the spec's
   literal `#A9B0B9` (2.19:1). The spec's own preamble requires 3:1 for
   essential UI boundaries and its own "Verification & Flags" section
   proposed this exact fix. Applied because it sits on real form field
   boundaries (Section 4).
2. **`text-tertiary`** keeps the spec's literal `#767D88` but is
   usage-restricted: only use it at 14px-bold-and-up or 18px-and-up. Below
   that, use `text-secondary` instead. This applies to any empty-state
   caption, timestamp, or metadata label you build.

## Type scale (Tailwind font-size tokens, already wired)

`display-xl` 56/60 (mobile 36/40), `display-l` 40/44 (mobile 28/34),
`display-m` 28/34 (mobile 22/28), `body-l` 18/28, `body` 16/26, `body-s`
14/22, `label` 12/16 uppercase mono tracked +0.1em, `mono` 13/22. Never go
below 12px anywhere on the site (Ticket 0c floor, restated in spec section 8).

## Motion tokens (already wired as Tailwind `duration-*` / `ease-*`)

`duration-micro` 150ms (hover/focus), `duration-panel` 250ms (accordion/panel),
`duration-page` 300ms (page-level, max). `ease-out-standard` for anything
entering/expanding, `ease-in-standard` for anything exiting/collapsing. No
bounce/spring/elastic easing anywhere. Animate `opacity`/`transform` only,
never layout-triggering properties. Respect `prefers-reduced-motion` (already
handled globally in `globals.css` -- do not re-implement per component,
extend the existing `.skeleton-shimmer` / `.hero-entrance` pattern instead).

## Shared shape token

`rounded-card` (`--radius-card`, 12px) is shared by cards AND images per
Ticket 0c Section 5 -- no exception for hero imagery. Images: 16:9 (hero/
feature), 1:1 (avatars/portraits), 4:3 (department card thumbnails). No drop
shadows on photography, a single `border-border-subtle` 1px outline only.

## Full state/treatment rules live in Ticket 0c Sections 3 to 8

Empty/error/loading states, all six form field states, iconography rules
(1.5px stroke, 24px box, line-only, no filled/emoji), list/table/blockquote/
code styles, breakpoint behavior (360 to 2560px), and the complete motion
rulebook are reproduced in full in the operator-supplied Ticket 0c memo. Build
units implementing these should treat this file's token table as the literal
values to use, and the full memo (passed to you in your dispatch context) as
the behavioral spec to implement against.
