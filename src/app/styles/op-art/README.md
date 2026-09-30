# Op Art

Op (Optical) Art is an abstract movement of the late 1950s and 1960s. Its paintings use precise geometric patterns to make the eye see things that aren't there: movement, swelling, vibration and flicker. Victor Vasarely laid the groundwork in Paris with his warped grids and "kinetic" plastic units. Bridget Riley's black-and-white wave and zigzag paintings took the idea furthest. MoMA's 1965 exhibition *The Responsive Eye* gave the movement its public moment, and the fashion and advertising world adopted it almost at once. The philosophy is perceptual: the viewer's own visual system is the medium, and the painting only "happens" when someone looks at it.

## Key characteristics

- **Black and white first.** Maximum contrast between two flat tones creates vibration at the edges. Colour arrives later (Vasarely's *Vega-Nor* and *Planetary Folklore*, Riley's *Cataract 3*) as limited, carefully graded palettes.
- **Hard-edged, repeated geometry.** Squares, circles, stripes, chevrons and dots are drawn with mechanical precision, with no brushwork or texture.
- **Distortion of a regular system.** A grid or line field is set up, then progressively bent, compressed or swollen (Vasarely's bulging *Vega* spheres, Riley's folding *Movement in Squares*), and the eye reads depth and motion into the change.
- **Figure through direction, not outline.** Shapes and letters are made visible only by a change in stripe direction or phase, without contour lines.
- **Moiré and interference.** Overlapping or near-parallel line fields (Riley's *Current*, Soto's vibrating structures) produce shimmering interference patterns.
- **Geometric sans lettering.** The period's posters and catalogues set wide, constructed sans-serif type, often cut into or built from the pattern itself.
- **Motion from the viewer.** The works are static, and the movement comes from the eye and from the viewer moving. Kinetic artists (Soto, Agam, Cruz-Diez) added physical layers that change as you walk past.

## How this redesign applies it

- **Hero as a *Vega* plate.** The whole first screen is a code-generated checkerboard, swollen into a sphere with a smooth radial warp. On desktop with a fine pointer, the sphere drifts slowly towards the cursor with heavy easing (no flashing or strobing). A "Kinetic" toggle turns this off, and it is disabled automatically for `prefers-reduced-motion`.
- **Letters cut from stripes.** The name is set in Unbounded 900: horizontal stripes inside the letters on a field of vertical stripes, so the figure appears only through the change of direction. Section headings ("About", "Work", "Contact") are filled with em-scaled horizontal stripes through `background-clip: text`.
- **Patterns as frames and dividers, calm panels for reading.** Body copy always sits on solid off-white panels with heavy black rules. Riley-style bands separate the sections: *Current* (rippling parallel lines), *Movement in Squares* (a checkerboard folding towards a crease) and *Cataract* (a second current). Each project screenshot sits in a different CSS-gradient Op frame: diagonal stripes, checkerboard, moiré rings, chevrons and a dot screen.
- **Portrait in the eye of *Blaze*.** The photo sits at the centre of generated concentric zigzag rings. Alternate rings are counter-rotated, so the disc appears to spin.
- **One colour plate.** Contact follows Vasarely's late colour work: a grid of squares and discs swollen into a sphere, graded from ultramarine through violet and magenta to orange, with complementary discs.
- **Gallery-plate microcopy.** Sections are numbered as exhibition plates ("Plate 01 · The Responsive Eye") with small captions crediting the works each pattern is after. Screenshots are shown in greyscale and switch to colour on hover or focus.

## Learn more

- [Op art: Tate art term](https://www.tate.org.uk/art/art-terms/o/op-art): Concise definition and history, with links to key works in the Tate collection.
- [Bridget Riley at Tate](https://www.tate.org.uk/art/artists/bridget-riley-1845): Biography and collection works, including her black-and-white paintings of the 1960s.
- [Bridget Riley, *Fall* (1963), Tate](https://www.tate.org.uk/art/artworks/riley-fall-t00616): Catalogue entry for a canonical wave painting, with notes on how it was made.
- [*The Responsive Eye* (Wikipedia)](https://en.wikipedia.org/wiki/The_Responsive_Eye): Overview of MoMA's 1965 exhibition that defined and popularised the movement, with the artists shown.
- [Victor Vasarely at the Guggenheim](https://www.guggenheim.org/artwork/artist/victor-vasarely): Biography of the "grandfather of Op Art" and works in the collection.
- [Fondation Vasarely, Aix-en-Provence](https://www.fondationvasarely.org/): The foundation and building Vasarely designed to show his "integrated" architectural works.
- [Op Art Movement Overview: The Art Story](https://www.theartstory.org/movement/op-art/): Readable survey of the movement's ideas, key artists (Soto, Cruz-Diez, Agam, Anuszkiewicz) and legacy.
