# Ticket 0b — Repository and technical audit

## What I found

The connected GitHub repository for this rebuild is `alyvonai/alyvon-marketing-site`.
As of this audit it was **brand new and empty**: created 2026-07-26, zero code,
a single auto-generated `README.md`, `size: 0`. There is no existing
`www.alyvon.com` codebase to audit inside this repo, and no `Redesign-site`
folder containing the section-3 reference files
(`alyvon-orange-direction.html`, `alyvon-department-page.html`,
`alyvon-pillar-pages.html`, `alyvon-app-themed.html`,
`alyvon-site-architecture.md`, `spec-1-app-design-system.md`,
`alyvon-pricing-packaging-spec.md`) is attached anywhere Engineering can reach
in this environment.

**This is a greenfield build, not a migration.** Per the spec's own rule
("side with the codebase" when a reference file contradicts what's live), and
per the instruction to flag missing inputs rather than invent them, this PR
proceeds on:

- Brand's Design System Extension Spec (Ticket 0c, corrected version, supplied
  directly by the operator) as the token and states source of truth
- The written spec (`spec-2-marketing-site.md`) for structure, pricing,
  content rules, and quality gates
- Content and Research's actual audit of `service.alyvon.com` (Ticket 0a,
  already delivered and registered in the Library), which confirms the live
  `www.alyvon.com` has only one real page (home, itself being fully replaced)
  and that every other route currently 404s

**Flag for Shawn:** the three approved HTML prototypes
(`alyvon-orange-direction.html`, `alyvon-department-page.html`,
`alyvon-pillar-pages.html`) that Ticket 0c's own text treats as the visual
source of truth ("where a narrative document disagrees with those files, the
files win") are not available to Engineering in this environment. Every
component built in this PR is built to the written token table and state
rules in Ticket 0c instead. If the prototypes differ from that written spec
in ways that matter, please attach them or flag the specific divergence.

## Stack decision

Next.js 15 (App Router) on React 19, Tailwind CSS for styling, shadcn/ui
patterns for component structure (co-located `components/ui/*`, `cva` for
variants, `cn` helper). This matches the stack named in the operator's brief
and is a reasonable default for a 21-page marketing site needing strong
Lighthouse scores (static generation per route, no client-side router
overhead for content pages).

## Routing plan

Routes follow the site hierarchy in spec section 4 exactly, using the App
Router's folder convention: `app/page.tsx` (home), `app/pricing/page.tsx`,
`app/workforce/page.tsx`, `app/workforce/departments/page.tsx`,
`app/workforce/[department]/page.tsx` for the five department detail pages,
`app/marketing-hub/[feature]/page.tsx` for the three Hub features,
`app/analytics/custom-ai/page.tsx`, `app/login/page.tsx`, `app/security/page.tsx`,
`app/privacy/page.tsx`, `app/terms/page.tsx`, plus `app/not-found.tsx`,
`app/sitemap.ts`, and `app/robots.ts` for Ticket 22.

## Dependency plan

Kept deliberately small: no CMS, no state management library (marketing
pages are static/server-rendered), no custom form backend (GHL embeds only,
per spec section 6). `posthog-js` is the one analytics dependency, loaded
client-side and gated on an environment variable so no key is ever hardcoded.

## What this PR does NOT cover

See `docs/section-manifest.md` for the authoritative scope split. In short:
this PR delivers the component library and design tokens (Ticket 1), the
utility routes (Ticket 22), and this audit (Ticket 0b). The 18 remaining
content pages (Tickets 2, 3, 4 to 21), GHL integration (Ticket 23), PostHog
wiring (operator add-on), and the QA/Lighthouse pass (Ticket 24) are follow-on
work, flagged explicitly rather than claimed as done.
