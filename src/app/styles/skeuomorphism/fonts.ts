import { Caveat, Inter, Kalam } from 'next/font/google'

// Kalam stands in for Apple's "Marker Felt" (the iOS Notes font); Caveat is a Sharpie scrawl
// for polaroid captions; Inter plays the Helvetica role of the system UI chrome.
export const kalam = Kalam({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-note', display: 'swap' })
export const caveat = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-sharpie', display: 'swap' })
export const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-ui', display: 'swap' })
