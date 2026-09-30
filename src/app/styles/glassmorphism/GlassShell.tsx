'use client'

import Link from 'next/link'
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import styles from './glass.module.css'
import { ChevronLeft } from './Icons'

const SECTIONS = [
	{ id: 'top', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'work', label: 'Work' },
	{ id: 'contact', label: 'Contact' },
]

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * Client shell: owns the "Reduce transparency" switch, the floating Liquid-Glass tab bar with its
 * sliding lens, and the pointer-tracked specular highlight on glass surfaces.
 */
export default function GlassShell({ className, children }: { className: string, children: ReactNode }) {
	const [solid, setSolid] = useState(false)
	const [active, setActive] = useState('top')
	const [lens, setLens] = useState<{ x: number, w: number } | null>(null)
	const tabsRef = useRef<HTMLUListElement>(null)
	const raf = useRef(0)

	// Scroll spy: whichever section crosses the middle band of the viewport is "active".
	useEffect(() => {
		const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
		const io = new IntersectionObserver(entries => {
			for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
		}, { rootMargin: '-45% 0px -50% 0px' })
		els.forEach(el => io.observe(el))
		return () => io.disconnect()
	}, [])

	// Position the lens under the active tab.
	const measure = useCallback(() => {
		const ul = tabsRef.current
		const a = ul?.querySelector<HTMLAnchorElement>(`a[data-id="${active}"]`)
		if (!ul || !a) return
		setLens({ x: a.offsetLeft, w: a.offsetWidth })
	}, [active])

	useIsoLayoutEffect(() => { measure() }, [measure])
	useEffect(() => {
		window.addEventListener('resize', measure)
		document.fonts?.ready.then(measure).catch(() => {})
		return () => window.removeEventListener('resize', measure)
	}, [measure])

	// Specular highlight follows the pointer across whichever glass surface it is over.
	const onPointerMove = (e: React.PointerEvent) => {
		if (e.pointerType !== 'mouse') return
		const target = (e.target as HTMLElement).closest<HTMLElement>('[data-glass]')
		if (!target) return
		const { clientX, clientY } = e
		cancelAnimationFrame(raf.current)
		raf.current = requestAnimationFrame(() => {
			const r = target.getBoundingClientRect()
			target.style.setProperty('--mx', `${((clientX - r.left) / r.width) * 100}%`)
			target.style.setProperty('--my', `${((clientY - r.top) / r.height) * 100}%`)
		})
	}

	return (
		<div className={className} data-solid={solid ? 'true' : 'false'} onPointerMove={onPointerMove}>
			<header className={styles.chrome}>
				<Link href="/styles" className={`${styles.backPill} ${styles.focusRing}`} data-glass>
					<ChevronLeft className={styles.backIcon} />
					<span>All styles</span>
				</Link>

				<nav aria-label="Sections" className={styles.tabsWrap}>
					<ul className={styles.tabs} ref={tabsRef} data-glass>
						<li aria-hidden role="presentation" className={styles.lens} style={lens ? { transform: `translateX(${lens.x}px)`, width: lens.w, opacity: 1 } : undefined} />
						{SECTIONS.map(s => (
							<li key={s.id}>
								<a
									href={`#${s.id}`}
									data-id={s.id}
									aria-current={active === s.id ? 'true' : undefined}
									className={`${styles.tab} ${styles.focusRing}`}
									onClick={() => setActive(s.id)}
								>
									{s.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<button
					type="button"
					role="switch"
					aria-checked={solid}
					aria-label="Reduce transparency"
					onClick={() => setSolid(v => !v)}
					className={`${styles.togglePill} ${styles.focusRing}`}
					data-glass
				>
					<svg className={styles.toggleIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable={false}>
						<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
						<path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
					</svg>
					<span className={styles.toggleLabel} aria-hidden>Reduce transparency</span>
					<span className={styles.switch} aria-hidden><span className={styles.knob} /></span>
				</button>
			</header>

			{children}
		</div>
	)
}
