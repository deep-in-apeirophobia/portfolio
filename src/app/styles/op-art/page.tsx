import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import BulgeField from './BulgeField'
import { Blaze, CurrentBand, SquaresBand, StripeName, VegaColour } from './figures'
import { archivo, unbounded } from './fonts'
import s from './op.module.css'

export const metadata: Metadata = {
	title: 'Op Art · Atrin Hojjat',
	description:
		'Atrin Hojjat’s portfolio as a 1960s Op Art exhibition: Vasarely’s swelling checkerboards, Bridget Riley’s rippling lines and zigzag rings, in black and white with one Vasarely colour plate.',
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

// Each project plate gets a different Op frame, built from CSS repeating gradients.
const FRAMES = [
	{ cls: s.frameDiagonal, name: 'Diagonal stripes' },
	{ cls: s.frameChecker, name: 'Checkerboard' },
	{ cls: s.frameMoire, name: 'Moiré rings' },
	{ cls: s.frameZigzag, name: 'Chevrons' },
	{ cls: s.frameDots, name: 'Dot screen' },
]

export default function OpArtPage() {
	return (
		<div className={`${unbounded.variable} ${archivo.variable} ${s.page}`}>
			<a href="#main" className={s.skip}>
				Skip to content
			</a>

			<header className={s.topbar}>
				<a href="#top" className={s.brand}>
					<svg viewBox="0 0 40 40" className={s.brandMark} aria-hidden="true" focusable="false">
						{[19, 15, 11, 7, 3].map((r, i) => (
							<circle key={r} cx={20 + (i % 2 ? 1.2 : 0)} cy={20} r={r} className={i % 2 ? s.fillInk : s.fillPaper} />
						))}
					</svg>
					<span>
						Atrin Hojjat <span className={s.brandSub}>/ Op</span>
					</span>
				</a>
				<nav aria-label="Sections" className={s.nav}>
					<ul>
						<li>
							<a href="#about">
								<span className={s.navNum}>02</span>About
							</a>
						</li>
						<li>
							<a href="#work">
								<span className={s.navNum}>03</span>Work
							</a>
						</li>
						<li>
							<a href="#contact">
								<span className={s.navNum}>08</span>Contact
							</a>
						</li>
						<li>
							<Link href="/styles" className={s.navAll}>
								All styles
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main id="main">
				{/* ——— Plate 01: hero ——— */}
				<section id="top" className={s.hero} aria-labelledby="hero-title">
					<BulgeField />
					<div className={s.heroPanel}>
						<p className={s.plateLabel}>
							<span>Plate 01</span>
							<span>The Responsive Eye</span>
						</p>
						<h1 id="hero-title" className={s.heroName}>
							<span className={s.srOnly}>{PROFILE.name}</span>
							<StripeName id="op-name-lg" lines={['ATRIN', 'HOJJAT']} className={s.nameWide} />
							<StripeName id="op-name-sm" lines={['ATRIN', 'HOJJAT']} period={30} className={s.nameNarrow} />
						</h1>
						<p className={s.role}>{PROFILE.role}</p>
						<p className={s.message}>
							Build <span className={s.inv}>vibrant</span>, <span className={s.inv}>fast</span> and{' '}
							<span className={s.inv}>scalable</span> web apps with me.
						</p>
						<p className={s.tagline}>{PROFILE.heroTagline}</p>
						<div className={s.ctas}>
							<a href="#work" className={s.btnInk}>
								See the work <span aria-hidden="true">↓</span>
							</a>
							<a href="#contact" className={s.btnLine}>
								Say hi
							</a>
						</div>
					</div>
					<p className={s.heroCaption} aria-hidden="true">
						after Victor Vasarely, <i>Vega</i>, 1957
					</p>
				</section>

				<CurrentBand label="after Bridget Riley, Current, 1964" />

				{/* ——— Plate 02: about ——— */}
				<section id="about" className={s.about} aria-labelledby="about-title">
					<div className={s.aboutText}>
						<p className={s.plateLabel}>
							<span>Plate 02</span>
							<span>The maker</span>
						</p>
						<h2 id="about-title" className={s.stripeHeading}>
							About
						</h2>
						<p className={s.greeting}>{PROFILE.greeting}</p>
						{ABOUT.map((p) => (
							<p key={p.slice(0, 24)} className={s.body}>
								{p.replace(/\s+/g, ' ')}
							</p>
						))}
					</div>
					<figure className={s.portrait}>
						<div className={s.blazeWrap}>
							<Blaze className={s.blaze} />
							<Image
								src={PROFILE.photo}
								alt={`Portrait of ${PROFILE.name}`}
								width={320}
								height={320}
								className={s.portraitImg}
							/>
						</div>
						<figcaption className={s.caption}>Portrait in the eye of <i>Blaze</i> (Riley, 1962)</figcaption>
					</figure>
				</section>

				<SquaresBand label="after Bridget Riley, Movement in Squares, 1961" />

				{/* ——— Plates 03–07: projects ——— */}
				<section id="work" className={s.work} aria-labelledby="work-title">
					<div className={s.workHead}>
						<p className={s.plateLabel}>
							<span>Plates 03 – 07</span>
							<span>Selected work</span>
						</p>
						<h2 id="work-title" className={s.stripeHeading}>
							Work
						</h2>
					</div>

					<ol className={s.projects}>
						{PROJECTS.map((p, i) => {
							const frame = FRAMES[i % FRAMES.length]
							return (
								<li key={p.name} className={`${s.project} ${i % 2 ? s.projectFlip : ''}`}>
									<article aria-labelledby={`p-${i}`} className={s.projectInner}>
										<div className={`${s.frame} ${frame.cls}`}>
											<Image
												src={p.thumbnail}
												alt={`Screenshot of the ${p.name} website`}
												width={1280}
												height={720}
												sizes="(max-width: 860px) 92vw, 720px"
												className={s.shot}
											/>
										</div>
										<div className={s.projectText}>
											<p className={s.plateLabel}>
												<span>Plate {pad(i + 3)}</span>
												<span>{frame.name}</span>
											</p>
											<h3 id={`p-${i}`} className={s.projectName}>
												{p.name}
											</h3>
											{paragraphs(p.description).map((para) => (
												<p key={para.slice(0, 24)} className={s.body}>
													{para}
												</p>
											))}
											<h4 className={s.stackLabel}>Stack</h4>
											<ul className={s.chips} aria-label={`${p.name} tech stack`}>
												{p.stack.map((t) => (
													<li key={t}>{t}</li>
												))}
											</ul>
											{p.link && (
												<a href={p.link} target="_blank" rel="noopener noreferrer" className={s.btnInk}>
													Visit website <span aria-hidden="true">↗</span>
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

				<CurrentBand seed={0.37} label="after Bridget Riley, Cataract, 1967" />

				{/* ——— Plate 08: contact, in Vasarely's later colour ——— */}
				<section id="contact" className={s.contact} aria-labelledby="contact-title">
					<VegaColour />
					<div className={s.contactPanel}>
						<p className={s.plateLabel}>
							<span>Plate 08</span>
							<span>In colour · after Vasarely</span>
						</p>
						<h2 id="contact-title" className={s.stripeHeading}>
							Contact
						</h2>
						{PROFILE.footerPitch.map((l) => (
							<p key={l} className={s.pitch}>
								{l}
							</p>
						))}
						<ul className={s.emails}>
							{CONTACT.emails.map((e) => (
								<li key={e}>
									<a href={`mailto:${e}`}>{e}</a>
								</li>
							))}
						</ul>
						<ul className={s.links}>
							{CONTACT.links.map((l) => (
								<li key={l.href}>
									<a href={l.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>
										{l.label} <span aria-hidden="true">↗</span>
										<span className={s.srOnly}> (opens in a new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>

			<footer className={s.footer}>
				<div className={s.footerTech}>
					<h2 className={s.stackLabel}>Built with</h2>
					<ul className={s.chips}>
						{TECH_FOOTER.map((t) => (
							<li key={t}>{t}</li>
						))}
					</ul>
				</div>
				<div className={s.footerMeta}>
					<Link href="/styles" className={s.btnPaper}>
						<span aria-hidden="true">←</span> All styles
					</Link>
					<p>
						Op Art · after <i>The Responsive Eye</i>, MoMA 1965 · © {PROFILE.name}
					</p>
				</div>
			</footer>
		</div>
	)
}
