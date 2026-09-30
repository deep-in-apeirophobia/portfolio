'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Linear/Vercel-style cursor spotlight: tracks the pointer and hands each tile its local
// coordinates as CSS variables, so a soft radial glow follows the cursor across the grid.
export function Spotlight({ className, children }: { className?: string, children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		let frame = 0
		const onMove = (e: PointerEvent) => {
			cancelAnimationFrame(frame)
			frame = requestAnimationFrame(() => {
				el.querySelectorAll<HTMLElement>('[data-tile]').forEach((tile) => {
					const r = tile.getBoundingClientRect()
					tile.style.setProperty('--mx', `${e.clientX - r.left}px`)
					tile.style.setProperty('--my', `${e.clientY - r.top}px`)
				})
			})
		}
		el.addEventListener('pointermove', onMove)
		return () => {
			cancelAnimationFrame(frame)
			el.removeEventListener('pointermove', onMove)
		}
	}, [])

	return <div ref={ref} className={className}>{children}</div>
}
