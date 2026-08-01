# Creative Kickoff Pack — Alyvon Marketing Site Imagery

**Per:** Imagery/UI/Icon Spec section 9, step 1 ("Engineering exports the color
tokens, type scale, and the Lucide version in use to Creative. Creative does not
start before receiving these.")

**Source of truth:** `app/globals.css` and `tailwind.config.ts` in
`alyvonai/alyvon-marketing-site` (branch `creative-imagery-kickoff`, read at commit
`a0668cc`), cross-checked against `docs/design-tokens-reference.md` in the same
repo. These are the live, shipping values for the current orange-accent design
system. **Do not eyedrop colors from any existing hero asset** — several of the 18
assets in hand already drift from these values (see the drift table below), which
is exactly the failure mode this kickoff step exists to prevent.

---

## 1. Color tokens (authoritative)

| Token (Tailwind name) | CSS variable | Hex | Use |
| --- | --- | --- | --- |
| `bg-canvas` | `--bg-canvas` | `#FFFFFF` | Page background |
| `bg-surface` | `--bg-surface` | `#F6F7F9` | Section bands, card fills |
| `bg-surface-sunken` | `--bg-surface-sunken` | `#ECEFF3` | Inset fills: inputs, code blocks |
| `bg-inverse` | `--bg-inverse` | `#0B0D11` | Footer, closing CTA, dark callouts |
| `bg-disabled` | `--bg-disabled` | `#EFF1F4` | Disabled fields/controls |
| `border-subtle` | `--border-subtle` | `#D4D9E0` | Decorative only, never load-bearing |
| `border-input` | `--border-input` | `#7C838C` | Form field boundaries (corrected from spec's `#A9B0B9` for contrast — see repo note) |
| `border-focus` | `--border-focus` | `#DE4B12` | = accent, always 2px + offset |
| `text-primary` | `--text-primary` | `#0B0D11` | Headings/body |
| `text-secondary` | `--text-secondary` | `#585F6A` | Supporting copy, captions |
| `text-tertiary` | `--text-tertiary` | `#767D88` | Usage-restricted: only at 14px-bold+ or 18px+ |
| `text-disabled` | `--text-disabled` | `#979EA8` | Disabled labels/values |
| `text-on-accent` | `--text-on-accent` | `#FFFFFF` | Text on accent fills |
| `text-on-inverse` | `--text-on-inverse` | `#F6F7F9` | Text on `bg-inverse` |
| **`accent`** | `--accent` | **`#DE4B12`** | Primary brand orange. AA large-text + non-text only |
| `accent-strong` | `--accent-strong` | `#B33A0B` | AA normal-text — use for body links/small labels |
| `accent-wash` | `--accent-wash` | `#FDEEE7` | Tinted backgrounds, active nav, badges |
| `success-ink` / `success-bg` | — | `#276241` / `#E7F1EA` | |
| `error-ink` / `error-bg` | — | `#B3261E` / `#FBEAE8` | |
| `warning-ink` / `warning-bg` | — | `#8A5A00` / `#FBF0DC` | |
| `info-ink` / `info-bg` | — | `#2B5C8A` / `#E9F0F6` | |

Shape: `--radius-card` = `12px`, shared by cards **and** images — no exception for
hero imagery (Ticket 0c section 5). Product screenshots inside `ProductShot` get a
single `border-border-subtle` 1px outline, no drop shadow on photography.

## 2. Drift against the ratified brand canon — read this before picking a swatch

**Accent color — resolved 2026-07-29:** the operator has confirmed `#DE4B12` is
the single ratified accent value. The earlier `#d0450f` figure quoted below was
from a superseded draft of the brand canon and is **wrong** — it must not be
eyedropped, referenced, or reintroduced anywhere in this repo or in future
Creative assets. Every occurrence of `#d0450f` has been retired from the
codebase; `#DE4B12` (already the live repo value, row below) is the sole source
of truth going forward.

The operator's ratified palette (background `#FFFFFF`, border
`#D8D6D7`, muted_text `#AEA8A8`, surface `#F6F7F9`, Rust/Orange Accent `#815445`,
Alt Surface Gray `#EEEEEF`) does **not** match the live repo token-for-token on
every value. The repo values above are what the product actually renders and are
the values to build against. Flagging every remaining mismatch so nobody averages
the two or guesses:

| Ratified canon token | Ratified hex | Closest repo token | Repo hex | Match? |
| --- | --- | --- | --- | --- |
| background | `#FFFFFF` | `bg-canvas` | `#FFFFFF` | Exact match |
| surface | `#F6F7F9` | `bg-surface` | `#F6F7F9` | Exact match |
| accent | `#DE4B12` | `accent` | `#DE4B12` | **Resolved — exact match.** `#d0450f` is retired; do not use it |
| border | `#D8D6D7` | `border-subtle` | `#D4D9E0` | **Drift.** Close but not identical; repo's is a cooler, slightly bluer gray |
| muted_text | `#AEA8A8` | `text-tertiary` | `#767D88` | **Significant drift.** Ratified value is a warm light gray; repo's is a darker, cooler blue-gray. Not interchangeable at any opacity |
| Rust/Orange Accent | `#815445` | `accent-strong` | `#B33A0B` | **Significant drift.** Ratified is a muted brown-rust; repo's is a saturated burnt orange. These read as different colors, not a shade variant |
| Alt Surface Gray | `#EEEEEF` | `bg-surface-sunken` or `bg-disabled` | `#ECEFF3` / `#EFF1F4` | **Minor drift.** Within a few points, close enough to treat as the same swatch if a decision is needed |

**Working rule for this round:** build every Tier 2/3/4 asset against the repo
column above, not the ratified-canon column. The repo is what ships. If Shawn wants
the ratified canon reconciled into the codebase, that is a separate token-update
decision for Engineering, not something Creative should resolve by picking a color
mid-asset.

## 3. Type scale (Tailwind `fontSize`, already wired in `tailwind.config.ts`)

| Token | Size / line-height | Tracking | Weight |
| --- | --- | --- | --- |
| `display-xl` | 56px / 60px | -0.042em | 700 |
| `display-l` | 40px / 44px | -0.035em | 700 |
| `display-m` | 28px / 34px | -0.03em | 600 |
| `body-l` | 18px / 28px | - | - |
| `body` | 16px / 26px | - | - |
| `body-s` | 14px / 22px | - | - |
| `label` | 12px / 16px | +0.1em, uppercase | 500 |
| `mono` | 13px / 22px | - | - |

Mobile step-downs (per `docs/design-tokens-reference.md`): `display-xl` -> 36/40,
`display-l` -> 28/34, `display-m` -> 22/28. Floor is 12px everywhere on the site —
never set body copy smaller than `label` size even in a composed asset.

**Fonts:** **Archivo** for display and body (`--font-archivo`, loaded via
`next/font/google`), **JetBrains Mono** for labels, eyebrows, timestamps, and
numeric figures (`--font-jetbrains-mono`). **Fraunces and Inter Tight are
permanently retired** — do not reintroduce either, including as a fallback, in any
vector type layer composed into an asset.

## 4. Icon system

**Lucide version in use:** `lucide-react@^0.460.0` (from `package.json`). Any icon
Creative draws for a gap in Lucide's set must match this version's construction,
not a newer or older Lucide release.

**One discrepancy to flag rather than silently pick one:** the imagery spec
(section 8) specifies 24px grid / **2px stroke** for icon construction. The repo's
own internal build doc (`docs/design-tokens-reference.md`) states the product's
actual iconography rule as 24px box / **1.5px stroke**. These are different stroke
weights. Recommend Creative build to the imagery spec's 2px stroke for marketing
site icons since that's the explicit instruction governing this work, but this is
a real mismatch against the live product's own icons and Shawn/Jordan should
decide whether marketing icons should match the product exactly (1.5px) or hold
the spec's stated weight (2px) before scaling icon work out.

## 5. What this unblocks

Per spec section 9, Creative is cleared to start the exploration round (one Tier 2
asset in each of variants A-D, plus one reworked Tier 3 device render) now that
this pack is delivered. Cut-ready source screenshots for compositing are in this
same PR under `creative-handoff/` (see the PR description for the manifest) —
native resolution, organized by asset, nothing upscaled.
