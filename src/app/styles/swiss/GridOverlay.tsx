'use client'

import { useEffect, useState } from 'react'

// The modular grid is the protagonist of Swiss design, so we let the reader see it.
// Hairlines mark the 12 columns (4 on phones); press the button or "G" to toggle.
export default function GridOverlay() {
	const [on, setOn] = useState(true)

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			const t = e.target as HTMLElement | null
			if (t && /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return
			if (e.key === 'g' || e.key === 'G') setOn(v => !v)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	return (
		<>
			<button
				type="button"
				onClick={() => setOn(v => !v)}
				aria-pressed={on}
				className="group flex items-baseline gap-2 text-left tabular-nums hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
			>
				<span aria-hidden className={`inline-block h-[0.7em] w-[0.7em] translate-y-[0.05em] border border-current ${on ? 'bg-[#e30613] border-[#e30613]' : ''}`} />
				Grid {on ? 'on' : 'off'}
			</button>
			<div
				aria-hidden
				className={`pointer-events-none fixed inset-0 z-[60] px-4 transition-opacity duration-200 motion-reduce:transition-none md:px-8 ${on ? 'opacity-100' : 'opacity-0'}`}
			>
				<div className="grid h-full grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6">
					{Array.from({ length: 12 }, (_, i) => (
						<div
							key={i}
							className={`h-full border-x border-[#e30613]/[0.14] ${i >= 4 ? 'hidden md:block' : ''}`}
						/>
					))}
				</div>
			</div>
		</>
	)
}
