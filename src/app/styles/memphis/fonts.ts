import { Rubik_Mono_One, Shrikhand, Poppins } from 'next/font/google'

// Chunky, geometric display type: the mono-width Rubik block letters recall Memphis-era posters.
export const display = Rubik_Mono_One({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--mph-display' })
// A fat, bouncy script for "anti-good-taste" accents.
export const script = Shrikhand({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--mph-script' })
// Geometric sans for readable body copy.
export const body = Poppins({ weight: ['400', '500', '700', '800'], subsets: ['latin'], display: 'swap', variable: '--mph-body' })
