# Alyvon marketing site — imagery shot list & art direction

A creative brief for the Alyvon team. Produce these, hand them back, and they get placed
into the site (they slot into `MediaFrame`/`ProductShot` wrappers already built).

## Art direction (applies to every shot)
- **Palette:** cool white (`#FFFFFF` / surface `#F6F7F9`), brand orange `#DE4B12` (accent), ink `#0B0D11`, secondary `#585F6A`. Warm, subtle backgrounds (white → `#FDF3EE`) — never heavy gradients.
- **Type in art:** Archivo. Numbers/labels can use JetBrains Mono. **No long legible fabricated text or real data in any asset** — placeholder bars, blurred rows, or clearly illustrative labels only. Every product‑UI shot carries the caption "Product UI. Illustrative data."
- **Formats used on the site:** `4:3` (desktop device / section), `4:5` (phone), `16:9` (wide), `1:1` (square). Export **WebP**, ~2880px wide max, hero ≤200 KB / section ≤120 KB.
- **Style anchor:** the homepage's existing device shots (browser/device frame, soft shadow, no perspective tilt) set the baseline. Mix that "product truth" with a few **editorial/diagram** pieces so the site isn't all screenshots.
- **Three tiers of image, used deliberately:** (1) **Device shots** = real product truth; (2) **Diagrams** = how it works; (3) **Editorial/conceptual** = the emotional idea (the hire, the backlog, the leak).

---

## Existing assets — already in use (do NOT recreate)
Recovered from the previous build (were unreferenced; now wired in). All on‑brand:
- `public/images/homepage/hero-brief-director-file.jpg` — Brief → Director → Doc/Deck/Sheet flow. **→ homepage hero.** (covers shot 1)
- `public/images/homepage/pain-44-days-vs-today.jpg` — 44 days vs. today. **→ homepage + Workforce index pain sections.** (covers shot 5)
- `public/images/homepage/credibility-org-chart.jpg` — Director over specialists. **→ Workforce index "How Alyvon routes work".** (covers shot 21)
- `public/images/workforce/{board-run,library-files,approvals-mobile}.webp` — the 3 device shots (board / Library / mobile Approvals).

## Retired assets — do NOT use
- `product-lines-six-icon-grid.jpg` — old department names + "Marketing Hub" as a department; conflicts with the 6‑group model.
- `pricing-tiers.jpg` — reflects old pricing.
- `how-it-works-flow.jpg` — corrupt file (invalid bytes).
- `how-it-works-3-step.jpg` / `.svg` — superseded by `hero-brief-director-file.jpg`; available if you want a 3‑step variant.

## Homepage (`/`)
1. ✅ **Hero — "Brief in → routes → file out"** — DONE, using `hero-brief-director-file.jpg`.
2. **How it works — the board** · *device, 4:3.* Keep the existing iMac board shot.
3. **Proof — the Library** · *device, 4:3.* Keep the existing Library shot.
4. **Security/control — Approvals** · *phone, 4:5.* Keep the existing iPhone approvals shot.
5. ✅ **Pain — "44 days vs. today"** — DONE, using `pain-44-days-vs-today.jpg` (homepage + Workforce index). A refreshed version is welcome but not needed.

## Workforce index (`/workforce`)
6. **Finished‑file still life** · *editorial/still-life, 4:3.* A small "shelf" of finished artifacts as objects — a doc, a deck, a spreadsheet, a zipped project, a PR — each with a colored file‑type chip. Communicates "you get a file, not a chat." *(Replaces the reused Library shot in the proof section.)*
7. **How Alyvon routes work** · *diagram, 4:3.* The Chief‑of‑Staff → 6 groups → specialists tree, one brief fanning out. (Board shot can stay as the alt.)

## Workforce group pages — one distinctive concept each (all ~4:3)
Give each group its **own** visual so they don't repeat. Concepts:
8. **Strategy & Leadership** — a board deck open on a laptop beside a simple line‑chart scenario model; "weekend" vs "done" motif.
9. **Brand & Content** — one voice, many surfaces: a page, an email, a press note, and an ad fanned out, all visibly "in the same voice" (same color system).
10. **Creative** — an **ad‑variant grid** (6–8 tiles of the same offer, different creative) — the clearest picture of "creative capacity." Add a small "add‑on" ribbon.
11. **Marketing & Sales** — a pipeline/board with an account list and a sequence flowing into "meetings booked."
12. **Customer & People** — split scene: an onboarding/QBR flow on one side, a job‑description + scorecard on the other.
13. **Product & Engineering** — a **GitHub pull‑request** view (diff + "Merge" button) — the truest picture of "ships a PR, humans merge." Illustrative diff, no real code.

## Marketing Hub (`/marketing-hub` + subpages) — needs product screenshots (see below)
14. **Overview — the follow‑up loop** · *diagram, 16:9.* Capture → Respond → Converse → Escalate as a loop; a missed call turning into a text‑back.
15. **CRM** · *device, 4:3.* One contact record with source, stage, and timeline. *(Real screenshot preferred.)*
16. **Automations** · *diagram/device, 4:3.* An event → action flow (missed‑call → text‑back; no‑show → recovery). *(Real screenshot preferred.)*
17. **AI Employee** · *phone, 4:5.* A chat thread: routine question answered, a booking made, one message escalated to a human (highlighted). *(Real screenshot preferred.)*

## Analytics (`/analytics` + subpages)
18. **Overview — the four‑part system** · *diagram, 16:9.* Data engineering → analysis → data science → applied AI as four connected stages, "reliable data" at the base.
19. **A dashboard/reporting layer** · *device, 4:3.* A clean dashboard with illustrative charts (area fill, one emphasized endpoint) — matches the dataviz style. *(Real screenshot if a build exists.)*
20. **Custom AI — deployment model** · *diagram, 4:3.* An agent running "inside your environment," a human‑review gate on consequential actions.

## Reusable brand motifs (nice to have)
21. ✅ **The org chart** — DONE, using `credibility-org-chart.jpg` (Workforce index). Reusable anywhere "team" is the point.
22. **The approval gate** — a "sends / publishes / spends" action paused at a checkpoint (reinforces control).

---

## What I need from you (real screenshots) to finish these
To make MH + Analytics feel as real as Workforce, I need product screenshots (or confirmation to build illustrative versions):
- **Marketing Hub:** a CRM contact record, an automation builder/flow, and an AI‑Employee chat. (Shots 15–17.)
- **Analytics:** a dashboard/reporting view if a real build exists. (Shot 19.)

If those don't exist yet, tell me and I'll produce **illustrative** versions (clearly labeled) from the mockup pipeline so nothing ships blank.

## Placement
Each shot maps to a section already built. Once you send finished WebPs, I drop them in `public/images/<area>/` and wire them via `MediaFrame` + the illustrative caption — no layout changes needed.
