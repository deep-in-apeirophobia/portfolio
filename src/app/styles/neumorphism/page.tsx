import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { poppins } from './fonts'
import HeroDial from './HeroDial'
import ContrastSwitch from './ContrastSwitch'
import { ArrowIcon, GithubIcon, GridIcon, LayersIcon, LinkedinIcon, MailIcon, UpIcon, UserIcon } from './icons'
import s from './neumorphism.module.css'

export const metadata: Metadata = {
	title: 'Neumorphism · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio as soft UI: every surface extruded from, or pressed into, one pale grey material.',
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

const iconFor = (label: string) => (label.toLowerCase().includes('git') ? GithubIcon : LinkedinIcon)

export default function NeumorphismPage() {
	return (
		<div id="neu-page" data-edges="on" className={`${poppins.className} ${s.page}`}>
			<a href="#main" className={s.skip}>Skip to content</a>

			<header className={s.header}>
				<div className={s.shell}>
					<div className={s.headerRow}>
						<a href="#top" className={s.brand}>
							<span className={s.brandMark} aria-hidden="true">AH</span>
							<span className={s.brandText}>
								<span className={s.brandName}>{PROFILE.name}</span>
								<span className={s.brandSub}>Soft UI edition</span>
							</span>
						</a>
						<nav aria-label="Sections" className={s.nav}>
							<ul className={s.navPill}>
								<li><a href="#about"><UserIcon className={s.navIcon} />About</a></li>
								<li><a href="#work"><LayersIcon className={s.navIcon} />Work</a></li>
								<li><a href="#contact"><MailIcon className={s.navIcon} />Contact</a></li>
							</ul>
						</nav>
						<ContrastSwitch />
					</div>
				</div>
			</header>

			<main id="main" className={s.main}>
				<section id="top" aria-label="Introduction" className={`${s.shell} ${s.hero}`}>
					<HeroDial />
				</section>

				<section id="about" aria-labelledby="about-title" className={`${s.shell} ${s.section}`}>
					<div className={s.sectionHead}>
						<span className={s.sectionIcon} aria-hidden="true"><UserIcon /></span>
						<div>
							<p className={s.eyebrow}>01 · About</p>
							<h2 id="about-title" className={s.h2}>Creative, curious, product-minded</h2>
						</div>
					</div>

					<div className={`${s.card} ${s.aboutCard}`}>
						<div className={s.aboutPhoto}>
							<div className={s.bigWell}>
								<div className={s.bigRing}>
									<Image src={PROFILE.photo} alt={`${PROFILE.name}, smiling`} width={307} height={307} className={s.avatarImg} />
								</div>
							</div>
							<ul className={s.traits} aria-label="In short">
								<li>Creative</li>
								<li>Hardworking</li>
								<li>Team player</li>
							</ul>
						</div>
						<div className={s.aboutText}>
							{ABOUT.map((p) => (
								<p key={p.slice(0, 16)}>{p.replace(/\s+/g, ' ')}</p>
							))}
						</div>
					</div>
				</section>

				<section id="work" aria-labelledby="work-title" className={`${s.shell} ${s.section}`}>
					<div className={s.sectionHead}>
						<span className={s.sectionIcon} aria-hidden="true"><LayersIcon /></span>
						<div>
							<p className={s.eyebrow}>02 · Selected work</p>
							<h2 id="work-title" className={s.h2}>Things I’ve built</h2>
						</div>
					</div>

					<ol className={s.projects}>
						{PROJECTS.map((p, i) => (
							<li key={p.name} className={`${s.card} ${s.project}`} data-flip={i % 2 === 1}>
								<div className={s.shotWell}>
									<Image
										src={p.thumbnail}
										alt={`Screenshot of the ${p.name} website`}
										width={800}
										height={600}
										sizes="(max-width: 860px) 92vw, 540px"
										className={s.shot}
									/>
								</div>
								<div className={s.projectBody}>
									<div className={s.projectHead}>
										<span className={s.projectNum} aria-hidden="true">{pad(i + 1)}</span>
										<h3 className={s.h3}>{p.name}</h3>
									</div>
									<div className={s.projectDesc}>
										{paragraphs(p.description).map((para) => (
											<p key={para.slice(0, 24)}>{para}</p>
										))}
									</div>
									<ul className={s.chips} aria-label={`${p.name} tech stack`}>
										{p.stack.map((t) => <li key={t}>{t}</li>)}
									</ul>
									{p.link && (
										<a href={p.link} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnPrimary} ${s.visit}`}>
											Visit website
											<span className={s.btnIcon}><ArrowIcon /></span>
											<span className={s.srOnly}>(opens in a new tab)</span>
										</a>
									)}
								</div>
							</li>
						))}
					</ol>
				</section>

				<section id="contact" aria-labelledby="contact-title" className={`${s.shell} ${s.section}`}>
					<div className={s.sectionHead}>
						<span className={s.sectionIcon} aria-hidden="true"><MailIcon /></span>
						<div>
							<p className={s.eyebrow}>03 · Contact</p>
							<h2 id="contact-title" className={s.h2}>Let’s build something</h2>
						</div>
					</div>

					<div className={`${s.card} ${s.contactCard}`}>
						<div className={s.contactPitch}>
							{PROFILE.footerPitch.map((line) => <p key={line}>{line}</p>)}
						</div>

						<div className={s.contactControls}>
							<ul className={s.emailList} aria-label="Email">
								{CONTACT.emails.map((e) => (
									<li key={e}>
										<a href={`mailto:${e}`} className={s.emailBtn}>
											<span className={s.roundIcon}><MailIcon /></span>
											<span className={s.emailText}>{e}</span>
										</a>
									</li>
								))}
							</ul>
							<ul className={s.socials} aria-label="Profiles">
								{CONTACT.links.map((l) => {
									const Icon = iconFor(l.label)
									return (
										<li key={l.href}>
											<a href={l.href} target="_blank" rel="noopener noreferrer" className={s.socialBtn}>
												<span className={s.circleBtn}><Icon /></span>
												<span className={s.socialLabel}>{l.label}</span>
												<span className={s.srOnly}>(opens in a new tab)</span>
											</a>
										</li>
									)
								})}
								<li>
									<Link href="/styles" className={s.socialBtn}>
										<span className={s.circleBtn}><GridIcon /></span>
										<span className={s.socialLabel}>All styles</span>
									</Link>
								</li>
							</ul>
						</div>

						<div className={s.techWell}>
							<p className={s.techLabel}>Daily toolkit</p>
							<ul className={s.techList}>
								{TECH_FOOTER.map((t) => <li key={t}>{t}</li>)}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<footer className={`${s.shell} ${s.footer}`}>
				<p>© {PROFILE.name} · {PROFILE.role} · A neumorphism study</p>
				<a href="#top" className={s.circleBtn} aria-label="Back to top"><UpIcon /></a>
			</footer>
		</div>
	)
}
