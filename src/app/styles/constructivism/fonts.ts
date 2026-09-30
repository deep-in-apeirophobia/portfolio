import { Oswald, PT_Sans, Rubik_Mono_One } from 'next/font/google'

// Oswald: a heavy condensed grotesk in the spirit of the hand-drawn poster capitals of Rodchenko and the Stenbergs.
export const oswald = Oswald({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-kon-oswald',
	display: 'swap',
})

// Rubik Mono One: wide, blocky, monoline caps, like the square-cut lettering of LEF covers and "Книги!".
export const rubikMono = Rubik_Mono_One({
	subsets: ['latin', 'cyrillic'],
	weight: '400',
	variable: '--font-kon-mono',
	display: 'swap',
})

// PT Sans: designed by ParaType (Moscow) for the "Public Types of Russian Federation" project; readable body copy.
export const ptSans = PT_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	variable: '--font-kon-pt',
	display: 'swap',
})
