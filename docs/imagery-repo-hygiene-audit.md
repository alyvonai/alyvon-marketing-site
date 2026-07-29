# Imagery repo hygiene audit — retired design system screenshots

**Per:** Imagery/UI/Icon Spec section 3, rule 5 ("One design system... the blue-accent,
Fraunces-display screenshots from May are the previous system and are retired.
Delete them from the repo so nobody grabs one.") and Pre-Launch Brief section 2.1.

**Date:** 2026-07-29
**Performed by:** Hugo (Engineering)

## Finding

No retired blue-accent / Fraunces-display "May 13" screenshots exist anywhere in the
`alyvon-marketing-site` repository, in the working tree or in git history.

Verified two ways:

1. **Working tree scan.** A full recursive search of the repo (excluding
   `node_modules` and `.git`) for `.png`, `.jpg`, `.jpeg`, `.webp`, and `.gif` files
   turns up exactly two files, both current-system SVG favicons
   (`app/icon.svg`, `app/apple-icon.svg`). There is no `public/images/` directory
   and no raster asset of any kind checked in.
2. **History scan.** `git log --all --diff-filter=A --name-only` filtered for image
   extensions returns zero results across every commit on every branch. No image
   file has ever been added to this repository at any point in its history.

This is consistent with `docs/0b-repo-audit.md` in the repo itself, which documents
that the repository was created 2026-07-26 as an empty greenfield project (zero
code, a single auto-generated README) — there was never a prior "May 13" build in
this codebase for a legacy screenshot to survive from. The blue-accent/Fraunces
system predates this repo entirely; nothing to delete here.

**Action taken:** none required in the codebase. No deletions were made because
there was nothing matching the retirement criteria to delete.

## One flag for the operator

Of the 21 files staged in the shared context folder for this kickoff, one —
`Screenshot 2026-07-29 at 7.16.39 AM.png` — is not referenced anywhere in the
imagery spec's 18-asset disposition table (section 5) or the pre-launch brief's
asset placement map (section 2.2), and this file could not be opened by any tool
available in this environment (read, copy, and inspect all failed against it).
Since every other named asset in both docs was reachable and accounted for, this
untitled/unreferenced screenshot is the one candidate worth a manual look — it may
be a stray legacy-system capture that never got labeled, or simply an
unrelated grab. Recommend Shawn confirm what it is and remove it from the shared
folder if it turns out to be a retired-system artifact, since neither Creative nor
Engineering could verify its contents from here.
