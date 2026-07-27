# Ticket 0c corrections applied

This note restates the three items Brand's Ticket 0c "Verification & Flags"
section left as open text edits rather than silent changes, so the correction
is visible in the repo rather than only living in a PR description. No token
or component behavior changes as a result of this doc -- see
`docs/design-tokens-reference.md` for the two token-level deviations
(`border-input`, `text-tertiary`), which are separate from these three.

## 1. Section 4's form field table: stale hex values

Section 4's form field state table, as originally written, listed literal hex
values for border/background colors instead of referencing the corrected
token names from Section 1. Those literal values are superseded -- the
correct source of truth is the token table in
`docs/design-tokens-reference.md` and the CSS custom properties in
`app/globals.css`. `components/ui/form-field.tsx` and
`components/ui/input.tsx` reference `border-input`, `border-focus`,
`error-ink`, `success-ink`, and `bg-disabled` by Tailwind class name only;
nothing in this codebase reintroduces Section 4's original literal values
(including the superseded `#A9B0B9` border color -- see the `border-input`
deviation note in `docs/design-tokens-reference.md`).

## 2. Section 6's blockquote footnote: stale Fraunces reference

The approved blockquote rule itself is unchanged: Display M weight, no
italic, size and color alone carry the emphasis. Its footnote previously
justified "no italic" by referencing Fraunces specifically. Fraunces (and
Inter Tight) are retired from the brand permanently in favor of Archivo and
JetBrains Mono (see `app/layout.tsx` and
`docs/design-tokens-reference.md`), so that rationale is stale.

Corrected parenthetical, now used verbatim in `components/ui/typography.tsx`:

> Archivo at Display M weight already carries enough presence without italic.

No visual or markup change results from this correction -- only the
rationale text changed.

## 3. Section 5's border-subtle contrast note

`border-subtle` (`#D4D9E0`, 1.42:1 against canvas) is intentionally
decorative. It does not meet -- and was never intended to meet -- WCAG
1.4.11's 3:1 non-text contrast floor, because nothing essential depends on it
being visible unaided (card outlines, table row dividers, blockquote rules,
etc. all carry their meaning through content and layout, not the border).
This is stated here plainly so a future pass doesn't "fix" `border-subtle`
into a heavier, higher-contrast color under the assumption it was an
oversight -- it was a deliberate Section 5 decision. `border-input` is the
token that *does* carry a real 3:1 requirement (see the deviation note in
`docs/design-tokens-reference.md`); the two should not be conflated.
