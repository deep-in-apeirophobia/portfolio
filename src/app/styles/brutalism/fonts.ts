import { Arimo, Cousine, Tinos } from 'next/font/google'

// The ChromeOS "core fonts": metric-compatible clones of Arial, Times New Roman and Courier New.
// Brutalist sites lean on whatever the browser ships by default; these give that exact
// "unstyled" look, but render identically on every machine.
export const arimo = Arimo({ subsets: ['latin'], weight: ['400', '700'], variable: '--bru-sans' })
export const tinos = Tinos({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--bru-serif' })
export const cousine = Cousine({ subsets: ['latin'], weight: ['400', '700'], variable: '--bru-mono' })
