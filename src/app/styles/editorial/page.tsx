import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { display, sans, text } from './fonts'
import s from './editorial.module.css'

export const metadata: Metadata = {
	title: 'Editorial · Atrin Hojjat',
	description: 'The portfolio of Atrin Hojjat, set as a feature spread from a print magazine.',
}

// Section labels in the idiom of a magazine's departments.
const DEPARTMENTS = ['Artificial Intelligence', 'Health', 'Civic Technology', 'Food & Drink', 'Commerce']

const ISSUE = 'The Portfolio Issue'
const SEASON = 'Autumn 2026'

/** Normalise the stray newlines / indentation in project copy into clean sentences. */
function clean(str: string) {
	return str.replace(/\s+/g, ' ').trim()
}

function splitDescription(description: string) {
	// A newline only starts a new paragraph when the previous line ends a sentence;
	// otherwise it is a stray line break in the source and the lines are rejoined.
	const paragraphs: string[] = []
	for (const line of description.split('\n').map(clean).filter(Boolean)) {
		const prev = paragraphs[paragraphs.length - 1]
		if (prev && !/[.!?)]$/.test(prev)) paragraphs[paragraphs.length - 1] = `${prev} ${line}`
		else paragraphs.push(line)
	}
	const [first, ...rest] = paragraphs
	// The first sentence becomes the standfirst; the remainder is the body copy.
	const match = first.match(/^(.+?[.!?])\s+(.*)$/)
	const standfirst = match ? match[1] : first
	const lead = match ? match[2] : ''
	const body = [lead, ...rest].filter(Boolean)
	return { standfirst, body }
}

function hostname(href: string) {
	try {
		return new URL(href).hostname.replace(/^www\./, '')
	} catch {
		return href
	}
}

function Folio({ page, side = 'left' }: { page: number; side?: 'left' | 'right' }) {
	const num = String(page).padStart(2, '0')
	return (
		<div className={s.folio} aria-hidden="true">
			{side === 'left' ? (
				<>
					<span className={s.folioNum}>{num}</span>
					<span>{PROFILE.name}</span>
					<span className={s.folioRule} />
					<span>{ISSUE}</span>
				</>
			) : (
				<>
					<span>{ISSUE}</span>
					<span className={s.folioRule} />
					<span>{SEASON}</span>
					<span className={s.folioNum}>{num}</span>
				</>
			)}
		</div>
	)
}

function StackList({ stack }: { stack: string[] }) {
	return (
		<div className={s.stack}>
			<span className={s.stackLabel}>Filed under</span>
			<ul className={s.stackList} aria-label="Technology stack">
				{stack.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default function EditorialPage() {
	const [lead, ...features] = PROJECTS
	const leadCopy = splitDescription(lead.description)

	const contents = [
		{ href: '#cover', page: '01', title: 'Cover Story', dek: 'Vibrant, fast and scalable web apps.' },
		{ href: '#profile', page: '04', title: 'The Profile', dek: 'A conversation with Atrin Hojjat.' },
		{ href: '#features', page: '08', title: 'Features', dek: `${PROJECTS.length} projects, from AI to e-commerce.` },
		{ href: '#correspondence', page: '22', title: 'Correspondence', dek: 'How to reach the developer.' },
	]

	return (
		<div className={`${s.paper} ${display.variable} ${text.variable} ${sans.variable}`} lang="en">
			<a href="#cover" className={s.skip}>
				Skip to the cover story
			</a>

			{/* ───────────── Masthead ───────────── */}
			<header className={s.masthead}>
				<div className={s.dateline}>
					<span>Vol. I — No. 1</span>
					<span className={s.datelineCenter}>{SEASON}</span>
					<span>{ISSUE}</span>
				</div>
				<p className={s.nameplate}>
					<Link href="#cover" aria-label={`${PROFILE.name}: cover`}>
						{PROFILE.name}
					</Link>
				</p>
				<p className={s.tagline}>
					<span className={s.taglineRule} aria-hidden="true" />
					A Journal of Full-Stack Development
					<span className={s.taglineRule} aria-hidden="true" />
				</p>
				<nav aria-label="In this issue" className={s.nav}>
					<ul>
						{contents.map((c) => (
							<li key={c.href}>
								<a href={c.href}>
									<span className={s.navPage}>p.{c.page}</span> {c.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main>
				{/* ───────────── Cover story ───────────── */}
				<section id="cover" className={s.cover} aria-labelledby="cover-title">
					<div className={s.coverMain}>
						<p className={s.kicker}>Cover Story</p>
						<h1 id="cover-title" className={s.coverHeadline}>
							Build <em>vibrant</em>, <em>fast</em> &amp; <em>scalable</em> web apps with me.
						</h1>
						<p className={s.coverStandfirst}>{PROFILE.heroTagline}.</p>
						<p className={s.byline}>
							By <strong>{PROFILE.name}</strong>
							<span className={s.bylineSep} aria-hidden="true">
								|
							</span>
							{PROFILE.role}
						</p>
					</div>

					<aside className={s.contents} aria-label="Contents">
						<h2 className={s.contentsTitle}>In This Issue</h2>
						<ol className={s.contentsList}>
							{contents.map((c) => (
								<li key={c.href}>
									<a href={c.href}>
										<span className={s.contentsPage}>{c.page}</span>
										<span>
											<span className={s.contentsHead}>{c.title}</span>
											<span className={s.contentsDek}>{c.dek}</span>
										</span>
									</a>
								</li>
							))}
						</ol>
						<figure className={s.contentsFigure}>
							<Image
								src={lead.thumbnail}
								alt={`Screenshot of the ${lead.name} website`}
								width={640}
								height={374}
								sizes="(min-width: 1024px) 320px, 100vw"
								priority
							/>
							<figcaption>
								<strong>On the cover:</strong> {lead.name}, page 08.
							</figcaption>
						</figure>
					</aside>
				</section>

				<Folio page={3} side="right" />

				{/* ───────────── Profile / interview ───────────── */}
				<article id="profile" className={s.section} aria-labelledby="profile-title">
					<header className={s.articleHead}>
						<p className={s.kicker}>The Profile</p>
						<h2 id="profile-title" className={s.profileHeadline}>
							A Developer for the <em>Journey</em>
						</h2>
						<p className={s.standfirst}>
							{PROFILE.name} on working with different teams, researching new technologies, and bridging the
							gap between a product and the people who use it.
						</p>
						<p className={s.byline}>
							Interview by <strong>The Editors</strong>
						</p>
					</header>

					<div className={s.profileGrid}>
						<figure className={s.portrait}>
							<div className={s.portraitFrame}>
								<Image
									src={PROFILE.photo}
									alt={`Portrait of ${PROFILE.name}`}
									width={307}
									height={307}
									sizes="(min-width: 1024px) 300px, 60vw"
								/>
							</div>
							<figcaption>
								<strong>{PROFILE.name}</strong>, {PROFILE.role.toLowerCase()}. “{PROFILE.greeting}”
							</figcaption>
						</figure>

						<div className={s.interview}>
							<p className={`${s.intro} ${s.dropcap}`}>
								{PROFILE.name.split(' ')[0]} introduces himself the way most good conversations begin:
								plainly. “{PROFILE.greeting}” he says, before turning to the work, and to the people he
								builds it for.
							</p>
							<p className={s.question}>How would you describe yourself as a developer?</p>
							<p className={s.answer}>{ABOUT[0]}</p>
							<blockquote className={s.pullquote}>
								<p>“I’m ready to accompany you through this elusive path.”</p>
							</blockquote>
							<p className={s.question}>And the kind of project you want to be part of?</p>
							<p className={s.answer}>
								{ABOUT[1]}
								<span className={s.endmark} aria-hidden="true">
									■
								</span>
							</p>
						</div>
					</div>
				</article>

				<Folio page={7} side="left" />

				{/* ───────────── Features ───────────── */}
				<section id="features" className={s.section} aria-labelledby="features-title">
					<header className={s.departmentHead}>
						<span className={s.departmentRule} aria-hidden="true" />
						<h2 id="features-title" className={s.departmentTitle}>
							Features
						</h2>
						<span className={s.departmentRule} aria-hidden="true" />
					</header>

					{/* Lead feature: full-bleed image, three-column body */}
					<article className={s.leadFeature} aria-labelledby="feature-0">
						<header className={s.leadHead}>
							<p className={s.kicker}>
								{DEPARTMENTS[0]} <span className={s.kickerNum}>· No. 01</span>
							</p>
							<h3 id="feature-0" className={s.leadHeadline}>
								{lead.name}
							</h3>
							<p className={s.standfirst}>{leadCopy.standfirst}</p>
						</header>
						<figure className={s.leadFigure}>
							<Image
								src={lead.thumbnail}
								alt={`Screenshot of the ${lead.name} website`}
								width={2560}
								height={1496}
								sizes="(min-width: 1280px) 1200px, 100vw"
							/>
							<figcaption>
								<span className={s.figNum}>Fig. 1</span> The {lead.name} homepage.
								{lead.link ? ` ${hostname(lead.link)}` : ''}
								<span className={s.credit}>Screenshot courtesy of the developer</span>
							</figcaption>
						</figure>
						<div className={s.leadBody}>
							<div className={s.leadText}>
								{leadCopy.body.map((p, i) => (
									<p key={i} className={i === 0 ? s.dropcap : undefined}>
										{p}
									</p>
								))}
								<p>
									The work sits on a stack of {lead.stack.length} tools, from {lead.stack[0]} and{' '}
									{lead.stack[1]} on the front and back, through {lead.stack.slice(5, 7).join(' and ')},{' '}
									to {lead.stack.slice(-4, -2).join(' and ')} for monitoring.
								</p>
							</div>
							<aside className={s.statBox} aria-label="By the numbers">
								<p className={s.statLabel}>By the numbers</p>
								<p className={s.stat}>
									<span className={s.statFigure}>~1M</span>
									<span className={s.statText}>users</span>
								</p>
								<p className={s.stat}>
									<span className={s.statFigure}>25k</span>
									<span className={s.statText}>generations per week</span>
								</p>
							</aside>
						</div>
						<footer className={s.articleFoot}>
							<StackList stack={lead.stack} />
							{lead.link && (
								<a className={s.visit} href={lead.link} target="_blank" rel="noopener noreferrer">
									Visit website <span aria-hidden="true">→</span>
									<span className={s.visitHost}>{hostname(lead.link)}</span>
								</a>
							)}
						</footer>
					</article>

					{features.map((project, i) => {
						const n = i + 2
						const copy = splitDescription(project.description)
						const flip = i % 2 === 1
						return (
							<article
								key={project.name}
								className={`${s.feature} ${flip ? s.featureFlip : ''}`}
								aria-labelledby={`feature-${n - 1}`}
							>
								<header className={s.featureHead}>
									<p className={s.kicker}>
										{DEPARTMENTS[n - 1]}{' '}
										<span className={s.kickerNum}>· No. {String(n).padStart(2, '0')}</span>
									</p>
									<h3 id={`feature-${n - 1}`} className={s.featureHeadline}>
										{project.name}
									</h3>
								</header>
								<figure className={s.featureFigure}>
									<Image
										src={project.thumbnail}
										alt={`Screenshot of the ${project.name} website`}
										width={800}
										height={600}
										sizes="(min-width: 1024px) 640px, 100vw"
									/>
									<figcaption>
										<span className={s.figNum}>Fig. {n}</span> The {project.name} interface.
									</figcaption>
								</figure>
								<div className={s.featureBody}>
									<p className={`${s.standfirst} ${s.featureStandfirst}`}>{copy.standfirst}</p>
									<div className={s.featureText}>
										{copy.body.map((p, j) => (
											<p key={j} className={j === 0 ? s.dropcap : undefined}>
												{p}
												{j === copy.body.length - 1 && (
													<span className={s.endmark} aria-hidden="true">
														■
													</span>
												)}
											</p>
										))}
									</div>
									<StackList stack={project.stack} />
									{project.link && (
										<a
											className={s.visit}
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Visit website <span aria-hidden="true">→</span>
										</a>
									)}
								</div>
							</article>
						)
					})}
				</section>

				<Folio page={21} side="right" />

				{/* ───────────── Correspondence ───────────── */}
				<section id="correspondence" className={s.correspondence} aria-labelledby="corr-title">
					<div className={s.corrMain}>
						<p className={s.kicker}>Correspondence</p>
						<h2 id="corr-title" className={s.corrHeadline}>
							Letters to <em>the Developer</em>
						</h2>
						<p className={s.corrLede}>
							{PROFILE.footerPitch[0]} {PROFILE.footerPitch[1]}
						</p>
						<dl className={s.addresses}>
							<div>
								<dt>By post, electronic</dt>
								{CONTACT.emails.map((email) => (
									<dd key={email}>
										<a href={`mailto:${email}`}>{email}</a>
									</dd>
								))}
							</div>
							<div>
								<dt>Elsewhere</dt>
								{CONTACT.links.map((l) => (
									<dd key={l.href}>
										<a href={l.href} target="_blank" rel="noopener noreferrer">
											{l.label === 'Github' ? 'GitHub' : l.label}
										</a>
									</dd>
								))}
							</div>
						</dl>
					</div>
					<aside className={s.colophon} aria-labelledby="colophon-title">
						<h2 id="colophon-title" className={s.colophonTitle}>
							Colophon
						</h2>
						<p>
							This issue is set in <em>Playfair Display</em>, <em>Source Serif 4</em> and{' '}
							<span className={s.smallcaps}>Libre Franklin</span>, printed on warm uncoated stock.
						</p>
						<p className={s.colophonLabel}>The developer works in</p>
						<ul className={s.techList}>
							{TECH_FOOTER.map((t) => (
								<li key={t}>{t}</li>
							))}
						</ul>
					</aside>
				</section>
			</main>

			<footer className={s.pageFoot}>
				<div className={s.pageFootInner}>
					<Link href="/styles" className={s.backLink}>
						<span aria-hidden="true">←</span> All styles
					</Link>
					<span className={s.pageFootMark} aria-hidden="true">
						{PROFILE.name.split(' ').map((w) => w[0]).join('')}
					</span>
					<a href="#cover" className={s.backLink}>
						Back to the cover <span aria-hidden="true">↑</span>
					</a>
				</div>
				<Folio page={24} side="left" />
			</footer>
		</div>
	)
}
