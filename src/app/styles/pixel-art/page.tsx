import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { pressStart, vt323 } from './fonts'
import Pixels from './Pixels'
import { Bricks, Ground } from './Ground'
import { BUSH, CHEST, CLOUD, HERO_SPRITE, ICONS, MOON, PICO, Q_BLOCK, BRICK_BLOCK, SAVE_CRYSTAL } from './sprites'
import s from './pixel.module.css'

export const metadata: Metadata = {
	title: 'Pixel Art · Atrin Hojjat',
	description: "Atrin Hojjat's portfolio as an 8-bit video game: title screen, status menu, stage select and save point.",
}

/**
 * Split the raw copy on newlines, trim indentation and collapse runs of whitespace.
 * A line that does not end a sentence is joined to the next one.
 */
function paragraphs(text: string) {
	const out: string[] = []
	let carry = false
	for (const line of text.split('\n').map(l => l.replace(/\s+/g, ' ').trim()).filter(Boolean)) {
		if (carry) out[out.length - 1] += ` ${line}`
		else out.push(line)
		carry = !/[.!?)]$/.test(line)
	}
	return out
}

// Deterministic starfield for the title screen (x%, y%, size in px, twinkles?).
const STARS: [number, number, number, boolean][] = [
	[4, 8, 4, false], [11, 22, 4, true], [18, 6, 8, false], [26, 30, 4, false], [33, 12, 4, true],
	[41, 4, 4, false], [47, 26, 4, false], [56, 9, 8, true], [63, 20, 4, false], [71, 5, 4, false],
	[78, 28, 4, true], [86, 14, 4, false], [93, 6, 8, false], [97, 24, 4, true], [7, 38, 4, false],
	[22, 46, 4, true], [38, 40, 4, false], [52, 44, 4, false], [67, 38, 4, true], [82, 44, 4, false],
	[91, 36, 4, false], [15, 56, 4, false], [60, 58, 4, false], [88, 60, 4, true],
]

const STAGE_COLORS = ['var(--R)', 'var(--O)', 'var(--E)', 'var(--I)', 'var(--B)']

const HERO_COLORS: Record<string, string> = {
	'VIBRANT,': s.wPink,
	'FAST,': s.wOrange,
	SCALABLE: s.wGreen,
}

const TRAITS = ['Creative', 'Passionate', 'Hardworking', 'Team player', 'Always learning']

export default function PixelArtPage() {
	return (
		<div className={`${s.root} ${pressStart.variable} ${vt323.variable}`} id="top">
			<a href="#main" className={s.skip}>Skip to content</a>

			{/* ───────────── HUD / in-page nav ───────────── */}
			<header className={s.hud}>
				<div className={s.hudInner}>
					<a href="#top" className={s.hudBrand} aria-label="Atrin Hojjat, back to title screen">
						<Pixels map={ICONS[0]} scale={2} />
						<span>ATRIN<span className={s.hideSm}> ×01</span></span>
					</a>
					<nav aria-label="Sections">
						<ul className={s.hudNav}>
							<li><a href="#about">Stats</a></li>
							<li><a href="#projects">Stages</a></li>
							<li><a href="#contact">Save</a></li>
							<li className={s.hideSm}><Link href="/styles">Exit</Link></li>
						</ul>
					</nav>
				</div>
			</header>

			<main id="main">
				{/* ───────────── Title screen ───────────── */}
				<section className={s.hero} aria-labelledby="hero-title">
					<div className={s.sky} aria-hidden>
						<div className={s.skyK} />
						<div className={`${s.dither} ${s.d25}`} style={{ '--a': 'var(--K)', '--b': 'var(--N)' } as React.CSSProperties} />
						<div className={`${s.dither} ${s.d50}`} style={{ '--a': 'var(--K)', '--b': 'var(--N)' } as React.CSSProperties} />
						<div className={`${s.dither} ${s.d75}`} style={{ '--a': 'var(--K)', '--b': 'var(--N)' } as React.CSSProperties} />
						<div className={s.skyN} />
						<div className={`${s.dither} ${s.d25}`} style={{ '--a': 'var(--N)', '--b': 'var(--P)' } as React.CSSProperties} />
						<div className={`${s.dither} ${s.d50}`} style={{ '--a': 'var(--N)', '--b': 'var(--P)' } as React.CSSProperties} />
						<div className={`${s.dither} ${s.d75}`} style={{ '--a': 'var(--N)', '--b': 'var(--P)' } as React.CSSProperties} />
						<div className={s.skyP} />
					</div>
					<div className={s.stars} aria-hidden>
						{STARS.map(([x, y, size, tw], i) => (
							<span
								key={i}
								className={tw ? s.twinkle : undefined}
								style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${(i % 4) * 0.5}s` }}
							/>
						))}
					</div>
					<Pixels map={MOON} scale={8} className={s.moon} />
					<Pixels map={CLOUD} scale={4} className={`${s.cloud} ${s.cloudA}`} colors={{ W: PICO.V, L: PICO.g }} />
					<Pixels map={CLOUD} scale={6} className={`${s.cloud} ${s.cloudB}`} colors={{ W: PICO.V, L: PICO.g }} />

					<div className={s.heroInner}>
						<p className={s.heroKicker}>Player 1 · {PROFILE.role}</p>
						<h1 id="hero-title" className={s.title}>
							<span>{PROFILE.name.split(' ')[0]}</span> <span>{PROFILE.name.split(' ')[1]}</span>
						</h1>

						<div className={`${s.window} ${s.heroBox}`}>
							<p className={s.heroMsg}>
								{PROFILE.heroWords.map((w, i) => (
									<span key={i} className={HERO_COLORS[w]}>{w}{' '}</span>
								))}
							</p>
							<p className={s.tagline}>{PROFILE.heroTagline}</p>
						</div>

						<ul className={s.titleMenu} aria-label="Title menu">
							<li><a href="#about" className={s.pressStart}>Press Start</a></li>
							<li><a href="#projects">Stage Select</a></li>
							<li><a href="#contact">Continue</a></li>
						</ul>
					</div>

					<div className={s.blocks} aria-hidden>
						<Pixels map={BRICK_BLOCK} scale={4} />
						<Pixels map={Q_BLOCK} scale={4} className={s.qblock} />
						<Pixels map={BRICK_BLOCK} scale={4} />
					</div>

					<div className={s.ground}>
						<Pixels map={HERO_SPRITE} scale={5} className={s.sprite} title="Pixel-art sprite of Atrin holding a laptop" />
						<Pixels map={BUSH} scale={4} className={s.bush} />
						<Pixels map={CHEST} scale={5} className={s.chest} />
						<Ground id="hero-ground" rows={3} className={s.groundSvg} />
					</div>
				</section>

				{/* ───────────── About: status screen ───────────── */}
				<section id="about" className={s.about} aria-labelledby="about-title">
					<div className={s.wrap}>
						<div className={s.secHead}>
							<p className={s.world}>World 1 · Status</p>
							<h2 id="about-title" className={s.h2}>About the player</h2>
						</div>

						<div className={s.aboutGrid}>
							<div className={`${s.window} ${s.statusWin}`}>
								<div className={s.portraitFrame}>
									<Image
										src={PROFILE.photo}
										alt={`Portrait of ${PROFILE.name}`}
										width={48}
										height={48}
										className={s.portrait}
									/>
								</div>
								<dl className={s.stats}>
									<div><dt>Name</dt><dd>{PROFILE.name}</dd></div>
									<div><dt>Class</dt><dd>{PROFILE.role}</dd></div>
								</dl>
								<p className={s.miniLabel}>Traits</p>
								<ul className={s.traits}>
									{TRAITS.map(t => (
										<li key={t}><Pixels map={ICONS[0]} scale={2} /> {t}</li>
									))}
								</ul>
								<p className={s.miniLabel}>Exp</p>
								<div className={s.expBar} aria-hidden><span /></div>
								<p className={s.expNext}>Next level: your product</p>
							</div>

							<div className={`${s.window} ${s.dialog}`}>
								<p className={s.nameTag}>{PROFILE.firstName}</p>
								<p className={s.greeting}>{PROFILE.greeting}</p>
								{ABOUT.map((p, i) => (
									<p key={i} className={s.dialogText}>{p.replace(/\s+/g, ' ')}</p>
								))}
								<span className={s.more} aria-hidden>▼</span>
							</div>
						</div>
					</div>
				</section>

				{/* ───────────── Projects: stage select ───────────── */}
				<section id="projects" className={s.projects} aria-labelledby="projects-title">
					<Pixels map={CLOUD} scale={6} className={`${s.cloud} ${s.cloudC}`} />
					<Pixels map={CLOUD} scale={4} className={`${s.cloud} ${s.cloudD}`} />
					<div className={s.wrap}>
						<div className={s.secHead}>
							<p className={`${s.world} ${s.worldDark}`}>World 2 · Stage Select</p>
							<h2 id="projects-title" className={s.h2}>Levels cleared</h2>
							<p className={s.secIntro}>Five shipped products. Pick a stage to see what was built and which items it took to clear it.</p>
						</div>

						<ol className={s.stageList}>
							{PROJECTS.map((p, i) => (
								<li key={p.name} className={s.stage} style={{ '--stage': STAGE_COLORS[i % STAGE_COLORS.length] } as React.CSSProperties}>
									<article className={s.card} aria-labelledby={`stage-${i}`}>
										<div className={s.cardBar}>
											<span>Stage 2-{i + 1}</span>
											<span className={s.cleared}><Pixels map={ICONS[4]} scale={2} /> Cleared</span>
										</div>
										<div className={s.cardBody}>
											<div className={s.screen}>
												<Image
													src={p.thumbnail}
													alt={`Screenshot of the ${p.name} website`}
													width={120}
													height={90}
													className={s.shot}
												/>
											</div>
											<div className={s.cardText}>
												<h3 id={`stage-${i}`} className={s.h3}>{p.name}</h3>
												{paragraphs(p.description).map((para, j) => (
													<p key={j} className={s.desc}>{para}</p>
												))}
												<p className={s.miniLabel}>Items collected · {p.stack.length}</p>
												<ul className={s.chips}>
													{p.stack.map((t, j) => (
														<li key={t} className={s.chip}>
															<Pixels map={ICONS[(j + i) % ICONS.length]} scale={2} />
															{t}
														</li>
													))}
												</ul>
												{p.link && (
													<a href={p.link} target="_blank" rel="noopener noreferrer" className={s.btn}>
														Visit website <span className={s.arrowR} aria-hidden />
														<span className={s.srOnly}> (opens {p.name} in a new tab)</span>
													</a>
												)}
											</div>
										</div>
									</article>
								</li>
							))}
						</ol>
					</div>
					<Bricks id="stage-floor" rows={2} className={s.floor} />
				</section>

				{/* ───────────── Contact: continue / save point ───────────── */}
				<section id="contact" className={s.contact} aria-labelledby="contact-title">
					<div className={s.wrap}>
						<div className={`${s.secHead} ${s.center}`}>
							<p className={s.world}>World 3 · Save Point</p>
							<h2 id="contact-title" className={`${s.h2} ${s.continue}`}>
								Continue?
								<span className={s.count} aria-hidden>
									<span className={s.countReel}>
										{[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(n => <span key={n}>{n}</span>)}
									</span>
								</span>
							</h2>
						</div>

						<div className={s.contactGrid}>
							<div className={`${s.window} ${s.saveWin}`}>
								<div className={s.saveHead}>
									<Pixels map={SAVE_CRYSTAL} scale={4} className={s.crystal} />
									<div>
										{PROFILE.footerPitch.map(l => <p key={l} className={s.dialogText}>{l}</p>)}
									</div>
								</div>
								<p className={s.miniLabel}>Select an option</p>
								<ul className={s.menu}>
									{CONTACT.emails.map(e => (
										<li key={e}><a href={`mailto:${e}`}><span className={s.menuKey}>Mail</span>{e}</a></li>
									))}
									{CONTACT.links.map(l => (
										<li key={l.href}>
											<a href={l.href} target="_blank" rel="noopener noreferrer">
												<span className={s.menuKey}>{l.label === 'Github' ? 'Code' : 'Work'}</span>{l.label === 'Github' ? 'GitHub' : l.label}
												<span className={s.srOnly}> (opens in a new tab)</span>
											</a>
										</li>
									))}
								</ul>
							</div>

							<div className={`${s.window} ${s.invWin}`}>
								<p className={s.miniLabel}>Inventory · Tech</p>
								<ul className={s.inventory}>
									{TECH_FOOTER.map((t, i) => (
										<li key={t}>
											<Pixels map={ICONS[i % ICONS.length]} scale={4} />
											<span>{t}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className={s.footer}>
				<div className={s.footerInner}>
					<Link href="/styles" className={`${s.btn} ${s.btnGrey}`}><span className={s.arrowL} aria-hidden /> All styles</Link>
					<p className={s.thanks}>Thank you for playing!</p>
					<a href="#top" className={s.toTop}>Back to title</a>
				</div>
				<Ground id="footer-ground" rows={2} className={s.groundSvg} />
			</footer>
		</div>
	)
}
