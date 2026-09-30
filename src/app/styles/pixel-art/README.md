# Pixel Art

Pixel art is the look of 8-bit and 16-bit video games: the NES, Game Boy, SNES and home computers of the 1980s and early 90s.
Hardware limits of the time (a few hundred pixels across, a handful of colours per sprite, 8x8 tiles) forced artists to place
every pixel by hand. The limits became the aesthetic. Today it survives in indie games, fantasy consoles like PICO-8 and "retro"
web UIs, and the rule is still the same: a visible grid, a fixed palette and nothing smoothed over.

## Key characteristics

- **A visible pixel grid.** Every shape snaps to one enlarged "art pixel" (here 1 art pixel = 4 CSS px). No sub-pixel positions, no rotation, no border-radius.
- **A limited, fixed palette.** A small palette such as the NES's ~54 colours or PICO-8's 16, used flat. Shading comes from choosing a darker swatch, not from blending.
- **Dithering instead of gradients.** Colour transitions are built from checkerboard or ordered patterns (25% / 50% / 75%) between two palette colours.
- **Bitmap typography.** Fonts are built from the same grid as the art (8x8 arcade glyphs for titles, terminal-style faces for longer text), all caps for UI labels.
- **Hard edges and hard shadows.** Outlines are 1 art pixel of black. Depth comes from offset "drop" copies, bevels (light top-left, dark bottom-right) and stepped corners. Nothing is blurred.
- **Game UI metaphors.** Title screens, HUDs, RPG dialogue windows, stage-select screens, inventories, ▶ menu cursors, "PRESS START" and "CONTINUE?".
- **Stepped motion.** Animations jump between a few frames (`steps()`), such as a two-frame idle bob or a blinking cursor. Nothing is eased.

## How this redesign applies it

- **Palette and grid:** every colour comes from the PICO-8 16-colour palette (defined once as CSS variables), and all spacing, borders and offsets are multiples of 4px. Sprites (the player, bushes, chest, "?" block, save crystal and the 8 item icons) are inline SVGs generated from text maps and rendered with `shape-rendering="crispEdges"`.
- **Dithered sky:** the title screen's night-to-dusk sky is made of three flat bands joined by 25/50/75% checkerboard dither strips (hard-stop `conic-gradient` tiles), not a gradient. The ground and castle-brick floors are tiled 8x8 patterns.
- **Type:** *Press Start 2P* (an 8x8 arcade font) for the title, headings, labels and buttons, with *VT323* (a DEC terminal face) for paragraphs so longer copy stays readable.
- **Pixel UI chrome:** RPG windows get notched corners from 12 stacked hard `box-shadow`s. Buttons get NES-style bevels and press down 4px on `:active`. Chips have stepped corners via `clip-path`, and menu cursors are 3x5-pixel triangles drawn with box-shadows.
- **Game structure:** the hero is a title screen with PRESS START / STAGE SELECT / CONTINUE, About is a character status screen with a dialogue box, projects are "Stage 2-n" level cards with their stack as collected items, and contact is a "CONTINUE?" save point with a countdown and a tech inventory.
- **Pixelated images:** screenshots are requested from `next/image` at 120px wide and scaled up with `image-rendering: pixelated`, and the portrait is fetched at 48px. They read as low-res game assets but stay recognisable. All stepped animations switch off under `prefers-reduced-motion`.

## Learn more

- [Pixel art (Wikipedia)](https://en.wikipedia.org/wiki/Pixel_art): history of the form from early computers to modern indie games, with terminology.
- [Lospec pixel art tutorials](https://lospec.com/pixel-art-tutorials): a large, curated index of tutorials on outlines, shading, dithering and animation.
- [PICO-8 palette on Lospec](https://lospec.com/palette-list/pico-8): the 16-colour palette used here, with example art made from it.
- [PICO-8 by Lexaloffle](https://www.lexaloffle.com/pico-8.php): the "fantasy console" whose deliberate limits (128x128, 16 colours) show why constraints drive the style.
- [Slynyrd Pixelblog catalogue](https://www.slynyrd.com/pixelblog-catalogue): long-running illustrated lessons on sprites, tiles, palettes and scenes.
- [Ordered dithering (Wikipedia)](https://en.wikipedia.org/wiki/Ordered_dithering): the Bayer-matrix technique behind the checkerboard transitions.
- [NES.css](https://nostalgic-css.github.io/NES.css/): a CSS framework for NES-style UI. Useful for seeing how pixel borders and buttons are built with `box-shadow`.
