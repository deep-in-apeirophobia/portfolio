'use client'

import { useId, useState } from 'react'
import { PROFILE } from '@/content/portfolio'
import s from './skeuo.module.css'

// The hero is a leather-bound notebook with an iOS Notes-style legal pad inside.
// The toggle is a real, working iOS 5 switch that swaps the handwriting for typeset text.
export default function HeroNotebook() {
	const [handwriting, setHandwriting] = useState(true)
	const labelId = useId()

	return (
		<div className={`${s.notebook} ${handwriting ? '' : s.typeset}`}>
			<div className={s.cover}>
				<div className={s.monogram} aria-hidden="true">AH</div>
				<div className={s.brass}>
					<span className={`${s.screw} ${s.screwTL}`} aria-hidden="true" style={{ width: 8, height: 8, left: 6, top: 6 }} />
					<span className={`${s.screw} ${s.screwTR}`} aria-hidden="true" style={{ width: 8, height: 8, right: 6, top: 6 }} />
					<span className={`${s.screw} ${s.screwBL}`} aria-hidden="true" style={{ width: 8, height: 8, left: 6, bottom: 6 }} />
					<span className={`${s.screw} ${s.screwBR}`} aria-hidden="true" style={{ width: 8, height: 8, right: 6, bottom: 6 }} />
					<h1 className={s.brassName}>{PROFILE.name}</h1>
					<p className={s.brassRole}>{PROFILE.role}</p>
				</div>
				<div className={s.switchRow}>
					<span id={labelId}>Handwriting</span>
					<button
						type="button"
						role="switch"
						aria-checked={handwriting}
						aria-labelledby={labelId}
						className={s.switch}
						onClick={() => setHandwriting((v) => !v)}
					>
						<span className={s.switchTrack} aria-hidden="true">
							<span className={s.switchOn}>ON</span>
							<span className={s.switchOff}>OFF</span>
						</span>
						<span className={s.switchKnob} aria-hidden="true" style={{ left: handwriting ? 79 : 15 }} />
					</button>
				</div>
			</div>

			<div className={s.pad}>
				<div className={s.padHeader}>
					<p className={s.padHeaderTitle}>Notes</p>
				</div>
				<div className={s.padBody}>
					<p className={s.padDate} aria-hidden="true">
						<span>Today</span>
						<span>New project?</span>
					</p>
					<p className={s.greeting}>{PROFILE.greeting}</p>
					<p className={s.headline}>
						Build <span className={s.scribble}>vibrant</span>, <span className={s.scribble}>fast</span> and{' '}
						<span className={s.scribble}>scalable</span> web apps <span style={{ whiteSpace: 'nowrap' }}>with <span className={s.circled}>me</span></span>
					</p>
					<p className={s.tagline}>{PROFILE.heroTagline}.</p>
					<div className={s.padActions}>
						<a href="#projects" className={`${s.btn} ${s.btnBlue}`}>See my work</a>
						<a href="#contact" className={`${s.btn} ${s.btnSilver}`}>Say hello</a>
					</div>
				</div>
			</div>

			<span className={s.ribbon} aria-hidden="true" />
		</div>
	)
}
