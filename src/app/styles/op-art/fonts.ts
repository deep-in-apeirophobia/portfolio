import { Archivo, Unbounded } from 'next/font/google'

// Unbounded: a wide, geometric display face whose round, heavy forms read like the
// constructed lettering on 1960s Op exhibition posters. Holds up when filled with stripes.
export const unbounded = Unbounded({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	variable: '--font-op-display',
	display: 'swap',
})

// Archivo: a sturdy grotesk for calm, readable body copy and tracked-out plate labels.
export const archivo = Archivo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-op-body',
	display: 'swap',
})
