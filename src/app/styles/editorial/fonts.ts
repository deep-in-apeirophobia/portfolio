import { Libre_Franklin, Playfair_Display, Source_Serif_4 } from 'next/font/google'

// Display: a high-contrast Didone-flavoured transitional for headlines and the nameplate.
export const display = Playfair_Display({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	variable: '--ed-display',
	display: 'swap',
})

// Text: an optical-size aware book serif for running copy.
export const text = Source_Serif_4({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	axes: ['opsz'],
	variable: '--ed-text',
	display: 'swap',
})

// Labels: a Franklin Gothic revival for kickers, folios and captions.
export const sans = Libre_Franklin({
	subsets: ['latin'],
	variable: '--ed-sans',
	display: 'swap',
})
