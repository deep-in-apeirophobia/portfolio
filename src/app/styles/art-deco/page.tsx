import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { josefin, limelight, marcellus, poiret } from './fonts'
import { Chevrons, Corner, Divider, Fan, GoldDefs, Lozenge, Ziggurat } from './ornaments'
import s from './deco.module.css'

export const metadata: Metadata = {
	title: 'Art Deco · Atrin Hojjat',
	description: 'The portfolio of Atrin Hojjat, full-stack developer, redesigned in the Art Deco style.',
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

function paragraphs(text: string): string[] {
	return text
		.split(/\n\s*\n|\n/)
		.map((p) => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
}

function Corners() {
	return (
		<>
			<Corner className={`${s.corner} ${s.cTL}`} />
			<Corner className={`${s.corner} ${s.cTR}`} />
			<Corner className={`${s.corner} ${s.cBL}`} />
			<Corner className={`${s.corner} ${s.cBR}`} />
		</>
	)
}

function SectionTitle({ numeral, kicker, title, id }: { numeral: string, kicker: string, title: string, id: string }) {
	return (
		<header className={s.sectionTitle}>
			<Fan className={s.titleFan} rays={13} />
			<p className={s.kicker}>
				<span aria-hidden="true" className={s.kickerRule} />
				<span>{numeral}</span>
				<Lozenge className={s.lozenge} />
				<span>{kicker}</span>
				<span aria-hidden="true" className={s.kickerRule} />
			</p>
			<h2 id={id} className={`${s.h2} ${s.foil}`}>{title}</h2>
			<Divider className={s.divider} />
		</header>
	)
}

const NAV = [
	{ href: '#about', n: 'I', label: 'About' },
	{ href: '#works', n: 'II', label: 'Works' },
	{ href: '#contact', n: 'III', label: 'Contact' },
]

export default function ArtDecoPage() {
	return (
		<div id="top" className={`${s.page} ${limelight.variable} ${poiret.variable} ${josefin.variable} ${marcellus.variable}`}>
			<GoldDefs />
			<a href="#main" className={s.skip}>Skip to content</a>

			{/* ───────────── HERO ───────────── */}
			<header className={s.hero}>
				<div className={s.sunburst} aria-hidden="true" />
				<div className={s.heroFrame} aria-hidden="true">
					<Corners />
				</div>

				<nav className={s.nav} aria-label="Sections">
					<ul>
						{NAV.map((item, i) => (
							<li key={item.href}>
								{i > 0 && <Lozenge className={s.navLozenge} />}
								<a href={item.href}>
									<span className={s.navNum}>{item.n}</span>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className={s.heroInner}>
					<p className={s.presents}>
						<span aria-hidden="true" className={s.kickerRule} />
						The Portfolio of
						<span aria-hidden="true" className={s.kickerRule} />
					</p>
					<Fan className={s.heroFan} />
					<h1 className={s.name}>
						<span className={s.foil}>Atrin</span>
						<span className={s.foil}>Hojjat</span>
					</h1>
					<p className={s.role}>
						<Lozenge className={s.lozenge} />
						{PROFILE.role}
						<Lozenge className={s.lozenge} />
					</p>
					<Divider className={s.heroDivider} />
					<p className={s.message}>
						<span className={s.thin}>Build</span>{' '}
						<span className={s.goldWord}>Vibrant,</span>{' '}
						<span className={s.goldWord}>Fast</span>{' '}
						<span className={s.thin}>&amp;</span>{' '}
						<span className={s.goldWord}>Scalable</span>{' '}
						<span className={s.thin}>Web Apps with Me</span>
					</p>
					<p className={s.tagline}>{PROFILE.heroTagline}</p>
					<div className={s.ctas}>
						<a className={`${s.btn} ${s.btnGold}`} href="#works">View the Works</a>
						<a className={s.btn} href="#contact">Get in Touch</a>
					</div>
				</div>

				<a href="#about" className={s.scrollCue} aria-label="Scroll to About">
					<Chevrons className={s.chevrons} />
				</a>
			</header>

			<main id="main">
				{/* ───────────── ABOUT ───────────── */}
				<section className={s.about} aria-labelledby="about-title" id="about">
					<SectionTitle id="about-title" numeral="I" kicker="Introducing" title="About Me" />

					<div className={s.portraitWrap}>
						<div className={s.portraitRays} aria-hidden="true" />
						<div className={s.arch}>
							<div className={s.archInner}>
								<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width={260} height={260} className={s.portrait} />
							</div>
						</div>
						<p className={s.plaqueLabel}>{PROFILE.greeting}</p>
					</div>

					<div className={s.aboutCols}>
						{ABOUT.map((p, i) => (
							<p key={i} className={i === 0 ? s.dropcap : undefined}>{p.replace(/\s+/g, ' ')}</p>
						))}
						<span className={s.colRule} aria-hidden="true"><Lozenge className={s.colLozenge} /></span>
					</div>
				</section>

				{/* ───────────── WORKS ───────────── */}
				<section className={s.works} aria-labelledby="works-title" id="works">
					<SectionTitle id="works-title" numeral="II" kicker="Selected Commissions" title="The Works" />

					<ol className={s.projectList}>
						{PROJECTS.map((project, i) => (
							<li key={project.name}>
								<article className={s.plaque} aria-labelledby={`project-${i}`}>
									<Corners />
									<p className={s.plaqueNo}>
										<span aria-hidden="true" className={s.kickerRule} />
										No. {ROMAN[i]}
										<span aria-hidden="true" className={s.kickerRule} />
									</p>
									<h3 id={`project-${i}`} className={`${s.h3} ${s.foil}`}>{project.name}</h3>

									<figure className={s.gilt}>
										<div className={s.giltInner}>
											<Image
												src={project.thumbnail}
												alt={`Screenshot of the ${project.name} website`}
												width={1280}
												height={720}
												sizes="(max-width: 900px) 92vw, 820px"
												className={s.shot}
											/>
										</div>
									</figure>

									<Divider className={s.divider} />

									<div className={s.desc}>
										{paragraphs(project.description).map((p, j) => <p key={j}>{p}</p>)}
									</div>

									<h4 className={s.stackLabel}>Materials &amp; Methods</h4>
									<ul className={s.stack} aria-label={`${project.name} technology stack`}>
										{project.stack.map((t) => <li key={t}>{t}</li>)}
									</ul>

									{project.link && (
										<a className={`${s.btn} ${s.btnGold} ${s.visit}`} href={project.link} target="_blank" rel="noopener noreferrer">
											Visit Website<span className="sr-only"> (opens in a new tab)</span>
										</a>
									)}
								</article>
							</li>
						))}
					</ol>
				</section>
			</main>

			{/* ───────────── CONTACT ───────────── */}
			<footer className={s.contact} id="contact" aria-labelledby="contact-title">
				<Ziggurat className={s.ziggurat} />
				<SectionTitle id="contact-title" numeral="III" kicker="Correspondence" title="Get in Touch" />

				<div className={s.pitch}>
					{PROFILE.footerPitch.map((line) => <p key={line}>{line}</p>)}
				</div>

				<div className={s.cards}>
					<div className={s.card}>
						<h3 className={s.cardTitle}>By Letter</h3>
						<ul>
							{CONTACT.emails.map((e) => (
								<li key={e}><a href={`mailto:${e}`} className={s.bigLink}>{e}</a></li>
							))}
						</ul>
					</div>
					<div className={s.card}>
						<h3 className={s.cardTitle}>Elsewhere</h3>
						<ul>
							{CONTACT.links.map((l) => (
								<li key={l.href}>
									<a href={l.href} className={s.bigLink} target="_blank" rel="noopener noreferrer">
										{l.label}<span className="sr-only"> (opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className={s.tech}>
					<h3 className={s.stackLabel}>Crafted With</h3>
					<ul>
						{TECH_FOOTER.map((t, i) => (
							<li key={t}>
								{i > 0 && <Lozenge className={s.techLozenge} />}
								{t}
							</li>
						))}
					</ul>
				</div>

				<Divider className={s.divider} />

				<div className={s.footBar}>
					<Link href="/styles" className={s.btn}>All Styles</Link>
					<p className={s.footNote}>{PROFILE.name} · {PROFILE.role}</p>
					<a href="#top" className={s.btn}>Back to Top</a>
				</div>
			</footer>
		</div>
	)
}
