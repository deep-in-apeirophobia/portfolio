import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { DingbatParagraphs } from './DingbatToggle'
import { fontVars } from './fonts'
import s from './grunge.module.css'

export const metadata: Metadata = {
	title: 'Grunge Typography · Atrin Hojjat',
	description: 'Atrin Hojjat, full-stack developer. Portfolio redesigned as a 90s deconstructed, photocopied magazine spread in the spirit of Ray Gun and Emigre.',
}

/* ---------- helpers ---------- */

// Deterministic pseudo-random numbers so torn edges are identical on every render.
function rng(seed: number) {
	let t = seed * 9301 + 49297
	return () => {
		t = (t * 16807) % 2147483647
		return (t % 10000) / 10000
	}
}

// A clip-path polygon with ragged, hand-torn top and bottom edges (px amplitude).
function torn(seed: number, amp = 7, steps = 22): string {
	const r = rng(seed)
	const top: string[] = []
	const bottom: string[] = []
	for (let i = 0; i <= steps; i++) {
		const x = ((i / steps) * 100).toFixed(2)
		top.push(`${x}% ${(r() * amp).toFixed(1)}px`)
		bottom.unshift(`${x}% calc(100% - ${(r() * amp).toFixed(1)}px)`)
	}
	return `polygon(${[...top, ...bottom].join(',')})`
}

// Project descriptions contain stray line breaks and indentation; rebuild real paragraphs.
function paragraphs(text: string): string[] {
	const parts = text.split('\n').map(p => p.replace(/\s+/g, ' ').trim()).filter(Boolean)
	const out: string[] = []
	for (const p of parts) {
		if (out.length && /^[a-z]/.test(p)) out[out.length - 1] += ' ' + p
		else out.push(p)
	}
	return out
}

const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

// A word cut into three horizontal strips that slide out of register.
function Sliced({ children, className = '' }: { children: string, className?: string }) {
	return (
		<span className={`${s.slice} ${className}`}>
			<span className={s.srOnly}>{children}</span>
			<span aria-hidden="true" className={s.sliceGhost}>{children}</span>
			<span aria-hidden="true" className={`${s.sliceBand} ${s.band1}`}>{children}</span>
			<span aria-hidden="true" className={`${s.sliceBand} ${s.band2}`}>{children}</span>
			<span aria-hidden="true" className={`${s.sliceBand} ${s.band3}`}>{children}</span>
		</span>
	)
}

function Tape({ className = '', style }: { className?: string, style?: CSSProperties }) {
	return <span aria-hidden="true" className={`${s.tape} ${className}`} style={style} />
}

function RegMark({ className = '' }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={`${s.reg} ${className}`} viewBox="0 0 40 40" width="40" height="40">
			<circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
			<path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="1.2" />
		</svg>
	)
}

function Scratches({ className = '' }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={`${s.scratches} ${className}`} viewBox="0 0 1000 600" preserveAspectRatio="none">
			<path d="M40 20 L180 590" /><path d="M300 0 L310 600" /><path d="M520 30 C 540 200, 500 380, 560 600" />
			<path d="M760 0 L700 420" /><path d="M880 80 L960 600" /><path d="M130 300 L420 330" />
			<path d="M610 120 L990 90" />
		</svg>
	)
}

// Hand-drawn marker loop, used to circle words.
function Scribble({ className = '' }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={`${s.scribble} ${className}`} viewBox="0 0 300 120" preserveAspectRatio="none">
			<path d="M40 70 C 20 20, 180 0, 260 30 C 310 50, 280 105, 170 110 C 70 115, 5 95, 25 55 C 40 25, 120 12, 210 18" />
		</svg>
	)
}

function Arrow({ className = '' }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={`${s.arrow} ${className}`} viewBox="0 0 160 80">
			<path d="M5 70 C 40 60, 90 50, 145 15" />
			<path d="M118 12 L148 12 L140 40" />
		</svg>
	)
}

/* SVG filters: ink bleed, eroded photocopy type, and posterised xerox images. */
function Filters() {
	return (
		<svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }} focusable="false">
			<defs>
				<filter id="gr-rough" x="-5%" y="-5%" width="110%" height="110%">
					<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="t" />
					<feDisplacementMap in="SourceGraphic" in2="t" scale="4" />
				</filter>
				<filter id="gr-erode" x="0" y="0" width="100%" height="100%">
					<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="8" result="n" />
					<feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 5.2" result="holes" />
					<feComposite in="SourceGraphic" in2="holes" operator="in" />
				</filter>
				<filter id="gr-xerox" colorInterpolationFilters="sRGB">
					<feColorMatrix type="saturate" values="0" />
					<feComponentTransfer>
						<feFuncR type="discrete" tableValues="0.08 0.08 0.42 0.8 0.95 0.95" />
						<feFuncG type="discrete" tableValues="0.07 0.07 0.40 0.78 0.92 0.92" />
						<feFuncB type="discrete" tableValues="0.06 0.06 0.36 0.72 0.86 0.86" />
					</feComponentTransfer>
				</filter>
			</defs>
		</svg>
	)
}

const NAV = [
	{ href: '#gr-top', num: '01', label: 'Cover' },
	{ href: '#gr-about', num: '02', label: 'About' },
	{ href: '#gr-work', num: '03', label: 'Work' },
	{ href: '#gr-contact', num: '04', label: 'Contact' },
]

const PROJECT_NOTES = ['~1M users. not a typo.', 'house calls, covid-era', 'no-contact traffic stops', 'cakes + motion', 'pay by cheque?!']
const NAME_VARIANTS = [s.nameAnton, s.nameBodoni, s.nameStencil, s.nameDirt, s.nameGlitch]

function Label({ children, className = '' }: { children: ReactNode, className?: string }) {
	return <span className={`${s.dymo} ${className}`}>{children}</span>
}

/* ---------- page ---------- */

export default function Page() {
	return (
		<div className={`${fontVars} ${s.page}`}>
			<Filters />
			<a href="#gr-about" className={s.skip}>Skip to content</a>

			{/* ================= COVER ================= */}
			<header id="gr-top" className={s.hero}>
				<div className={s.masthead}>
					<p className={s.issue}>
						<span>Issue Nº 01</span>
						<span className={s.issueSep} aria-hidden="true">✂</span>
						<span>the portfolio of</span>
					</p>
					<nav aria-label="Sections" className={s.nav}>
						<ul>
							{NAV.map((n, i) => (
								<li key={n.href} style={{ '--r': `${[-4, 3, -2, 5][i]}deg` } as CSSProperties}>
									<a href={n.href}><span className={s.navNum}>{n.num}</span>{n.label}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className={s.stage}>
					<Scratches className={s.heroScratches} />
					<div className={s.gridFrag} aria-hidden="true">
						{[0, 1, 2, 3, 4, 5].map(i => <span key={i}>{i * 12}</span>)}
					</div>
					<RegMark className={s.regTL} />
					<RegMark className={s.regBR} />

					<h1 className={s.name}>
						<Sliced className={s.nameFirst}>ATRIN</Sliced>
						<span className={s.nameLast}>hojjat</span>
					</h1>
					<p className={s.role}>{PROFILE.role}</p>

					<figure className={s.heroPhoto}>
						<Tape className={s.tapeTop} />
						<div className={s.halftone}>
							<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}, photocopied`} width={307} height={307} priority sizes="(min-width: 900px) 22vw, 64vw" />
						</div>
						<figcaption>fig. A — the developer, xeroxed</figcaption>
					</figure>

					<p className={s.message}>
						<Sliced className={s.wBuild}>Build</Sliced>{' '}
						<span className={s.wVibrant}><span className={s.glitchy} data-text="VIBRANT,">VIBRANT,</span></span>{' '}
						<span className={s.wFast}>
							<span className={s.mirror} aria-hidden="true">FAST,</span>
							FAST,
							<Scribble className={s.fastLoop} />
						</span>{' '}
						<span className={s.wAnd}>and</span>{' '}
						<span className={s.wScalable}>SCALABLE</span>{' '}
						<span className={s.wApps}>WebApps</span>{' '}
						<span className={s.wMe}>with ME <Arrow className={s.meArrow} /></span>
					</p>

					<p className={s.tagline} style={{ clipPath: torn(4, 6) }}>
						<span className={s.taglineTag}>{'// tagline'}</span>
						{PROFILE.heroTagline}
					</p>
					<p className={s.issueNum} aria-hidden="true">Nº01<small>no rules / no grid</small></p>
					<p className={s.cont} aria-hidden="true">continued on p. 2 ↓</p>
				</div>
			</header>

			<main>
				{/* ================= ABOUT ================= */}
				<section id="gr-about" aria-labelledby="gr-about-h" className={s.about}>
					<Scratches className={s.aboutScratches} />
					<h2 id="gr-about-h" className={s.aboutHead}>
						<span className={s.aboutBig}>About</span>
						<span className={s.aboutMe}>me.</span>
					</h2>

					<div className={s.aboutGrid}>
						<figure className={s.contact}>
							<Tape className={s.tapeA} />
							<Tape className={s.tapeB} />
							<div className={s.sheet}>
								{[
									{ cls: s.expBlown, frame: '14' },
									{ cls: s.expMid, frame: '14A' },
									{ cls: s.expDark, frame: '15' },
								].map((f, i) => (
									<div key={f.frame} className={s.frame}>
										<div className={`${s.frameImg} ${f.cls}`}>
											<Image src={PROFILE.photo} alt={i === 1 ? PROFILE.name : ''} width={307} height={307} sizes="(min-width: 900px) 14vw, 40vw" />
										</div>
										<span className={s.frameNum} aria-hidden="true">▸ {f.frame}</span>
									</div>
								))}
								<Scribble className={s.sheetLoop} />
								<span className={s.sheetNote} aria-hidden="true">this one ✓</span>
							</div>
							<figcaption>contact sheet · 3 exposures of {PROFILE.firstName}</figcaption>
						</figure>

						<p className={s.pull} aria-hidden="true">creative,<br />passionate</p>

						<div className={s.aboutText}>
							<p className={s.kicker}>02 · the interview · {PROFILE.greeting}</p>
							<DingbatParagraphs paragraphs={ABOUT.map(p => p.replace(/\s+/g, ' ').trim())} />
						</div>
					</div>
				</section>

				{/* ================= WORK ================= */}
				<section id="gr-work" aria-labelledby="gr-work-h" className={s.work}>
					<h2 id="gr-work-h" className={s.workHead}>
						<span className={s.workSel}>selected</span>
						<span className={s.workWord} aria-hidden="true">
							{'WORK'.split('').map((l, i) => <span key={i} style={{ '--r': `${[-7, 4, -3, 9][i]}deg`, '--y': `${[0, 0.06, -0.04, 0.09][i]}em` } as CSSProperties}>{l}</span>)}
						</span>
						<span className={s.srOnly}>Work</span>
					</h2>
					<p className={s.workSub}>five projects, photocopied at 110% and pasted up by hand</p>

					<ol className={s.projects}>
						{PROJECTS.map((p, i) => {
							const num = String(i + 1).padStart(2, '0')
							const body = paragraphs(p.description)
							return (
								<li key={p.name} className={`${s.project} ${i % 2 ? s.projOdd : s.projEven}`}>
									<article aria-labelledby={`gr-p${i}`}>
										<span className={s.projNum} aria-hidden="true">{num}</span>
										<figure className={s.projFig}>
											<Tape className={s.tapeC} />
											<Tape className={s.tapeD} />
											<div className={s.xerox}>
												<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} width={800} height={600} sizes="(min-width: 900px) 52vw, 92vw" />
											</div>
											<figcaption>fig. {num} — {p.link ? host(p.link) : 'private build, no public url'}</figcaption>
										</figure>

										<h3 id={`gr-p${i}`} className={`${s.projName} ${NAME_VARIANTS[i % NAME_VARIANTS.length]}`}>
											{i === 0 ? <Sliced>{p.name}</Sliced> : p.name}
										</h3>
										<p className={s.projNote} aria-hidden="true">{PROJECT_NOTES[i]}</p>

										<div className={s.scrap} style={{ clipPath: torn(10 + i, 8) }}>
											{body.map((b, j) => <p key={j}>{b}</p>)}
											<ul className={s.stack} aria-label={`${p.name} tech stack`}>
												{p.stack.map((t, k) => (
													<li key={t} style={{ '--r': `${((k * 37) % 7) - 3}deg` } as CSSProperties}><Label>{t}</Label></li>
												))}
											</ul>
											{p.link && (
												<a className={s.visit} href={p.link} target="_blank" rel="noreferrer">
													Visit website<span aria-hidden="true"> ↗</span><span className={s.srOnly}> (opens in a new tab)</span>
												</a>
											)}
										</div>
									</article>
									{i < PROJECTS.length - 1 && <div className={s.cut} aria-hidden="true">✂ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>}
								</li>
							)
						})}
					</ol>
				</section>
			</main>

			{/* ================= CONTACT ================= */}
			<footer id="gr-contact" className={s.footer} aria-labelledby="gr-contact-h">
				<Scratches className={s.footScratches} />
				<h2 id="gr-contact-h" className={s.footLabel}>04 · Contact</h2>

				<p className={s.pitch}>
					<span className={s.pitchLead}>If you&apos;re looking to make an amazing app,</span>
					<Sliced className={s.pitchBig}>don&apos;t hesitate</Sliced>
					<span className={s.pitchCall}>to call!</span>
				</p>
				<p className={s.pitch2}>{PROFILE.footerPitch[1]}</p>

				<div className={s.footGrid}>
					<div>
						<p className={s.footSmall}>write to</p>
						<ul className={s.emails}>
							{CONTACT.emails.map(e => <li key={e}><a href={`mailto:${e}`}>{e}</a></li>)}
						</ul>
					</div>
					<div>
						<p className={s.footSmall}>elsewhere</p>
						<ul className={s.links}>
							{CONTACT.links.map((l, i) => (
								<li key={l.href} style={{ '--r': `${i ? 3 : -4}deg` } as CSSProperties}>
									<a href={l.href} target="_blank" rel="noreferrer">{l.label}<span aria-hidden="true"> ↗</span><span className={s.srOnly}> (opens in a new tab)</span></a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className={s.ticker}>
					<p className={s.srOnly}>Tech I work with:</p>
					<div className={s.tickerTrack}>
						<ul className={s.tickerList}>
							{TECH_FOOTER.map(t => <li key={t}>{t}<span aria-hidden="true"> ✺</span></li>)}
						</ul>
						<ul className={s.tickerList} aria-hidden="true">
							{TECH_FOOTER.map(t => <li key={t}>{t}<span> ✺</span></li>)}
						</ul>
					</div>
				</div>

				<div className={s.footEnd}>
					<Link href="/styles" className={s.allStyles}>← All styles</Link>
					<p className={s.colophon}>
						Colophon: set in Anton, Bodoni Moda, Big Shoulders Stencil, Special Elite, Courier Prime, Permanent Marker and Rubik Dirt/Glitch.
						After <i>Ray Gun</i>, <i>Emigre</i>, <i>The Face</i> and <i>FUSE</i>. © {PROFILE.name}.
					</p>
				</div>
			</footer>
		</div>
	)
}
