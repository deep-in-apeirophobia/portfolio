'use client'

import { MotionConfig, motion } from 'motion/react'
import { useState } from 'react'
import s from './dada.module.css'
import { cx } from './Ransom'

// Each word of the hero message is a clipping from a different newspaper.
const LOOKS = [
	{ cls: cx(s.fFraktur, s.scrap, 'px-[.18em] pt-[.05em]'), size: 1.05 },
	{ cls: cx(s.fBodoni, 'bg-[#16130f] px-[.2em] font-black italic text-[#f4eddb]'), size: 1.1 },
	{ cls: cx(s.fAnton, s.scrap, 'px-[.14em] uppercase text-[#c8221a]'), size: 1.3 },
	{ cls: cx(s.fElite, 'bg-[#f6ecc6] px-[.25em] lowercase'), size: 0.62 },
	{ cls: cx(s.fRubik, s.newsprint, 'px-[.18em]'), size: 0.9 },
	{ cls: cx(s.fPlayfair, s.scrap, 'px-[.18em] font-black italic underline decoration-[.06em] underline-offset-[.12em]'), size: 1.05 },
	{ cls: cx(s.fAbril, 'bg-[#c8221a] px-[.2em] text-[#f4eddb]'), size: 0.95 },
	{ cls: cx(s.fOld, s.scrap, 'px-[.2em] font-bold'), size: 0.8 },
	{ cls: cx(s.fCourier, 'border-[.06em] border-[#16130f] bg-[#fbf6e8] px-[.2em] font-bold'), size: 0.7 },
]
const CUTS = [s.cut0, s.cut1, s.cut2, s.cut3]
const INITIAL_ROT = [-3, 2, -4, 5, -2, 3, -5]
const INITIAL_Y = [0, -0.08, 0.06, -0.12, 0.04, -0.05, 0.1]

type Piece = { word: string, id: number, look: number, rot: number, y: number, cut: number }

const initial = (words: string[]): Piece[] =>
	words.map((word, i) => ({ word, id: i, look: i % LOOKS.length, rot: INITIAL_ROT[i % 7], y: INITIAL_Y[i % 7], cut: i % 4 }))

function shuffle<T>(arr: T[]): T[] {
	const a = [...arr]
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}

export default function TzaraBag({ words, sentence }: { words: string[], sentence: string }) {
	const [pieces, setPieces] = useState<Piece[]>(() => initial(words))
	const [shaken, setShaken] = useState(0)

	const shake = () => {
		const looks = shuffle(LOOKS.map((_, i) => i))
		setPieces(p => shuffle(p).map((piece, i) => ({
			...piece,
			look: looks[i % looks.length],
			rot: Math.round((Math.random() - 0.5) * 16),
			y: (Math.random() - 0.5) * 0.3,
			cut: Math.floor(Math.random() * 4),
		})))
		setShaken(n => n + 1)
	}
	const reset = () => { setPieces(initial(words)); setShaken(0) }

	return (
		<MotionConfig reducedMotion="user">
			<div>
				<p className="sr-only">{sentence}</p>
				<p
					aria-hidden="true"
					className="flex flex-wrap items-center gap-x-[.3em] gap-y-[.25em] text-[clamp(1.9rem,3.7vw,3.5rem)] leading-none text-[#16130f]"
				>
					{pieces.map(p => (
						<motion.span
							key={p.id}
							layout
							initial={false}
							animate={{ rotate: p.rot, y: `${p.y}em` }}
							transition={{ type: 'spring', stiffness: 260, damping: 18 }}
							className={s.pasted}
							style={{ display: 'inline-block' }}
						>
							<span
								className={cx(LOOKS[p.look].cls, CUTS[p.cut], 'inline-block py-[.08em] leading-[1]')}
								style={{ fontSize: `${LOOKS[p.look].size}em` }}
							>
								{p.word}
							</span>
						</motion.span>
					))}
				</p>

				<div className="mt-6 flex flex-wrap items-center gap-3">
					<button
						type="button"
						onClick={shake}
						className={cx(s.bagBtn, s.fRubik, 'group inline-flex -rotate-2 items-center gap-2 bg-[#16130f] px-4 py-2.5 text-[13px] uppercase tracking-wider text-[#f4eddb] hover:bg-[#c8221a]')}
					>
						<span aria-hidden="true" className={cx(s.bagIcon, 'inline-block text-xl leading-none')}>☞</span>
						Shake the bag
					</button>
					<button
						type="button"
						onClick={reset}
						disabled={shaken === 0}
						className={cx(s.fElite, 'rotate-1 border-2 border-dashed border-[#16130f] bg-[#f4eddb] px-3 py-2 text-sm hover:bg-[#f6ecc6] disabled:cursor-not-allowed disabled:opacity-45')}
					>
						re-assemble the sentence
					</button>
					<span className={cx(s.fCourier, 'text-[13px] italic text-[#4a3f30]')} aria-live="polite">
						{shaken === 0
							? '“Take a newspaper. Take some scissors.” (T. Tzara)'
							: `Poem Nr. ${shaken}: ${pieces.map(p => p.word).join(' ')}`}
					</span>
				</div>
			</div>
		</MotionConfig>
	)
}
