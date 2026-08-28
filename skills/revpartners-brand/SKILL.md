---
name: revpartners-brand
description: Apply the RevPartners brand to slides, PDFs, docs, mocks, and UIs. Use when the user invokes /revpartners-brand, or asks for on-brand RevPartners design, decks, one-pagers, or HubSpot-adjacent visuals outside the theme repo.
disable-model-invocation: true
---

# RevPartners brand

Self-contained. Do not read local theme files, `DESIGN.md`, `slides/`, `docs/`, or `assets/`. Tokens below are canonical. Do not invent colors, fonts, or component recipes.

RevPartners is a **Go-to-Market (GTM) engineering consultancy** delivering **Revenue Operations through HubSpot**. The brand reads **bold, technical, and confident** — clean, lots of white space, one accent color at a time, never busy.

Talk about the thing being made (copy, layout, argument). Do not narrate tokens, hex, or this skill unless they asked how the brand works.

If they invoked this without saying what to build, reply: "RevPartners brand locked and loaded. What do you want built? A slide deck, PDF one-pager, Google Doc, social graphic, something else? And roughly what's it about / who's it for?"

---

## 1. First principles

1. **Neutral-dominant.** 80–90% neutral (off-white bg, dark text), 10–20% accent. Color is a scalpel, not a paint roller.
2. **One accent hue per element — and per category.** Never mix accents inside a card. Sibling categories: all the same hue, **or** the next accent for the *entire* category (eyebrows, dividers, cards, icons). The sin is a green chapter with blue icons. See **Category color vs semantic color**.
3. **No dark cards.** Dark (Ebony Clay) is for full-width bands/heroes only. Individual cards stay light.
4. **Weight, not color, creates hierarchy.** Headings are River Bed (`#434761`), never green. Emphasize by mixing Montserrat Bold + Regular. A single accent *word* inside a heading is fine.
5. **Buttons and strong = Inter Bold (700).** Body is 400. Don't reach for 600 as a "brand bold" — the site doesn't.
6. **No serif, no monospace, no emoji** (emoji only in rare conversational micro-copy, never in UI chrome). No gradients on surfaces (the blue-yellow-red stripe on dark heroes/slide footers is the exception). No colored-left-border-only cards, no chips behind icons.
7. **A "light" accent is 20% opacity of the hue, over whatever is behind it.** `--clr-blue-bg` on white looks sky. The same token on Ebony Clay looks like a dark wash. That is the point. Never paint `--clr-*-light` (`#CCE7FF` etc.) onto a dark band — those hexes are 20% over *off-white*, baked opaque. They are a hack for when a pattern would show through a transparent fill. Default fill is always `--clr-*-bg`. If you need opaque on dark, use `--clr-*-dark`, not the mint/sky chips.

---

## 2. Drop-in CSS (tokens)

Paste into a global stylesheet.

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

  /* ---- Tints: 20% of the accent. CANON. Samples whatever sits behind. ---- */
  --clr-green-bg:  rgba(23,180,81,0.20);   --clr-blue-bg:   rgba(50,157,255,0.20);
  --clr-orange-bg: rgba(239,129,27,0.20);  --clr-red-bg:    rgba(251,49,49,0.20);
  --clr-purple-bg: rgba(140,50,255,0.20);

  /* ---- Opaque flatten: 20% over off-white ONLY. Hack for patterns showing through. Never on dark. ---- */
  --clr-green-light:  #D1F0DC;  --clr-blue-light:  #CCE7FF;
  --clr-orange-light: #FEE4D5;  --clr-red-light:   #FFD9D7;
  --clr-purple-light: #E9D6FF;

  /* ---- Opaque on dark. If you cannot use the 20% tint, use these — not *-light. ---- */
  --clr-green-dark:  #22433E;  --clr-blue-dark:  #0F2F4D;  --clr-orange-dark: #7B3200;
  --clr-red-dark:    #8C0000;  --clr-purple-dark: #35007A;

  /* ---- Semantic ---- */
  --clr-primary: var(--clr-green);
  --clr-text: var(--clr-river-bed);
  --clr-title: var(--clr-ebony-clay);
  --color-bg: var(--clr-off-white);     --color-bg-alt: var(--clr-mercury);
  --color-bg-dark: var(--clr-ebony-clay);
  --color-fg: var(--clr-river-bed);     --color-fg-2: var(--clr-river-bed);
  --color-fg-3: var(--clr-steel);       --color-fg-inverted: var(--clr-off-white);
  --color-primary: var(--clr-green);    --color-primary-bg: var(--clr-green-bg);
  --color-border: rgba(36,39,58,0.10);  --clr-stroke: rgba(36,39,58,0.10);
  --clr-stroke-2: rgba(36,39,58,0.30);  --clr-bg-2: var(--clr-mercury);
  --color-link: var(--clr-green);

  /* ---- Jobs. Chapter hue is a local override of chrome, not a separate object mascot. ---- */
  --role-chrome: var(--clr-green);       /* default page/doc chrome. Inside a chapter, use that chapter's hue */
  --role-chrome-bg: var(--clr-green-bg);
  --role-yes: var(--clr-green);          /* merge, proceed, success — may punch through a chapter */
  --role-no: var(--clr-red);             /* stop, skip, block, danger */
  --role-ask: var(--clr-orange);         /* question, decision */
  --role-info: var(--clr-blue);          /* detect, inspect */

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
  --shadow-card: 0 2px 4px rgba(0,0,0,0.25);
}
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

---

## Category color vs semantic color

**Pick a scheme. Don’t mix.**

Sibling categories of the same thing (Companies vs Contacts, items in a list, departments) get **one** of:

1. **All the same hue** — every chapter is Rally Green (or one chosen accent).
2. **One hue per category, all the way through** — cycle **green → blue → orange → red → purple**. Companies chapter = green (eyebrows, dashed dividers, cards, icons). Contacts chapter = blue (*same*, all of it). Never a green chapter with blue icons.

**Canonical department hues** (when the category *is* a department): RevOps green · Marketing/Growth blue · HubSpot admin orange · Sales red · Tech/integrations/migrations purple.

**Semantic outcomes** may punch through a chapter: `--role-yes` go/merge · `--role-no` stop/skip · `--role-ask` question · `--role-info` detect. That’s one element’s job, not a license to retheme the chapter.

Page letterhead, primary CTAs, and slide title-dividers default to Rally Green **until** they sit inside a colored chapter — then they follow that chapter.

---

## 3. Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero XL | Montserrat | 700 | 72–120px |
| H1 | Montserrat | 700 | ~48px (web is fluid clamp) |
| H2 | Montserrat | 700 | ~32px |
| H3 | Montserrat | 700 | ~28px |
| Eyebrow / category | Montserrat | 700 | ~15–18px · UPPERCASE · letter-spacing **0.5rem** · chapter hue (default green) |
| Body | Inter | 400 | 16–18px · line-height **1.4** |
| Buttons / strong | Inter | **700** | — |
| Caption | Inter | 400/500 | 12–14px |

- Headings River Bed (`--color-fg`), never green.
- Mix Bold + Regular. **Swap test is not optional:** bold the word that would change on the sibling page. `<b>Company</b> Deduplication` / `<b>Contact</b> Deduplication`. Never bold the HubSpot workflow name (`Deduplication`) when the sibling is another object. Fine when the canvas title *is* the object (`<b>Target Account</b>` vs `<b>Contact</b>`).
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
- Background: `--clr-bg-2` **or** `--clr-<hue>-bg` (20% tint). Border and fill share the same hue. Use `--clr-<hue>-light` only on a light ground when a pattern would show through. On dark, `--clr-<hue>-bg` or `--clr-<hue>-dark` — never `*-light`.
- Neutral cards: no shadow. Accent cards may use a soft tinted glow. **No** colored-left-border-only, **no** chip behind icons.

### Icons
- **Material Symbols Outlined** — not Rounded. Small icons: FILL 1, weight 300. No chip. Sit on the card.
- Color = the **chapter hue**, unless the card is semantic (go/stop/ask). Same icon glyphs on Starts/Skips/Runs in every chapter — color follows the chapter (or `--role-no` if that card is a stop).
- Same repeating card type (Starts / Skips / Runs, etc.) uses the **same three icons** in every object chapter.

### Borders & lines
- Structural: `1px solid rgba(36,39,58,0.1)`.
- Emphasis divider: `2–3px dashed` in the **chapter hue** (default Rally Green), often with a filled circle end cap.
- Dark heroes / slides: thin **blue · yellow · red** stripe is allowed (that's `--clr-yellow`'s job).

---

## Diagrams

A diagram is a component. If a line doesn’t meet a card, it’s decoration — delete it. Don’t leave two cards floating and call it a fork.

- **Sequence** (1 → 2 → 3 → 4): filled numbered circles, white Montserrat Bold numerals. Hue cycle is allowed here (true series). Connectors: pick **dashed** or **solid Carbon 2px** and stick. Title dividers follow the **chapter hue** (default dashed green + cap) — that’s chrome, not the diagram.
- **Decision tree:** `--role-ask` question node → **solid Carbon 2px T-bar** that actually touches the cards → two columns. Nested T-fork under Merge into keep / after. Same rule: every stem meets a box.

---

## 5. Layout & motion

- Backgrounds: Off-White primary, Mercury for alt sections, Ebony Clay for inverted bands. No textures. Line-grid illustrations on dark heroes are fine if they stay low-contrast.
- Web content width: **1200px**. Slides: 1920×1080 or 1280×720.
- Generous white space. Flex/grid with `gap` tokens.
- Corners: tags 4px · cards 8px · panels 16px · buttons pill · avatars round.
- Motion: hover = 20% accent bg, press = 98% scale. No bounce/spring.
- Imagery: technical line/schematic diagrams over photography. Natural-color photos only for team/testimonial headshots.
- **Illustrations as background:** at most one per surface, in an empty area, oversized so they crop, low-contrast. Never over text.

---

## 6. Voice & copy

- Bold, direct, active voice. First-person **we**, second-person **you**.
- Self-aware wit in headlines; technical confidence (bowtie model, pipeline velocity, MQL/SQL).
- Title Case headings; sentence case body; occasional ALL-CAPS labels (wide tracking).
- Em dashes for emphasis; Oxford comma; lowercase URLs (`revpartners.io`). Emoji almost never.

---

## 7. Logo

- Primary: horizontal wordmark. Mark-only for tight spaces/favicon/doc headers. Green on light, white on dark (and on the green doc header bar).
- Use the SVG and URL in **ASSETS** below. Recolor the mark via `--clr-primary` (green default; white `#FDFDFD` on dark/green bars).
- Dark covers: green wordmark + **white** “a Walker Sands company” line — not navy tagline on ebony clay.
- Keep clear space; never recolor to a non-brand hue, stretch, or add effects.

---

## 8. Slides

Don't freehand a 16:9 from the web card recipe.

- **Canvas:** 1280×720 (or 1920×1080). Content slides: Off-White. Cover: Ebony Clay.
- **Title:** Montserrat, mix Bold + Regular. Dark, never green.
- **Divider:** green dashed line with a filled green circle end cap.
- **Footer:** full-bleed **blue · yellow · red** stripe, flush to the bottom. Thin on content slides, thick on the cover. No logo/page number by default.
- **Cover:** logo, title, subtitle, thick stripe, one quiet cropped illustration in leftover space (not over type).
- Title + divider pin top; content below is vertically centered. Short lead sits under the divider, not centered.

---

## 9. Google Docs / written docs

Don't invent letterhead.

- **Branded doc:** title + subtitle, heading ladder, dashed-border alert boxes, green styled table.
- **Working doc:** client/partner deliverable — BLUF callout, comparison table, step-by-step, notes.
- Chrome: green header bar with **white mark**, ~1" margins, dashed green title divider, footer `RevPartners / Partner / Project Name` + the diagonal blue/yellow/red stripe.
- Headings default to River Bed. Optional green/blue/orange/red Heading 2–5 — rare, one hue, never a rainbow of section titles. Callout boxes keep their accent.
- Body is Inter. Footer names are plain text once filled in (no yellow highlighter).

---

## Handoff / static HTML

Leave-behinds are snapshots. **No On/Off live-status pills** on a download. Status on a static file is a rotting banana. If it can go stale, don’t render it as current.

---

## 10. Quick checklist

- [ ] Background is off-white; page is neutral-dominant, accents sparse.
- [ ] Sibling categories: all one hue, **or** one hue per category all the way through. No green chapter + blue icons.
- [ ] Semantic go/stop may punch through. Departments use the canon map (RevOps green · Growth blue · HubSpot orange · Sales red · Tech purple).
- [ ] Every element uses a single accent hue (no mixing within one component).
- [ ] Tinted fills are `--clr-*-bg` (20% over the actual background). No `*-light` chips on dark. Opaque on dark = `*-dark`.
- [ ] Headings pass the swap test; no green headings; body is Inter 400; buttons are 700.
- [ ] Buttons are pills; cards are 2px-border + matching tint; 8px radius.
- [ ] Icons are Material Symbols **Outlined**, colored by the **chapter** (or semantic go/stop).
- [ ] Diagram stems actually touch cards. No floating “fork.”
- [ ] No On/Off pills on static HTML.
- [ ] No serif, no monospace, no gradients on surfaces, no emoji in UI.
- [ ] Logo present, correct color, with clear space.

---

## ASSETS - SVG Logos

## Logomark
<svg width="180" height="164" viewBox="0 0 180 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 81.8218C0 127.005 36.6384 163.644 81.8218 163.644V0H0V81.8218Z" fill="var(--clr-primary)"></path><path d="M180 163.644C180 118.46 143.362 81.8218 98.1782 81.8218V163.644H180Z" fill="var(--clr-primary)"></path><path d="M139.099 81.8218C161.701 81.8218 180 63.5026 180 40.9208C180 18.339 161.681 0 139.099 0H98.198V81.8218H139.099Z" fill="var(--clr-primary)"></path></svg>

### Full logo
<img src="https://revpartners.io/hubfs/RP%20+%20WS%20Logo%20Horizontal%20-%20Green.svg" alt="RevPartners, a Walker Sands company">
