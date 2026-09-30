# Bento Grid

Bento Grid is named after the Japanese bento box, where each dish gets its own compartment. The layout puts content into a tidy grid of rounded tiles of different sizes. Apple made it famous in its WWDC and iPhone keynote "at a glance" slides around 2022–23, and SaaS landing pages from Linear, Vercel and Raycast quickly adopted it. The idea is that each tile holds one idea: a number, a photo, a small chart or a call to action. Spans and scale create the hierarchy, so a visitor can scan the whole story in a few seconds.

## Key characteristics

- **A strict grid with mixed spans.** Tiles are usually built on 4 or 6 columns and span 1×1, 2×1, 2×2 or tall 1×2. The gap stays the same everywhere, so the tiles lock together like a puzzle.
- **One idea per tile.** Each tile follows the same recipe: a small label, one large number or headline, and one supporting line. If a tile needs two headlines, it becomes two tiles.
- **Large rounded corners and quiet depth.** The radius is usually 20–28px. Tiles use 1px hairline borders, a faint top highlight, very subtle gradients and noise, and rarely a heavy drop shadow.
- **A neutral field with one accent.** The base is near-black or off-white. A single brand colour is kept for data, glows and the one tile that should be filled.
- **Product-UI sans-serif type.** Faces like SF Pro, Inter and Geist, with tight negative tracking on big display numbers. A monospace face often sets the small labels.
- **Tiles as mini visuals.** Tiles hold sparklines, bar meters, dot matrices, icon clouds and photos that fill the tile edge to edge, so the grid reads as a dashboard of the product.
- **Micro-interactions.** Tiles lift on hover, images zoom slightly, and a cursor spotlight or border glow (a Linear/Vercel signature) follows the pointer. On small screens the grid re-flows to one or two columns.

## How this redesign applies it

- **The hero is a bento.** A 2×2 headline tile, a tall photo tile, two 1×1 stat tiles (~1M users, 25k generations a week), a 2×1 tech "app icon" tile, a collaboration tile with a dotted globe, and one accent-filled "Let's talk" CTA tile. All of it fits in the first 1440×900 viewport.
- **Label → number → supporting line.** Every stat tile uses a mono uppercase label, a Geist number at −0.05em tracking, and one muted line. The About tiles use Apple's two-tone copy: the paragraph is grey and the key phrase is lifted to white.
- **One accent, used sparingly.** On a #08080A background, a single violet (#8B7CFF) appears in the headline gradient, the charts, the dot matrix, the globe arcs, the CTA tile and the hover spotlight. Everything else is greyscale.
- **Projects as large tiles.** Logo Diffusion gets a full-width featured tile with a framed screenshot, mini-stats and chips. The other four projects are 2-column tiles with an inset screenshot window. A 1×1 count tile and a 3×1 bar chart tile show real stack-frequency data computed from the project list.
- **Depth and interaction.** Hairline borders, an inset top highlight, a faint SVG noise texture, and a pointer-tracked radial spotlight (`Spotlight.tsx`). Tiles lift and images scale on hover. The hero tiles rise in with a CSS animation that ends visible. Everything is disabled under `prefers-reduced-motion`.
- **Responsive re-flow.** The grid goes from 4 to 2 columns at 1024px. On phones, the 1×1 tiles stay paired (photo beside the stats, GitHub beside LinkedIn) while wide tiles span the full width.

## Learn more

- [Bento Grids](https://bentogrids.com/): a curated gallery of real bento layouts from product sites and keynotes, and the go-to reference for the trend.
- [Apple iPhone product pages](https://www.apple.com/iphone/): the canonical source; Apple's "at a glance" feature grids set the tile recipe and tone.
- [How we redesigned the Linear UI (Linear)](https://linear.app/now/how-we-redesigned-the-linear-ui): Linear explains its dark neutral palette, hairline depth and restrained accent, the visual language behind SaaS bentos.
- [Geist font (Vercel)](https://vercel.com/font): the typeface used here, with notes on why a neutral grotesk suits dense product UI.
- [Apple Human Interface Guidelines: Layout](https://developer.apple.com/design/human-interface-guidelines/layout): the grouping, spacing and hierarchy principles that bento tiles depend on.
- [A Complete Guide to CSS Grid (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/): how to build spans, auto-placement and dense packing in practice.
- [Bento (Wikipedia)](https://en.wikipedia.org/wiki/Bento): the compartmentalised lunch box the style is named after.
