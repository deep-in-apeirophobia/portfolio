# Psychedelic Poster Art

Psychedelic poster art came out of San Francisco between about 1966 and 1970. Promoters Bill Graham (Fillmore Auditorium) and Chet Helms (Family Dog / Avalon Ballroom) ordered a new poster every week, and artists such as Wes Wilson, Victor Moscoso, Bonnie MacLean, Stanley Mouse & Alton Kelley and Rick Griffin used them to try things out. They took the curves and ornament of Art Nouveau (Alphonse Mucha, Vienna Secession lettering) and pushed them through LSD culture: type melts until it is almost unreadable, and complementary colours vibrate against each other. The poster was meant to be read slowly, and taking time to decode it was part of the experience. The look spread into Peter Max, Milton Glaser's 1966 Dylan poster and the Beatles' *Yellow Submarine* (1968).

## Key characteristics

- **Lettering that fills a shape.** Wes Wilson's letters swell, stretch and bend until the words fill a balloon, a flame or a body. The shape matters more than even letter spacing, and white space is something to get rid of.
- **Vibrating complementary colour.** Moscoso used his Josef Albers training to put red on green, blue on orange and magenta on lime at equal brightness, so the edges seem to shimmer and move.
- **Art Nouveau ornament, recycled.** Whiplash curves, spirals, Mucha-style arched frames and halos, dense decorative borders, flowers and paisley.
- **Concentric and radial patterns.** Sunbursts, target rings and spirals that draw the eye to the centre and make the page feel like it is spinning.
- **Liquid light shows.** Blobs of coloured oil projected in the ballrooms. On posters they became soft, morphing, organic shapes.
- **Concert-bill layout.** A "presents" line at the top, the headliner huge in the middle, supporting acts, dates and ticket outlets below, all inside one ornamented frame.
- **Hand-drawn, unrefined forms.** Nothing is geometric or mechanically perfect. Outlines wobble and shadows are thick offset blocks.

## How this redesign applies it

- **The hero is a Fillmore-style bill:** "The Portfolio Ballroom presents" → **ATRIN** on an arch and **HOJJAT** in a bowl (SVG `textPath` with `textLength`/`lengthAdjust` stretching the glyphs), so the name fills a lens shape. The supporting act is "with Full-Stack & Friends", and the pitch sits on a blue ribbon. An `feTurbulence` + `feDisplacementMap` filter makes all the display type look hand-drawn and melting.
- **Vibrating pairs throughout:** green lettering on a red sunburst in the hero, orange on blue in the pitch, and each project card ("Night One" to "Night Five") has its own complementary pair: red/green, blue/orange, magenta/lime, orange/blue, violet/yellow. The contact section is a red/green sunburst.
- **Wes Wilson "balloon" headings:** a small `Balloon` component scales each letter vertically along a sine curve, so section titles swell in the middle and pinch at the ends. Screen readers still get the plain text.
- **Art Nouveau ornament:** SVG whiplash corners frame the hero and About panel, the portrait sits in a Mucha tombstone arch in front of a spinning halo, and the hero medallion has a scalloped flower edge with circular `textPath` billing. The page also uses daisies and paisley.
- **Liquid light and motion:** blurred, blend-mode blobs drift and morph behind the hero, the sunbursts rotate slowly, and "Full-Stack & Friends" uses Kablammo's variable `MORF` axis so its letters melt and re-form. All of this stops under `prefers-reduced-motion`.
- **Readable panels:** the originals were deliberately hard to read. Here body copy sits on calm cream panels in Fraunces (SOFT/WONK axes, Cooper Black in spirit), with dark ink text for contrast. Shrikhand, Kablammo and Sniglet are used only for display text and labels.

## Learn more

- [Psychedelic art (Wikipedia)](https://en.wikipedia.org/wiki/Psychedelic_art): an overview of the movement, its roots in Art Nouveau and Op Art, and the San Francisco poster scene.
- [Wes Wilson (Wikipedia)](https://en.wikipedia.org/wiki/Wes_Wilson): the inventor of the melting, shape-filling psychedelic lettering, and his Fillmore work.
- [Victor Moscoso (Wikipedia)](https://en.wikipedia.org/wiki/Victor_Moscoso): the Yale/Albers-trained artist behind vibrating complementary colour on Avalon and Neon Rose posters.
- [Stanley Mouse (Wikipedia)](https://en.wikipedia.org/wiki/Stanley_Mouse): with Alton Kelley, created the Grateful Dead "skull and roses" and many Family Dog posters that reused Victorian and Nouveau imagery.
- [Family Dog Productions (Wikipedia)](https://en.wikipedia.org/wiki/Family_Dog_Productions): the Avalon Ballroom promoter whose numbered poster series defined the genre.
- [Alphonse Mucha (Wikipedia)](https://en.wikipedia.org/wiki/Alphonse_Mucha): the Art Nouveau source for the halos, arches and whiplash ornament the 1960s artists borrowed.
- [Wolfgang's poster archive](https://www.wolfgangs.com/posters/): a large browsable collection of original Fillmore and Avalon concert posters for close study.
