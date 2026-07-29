# Creative Handoff — Source Material Manifest

Prepared by Engineering for Creative as part of the imagery finalization kickoff (see `docs/creative-kickoff-pack.md` for tokens/type/icons, and `docs/imagery-repo-hygiene-audit.md` for the retired-design-system check).

This folder is the **only** place Creative should pull raw pixels from for compositing. Nothing in here is a finished marketing asset — no file in this folder should ship as-is on the live site.

## Folder guide

### `tier1-full-screens/`
Native-resolution, real product screenshots. Safe to use as:
- Tier 1 "product truth" heroes, as-is or with light cropping for aspect ratio
- Cut source for Tier 2 fragment composites
- Screen content to composite into Tier 3 device mockups

All files are original resolution (no upscaling). One file, `custom_agent_builder_hero_t1_v1_cropped.png`, has already been redacted (model name + per-token pricing removed per spec section 5 / brief section 4.3) — use this cropped version, not the raw source in the operator's staged context files.

| File | Source screen | Native resolution | Notes |
|---|---|---|---|
| `custom_agent_builder_hero_t1_v1_cropped.png` | Custom Agent Builder | 1920x1080 | Redacted: model name row and $/Mtok pricing masked out |
| `marketinghub_aiemployee_hero_t1_v1.png` | Marketing Hub - AI Employee | 2400x1350 | |
| `marketinghub_automations_hero_t1_v1.png` | Marketing Hub - Automations | 2860x1609 | |
| `marketinghub_crmpipeline_hero_t1_v1.png` | Marketing Hub - CRM Pipeline (Opportunities) | 2400x850 | |
| `marketinghub_dashboard_hero_t1_v1.png` | Marketing Hub - Dashboard | 2400x1500 | |
| `marketinghub_socialplanner_capability_t1_v1.png` | Marketing Hub - Social Planner | 2942x1654 | |
| `workforce_boarddashboard_hero_t1_v1.png` | Workforce Board Dashboard | 1920x1080 | |
| `workforce_library_hero_t1_v1.png` | Workforce Library | 1920x1080 | |
| `workforce_teamorgchart_hero_t1_v1.png` | Workforce Team Org Chart | 1920x1080 | |

**Not included:** `Screenshot 2026-07-29 at 7.16.39 AM.png` from the operator's staged context files could not be opened by any tool available to Engineering (confirmed inaccessible on repeated attempts — see hygiene audit doc). If this file is meant to be part of the source set, the operator will need to re-supply it.

### `tier2-fragments/`
Pre-cut UI fragments — cards, KPI tiles, workflow node clusters, pipeline columns — cropped directly from the native-resolution Tier 1 sources above (never from the low-res reference JPGs). These are meant to be composited directly per the Tier 2 direction (variants A-Cascade, B-Exploded stack, C-Orbit, D-Isolated artifact): pick 3-5 per composite, drop shadow, arrange.

| File | What it is | Size | Good for |
|---|---|---|---|
| `workforce_boardcards_stackpair_t2frag_v1.png` | Two stacked task cards (in-progress work items) | 500x240 | Cascade / exploded stack |
| `workforce_boardcard_isolated_t2frag_v1.png` | Single "Approval needed" task card | 500x150 | Isolated artifact |
| `workforce_statcard_shippedtasks_t2frag_v1.png` | "254 tasks - SHIPPED" stat tile | 380x130 | Isolated artifact, orbit |
| `automations_workflowchain_t2frag_v1.png` | 4-node automation chain (trigger -> assign -> email -> wait) | 1100x220 | Cascade, exploded stack |
| `crmpipeline_stagecolumn_t2frag_v1.png` | "New Lead (inbound)" pipeline column, header + 2 opportunity cards | 410x480 | Cascade, orbit |
| `dashboard_kpicard_pipelinevalue_t2frag_v1.png` | "Pipeline value" KPI card with bar chart | 660x420 | Isolated artifact, orbit |

All fragment crops were verified by direct visual inspection for clean card edges and no clipped/overlapping text before being included here. All copy visible in these fragments is pre-existing house copy from the real product (on-ICP: agency/SaaS names, sales/marketing roles) — do not alter the text, and do not invent additional metrics if extending a composite.

### Reference-only material (not in this repo)
Nine low-resolution (1408x768) generative renders and off-ICP explainer images were also staged by the operator alongside the real screenshots. These are intentionally **not committed to this repository** — they're mood/direction references only, several depict off-ICP verticals or invented UI, and baking low-res non-shippable material into git history works against the repo-hygiene principle this same kickoff enforced elsewhere (removing retired-design-system assets). They're bundled instead in the "Creative Handoff - Cut-Ready Source Screenshots & Fragments" zip registered in the Library, under `reference-only-not-cut-ready/`, with the same do-not-cut / do-not-upscale guidance. **Do not cut fragments from these or upscale them** regardless of where you access them from.

## Naming convention
`<route>_<slot>_<tier>_<version>.png` - lowercase, underscores, no spaces. Matches spec section 7. Bump `_v2`, `_v3`, etc. if Creative produces revised cuts; don't overwrite `_v1` files.

## What's still open
- Tier 3 needs a "real Brand Layer screenshot" and a "real sequence view" per the brief - neither was present in the supplied context files. Flagging for the operator to supply, or Engineering can source once told which routes these correspond to.
- Icon stroke width: imagery spec says 2px, repo's own token docs say 1.5px on a 24px grid. Flagged in the kickoff pack - needs a ratified answer before Tier 4 vector work starts.
