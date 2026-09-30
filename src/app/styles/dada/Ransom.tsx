import type { CSSProperties } from 'react'
import s from './dada.module.css'

// Deterministic PRNG so server and client render the same "random" collage.
export function rng(seed: number) {
	let a = seed >>> 0
	return () => {
		a = (a + 0x6d2b79f5) >>> 0
		let t = a
		t = Math.imul(t ^ (t >>> 15), t | 1)
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296
	}
}

export const cx = (...c: (string | false | undefined | null)[]) => c.filter(Boolean).join(' ')

// A torn-paper polygon: jitter in px along each edge so the tear looks the same at any size.
export function torn(seed: number, jag = 7, steps = 14): string {
	const r = rng(seed)
	const j = () => (r() * jag).toFixed(1)
	const pts: string[] = []
	for (let i = 0; i <= steps; i++) pts.push(`${((i / steps) * 100).toFixed(1)}% ${j()}px`)
	for (let i = 1; i <= Math.max(4, steps / 3); i++) pts.push(`calc(100% - ${j()}px) ${((i / Math.max(4, steps / 3)) * 100).toFixed(1)}%`)
	for (let i = steps - 1; i >= 0; i--) pts.push(`${((i / steps) * 100).toFixed(1)}% calc(100% - ${j()}px)`)
	for (let i = Math.floor(Math.max(4, steps / 3)) - 1; i >= 1; i--) pts.push(`${j()}px ${((i / Math.max(4, steps / 3)) * 100).toFixed(1)}%`)
	return `polygon(${pts.join(', ')})`
}

const LETTER_STYLES = [s.s0, s.s1, s.s2, s.s3, s.s4, s.s5, s.s6, s.s7, s.s8]
const CUTS = [s.cut0, s.cut1, s.cut2, s.cut3]
// Letters that still read correctly when pasted upside down.
const FLIPPABLE = new Set(['H', 'I', 'N', 'O', 'S', 'X', 'Z', 'o', 's', 'x', 'z'])

type RansomProps = {
	text: string,
	seed?: number,
	className?: string,
	/** restrict to a subset of letter styles (indices into LETTER_STYLES) */
	palette?: number[],
	/** probability of flipping a symmetric letter upside down */
	flip?: number,
}

// Ransom-note lettering: every glyph is cut from a different source. Screen readers get the plain text.
export function Ransom({ text, seed = 1, className, palette, flip = 0.35 }: RansomProps) {
	const r = rng(seed)
	const pal = palette ?? LETTER_STYLES.map((_, i) => i)
	let last = -1
	const words = text.split(' ')
	return (
		<span className={className}>
			<span className="sr-only">{text}</span>
			<span aria-hidden="true" className="inline-flex flex-wrap items-baseline gap-x-[0.28em] gap-y-[0.1em]">
				{words.map((w, wi) => (
					<span key={wi} className={s.word}>
						{[...w].map((ch, i) => {
							let pick = pal[Math.floor(r() * pal.length)]
							if (pick === last) pick = pal[(pal.indexOf(pick) + 1) % pal.length]
							last = pick
							const rot = (r() - 0.5) * 12
							const scale = 0.84 + r() * 0.3
							const up = FLIPPABLE.has(ch) && r() < flip
							const style: CSSProperties = {
								transform: `rotate(${(up ? 180 : 0) + rot}deg) translateY(${((r() - 0.5) * 0.08).toFixed(3)}em)`,
								fontSize: `${scale.toFixed(2)}em`,
							}
							return (
								<span key={i} className={cx(s.letter, LETTER_STYLES[pick], CUTS[Math.floor(r() * CUTS.length)])} style={style}>
									{ch}
								</span>
							)
						})}
					</span>
				))}
			</span>
		</span>
	)
}
