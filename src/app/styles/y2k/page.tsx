import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { nunito, openSans } from './fonts'
import { Aurora, Bubbles, Hills, Icon, LensFlare, Orb, type OrbColor } from './Decor'
import s from './y2k.module.css'

export const metadata: Metadata = {
	title: 'Y2K / Frutiger Aero · Atrin Hojjat',
	description: 'Atrin Hojjat\'s portfolio, redesigned as a glossy 2007 Frutiger Aero product site.',
}

function paragraphs(text: string) {
	// Split on blank lines, but re-join fragments that were broken mid-sentence.
	return text
		.split(/\n\s*\n/)
		.map(p => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
		.reduce<string[]>((acc, p) => {
			const prev = acc[acc.length - 1]
			if (prev && !/[.!?]$/.test(prev)) acc[acc.length - 1] = `${prev} ${p}`
			else acc.push(p)
			return acc
		}, [])
}

const NAV = [
	{ href: '#top', label: 'Home', icon: 'home' as const },
	{ href: '#about', label: 'About', icon: 'user' as const },
	{ href: '#projects', label: 'Projects', icon: 'folder' as const },
	{ href: '#contact', label: 'Contact', icon: 'mail' as const },
]

const PROJECT_COLORS: OrbColor[] = ['blue', 'green', 'teal', 'orange', 'violet']

export default function Y2KPage() {
	const [first, last] = PROFILE.name.split(' ')
	const github = CONTACT.links.find(l => l.label.toLowerCase() === 'github')

	return (
		<div className={`${s.root} ${nunito.variable} ${openSans.variable}`} id="top">
			<a href="#main" className={s.skip}>Skip to content</a>

			{/* ---------- Glass toolbar ---------- */}
			<header className={s.bar}>
				<div className={s.barInner}>
					<a href="#top" className={s.brand} aria-label={`${PROFILE.name}, back to top`}>
						<span className={s.startOrb} aria-hidden="true"><span>A</span></span>
						<span className={s.brandText}>atrin<span>.dev</span></span>
					</a>
					<nav aria-label="Sections" className={s.nav}>
						<ul>
							{NAV.map(n => (
								<li key={n.href}>
									<a href={n.href} className={s.navPill}>
										<Icon name={n.icon} className={s.navIcon} />
										<span>{n.label}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
					<Link href="/styles" className={s.barAll}>All styles</Link>
				</div>
			</header>

			<main id="main">
				{/* ---------- Hero ---------- */}
				<section className={s.hero} aria-labelledby="hero-title">
					<div className={s.sky} aria-hidden="true" />
					<LensFlare />
					<Aurora />
					<Bubbles items={[
						{ x: '4%', y: '18%', size: 46 }, { x: '9%', y: '58%', size: 22 }, { x: '44%', y: '10%', size: 30 },
						{ x: '51%', y: '70%', size: 64 }, { x: '57%', y: '22%', size: 18 }, { x: '93%', y: '14%', size: 38 },
						{ x: '88%', y: '66%', size: 24 }, { x: '30%', y: '80%', size: 16 },
					]} />
					<Hills />

					<div className={s.heroInner}>
						<div className={s.heroCopy}>
							<p className={s.hello}>
								<span className={s.helloDot} aria-hidden="true" />
								{PROFILE.greeting}
							</p>
							<h1 id="hero-title" className={s.wordmark}>
								<span className={s.chrome} data-text={first}>{first}</span>{' '}
								<span className={s.chromeBlue} data-text={last}>{last}</span>
							</h1>
							<p className={s.role}>{PROFILE.role}</p>
							<p className={s.pitch}>
								Build <em>vibrant</em>, <em>fast</em> and <em>scalable</em> web&nbsp;apps with&nbsp;me
							</p>
							<p className={s.tagline}>{PROFILE.heroTagline}.</p>
							<div className={s.ctaRow}>
								<a href="#projects" className={`${s.gel} ${s.gelBlue} ${s.gelLg}`}>
									<span>See my projects</span>
									<Icon name="arrow" className={s.gelIcon} />
								</a>
								<a href="#contact" className={`${s.gel} ${s.gelGreen} ${s.gelLg}`}>
									<Icon name="mail" className={s.gelIcon} />
									<span>Get in touch</span>
								</a>
							</div>
						</div>

						{/* Vista "Welcome Center" window */}
						<div className={s.heroWin}>
							<div className={s.window} role="group" aria-labelledby="welcome-title">
								<div className={s.titlebar}>
									<span className={s.titleIcon} aria-hidden="true" />
									<span id="welcome-title" className={s.titleText}>Welcome Center</span>
									<span className={s.caption} aria-hidden="true">
										<span className={s.capBtn}>&#8211;</span>
										<span className={s.capBtn}>&#9633;</span>
										<span className={`${s.capBtn} ${s.capClose}`}>&#10005;</span>
									</span>
								</div>
								<div className={s.winBody}>
									<div className={s.welcomeHead}>
										<span className={s.avatarFrame}>
											<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width={96} height={96} className={s.avatar} priority />
										</span>
										<div>
											<p className={s.welcomeName}>{PROFILE.name}</p>
											<p className={s.welcomeMeta}>{PROFILE.role}</p>
											<p className={s.welcomeMeta}>{PROJECTS.length} featured projects · {TECH_FOOTER.length} core technologies</p>
										</div>
									</div>
									<p className={s.getStarted}>Get started with Atrin</p>
									<ul className={s.tasks}>
										<li><a href="#about"><Orb icon="user" color="blue" /><span><strong>Meet Atrin</strong><small>Who I am and how I work</small></span></a></li>
										<li><a href="#projects"><Orb icon="folder" color="orange" /><span><strong>Browse projects</strong><small>AI, health, e-commerce and more</small></span></a></li>
										<li><a href={`mailto:${CONTACT.emails[0]}`}><Orb icon="mail" color="green" /><span><strong>Send an e-mail</strong><small>{CONTACT.emails[0]}</small></span></a></li>
										{github && (
											<li><a href={github.href} target="_blank" rel="noreferrer"><Orb icon="code" color="violet" /><span><strong>Open GitHub</strong><small>See the code</small></span></a></li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ---------- About ---------- */}
				<section id="about" className={s.section} aria-labelledby="about-title">
					<Bubbles items={[{ x: '90%', y: '8%', size: 36 }, { x: '95%', y: '30%', size: 16 }, { x: '40%', y: '4%', size: 20 }]} />
					<div className={s.sectionHead}>
						<Orb icon="user" color="blue" size="lg" />
						<div>
							<p className={s.kicker}>Step 1 · Say hello</p>
							<h2 id="about-title" className={s.h2}>About Atrin</h2>
						</div>
					</div>
					<div className={`${s.glass} ${s.aboutPanel}`}>
						<figure className={s.aboutPhoto}>
							<span className={s.photoFrame}>
								<Image src={PROFILE.photo} alt={`${PROFILE.name}, smiling`} width={240} height={240} className={s.photo} />
							</span>
							<figcaption>{PROFILE.name}<br /><span>{PROFILE.role}</span></figcaption>
						</figure>
						<div className={s.aboutText}>
							{ABOUT.map((p, i) => <p key={i}>{p.replace(/\s+/g, ' ')}</p>)}
							<ul className={s.aboutFacts} aria-label="At a glance">
								<li><Orb icon="globe" color="teal" size="sm" /> Web &amp; mobile</li>
								<li><Orb icon="code" color="violet" size="sm" /> Front end to infrastructure</li>
								<li><Orb icon="user" color="green" size="sm" /> Loves working with teams</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ---------- Projects ---------- */}
				<section id="projects" className={`${s.section} ${s.projectsSection}`} aria-labelledby="projects-title">
					<Aurora className={s.midAurora} />
					<Aurora className={s.midAurora2} />
					<Bubbles items={[
						{ x: '-2%', y: '6%', size: 40 }, { x: '97%', y: '18%', size: 28 }, { x: '48%', y: '33%', size: 18 },
						{ x: '-1%', y: '52%', size: 24 }, { x: '96%', y: '70%', size: 44 }, { x: '50%', y: '88%', size: 22 },
					]} />
					<div className={s.sectionHead}>
						<Orb icon="folder" color="orange" size="lg" />
						<div>
							<p className={s.kicker}>Step 2 · Explore</p>
							<h2 id="projects-title" className={s.h2}>Featured projects</h2>
						</div>
					</div>

					<ol className={s.projectList}>
						{PROJECTS.map((p, i) => (
							<li key={p.name} className={`${s.project} ${i % 2 ? s.projectFlip : ''}`}>
								<div className={s.monitorWrap}>
									<div className={s.monitor}>
										<div className={s.screen}>
											<Image
												src={p.thumbnail}
												alt={`Screenshot of the ${p.name} website`}
												fill
												sizes="(max-width: 900px) 92vw, 620px"
												className={s.screenImg}
											/>
											<span className={s.screenGloss} aria-hidden="true" />
										</div>
										<span className={s.monitorLed} aria-hidden="true" />
									</div>
									<span className={s.monitorNeck} aria-hidden="true" />
									<span className={s.monitorFoot} aria-hidden="true" />
								</div>

								<div className={`${s.glass} ${s.projectBody}`}>
									<div className={s.projectTitleRow}>
										<span className={`${s.numOrb} ${s[`orb_${PROJECT_COLORS[i % PROJECT_COLORS.length]}`]}`} aria-hidden="true">{i + 1}</span>
										<h3 className={s.h3}>{p.name}</h3>
									</div>
									{paragraphs(p.description).map((para, j) => <p key={j} className={s.projectText}>{para}</p>)}
									<h4 className={s.stackLabel}>Built with</h4>
									<ul className={s.chips}>
										{p.stack.map(t => <li key={t} className={s.chip}>{t}</li>)}
									</ul>
									{p.link && (
										<a href={p.link} target="_blank" rel="noreferrer" className={`${s.gel} ${s.gelGreen}`}>
											<Icon name="globe" className={s.gelIcon} />
											<span>Visit website</span>
											<span className={s.srOnly}> for {p.name} (opens in a new tab)</span>
										</a>
									)}
								</div>
							</li>
						))}
					</ol>
				</section>
			</main>

			{/* ---------- Contact / footer ---------- */}
			<footer id="contact" className={s.footer} aria-labelledby="contact-title">
				<Aurora className={s.footerAurora} />
				<Bubbles items={[
					{ x: '6%', y: '12%', size: 34 }, { x: '18%', y: '46%', size: 16 }, { x: '82%', y: '20%', size: 52 },
					{ x: '92%', y: '52%', size: 20 }, { x: '70%', y: '8%', size: 14 },
				]} />
				<div className={s.footerInner}>
					<div className={s.sectionHead}>
						<Orb icon="mail" color="green" size="lg" />
						<div>
							<p className={s.kicker}>Step 3 · Connect</p>
							<h2 id="contact-title" className={s.h2}>Let&apos;s build something amazing</h2>
						</div>
					</div>

					<div className={`${s.glass} ${s.contactPanel}`}>
						<div className={s.contactPitch}>
							{PROFILE.footerPitch.map(line => <p key={line}>{line}</p>)}
						</div>
						<div className={s.contactGroup}>
							<h3 className={s.contactLabel}>E-mail</h3>
							<ul className={s.btnList}>
								{CONTACT.emails.map(e => (
									<li key={e}>
										<a href={`mailto:${e}`} className={`${s.gel} ${s.gelBlue}`}>
											<Icon name="mail" className={s.gelIcon} /><span>{e}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className={s.contactGroup}>
							<h3 className={s.contactLabel}>Elsewhere</h3>
							<ul className={s.btnList}>
								{CONTACT.links.map(l => (
									<li key={l.href}>
										<a href={l.href} target="_blank" rel="noreferrer" className={`${s.gel} ${s.gelSilver}`}>
											<Icon name="link" className={s.gelIcon} /><span>{l.label}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className={s.techStrip}>
						<h3 className={s.contactLabel}>Powered by</h3>
						<ul className={s.techList}>
							{TECH_FOOTER.map(t => <li key={t} className={s.techBubble}>{t}</li>)}
						</ul>
					</div>
				</div>

				<Hills className={s.footerHills} />
				<div className={s.ground}>
					<p>© {new Date().getFullYear()} {PROFILE.name} · Designed in the spirit of 2007</p>
					<Link href="/styles" className={`${s.gel} ${s.gelSilver} ${s.gelSm}`}>
						<Icon name="grid" className={s.gelIcon} /><span>All styles</span>
					</Link>
				</div>
			</footer>
		</div>
	)
}
