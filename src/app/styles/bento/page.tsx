import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { geist, geistMono } from './fonts'
import { Spotlight } from './Spotlight'
import s from './bento.module.css'

export const metadata: Metadata = {
	title: 'Bento Grid · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio as a bento grid: rounded tiles of different sizes, one idea per tile, in the style of Apple keynotes and 2020s SaaS landing pages.',
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

// Render a paragraph with one phrase lifted to full white, the rest in muted grey (Apple's two-tone copy).
function Lift({ text, phrase }: { text: string, phrase: string }) {
	const clean = text.replace(/\s+/g, ' ').trim()
	const i = clean.indexOf(phrase)
	if (i < 0) return <>{clean}</>
	return (
		<>
			{clean.slice(0, i)}
			<strong className={s.lift}>{phrase}</strong>
			{clean.slice(i + phrase.length)}
		</>
	)
}

// How often each technology appears across the five projects: real data for the "stack" chart tile.
const STACK_COUNTS = (() => {
	const counts = new Map<string, number>()
	for (const p of PROJECTS) for (const t of new Set(p.stack)) counts.set(t, (counts.get(t) ?? 0) + 1)
	return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
})()

const MONOGRAMS: Record<string, string> = {
	React: 'Re', Vue: 'Vu', Django: 'Dj', FastAPI: 'Fa', Go: 'Go', Python: 'Py', Docker: 'Dk', Kubernetes: 'K8s',
}

const NAV = [
	{ href: '#overview', label: 'Overview' },
	{ href: '#about', label: 'About' },
	{ href: '#work', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
	return (
		<svg className={s.arrow} viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
			{diagonal ? <path d="M5 11 11 5M6 5h5v5" /> : <path d="M3 8h10M9 4l4 4-4 4" />}
		</svg>
	)
}

function GithubIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={s.brandIcon}>
			<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
		</svg>
	)
}

function LinkedinIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={s.brandIcon}>
			<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
		</svg>
	)
}

// A dotted globe with a few lit nodes joined by arcs: "works with different teams".
function DotGlobe() {
	const dots: { x: number, y: number }[] = []
	for (let lat = -75; lat <= 75; lat += 15) {
		const r = Math.cos((lat * Math.PI) / 180) * 70
		const y = 80 - Math.sin((lat * Math.PI) / 180) * 70
		const n = Math.max(3, Math.round(r / 7))
		for (let k = 0; k < n; k++) {
			const a = (k / n) * Math.PI * 2 + lat / 40
			if (Math.sin(a) < 0) continue
			dots.push({ x: 80 + Math.cos(a) * r, y })
		}
	}
	const nodes = [[52, 58], [104, 44], [118, 98], [70, 116]]
	return (
		<svg viewBox="0 0 160 160" className={s.globe} aria-hidden="true">
			<circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeOpacity=".12" />
			{dots.map((d, i) => <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="1.3" fill="currentColor" fillOpacity=".28" />)}
			<path d="M52 58Q80 30 104 44M104 44Q128 70 118 98M118 98Q96 124 70 116M70 116Q40 90 52 58" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="3 3" />
			{nodes.map(([x, y], i) => (
				<g key={i}>
					<circle cx={x} cy={y} r="7" fill="var(--accent)" fillOpacity=".18" />
					<circle cx={x} cy={y} r="3" fill="var(--accent)" />
				</g>
			))}
		</svg>
	)
}

export default function BentoPage() {
	const [featured, ...rest] = PROJECTS
	const featuredParas = paragraphs(featured.description)
	const topStack = STACK_COUNTS.slice(0, 7)
	const email = CONTACT.emails[0]

	return (
		<div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
			<a href="#main" className={s.skip}>Skip to content</a>

			<header className={s.navWrap}>
				<nav className={s.nav} aria-label="Sections">
					<a href="#overview" className={s.logo} aria-label={`${PROFILE.name}, back to top`}>AH</a>
					<ul className={s.navList}>
						{NAV.map((n) => <li key={n.href}><a href={n.href} className={s.navLink}>{n.label}</a></li>)}
					</ul>
					<Link href="/styles" className={s.navCta}>All styles</Link>
				</nav>
			</header>

			<main id="main" className={s.main}>
				{/* ───────────── Overview: the hero is itself a bento ───────────── */}
				<section id="overview" aria-labelledby="hero-title" className={s.section}>
					<Spotlight className={`${s.grid} ${s.enter}`}>
						<article data-tile className={`${s.tile} ${s.c2} ${s.r2} ${s.heroTile}`}>
							<div className={s.heroGlow} aria-hidden="true" />
							<p className={s.eyebrow}><span className={s.liveDot} aria-hidden="true" />{PROFILE.name} · {PROFILE.role}</p>
							<h1 id="hero-title" className={s.heroTitle}>
								Build <span className={s.grad}>vibrant, fast and scalable</span> web apps with me.
							</h1>
							<div className={s.heroFoot}>
								<p className={s.heroTagline}>{PROFILE.heroTagline}.</p>
								<div className={s.btnRow}>
									<a href="#work" className={s.btnPrimary}>See the work <Arrow /></a>
									<a href="#contact" className={s.btnGhost}>Get in touch</a>
								</div>
							</div>
						</article>

						<figure data-tile className={`${s.tile} ${s.r2} ${s.photoTile}`}>
							<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill sizes="(max-width: 960px) 50vw, 300px" className={s.photo} priority />
							<figcaption className={s.photoCap}>
								<span className={s.photoHi}>{PROFILE.greeting}</span>
								<span className={s.photoRole}>{PROFILE.role}</span>
							</figcaption>
						</figure>

						<article data-tile className={`${s.tile} ${s.statTile}`}>
							<p className={s.label}>Logo Diffusion</p>
							<p className={s.stat}>~1M</p>
							<p className={s.support}>users generating logos with custom AI models</p>
							<div className={s.dotMatrix} aria-hidden="true">
								{Array.from({ length: 40 }, (_, i) => <span key={i} />)}
							</div>
						</article>

						<article data-tile className={`${s.tile} ${s.statTile}`}>
							<p className={s.label}>Generations</p>
							<p className={s.stat}>25k<span className={s.statUnit}>/wk</span></p>
							<p className={s.support}>optimised and constantly monitored</p>
							<div className={s.bars} aria-hidden="true">
								{[62, 70, 66, 78, 74, 84, 90].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
							</div>
						</article>

						<article data-tile className={`${s.tile} ${s.c2} ${s.techTile}`}>
							<div className={s.tileHead}>
								<p className={s.label}>Daily toolkit</p>
								<h2 className={s.tileTitle}>Front to back, and into production.</h2>
							</div>
							<ul className={s.iconCloud}>
								{TECH_FOOTER.map((t, i) => (
									<li key={t} className={s.appIcon} style={{ ['--i' as string]: i }}>
										<span className={s.appGlyph} aria-hidden="true">{MONOGRAMS[t] ?? t.slice(0, 2)}</span>
										<span className={s.appName}>{t}</span>
									</li>
								))}
							</ul>
						</article>

						<article data-tile className={`${s.tile} ${s.globeTile}`}>
							<DotGlobe />
							<div>
								<p className={s.label}>Collaboration</p>
								<h2 className={s.tileTitleSm}>Likes working with different teams.</h2>
							</div>
						</article>

						<a data-tile href="#contact" className={`${s.tile} ${s.ctaTile}`}>
							<span className={s.ctaLabel}>Start a project</span>
							<span className={s.ctaBig}>Let’s talk<Arrow /></span>
							<span className={s.ctaMail}>{email}</span>
						</a>
					</Spotlight>
				</section>

				{/* ───────────── About ───────────── */}
				<section id="about" aria-labelledby="about-title" className={s.section}>
					<header className={s.sectionHead}>
						<p className={s.kicker}>About</p>
						<h2 id="about-title" className={s.sectionTitle}>
							Who’s building it. <span className={s.dim}>A developer who loves making products that improve our lives.</span>
						</h2>
					</header>
					<Spotlight className={s.grid}>
						<article data-tile className={`${s.tile} ${s.c2} ${s.r2} ${s.proseTile}`}>
							<p className={s.label}>In short</p>
							<h3 className={s.proseTitle}>Creative. Passionate. Hardworking.</h3>
							<p className={s.prose}>
								<Lift text={ABOUT[0]} phrase="love creating new products to improve our lives" />
							</p>
						</article>

						<article data-tile className={`${s.tile} ${s.c2} ${s.quoteTile}`}>
							<p className={s.prose}>
								<Lift text={ABOUT[1]} phrase="I'm ready to accompany you through this elusive path." />
							</p>
							<div className={s.byline}>
								<Image src={PROFILE.photo} alt="" width={40} height={40} className={s.avatar} />
								<span>
									<span className={s.bylineName}>{PROFILE.name}</span>
									<span className={s.bylineRole}>{PROFILE.role}</span>
								</span>
							</div>
						</article>

						<article data-tile className={`${s.tile} ${s.learnTile}`}>
							<p className={s.label}>Always learning</p>
							<h3 className={s.tileTitleSm}>New skills, researched continuously.</h3>
							<svg viewBox="0 0 200 60" className={s.spark} aria-hidden="true" preserveAspectRatio="none">
								<defs>
									<linearGradient id="bento-spark" x1="0" x2="0" y1="0" y2="1">
										<stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
										<stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
									</linearGradient>
								</defs>
								<path d="M0 54 C30 50 40 44 60 42 S100 30 120 26 S160 14 200 6 V60 H0Z" fill="url(#bento-spark)" />
								<path d="M0 54 C30 50 40 44 60 42 S100 30 120 26 S160 14 200 6" fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
							</svg>
						</article>

						<article data-tile className={`${s.tile} ${s.focusTile}`}>
							<p className={s.label}>Builds for both</p>
							<ul className={s.focusList}>
								<li><span className={s.focusDot} aria-hidden="true" />Customer experience</li>
								<li><span className={`${s.focusDot} ${s.focusDotAlt}`} aria-hidden="true" />Technical infrastructure</li>
							</ul>
							<p className={s.support}>Every new tool is weighed against both.</p>
						</article>
					</Spotlight>
				</section>

				{/* ───────────── Work ───────────── */}
				<section id="work" aria-labelledby="work-title" className={s.section}>
					<header className={s.sectionHead}>
						<p className={s.kicker}>Work</p>
						<h2 id="work-title" className={s.sectionTitle}>
							Selected work. <span className={s.dim}>Five products, from AI logo generation to online clinics.</span>
						</h2>
					</header>
					<Spotlight className={s.grid}>
						<article data-tile className={`${s.tile} ${s.c4} ${s.featureTile}`}>
							<div className={s.featureText}>
								<p className={s.label}><span className={s.badge}>Featured</span> 01 / 05</p>
								<h3 className={s.projTitleLg}>{featured.name}</h3>
								{featuredParas.map((p) => <p key={p} className={s.projDesc}>{p}</p>)}
								<dl className={s.miniStats}>
									<div><dt>Users</dt><dd>~1M</dd></div>
									<div><dt>Per week</dt><dd>25k</dd></div>
									<div><dt>Stack</dt><dd>{featured.stack.length}</dd></div>
								</dl>
								<ul className={s.chips} aria-label={`${featured.name} stack`}>
									{featured.stack.map((t) => <li key={t} className={s.chip}>{t}</li>)}
								</ul>
								{featured.link && (
									<a href={featured.link} target="_blank" rel="noreferrer" className={s.btnPrimary}>
										Visit website <Arrow diagonal /><span className={s.srOnly}> (opens in a new tab)</span>
									</a>
								)}
							</div>
							<div className={s.featureShot}>
								<Image src={featured.thumbnail} alt={`Screenshot of the ${featured.name} website`} fill sizes="(max-width: 960px) 100vw, 640px" className={s.shotImg} />
							</div>
						</article>

						{rest.map((p, i) => (
							<article key={p.name} data-tile className={`${s.tile} ${s.c2} ${s.projTile}`}>
								<div className={s.shotFrame}>
									<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} fill sizes="(max-width: 960px) 100vw, 560px" className={s.shotImg} />
								</div>
								<p className={s.label}>{String(i + 2).padStart(2, '0')} / 05</p>
								<h3 className={s.projTitle}>{p.name}</h3>
								{paragraphs(p.description).map((d) => <p key={d} className={s.projDesc}>{d}</p>)}
								<ul className={s.chips} aria-label={`${p.name} stack`}>
									{p.stack.map((t) => <li key={t} className={s.chip}>{t}</li>)}
								</ul>
								{p.link && (
									<a href={p.link} target="_blank" rel="noreferrer" className={s.btnGhost}>
										Visit website <Arrow diagonal /><span className={s.srOnly}> (opens in a new tab)</span>
									</a>
								)}
							</article>
						))}

						<article data-tile className={`${s.tile} ${s.countTile}`}>
							<p className={s.label}>Across all projects</p>
							<p className={s.stat}>{STACK_COUNTS.length}</p>
							<p className={s.support}>distinct technologies across the five stacks</p>
						</article>

						<article data-tile className={`${s.tile} ${s.c3} ${s.chartTile}`}>
							<div className={s.tileHead}>
								<p className={s.label}>Most used</p>
								<h3 className={s.tileTitleSm}>How often each tool shows up in the five projects.</h3>
							</div>
							<ol className={s.chart}>
								{topStack.map(([t, n]) => (
									<li key={t} className={s.chartRow}>
										<span className={s.chartName}>{t}</span>
										<span className={s.chartTrack} aria-hidden="true"><span className={s.chartFill} style={{ width: `${(n / PROJECTS.length) * 100}%` }} /></span>
										<span className={s.chartVal}>{n}<span className={s.dimSm}>/5</span></span>
									</li>
								))}
							</ol>
						</article>
					</Spotlight>
				</section>

				{/* ───────────── Contact ───────────── */}
				<section id="contact" aria-labelledby="contact-title" className={s.section}>
					<header className={s.sectionHead}>
						<p className={s.kicker}>Contact</p>
						<h2 id="contact-title" className={s.sectionTitle}>
							Let’s talk. <span className={s.dim}>Have an app in mind? Don’t hesitate to reach out.</span>
						</h2>
					</header>
					<Spotlight className={s.grid}>
						<article data-tile className={`${s.tile} ${s.c2} ${s.r2} ${s.pitchTile}`}>
							<div className={s.heroGlow} aria-hidden="true" />
							<p className={s.label}>Say hello</p>
							<h3 className={s.pitchTitle}>{PROFILE.footerPitch[0]}</h3>
							<p className={s.heroTagline}>{PROFILE.footerPitch[1]}</p>
							<div className={s.btnRow}>
								<a href={`mailto:${email}`} className={s.btnPrimary}>Email {email} <Arrow /></a>
							</div>
						</article>

						{CONTACT.emails.map((e, i) => (
							<a key={e} data-tile href={`mailto:${e}`} className={`${s.tile} ${s.c2} ${s.linkTile}`}>
								<span className={s.label}>{i === 0 ? 'Email' : 'Email, personal'}</span>
								<span className={s.linkBig}>{e}</span>
								<span className={s.linkGo} aria-hidden="true"><Arrow diagonal /></span>
							</a>
						))}

						{CONTACT.links.map((l) => (
							<a key={l.label} data-tile href={l.href} target="_blank" rel="noreferrer" className={`${s.tile} ${s.socialTile}`}>
								{l.label === 'Github' ? <GithubIcon /> : <LinkedinIcon />}
								<span>
									<span className={s.socialName}>{l.label === 'Github' ? 'GitHub' : l.label}</span>
									<span className={s.support}>{l.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
								</span>
								<span className={s.linkGo} aria-hidden="true"><Arrow diagonal /></span>
								<span className={s.srOnly}> (opens in a new tab)</span>
							</a>
						))}

						<article data-tile className={`${s.tile} ${s.c2} ${s.stackTile}`}>
							<p className={s.label}>Works with</p>
							<ul className={s.chips}>
								{TECH_FOOTER.map((t) => <li key={t} className={s.chipLg}>{t}</li>)}
							</ul>
						</article>
					</Spotlight>
				</section>
			</main>

			<footer className={s.footer}>
				<span>© {PROFILE.name}</span>
				<span className={s.footerMid}>Set in Geist · Bento Grid study</span>
				<Link href="/styles" className={s.footerLink}>All styles <Arrow /></Link>
			</footer>
		</div>
	)
}
