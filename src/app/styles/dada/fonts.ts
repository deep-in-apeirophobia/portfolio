import {
	Abril_Fatface,
	Anton,
	Bodoni_Moda,
	Courier_Prime,
	Old_Standard_TT,
	Playfair_Display,
	Rubik_Mono_One,
	Special_Elite,
	UnifrakturMaguntia,
} from 'next/font/google'

// Dada typography is a printer's type case tipped onto the floor: every word (often every letter)
// comes from a different job. These nine faces stand in for the fat faces, Didones, grotesques,
// typewriter slugs and newspaper Fraktur that Hausmann, Höch and Schwitters cut out and pasted.

// Fat face: 19th-century poster display type, the loudest letter in any Dada ransom line.
export const abril = Abril_Fatface({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--dd-abril' })
// Didone with hairline contrast: bourgeois newspaper headlines, ready to be cut up.
export const bodoni = Bodoni_Moda({ weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--dd-bodoni' })
// Worn typewriter: manifestos, poem slips, Tzara's instructions.
export const elite = Special_Elite({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--dd-elite' })
// Heavy wide grotesque: the blunt sans of Der Dada covers.
export const rubik = Rubik_Mono_One({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--dd-rubik' })
// High-contrast transitional serif for italic contrast.
export const playfair = Playfair_Display({ weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--dd-playfair' })
// Old-style newspaper text face: the readable body copy of the clippings.
export const oldStandard = Old_Standard_TT({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--dd-oldstd' })
// Condensed poster grotesque: tall, cheap, loud.
export const anton = Anton({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--dd-anton' })
// Typewriter mono for labels and captions.
export const courier = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--dd-courier' })
// Newspaper Fraktur: the German daily press that Höch and Hausmann sliced apart.
export const fraktur = UnifrakturMaguntia({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--dd-fraktur' })

export const fontVars = [abril, bodoni, elite, rubik, playfair, oldStandard, anton, courier, fraktur].map(f => f.variable).join(' ')
