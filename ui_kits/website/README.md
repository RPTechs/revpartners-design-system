# RevPartners Website — UI Kit

## Overview
High-fidelity recreation of the `revpartners.io` marketing website. Based on Figma source from `/external-shared/Home/`, `/Components/components/HeaderMenu/`, and the full brand guidelines.

## Design Width
**1200px** — matches HubSpot `--max-width`

## Pages Included
| Page | Description |
|------|-------------|
| Home | Full homepage — hero, stats, services grid, pipeline diagram, CTA banner |
| Services | GTM services overview with service cards |
| HubSpot | HubSpot partnership page with hub breakdown |
| Pricing | 3-tier pricing cards |

## Components
| File | What's inside |
|------|--------------|
| `Header.jsx` | Top nav — logo, 5 links, Contact Us CTA pill |
| `Hero.jsx` | Hero section — headline, schematic background decoration, CTA |
| `Section.jsx` | TextImageSection, ServiceCard, StatCard, CTABanner, ServiceGrid, DiagramSection |
| `Footer.jsx` | Dark footer — logo, 3 link columns, legal |
| `index.html` | Interactive prototype — switch pages via bottom tab bar |

## Key Design Decisions (from Figma)
- Header: 95px tall, `#FDFDFD` bg, `1px solid rgba(36,39,58,0.1)` bottom border, `120px` side padding
- Hero: Mint bg (`rgba(23,180,81,0.08)`), schematic funnel diagram as decoration
- Buttons: `border-radius: 120px` pill, Inter Bold 16–18px
- Section padding: `80px 120px`
- Cards: `border-radius: 8px`, `border: 2px solid [accent]`, matching fill
- Service categories: Green=RevOps, Blue=Growth, Orange=HubSpot, Red=Sales, Purple=Tech

## Usage
Open `index.html` in a browser. Navigate pages with the tab bar at the bottom.

To use components in another file:
```html
<script type="text/babel" src="Header.jsx"></script>
<script type="text/babel" src="Hero.jsx"></script>
<!-- etc -->
```
Then use `<RPHeader />`, `<RPHero />`, `<ServiceCard />`, etc.
