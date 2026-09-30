# Synthwave / Outrun

Synthwave (also called outrun or retrowave) is a late-2000s music and visual movement that looks back at the 1980s through a glowing, idealised lens. Its imagery borrows from 80s arcade cabinets (Sega's *Out Run*), VHS box art, *Tron* and neon-lit action films, and was set down by artists like Kavinsky, the *Drive* (2011) soundtrack and *Far Cry 3: Blood Dragon*. The approach is nostalgia for a future that never happened: it's always night, the sun is always setting, and the road never ends.

## Key characteristics

- **Endless-sunset palette:** a deep indigo-to-magenta night sky, a sun with a yellow-orange-pink gradient cut by horizontal slats, and neon accents in hot pink, cyan and violet.
- **Perspective grid floor:** a glowing wireframe plane that recedes to a bright horizon line, often with wireframe mountains. It is the genre's signature image, taken from early computer graphics.
- **Chrome and neon type:** wide geometric display faces filled with a metallic gradient that has a hard "horizon" through the letters, paired with a hand-lettered brush script that glows like a neon tube.
- **Layered glow:** stacked `text-shadow` and `box-shadow` layers (white core, coloured halo, wide soft bloom) stand in for light, not ink.
- **Analog texture:** CRT scanlines, vignetting, chromatic-aberration fringes and VCR on-screen displays (`PLAY ▶`, `SP`, `● REC`) set in pixel-ish monospace.
- **Motion:** the grid scrolls toward the viewer as if you're driving at night, and neon signs flicker from time to time.
- **Album-cover composition:** everything is centred and symmetrical around the sun, with type stacked in the middle of the frame.

## How this redesign applies it

- The hero is built as an album cover. The sky is a CSS gradient, the sun's slats come from a `mask-image` stop list, the mountains are an inline SVG with a neon stroke, and the floor is a `rotateX(72deg)` grid inside a `perspective` container. The grid scrolls with a `background-position` animation that stops under `prefers-reduced-motion`.
- The name is set in **Orbitron 900**, skewed, with a `background-clip: text` chrome gradient and stacked `drop-shadow`s for the extruded pink edge. The role is set in **Mr Dafoe**, a slanted neon script that overlaps the chrome and flickers.
- **VT323** covers all the VCR and tape microcopy: the on-screen display in the hero corners, "Track A1/A2/B1" section labels, chip labels and the Side A/B tape labels.
- Each project is a VHS tape. A coloured label strip carries striped sunset "rainbow" bars, and the screenshot sits in a rounded CRT bezel with scanlines, a vignette and a `▶ PLAY` overlay. Cards alternate between cyan and pink and swap sides as they go down the page.
- Body copy stays readable. It's set in **Exo 2** on solid dark panels (`rgba(16,4,38,0.92)`) with neon borders, so the glow sits around the text and never on it.
- Contact is "Let's ride into the night", set in **Monoton** neon-tube lettering. The page ends with a second, smaller sunset above a chrome-free footer and a `◀◀ All styles` rewind button.

## Learn more

- [Synthwave (Wikipedia)](https://en.wikipedia.org/wiki/Synthwave): origins, key artists and how the look grew out of the music.
- [Out Run (Wikipedia)](https://en.wikipedia.org/wiki/Out_Run): the 1986 Sega arcade game behind the "outrun" name and its sunset-highway imagery.
- [Kavinsky (Wikipedia)](https://en.wikipedia.org/wiki/Kavinsky): the artist whose *Nightcall* and *OutRun* album art defined the look.
- [Drive (2011 film) (Wikipedia)](https://en.wikipedia.org/wiki/Drive_(2011_film)): the film that took the neon-script, night-driving mood mainstream.
- [Far Cry 3: Blood Dragon (Wikipedia)](https://en.wikipedia.org/wiki/Far_Cry_3:_Blood_Dragon): a complete, over-the-top example of the style: VHS, neon grids and chrome.
- [Tron (Wikipedia)](https://en.wikipedia.org/wiki/Tron): the 1982 film whose glowing wireframe grids are the visual source of the genre.
- [MDN: background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip): the CSS technique behind gradient-filled chrome lettering.
