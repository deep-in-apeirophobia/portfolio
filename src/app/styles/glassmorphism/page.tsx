import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import GlassShell from './GlassShell'
import { inter } from './fonts'
import styles from './glass.module.css'
import { ArrowDown, ArrowUpRight, ChevronRight, Envelope, GitHub, LinkedIn, Sparkle } from './Icons'

export const metadata: Metadata = {
	title: 'Glassmorphism · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio as frosted, layered glass floating over a drifting mesh gradient, from macOS Big Sur to Liquid Glass.',
}

/** Split a project description into clean paragraphs (the source has stray \n and indentation). */
function paragraphs(text: string): string[] {
	return text
		.split(/\n\s*\n|\n/)
		.map(p => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
		.reduce<string[]>((acc, p) => {
			// Re-join fragments that were broken mid-sentence by a stray newline.
			const last = acc[acc.length - 1]
			if (last && !/[.!?)]$/.test(last)) acc[acc.length - 1] = `${last} ${p}`
			else acc.push(p)
			return acc
		}, [])
}

const pad = (n: number) => String(n).padStart(2, '0')

// A radial displacement map: neutral grey in the middle, red/green ramps toward the rim, so an
// feDisplacementMap bends whatever sits behind the edge of a pill, the way Liquid Glass lenses do.
const LENS_MAP = `data:image/svg+xml,${encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">' +
	'<defs><linearGradient id="x"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#f00"/></linearGradient>' +
	'<linearGradient id="y" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#0f0"/></linearGradient>' +
	'<filter id="b"><feGaussianBlur stdDeviation="7"/></filter></defs>' +
	'<rect width="100" height="100" fill="url(#x)"/>' +
	'<rect width="100" height="100" fill="url(#y)" style="mix-blend-mode:screen"/>' +
	'<rect x="14" y="14" width="72" height="72" rx="30" fill="#808000" filter="url(#b)"/></svg>',
)}`

export default function GlassmorphismPage() {
	const [featured, ...rest] = PROJECTS
	const firstEmail = CONTACT.emails[0]

	return (
		<GlassShell className={`${styles.page} ${inter.variable}`}>
			{/* SVG filter used by backdrop-filter on the Liquid-Glass lens elements (Chromium); others fall back to blur. */}
			<svg className={styles.defs} aria-hidden focusable={false}>
				<filter id="glass-lens" x="0" y="0" width="1" height="1" primitiveUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
					<feImage href={LENS_MAP} x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map" />
					<feDisplacementMap in="SourceGraphic" in2="map" scale="0.18" xChannelSelector="R" yChannelSelector="G" />
				</filter>
			</svg>

			{/* The wallpaper: slowly drifting colour fields behind every pane of glass. */}
			<div className={styles.wallpaper} aria-hidden>
				<span className={`${styles.blob} ${styles.b1}`} />
				<span className={`${styles.blob} ${styles.b2}`} />
				<span className={`${styles.blob} ${styles.b3}`} />
				<span className={`${styles.blob} ${styles.b4}`} />
				<span className={`${styles.blob} ${styles.b5}`} />
				<span className={`${styles.blob} ${styles.b6}`} />
				<span className={`${styles.blob} ${styles.b7}`} />
				<span className={`${styles.blob} ${styles.b8}`} />
				<span className={`${styles.blob} ${styles.b9}`} />
				<span className={`${styles.blob} ${styles.b10}`} />
				<span className={`${styles.blob} ${styles.b11}`} />
				<span className={`${styles.blob} ${styles.b12}`} />
				<span className={`${styles.blob} ${styles.b13}`} />
				<span className={styles.grain} />
			</div>

			<main>
				{/* ───────────── Hero ───────────── */}
				<section id="top" className={styles.hero} aria-labelledby="hero-title">
					<div className={styles.heroWindowCol}>
						<div className={`${styles.glass} ${styles.thick} ${styles.window}`} data-glass>
							<div className={styles.windowBar}>
								<span className={styles.greeting}>
									<Image src={PROFILE.photo} alt="" width={28} height={28} className={styles.greetingAvatar} />
									{PROFILE.greeting}
								</span>
								<span className={styles.windowMeta}>{PROFILE.name} · {PROFILE.role}</span>
							</div>

							<h1 id="hero-title" className={styles.heroTitle}>
								Build <span className={styles.vivid}>vibrant</span>, fast and scalable web apps with me.
							</h1>
							<p className={styles.heroTagline}>{PROFILE.heroTagline}.</p>

							<div className={styles.ctaRow}>
								<a href="#work" className={`${styles.pill} ${styles.pillTinted} ${styles.focusRing}`} data-glass>
									See my work <ArrowDown className={styles.pillIcon} />
								</a>
								<a href="#contact" className={`${styles.pill} ${styles.pillClear} ${styles.focusRing}`} data-glass>
									Get in touch
								</a>
							</div>
						</div>
						<span className={styles.grabber} aria-hidden />
						<span className={styles.lensOrb} aria-hidden />
					</div>

					<aside className={styles.widgets} aria-label="At a glance">
						<div className={`${styles.glass} ${styles.thick} ${styles.widget} ${styles.float1}`} data-glass>
							<div className={styles.contactCard}>
								<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width={64} height={64} className={styles.contactAvatar} />
								<div>
									<p className={styles.widgetTitle}>{PROFILE.name}</p>
									<p className={styles.widgetSub}>{PROFILE.role}</p>
								</div>
							</div>
							<div className={styles.iconRow}>
								<a href={CONTACT.links[0].href} className={`${styles.iconBtn} ${styles.focusRing}`} aria-label="GitHub" target="_blank" rel="noreferrer"><GitHub /></a>
								<a href={CONTACT.links[1].href} className={`${styles.iconBtn} ${styles.focusRing}`} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedIn /></a>
								<a href={`mailto:${firstEmail}`} className={`${styles.iconBtn} ${styles.focusRing}`} aria-label={`Email ${firstEmail}`}><Envelope /></a>
							</div>
						</div>

						<div className={`${styles.glass} ${styles.thick} ${styles.widget} ${styles.statWidget} ${styles.float2}`} data-glass>
							<p className={styles.widgetEyebrow}><Sparkle className={styles.eyebrowIcon} /> Featured · {featured.name}</p>
							<div className={styles.stats}>
								<div><span className={styles.statNum}>~1M</span><span className={styles.statLabel}>users</span></div>
								<div><span className={styles.statNum}>25k</span><span className={styles.statLabel}>generations / week</span></div>
							</div>
						</div>

						<div className={`${styles.glass} ${styles.regular} ${styles.widget} ${styles.stackWidget} ${styles.float3}`} data-glass>
							<p className={styles.widgetEyebrowSmall}>Daily drivers</p>
							<ul className={styles.chips}>
								{TECH_FOOTER.slice(0, 6).map(t => <li key={t} className={styles.chip}>{t}</li>)}
							</ul>
						</div>
					</aside>
				</section>

				{/* ───────────── About ───────────── */}
				<section id="about" className={styles.section} aria-labelledby="about-title">
					<div className={styles.aboutGrid}>
						<figure className={`${styles.glass} ${styles.regular} ${styles.photoCard}`} data-glass>
							<Image src={PROFILE.photo} alt={`Photo of ${PROFILE.name}`} width={307} height={307} className={styles.photo} />
							<figcaption className={styles.photoCaption}>
								<span className={styles.captionName}>{PROFILE.name}</span>
								<span className={styles.captionRole}>{PROFILE.role}</span>
							</figcaption>
						</figure>

						<div className={`${styles.glass} ${styles.thick} ${styles.aboutPanel}`} data-glass>
							<p className={styles.eyebrow}>About</p>
							<h2 id="about-title" className={styles.h2}>A developer who likes the whole journey.</h2>
							{ABOUT.map(p => <p key={p.slice(0, 20)} className={styles.body}>{p.replace(/\s+/g, ' ')}</p>)}
						</div>
					</div>
				</section>

				{/* ───────────── Work ───────────── */}
				<section id="work" className={styles.section} aria-labelledby="work-title">
					<div className={`${styles.glass} ${styles.thick} ${styles.sectionHead}`} data-glass>
						<div>
							<p className={styles.eyebrow}>Selected work</p>
							<h2 id="work-title" className={styles.h2}>Projects</h2>
						</div>
						<p className={styles.countPill}>{PROJECTS.length} projects</p>
					</div>

					<article className={`${styles.glass} ${styles.thick} ${styles.project} ${styles.projectFeatured}`} data-glass aria-labelledby="p-0">
						<ProjectBody project={featured} index={0} featured />
					</article>

					<div className={styles.projectGrid}>
						{rest.map((p, i) => (
							<article key={p.name} className={`${styles.glass} ${styles.thick} ${styles.project}`} data-glass aria-labelledby={`p-${i + 1}`}>
								<ProjectBody project={p} index={i + 1} />
							</article>
						))}
					</div>
				</section>

				{/* ───────────── Contact ───────────── */}
				<section id="contact" className={styles.section} aria-labelledby="contact-title">
					<div className={`${styles.glass} ${styles.thick} ${styles.contactPanel}`} data-glass>
						<div className={styles.contactIntro}>
							<p className={styles.eyebrow}>Contact</p>
							<h2 id="contact-title" className={styles.h2Big}>Let’s make something <span className={styles.vivid}>amazing</span>.</h2>
							{PROFILE.footerPitch.map(p => <p key={p} className={styles.body}>{p}</p>)}
							<div className={styles.ctaRow}>
								<a href={`mailto:${firstEmail}`} className={`${styles.pill} ${styles.pillTinted} ${styles.focusRing}`} data-glass>
									<Envelope className={styles.pillIcon} /> Say hi
								</a>
							</div>
						</div>

						<div className={styles.contactLists}>
							<h3 className={styles.listHeader}>Email</h3>
							<ul className={styles.list}>
								{CONTACT.emails.map(e => (
									<li key={e}>
										<a href={`mailto:${e}`} className={`${styles.row} ${styles.focusRing}`}>
											<span className={`${styles.rowIcon} ${styles.rowIconBlue}`}><Envelope /></span>
											<span className={styles.rowLabel}>{e}</span>
											<ChevronRight className={styles.rowChevron} />
										</a>
									</li>
								))}
							</ul>

							<h3 className={styles.listHeader}>Elsewhere</h3>
							<ul className={styles.list}>
								{CONTACT.links.map(l => (
									<li key={l.href}>
										<a href={l.href} target="_blank" rel="noreferrer" className={`${styles.row} ${styles.focusRing}`}>
											<span className={`${styles.rowIcon} ${l.label === 'Github' ? styles.rowIconInk : styles.rowIconLinkedIn}`}>
												{l.label === 'Github' ? <GitHub /> : <LinkedIn />}
											</span>
											<span className={styles.rowLabel}>{l.label === 'Github' ? 'GitHub' : l.label}</span>
											<ArrowUpRight className={styles.rowChevron} />
										</a>
									</li>
								))}
							</ul>

							<h3 className={styles.listHeader}>Tech I work with</h3>
							<ul className={styles.chips}>
								{TECH_FOOTER.map(t => <li key={t} className={styles.chip}>{t}</li>)}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<footer className={styles.footer}>
				<div className={`${styles.glass} ${styles.thick} ${styles.footerBar}`} data-glass>
					<p>{PROFILE.name} · {PROFILE.role}</p>
					<p className={styles.footerNote}>Glassmorphism study, 2020s</p>
					<Link href="/styles" className={`${styles.pill} ${styles.pillClear} ${styles.pillSmall} ${styles.focusRing}`} data-glass>
						All styles <ChevronRight className={styles.pillIcon} />
					</Link>
				</div>
			</footer>
		</GlassShell>
	)
}

function ProjectBody({ project, index, featured = false }: { project: (typeof PROJECTS)[number], index: number, featured?: boolean }) {
	return (
		<>
			<div className={styles.shotFrame}>
				<Image
					src={project.thumbnail}
					alt={`Screenshot of the ${project.name} website`}
					fill
					sizes={featured ? '(min-width: 1024px) 680px, 100vw' : '(min-width: 900px) 560px, 100vw'}
					className={styles.shot}
				/>
			</div>
			<div className={styles.projectText}>
				<p className={styles.projectIndex}>{pad(index + 1)}{featured ? ' · Featured' : ''}</p>
				<h3 id={`p-${index}`} className={styles.projectName}>{project.name}</h3>
				{paragraphs(project.description).map(p => <p key={p.slice(0, 24)} className={styles.projectDesc}>{p}</p>)}
				<ul className={styles.chips} aria-label="Tech stack">
					{project.stack.map(s => <li key={s} className={styles.chip}>{s}</li>)}
				</ul>
				{project.link && (
					<a href={project.link} target="_blank" rel="noreferrer" className={`${styles.pill} ${styles.pillClear} ${styles.pillSmall} ${styles.focusRing}`} data-glass>
						Visit website <ArrowUpRight className={styles.pillIcon} />
						<span className="sr-only"> (opens {project.name} in a new tab)</span>
					</a>
				)}
			</div>
		</>
	)
}
