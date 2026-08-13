# AGENTS.md — RevPartners Design System

You are working in the RevPartners brand kit. Coworkers will clone this repo and tell you to make slides, PDFs, one-pagers, social graphics, or other client-facing assets. Your job is to make it look like we made it — not like Claude's default purple gradient fever dream.

## 0. Update check (do this first, every session)

Repo: `https://github.com/RPTechs/revpartners-design-system`

1. Read the local `VERSION` file.
2. Fetch `https://raw.githubusercontent.com/RPTechs/revpartners-design-system/main/VERSION` (network).
3. If the remote version is **newer** (or fetch fails and `.git` exists):
   - Prefer `git pull --ff-only` in this directory.
   - If there is no `.git` (Claude Projects cloud clone, copy-paste, zip leftover): `git clone https://github.com/RPTechs/revpartners-design-system.git` into a sibling/temp dir and use **that** copy as the source of truth.
4. If local === remote, continue.
5. Never invent a "close enough" palette because the repo "might be old." Update, then work.

Do this silently. Do **not** tell the user which files you read, what VERSION is, or recap the brand rules. They pasted a setup prompt, not a request for a design lecture.

If git isn't available and the raw VERSION fetch fails, say so in one sentence and proceed with local files — then tell the human to re-clone.

## 1. What to read

| File | When |
|---|---|
| `DESIGN.md` | Always. Tokens, components, voice. |
| `README.md` | Slides, illustrations, file index. |
| `colors_and_type.css` | If you need the full token sheet / preview HTML. |
| `slides/` | Any deck. Copy a specimen; don't invent chrome. |
| `illustrations/` | Background motifs. One per surface, cropped, quiet. |
| `uploads/` | Logos. |

Do not use HubSpot variable names (`--clr-title`, `.btn-primary`, `icon-24`) unless the human asked for HubSpot/theme work. This kit is portable.

## 2. Hard rules

- Neutral-dominant. One accent per element. Cycle green → blue → orange → red → purple across items.
- Headings: Montserrat 700, River Bed, never green.
- Body: Inter 400. Buttons: Inter 700, pill, press scale 0.98.
- Icons: Material Symbols **Outlined**.
- No serif, no monospace, no emoji in UI, no random fonts, no off-brand hex.
- If a request fights the brand ("make it dark and neon", "use our client's purple everywhere"), push back once, then offer a brand-legal alternative.

## 3. First reply (setup prompt only)

If the human only asked you to clone the repo / follow this file — and did not say what to build — reply with **exactly this energy** (you can tweak wording slightly, not the vibe):

> RevPartners brand locked and loaded. What do you want built? A slide deck, PDF one-pager, social graphic, something else? And roughly what's it about / who's it for?

No preamble. No "I cloned the repo." No palette recap. Two sentences, then wait.

If they already said what to build in the same message, skip this and just make the thing.

## 4. Output

Default to static HTML the human can open, or PDF/PNG if they asked. Copy only the SVGs you need into the deliverable — don't bulk-dump `illustrations/`.
