import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { oswald, ptSans, rubikMono } from './fonts'
import s from './constructivism.module.css'

export const metadata: Metadata = {
	title: 'Constructivism · Atrin Hojjat',
	description:
		'Atrin Hojjat’s portfolio as a Soviet Constructivist agitation poster: red wedges, black bars, diagonal type and photomontage.',
}

// Descriptions carry stray line breaks and indentation. Rejoin fragments that break mid-sentence and
// keep a paragraph break only where a sentence actually ends.
function paragraphs(text: string): string[] {
	const parts = text
		.split('\n')
		.map((p) => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
	const out: string[] = []
	for (const part of parts) {
		const prev = out[out.length - 1]
		if (prev && !/[.!?)]$/.test(prev)) out[out.length - 1] = `${prev} ${part}`
		else out.push(part)
	}
	return out
}

const pad = (n: number) => String(n).padStart(2, '0')

// Cyrillic captions used as graphic elements, each paired with its English gloss.
const NAV = [
	{ href: '#about', ru: 'О себе', en: 'About' },
	{ href: '#work', ru: 'Работы', en: 'Work' },
	{ href: '#contact', ru: 'Связь', en: 'Contact' },
]

function Arrow({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 40 20" aria-hidden="true" focusable="false">
			<path d="M0 7h28V0l12 10-12 10v-7H0z" fill="currentColor" />
		</svg>
	)
}

export default function ConstructivismPage() {
	return (
		<div className={`${oswald.variable} ${rubikMono.variable} ${ptSans.variable} ${s.page}`}>
			<a href="#main" className={s.skip}>Skip to content</a>

			{/* ——— MASTHEAD: a black bar pierced by a red wedge ——— */}
			<header className={s.masthead}>
				<a href="#top" className={s.brand}>
					<span className={s.brandMark} aria-hidden="true" />
					<span className={s.brandName}>Atrin Hojjat</span>
					<span className={s.brandRu} aria-hidden="true">А. Ходжат</span>
				</a>
				<nav aria-label="Sections" className={s.nav}>
					<ul>
						{NAV.map((n, i) => (
							<li key={n.href}>
								<a href={n.href}>
									<span className={s.navNum}>№{i + 1}</span>
									<span className={s.navRu} lang="ru">{n.ru}</span>
									<span className={s.navEn}>{n.en}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
				<Link href="/styles" className={s.allStyles}>
					<Arrow className={s.arrowBack} />
					<span>All styles</span>
				</Link>
			</header>

			<main id="main">
				{/* ——— HERO: the agitation poster. A portrait shouting through a red megaphone. ——— */}
				<section id="top" className={s.hero} aria-labelledby="hero-name">
					<div className={s.heroArt} aria-hidden="true">
						<span className={s.heroSun} />
						<span className={s.heroRing} />
						<span className={s.heroBarA} />
						<span className={s.heroBarB} />
						<span className={s.heroWedge} />
						<span className={s.heroDot} />
					</div>

					<p className={s.heroSide} aria-hidden="true">
						<span lang="ru">Портфолио</span> · Portfolio · 2026
					</p>

					<div className={s.heroTitleBlock}>
						<p className={s.heroKicker}>
							<span lang="ru">Разработчик</span>
							<span className={s.heroKickerRule} aria-hidden="true" />
							<span>{PROFILE.greeting}</span>
						</p>
						<h1 id="hero-name" className={s.heroName}>
							<span className={s.heroNameA}>{PROFILE.firstName}</span>
							<span className={s.heroNameB}>Hojjat</span>
						</h1>
						<p className={s.heroRole}>{PROFILE.role}</p>
					</div>

					<div className={s.megaphone}>
						<div className={s.shouter}>
							<Image
								src={PROFILE.photo}
								alt={`Portrait of ${PROFILE.name}`}
								width={307}
								height={307}
								priority
								className={s.shouterImg}
							/>
							<span className={s.halftone} aria-hidden="true" />
						</div>
						<div className={s.cone}>
							<h2 className={s.shout}>
								<span className={s.shout1}>Build</span>{' '}
								<span className={s.shout2}><span>vibrant,</span> <span>fast</span></span>{' '}
								<span className={s.shout3}><span>&amp;</span> <span>scalable</span></span>{' '}
								<span className={s.shout4}><span>web</span> <span>apps</span></span>{' '}
								<span className={s.shout5}><span>with</span> <span>me!</span></span>
							</h2>
						</div>
					</div>

					<div className={s.slogan}>
						<p className={s.sloganLabel}><span lang="ru">Лозунг</span> / Slogan</p>
						<p className={s.sloganText}>{PROFILE.heroTagline}.</p>
						<a href="#work" className={s.sloganCta}>
							See the work <Arrow className={s.arrowInline} />
						</a>
					</div>
				</section>

				{/* ——— ABOUT ——— */}
				<section id="about" className={s.about} aria-labelledby="about-title">
					<div className={s.band} aria-hidden="true">
						<span>
							<i lang="ru">О себе</i> ■ About ■ <i lang="ru">О себе</i> ■ About ■ <i lang="ru">О себе</i> ■ About ■{' '}
							<i lang="ru">О себе</i> ■ About ■ <i lang="ru">О себе</i> ■ About ■
						</span>
					</div>

					<div className={s.aboutGrid}>
						<figure className={s.montage}>
							<span className={s.montageSquare} aria-hidden="true" />
							<span className={s.montageBar} aria-hidden="true" />
							<div className={s.montagePhoto}>
								<Image
									src={PROFILE.photo}
									alt={`${PROFILE.name}, looking down`}
									width={307}
									height={307}
									className={s.montageImg}
								/>
								<span className={s.halftone} aria-hidden="true" />
							</div>
							<span className={s.montageNum} aria-hidden="true">№1</span>
							<figcaption className={s.montageCaption}>
								{PROFILE.name} — {PROFILE.role}
							</figcaption>
						</figure>

						<div className={s.aboutText}>
							<p className={s.eyebrow}>№ 01 / <span lang="ru">Кто?</span></p>
							<h2 id="about-title" className={s.aboutTitle}>
								Who <span className={s.red}>builds</span> it?
							</h2>
							<div className={s.aboutCopy}>
								{ABOUT.map((p, i) => (
									<p key={i} className={i === 0 ? s.lead : undefined}>
										{p.replace(/\s+/g, ' ').trim()}
									</p>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ——— WORK ——— */}
				<section id="work" className={s.work} aria-labelledby="work-title">
					<header className={s.workHead}>
						<span className={s.workWedge} aria-hidden="true" />
						<p className={s.workRu} lang="ru" aria-hidden="true">Работы</p>
						<h2 id="work-title" className={s.workTitle}>
							Work<span className={s.red}>!</span>
						</h2>
						<p className={s.workSub}>
							№ 02 / {PROJECTS.length} projects, built and shipped
						</p>
					</header>

					<ol className={s.projects}>
						{PROJECTS.map((project, i) => {
							const flip = i % 2 === 1
							return (
								<li key={project.name} className={`${s.project} ${flip ? s.flip : ''}`}>
									<article aria-labelledby={`p-${i}`}>
										<div className={s.projectVisual}>
											<span className={s.projectNum} aria-hidden="true">{pad(i + 1)}</span>
											<div className={s.projectFrame}>
												<Image
													src={project.thumbnail}
													alt={`Screenshot of the ${project.name} website`}
													width={1280}
													height={748}
													sizes="(max-width: 800px) 92vw, 52vw"
													className={s.projectImg}
												/>
											</div>
											<span className={s.projectWedge} aria-hidden="true" />
											<h3 id={`p-${i}`} className={s.projectName}>
												<span>{project.name}</span>
											</h3>
										</div>

										<div className={s.projectBody}>
											{paragraphs(project.description).map((p, j) => (
												<p key={j}>{p}</p>
											))}
											<p className={s.stackLabel}>
												<span lang="ru">Инструменты</span> / Tools
											</p>
											<ul className={s.stack} aria-label={`${project.name} tech stack`}>
												{project.stack.map((t) => (
													<li key={t}>{t}</li>
												))}
											</ul>
											{project.link && (
												<a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className={s.visit}
												>
													<span>Visit website</span>
													<Arrow className={s.arrowInline} />
													<span className={s.srOnly}> (opens in a new tab)</span>
												</a>
											)}
										</div>
									</article>
								</li>
							)
						})}
					</ol>
				</section>

				{/* ——— CONTACT ——— */}
				<section id="contact" className={s.contact} aria-labelledby="contact-title">
					<div className={s.contactArt} aria-hidden="true">
						<span className={s.contactSun} />
						<span className={s.contactBar} />
						<span className={s.contactWedge} />
					</div>

					<div className={s.contactInner}>
						<p className={s.contactRu} lang="ru" aria-hidden="true">Пишите!</p>
						<h2 id="contact-title" className={s.contactTitle}>Write to me!</h2>
						<div className={s.pitch}>
							{PROFILE.footerPitch.map((line) => (
								<p key={line}>{line}</p>
							))}
						</div>

						<ul className={s.emails} aria-label="Email">
							{CONTACT.emails.map((e) => (
								<li key={e}>
									<a href={`mailto:${e}`}>
										<Arrow className={s.arrowEmail} />
										<span>{e}</span>
									</a>
								</li>
							))}
						</ul>

						<ul className={s.links} aria-label="Elsewhere">
							{CONTACT.links.map((l) => (
								<li key={l.href}>
									<a href={l.href} target="_blank" rel="noopener noreferrer">
										{l.label}
										<span className={s.srOnly}> (opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className={s.techBand}>
						<p className={s.srOnly}>Technologies I work with:</p>
						<ul aria-label="Technologies">
							{TECH_FOOTER.map((t) => (
								<li key={t}>{t}</li>
							))}
						</ul>
					</div>
				</section>
			</main>

			<footer className={s.footer}>
				<Link href="/styles" className={s.footerBack}>
					<Arrow className={s.arrowBack} />
					<span lang="ru">Все стили</span>
					<span>/ All styles</span>
				</Link>
				<p>© {PROFILE.name} · Set in Oswald, Rubik Mono One &amp; PT Sans</p>
			</footer>
		</div>
	)
}
