# Unit 1 build notes

Judgment calls made while completing the component-states/treatments layer on
top of the foundation already committed (`app/globals.css`, `tailwind.config.ts`,
`components/ui/{button,card,input}.tsx`). Read `docs/design-tokens-reference.md`
first if you have not.

## What was already in the branch vs. built in this pass

An earlier partial pass had already landed six of the eight Unit 1 components:
`empty-state.tsx`, `error-panel.tsx`, `icon-wrapper.tsx`, `media-frame.tsx`,
`skeleton.tsx`, `spinner.tsx`. This pass did not touch or restate those files.
It added the two that were still missing -- `form-field.tsx` and
`typography.tsx` -- plus this notes file.

## form-field.tsx

- **Focus** is not a JS-managed prop. It is the native `:focus-visible` behavior
  already wired on `components/ui/input.tsx` (`border-input` -> 2px
  `border-focus`). `FormField` only needed to make sure its error/success
  border overrides don't fight that ring, so `focus-visible:border-error-ink`
  / `focus-visible:border-success-ink` are set explicitly for those two states.
- **Filled** has no distinct visual treatment in Section 4 beyond the field
  having a value -- there is no separate prop or class for it. That is
  intentional, not a gap; documenting it here so nobody adds a redundant
  "filled" boolean prop later.
- **Error** and **success** are mutually exclusive message states passed as
  strings (`error`/`success` props); error wins if both are somehow set. Each
  swaps the input border color token and renders an inline message with the
  matching icon and ARIA role (`alert` for error, `status` for success), wired
  via `aria-describedby`/`aria-invalid` for screen readers.
- Hint/error/success copy renders at `text-body-s` (14px normal weight), which
  is below the 18px-normal / 14px-bold contrast floor `text-tertiary` requires
  -- so `text-secondary` is used for the hint, never `text-tertiary`.

## typography.tsx

- `DataTable` is a compound component (`DataTable.Head` / `.Body` / `.Row` /
  `.HeaderCell` / `.Cell`) rather than a flat `<table>` export, specifically so
  the `overflow-x-auto` wrapper required to keep tables usable at the 360px
  breakpoint floor ships by default and can't be forgotten at a call site.
- `DataTable.Cell` defaults to `text-secondary`, not `text-tertiary`, for the
  same contrast-floor reason as the form field hint above. A caller may opt a
  specific cell into `text-tertiary` via `className` for metadata columns, but
  only where that column's type is already >=14px-bold or >=18px-normal --
  the component itself doesn't make that judgment call for you.
- `Blockquote`'s visual rule is unchanged from the approved spec (Display M,
  no italic). Only the code comment's rationale changed, from naming Fraunces
  to naming Archivo -- see `docs/ticket-0c-corrections-applied.md` item 2 for
  the full correction.
- `InlineCode` and `CodeBlock` both use the `mono` type-scale token (13px/22)
  rather than inheriting the surrounding body size, per the type scale table
  in `docs/design-tokens-reference.md`.

## Breakpoint behavior (360px-2560px)

Every component in this unit is built with fluid widths (`w-full`,
`max-w-content`, percentage-based flex/grid) and no fixed pixel widths, so
nothing was added that needs a special breakpoint override. The one component
that could overflow narrow viewports -- `DataTable` -- gets its own
horizontal-scroll wrapper rather than relying on the page to scroll.

## Motion and transitions

No new keyframes, durations, or easing curves were introduced. `Skeleton`
(already committed) reuses `.skeleton-shimmer`; nothing in this pass animates.
Where a transition was needed (border color swap on error/success in
`FormField`), it inherits `transition-colors duration-micro ease-out-standard`
already present on `components/ui/input.tsx` -- no override was necessary.
