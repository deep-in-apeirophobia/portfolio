import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { body, display } from './fonts'
import s from './clay.module.css'
import { ClayArrow, ClayCloud, ClayCode, ClayFilters, ClayHeart, ClaySquiggle, ClayStar } from './ornaments'

export const metadata: Metadata = {
	title: 'Claymorphism · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio redesigned in Claymorphism: soft, puffy, inflated 3D shapes in candy pastels.',
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

// Split on blank lines, re-join fragments broken mid-sentence, collapse whitespace.
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

const TONES = [s.lilac, s.peach, s.mint, s.sky, s.butter, s.pink]
const PROJECT_TONES = [s.lilac, s.peach, s.mint, s.sky, s.butter]

const NAV = [
	{ href: '#about', label: 'About', tone: s.peach },
	{ href: '#projects', label: 'Projects', tone: s.mint },
	{ href: '#contact', label: 'Contact', tone: s.sky },
]

const HERO_PILLS: Record<string, string> = {
	'VIBRANT,': s.peach,
	'FAST,': s.mint,
	'SCALABLE': s.sky,
}

// Traits lifted straight from the About copy.
const TRAITS = [
	{ label: 'Creative', tone: s.pink },
	{ label: 'Passionate', tone: s.peach },
	{ label: 'Hardworking', tone: s.butter },
	{ label: 'Team player', tone: s.mint },
	{ label: 'Always learning', tone: s.sky },
]

function SectionLabel({ children, tone }: { children: React.ReactNode, tone: string }) {
	return (
		<span className={cx(s.clay, s.sm, tone, s.display, 'inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-wide')}>
			<span className={cx(s.sphere, s.clayWhite, 'inline-block h-3 w-3')} aria-hidden="true" />
			{children}
		</span>
	)
}

function HeroScene() {
	return (
		<div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
			{/* soft floor */}
			<div className={cx(s.floor, 'absolute bottom-[4%] left-[12%] h-[12%] w-[76%]')} />

			{/* back ornaments */}
			<ClayCloud className={cx(s.floatSlow, 'absolute left-[-2%] top-[6%] w-[38%]')} />
			<div className={cx(s.sphere, s.mint, s.float, 'absolute right-[4%] top-[48%] h-[13%] w-[13%]')} />
			<div className={cx(s.sphere, s.butter, s.floatAlt, 'absolute left-[6%] top-[58%] h-[8%] w-[8%]')} />

			{/* laptop */}
			<div className="absolute left-[14%] top-[34%] w-[66%]">
				<div className={cx(s.laptopLid)}>
					<div className={cx(s.laptopScreen, 'aspect-[16/10] w-full p-[7%]')}>
						<div className="flex gap-2 pb-[6%]">
							<span className={cx(s.sphere, s.peach, 'h-3.5 w-3.5')} />
							<span className={cx(s.sphere, s.butter, 'h-3.5 w-3.5')} />
							<span className={cx(s.sphere, s.mint, 'h-3.5 w-3.5')} />
						</div>
						<div className="flex flex-col gap-3.5 sm:gap-5">
							<div className="flex gap-2"><span className={cx(s.codeBar, 'w-[22%] bg-[#ffb8da]')} /><span className={cx(s.codeBar, 'w-[40%] bg-[#aad8ff]')} /></div>
							<div className="flex gap-2 pl-[10%]"><span className={cx(s.codeBar, 'w-[30%] bg-[#a8ecd2]')} /><span className={cx(s.codeBar, 'w-[24%] bg-[#ffe68f]')} /></div>
							<div className="flex gap-2 pl-[10%]"><span className={cx(s.codeBar, 'w-[46%] bg-[#ffc2a8]')} /></div>
							<div className="flex gap-2 pl-[20%]"><span className={cx(s.codeBar, 'w-[26%] bg-[#aad8ff]')} /><span className={cx(s.codeBar, 'w-[16%] bg-[#ffb8da]')} /></div>
							<div className="flex gap-2 pl-[10%]"><span className={cx(s.codeBar, 'w-[20%] bg-[#ffe68f]')} /></div>
							<div className="flex gap-2"><span className={cx(s.codeBar, 'w-[18%] bg-[#ffb8da]')} /><span className={cx(s.codeBar, 'w-[20%] bg-[#fffaff]')} /></div>
						</div>
					</div>
				</div>
				<div className={s.laptopBase} />
			</div>

			{/* avatar donut */}
			<div className={cx(s.donut, s.float, 'absolute right-[2%] top-[4%] w-[40%]')}>
				<div className={cx(s.donutHole, 'aspect-square w-full')}>
					<Image src={PROFILE.photo} alt="" fill sizes="220px" className="object-cover" priority />
				</div>
			</div>

			{/* front ornaments */}
			<ClayStar className={cx(s.floatAlt, 'absolute left-[2%] top-[30%] w-[20%]')} style={{ '--rot': '-12deg' } as React.CSSProperties} />
			<ClayCode className={cx(s.float, 'absolute bottom-[2%] right-[0%] w-[26%]')} />
			<ClayHeart className={cx(s.floatSlow, 'absolute bottom-[6%] left-[2%] w-[15%]')} style={{ '--rot': '10deg' } as React.CSSProperties} />
			<ClaySquiggle className={cx(s.floatAlt, 'absolute left-[36%] top-[12%] w-[24%]')} />
		</div>
	)
}

export default function ClaymorphismPage() {
	return (
		<div className={cx(s.page, display.variable, body.variable, 'relative min-h-screen')}>
			<ClayFilters />
			<a href="#main" className={cx(s.clay, s.sm, s.butter, 'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:px-5 focus:py-2 focus:font-bold')}>
				Skip to content
			</a>

			{/* ================= NAV ================= */}
			<header className="relative z-20 px-4 pt-5 sm:px-8 sm:pt-7">
				<div className={cx(s.clay, s.clayWhite, 'mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-3 py-3 sm:px-4')} style={{ '--r': '999px' } as React.CSSProperties}>
					<a href="#top" className={cx(s.focus, 'group flex items-center gap-3 rounded-full')} aria-label="Atrin Hojjat, back to top">
						<span className={cx(s.sphere, s.lilac, s.display, 'grid h-11 w-11 place-items-center text-lg font-bold text-[var(--ink)] transition-transform duration-500 group-hover:rotate-[20deg]')}>A</span>
						<span className={cx(s.display, 'hidden text-lg font-semibold sm:inline')}>Atrin Hojjat</span>
					</a>
					<nav aria-label="Sections">
						<ul className="flex items-center gap-2 sm:gap-3">
							{NAV.map(n => (
								<li key={n.href}>
									<a href={n.href} className={cx(s.clay, s.sm, n.tone, s.bouncy, s.focus, s.display, 'inline-block px-3.5 py-2 text-sm font-semibold sm:px-5 sm:text-base')}>
										{n.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main id="main">
				{/* ================= HERO ================= */}
				<section id="top" aria-labelledby="hero-title" className="relative mx-auto grid max-w-[1180px] items-center gap-6 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pb-10 lg:pt-14">
					<div className="relative z-10">
						<p className={cx(s.clay, s.sm, s.clayWhite, s.display, 'inline-flex items-center gap-2.5 px-5 py-2.5 text-base font-semibold')}>
							<span className={cx(s.sphere, s.mint, s.squish, 'inline-block h-4 w-4')} aria-hidden="true" />
							{PROFILE.greeting}
						</p>
						<h1 id="hero-title" className={cx(s.display, 'mt-7 text-[2.6rem] font-bold leading-[1.18] tracking-[-0.01em] sm:text-6xl sm:leading-[1.15] lg:text-[4.1rem]')}>
							<span className="sr-only">{PROFILE.heroWords.join(' ')}</span>
							<span aria-hidden="true">
								{PROFILE.heroWords.map((w, i) => {
									const tone = HERO_PILLS[w]
									const word = w.replace(',', '')
									return (
										<span key={w}>
											{tone ? (
												<span className={cx(s.clay, tone, 'mx-0.5 inline-block px-4 pb-1 sm:px-5', i % 2 ? 'rotate-[1.5deg]' : '-rotate-[1.5deg]')} style={{ '--r': '999px', '--lift': '0.7' } as React.CSSProperties}>
													{word.charAt(0) + word.slice(1).toLowerCase()}
												</span>
											) : (
												<span>{w === 'with ME' ? 'with me' : w}</span>
											)}
											{w.endsWith(',') && ','}{' '}
										</span>
									)
								})}
							</span>
						</h1>
						<p className="mt-6 max-w-[34rem] text-lg font-semibold leading-relaxed text-[var(--ink-soft)] sm:text-xl">
							{PROFILE.heroTagline}.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<a href="#projects" className={cx(s.clay, s.lilac, s.bouncy, s.focus, s.display, 'inline-flex items-center gap-2 px-7 py-4 text-lg font-semibold')} style={{ '--r': '999px', '--lift': '0.8' } as React.CSSProperties}>
								See my work
								<ClayArrow className="h-5 w-5 rotate-90" />
							</a>
							<a href="#contact" className={cx(s.clay, s.clayWhite, s.bouncy, s.focus, s.display, 'inline-flex items-center gap-2 px-7 py-4 text-lg font-semibold')} style={{ '--r': '999px', '--lift': '0.8' } as React.CSSProperties}>
								Say hi
							</a>
						</div>
						<p className={cx(s.clay, s.sm, s.butter, s.display, 'mt-8 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold')}>
							<span aria-hidden="true">★</span> {PROFILE.name} · {PROFILE.role}
						</p>
					</div>
					<HeroScene />
				</section>

				{/* ================= ABOUT ================= */}
				<section id="about" aria-labelledby="about-title" className="relative mx-auto max-w-[1180px] scroll-mt-8 px-4 py-12 sm:px-8 lg:py-20">
					<ClayHeart className={cx(s.floatAlt, 'absolute -right-2 top-4 hidden w-24 md:block')} style={{ '--rot': '14deg' } as React.CSSProperties} />
					<SectionLabel tone={s.peach}>About me</SectionLabel>
					<div className={cx(s.clay, s.clayWhite, 'mt-8 grid gap-10 p-6 sm:p-10 md:grid-cols-[minmax(0,300px)_1fr] md:items-center lg:gap-14 lg:p-14')} style={{ '--r': '48px' } as React.CSSProperties}>
						<div className="relative mx-auto w-full max-w-[280px]">
							<div className={cx(s.donut, 'w-full')}>
								<div className={cx(s.donutHole, 'aspect-square w-full')}>
									<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill sizes="280px" className="object-cover" />
								</div>
							</div>
							<div className={cx(s.sphere, s.lilac, s.float, 'absolute -left-2 bottom-2 h-14 w-14')} aria-hidden="true" />
							<ClayStar className={cx(s.floatSlow, 'absolute -right-4 -top-4 w-20')} />
						</div>
						<div>
							<h2 id="about-title" className={cx(s.display, 'text-4xl font-bold leading-tight sm:text-5xl')}>
								Nice to meet you!
							</h2>
							<p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">{ABOUT[0]}</p>
							<p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">{ABOUT[1].replace(/\s+/g, ' ')}</p>
							<ul className="mt-7 flex flex-wrap gap-3" aria-label="Traits">
								{TRAITS.map(t => (
									<li key={t.label} className={cx(s.clay, s.sm, t.tone, s.bouncy, s.display, 'px-4 py-2 text-base font-semibold')}>{t.label}</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* ================= PROJECTS ================= */}
				<section id="projects" aria-labelledby="projects-title" className="relative mx-auto max-w-[1180px] scroll-mt-8 px-4 py-12 sm:px-8 lg:py-20">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<div>
							<SectionLabel tone={s.mint}>Selected projects</SectionLabel>
							<h2 id="projects-title" className={cx(s.display, 'mt-5 text-4xl font-bold leading-tight sm:text-5xl')}>
								Things I&apos;ve squished into shape
							</h2>
						</div>
						<ClaySquiggle className={cx(s.float, 'hidden w-44 md:block')} color="#c7b3ff" shadow="rgb(116 84 214 / 0.4)" />
					</div>

					<ol className="mt-12 flex flex-col gap-12 lg:gap-16">
						{PROJECTS.map((p, i) => {
							const tone = PROJECT_TONES[i % PROJECT_TONES.length]
							const flip = i % 2 === 1
							return (
								<li key={p.name} className={cx(s.clay, tone, s.cardHover, 'relative p-4 sm:p-7 lg:p-9')} style={{ '--r': '48px' } as React.CSSProperties}>
									<article className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-10">
										<div className={cx(s.well, flip && 'lg:order-2')}>
											<div className={cx(s.wellImg, 'aspect-[16/10]')}>
												<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} fill sizes="(min-width: 1024px) 540px, 92vw" className="object-cover object-top" />
											</div>
										</div>
										<div className="px-2 pb-2 sm:px-0">
											<div className="flex items-center gap-4">
												<span className={cx(s.sphere, s.clayWhite, s.display, 'grid h-14 w-14 shrink-0 place-items-center text-lg font-bold')} aria-hidden="true">
													{String(i + 1).padStart(2, '0')}
												</span>
												<h3 className={cx(s.display, 'text-3xl font-bold leading-tight sm:text-4xl')}>{p.name}</h3>
											</div>
											<div className="mt-5 space-y-3 text-base leading-relaxed sm:text-[1.05rem]">
												{paragraphs(p.description).map((para, j) => <p key={j}>{para}</p>)}
											</div>
											<ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} tech stack`}>
												{p.stack.map(t => (
													<li key={t} className={cx(s.clay, s.sm, s.clayWhite, 'px-3 py-1 text-sm font-bold')}>{t}</li>
												))}
											</ul>
											{p.link && (
												<a href={p.link} target="_blank" rel="noreferrer" className={cx(s.clay, s.clayWhite, s.bouncy, s.focus, s.display, 'mt-7 inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold')} style={{ '--r': '999px', '--lift': '0.7' } as React.CSSProperties}>
													Visit website
													<ClayArrow className="h-5 w-5" />
													<span className="sr-only">(opens {p.name} in a new tab)</span>
												</a>
											)}
										</div>
									</article>
								</li>
							)
						})}
					</ol>
				</section>

				{/* ================= CONTACT ================= */}
				<section id="contact" aria-labelledby="contact-title" className="relative mx-auto max-w-[1180px] scroll-mt-8 px-4 pb-10 pt-12 sm:px-8 lg:pt-20">
					<div className={cx(s.clay, s.pink, 'relative overflow-hidden px-6 py-12 text-center sm:px-12 lg:py-16')} style={{ '--r': '56px' } as React.CSSProperties}>
						<div className={cx(s.sphere, s.butter, s.float, 'absolute -left-6 -top-6 h-28 w-28 sm:h-36 sm:w-36')} aria-hidden="true" />
						<div className={cx(s.sphere, s.sky, s.floatSlow, 'absolute -bottom-10 -right-6 h-32 w-32 sm:h-44 sm:w-44')} aria-hidden="true" />
						<div className="relative">
							<SectionLabel tone={s.clayWhite}>Contact</SectionLabel>
							<h2 id="contact-title" className={cx(s.display, 'mx-auto mt-6 max-w-[20ch] text-4xl font-bold leading-tight sm:text-6xl')}>
								Let&apos;s mould something together
							</h2>
							<p className="mx-auto mt-5 max-w-[36rem] text-lg font-semibold leading-relaxed">
								{PROFILE.footerPitch.join(' ')}
							</p>
							<ul className="mt-9 flex flex-wrap justify-center gap-4" aria-label="Email">
								{CONTACT.emails.map((e, i) => (
									<li key={e}>
										<a href={`mailto:${e}`} className={cx(s.clay, i ? s.clayWhite : s.butter, s.bouncy, s.focus, s.display, 'inline-block break-all px-6 py-3.5 text-lg font-semibold')} style={{ '--r': '999px', '--lift': '0.7' } as React.CSSProperties}>
											{e}
										</a>
									</li>
								))}
							</ul>
							<ul className="mt-5 flex flex-wrap justify-center gap-4" aria-label="Social links">
								{CONTACT.links.map((l, i) => (
									<li key={l.href}>
										<a href={l.href} target="_blank" rel="noreferrer" className={cx(s.clay, i ? s.sky : s.lilac, s.bouncy, s.focus, s.display, 'inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold')} style={{ '--r': '999px', '--lift': '0.7' } as React.CSSProperties}>
											{l.label}
											<ClayArrow className="h-5 w-5" />
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<footer className="mx-auto max-w-[1180px] px-4 pb-12 pt-6 sm:px-8">
				<div className="flex flex-col items-center gap-6">
					<p className={cx(s.display, 'text-lg font-semibold text-[var(--ink-soft)]')}>Made with</p>
					<ul className="flex flex-wrap justify-center gap-3" aria-label="Technologies">
						{TECH_FOOTER.map((t, i) => (
							<li key={t} className={cx(s.clay, s.sm, TONES[i % TONES.length], s.bouncy, s.display, 'px-4 py-2 text-base font-semibold')}>{t}</li>
						))}
					</ul>
					<div className="mt-4 flex w-full flex-col items-center justify-between gap-5 border-t-2 border-dashed border-[#d9ccf5] pt-8 sm:flex-row">
						<p className="text-sm font-bold text-[var(--ink-soft)]">© {PROFILE.name} · Claymorphism edition</p>
						<Link href="/styles" className={cx(s.clay, s.clayWhite, s.bouncy, s.focus, s.display, 'inline-flex items-center gap-2 px-6 py-3 font-semibold')} style={{ '--r': '999px', '--lift': '0.6' } as React.CSSProperties}>
							<ClayArrow className="h-4 w-4 -rotate-[135deg]" />
							All styles
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
