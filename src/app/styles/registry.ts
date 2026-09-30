export type DesignStyle = {
	slug: string,
	name: string,
	era: string,
	tagline: string,
	set: 1 | 2,
}

export const STYLE_SETS = [
	{ id: 1, title: 'Set 1: Classic movements', intro: 'Ten landmark styles from a century of graphic and interface design.' },
	{ id: 2, title: 'Set 2: Modern & avant-garde', intro: 'Five styles shaping interfaces today, and five experimental art movements that break the rules.' },
] as const

// Each entry has a matching route at /styles/<slug> that redesigns the portfolio in that style.
export const DESIGN_STYLES: DesignStyle[] = [
	{ slug: 'brutalism', name: 'Brutalism', era: '1950s architecture → 2010s web', tagline: 'Raw structure, default fonts, harsh borders, no apologies.', set: 1 },
	{ slug: 'pixel-art', name: 'Pixel Art', era: '1980s–90s games', tagline: 'A low-resolution grid, limited palettes and chunky 8-bit UI.', set: 1 },
	{ slug: 'swiss', name: 'Swiss / International', era: '1950s–60s Switzerland', tagline: 'Grids, Helvetica, flush-left type and objective clarity.', set: 1 },
	{ slug: 'bauhaus', name: 'Bauhaus', era: '1919–1933 Germany', tagline: 'Primary colors, basic geometry, form follows function.', set: 1 },
	{ slug: 'art-deco', name: 'Art Deco', era: '1920s–30s', tagline: 'Gold on black, symmetry, sunbursts and stepped geometry.', set: 1 },
	{ slug: 'memphis', name: 'Memphis', era: '1980s Milan', tagline: 'Clashing colors, squiggles and joyful anti-taste patterns.', set: 1 },
	{ slug: 'skeuomorphism', name: 'Skeuomorphism', era: '2007–2013 iOS era', tagline: 'Digital objects that imitate real materials: leather, paper, metal.', set: 1 },
	{ slug: 'synthwave', name: 'Synthwave', era: '1980s retro-futurism', tagline: 'Neon grids, chrome type and a sunset that never ends.', set: 1 },
	{ slug: 'editorial', name: 'Editorial', era: 'Print magazines & newspapers', tagline: 'Serif typography, columns, drop caps and hierarchy from print.', set: 1 },
	{ slug: 'y2k', name: 'Y2K / Frutiger Aero', era: '1998–2008', tagline: 'Glossy bubbles, chrome, aqua gradients and techno-optimism.', set: 1 },
	{ slug: 'glassmorphism', name: 'Glassmorphism', era: '2020s (Big Sur → Liquid Glass)', tagline: 'Frosted translucent layers floating over vivid color fields.', set: 2 },
	{ slug: 'neo-brutalism', name: 'Neo-Brutalism', era: '2020s product design', tagline: 'Thick outlines, hard shadows and loud flat color, friendly not hostile.', set: 2 },
	{ slug: 'bento', name: 'Bento Grid', era: '2020s Apple & SaaS', tagline: 'Content packed into a tidy grid of rounded tiles of varying size.', set: 2 },
	{ slug: 'claymorphism', name: 'Claymorphism', era: '2021 onwards', tagline: 'Soft, puffy, inflated 3D shapes in candy pastels.', set: 2 },
	{ slug: 'neumorphism', name: 'Neumorphism', era: '2019–2020', tagline: 'UI extruded from a single material with soft light and shadow.', set: 2 },
	{ slug: 'dada', name: 'Dada Collage', era: '1916–1924 Zurich & Berlin', tagline: 'Cut-up photos, ransom-note type and deliberate nonsense.', set: 2 },
	{ slug: 'constructivism', name: 'Constructivism', era: '1917–1930s Soviet avant-garde', tagline: 'Red, black, diagonals and type as propaganda machinery.', set: 2 },
	{ slug: 'psychedelic', name: 'Psychedelic', era: '1966–1970 San Francisco', tagline: 'Melting lettering, vibrating complementary colors, Art Nouveau curves.', set: 2 },
	{ slug: 'grunge', name: 'Grunge Typography', era: '1990s Ray Gun / David Carson', tagline: 'Deconstructed, distressed, layered type that dares you to read it.', set: 2 },
	{ slug: 'op-art', name: 'Op Art', era: '1960s Riley & Vasarely', tagline: 'Black-and-white patterns that make the eye see motion.', set: 2 },
]
