'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CONTACT, PROFILE } from '@/content/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import s from './neumorphism.module.css'

// The three adjectives of the hero message become the three detents of a physical dial.
const MODES = [
	{ key: 'vibrant', label: 'Vibrant', angle: -60 },
	{ key: 'fast', label: 'Fast', angle: 0 },
	{ key: 'scalable', label: 'Scalable', angle: 60 },
] as const
type Mode = (typeof MODES)[number]['key']

export default function HeroDial() {
	const [mode, setMode] = useState<Mode>('vibrant')
	const current = MODES.find((m) => m.key === mode) ?? MODES[0]

	const word = (key: Mode, text: string) => (
		<span className={s.heroWord} data-active={mode === key}>{text}</span>
	)

	return (
		<div className={s.heroGrid}>
			<div className={s.heroCopy}>
				<p className={s.hello}>
					<span className={s.led} aria-hidden="true" />
					{PROFILE.greeting}
				</p>
				<h1 className={s.heroTitle}>
					Build {word('vibrant', 'vibrant')}, {word('fast', 'fast')} and {word('scalable', 'scalable')} web apps with me
				</h1>
				<p className={s.heroTagline}>{PROFILE.heroTagline}.</p>
				<div className={s.heroActions}>
					<a href="#work" className={`${s.btn} ${s.btnPrimary}`}>See my work</a>
					<a href="#contact" className={s.btn}>Get in touch</a>
				</div>
				<div className={s.heroSocial}>
				<p className={s.heroSocialLabel} id="find-me">Find me</p>
				<ul className={s.heroSocialList} aria-labelledby="find-me">
					{CONTACT.links.map((l) => {
						const Icon = l.label.toLowerCase().includes('git') ? GithubIcon : LinkedinIcon
						return (
							<li key={l.href}>
								<a href={l.href} target="_blank" rel="noopener noreferrer" className={s.circleBtn} aria-label={`${l.label} (opens in a new tab)`}>
									<Icon />
								</a>
							</li>
						)
					})}
					<li>
						<a href={`mailto:${CONTACT.emails[0]}`} className={s.circleBtn} aria-label={`Email ${CONTACT.emails[0]}`}>
							<MailIcon />
						</a>
					</li>
				</ul>
				</div>
			</div>

			<div className={s.device}>
				<div className={s.deviceTop}>
					<span className={s.deviceLabel}>Profile</span>
					<span className={s.deviceStatus}><span className={s.led} aria-hidden="true" /> Soft UI</span>
				</div>

				<div className={s.avatarWell}>
					<div className={s.avatarRing}>
						<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width={307} height={307} priority className={s.avatarImg} />
					</div>
				</div>
				<p className={s.deviceName}>{PROFILE.name}</p>
				<p className={s.deviceRole}>{PROFILE.role}</p>

				<div className={s.dialArea}>
					<div className={s.dialTrack} aria-hidden="true">
						{MODES.map((m) => (
							<span key={m.key} className={s.tick} data-active={m.key === mode} style={{ transform: `rotate(${m.angle}deg)` }} />
						))}
						<div className={s.knob} style={{ transform: `rotate(${current.angle}deg)` }}>
							<span className={s.knobNotch} />
						</div>
					</div>
					<div className={s.dialOptions} role="group" aria-label="Dial: highlight a word in the headline">
						{MODES.map((m) => (
							<button
								key={m.key}
								type="button"
								aria-pressed={m.key === mode}
								onClick={() => setMode(m.key)}
								className={s.dialBtn}
							>
								{m.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
