# Glassmorphism

Glassmorphism is the frosted-glass interface language that went mainstream with macOS Big Sur (2020). Designer Michal Malewicz named it that same year, and a wave of Dribbble shots spread it quickly. Its roots are in Windows Vista's Aero and iOS 7's blurred panels, but the 2020s version is flatter, lighter and more vivid. Translucent panes float over saturated colour fields, and depth comes from layering and blur instead of bevels or textures. Apple took it further with visionOS (2023) and **Liquid Glass** (iOS 26 / macOS Tahoe, 2025), where glass also refracts and bends what sits behind it, and controls become pill-shaped droplets that respond to touch.

## Key characteristics

- **A vivid background to frost**: blurred mesh gradients or soft colour blobs, usually violet, pink, orange and cyan. Glass looks like nothing over a flat colour, so the wallpaper does half the work.
- **Frosted translucent panes**: `backdrop-filter: blur() saturate()`, a white fill at 15–65% opacity and large corner radii (24–44px). Materials come in grades (thin, regular and thick, as in Apple's HIG), and each grade blurs and fills more than the last.
- **Light-catching edges**: a 1px light inner border, a brighter top-left rim and a faint specular sheen, so each pane reads as a physical sheet with thickness.
- **Layered depth**: cards float at different heights with large, soft, tinted shadows. They overlap each other and the window edges, and each layer has its own blur level.
- **Clean, modern type**: SF Pro-like neo-grotesques (SF Pro, Inter, Manrope) with bold, tightly tracked display sizes, plus quiet secondary text. There is no decorative type, because the material is the decoration.
- **Liquid Glass controls (2025)**: capsule buttons and tab bars with bright top caustics and bottom rim glow. A lens slides between tabs with springy overshoot, content refracts at the edges, and buttons swell slightly when pressed.
- **Legibility as a first-class concern**: the style's known weakness. Good implementations raise fill opacity behind text, respect *Reduce Transparency*, and fall back to solid surfaces where blur is unsupported.

## How this redesign applies it

- **Wallpaper**: thirteen radial-gradient blobs drift slowly (28–46s loops) down the full length of the page, over a deep violet gradient with a faint grain. Every pane has shifting colour behind it, and the blobs are gradients, not `filter: blur`, so they are cheap to animate.
- **Three materials, one rule**: the hero window, about panel, project cards and contact panel use the *thick* material (64% white, 40px blur, 180% saturate). Body text only ever sits on thick glass and stays in dark ink (`#0b0c1c` / `#262840`), whatever colour passes behind. The "Daily drivers" widget and the photo card use the lighter *regular* material to show a different depth.
- **Glass edges**: each pane has a gradient rim border (a masked `::after`) that is bright top-left and bottom-right, a fixed top-left sheen, and a soft specular spot that follows the mouse pointer.
- **Hero as a visionOS scene**: a large window with a grabber bar underneath, and three widgets (contact card, featured project stats, tech chips) that float at staggered offsets and overlap its edge. A free-floating glass orb with caustic highlights sits at the window's corner.
- **Liquid Glass controls**: the floating tab bar has a lens that slides under the active section with a spring curve. In Chromium it also refracts content through an SVG `feDisplacementMap` in `backdrop-filter`, and other browsers fall back to plain blur. The CTAs are capsule buttons with top and bottom caustics that swell when pressed. Following iOS 26, the tab bar moves to the bottom of the screen on phones. The contact section uses an iOS inset-grouped list.
- **Legibility fallbacks**: there is an in-page **Reduce transparency** switch, and the page also honours `prefers-reduced-transparency`. Both turn every pane nearly opaque. An `@supports not (backdrop-filter)` rule raises fill opacity to 90%. Focus rings are solid blue with a white halo, visible on any background, and `prefers-reduced-motion` stops all drifting and bobbing.

## Learn more

- [Glassmorphism: Definition and Best Practices (Nielsen Norman Group)](https://www.nngroup.com/articles/glassmorphism/): a clear usability view of the style, especially contrast and when blur helps or hurts.
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials): Apple's own rules for thin, regular and thick materials, vibrancy and Liquid Glass.
- [Apple Developer: Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/liquid-glass): the technology overview of Liquid Glass, with how its lensing, adaptivity and controls are meant to work.
- [Apple Newsroom: Apple introduces a delightful and elegant new software design (June 2025)](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/): the Liquid Glass announcement, with good imagery of the refractive material.
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter): the CSS property the whole style is built on, with browser support notes.
- [Josh W. Comeau: Next-level frosted glass with backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/): an interactive deep dive into making web glass look right, including edge bleed and extended blur.
- [css.glass generator](https://css.glass/): a quick playground for tuning blur, transparency and outline, and seeing how each changes the effect.
