import { Monoton, Orbitron, Mr_Dafoe, VT323, Exo_2 } from 'next/font/google'

// Monoton: striped neon-tube display lettering (the classic "sign" face).
export const monoton = Monoton({ subsets: ['latin'], weight: '400', variable: '--sw-monoton', display: 'swap' })
// Orbitron: geometric, wide, sci-fi; used for chrome headings and UI labels.
export const orbitron = Orbitron({ subsets: ['latin'], weight: ['500', '700', '900'], variable: '--sw-orbitron', display: 'swap' })
// Mr Dafoe: the brush-script accent seen on every outrun album cover.
export const mrDafoe = Mr_Dafoe({ subsets: ['latin'], weight: '400', variable: '--sw-script', display: 'swap' })
// VT323: VCR on-screen-display / VHS label type.
export const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--sw-vhs', display: 'swap' })
// Exo 2: readable techno sans for body copy.
export const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--sw-body', display: 'swap' })

export const fontVars = [monoton, orbitron, mrDafoe, vt323, exo2].map((f) => f.variable).join(' ')
