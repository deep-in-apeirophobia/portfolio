import { Poppins } from 'next/font/google'

// Poppins: the geometric, friendly sans that dominated the 2019–2020 soft-UI Dribbble shots.
export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-neu-poppins',
	display: 'swap',
})
