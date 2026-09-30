import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { fontVars } from './fonts'
import s from './synthwave.module.css'

export const metadata: Metadata = {
	title: 'Synthwave · Atrin Hojjat',
	description: "Atrin Hojjat's portfolio as an 80s outrun album cover: neon grids, chrome type and a sunset that never ends.",
}

function paragraphs(text: string): string[] {
	return text
		.split(/\n\s*\n/)
		.map((p) => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
}

const NAV = [
	{ href: '#about', label: 'About', track: 'A1' },
	{ href: '#projects', label: 'Projects', track: 'A2' },
	{ href: '#contact', label: 'Contact', track: 'B1' },
]

function Sunset({ small = false }: { small?: boolean }) {
	return (
		<div className={`${s.scene} ${small ? s.sceneSmall : ''}`} aria-hidden="true">
			<div className={s.stars} />
			<div className={s.sun} />
			<svg className={s.mountains} viewBox="0 0 1440 200" preserveAspectRatio="none">
				<defs>
					<linearGradient id={small ? 'mtn-s' : 'mtn'} x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#2a0845" />
						<stop offset="1" stopColor="#0d0221" />
					</linearGradient>
				</defs>
				<path
					d="M0 200 L0 150 L90 110 L170 140 L260 70 L340 120 L420 95 L500 150 L560 130 L620 160 L820 160 L880 128 L950 150 L1030 80 L1110 125 L1190 60 L1270 115 L1360 95 L1440 130 L1440 200 Z"
					fill={`url(#${small ? 'mtn-s' : 'mtn'})`}
					stroke="#ff2a6d"
					strokeWidth="2"
					vectorEffect="non-scaling-stroke"
				/>
				<path
					d="M260 70 L300 160 M1030 80 L1000 160 M1190 60 L1230 160 M90 110 L120 160 M420 95 L450 160"
					stroke="#b967ff"
					strokeOpacity="0.55"
					strokeWidth="1"
					fill="none"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>
			<div className={s.horizon} />
			<div className={s.floor}>
				<div className={s.grid} />
			</div>
		</div>
	)
}

export default function SynthwavePage() {
	const [firstName, ...rest] = PROFILE.name.split(' ')
	const lastName = rest.join(' ')

	return (
		<div className={`${fontVars} ${s.root}`}>
			<div className={s.scanlines} aria-hidden="true" />

			<a href="#main" className={s.skip}>Skip to content</a>

			<header className={s.header}>
				<nav className={s.nav} aria-label="Sections">
					<a href="#top" className={s.brand}>
						<span className={s.brandMark}>AH</span>
						<span className={s.brandSub}>Hi-Fi Stereo</span>
					</a>
					<ul className={s.navList}>
						{NAV.map((n) => (
							<li key={n.href}>
								<a href={n.href} className={s.navLink}>
									<span className={s.navTrack}>{n.track}</span>
									{n.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main id="main">
				{/* ───────────── HERO ───────────── */}
				<section id="top" className={s.hero} aria-labelledby="hero-title">
					<Sunset />

					<div className={s.osd} aria-hidden="true">
						<span className={s.osdPlay}>PLAY ▶</span>
						<span>SP</span>
						<span className={s.osdTime}>0:19:84</span>
					</div>
					<div className={s.osdRight} aria-hidden="true">
						<span>CH 03</span>
						<span className={s.rec}>● REC</span>
					</div>

					<div className={s.heroInner}>
						<p className={s.kicker}>{PROFILE.greeting}</p>
						<h1 id="hero-title" className={s.heroTitle}>
							<span className={s.chrome} data-text={firstName}>{firstName}</span>
							<span className={s.chrome} data-text={lastName}>{lastName}</span>
							<span className={s.script}>{PROFILE.role}</span>
						</h1>
						<p className={s.heroMessage}>
							Build <em>vibrant</em>, <em>fast</em> and <em>scalable</em> web apps with me
						</p>
						<p className={s.heroTagline}>{PROFILE.heroTagline}</p>
						<div className={s.heroCtas}>
							<a href="#projects" className={s.btnPrimary}>Press Play ▶</a>
							<a href="#contact" className={s.btnGhost}>Get in touch</a>
						</div>
					</div>
				</section>

				{/* ───────────── ABOUT ───────────── */}
				<section id="about" className={s.section} aria-labelledby="about-title">
					<div className={s.container}>
						<div className={s.sectionHead}>
							<span className={s.sectionNo}>Track A1</span>
							<h2 id="about-title" className={s.h2}>
								<span className={s.chromeSm}>About</span>
								<span className={s.h2Script}>the driver</span>
							</h2>
						</div>

						<div className={s.aboutGrid}>
							<figure className={s.photoFrame}>
								<div className={s.photoInner}>
									<Image
										src={PROFILE.photo}
										alt={`Portrait of ${PROFILE.name}`}
										width={320}
										height={320}
										className={s.photo}
									/>
								</div>
								<figcaption className={s.photoCaption}>
									<span>{PROFILE.name}</span>
									<span>{PROFILE.role}</span>
								</figcaption>
							</figure>

							<div className={s.panel}>
								<span className={s.panelTag}>Liner notes</span>
								{ABOUT.map((p, i) => (
									<p key={i} className={s.body}>{p.replace(/\s+/g, ' ')}</p>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ───────────── PROJECTS ───────────── */}
				<section id="projects" className={`${s.section} ${s.projectsSection}`} aria-labelledby="projects-title">
					<div className={s.container}>
						<div className={s.sectionHead}>
							<span className={s.sectionNo}>Track A2</span>
							<h2 id="projects-title" className={s.h2}>
								<span className={s.chromeSm}>Projects</span>
								<span className={s.h2Script}>the tapes</span>
							</h2>
						</div>

						<ol className={s.tapes}>
							{PROJECTS.map((project, i) => {
								const no = String(i + 1).padStart(2, '0')
								return (
									<li key={project.name} className={s.tape}>
										<article className={s.tapeCard} aria-labelledby={`p-${i}`}>
											<div className={s.tapeLabel} aria-hidden="true">
												<span>Tape {no}</span>
												<span className={s.tapeStripes} />
												<span>{i % 2 === 0 ? 'Side A' : 'Side B'} · T-120</span>
											</div>
											<div className={s.tapeBody}>
												<div className={s.screen}>
													<Image
														src={project.thumbnail}
														alt={`Screenshot of the ${project.name} website`}
														width={1280}
														height={720}
														sizes="(min-width: 1024px) 560px, 100vw"
														className={s.screenImg}
													/>
													<span className={s.screenOsd} aria-hidden="true">▶ PLAY</span>
												</div>
												<div className={s.tapeText}>
													<h3 id={`p-${i}`} className={s.h3}>{project.name}</h3>
													{paragraphs(project.description).map((p, j) => (
														<p key={j} className={s.body}>{p}</p>
													))}
													<ul className={s.chips} aria-label={`${project.name} tech stack`}>
														{project.stack.map((t) => (
															<li key={t} className={s.chip}>{t}</li>
														))}
													</ul>
													{project.link && (
														<a href={project.link} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
															Visit website ▶<span className={s.srOnly}> (opens in a new tab)</span>
														</a>
													)}
												</div>
											</div>
										</article>
									</li>
								)
							})}
						</ol>
					</div>
				</section>

				{/* ───────────── CONTACT ───────────── */}
				<section id="contact" className={s.contact} aria-labelledby="contact-title">
					<div className={`${s.container} ${s.contactInner}`}>
						<span className={s.sectionNo}>Track B1</span>
						<h2 id="contact-title" className={s.contactTitle}>
							<span className={s.neonSign}>Let&apos;s ride</span>
							<span className={s.h2Script}>into the night</span>
						</h2>
						<div className={s.pitch}>
							{PROFILE.footerPitch.map((line) => <p key={line}>{line}</p>)}
						</div>

						<div className={s.contactGrid}>
							<div className={s.panel}>
								<h3 className={s.panelHeading}>Transmit</h3>
								<ul className={s.linkList}>
									{CONTACT.emails.map((email) => (
										<li key={email}>
											<a href={`mailto:${email}`} className={s.neonLink}>{email}</a>
										</li>
									))}
								</ul>
							</div>
							<div className={s.panel}>
								<h3 className={s.panelHeading}>Frequencies</h3>
								<ul className={s.linkList}>
									{CONTACT.links.map((l) => (
										<li key={l.href}>
											<a href={l.href} target="_blank" rel="noopener noreferrer" className={s.neonLink}>
												{l.label} ↗<span className={s.srOnly}> (opens in a new tab)</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<Sunset small />
				</section>
			</main>

			<footer className={s.footer}>
				<div className={`${s.container} ${s.footerInner}`}>
					<div>
						<p className={s.footerLabel}>Powered by</p>
						<ul className={s.techList}>
							{TECH_FOOTER.map((t) => <li key={t}>{t}</li>)}
						</ul>
					</div>
					<div className={s.footerRight}>
						<Link href="/styles" className={s.btnGhost}>◀◀ All styles</Link>
						<p className={s.copy}>© {PROFILE.name} · Recorded in stereo · Be kind, rewind</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
