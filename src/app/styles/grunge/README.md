# Grunge Typography

Grunge (or "deconstructed") typography came out of the late 1980s and 1990s: Cranbrook Academy's post-structuralist experiments, Emigre magazine's bitmap and hybrid fonts, Neville Brody's work for The Face and FUSE, and above all David Carson's art direction of Beach Culture and Ray Gun. Cheap photocopiers, early Macs and a skate/surf/alt-rock audience made it possible and wanted. Its argument is that type should be *expressive* before it is neutral: a page can shout, stutter and contradict itself, and the reader is expected to work for the meaning. Carson summed it up as "don't mistake legibility for communication."

## Key characteristics

- **Colliding typefaces**: condensed grotesques, hairline Didones, stencils, typewriters and hand lettering on the same spread, often inside a single headline.
- **Type as image**: words are cropped, sliced, stretched, mirrored, set vertically, overprinted and run off the edge of the page. Leading and tracking are pushed to extremes, from overlapping lines to letters spaced a word apart.
- **Analog distress**: photocopy grain, posterised greys, halftone dots, toner blotches, scratches, torn paper, masking tape and mis-registered ink.
- **Degraded photography**: photos are blown out, crushed to black, screened and taped in rather than presented cleanly.
- **Dirty, limited palette**: off-black and bone, a rusty mid-tone, and usually one loud, acid accent.
- **Fragments of order**: grids, crop marks, registration marks and page numbers survive as leftovers, so the chaos reads as deliberate.
- **A clean island**: the body copy is often the one calm, readable column, which makes the noise around it look intentional.

## How this redesign applies it

- **Cover as a paste-up**: "ATRIN" is set in Anton, cut into three mis-registered strips with a rust ink offset. "hojjat" is a Bodoni italic laid over it with multiply. Each word of the hero message uses a different voice: a glitch face on an acid-green block, a mirrored Didone "FAST," circled in marker, an eroded stencil "SCALABLE" running vertically off the page, and letter-spaced typewriter "WEBAPPS".
- **Photocopier treatment everywhere**: an SVG `feTurbulence` speckle covers the whole page, `#gr-rough` roughens the edges of the big type, `#gr-erode` eats holes into the stencil, and `#gr-xerox` posterises the project screenshots into four greys. The portrait is blown out and halftoned, then shown in the About section as a three-exposure contact sheet with one frame circled.
- **One legible column**: every body paragraph is Courier Prime at 16.5 to 18px on plain paper or ink. The About copy and project descriptions sit on torn-edge scraps (deterministic `clip-path` polygons) so they belong to the collage while staying easy to read.
- **Analog UI**: nav items and social links are torn masking tape, tech stacks are Dymo label strips, "Visit website" is a highlighter-and-marker scrawl, and projects are split by a "✂ - - -" cut line. Hovering a project photo brings back its colour.
- **The Dingbats joke**: in 1994 Carson set a Bryan Ferry interview he found boring entirely in Zapf Dingbats. The "Too boring? Set it in Dingbats" button (`aria-pressed`) re-encodes the About text through the real ZapfDingbats character mapping. Screen readers still get the original text.
- **Restrained motion**: the only animation is a stepped glitch on "VIBRANT," and a tech-stack ticker taped across the footer. Both stop under `prefers-reduced-motion`.

## Learn more

- [David Carson Design](https://www.davidcarsondesign.com/): Carson's own portfolio, with Ray Gun spreads and later work.
- [David Carson: Design and discovery (TED)](https://www.ted.com/talks/david_carson_design_and_discovery): Carson talks through his approach, including emotion over legibility.
- [Ray Gun (magazine), Wikipedia](https://en.wikipedia.org/wiki/Ray_Gun_(magazine)): the history of the magazine and its influence, including the Zapf Dingbats interview.
- [Emigre Magazine archive](https://www.emigre.com/Magazine): Licko and VanderLans' magazine, where much of this typography was designed and argued over.
- [Cult of the Ugly, Steven Heller (Eye)](https://www.eyemagazine.com/feature/article/cult-of-the-ugly): the famous 1993 critique that started the legibility wars.
- [Neville Brody, Wikipedia](https://en.wikipedia.org/wiki/Neville_Brody): The Face, Arena and FUSE, the British side of the movement.
- [Katherine McCoy, Wikipedia](https://en.wikipedia.org/wiki/Katherine_McCoy): Cranbrook's deconstructivist program, where the theory behind the style took shape.
