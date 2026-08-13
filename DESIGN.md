# RevPartners — Brand Design Guide (for AI agents)

Drop this file into any app repo. It is **self-contained**: tokens below are canonical for non-HubSpot work (slides, PDFs, decks, mocks, random apps). Copy the CSS block. Do not invent colors, fonts, or component recipes.

This is **not** the HubSpot theme. HubSpot agents use the theme CSS in `Revpartners-2024/`. Values here are aligned to that theme as of VERSION in this repo.

RevPartners is a **Go-to-Market (GTM) engineering consultancy** delivering **Revenue Operations through HubSpot**. The brand reads **bold, technical, and confident** — clean, lots of white space, one accent color at a time, never busy.

**Before you design anything:** follow `AGENTS.md` (update check), then this file.

---

## 1. First principles (read before touching anything)

1. **Neutral-dominant.** 80–90% neutral (off-white bg, dark text), 10–20% accent. Color is a scalpel, not a paint roller.
2. **One accent hue per element.** Never mix accents inside a single card/button/block (no blue border with green icons). When a group needs variety, give each *item* one hue and cycle: **green → blue → orange → red → purple**, repeat.
3. **No dark cards.** Dark (Ebony Clay) is for full-width bands/heroes only. Individual cards stay light.
4. **Weight, not color, creates hierarchy.** Headings are River Bed (`#434761`), never green. Emphasize by mixing Montserrat Bold + Regular. A single accent *word* inside a heading is fine.
5. **Buttons and strong = Inter Bold (700).** Body is 400. Don't reach for 600 as a "brand bold" — the site doesn't.
6. **No serif, no monospace, no emoji** (emoji only in rare conversational micro-copy, never in UI chrome). No gradients on surfaces (the blue-yellow-red stripe on dark heroes/slide footers is the exception). No colored-left-border-only cards, no chips behind icons.

---

## 2. Drop-in CSS (tokens)

Paste into a global stylesheet. All values match the HubSpot theme.

```css
:root {
  /* ---- Neutrals (light → dark) ---- */
  --clr-off-white: #FDFDFD;  --clr-mercury: #F3F3F4;
  --clr-iron: #DDDEE2;       --clr-steel: #A1A2A7;     --clr-carbon: #555970;
  --clr-river-bed: #434761;  --clr-ebony-clay: #24273A;

  /* ---- Accents ---- */
  --clr-green:  #17B451;  /* Rally Green — PRIMARY / RevOps */
  --clr-blue:   #329DFF;  /* Fast Blue — Growth */
  --clr-orange: #F7761E;  /* Tango — HubSpot */
  --clr-red:    #FB3131;  /* Racecar Red — Sales */
  --clr-purple: #8C32FF;  /* Ultra Purple — Tech */
  --clr-yellow: #FBAA31;  /* Lightning — slide footer / BYR stripe only */

  /* ---- Accent backgrounds: 20% opacity ---- */
  --clr-green-bg:  rgba(23,180,81,0.20);   --clr-blue-bg:   rgba(50,157,255,0.20);
  --clr-orange-bg: rgba(239,129,27,0.20);  --clr-red-bg:    rgba(251,49,49,0.20);
  --clr-purple-bg: rgba(140,50,255,0.20);

  /* ---- Opaque flatten (20% over off-white) — prefer on overlapping cards ---- */
  --clr-green-light:  #D1F0DC;  --clr-blue-light:  #CCE7FF;
  --clr-orange-light: #FEE4D5;  --clr-red-light:   #FFD9D7;
  --clr-purple-light: #E9D6FF;

  /* ---- Accent darks ---- */
  --clr-green-dark:  #22433E;  --clr-blue-dark:  #0F2F4D;  --clr-orange-dark: #7B3200;
  --clr-red-dark:    #8C0000;  --clr-purple-dark: #35007A;

  /* ---- Semantic (portable aliases — HubSpot theme uses --clr-text / --clr-title / --clr-bg) ---- */
  --color-bg: var(--clr-off-white);     --color-bg-alt: var(--clr-mercury);
  --color-bg-dark: var(--clr-ebony-clay);
  --color-fg: var(--clr-river-bed);     --color-fg-2: var(--clr-river-bed);
  --color-fg-3: var(--clr-steel);       --color-fg-inverted: var(--clr-off-white);
  --color-primary: var(--clr-green);    --color-primary-bg: var(--clr-green-bg);
  --color-border: rgba(36,39,58,0.10);  --clr-stroke: rgba(36,39,58,0.10);
  --clr-stroke-2: rgba(36,39,58,0.30);  --clr-bg-2: var(--clr-mercury);
  --color-link: var(--clr-green);

  /* ---- Type ---- */
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-icons: 'Material Symbols Outlined', sans-serif;

  /* ---- Spacing (1rem = 16px) ---- */
  --gap-xxs: .25rem; --gap-xs: .5rem; --gap-s: 1rem; --gap: 1.5rem;
  --gap-m: 3rem; --gap-l: 3.75rem; --gap-xl: 7.5rem; --gap-xxl: 15rem;

  /* ---- Radii ---- */
  --radius-sm: 4px;     /* tags */
  --radius: 8px;        /* cards */
  --radius-lg: 16px;    /* wrapping panels */
  --radius-pill: 120px; /* buttons */

  /* ---- Shadow ---- */
  --shadow-card: 0 2px 4px rgba(0,0,0,0.25); /* optional lift; accent cards may use a tinted glow */
}
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

---

## 3. Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero XL | Montserrat | 700 | 72–120px |
| H1 | Montserrat | 700 | ~48px (web is fluid clamp) |
| H2 | Montserrat | 700 | ~32px |
| H3 | Montserrat | 700 | ~28px |
| Eyebrow / category | Montserrat | 700 | ~15–18px · UPPERCASE · letter-spacing **0.5rem** · often green |
| Body | Inter | 400 | 16–18px · line-height **1.4** |
| Buttons / strong | Inter | **700** | — |
| Caption | Inter | 400/500 | 12–14px |

- Headings River Bed (`--color-fg`), never green.
- Mix Bold + Regular within one title (`<span>What are</span> <b>Lifecycle Stages?</b>`).
- Body text is River Bed; muted is Steel.

---

## 4. Components

### Buttons
- Shape: full pill (`border-radius: 120px`). Font: Inter **700**.
- **Primary:** green fill `#17B451`, white text, padding `15px 40px`.
- **Outlined:** transparent fill, `2px solid` green, green text. Hover border goes **dashed**.
- **Hover:** accent at 20% opacity as background. **Press:** `transform: scale(0.98)`.

### Fancy links
- Inter 700, green, trailing **Material icon** `arrow_forward` (not an Inter `→` character).

### Cards
- Item radius **8px**, wrapping panel **16px**.
- **`2px` border** — accent color OR `--clr-stroke` (10% ebony). Stronger: `--clr-stroke-2` (30%).
- Background: `--clr-bg-2` **or** the opaque accent (`--clr-<hue>-light`). Border and fill share the same hue.
- Neutral cards: no shadow. Accent cards may use a soft tinted glow. **No** colored-left-border-only, **no** chip behind icons.

### Icons
- **Material Symbols Outlined** — not Rounded. Small icons: FILL 1, weight 300.
- Color maps to service area (green RevOps · blue Growth · orange HubSpot · red Sales · purple Tech).

### Step sequences
- Solid **filled circle**, no border, white numeral (Montserrat Bold) inside.
- Circle color cycles green → blue → orange → red → purple.
- Joined by **dashed** connector lines (2px dashed, neutral).

### Borders & lines
- Structural: `1px solid rgba(36,39,58,0.1)`.
- Emphasis divider: `2–3px dashed #17B451` (green), often with a filled circle end cap.
- Dark heroes / slides: thin **blue · yellow · red** stripe is allowed (that's `--clr-yellow`'s job).

---

## 5. Layout & motion

- Backgrounds: Off-White primary, Mercury for alt sections, Ebony Clay for inverted bands. No textures. Line-grid illustrations on dark heroes are fine if they stay low-contrast.
- Web content width: **1200px**. Slides: 1920×1080 (or 1280×720 specimens in `slides/`).
- Generous white space. Flex/grid with `gap` tokens.
- Corners: tags 4px · cards 8px · panels 16px · buttons pill · avatars round.
- Motion: hover = 20% accent bg, press = 98% scale. No bounce/spring.
- Imagery: technical line/schematic diagrams over photography. Natural-color photos only for team/testimonial headshots.
- **Illustrations as background elements:** library in `illustrations/`. Use **sparingly** — at most one per surface, in an **empty area**, **oversized so they crop**, low-contrast. Full-bleed `Backgrounds/` grids are the exception. Never over text. Copy only the SVGs you need.

---

## 6. Voice & copy

- Bold, direct, active voice. First-person **we**, second-person **you**.
- Self-aware wit in headlines; technical confidence (bowtie model, pipeline velocity, MQL/SQL).
- Title Case headings; sentence case body; occasional ALL-CAPS labels (wide tracking).
- Em dashes for emphasis; Oxford comma; lowercase URLs (`revpartners.io`). Emoji almost never.

---

## 7. Logo

- Primary: horizontal wordmark. Mark-only for tight spaces/favicon. Green on light, white on dark.
- Files: `assets/RevPartners-Logo-2026-Green.svg`, `assets/RP-Mark-2026-Green.svg` (white variants for dark/green).
- Keep clear space; never recolor to a non-brand hue, stretch, or add effects.

---

## 8. Slides

If you're making a deck, also read `README.md` → **SLIDE DECKS** and copy a specimen from `slides/`. Don't freehand a 16:9 from the web card recipe — the footer stripe, title+divider chrome, and centering rules are slide-specific.

Cover is `01-cover` (dark / Ebony Clay, thick BYR stripe, quiet cropped illustration in the leftover space — not over type). Light cover is `01-cover-alt`. Dark covers use the green wordmark with a **white** Walker Sands line (`assets/RevPartners-Logo-2026-Green-on-Dark.svg`), not the navy tagline lockup.

---

## 9. Google Docs / written docs

Two templates. Copy a specimen in `docs/` — don't invent letterhead.

| File | Use when |
|---|---|
| `docs/01-branded.html` | General branded doc — title + subtitle, heading ladder, alerts, table. Internal notes, style reference. |
| `docs/02-working.html` | Client / partner deliverable — BLUF callout, comparison table, step-by-step, notes. |

Shared chrome: green header bar with white mark, 1" margins, dashed green title divider (branded), footer `RevPartners / …` + the diagonal blue/yellow/red stripe.

**Headings default to River Bed** (same as web/slides). The live Google Doc still has optional green/blue/orange/red Heading 2–5 styles — use those only as a rare one-hue accent, never a rainbow of section titles. Callout boxes keep their accent (that's the box, not the heading ladder).

Body is Inter. Footer names are just text — no highlighter once they’re filled in.

Header mark: `assets/RP-Mark-2026-White.svg` on the green bar.

---

## 10. Quick checklist

- [ ] Background is off-white; page is neutral-dominant, accents sparse.
- [ ] Every element uses a single accent hue (no mixing within one component).
- [ ] Headings are River Bed Montserrat Bold; no green headings; body is Inter 400; buttons are 700.
- [ ] Buttons are pills; cards are 2px-border + matching tint; 8px radius.
- [ ] Icons are Material Symbols **Outlined**, colored by service area.
- [ ] No serif, no monospace, no gradients on surfaces, no emoji in UI.
- [ ] Logo present, correct color, with clear space.
