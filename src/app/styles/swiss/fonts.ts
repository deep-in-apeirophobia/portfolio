import { Inter_Tight } from 'next/font/google'

// Inter Tight: a neo-grotesque with tight default spacing, the closest free stand-in
// for Helvetica / Akzidenz-Grotesk at display sizes.
export const interTight = Inter_Tight({
	subsets: ['latin'],
	variable: '--font-swiss',
	display: 'swap',
})
