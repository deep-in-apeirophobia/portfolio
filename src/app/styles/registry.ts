export type DesignStyle = {
	slug: string,
	name: string,
	era: string,
	tagline: string,
}

// Each entry has a matching route at /styles/<slug> that redesigns the portfolio in that style.
export const DESIGN_STYLES: DesignStyle[] = [
	{ slug: 'brutalism', name: 'Brutalism', era: '1950s architecture → 2010s web', tagline: 'Raw structure, default fonts, harsh borders, no apologies.' },
	{ slug: 'pixel-art', name: 'Pixel Art', era: '1980s–90s games', tagline: 'A low-resolution grid, limited palettes and chunky 8-bit UI.' },
	{ slug: 'swiss', name: 'Swiss / International', era: '1950s–60s Switzerland', tagline: 'Grids, Helvetica, flush-left type and objective clarity.' },
	{ slug: 'bauhaus', name: 'Bauhaus', era: '1919–1933 Germany', tagline: 'Primary colors, basic geometry, form follows function.' },
	{ slug: 'art-deco', name: 'Art Deco', era: '1920s–30s', tagline: 'Gold on black, symmetry, sunbursts and stepped geometry.' },
	{ slug: 'memphis', name: 'Memphis', era: '1980s Milan', tagline: 'Clashing colors, squiggles and joyful anti-taste patterns.' },
	{ slug: 'skeuomorphism', name: 'Skeuomorphism', era: '2007–2013 iOS era', tagline: 'Digital objects that imitate real materials: leather, paper, metal.' },
	{ slug: 'synthwave', name: 'Synthwave', era: '1980s retro-futurism', tagline: 'Neon grids, chrome type and a sunset that never ends.' },
	{ slug: 'editorial', name: 'Editorial', era: 'Print magazines & newspapers', tagline: 'Serif typography, columns, drop caps and hierarchy from print.' },
	{ slug: 'y2k', name: 'Y2K / Frutiger Aero', era: '1998–2008', tagline: 'Glossy bubbles, chrome, aqua gradients and techno-optimism.' },
]
