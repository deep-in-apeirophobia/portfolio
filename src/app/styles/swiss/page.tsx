import type { Metadata } from 'next'
import SwissPage from './SwissPage'

export const metadata: Metadata = {
	title: 'Swiss / International Typographic Style · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio set in the International Typographic Style: a strict grid, neo-grotesque type and one signal red.',
}

export default function Page() {
	return <SwissPage />
}
