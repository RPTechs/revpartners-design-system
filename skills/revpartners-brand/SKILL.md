---
name: revpartners-brand
description: Apply the RevPartners brand to slides, PDFs, docs, mocks, and UIs. Use when the user invokes /revpartners-brand, or asks for on-brand RevPartners design, decks, one-pagers, or HubSpot-adjacent visuals outside the theme repo.
disable-model-invocation: true
---

# RevPartners brand

Self-contained. Do not read local theme files, `DESIGN.md`, `slides/`, `docs/`, or `assets/`. Tokens below are canonical. Do not invent colors, fonts, or component recipes. Exception: if you are in the design-system repo, study `examples/` for vibe — then compose for this content. Do not clone a file and swap the copy.

RevPartners is a **Go-to-Market (GTM) engineering consultancy** delivering **Revenue Operations through HubSpot**. The brand reads **bold, technical, and confident** — clean, lots of white space, one accent color at a time, never busy.

Talk about the thing being made (copy, layout, argument). Do not narrate tokens, hex, or this skill unless they asked how the brand works. Exception: if you pulled a newer design-system `VERSION`, tell the user the number, then continue.

If they invoked this without saying what to build, reply: "RevPartners brand locked and loaded. What do you want built? A slide deck, PDF one-pager, Google Doc, social graphic, something else? And roughly what's it about / who's it for?"

---

## 1. First principles

1. **Neutral-dominant.** 80–90% neutral (off-white bg, dark text), 10–20% accent. Color is a scalpel, not a paint roller.
2. **Green chrome. Nested accents are jobs, not mascots.** A section can contain orange ask / red stop / blue info, or a list that cycles. Sparingly. **Never purple as its own thing** — last in a 5-item set only. See **Accent restraint**.
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

  /* ---- Jobs. Default chrome is green. Do not spray department mascots. ---- */
  --role-chrome: var(--clr-green);
  --role-chrome-bg: var(--clr-green-bg);
  --role-yes: var(--clr-green);          /* merge, proceed — nested in green chrome is fine */
  --role-no: var(--clr-red);             /* stop, skip — nested, not a section theme */
  --role-ask: var(--clr-orange);         /* question — nested */
  --role-info: var(--clr-blue);          /* detect/note — nested. purple is not a role. */

  /* ---- Type ---- */
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-icons: 'Material Symbols Outlined', sans-serif;

  /* ---- Spacing (1rem = 16px) ---- */
  --gap-xxs: .25rem; --gap-xs: .5rem; --gap-s: 1rem; --gap: 1.5rem;
  --gap-m: 3rem; --gap-l: 3.75rem; --gap-xl: 7.5rem; --gap-xxl: 15rem;

  /* ---- Radii ---- */
  --radius-sm: 4px;     /* tags */
  --radius: 8px;        /* every boxed thing — cards, sections, callouts, panels */
  --radius-lg: 8px;     /* alias of --radius. not a bigger corner */
  --radius-pill: 120px; /* buttons */

  /* ---- Shadow ---- */
  --shadow-card: 0 2px 4px rgba(0,0,0,0.25);
}
```

```html
<link rel="icon" href="assets/RP-Mark-2026-Green.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

Copy `RP-Mark-2026-Green.svg` into the deliverable (or use `https://raw.githubusercontent.com/RPTechs/revpartners-design-system/main/assets/RP-Mark-2026-Green.svg`). Every generated HTML doc gets a favicon. Do not skip.

---

## Accent restraint

Chrome is green. Other colors may live **inside** a green section when they have a job. Purple is not a job.

- **Chrome** (header, nav, eyebrows, dashed dividers, primary buttons, repeating meta cards): Rally Green. Sibling sections of a spec usually stay green too — they don’t each get a mascot.
- **Nested accents, sparingly:** `--role-ask` orange, `--role-no` red, `--role-info` blue, `--role-yes` green. Callouts and table flags inside a green section are correct. Don’t restyle the section around them.
- **Lists** (steps, sibling cards): cycle **green → blue → orange → red**. Then restart, or reach for purple only if you truly need a fifth. A 3-step flow stops at orange.
- **Never purple as its own thing.** Not a section theme. Not a lone purple card. Not “this is Tech.” Last resort in a 5+ set only.
- **Departments are not themes.** Don’t paint Sales red.
- Mixing is wrong when two accents compete as chrome (green header + purple card + red card as equals). Mixing is right when green owns the section and orange/red/blue show up as ask/stop/info or as items 2–4 in a list.

Bad: a purple section. A purple card with nothing else in the set. Equal-weight green + purple + red chrome.

Good: green header, green chapters, orange “open question” callout, red “don’t” callout, blue “note,” a 1–2–3 flow in green/blue/orange. No purple.

---

## 3. Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero XL | Montserrat | 700 | 72–120px |
| H1 | Montserrat | 700 | ~48px (web is fluid clamp) |
| H2 | Montserrat | 700 | ~32px |
| H3 | Montserrat | 700 | ~28px |
| Eyebrow / category | Montserrat | 700 | ~15–18px · UPPERCASE · letter-spacing **0.5rem** · green (or list-item hue) |
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
- **8px** (`--radius`). Every boxed thing: cards, sections, callouts, step cards, “panels.” There is no inner/outer radius. `--radius-lg` is the same 8px — not a bigger corner.
- If two sibling boxes have different radii, you already failed.
- **`2px` border** — accent color OR `--clr-stroke` (10% ebony). Stronger: `--clr-stroke-2` (30%).
- Background: `--clr-bg-2` **or** `--clr-<hue>-bg` (20% tint). Border and fill share the same hue. Use `--clr-<hue>-light` only on a light ground when a pattern would show through. On dark, `--clr-<hue>-bg` or `--clr-<hue>-dark` — never `*-light`.
- Neutral cards: no shadow. Accent cards may use a soft tinted glow. **No** colored-left-border-only, **no** chip behind icons.

### Icons
- **Material Symbols Outlined** — not Rounded. Small icons: FILL 1, weight 300. No chip. Sit on the card.
- Color = green by default, or the list-item hue. Nested ask/stop/info may be orange/red/blue. Never purple as the card’s own color.
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
- Corners: tags 4px · boxes 8px · buttons pill · avatars round. No 16px “panel.”
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

- Primary: `assets/RevPartners-Logo-2026-Green.svg`. Mark: `assets/RP-Mark-2026-Green.svg` (favicon + tight spaces). White mark on green/dark bars. Need the word “RevPartners” without the lockup? Set it in Montserrat — don’t use a wordmark-only SVG.
- Dark covers: green wordmark + **white** “a Walker Sands company” line (`assets/RevPartners-Logo-2026-Green-on-Dark.svg`).
- Keep clear space; never recolor to a non-brand hue, stretch, or add effects. Do not use `RevPartners-Logo-Green.svg`, `RevPartners-Logo-Horizontal-Green.svg`, or `RP-Mark-Green.svg` — they’re gone.

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

Don't invent a fourth palette. Don't dump prose into empty letterhead (`docs/01`, `docs/02`). If you are in the design-system repo, **study `examples/` for vibe** (proportion, 8px/2px, nested accents), then design the layout this content needs. Two scoping docs should not be clones.

- Use the component recipes in this skill (cards, callouts, tables, diagrams, lists). Compose. Don’t pick one skeleton and fill it.
- Chrome: green header bar with **white mark**, ~1" margins, dashed green title divider, footer `RevPartners / Partner / Project Name` + the diagonal blue/yellow/red stripe.
- Headings default to River Bed. Optional green/blue/orange/red Heading 2–5 — rare, one hue, never a rainbow of section titles. Callout boxes keep their accent.
- Body is Inter. Footer names are plain text once filled in (no yellow highlighter).

---

## Handoff / static HTML

Leave-behinds are snapshots. **No On/Off live-status pills** on a download. Status on a static file is a rotting banana. If it can go stale, don’t render it as current.

Every generated HTML file includes:

```html
<link rel="icon" href="assets/RP-Mark-2026-Green.svg" type="image/svg+xml">
```

---

## 10. Quick checklist

- [ ] Background is off-white; page is neutral-dominant, accents sparse.
- [ ] Green chrome. Nested ask/stop/info ok. Lists stop at orange unless you need a 4th/5th. No purple as its own thing.
- [ ] Nested ask/stop/info don’t restyle the section. No equal-weight chrome mix. No purple section/card.
- [ ] Favicon is `RP-Mark-2026-Green.svg`.
- [ ] Every element uses a single accent hue (no mixing within one component).
- [ ] Tinted fills are `--clr-*-bg` (20% over the actual background). No `*-light` chips on dark. Opaque on dark = `*-dark`.
- [ ] Headings pass the swap test; no green headings; body is Inter 400; buttons are 700.
- [ ] Buttons are pills; boxes are 8px (`--radius`). No 16px panel leftover.
- [ ] Icons are Material Symbols **Outlined**, green (or list-item hue / semantic on neutrals).
- [ ] Diagram stems actually touch cards. No floating “fork.”
- [ ] Written docs: layout serves this content. Didn’t dump into letterhead. Vibe matches `examples/` if in the kit.
- [ ] No On/Off pills on static HTML.
- [ ] No serif, no monospace, no gradients on surfaces, no emoji in UI.
- [ ] Logo present, correct color, with clear space.

---

## ASSETS - SVG Logos

## Logomark
<svg width="180" height="164" viewBox="0 0 180 164" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 81.8218C0 127.005 36.6384 163.644 81.8218 163.644V0H0V81.8218Z" fill="var(--clr-primary)"></path><path d="M180 163.644C180 118.46 143.362 81.8218 98.1782 81.8218V163.644H180Z" fill="var(--clr-primary)"></path><path d="M139.099 81.8218C161.701 81.8218 180 63.5026 180 40.9208C180 18.339 161.681 0 139.099 0H98.198V81.8218H139.099Z" fill="var(--clr-primary)"></path></svg>

### Full logo
<img src="https://revpartners.io/hubfs/RP%20+%20WS%20Logo%20Horizontal%20-%20Green.svg" alt="RevPartners, a Walker Sands company">
