import { Jost } from 'next/font/google'

// Jost is a free revival of Paul Renner's Futura (1927), the geometric sans born alongside the Bauhaus.
export const jost = Jost({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-bauhaus-jost',
	display: 'swap',
})
