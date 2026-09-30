# Neumorphism (Soft UI)

Neumorphism ("new skeuomorphism") took off in late 2019, when Alexander Plyuto's *Skeuomorph Mobile Banking* shot went viral on Dribbble and Michał Malewicz gave the look a name. It is a minimal kind of skeuomorphism. It doesn't imitate leather or brushed metal. Every control is moulded from one soft plastic-like material, the same colour as the background, and a single light source makes it look raised or pressed in. The look is calm, tactile and monochrome. It is also known for being hard to use, because controls with no edges and little contrast are hard to see.

## Key characteristics

- **One material:** the background, cards, buttons and inputs all share one colour (often `#e0e5ec`). Elements don't sit on the surface. They are made of it.
- **Dual shadows from one light source:** raised elements get a white highlight to the top-left and a blue-grey shadow to the bottom-right. Pressed or recessed elements use the same pair as `inset` shadows. Flat colour blocks and borders are avoided.
- **Raised vs. pressed as state:** a button at rest is raised. On press it becomes an inset well. Toggles, segmented controls and nav items show "on" by being pushed into the surface.
- **Big, soft radii and physical controls:** pill buttons, circular icon buttons, dials and knobs, sliders, toggle switches and a large round avatar "well" all look like parts of a hardware device.
- **Minimal colour:** the whole palette is a light grey with a slight blue tint, plus one soft accent (blue, teal or violet) that marks active states, LEDs and key text.
- **Clean geometric sans:** Poppins, Montserrat, Nunito Sans or Inter, in medium weights and dark slate rather than black, with plenty of whitespace.
- **The known flaw:** low contrast and no edges hide what can be clicked. Pure soft UI fails WCAG non-text contrast, and it breaks down in high-contrast modes and on poor screens.

## How this redesign applies it

- **One material, two shadow depths:** the page, the nav pill, cards, chips and buttons all use `#e0e5ec`. CSS custom properties define raised (`--out`, `--out-lg`, …) and pressed (`--in`, `--in-lg`, …) shadow pairs, all lit from the top-left.
- **A hero "device":** a large extruded slab holds a recessed avatar well, a convex knob in an inset track, and a three-way segmented control. The dial works: turning it to *Vibrant*, *Fast* or *Scalable* presses that word into the headline in the accent blue.
- **State is shown by depth:** nav links, dial options and buttons change from raised to pressed on hover or active. Project numbers and the tech toolkit sit in wells, and stack chips are small raised tiles. Project screenshots sit in inset frames and are slightly desaturated so they suit the soft palette.
- **Accent used sparingly:** one soft blue (`#6d8cff`) is used only for LEDs, the knob notch and the toggle fill. A darker version (`#2b50c8`, 5.4:1) is used wherever the accent is text.
- **Accessible by default, authentic on request:** body text is `#44476a` (7:1) and headings are `#31344b` (9.6:1). Every interactive control has a 1px `#737c92` edge (3.3:1, which meets WCAG 1.4.11). Focus shows a 3px blue outline, and motion stops under `prefers-reduced-motion`. The **Edges** switch in the header removes those outlines so you can compare them with the original 2019 look. The trade-off is clear: the edgeless version is prettier, but its controls are harder to find.

## Learn more

- [Neumorphism in user interfaces (Michał Malewicz)](https://hype4.academy/articles/design/neumorphism-in-user-interfaces): the article that named the trend, with a 2021 look back on what survived.
- [Neumorphism.io](https://neumorphism.io/): Adam Giebl's generator. Adjust the light direction, distance and blur to see how the dual-shadow CSS is built.
- [Neumorphism and CSS (CSS-Tricks)](https://css-tricks.com/neumorphism-and-css/): a practical walk-through of the `box-shadow` and gradient recipes behind raised, pressed and convex surfaces.
- [Neumorphism will NOT be a huge trend in 2020 (Axess Lab)](https://axesslab.com/neumorphism/): the accessibility critique, showing why soft UI fails users with low vision or poor screens.
- [Understanding WCAG 2.1 SC 1.4.11: Non-text Contrast (W3C)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html): the 3:1 rule for control boundaries that pure neumorphism breaks.
- [Neumorphism (Interaction Design Foundation)](https://www.interaction-design.org/literature/topics/neumorphism): a short overview of the style's traits, pros and cons.
- [Neumorphism (Wikipedia)](https://en.wikipedia.org/wiki/Neumorphism): a concise history, from Plyuto's Dribbble shot to its influence on later UI trends.
