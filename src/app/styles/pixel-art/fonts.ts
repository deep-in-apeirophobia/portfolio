import { Press_Start_2P, VT323 } from 'next/font/google'

// Press Start 2P: a faithful recreation of the 8x8 bitmap fonts of 1980s Namco/Nintendo arcade and NES titles.
export const pressStart = Press_Start_2P({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-press-start',
	display: 'swap',
})

// VT323: taken from the DEC VT320 terminal glyphs; a pixel face that stays readable at paragraph length.
export const vt323 = VT323({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-vt323',
	display: 'swap',
})
