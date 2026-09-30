# Claymorphism

Claymorphism is a UI trend named by designer Michał Malewicz (hype4.academy) in late 2021. It grew out of the playful 3D "clay" illustration packs and Blender clay renders that were everywhere at the time. It takes the soft lighting of neumorphism but drops that style's one-material, low-contrast look: each element is its own brightly coloured, inflated object that floats above the background, like a marshmallow or a lump of modelling clay. The goal is warmth and friendliness in the spirit of Duolingo and Headspace, with interfaces that look soft enough to squeeze.

## Key characteristics

- **Double inner shadow:** a light inset shadow at the top-left and a darker, tinted inset shadow at the bottom-right. Together they make a flat shape look rounded and puffy.
- **Coloured outer drop shadow:** a large, soft shadow tinted with the element's own hue, so the object floats clear of the page rather than being carved into it as in neumorphism.
- **Very large radii:** 30–50px on cards and full pills on buttons and chips. Nothing has a sharp corner.
- **Candy pastel palette:** lilac, peach, mint, sky blue, butter yellow and pink on a pale, airy background. Each object gets its own colour.
- **Friendly rounded type:** fonts with round terminals such as Fredoka, Nunito, Baloo or Quicksand, set heavy and dark (never pure black) for contrast.
- **3D clay ornaments:** spheres, stars, hearts, clouds and squiggles that look like Blender clay renders, often floating around the content.
- **Squishy motion:** springy, overshooting hover lifts and a "press" that squashes the object and turns its shadow inward.

## How this redesign applies it

- One `.clay` class in `clay.module.css` holds the whole material recipe (tinted outer shadow, dark inset bottom-right, white inset top-left). Tone classes such as `.peach` and `.mint` only swap two custom properties (`--c` for the fill and `--d` for the shade), so every card, pill and button is made of the same clay.
- The hero headline sets "Vibrant", "Fast" and "Scalable" inside tilted clay pills in peach, mint and sky. Around it sits a clay scene built with CSS: a puffy laptop with coloured code "snakes" on the screen, the profile photo inside a peach clay donut, and floating spheres.
- The star, heart, cloud, squiggle and `</>` ornaments are flat SVG shapes run through a shared SVG filter (`#clay-puff`). The filter blurs each shape's alpha into a height map and lights it with `feDiffuseLighting` and `feSpecularLighting`, which gives a real inflated, Blender-clay look without any images.
- Each project is a different pastel slab. Its screenshot sits in a well pressed *into* the clay (inverted shadows), and its stack chips are small white clay pebbles.
- Buttons and chips use a `cubic-bezier(.34,1.56,.64,1)` spring on hover and squash with inset shadows on `:active`. The ornaments bob slowly. Under `prefers-reduced-motion` all of this is switched off.
- Text is set in Fredoka (display) and Nunito (body) in deep plum `#3a2a5d` rather than black, which keeps contrast high while staying soft.

## Learn more

- [Claymorphism in User Interfaces, Michał Malewicz](https://hype4.academy/articles/design/claymorphism-in-user-interfaces): the article that named the trend and gave the shadow recipe.
- [Implementing claymorphism with CSS, LogRocket](https://blog.logrocket.com/implementing-claymorphism-css/): a step-by-step build of the inset and outer shadow layers in CSS.
- [Claymorphism on Dribbble](https://dribbble.com/tags/claymorphism): a large gallery of clay UI shots and 3D clay illustrations.
- [Designing Beautiful Shadows in CSS, Josh W. Comeau](https://www.joshwcomeau.com/css/designing-shadows/): explains why tinted, layered shadows look so much better than grey ones.
- [box-shadow, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow): reference for stacking several inset and outer shadows.
- [feSpecularLighting, MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feSpecularLighting): the SVG lighting primitive used here to inflate the ornaments.
- [Skeuomorphism, Nielsen Norman Group](https://www.nngroup.com/articles/skeuomorphism/): background on the realism-versus-flat debate that neumorphism and claymorphism grew out of.
