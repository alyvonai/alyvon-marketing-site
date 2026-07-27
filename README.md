# Alyvon Marketing Site Rebuild

Next.js 15 / React 19 / Tailwind / shadcn rebuild of www.alyvon.com, per `spec-2-marketing-site.md`.

Status: foundation in progress. See `docs/0b-repo-audit.md` for the technical audit and `docs/section-manifest.md` for what this PR covers versus what remains.

## Stack

- Next.js 15 (App Router), React 19
- Tailwind CSS v4 with CSS custom properties for every design token
- shadcn/ui component primitives
- PostHog (env-var keyed) for analytics
- GoHighLevel embeds for all forms and booking

## Getting started

```bash
npm install
npm run dev
```
