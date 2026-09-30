import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { fraunces, kablammo, shrikhand, sniglet } from './fonts'
import { Balloon, Flower, Paisley, PsyDefs, Whiplash } from './ornaments'
import s from './psy.module.css'

export const metadata: Metadata = {
	title: 'Psychedelic · Atrin Hojjat',
	description: 'The portfolio of Atrin Hojjat, full-stack developer, redesigned as a 1966–1970 San Francisco psychedelic concert poster.',
}

function paragraphs(text: string): string[] {
	return text
		.split(/(?<=[.!?])\s*\n\s*/)
		.map((p) => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
}

const NIGHTS = ['Night One', 'Night Two', 'Night Three', 'Night Four', 'Night Five']
// Moscoso-style vibrating complementary pairs: [field, lettering]
const THEMES = ['red', 'blue', 'magenta', 'orange', 'violet'] as const

const NAV = [
	{ href: '#about', label: 'The Headliner' },
	{ href: '#acts', label: 'The Acts' },
	{ href: '#tickets', label: 'Tickets' },
]

function Corners({ color }: { color: string }) {
	return (
		<>
			<Whiplash className={`${s.corner} ${s.cTL}`} style={{ color }} />
			<Whiplash className={`${s.corner} ${s.cTR}`} style={{ color }} />
			<Whiplash className={`${s.corner} ${s.cBL}`} style={{ color }} />
			<Whiplash className={`${s.corner} ${s.cBR}`} style={{ color }} />
		</>
	)
}

function Medallion() {
	const ring = 'FULL-STACK DEVELOPER ✺ PROJECTS APPEARING NIGHTLY ✺ '
	return (
		<svg className={s.medallion} viewBox="0 0 400 400" role="img" aria-label={`Portrait of ${PROFILE.name}, ${PROFILE.role}`}>
			<defs>
				<clipPath id="psy-face"><circle cx="200" cy="200" r="118" /></clipPath>
				<path id="psy-ring" d="M200 200 m -158 0 a 158 158 0 1 1 316 0 a 158 158 0 1 1 -316 0" />
			</defs>
			{/* scalloped petal edge */}
			<g stroke="#2a0a2e" strokeWidth="4">
				{Array.from({ length: 28 }, (_, i) => {
					const a = (i / 28) * Math.PI * 2
					return <circle key={i} cx={200 + Math.cos(a) * 184} cy={200 + Math.sin(a) * 184} r="17" fill={i % 2 ? '#ffe600' : '#19c24a'} />
				})}
			</g>
			<circle cx="200" cy="200" r="182" fill="#2438ff" stroke="#2a0a2e" strokeWidth="5" />
			<circle cx="200" cy="200" r="136" fill="#ff8a00" stroke="#2a0a2e" strokeWidth="5" />
			<g className={s.ringSpin}>
				<text className={s.ringText}>
					<textPath href="#psy-ring" textLength="990" lengthAdjust="spacingAndGlyphs">{ring}{ring}</textPath>
				</text>
			</g>
			<image href={PROFILE.photo} x="82" y="82" width="236" height="236" clipPath="url(#psy-face)" filter="url(#psy-duotone)" preserveAspectRatio="xMidYMid slice" />
			<circle cx="200" cy="200" r="118" fill="none" stroke="#2a0a2e" strokeWidth="6" />
			<circle cx="200" cy="200" r="126" fill="none" stroke="#e0169a" strokeWidth="6" />
		</svg>
	)
}

function NameArt() {
	// ATRIN rides an arch, HOJJAT hangs in a bowl: together they fill a lens shape, poster-lettering style.
	return (
		<svg className={s.nameArt} viewBox="0 0 800 640" aria-hidden="true" focusable="false">
			<defs>
				<path id="psy-arch" d="M30 262 Q 400 70 770 262" />
				<path id="psy-bowl" d="M30 512 Q 400 690 770 512" />
			</defs>
			<g filter="url(#psy-melt)">
				<g transform="translate(9 11)" className={s.nameShadow}>
					<text><textPath href="#psy-arch" startOffset="50%" textAnchor="middle" textLength="700" lengthAdjust="spacingAndGlyphs">ATRIN</textPath></text>
					<text><textPath href="#psy-bowl" startOffset="50%" textAnchor="middle" textLength="730" lengthAdjust="spacingAndGlyphs">HOJJAT</textPath></text>
				</g>
				<g className={s.nameFace}>
					<text><textPath href="#psy-arch" startOffset="50%" textAnchor="middle" textLength="700" lengthAdjust="spacingAndGlyphs">ATRIN</textPath></text>
					<text><textPath href="#psy-bowl" startOffset="50%" textAnchor="middle" textLength="730" lengthAdjust="spacingAndGlyphs">HOJJAT</textPath></text>
				</g>
			</g>
		</svg>
	)
}

export default function PsychedelicPage() {
	return (
		<div id="top" className={`${s.page} ${shrikhand.variable} ${kablammo.variable} ${sniglet.variable} ${fraunces.variable}`}>
			<PsyDefs />
			<a href="#main" className={s.skip}>Skip to the show</a>

			{/* ───────── HERO: the concert bill ───────── */}
			<header className={s.hero}>
				<div className={s.rays} aria-hidden="true" />
				<div className={s.ripples} aria-hidden="true" />
				<div className={s.lightShow} aria-hidden="true">
					<span className={s.blob1} /><span className={s.blob2} /><span className={s.blob3} /><span className={s.blob4} />
				</div>
				<div className={s.heroFrame} aria-hidden="true">
					<Corners color="#ffe600" />
				</div>

				<div className={s.heroTop}>
					<p className={s.presents}>
						<Flower className={s.tinyFlower} petal="#e0169a" />
						The Portfolio Ballroom presents
						<Flower className={s.tinyFlower} petal="#2438ff" />
					</p>
					<nav aria-label="Sections" className={s.nav}>
						<ul>
							{NAV.map((n) => (
								<li key={n.href}><a href={n.href}>{n.label}</a></li>
							))}
							<li><Link href="/styles" className={s.navAll}>All styles</Link></li>
						</ul>
					</nav>
				</div>

				<div className={s.heroGrid}>
					<div className={s.medallionWrap}>
						<Medallion />
					</div>

					<div className={s.bill}>
						<h1 className={s.h1}>
							<span className={s.srOnly}>{PROFILE.name}</span>
							<NameArt />
						</h1>
						<p className={s.withLine}>
							<span className={s.with}>with</span>
							<span className={s.friends}>Full-Stack &amp; Friends</span>
						</p>
						<p className={s.role}>{PROFILE.role} ✺ projects appearing nightly</p>
					</div>
				</div>

				<div className={s.heroBottom}>
					<p className={s.message}>
						<span className={s.msgSmall}>Build</span>{' '}
						<span className={s.msgV}>Vibrant,</span>{' '}
						<span className={s.msgF}>Fast</span>{' '}
						<span className={s.msgSmall}>&amp;</span>{' '}
						<span className={s.msgS}>Scalable</span>{' '}
						<span className={s.msgSmall}>Web Apps with Me</span>
					</p>
					<p className={s.tagline}>{PROFILE.heroTagline}</p>
				</div>
			</header>

			<main id="main">
				{/* ───────── ABOUT: the calm Mucha panel ───────── */}
				<section id="about" className={s.about} aria-labelledby="about-title">
					<div className={s.aboutFrame}>
						<Corners color="#6a1bb0" />
						<div className={s.portrait}>
							<div className={s.halo} aria-hidden="true" />
							<div className={s.arch}>
								<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width={307} height={307} className={s.archImg} />
							</div>
							<p className={s.greeting}>{PROFILE.greeting}</p>
						</div>
						<div className={s.aboutText}>
							<p className={s.kicker}>✺ Introducing the headliner ✺</p>
							<h2 id="about-title" className={s.h2About}>
								<Balloon text="About Me" swell={0.85} />
							</h2>
							{ABOUT.map((p, i) => (
								<p key={i} className={`${s.body} ${i === 0 ? s.dropcap : ''}`}>{p.replace(/\s+/g, ' ')}</p>
							))}
						</div>
					</div>
				</section>

				{/* ───────── PROJECTS: five nights on the bill ───────── */}
				<section id="acts" className={s.acts} aria-labelledby="acts-title">
					<div className={s.actsSwirl} aria-hidden="true" />
					<header className={s.actsHead}>
						<p className={s.kickerLight}>Five nights only ✺ five acts</p>
						<h2 id="acts-title" className={s.h2Acts}>
							<Balloon text="Appearing Nightly" swell={0.8} />
						</h2>
						<Flower className={s.headFlowerL} petal="#e0169a" />
						<Flower className={s.headFlowerR} petal="#19c24a" />
					</header>

					<ol className={s.actList}>
						{PROJECTS.map((p, i) => (
							<li key={p.name} className={`${s.act} ${s[THEMES[i]]} ${i % 2 ? s.actFlip : ''}`}>
								<article aria-labelledby={`act-${i}`}>
									<div className={s.actBar}>
										<span>{NIGHTS[i]}</span>
										<span aria-hidden="true">✺ ✺ ✺</span>
										<span>Act {['I', 'II', 'III', 'IV', 'V'][i]}</span>
									</div>
									<div className={s.actBody}>
										<div className={s.shotWrap}>
											<div className={s.shotFrame}>
												<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} width={800} height={600} className={s.shot} sizes="(max-width: 800px) 90vw, 560px" />
											</div>
										</div>
										<div className={s.actText}>
											<h3 id={`act-${i}`} className={s.actTitle}>{p.name}</h3>
											<div className={s.panel}>
												{paragraphs(p.description).map((para, j) => (
													<p key={j}>{para}</p>
												))}
											</div>
											<ul className={s.chips} aria-label={`${p.name} stack`}>
												{p.stack.map((t) => <li key={t}>{t}</li>)}
											</ul>
											{p.link && (
												<a className={s.ticket} href={p.link} target="_blank" rel="noopener noreferrer">
													<span className={s.ticketStub} aria-hidden="true">Admit One</span>
													<span>Visit website<span className={s.srOnly}> for {p.name} (opens in a new tab)</span></span>
												</a>
											)}
										</div>
									</div>
								</article>
							</li>
						))}
					</ol>
				</section>

				{/* ───────── CONTACT: tickets available at ───────── */}
				<section id="tickets" className={s.tickets} aria-labelledby="tickets-title">
					<div className={s.sun} aria-hidden="true" />
					<div className={s.ticketBox}>
						<p className={s.kicker}>✺ Advance tickets ✺</p>
						<h2 id="tickets-title" className={s.h2Tickets}>
							<Balloon text="Tickets Available At" swell={0.7} />
						</h2>
						<div className={s.pitch}>
							{PROFILE.footerPitch.map((l) => <p key={l}>{l}</p>)}
						</div>
						<ul className={s.outlets}>
							{CONTACT.emails.map((e) => (
								<li key={e}><a href={`mailto:${e}`}><span className={s.outletLabel}>Mail</span>{e}</a></li>
							))}
							{CONTACT.links.map((l) => (
								<li key={l.href}>
									<a href={l.href} target="_blank" rel="noopener noreferrer"><span className={s.outletLabel}>{l.label === 'Github' ? 'Code' : 'Work'}</span>{l.label === 'Github' ? 'GitHub' : l.label}<span className={s.srOnly}> (opens in a new tab)</span></a>
								</li>
							))}
						</ul>
						<div className={s.alsoFeaturing}>
							<p className={s.alsoLabel}>Also featuring</p>
							<ul className={s.techList}>
								{TECH_FOOTER.map((t) => <li key={t}>{t}</li>)}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<footer className={s.footer}>
				<Paisley className={s.footPaisley} colors={['#19c24a', '#ffe600', '#e0169a']} />
				<p>{PROFILE.name} ✺ {PROFILE.role}</p>
				<p className={s.footLinks}>
					<a href="#top">Back to the top</a>
					<Link href="/styles">All styles</Link>
				</p>
				<p className={s.printed}>Printed in glorious day-glo ✺ no light show was harmed</p>
			</footer>
		</div>
	)
}
