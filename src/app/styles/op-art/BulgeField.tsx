'use client'

import { useEffect, useRef, useState } from 'react'
import { vegaChecker } from './patterns'
import s from './op.module.css'

// Server-rendered first frame, sized for a 1440×900 desktop hero. Replaced by a measured frame on mount.
const SSR_W = 1440
const SSR_H = 860

type Geo = { W: number; H: number; cell: number; cx: number; cy: number; R: number }

function restingGeo(W: number, H: number): Geo {
	const mobile = W < 860
	const cell = Math.max(26, Math.min(46, W / 32))
	if (mobile) {
		const cy = Math.min(210, H * 0.2)
		return { W, H, cell, cx: W / 2, cy, R: Math.min(W * 0.52, 220) }
	}
	return { W, H, cell, cx: W * 0.71, cy: H * 0.5, R: Math.min(H * 0.5, W * 0.3) }
}

const INITIAL = restingGeo(SSR_W, SSR_H)
const INITIAL_D = vegaChecker(INITIAL.W, INITIAL.H, INITIAL.cell, INITIAL.cx, INITIAL.cy, INITIAL.R)

/**
 * Vasarely "Vega" checkerboard filling the hero. On desktop with a fine pointer the sphere drifts
 * slowly towards the cursor (heavy easing, no flicker). Off for prefers-reduced-motion and via a toggle.
 */
export default function BulgeField() {
	const svgRef = useRef<SVGSVGElement>(null)
	const pathRef = useRef<SVGPathElement>(null)
	const [motion, setMotion] = useState(false)
	const [canMove, setCanMove] = useState(false)

	// Decide whether motion is available at all (fine pointer, no reduced-motion preference).
	useEffect(() => {
		const fine = window.matchMedia('(pointer: fine) and (min-width: 860px)')
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
		const update = () => {
			const ok = fine.matches && !reduce.matches
			setCanMove(ok)
			setMotion(ok)
		}
		update()
		fine.addEventListener('change', update)
		reduce.addEventListener('change', update)
		return () => {
			fine.removeEventListener('change', update)
			reduce.removeEventListener('change', update)
		}
	}, [])

	useEffect(() => {
		const svg = svgRef.current
		const path = pathRef.current
		const host = svg?.parentElement
		if (!svg || !path || !host) return

		let geo = restingGeo(host.clientWidth, host.clientHeight)
		let cur = { x: geo.cx, y: geo.cy }
		let target = { ...cur }
		let raf = 0

		const draw = () => {
			svg.setAttribute('viewBox', `0 0 ${geo.W} ${geo.H}`)
			path.setAttribute('d', vegaChecker(geo.W, geo.H, geo.cell, cur.x, cur.y, geo.R))
		}

		const tick = () => {
			const dx = target.x - cur.x
			const dy = target.y - cur.y
			if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
				cur = { ...target }
				draw()
				raf = 0
				return
			}
			// slow, heavy easing: the sphere glides rather than snaps
			cur = { x: cur.x + dx * 0.06, y: cur.y + dy * 0.06 }
			draw()
			raf = requestAnimationFrame(tick)
		}
		const kick = () => {
			if (!raf) raf = requestAnimationFrame(tick)
		}

		const resize = () => {
			geo = restingGeo(host.clientWidth, host.clientHeight)
			cur = { x: geo.cx, y: geo.cy }
			target = { ...cur }
			draw()
		}
		resize()
		const ro = new ResizeObserver(resize)
		ro.observe(host)

		const onMove = (e: PointerEvent) => {
			const b = host.getBoundingClientRect()
			const x = e.clientX - b.left
			const y = e.clientY - b.top
			// keep the sphere mostly clear of the text panel on the left
			target = { x: Math.max(geo.W * 0.42, Math.min(geo.W - geo.R * 0.3, x)), y: Math.max(geo.R * 0.4, Math.min(geo.H - geo.R * 0.4, y)) }
			kick()
		}
		const onLeave = () => {
			target = { x: geo.cx, y: geo.cy }
			kick()
		}
		if (motion) {
			host.addEventListener('pointermove', onMove)
			host.addEventListener('pointerleave', onLeave)
		} else onLeave()

		return () => {
			ro.disconnect()
			host.removeEventListener('pointermove', onMove)
			host.removeEventListener('pointerleave', onLeave)
			if (raf) cancelAnimationFrame(raf)
		}
	}, [motion])

	return (
		<>
			<svg
				ref={svgRef}
				className={s.heroField}
				viewBox={`0 0 ${SSR_W} ${SSR_H}`}
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
				focusable="false"
			>
				<path ref={pathRef} d={INITIAL_D} className={s.fillInk} />
			</svg>
			{canMove && (
				<button type="button" className={s.motionToggle} aria-pressed={motion} onClick={() => setMotion((m) => !m)}>
					<span className={s.motionDot} aria-hidden="true" />
					{motion ? 'Kinetic: on' : 'Kinetic: off'}
				</button>
			)}
		</>
	)
}
