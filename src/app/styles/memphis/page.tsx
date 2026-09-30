import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { body, display, script } from './fonts'
import s from './memphis.module.css'
import { Arc, Lightning, Ring, Spark, Squiggle, ZigzagLine } from './shapes'

export const metadata: Metadata = {
	title: 'Memphis Design · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio redesigned in the style of the 1980s Memphis Group: clashing colours, squiggles and joyful anti-taste patterns.',
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

// Split on blank lines, re-join fragments that were broken mid-sentence, collapse whitespace.
function paragraphs(text: string): string[] {
	const chunks = text.split(/\n\s*\n/).map(t => t.replace(/\s+/g, ' ').trim()).filter(Boolean)
	const out: string[] = []
	for (const c of chunks) {
		const prev = out[out.length - 1]
		if (prev && !/[.!?)]$/.test(prev)) out[out.length - 1] = `${prev} ${c}`
		else out.push(c)
	}
	return out
}

const CARD_BG = ['bg-[#ff5fa2]', 'bg-[#19c3b8]', 'bg-[#ffd426]', 'bg-[#b9a3ff]', 'bg-[#a6ecd0]']
const CHIP_BG = ['bg-[#ffd426]', 'bg-[#ff5fa2]', 'bg-[#19c3b8]', 'bg-white', 'bg-[#b9a3ff]', 'bg-[#a6ecd0]', 'bg-[#ffc7b0]']
const PATTERNS = [s.dots, s.grid, s.stripes, s.bacterio, s.dotsPink]
const TILTS = ['-rotate-[1.5deg]', 'rotate-[1.2deg]', '-rotate-[0.8deg]', 'rotate-[1.6deg]', '-rotate-[1.2deg]']

const NAV = [
	{ href: '#about', label: 'About', bg: 'bg-[#19c3b8]', tilt: '-rotate-3' },
	{ href: '#projects', label: 'Projects', bg: 'bg-[#ffd426]', tilt: 'rotate-2' },
	{ href: '#contact', label: 'Contact', bg: 'bg-[#ff5fa2]', tilt: '-rotate-1' },
]

const HERO_STICKERS: Record<string, string> = {
	'VIBRANT,': 'bg-[#ff5fa2] -rotate-3',
	'FAST,': 'bg-[#19c3b8] rotate-2',
	'SCALABLE': 'bg-[#ffd426] -rotate-2',
}

export default function MemphisPage() {
	return (
		<div className={cx(s.page, display.variable, script.variable, body.variable, 'relative min-h-screen')}>
			<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border-[3px] focus:border-black focus:bg-[#ffd426] focus:px-4 focus:py-2 focus:font-bold">
				Skip to content
			</a>

			{/* ================= HEADER / NAV ================= */}
			<header className={cx(s.terrazzo, 'relative z-20 border-b-[3px] border-black')}>
				<div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
					<a href="#top" className="group flex items-center gap-4" aria-label="Atrin Hojjat, back to top">
						<span className={cx(s.display, s.outline, s.hardSm, 'grid h-12 w-12 place-items-center rounded-full bg-[#2f4bff] text-lg text-white transition-transform group-hover:rotate-12')}>A</span>
						<span className={cx(s.display, 'hidden -rotate-2 rounded-md border-[3px] border-black bg-white px-2 py-0.5 text-sm sm:inline')}>Atrin&nbsp;H.</span>
					</a>
					<nav aria-label="Sections">
						<ul className="flex flex-wrap items-center gap-2 sm:gap-4">
							{NAV.map(n => (
								<li key={n.href}>
									<a href={n.href} className={cx(s.pill, n.bg, n.tilt, 'px-3 py-1 text-sm font-extrabold uppercase tracking-wide sm:px-5 sm:py-2')}>{n.label}</a>
								</li>
							))}
							<li>
								<Link href="/styles" className={cx(s.pill, 'rotate-2 bg-black px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-white sm:px-5 sm:py-2')}>
									All styles
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main id="main">
				{/* ================= HERO ================= */}
				<section id="top" aria-labelledby="hero-title" className={cx(s.terrazzo, 'relative overflow-hidden')}>
					{/* scattered background furniture */}
					<Squiggle className="pointer-events-none absolute -left-6 top-10 hidden w-40 rotate-[-18deg] lg:block" color="#ff5fa2" stroke={8} waves={3} />
					<Spark className={cx(s.spin, 'pointer-events-none absolute left-[46%] top-8 hidden w-10 lg:block')} />
					<div className={cx(s.dotsPink, s.outline, 'pointer-events-none absolute -bottom-10 left-[38%] hidden h-24 w-24 rounded-full lg:block')} aria-hidden="true" />

					<div className="relative mx-auto grid max-w-[1320px] gap-10 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-6 lg:pb-24 lg:pt-12">
						{/* ---- words ---- */}
						<div className="relative z-10">
							<p className={cx(s.script, s.outline, s.hardSm, 'inline-block -rotate-3 rounded-2xl bg-[#ff5fa2] px-4 py-1 text-2xl text-black sm:text-3xl')}>
								{PROFILE.greeting}
							</p>

							<h1 id="hero-title" className={cx(s.display, 'mt-6 text-[clamp(2.6rem,9.4vw,7.4rem)] uppercase')}>
								<span className="block">Atrin</span>
								<span
									className="block text-[#19c3b8]"
									style={{ WebkitTextStroke: '3px #111', textShadow: '6px 6px 0 #111' }}
								>
									Hojjat
								</span>
							</h1>

							<p className={cx(s.display, s.outline, s.hard, 'relative mt-6 inline-block rotate-[1.5deg] bg-[#ffd426] px-4 py-2 text-base uppercase sm:text-xl')}>
								{PROFILE.role}
							</p>

							<div className={cx(s.outline, s.hard, 'relative mt-10 max-w-[640px] -rotate-[0.6deg] rounded-[28px] bg-white p-5 sm:p-7')}>
								<span aria-hidden="true" className={cx(s.zigzag, 'absolute -top-[3px] left-8 right-8 h-3 border-x-[3px] border-black')} />
								<p className="text-[clamp(1.5rem,3.4vw,2.35rem)] font-extrabold leading-[1.35]">
									{PROFILE.heroWords.map((w, i) => (
										<span key={i}>
											{HERO_STICKERS[w] ? (
												<span className={cx(s.display, 'mx-0.5 inline-block rounded-md border-[3px] border-black px-2 py-0.5 text-[0.72em] leading-tight', HERO_STICKERS[w])}>
													{w}
												</span>
											) : (
												<span>{w}</span>
											)}{' '}
										</span>
									))}
								</p>
								<p className="mt-4 max-w-[52ch] text-lg font-medium leading-relaxed">{PROFILE.heroTagline}.</p>
								<div className="mt-6 flex flex-wrap gap-4">
									<a href="#projects" className={cx(s.btn, 'rounded-full bg-[#2f4bff] px-6 py-3 font-extrabold uppercase text-white')}>
										See the work <span aria-hidden="true">→</span>
									</a>
									<a href="#contact" className={cx(s.btn, 'rounded-full bg-[#ffd426] px-6 py-3 font-extrabold uppercase')}>
										Say hi!
									</a>
								</div>
							</div>
						</div>

						{/* ---- sculpture: a Peter Shire-ish totem of shapes ---- */}
						<div aria-hidden="true" className="relative mx-auto h-[340px] w-full max-w-[400px] sm:h-[520px] sm:max-w-[520px] lg:h-auto lg:min-h-[640px]">
							{/* big dotted sun */}
							<div className={cx(s.dots, s.outline, 'absolute right-[4%] top-[2%] h-[46%] w-[58%] rounded-full')} style={{ aspectRatio: '1' }} />
							{/* grid slab */}
							<div className={cx(s.grid, s.outline, s.hard, 'absolute left-[2%] top-[14%] h-[34%] w-[46%] -rotate-[10deg]')} />
							{/* pink triangle */}
							<div className="absolute left-[30%] top-[4%] h-[26%] w-[30%] rotate-[14deg]" style={{ ['--tri-fill' as string]: '#ff5fa2' }}>
								<div className={cx(s.triOutline, 'h-full w-full')} />
							</div>
							{/* striped column */}
							<div className={cx(s.stripes, s.outline, 'absolute bottom-[8%] left-[38%] h-[48%] w-[16%] rounded-t-full')} />
							{/* arc on top of column */}
							<Arc className="absolute bottom-[52%] left-[24%] w-[44%]" fill="#b9a3ff" />
							{/* blue ring */}
							<Ring className={cx(s.wobble, 'absolute bottom-[10%] right-[4%] w-[30%]')} color="#2f4bff" />
							{/* bacterio block */}
							<div className={cx(s.bacterio, s.outline, s.hard, 'absolute bottom-[4%] left-[2%] h-[30%] w-[34%] rotate-[6deg] rounded-[18px]')} />
							{/* lightning */}
							<Lightning className="absolute right-[28%] top-[40%] w-[14%] rotate-[12deg]" fill="#ff4a1c" />
							{/* squiggle */}
							<Squiggle className={cx(s.wiggle, 'absolute bottom-[40%] right-[-2%] w-[36%]')} color="#111" stroke={8} waves={4} />
							{/* base plinth */}
							<div className={cx(s.outline, 'absolute bottom-0 left-[20%] h-[9%] w-[56%] rounded-md bg-[#ffd426]')} />
							<div className={cx(s.outline, 'absolute bottom-[9%] left-[28%] h-[4%] w-[40%] rounded-t-md bg-[#ff5fa2]')} />
							{/* confetti */}
							<span className="absolute left-[12%] top-[56%] h-5 w-5 rotate-45 border-[3px] border-black bg-[#a6ecd0]" />
							<span className="absolute right-[10%] top-[4%] h-4 w-4 rounded-full bg-black" />
							<span className="absolute left-[64%] top-[60%] h-3 w-10 rotate-[-30deg] border-[3px] border-black bg-[#ffd426]" />
						</div>
					</div>
				</section>

				{/* ================= MARQUEE BAND ================= */}
				<div aria-hidden="true" className="relative z-10 -my-2 -rotate-[1.2deg] border-y-[3px] border-black bg-black py-3">
					<div className={cx(s.display, 'flex flex-wrap justify-center gap-x-6 gap-y-1 px-4 text-sm uppercase sm:text-lg')}>
						{TECH_FOOTER.map((t, i) => (
							<span key={t} className="flex items-center gap-6">
								<span style={{ color: ['#ff5fa2', '#19c3b8', '#ffd426', '#b9a3ff'][i % 4] }}>{t}</span>
								{i < TECH_FOOTER.length - 1 && <span className="text-white">✱</span>}
							</span>
						))}
					</div>
				</div>

				{/* ================= ABOUT ================= */}
				<section id="about" aria-labelledby="about-title" className="relative scroll-mt-4 overflow-hidden border-b-[3px] border-black bg-[#b9a3ff] py-20 sm:py-28">
					<div className={cx(s.dots, 'pointer-events-none absolute -right-16 top-10 h-64 w-64 rotate-12 opacity-90')} aria-hidden="true" />
					<ZigzagLine className="pointer-events-none absolute bottom-10 left-6 hidden w-56 lg:block" color="#111" peaks={7} />

					<div className="relative mx-auto max-w-[1320px] px-4 sm:px-8">
						<div className="flex flex-wrap items-end gap-x-6 gap-y-2">
							<h2 id="about-title" className={cx(s.display, 'text-[clamp(2.6rem,8vw,6rem)] uppercase')} style={{ textShadow: '5px 5px 0 #ffd426' }}>
								About
							</h2>
							<span className={cx(s.script, 'mb-3 -rotate-6 text-[clamp(1.8rem,4vw,3rem)] text-[#ff4a1c]')} style={{ WebkitTextStroke: '1.5px #111' }} aria-hidden="true">
								me, me, me!
							</span>
						</div>

						<div className="mt-12 grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
							{/* photo */}
							<figure className="relative mx-auto w-[260px] sm:w-[320px]">
								<div className="relative">
								<div className={cx(s.zigzag, s.outline, 'absolute -inset-5 rounded-full')} aria-hidden="true" />
								<div className={cx(s.bacterio, s.outline, 'absolute -bottom-8 -left-10 h-28 w-28 rotate-12')} aria-hidden="true" />
								<div className="absolute -right-6 -top-8 h-20 w-20 rotate-[20deg]" style={{ ['--tri-fill' as string]: '#19c3b8' }} aria-hidden="true">
									<div className={cx(s.triOutline, 'h-full w-full')} />
								</div>
								<div className={cx(s.outline, 'relative aspect-square overflow-hidden rounded-full bg-[#ff5fa2]')}>
									<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill sizes="320px" className="object-cover" priority={false} />
								</div>
								</div>
								<figcaption className={cx(s.display, s.outline, s.hardSm, 'relative mx-auto mt-10 w-fit rotate-[-3deg] bg-[#ffd426] px-4 py-1 text-sm uppercase')}>
									{PROFILE.name}
								</figcaption>
							</figure>

							{/* paragraphs on solid panels, overlapping and tilted */}
							<div className="relative space-y-[-10px]">
								{ABOUT.map((p, i) => (
									<div
										key={i}
										className={cx(
											s.outline, s.hard, s.cardTilt,
											'relative bg-white p-6 sm:p-8',
											i === 0 ? '-rotate-[1.2deg] rounded-[26px] lg:mr-16' : 'z-10 rotate-[1deg] rounded-[26px] lg:ml-16',
										)}
									>
										<span
											aria-hidden="true"
											className={cx(s.display, s.outline, 'absolute -top-5 grid h-11 w-11 place-items-center rounded-full text-lg', i === 0 ? '-left-3 bg-[#19c3b8]' : '-right-3 bg-[#ff5fa2]')}
										>
											{i + 1}
										</span>
										<p className="text-[1.05rem] font-medium leading-[1.75] sm:text-lg">{p}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ================= PROJECTS ================= */}
				<section id="projects" aria-labelledby="projects-title" className={cx(s.terrazzo, 'relative scroll-mt-4 overflow-hidden border-b-[3px] border-black py-20 sm:py-28')}>
					<div className="relative mx-auto max-w-[1320px] px-4 sm:px-8">
						<div className="relative mb-16 flex flex-wrap items-center gap-6">
							<h2 id="projects-title" className={cx(s.display, s.outline, s.hard, 'inline-block -rotate-2 bg-[#ff5fa2] px-5 py-3 text-[clamp(2.2rem,7vw,5.2rem)] uppercase')}>
								Projects
							</h2>
							<Squiggle className="w-40 sm:w-56" color="#2f4bff" stroke={9} waves={4} />
							<p className={cx(s.script, 'text-2xl sm:text-3xl')}>five of the good ones</p>
						</div>

						<ol className="space-y-24 sm:space-y-32">
							{PROJECTS.map((p, i) => {
								const flip = i % 2 === 1
								const paras = paragraphs(p.description)
								return (
									<li key={p.name} className={cx('relative grid items-center gap-10 lg:grid-cols-2 lg:gap-0')}>
										{/* image with offset pattern slab behind */}
										<div className={cx('relative mx-2 sm:mx-6', flip && 'lg:order-2')}>
											<div aria-hidden="true" className={cx(PATTERNS[i], s.outline, 'absolute inset-0 translate-x-4 translate-y-4 rounded-[22px] sm:translate-x-7 sm:translate-y-7', i % 2 ? 'rotate-[3deg]' : '-rotate-[3deg]')} />
											<div className={cx(s.outline, 'relative overflow-hidden rounded-[22px] bg-white', TILTS[i])}>
												<div className="flex items-center gap-2 border-b-[3px] border-black bg-white px-3 py-2" aria-hidden="true">
													<span className="h-3.5 w-3.5 rounded-full border-2 border-black bg-[#ff5fa2]" />
													<span className="h-3.5 w-3.5 rotate-45 border-2 border-black bg-[#ffd426]" />
													<span className="h-0 w-0 border-x-[8px] border-b-[13px] border-x-transparent border-b-[#19c3b8]" />
												</div>
												<div className="relative aspect-[16/10]">
													<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} fill sizes="(min-width: 1024px) 620px, 92vw" className="object-cover object-top" />
												</div>
											</div>
											<span aria-hidden="true" className={cx(s.display, s.outline, s.hardSm, 'absolute -top-7 grid h-16 w-16 place-items-center rounded-full bg-[#ffd426] text-xl sm:h-20 sm:w-20 sm:text-2xl', flip ? '-right-2' : '-left-2')}>
												{String(i + 1).padStart(2, '0')}
											</span>
										</div>

										{/* text card */}
										<article className={cx(s.outline, s.hard, 'relative z-10 rounded-[28px] bg-white p-6 sm:p-9', flip ? 'lg:order-1 lg:-mr-14 lg:rotate-[-1deg]' : 'lg:-ml-14 lg:rotate-[1deg]')}>
											<div aria-hidden="true" className={cx(CARD_BG[i], 'absolute inset-x-0 top-0 h-5 rounded-t-[25px] border-b-[3px] border-black')} />
											<h3 className={cx(s.display, 'mt-4 text-[clamp(1.5rem,3.2vw,2.3rem)] uppercase leading-tight')}>
												{p.name}
											</h3>
											<div className="mt-4 space-y-3 text-[1rem] leading-[1.7] sm:text-[1.05rem]">
												{paras.map((t, j) => <p key={j}>{t}</p>)}
											</div>
											<h4 className="sr-only">Stack</h4>
											<ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} tech stack`}>
												{p.stack.map((t, j) => (
													<li key={t} className={cx(s.chip, CHIP_BG[(j + i * 2) % CHIP_BG.length])}>{t}</li>
												))}
											</ul>
											{p.link && (
												<a href={p.link} target="_blank" rel="noopener noreferrer" className={cx(s.btn, 'mt-8 rounded-full bg-[#2f4bff] px-6 py-3 font-extrabold uppercase text-white')}>
													Visit website <span aria-hidden="true">↗</span>
													<span className="sr-only">(opens in a new tab)</span>
												</a>
											)}
										</article>
									</li>
								)
							})}
						</ol>
					</div>
				</section>

				{/* ================= CONTACT ================= */}
				<section id="contact" aria-labelledby="contact-title" className={cx(s.bacterioDark, 'relative scroll-mt-4 overflow-hidden py-20 sm:py-28')}>
					<div className="relative mx-auto max-w-[1100px] px-4 sm:px-8">
						<div className={cx(s.dots, s.outline, 'pointer-events-none absolute -left-4 -top-10 hidden h-40 w-40 rounded-full sm:block')} aria-hidden="true" />
						<Lightning className="pointer-events-none absolute -right-2 -top-12 hidden w-20 rotate-[16deg] sm:block" fill="#19c3b8" />

						<div className={cx(s.outline, 'relative -rotate-[0.8deg] rounded-[32px] bg-[#ffd426] p-6 shadow-[7px_7px_0_#ff5fa2] sm:shadow-[12px_12px_0_#ff5fa2] sm:p-12')}>
							<h2 id="contact-title" className={cx(s.display, 'text-[clamp(2.4rem,7vw,5rem)] uppercase')}>
								Let&rsquo;s talk!
							</h2>
							<div className="mt-4 max-w-[52ch] space-y-1 text-lg font-semibold leading-relaxed sm:text-xl">
								{PROFILE.footerPitch.map(l => <p key={l}>{l}</p>)}
							</div>

							<div className="mt-8 grid gap-8 md:grid-cols-2">
								<div>
									<h3 className={cx(s.display, 'text-sm uppercase')}>Write me</h3>
									<ul className="mt-3 flex flex-col items-start gap-3">
										{CONTACT.emails.map((e, i) => (
											<li key={e} className="max-w-full">
												<a href={`mailto:${e}`} className={cx(s.pill, i ? 'bg-[#19c3b8]' : 'bg-white', 'max-w-full break-all px-5 py-2 text-base font-bold sm:text-lg')}>
													<span aria-hidden="true">✉</span> {e}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className={cx(s.display, 'text-sm uppercase')}>Find me</h3>
									<ul className="mt-3 flex flex-wrap gap-3">
										{CONTACT.links.map((l, i) => (
											<li key={l.href}>
												<a href={l.href} target="_blank" rel="noopener noreferrer" className={cx(s.pill, i ? 'rotate-2 bg-[#ff5fa2]' : '-rotate-2 bg-[#b9a3ff]', 'px-5 py-2 text-lg font-extrabold uppercase')}>
													{l.label} <span aria-hidden="true">↗</span>
													<span className="sr-only">(opens in a new tab)</span>
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="mt-10 border-t-[3px] border-dashed border-black pt-6">
								<h3 className={cx(s.display, 'text-sm uppercase')}>Tools of the trade</h3>
								<ul className="mt-3 flex flex-wrap gap-2">
									{TECH_FOOTER.map((t, i) => (
										<li key={t} className={cx(s.chip, CHIP_BG[(i + 1) % CHIP_BG.length], 'text-sm')}>{t}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className={cx(s.stripesPink, 'border-t-[3px] border-black px-4 py-6')}>
				<div className={cx(s.outline, 'mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4')}>
					<p className="font-bold">
						© {PROFILE.name} · <span className={s.script}>Memphis edition</span>
					</p>
					<Link href="/styles" className={cx(s.pill, 'bg-[#ffd426] px-5 py-2 font-extrabold uppercase')}>
						<span aria-hidden="true">←</span> All styles
					</Link>
				</div>
			</footer>
		</div>
	)
}
