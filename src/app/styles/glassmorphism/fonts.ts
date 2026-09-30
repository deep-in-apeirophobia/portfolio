import { Inter } from 'next/font/google'

// Inter: Rasmus Andersson's screen grotesque, the closest free relative of Apple's SF Pro.
// The optical-size axis lets display headlines tighten up like "SF Pro Display" while
// body copy stays open like "SF Pro Text".
export const inter = Inter({
	subsets: ['latin'],
	axes: ['opsz'],
	variable: '--glass-font',
	display: 'swap',
})
