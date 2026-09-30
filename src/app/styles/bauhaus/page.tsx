import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { jost } from './fonts'
import s from './bauhaus.module.css'

export const metadata: Metadata = {
	title: 'Bauhaus · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio set as a Bauhaus exhibition poster: primary colours, elementary shapes and lowercase geometric type.',
}

// Descriptions carry stray line breaks and indentation. Rejoin fragments that break mid-sentence,
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

// Kandinsky's 1923 questionnaire pairing: yellow triangle, red square, blue circle.
const SHAPES = ['square', 'circle', 'triangle'] as const
const COLORS = ['red', 'blue', 'yellow'] as const

function Glyph({ shape, className }: { shape: (typeof SHAPES)[number]; className?: string }) {
	return <span aria-hidden="true" className={`${s.glyph} ${s[`glyph_${shape}`]} ${className ?? ''}`} />
}

export default function BauhausPage() {
	return (
		<div className={`${jost.className} ${s.page}`}>
			<a href="#main" className={s.skip}>skip to content</a>

			<header className={s.masthead}>
				<Link href="/styles" className={s.brand} aria-label="All styles">
					<span className={s.brandShapes} aria-hidden="true">
						<Glyph shape="triangle" />
						<Glyph shape="square" />
						<Glyph shape="circle" />
					</span>
					<span>bauhaus <span className={s.brandSub}>/ atrin hojjat</span></span>
				</Link>
				<nav aria-label="Sections" className={s.nav}>
					<ul>
						<li><a href="#about"><span className={s.navNum}>01</span>about</a></li>
						<li><a href="#work"><span className={s.navNum}>02</span>work</a></li>
						<li><a href="#contact"><span className={s.navNum}>03</span>contact</a></li>
					</ul>
				</nav>
			</header>

			<main id="main">
				{/* ——— HERO: the exhibition poster ——— */}
				<section className={s.hero} aria-labelledby="hero-name">
					<div className={s.heroArt} aria-hidden="true">
						<span className={s.heroCircle} />
						<span className={s.heroTriangle} />
						<span className={s.heroSquare} />
						<span className={s.heroBar} />
						<span className={s.heroRing} />
						<span className={s.heroBand}>
							<span>vibrant — fast — scalable — vibrant — fast — scalable</span>
						</span>
						<span className={s.heroDot} />
					</div>

					<p className={s.heroSide}>
						<span>{PROFILE.role.toLowerCase()}</span>
						<span className={s.heroSideRule} />
						<span>portfolio 2026</span>
					</p>

					<div className={s.heroCopy}>
						<p className={s.heroKicker}>
							<span className={s.kickerBox}>ausstellung</span> an exhibition of work by
						</p>
						<h1 id="hero-name" className={s.heroName}>
							<span>atrin</span>
							<span>hojjat</span>
						</h1>
						<p className={s.heroMessage}>
							build <em className={s.mRed}>vibrant,</em> <em className={s.mBlue}>fast</em>{' '}
							and <em className={s.mYellow}>scalable</em> web&nbsp;apps with&nbsp;me.
						</p>
						<p className={s.heroTagline}>{PROFILE.heroTagline.toLowerCase()}.</p>
					</div>

					<p className={s.heroMeta} aria-hidden="true">
						<span>form</span>
						<span>folgt</span>
						<span>funktion</span>
					</p>
				</section>

				{/* ——— ABOUT ——— */}
				<section id="about" className={s.about} aria-labelledby="about-title">
					<div className={s.aboutArt}>
						<span className={s.aboutSquare} aria-hidden="true" />
						<span className={s.aboutTriangle} aria-hidden="true" />
						<div className={s.aboutPhoto}>
							<Image
								src={PROFILE.photo}
								alt={`Portrait of ${PROFILE.name}`}
								width={307}
								height={307}
								sizes="(max-width: 700px) 60vw, 340px"
							/>
						</div>
						<span className={s.aboutNum} aria-hidden="true">01</span>
					</div>

					<div className={s.aboutText}>
						<p className={s.sectionLabel}><Glyph shape="circle" /> 01 / who</p>
						<h2 id="about-title" className={s.sectionTitle}>about <span className={s.titleThin}>me</span></h2>
						<p className={s.aboutGreeting}>{PROFILE.greeting.toLowerCase()}</p>
						<div className={s.aboutCols}>
							{ABOUT.map((p, i) => (
								<p key={i}>{p.replace(/\s+/g, ' ')}</p>
							))}
						</div>
					</div>
				</section>

				{/* ——— WORK ——— */}
				<section id="work" className={s.work} aria-labelledby="work-title">
					<div className={s.workHead}>
						<p className={s.sectionLabelLight}><Glyph shape="square" /> 02 / werke</p>
						<h2 id="work-title" className={s.workTitle}>selected work</h2>
						<p className={s.workCount} aria-hidden="true">
							<span>{pad(PROJECTS.length)}</span> projects
						</p>
						<span className={s.workHeadCircle} aria-hidden="true" />
						<span className={s.workHeadBar} aria-hidden="true" />
					</div>

					<ol className={s.projects}>
						{PROJECTS.map((project, i) => {
							const shape = SHAPES[i % 3]
							const color = COLORS[i % 3]
							const flip = i % 2 === 1
							return (
								<li key={project.name} className={`${s.project} ${flip ? s.projectFlip : ''} ${s[`tone_${color}`]}`}>
									<div className={s.projectMedia}>
										<span className={`${s.projectShape} ${s[`projectShape_${shape}`]}`} aria-hidden="true" />
										<div className={s.projectFrame}>
											<Image
												src={project.thumbnail}
												alt={`Screenshot of the ${project.name} website`}
												width={1280}
												height={800}
												sizes="(max-width: 900px) 92vw, 720px"
											/>
										</div>
									</div>

									<div className={s.projectBody}>
										<p className={s.projectIndex} aria-hidden="true">
											<span>{pad(i + 1)}</span>
											<Glyph shape={shape} />
										</p>
										<h3 className={s.projectName}>{project.name.toLowerCase()}</h3>
										<div className={s.projectDesc}>
											{paragraphs(project.description).map((p, j) => (
												<p key={j}>{p}</p>
											))}
										</div>
										<ul className={s.stack} aria-label={`${project.name} tech stack`}>
											{project.stack.map((tech, k) => (
												<li key={tech}>
													<Glyph shape={SHAPES[k % 3]} />
													{tech.toLowerCase()}
												</li>
											))}
										</ul>
										{project.link && (
											<a href={project.link} className={s.visit} target="_blank" rel="noopener noreferrer">
												visit website
												<span className={s.visitArrow} aria-hidden="true">→</span>
												<span className="sr-only"> (opens {project.name} in a new tab)</span>
											</a>
										)}
									</div>
								</li>
							)
						})}
					</ol>
				</section>
			</main>

			{/* ——— CONTACT ——— */}
			<footer id="contact" className={s.contact} aria-labelledby="contact-title">
				<span className={s.contactCircle} aria-hidden="true" />
				<span className={s.contactBar} aria-hidden="true" />
				<span className={s.contactTriangle} aria-hidden="true" />

				<div className={s.contactMain}>
					<p className={s.sectionLabelLight}><Glyph shape="triangle" /> 03 / kontakt</p>
					<h2 id="contact-title" className={s.contactTitle}>
						let&rsquo;s<br />build.
					</h2>
					<div className={s.contactPitch}>
						{PROFILE.footerPitch.map((line) => (
							<p key={line}>{line.toLowerCase()}</p>
						))}
					</div>

					<ul className={s.emails}>
						{CONTACT.emails.map((email) => (
							<li key={email}>
								<a href={`mailto:${email}`}>{email}</a>
							</li>
						))}
					</ul>

					<ul className={s.social}>
						{CONTACT.links.map((l) => (
							<li key={l.href}>
								<a href={l.href} target="_blank" rel="noopener noreferrer">
									{l.label.toLowerCase()} <span aria-hidden="true">↗</span>
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className={s.techCol}>
					<h3 className={s.techTitle}>werkzeug / tools</h3>
					<ol className={s.techList}>
						{TECH_FOOTER.map((t, i) => (
							<li key={t}>
								<span className={s.techNum}>{pad(i + 1)}</span>
								{t.toLowerCase()}
							</li>
						))}
					</ol>
				</div>

				<div className={s.colophon}>
					<Link href="/styles" className={s.allStyles}>
						<span aria-hidden="true">←</span> all styles
					</Link>
					<p>set in jost, after paul renner&rsquo;s futura (1927). geometry drawn in css.</p>
					<p>© {PROFILE.name.toLowerCase()}</p>
				</div>
			</footer>
		</div>
	)
}
