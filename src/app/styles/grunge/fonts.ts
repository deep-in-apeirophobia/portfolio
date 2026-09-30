import {
	Anton,
	Big_Shoulders_Stencil,
	Bodoni_Moda,
	Courier_Prime,
	Noto_Sans_Symbols_2,
	Permanent_Marker,
	Rubik_Dirt,
	Rubik_Glitch,
	Special_Elite,
} from 'next/font/google'

// Grunge type is a collision of voices: a condensed poster grotesque, a hairline Didone,
// a stencil, a typewriter, a marker and two "pre-damaged" display faces. Courier Prime is
// the one calm, legible voice used for every body paragraph.

// Condensed sans for the huge, cropped, sliced headlines (the Ray Gun / NIN poster voice).
export const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--gr-anton' })
// High-contrast Didone, set in italic and mashed against the grotesque (Brody / Emigre collisions).
export const bodoni = Bodoni_Moda({ subsets: ['latin'], weight: ['400', '900'], style: ['normal', 'italic'], variable: '--gr-bodoni' })
// Industrial stencil for crate-stamp labels and vertical type.
export const stencil = Big_Shoulders_Stencil({ subsets: ['latin'], weight: ['700', '900'], variable: '--gr-stencil', preload: false })
// Worn typewriter for captions, datelines and pasted-in strips.
export const typewriter = Special_Elite({ subsets: ['latin'], weight: '400', variable: '--gr-type' })
// The single readable body face.
export const courier = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--gr-body' })
// Hand-scrawled annotations.
export const marker = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--gr-marker' })
// Pre-distressed display faces.
export const dirt = Rubik_Dirt({ subsets: ['latin'], weight: '400', variable: '--gr-dirt', preload: false })
export const glitch = Rubik_Glitch({ subsets: ['latin'], weight: '400', variable: '--gr-glitch', preload: false })
// Carries the Unicode Dingbats block for the Zapf Dingbats toggle.
export const symbols = Noto_Sans_Symbols_2({ subsets: ['symbols'], weight: '400', variable: '--gr-dingbat', preload: false })

export const fontVars = [anton, bodoni, stencil, typewriter, courier, marker, dirt, glitch, symbols]
	.map(f => f.variable)
	.join(' ')
