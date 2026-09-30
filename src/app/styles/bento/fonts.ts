import { Geist, Geist_Mono } from 'next/font/google'

// Geist (Vercel, 2023): a neutral, SF/Inter-like grotesk made for product UI, the typeface of the SaaS bento era.
export const geist = Geist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-bento-sans',
	display: 'swap',
})

export const geistMono = Geist_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-bento-mono',
	display: 'swap',
})
