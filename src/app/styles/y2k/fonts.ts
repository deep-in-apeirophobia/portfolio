import { Nunito, Open_Sans } from 'next/font/google'

// Nunito: rounded humanist sans for the bubbly display type and chrome word-mark.
export const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '600', '700', '800', '900'],
	variable: '--y2k-display',
})

// Open Sans: the closest free cousin of Segoe UI / Frutiger, the system faces of the Aero era.
export const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--y2k-body',
})
