import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { caveat, inter, kalam } from './fonts'
import HeroNotebook from './HeroNotebook'
import s from './skeuo.module.css'

export const metadata: Metadata = {
	title: 'Skeuomorphism · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio, redesigned in the leather, felt and brushed-metal realism of iOS 1–6.',
}

const NAV = [
	{ href: '#top', label: 'Notes' },
	{ href: '#about', label: 'About' },
	{ href: '#projects', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
]

function paragraphs(text: string): string[] {
	// Source copy has stray line breaks mid-sentence; only keep a break after sentence-ending punctuation.
	const lines = text
		.split(/\n/)
		.map((line) => line.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
	const out: string[] = []
	for (const line of lines) {
		const prev = out[out.length - 1]
		if (prev && !/[.!?]$/.test(prev)) out[out.length - 1] = `${prev} ${line}`
		else out.push(line)
	}
	return out
}

const TILTS = ['-2.5deg', '2deg', '-1.5deg', '2.5deg', '-2deg']
const CARD_TILTS = ['0.9deg', '-0.8deg', '0.6deg', '-1deg', '0.7deg']

function PaperClip() {
	return (
		<svg className={s.clip} viewBox="0 0 30 84" aria-hidden="true">
			<defs>
				<linearGradient id="clipSteel" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#8d949c" />
					<stop offset=".45" stopColor="#f4f6f8" />
					<stop offset="1" stopColor="#7b828a" />
				</linearGradient>
			</defs>
			<path
				d="M9 26 V66 a6 6 0 0 0 12 0 V14 a9 9 0 0 0 -18 0 V62 a12 12 0 0 0 24 0 V26"
				fill="none"
				stroke="url(#clipSteel)"
				strokeWidth="2.6"
				strokeLinecap="round"
			/>
		</svg>
	)
}

function Screws() {
	return (
		<>
			<span className={`${s.screw} ${s.screwTL}`} aria-hidden="true" />
			<span className={`${s.screw} ${s.screwTR}`} aria-hidden="true" />
			<span className={`${s.screw} ${s.screwBL}`} aria-hidden="true" />
			<span className={`${s.screw} ${s.screwBR}`} aria-hidden="true" />
		</>
	)
}

export default function SkeuomorphismPage() {
	return (
		<div className={`${s.desk} ${kalam.variable} ${caveat.variable} ${inter.variable}`}>
			<a href="#main" className={s.skip}>Skip to content</a>

			<header className={s.toolbar}>
				<div className={s.toolbarInner}>
					<div className={s.lights} aria-hidden="true">
						<span className={`${s.light} ${s.lightRed}`} />
						<span className={`${s.light} ${s.lightYellow}`} />
						<span className={`${s.light} ${s.lightGreen}`} />
					</div>
					<p className={s.windowTitle}>{PROFILE.name} — Portfolio</p>
					<nav aria-label="Sections">
						<ul className={s.segmented}>
							{NAV.map((item) => (
								<li key={item.href}>
									<a className={s.segment} href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main id="main">
				{/* ---------- Hero ---------- */}
				<section id="top" className={`${s.section} ${s.hero}`} aria-label="Introduction">
					<div className={s.wrap}>
						<HeroNotebook />
						<div className={s.pencil} aria-hidden="true">
							<span className={s.pencilTip} />
							<span className={s.pencilBody} />
							<span className={s.pencilFerrule} />
							<span className={s.pencilEraser} />
						</div>
					</div>
				</section>

				{/* ---------- About ---------- */}
				<section id="about" className={s.section} aria-labelledby="about-title">
					<div className={`${s.wrap} ${s.aboutGrid}`}>
						<div className={s.photoStack}>
							<figure className={s.polaroid} style={{ '--tilt': '-4deg' } as CSSProperties}>
								<PaperClip />
								<Image
									src={PROFILE.photo}
									alt={`Portrait of ${PROFILE.name}`}
									width={307}
									height={307}
									className={s.polaroidImg}
								/>
								<figcaption className={s.polaroidCaption}>{PROFILE.firstName} :)</figcaption>
							</figure>
						</div>

						<div className={s.letterWrap}>
						<article className={s.letter}>
							<div className={s.letterhead}>
								<h2 id="about-title" className={s.letterTitle}>About me</h2>
								<span className={s.stamp} aria-hidden="true">Personal</span>
							</div>
							<div className={s.letterBody}>
								{ABOUT.map((para) => (
									<p key={para.slice(0, 24)}>{para.replace(/\s+/g, ' ')}</p>
								))}
							</div>
							<span className={s.signature} aria-hidden="true">— {PROFILE.firstName}</span>
						</article>
						</div>
					</div>
				</section>

				{/* ---------- Projects ---------- */}
				<section id="projects" className={s.section} aria-labelledby="projects-title">
					<div className={s.wrap}>
						<div className={s.table}>
							<div className={s.felt}>
								<div className={s.feltHead}>
									<div className={s.plate}>
										<Screws />
										<h2 id="projects-title" className={s.plateTitle}>Selected Projects</h2>
										<p className={s.plateSub}>{PROJECTS.length} on the table</p>
									</div>
									<p className={s.feltNote}>Polaroids, index cards and a label maker. Just like the real desk.</p>
								</div>

								<ol className={s.projectList}>
									{PROJECTS.map((project, i) => (
										<li
											key={project.name}
											className={`${s.project} ${i % 2 === 1 ? s.projectFlip : ''}`}
										>
											<figure
												className={s.shot}
												style={{ '--tilt': TILTS[i % TILTS.length] } as CSSProperties}
											>
												<span className={`${s.tape} ${s.tapeLeft}`} aria-hidden="true" />
												<span className={`${s.tape} ${s.tapeRight}`} aria-hidden="true" />
												<Image
													src={project.thumbnail}
													alt={`Screenshot of ${project.name}`}
													width={800}
													height={600}
													sizes="(max-width: 960px) 90vw, 520px"
													className={s.shotImg}
												/>
												<figcaption className={s.polaroidCaption}>{project.name}</figcaption>
											</figure>

											<article
												className={s.card}
												style={{ '--ctilt': CARD_TILTS[i % CARD_TILTS.length] } as CSSProperties}
											>
												<div className={s.cardTop}>
													<h3 className={s.cardTitle}>{project.name}</h3>
													<span className={s.cardNo} aria-hidden="true">#{String(i + 1).padStart(2, '0')}</span>
												</div>
												<div className={s.cardBody}>
													{paragraphs(project.description).map((para) => (
														<p key={para.slice(0, 32)}>{para}</p>
													))}
												</div>
												<p className={s.labelsTitle}>Built with</p>
												<ul className={s.dymoList} aria-label={`${project.name} tech stack`}>
													{project.stack.map((tech, j) => (
														<li key={tech} className={`${s.dymo} ${s[`dymo${(i + j) % 5}`]}`}>
															{tech}
														</li>
													))}
												</ul>
												{project.link ? (
													<div className={s.cardActions}>
														<a
															href={project.link}
															target="_blank"
															rel="noopener noreferrer"
															className={`${s.btn} ${s.btnBlue}`}
														>
															Visit website <span aria-hidden="true">›</span>
															<span className="sr-only"> (opens in a new tab)</span>
														</a>
													</div>
												) : (
													<span className={s.privateNote}>No public link for this one.</span>
												)}
											</article>
										</li>
									))}
								</ol>
							</div>
						</div>
					</div>
				</section>

				{/* ---------- Contact ---------- */}
				<section id="contact" className={s.section} aria-labelledby="contact-title">
					<div className={s.wrap}>
						<div className={s.leatherPanel}>
							<div className={s.contactGrid}>
								<div className={s.contactIntro}>
									<div className={s.plate}>
										<Screws />
										<h2 id="contact-title" className={s.plateTitle}>Get in touch</h2>
										<p className={s.plateSub}>Always happy to talk</p>
									</div>

									<div className={s.sticky}>
										<span className={s.pin} aria-hidden="true" />
										{PROFILE.footerPitch.map((line) => (
											<p key={line}>{line}</p>
										))}
									</div>

									<div style={{ width: '100%', maxWidth: 440 }}>
										<h3 className={s.keysTitle}>Tools of the trade</h3>
										<ul className={s.keypad}>
											{TECH_FOOTER.map((tech, i) => (
												<li key={tech} className={`${s.key} ${i % 4 === 3 ? s.keyOrange : ''}`}>
													{tech}
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className={s.iphone}>
									<span className={s.speaker} aria-hidden="true" />
									<span className={s.camera} aria-hidden="true" />
									<div className={s.screen}>
										<div className={s.statusBar} aria-hidden="true">
											<span>Carrier</span>
											<span>9:41 AM</span>
											<span>100%<span className={s.battery} /></span>
										</div>
										<div className={s.navBar}>
											<p className={s.navTitle}>Contact</p>
										</div>
										<div className={s.pinstripe}>
											<h3 className={s.groupLabel}>Email</h3>
											<ul className={s.group}>
												{CONTACT.emails.map((email) => (
													<li key={email}>
														<a className={s.cell} href={`mailto:${email}`}>
															<span>{email.endsWith('gmail.com') ? 'gmail' : 'dev'}</span>
															<span className={s.cellValue}>{email}</span>
															<span className={s.chevron} aria-hidden="true">›</span>
														</a>
													</li>
												))}
											</ul>
											<h3 className={s.groupLabel}>Elsewhere</h3>
											<ul className={s.group}>
												{CONTACT.links.map((link) => (
													<li key={link.href}>
														<a
															className={s.cell}
															href={link.href}
															target="_blank"
															rel="noopener noreferrer"
														>
															<span>{link.label === 'Github' ? 'GitHub' : link.label}</span>
															<span className={s.cellValue}>{link.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
															<span className={s.chevron} aria-hidden="true">›</span>
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
									<span className={s.homeBtn} aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className={s.footer}>
				<div className={s.footerInner}>
					<span className={s.backFocus}>
						<span className={s.backBtnWrap}>
							<Link href="/styles" className={s.backBtn}>All styles</Link>
						</span>
					</span>
					<p className={s.footerText}>{PROFILE.name} · {PROFILE.role} · Skeuomorphism edition</p>
				</div>
			</footer>
		</div>
	)
}
