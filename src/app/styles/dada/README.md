# Dada Collage

Dada started at the Cabaret Voltaire in Zurich in 1916 and spread to Berlin, Hanover, Paris and New York by 1924. It was an anti-art movement that answered the First World War by attacking reason, taste and the bourgeois press. Its graphic language was built from the press's own debris: Hannah Höch and Raoul Hausmann cut up magazines into photomontages, Kurt Schwitters glued tram tickets into Merz collages, and Tristan Tzara wrote poems by drawing newspaper words out of a bag. The result is chaotic on purpose, but it is built by hand, and every cut is a choice.

## Key characteristics

- **Ransom-note typography**: letters and words cut from different sources. Faces, sizes, weights, cases and baselines are mixed within a single word, and some pieces are rotated or pasted upside down. Hausmann's poster poems and the *Der Dada* covers are the model.
- **Photomontage**: halftone press photos are cut out, cropped hard, repeated and overlapped at angles next to machine parts such as gears, wheels and pointing hands (Höch's *Cut with the Kitchen Knife*).
- **Newsprint and aged paper**: yellowed stock, grey newsprint, Fraktur mastheads, fake text columns and torn or scissor-cut edges. The paper is part of the picture.
- **Mostly black and white with a little red**: ink on paper, with red kept for stamps, numerals and a few urgent words.
- **Printers' furniture as decoration**: big numerals, registration marks, rubber stamps, ☞ fists, § signs and rules that come from the print shop floor.
- **Nonsense and chance**: sound poetry ("Fümms bö wö tää zää Uu"), slogans in German and French, and word order left to chance, as in Tzara's "To make a Dadaist poem".
- **Anti-grid layout**: elements collide, tilt and overlap. The eye still gets a path through, but the page never sits still.

## How this redesign applies it

- **Name and headings**: these are rendered by a `Ransom` component. Each letter gets a different face from nine Google fonts, plus its own scrap colour, scissor cut, tilt and size. Letters that stay readable upside down (H, O, N, S…) are sometimes flipped. Screen readers get the plain text.
- **Tzara's bag**: the hero message is made of seven newspaper clippings. **Shake the bag** reshuffles their order and typefaces with a spring animation (motion, which respects `prefers-reduced-motion`), and **re-assemble** puts the sentence back. An `aria-live` line prints each "poem".
- **Photos**: the portrait and all the project screenshots are grayscale with a CSS dot screen on top. They have seeded, jagged `clip-path` tears and are tilted and overlapped like pasted cut-outs. The About section repeats the face three times in a contact-sheet strip, one frame in red, in the manner of Hausmann.
- **Paper**: the page background is aged paper, made from SVG `feTurbulence` noise plus foxing stains. Clippings are cream or newsprint grey, sections begin with torn edges, and a black placard band quotes the 1920 Dada Fair ("Die Kunst ist tot…").
- **Red**: used only for § numerals, project numbers, stamps, fists and a few letters. Body copy is dark ink on cream in Old Standard TT, which keeps the long descriptions readable.
- **Printers' marks**: each project is a numbered "Abb." (figure). It has a big Abril Fatface numeral, a registration mark and a double-ruled rubber stamp ☞ Visit website. The contact section is a Schwitters-style poster-poem of tools.

## Learn more

- [Dada, Tate art term](https://www.tate.org.uk/art/art-terms/d/dada): a concise history of the movement across Zurich, Berlin, Hanover, Paris and New York.
- [Merz, Tate art term](https://www.tate.org.uk/art/art-terms/m/merz): Schwitters' one-man offshoot of Dada and his collage method.
- [Raoul Hausmann, *The Art Critic* (1919–20), Tate](https://www.tate.org.uk/art/artworks/hausmann-the-art-critic-t01918): a key photomontage with a poster-poem, and a close study of ransom type plus cut-out photos.
- [International Dada Archive, University of Iowa](https://sdrc.lib.uiowa.edu/dada/): digitised Dada periodicals such as *Der Dada* and *Dada*, so you can study the real typography.
- [Dada on Monoskop](https://monoskop.org/Dada): a large collection of scanned books, magazines and manifestos.
- [Hannah Höch on Monoskop](https://monoskop.org/Hannah_H%C3%B6ch): the photomontage pioneer, with links to scans and literature.
- [Ursonate, Wikipedia](https://en.wikipedia.org/wiki/Ursonate): Schwitters' sound poem, quoted on this page, and its origins in Hausmann's "fmsbw".
