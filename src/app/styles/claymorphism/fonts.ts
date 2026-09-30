import { Fredoka, Nunito } from 'next/font/google'

// Fredoka: fat, rounded-terminal display face. It reads like letters squeezed out of a piping bag.
export const display = Fredoka({ weight: ['500', '600', '700'], subsets: ['latin'], display: 'swap', variable: '--clay-display' })
// Nunito: rounded humanist sans for friendly, highly readable body copy.
export const body = Nunito({ weight: ['400', '600', '700', '800'], subsets: ['latin'], display: 'swap', variable: '--clay-body' })
