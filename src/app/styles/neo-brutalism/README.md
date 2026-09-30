# Neo-Brutalism

Neo-Brutalism (also "neubrutalism") is a 2020s product and web-design style that took the raw, anti-polish attitude of 2010s brutalist websites and made it friendly. Popularised by Gumroad's 2021 redesign, Figma's FigJam marketing, Hype4 and a wave of indie SaaS landing pages, it pairs thick black outlines and hard, unblurred shadows with loud flat candy colours. The philosophy is "honest UI": every element shows its edges, looks tappable and has a clear state, and the whole thing stays playful and very usable instead of hostile.

## Key characteristics

- **Thick black outlines on everything**: 2–3px solid borders around buttons, cards, images, chips and even the page sections, so the structure is always visible.
- **Hard offset shadows with zero blur**: a solid black shadow shifted 4–8px down and right makes flat shapes look like stacked paper cut-outs. On hover and press the element slides into its shadow, like a physical button.
- **Flat, saturated candy colours on cream**: lemon yellow, bubblegum pink, mint, periwinkle and orange blocks on an off-white background. No gradients, no glass, no soft depth.
- **Chunky, confident type**: heavy grotesks (Archivo Black, Space Grotesk, Lexend Mega) set tight and large, often with words boxed or highlighted, plus a monospace for small "system" labels.
- **Sticker-like decoration**: slightly rotated badges and tags, starburst stickers, emoji accents, app-window chrome (three dots and a title bar) and scrolling marquee bands.
- **Visible structure and card grids**: graph-paper or dot grids in the background, content in plain outlined cards with rounded corners, big obvious buttons.
- **Motion that feels mechanical**: short translate-and-shadow transitions and simple loops (marquees, a spinning sticker), never floaty easing or blur.

## How this redesign applies it

- **Outlines and press shadows**: every interactive element uses a 3px `#111` border and a `4px 4px 0` shadow. Hovering moves it 2px into its shadow and clicking moves it all the way (`.press` in `neo.module.css`). Project cards do the reverse and lift toward you (`.lift`).
- **Candy palette on cream**: the page sits on `#fffaf0` with a FigJam-style 40px grid. The hero words *vibrant*, *fast* and *scalable* are boxed in yellow, mint and periwinkle, and "with me." gets a thick pink marker highlight.
- **Type**: Archivo Black for headlines and marquees, Space Grotesk for body and buttons, Space Mono for tiny labels such as `profile.tsx`, the section counters and the browser address bars.
- **Product-UI framing**: a black announcement strip, a sticky nav with a yellow "Hire me" button, a profile card styled as an app window stacked on two coloured sheets, and project cards with browser chrome whose colour bar changes per project.
- **Stickers and play**: a rotating "SAY HI!" starburst, tilted "full-stack", "that's me!" and "inbox open" tags, emoji icons per project, and two marquee bands running in opposite directions.
- **Usable first**: body copy always sits on white or light solid panels for contrast, focus rings are a thick outline plus a yellow fill, and the marquees, wobble and spin all stop under `prefers-reduced-motion`.

## Learn more

- [Neobrutalism: Definition and Best Practices (Nielsen Norman Group)](https://www.nngroup.com/articles/neobrutalism/): a usability-focused definition of the style, with guidance on where it helps and where it hurts.
- [Neubrutalism is taking over the web (Hype4 Academy)](https://hype4.academy/articles/design/neubrutalism-is-taking-over-web): the widely shared 2022 essay that named the trend and collected its early examples.
- [Gumroad](https://gumroad.com/): the 2021 redesign that brought the look to the mainstream, and still a living reference for pink, yellow and hard shadows.
- [FigJam by Figma](https://www.figma.com/figjam/): marketing pages and product UI full of outlined stickers, candy colours and grid canvases.
- [neobrutalism.dev](https://www.neobrutalism.dev/): an open-source React/Tailwind component library that shows the style's button, card and input conventions in code.
- [Brutalist Websites](https://www.brutalistwebsites.com/): the 2014 gallery of raw brutalist web design, useful for seeing what Neo-Brutalism kept (visible structure) and what it softened.
- [Flat Design: Its Origins, Its Problems (Nielsen Norman Group)](https://www.nngroup.com/articles/flat-design/): background on the flat-design era whose weak affordances Neo-Brutalism's outlines and shadows push back against.
