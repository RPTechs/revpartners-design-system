# RevPartners Design System

**Clone this repo. Then stop thinking.**

```
https://github.com/RPTechs/revpartners-design-system
```

Coworker prompt (paste into Claude / Cowork / Cursor):

> Clone https://github.com/RPTechs/revpartners-design-system and follow AGENTS.md.

Agents: read `AGENTS.md` first (it will check `VERSION` against GitHub and pull if you're stale), then `DESIGN.md`.

This kit is for **slides, PDFs, Google Docs, mocks, and other non-HubSpot work**. The live website (`revpartners.io`) and HubSpot theme CSS are the brand source for web. Tokens in this repo are aligned to that theme. Slide chrome (footer stripe, title+divider) is slide-specific — see **SLIDE DECKS** below. Document chrome is in **GOOGLE DOCS**. Do not use a slide rule on a web UI or a web card recipe on a 16:9 deck.

---

## Company Overview

**RevPartners** is a GTM (Go-to-Market) engineering consultancy that delivers **Revenue Operations through HubSpot**. Their tagline territory: "Revenue Doesn't Matter" — No Business Ever. They help companies architect repeatable, measurable revenue engines using HubSpot's suite of tools.

**Core services:**
- Revenue Operations (RevOps) strategy and implementation
- HubSpot onboarding, migration, and custom configuration
- Sales, Marketing, and Service Hub implementation
- Revenue Performance Model (RPM) — a proprietary framework
- ROAAS (RevOps-as-a-Service)

**Products / Surfaces represented in this system:**
- `revpartners.io` — Marketing website (1440px wide, white background)
- Slide decks — 1920×1080 Google Slides / PDF presentations
- PDF whitepapers — multi-page branded documents
- Social / promotional graphics — LinkedIn, email, ads
- RPX — Revenue Performance community/platform
- Blog thumbnails — branded content imagery

---

## Sources

- **Figma file:** RevPartners Brand — Partial file saved 5-4-2026 (59 pages, 2343 frames)  
  Figma link: not publicly accessible; file was mounted as virtual filesystem  
- **Uploaded brand assets:**
  - `uploads/RevPartners Brand Guidelines - Arc - 2026-05-May 11꞉05 AM꞉46@2x.png` — Base colors page
  - `uploads/RevPartners Brand Guidelines - Arc - 2026-05-May 11꞉06 AM꞉30@2x.png` — Accent colors page
  - `uploads/RevPartners Logo SVG Horizontal - Green.svg` — Horizontal logo (green)
  - `uploads/RP Mark - Green.svg` — Logomark only (green)

---

## File Index

```
AGENTS.md                        ← Start here (update check + rules)
VERSION                          ← Bumped when brand tokens/rules change
DESIGN.md                        ← Portable tokens + component recipes
README.md                        ← You are here
SKILL.md                         ← Claude skill wrapper
colors_and_type.css              ← Full CSS custom properties
uploads/                         ← Logos
illustrations/                   ← SVG library (Backgrounds, Cubes, Drawings, …)
slides/                          ← 16:9 specimens
docs/                            ← Google Doc specimens (01 branded, 02 working)
fonts/                           ← Montserrat, Inter, Material Symbols (local)
preview/                         ← Token/component HTML specimens
ui_kits/website/                 ← Website UI kit (reference, not HubSpot modules)
```

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Bold and direct.** RevPartners speaks with conviction — not corporate fluff.
- **First-person we / second-person you.** "We help you build..." not "RevPartners helps clients..."
- **Self-aware wit.** Headlines use irony and humor: *"Revenue Doesn't Matter" — No Business Ever*
- **Technical confidence.** They aren't afraid to use jargon: bowtie model, pipeline velocity, SQL, MQL, CAC.
- **No passive voice.** Everything is active: "We architect. We implement. We deliver."

### Casing
- **Title Case** for headings and section headers
- **Sentence case** for body copy
- **ALL CAPS** occasionally for callout labels / category tags (with wide letter-spacing: 0.4em)
- No excessive capitalization in body text

### Copy examples from Figma:
- "Revenue Operations Delivered Through HubSpot"
- "Onboarding Faster Than a Pit Crew"
- "We aren't afraid to zoom in and get technical"
- "Emphasis on simplicity and white space. Don't make the layout too busy."
- "Mine does! ✋" (rare emoji use — conversational moments only)

### Emoji Usage
- Very rare — used only in conversational, playful micro-copy (CTAs, social)
- Never in formal headers, PDF content, or slide titles
- Example: "Mine does! ✋"

### Punctuation & Style
- Em dashes for dramatic pauses — used frequently
- Quotation marks for ironic emphasis
- Oxford comma used
- URLs lowercase: revpartners.io

---

## VISUAL FOUNDATIONS

### Color Philosophy
- **80–90% neutral, 10–20% accent color**
- **One accent hue per element.** Never mix accent colors within a single card/component (no blue border with green icons). When a set needs variety (pipeline steps, stat rows), give each *item* one hue and cycle across items: Green → Blue → Orange → Red → Purple.
- **No dark-background cards.** Dark (`Ebony Clay`) is for full-width bands/sections and the hero — not for individual cards. Cards stay light.
- Avoid pure black (`#000000`) for text — use Ebony Clay (`#24273A`) or River Bed (`#434761`)

### Palette (matches site CSS vars)
Neutrals (light→dark): Off White `#FDFDFD` · Platinum `#F7F7FD` · Mercury `#F3F3F4` · Iron `#DDDEE2` · Steel `#A1A2A7` · Carbon `#555970` · River Bed `#434761` · Ebony Clay `#24273A`.
Accents: Rally Green `#17B451` (primary/RevOps) · Fast Blue `#329DFF` (Growth) · Tango `#F7761E` (HubSpot) · Racecar Red `#FB3131` (Sales) · Ultra Purple `#8C32FF` (Tech).

### Accent backgrounds — two valid methods
Each accent has three surface treatments. For a tinted fill, use ONE of:
1. **20% opacity of the accent** — `--clr-<hue>-bg` (e.g. `--clr-green-bg: rgba(23,180,81,0.2)`). Transparent; composites over whatever is behind it.
2. **Opaque flatten** — the 20% tint sampled over the page background into a solid swatch: `--clr-<hue>-light` → Mint `#D1F0DC`, Sky `#CCE7FF`, Peach Vibes `#FEE4D5`, Coral `#FFD9D7`, Lavender `#E9D6FF`. Use when transparency is undesirable (overlapping elements, exports).
3. **Dark** — `--clr-<hue>-dark` for deep fills: Midnight Green `#22433E`, Indigo `#0F2F4D`, Burnt Orange `#7B3200`, Burnt Red `#8C0000`, Deep Purple `#35007A`.

### Backgrounds
- **Off White** `#FDFDFD` — primary page background
- **Mercury** `#F3F3F4` — subtle section alt background
- White `#FFFFFF` — cards, surfaces
- No textures, gradients, or noise on backgrounds
- Dark background: **Ebony Clay** `#24273A` for inverted sections

### Typography System
- **Primary Display:** Montserrat — **Bold (700)** for ALL headings, slide titles, callout numbers, eyebrows, and step numerals. (Regular/Medium/SemiBold also available for supporting UI.)
  - Scale: 120px (hero XL), 64px (hero), 48px (h1), 32px (h2), 28px (h3), 24px (h4), 20px (h5)
  - All-caps variant: 20px + 0.4em letter-spacing (section category labels)
- **Body / UI:** Inter — Regular (400), Medium (500), Bold (700)
  - **Buttons, fancy links, and `<strong>` are 700.** Body copy stays 400.
  - Body text: 16–18px, line-height 1.4
  - Small/caption: 12px, 14px
- **No serif, no monospace.** Playfair Display, Source Sans, and JetBrains Mono are all dropped — do not use them.
- **Google Fonts:** Montserrat + Inter both load from Google Fonts (no local files bundled — see Caveats).

### Spacing Scale (rem-based, 1rem = 16px)
- `--gap-xs`: 8px (0.5rem)
- `--gap`: 24px (1.5rem) — **Base gap**
- `--gap-s`: 16px (1rem)
- `--gap-m`: 48px (3rem)
- `--gap-l`: 60px (3.75rem)
- `--gap-xl`: 120px (7.5rem)

### Layout
- Page width: 1200px (website content), 1920px (slides)
- Side padding: 120px on slides, 60–120px on website
- Grid: flex-based with explicit gap tokens
- Use rems for all dimensions, never absolute px in production

### Corner Radii
- **Small elements / tags:** 4–5px
- **Cards:** 8px (`--corner`). Wrapping panels: 16px (`--corner-l`).
- **Buttons:** 120px (fully pill-shaped)
- **Circles / avatars:** 999px / 50%

### Shadows
- Cards: `0px 2px 4px 0px rgba(0,0,0,0.25)` (subtle lift)
- Elevated surfaces: `0px 4px 4px 0px rgba(0,0,0,0.25)`
- No heavy drop shadows — keep them subtle

### Borders & Lines
- **Structural lines:** 1px solid, color `rgba(36,39,58,0.1)` (10% Ebony Clay)
- **Dashed emphasis:** `2px dashed rgb(23,180,81)` (green dashed for callouts/annotations)
- **Component borders:** `2px solid` in accent color OR `--clr-stroke`
- **Fancy-link arrow / dashed step connectors:** neutral or accent, 2px
- Thin, consistent — never heavy outlines

### Buttons
- **Shape:** Fully pill/rounded — `border-radius: 120px`
- **Font:** Inter Bold (700)
- **Primary (filled):** Green fill `#17B451`, white text
  - Default: padding `15px 40px`
  - Small: padding `8px 16px`
- **Outlined:** transparent/white fill, `2px solid #17B451`, green text
- **Hover state:** 20% background of button color (e.g. `rgba(23,180,81,0.2)`) + border
- **Press/click state:** Scale to 98% (`transform: scale(0.98)`)
- **Outlined hover:** border goes dashed.
- **Fancy text link:** Inter Bold (700), green, trailing Material icon `arrow_forward` (not an Inter `→` character).

### Cards
- `border-radius: 8px` (items) / `16px` (wrapping panel)
- **`2px` border** — either an **accent color** or the neutral **`--clr-stroke`** (`rgba(36,39,58,0.10)`). Stronger: `--clr-stroke-2` (30%).
- **Background** is **`--clr-bg-2`** (neutral) OR the opaque accent (`--clr-<hue>-light`) for accent cards. Border and fill share the same accent hue.
- **No colored-left-border-only cards. Neutral cards: no shadow. Accent cards may use a soft tinted glow. No background chip behind icons.**
- Icons: Material Symbols **Outlined**.

### Step Sequences
- Numbered steps use **solid filled circles** — no border, white numeral inside (Montserrat Bold).
- Circle colors cycle through the accent sequence: **green → blue → orange → red → purple**, then repeat.
- Circles are joined by **dashed connector lines** (`2px dashed`, neutral).

### Illustrations & Schematics
- **Central visual motif:** Schematic / blueprint / technical diagram style
- Thin line drawings (1–2px stroke), never filled solid shapes
- Colors: neutral gray lines OR single accent color at 50% opacity
- Downloaded from internet vectors imported into Figma, stroked consistently
- No decorative blob shapes, abstract art, or stock illustrations
- Examples: engine drawings, cube stacks, pipeline diagrams, funnel diagrams

#### Illustration library (`Illustrations/`)
A library of ready-made brand SVGs lives in `Illustrations/`, organized by type:
- **Backgrounds/** — full-bleed isometric grids & honeycomb tiles (gray + per-accent, light/dark).
- **Cubes/** — dashed, outlined, and clustered isometric cubes in every accent.
- **Drawings/** — the signature technical/schematic line art (engines, turbofans, pistons, funnels, gearboxes, circuit boards, etc.).
- **Multi-Color/** — RPM, data-model, Gantt, and maturity-journey infographics.
- **Revenue Performance Model/** — RPM logo + recurring/non-recurring/usage marks.
- **Website Graphics/** — problem-statement spot graphics used on marketing pages.

**How to use them (background-element pattern):**
- **Sparingly.** One illustration per surface at most — they set a mood, they aren't the content. Many surfaces use none.
- **As a background element in empty areas**, never over text or interactive content. Anchor to a corner or edge where there's whitespace (typically the side opposite the headline).
- **Oversized and cropped** — scale large so the illustration bleeds off one or more edges of the frame; it's a partial, cropped motif, not a centered, fully-contained graphic.
- **Low contrast / receding.** Keep it subtle so copy stays dominant: the gray line-art versions, or a single accent tinted well down (≈ line art at low opacity). Never let it compete with the foreground.
- **Match the accent** to the surface's service color when one applies (green RevOps · blue Growth · orange HubSpot · red Sales · purple Tech); otherwise use the gray variant.
- Full-bleed `Backgrounds/` grids are the exception — those tile edge-to-edge behind a whole section rather than sitting cropped in a corner.

Copy the specific SVGs a design needs into `assets/` (or reference from `Illustrations/`); don't bulk-copy the whole library into a deliverable.

### Animation / Interaction
- No heavy animations — clean, purposeful transitions
- Hover: background color at 20% opacity appears
- Click: 95% scale transform
- No bouncy or springy animations — minimal easing

### Imagery / Photography
- Technical diagrams preferred over photography
- When photos used: professional headshots (team/testimonials)
- Color treatment: no filters, natural color
- No grain effects, no heavy color grading

### Iconography — see ICONOGRAPHY section below

---

## ICONOGRAPHY

### System Used
- **Google Material Symbols — Outlined.** Small icons: FILL 1, weight 300. This matches the live site.
- No custom icon font is built into the brand.

### Style Rules
- Small UI icons: weight **300**, filled. Don't go thinner on 20/24px icons.
- Functional only — never decorative.
- **Icons sit directly on the surface** in their accent color — no circular chip / colored background behind them.
- Color maps to service area: Green RevOps · Blue Growth · Orange HubSpot · Red Sales · Purple Tech.

### CDN
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<!-- small icons: font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24; -->
```

### What to Avoid
- Material Symbols Rounded (the site is Outlined)
- Background chips/dots behind icons
- Over-detailed illustrations or abstract blobs

### Assets
- `uploads/RevPartners-Logo-Horizontal-Green.svg` — horizontal wordmark
- `uploads/RP-Mark-Green.svg` — logomark / favicon

---

## SLIDE DECKS

Slide chrome source: **[MASTER] RP Brand Template Slide Deck – 2026** (Google Slides). Agents can't read that doc reliably — use `slides/` in this repo instead. Slide-specific rules (footer stripe, title+divider, vertical centering) apply to **decks only**. Web/apps follow `DESIGN.md` (aligned to the HubSpot theme).

Specimen recreations live in `slides/` (each a 1280×720 `@dsCard`, group **Slides**), sharing `slides/frame.css`:
- `01-cover` (dark, main) · `01-cover-alt` (light) · `02-section-divider` (Signpost) · `03-agenda` · `04-normal-text` · `05-key-takeaway` · `06-big-statement` · `07-three-cards` · `08-lifecycle-stages` (chevron funnel) · `09-table`.

### Slide layout system (master layouts)
Empty · Signpost (section divider, giant faint number) · Basic Title · Title + two columns · Section title & description · 3 Cards. Right-click a slide → *Apply layout*.

### Shared slide chrome
- **Canvas:** 1280×720 (16:9). Content slides: Off-White `#FDFDFD`. Cover: Ebony Clay `#24273A`. Content padding `3rem`.
- **Title:** top-left, Montserrat — **mix Bold + Regular in one line** for emphasis. Either part can carry the bold — put weight on whatever word matters (e.g. Normal Text *Slide*, or *What are* **Lifecycle Stages?**). Dark, never green.
- **Divider:** directly under the title, a **green dashed line with a filled green circle end cap**.
- **Content placement:** the title + divider stay pinned at the top; **everything below the divider is vertically centered** in the remaining white space (use the `.stage` wrapper). Exception: a short intro/lead paragraph sits *directly under the divider* (not centered) — only the primary content block (cards, table, funnel, list) centers below it.
- **Footer:** **3-color stripe (blue · yellow · red)**, flush to the very bottom edge, full-bleed, no gap. Thin (`6px`) on content slides; **thick (`18px`) on the cover**. **No logo, no page number by default** — keep it clean.
- **Breathing room over density.** Generous white space; let the centered content float. Don't fill the slide edge-to-edge.

### Slide type rules
- **Fonts on slides:** Montserrat headings (mix Bold + Regular for emphasis); Inter Regular body. No monospace.
- **Headings:** dark (Ebony Clay), NOT green. Emphasize with weight — green headings "blend in too much." A single accent word inside a dark heading is fine.
- **Bullets:** small solid neutral dots (River Bed), not icons or checkmarks, unless the list is explicitly a checklist.
- **One accent per element**, and never mix accents within a single block (a step group cycles accents across *items*, not within one). Grey + one accent is fine.
- **Colored blocks:** rounded rect, 2px accent border, fill = same accent at 20% opacity (the deck's exact recipe = our `--clr-<hue>-bg`).
- **Connectors:** elbow, dashed, 1–2px.
- **Corners:** tight rounded for boxes; pill only for buttons/CTAs (sparingly); never oversized or mixed radii.
- **Icons:** Google Material Symbols, **filled**, exported at 120px, colored with a brand hex, then placed as PNG.
- **Illustrations:** minimal isometric "IKEA-manual / repair-manual" technical line drawings — white fill, light-grey **thick** lines, no fill, low complexity (generated via prompt; see deck slides 46–50). We do not hand-draw these — placeholder until real assets are supplied.
- **60/30/10 color rule:** neutral background & main elements / secondary elements, text, borders / CTAs & accent touches.

---

## GOOGLE DOCS

Two templates. Purpose picks the file:

- `docs/01-branded.html` — general branded doc (title, heading ladder, alert boxes, styled table).
- `docs/02-working.html` — client/partner deliverable (BLUF, comparison, process, notes).

Chrome (both): green header + white mark, River Bed headings, Inter body, footer `RevPartners / …` + diagonal blue/yellow/red stripe. Colored Heading 2–5 styles exist in the live Google Doc as **optional** — default to dark headings.

Google's own exports (plus PDF/zip) sit in `docs/[Template] RP Branded Doc/` and `docs/[Template] RP Branded Doc 2/`. Copy the HTML specimens.

---

## Font Notes / Substitutions

Local files in `fonts/` (variable TTFs). Specimens load `fonts/fonts.css`. Google Fonts CDN is a fallback if the clone is incomplete:

- **Montserrat** — headings, Bold 700 / Regular 400
- **Inter** — body 400; buttons/strong 700
- **Material Symbols Outlined** — `fonts/Material Symbols/Material_Symbols_Outlined/` (not Rounded, not Sharp)

Dropped from the system (do not use): Playfair Display, Source Sans, and JetBrains Mono. No monospace.
