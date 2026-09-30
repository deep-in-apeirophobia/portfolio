import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { body, display, mono } from './fonts'
import s from './neo.module.css'

export const metadata: Metadata = {
	title: 'Neo-Brutalism · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio redesigned in 2020s Neo-Brutalism: thick black outlines, hard offset shadows and loud, friendly flat colour.',
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

const hostname = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const CARD_COLORS = [
	{ bar: 'bg-[#ffd23f]', chip: 'bg-[#ffd23f]', emoji: '🎨' },
	{ bar: 'bg-[#7ef0c1]', chip: 'bg-[#7ef0c1]', emoji: '🩺' },
	{ bar: 'bg-[#a5a6ff]', chip: 'bg-[#a5a6ff]', emoji: '🚓' },
	{ bar: 'bg-[#ff90e8]', chip: 'bg-[#ff90e8]', emoji: '🧁' },
	{ bar: 'bg-[#ff7a45]', chip: 'bg-[#ffb38f]', emoji: '🪵' },
]

const NAV = [
	{ href: '#about', label: 'About' },
	{ href: '#work', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
]

const btn = 'inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-[#111] font-bold'

function Marquee({ items, className, reverse }: { items: string[], className?: string, reverse?: boolean }) {
	const row = (hidden: boolean) => (
		<ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
			{items.map((t, i) => (
				<li key={`${t}-${i}`} className="flex items-center">
					<span className="px-5">{t}</span>
					<span aria-hidden className="text-[0.8em]">✦</span>
				</li>
			))}
		</ul>
	)
	return (
		<div className={cx('overflow-hidden border-y-[3px] border-[#111] py-3', className)}>
			<div className={cx(s.marquee, reverse && s.marqueeReverse)}>
				{row(false)}
				{row(true)}
			</div>
		</div>
	)
}

function SectionLabel({ n, children, color }: { n: string, children: React.ReactNode, color: string }) {
	return (
		<p className={cx(s.mono, s.shadow, 'inline-flex -rotate-2 items-center gap-2 rounded-full border-[3px] border-[#111] px-4 py-1 text-sm font-bold uppercase tracking-wider', color)}>
			<span className="grid h-6 w-6 place-items-center rounded-full bg-[#111] text-xs text-white">{n}</span>
			{children}
		</p>
	)
}

export default function NeoBrutalismPage() {
	return (
		<div className={cx(s.page, display.variable, body.variable, mono.variable, 'min-h-screen')}>
			<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border-[3px] focus:border-[#111] focus:bg-[#ffd23f] focus:px-4 focus:py-2 focus:font-bold">
				Skip to content
			</a>

			{/* Announcement strip */}
			<div className="border-b-[3px] border-[#111] bg-[#111] px-4 py-2 text-center text-sm font-medium text-white">
				<span className="mr-2 inline-block rounded-md bg-[#ffd23f] px-2 py-0.5 text-xs font-bold uppercase text-[#111]">New</span>
				5 shipped projects below, from AI logos to online clinics.{' '}
				<a href="#work" className="font-bold underline decoration-[#ff90e8] decoration-[3px] underline-offset-4">Take a look →</a>
			</div>

			{/* ================= HEADER ================= */}
			<header className="sticky top-0 z-40 border-b-[3px] border-[#111] bg-[#fffaf0]">
				<div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
					<a href="#top" className="flex items-center gap-3 rounded-xl" aria-label={`${PROFILE.name}, back to top`}>
						<span className={cx(s.display, s.shadow, 'grid h-11 w-11 -rotate-3 place-items-center rounded-xl border-[3px] border-[#111] bg-[#ff90e8] text-lg')}>A</span>
						<span className={cx(s.display, 'hidden text-lg sm:inline')}>atrin.dev</span>
					</a>
					<nav aria-label="Sections">
						<ul className="flex items-center gap-1 sm:gap-2">
							{NAV.map(n => (
								<li key={n.href}>
									<a href={n.href} className="rounded-lg border-[3px] border-transparent px-2 py-1.5 text-sm font-bold transition-colors hover:border-[#111] hover:bg-white sm:px-3 sm:text-base">
										{n.label}
									</a>
								</li>
							))}
							<li className="hidden sm:block">
								<a href="#contact" className={cx(btn, s.press, 'ml-2 bg-[#ffd23f] px-4 py-2')}>
									Hire me <span aria-hidden>→</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main id="main">
				{/* ================= HERO ================= */}
				<section id="top" aria-labelledby="hero-title" className={cx(s.grid, 'relative scroll-mt-24 overflow-hidden')}>
					<div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10 lg:pb-12 lg:pt-12">
						<div>
							<p className={cx(s.shadow, 'inline-flex -rotate-2 items-center gap-2 rounded-full border-[3px] border-[#111] bg-white px-4 py-1.5 font-bold')}>
								<span aria-hidden className={cx(s.wobble, 'inline-block')}>👋</span>
								{PROFILE.greeting}
								<span className="rounded-full border-2 border-[#111] bg-[#7ef0c1] px-2 text-xs uppercase">{PROFILE.role}</span>
							</p>

							<h1 id="hero-title" className={cx(s.display, 'mt-7 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.1rem]')}>
								Build{' '}
								<span className="inline-block -rotate-2 rounded-lg border-[3px] border-[#111] bg-[#ffd23f] px-2 leading-[1.05]">vibrant,</span>{' '}
								<span className="inline-block rotate-1 rounded-lg border-[3px] border-[#111] bg-[#7ef0c1] px-2 leading-[1.05]">fast</span>{' '}
								&amp;{' '}
								<span className="inline-block -rotate-1 rounded-lg border-[3px] border-[#111] bg-[#a5a6ff] px-2 leading-[1.05]">scalable</span>{' '}
								<span className="whitespace-nowrap">web apps</span> <span className={cx(s.underline, "whitespace-nowrap")}>with me.</span>
							</h1>

							<p className="mt-7 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
								{PROFILE.heroTagline}. From idea to launch, front to back.
							</p>

							<div className="mt-8 flex flex-wrap gap-4">
								<a href="#work" className={cx(btn, s.press, 'bg-[#ff90e8] px-6 py-4 text-lg')}>
									See my work <span aria-hidden>↓</span>
								</a>
								<a href={`mailto:${CONTACT.emails[0]}`} className={cx(btn, s.press, 'bg-white px-6 py-4 text-lg')}>
									<span aria-hidden>✉️</span> {CONTACT.emails[0]}
								</a>
							</div>

							<ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Highlights">
								<li className="flex items-center gap-2"><span aria-hidden className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#111] bg-[#7ef0c1] text-xs">✓</span>Front-end to Kubernetes</li>
								<li className="flex items-center gap-2"><span aria-hidden className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#111] bg-[#ffd23f] text-xs">✓</span>~1M users on Logo Diffusion</li>
								<li className="flex items-center gap-2"><span aria-hidden className="grid h-6 w-6 place-items-center rounded-full border-2 border-[#111] bg-[#ff90e8] text-xs">✓</span>5 projects shipped</li>
							</ul>
						</div>

						{/* Profile "app window" card */}
						<div className="relative mx-auto w-full max-w-[440px] lg:mr-0">
							<div aria-hidden className={cx(s.spin, 'absolute -right-3 -top-8 z-20 sm:-right-8')}>
								<svg width="104" height="104" viewBox="0 0 104 104">
									<path d="M52 2l9 17 18-8 1 20 20 3-11 16 11 16-20 3-1 20-18-8-9 17-9-17-18 8-1-20-20-3 11-16L4 34l20-3 1-20 18 8z" fill="#ffd23f" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
								</svg>
							</div>
							<p aria-hidden className={cx(s.display, 'absolute -right-3 -top-8 z-30 grid h-[104px] w-[104px] rotate-12 place-items-center text-center text-[17px] leading-tight sm:-right-8')}>
								SAY<br />HI!
							</p>

							<div aria-hidden className="absolute inset-0 -rotate-6 translate-x-[-14px] translate-y-3 rounded-2xl border-[3px] border-[#111] bg-[#ff90e8]" />
							<div aria-hidden className="absolute inset-0 -rotate-3 translate-x-[-6px] translate-y-1 rounded-2xl border-[3px] border-[#111] bg-[#7ef0c1]" />
							<div className={cx(s.shadowLg, 'relative z-10 rotate-1 overflow-hidden rounded-2xl border-[3px] border-[#111] bg-white')}>
								<div className="flex items-center gap-2 border-b-[3px] border-[#111] bg-[#a5a6ff] px-4 py-3">
									<span className="h-3.5 w-3.5 rounded-full border-2 border-[#111] bg-[#ff7a45]" />
									<span className="h-3.5 w-3.5 rounded-full border-2 border-[#111] bg-[#ffd23f]" />
									<span className="h-3.5 w-3.5 rounded-full border-2 border-[#111] bg-[#7ef0c1]" />
									<span className={cx(s.mono, 'ml-2 truncate text-xs font-bold')}>profile.tsx</span>
								</div>
								<div className="p-5 sm:p-6">
									<div className="flex items-center gap-4">
										<div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-[3px] border-[#111] bg-[#ffd23f]">
											<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill sizes="80px" className="object-cover" priority />
										</div>
										<div>
											<p className={cx(s.display, 'text-2xl leading-tight')}>{PROFILE.name}</p>
											<p className="font-medium">{PROFILE.role}</p>
										</div>
									</div>
									<p className={cx(s.mono, 'mt-5 text-xs font-bold uppercase tracking-wider')}>Favourite tools</p>
									<ul className="mt-2 flex flex-wrap gap-2">
										{TECH_FOOTER.map((t, i) => (
											<li key={t} className={cx('rounded-md border-2 border-[#111] px-2 py-0.5 text-sm font-bold', ['bg-[#ffd23f]', 'bg-[#7ef0c1]', 'bg-[#ff90e8]', 'bg-[#a5a6ff]'][i % 4])}>{t}</li>
										))}
									</ul>
									<a href="#contact" className={cx(btn, s.press, 'mt-6 w-full bg-[#111] px-4 py-3 text-white')}>
										Start a project <span aria-hidden>→</span>
									</a>
								</div>
							</div>

							<p aria-hidden className={cx(s.shadow, 'absolute -bottom-5 -left-3 z-20 -rotate-6 rounded-lg border-[3px] border-[#111] bg-[#ff7a45] px-3 py-1 font-bold sm:-left-8')}>
								⚡ full-stack
							</p>
						</div>
					</div>
				</section>

				<Marquee
					className={cx(s.display, 'bg-[#ffd23f] text-xl sm:text-2xl')}
					items={['Vibrant', 'Fast', 'Scalable', 'React', 'Django', 'FastAPI', 'Go', 'Kubernetes', 'Shipped with love']}
				/>

				{/* ================= ABOUT ================= */}
				<section id="about" aria-labelledby="about-title" className="scroll-mt-24 border-b-[3px] border-[#111] bg-[#fffaf0]">
					<div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
						<SectionLabel n="01" color="bg-[#7ef0c1]">About</SectionLabel>
						<h2 id="about-title" className={cx(s.display, 'mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl')}>
							A developer who likes <span className={s.underline}>people</span> as much as code.
						</h2>

						<div className="mt-12 grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-12">
							<figure className="relative mx-auto w-full max-w-[340px]">
								<div className={cx(s.shadowLg, '-rotate-2 overflow-hidden rounded-2xl border-[3px] border-[#111] bg-[#ff90e8] p-3')}>
									<div className="relative aspect-square overflow-hidden rounded-xl border-[3px] border-[#111]">
										<Image src={PROFILE.photo} alt={`${PROFILE.name} smiling`} fill sizes="320px" className="object-cover" />
									</div>
									<figcaption className={cx(s.display, 'mt-3 text-center text-lg')}>{PROFILE.name}</figcaption>
								</div>
								<span aria-hidden className={cx(s.shadow, 'absolute -right-2 top-6 rotate-12 rounded-full border-[3px] border-[#111] bg-[#ffd23f] px-3 py-1 text-sm font-bold')}>
									that&apos;s me! 😄
								</span>
							</figure>

							<div className="grid gap-6">
								{ABOUT.map((p, i) => (
									<div key={i} className={cx(s.shadow, 'rounded-2xl border-[3px] border-[#111] p-6 sm:p-8', i === 0 ? 'bg-white' : 'bg-[#a5a6ff]')}>
										<p className={cx(s.mono, 'mb-3 text-xs font-bold uppercase tracking-wider')}>
											{i === 0 ? '✏️ How I work' : '🧭 How I can help'}
										</p>
										<p className="text-lg leading-relaxed">{p.replace(/\s+/g, ' ')}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ================= WORK ================= */}
				<section id="work" aria-labelledby="work-title" className={cx(s.grid, 'scroll-mt-24 border-b-[3px] border-[#111] bg-[#fff3d6]')}>
					<div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
						<div className="flex flex-wrap items-end justify-between gap-6">
							<div>
								<SectionLabel n="02" color="bg-[#ffd23f]">Selected work</SectionLabel>
								<h2 id="work-title" className={cx(s.display, 'mt-6 text-4xl leading-[1.05] sm:text-5xl')}>
									Things I&apos;ve built <span aria-hidden>🛠️</span>
								</h2>
							</div>
							<p className={cx(s.mono, 'rounded-lg border-[3px] border-[#111] bg-white px-3 py-1 text-sm font-bold')}>
								{PROJECTS.length} projects · {PROJECTS.filter(p => p.link).length} live
							</p>
						</div>

						<ul className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
							{PROJECTS.map((p, i) => {
								const c = CARD_COLORS[i % CARD_COLORS.length]
								const featured = i === 0
								const paras = paragraphs(p.description)
								return (
									<li key={p.name} className={cx(featured && 'md:col-span-2')}>
										<article className={cx(s.lift, 'flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-[#111] bg-white', featured && 'lg:grid lg:grid-cols-[1.15fr_1fr]')}>
											<div className={cx('flex flex-col border-b-[3px] border-[#111]', featured && 'lg:border-b-0 lg:border-r-[3px]', c.bar)}>
												<div className="flex items-center gap-2 border-b-[3px] border-[#111] px-4 py-2.5">
													<span className="h-3 w-3 rounded-full border-2 border-[#111] bg-white" />
													<span className="h-3 w-3 rounded-full border-2 border-[#111] bg-white" />
													<span className="h-3 w-3 rounded-full border-2 border-[#111] bg-white" />
													<span className={cx(s.mono, 'ml-2 min-w-0 flex-1 truncate rounded-md border-2 border-[#111] bg-white px-2 text-xs font-bold')}>
														{p.link ? hostname(p.link) : `${p.name.toLowerCase().replace(/\s+/g, '-')}.app`}
													</span>
												</div>
												<div className="p-4 sm:p-5">
													<div className={cx('relative overflow-hidden rounded-xl border-[3px] border-[#111] bg-white', featured ? 'aspect-[16/10]' : 'aspect-video')}>
														<Image
															src={p.thumbnail}
															alt={`Screenshot of the ${p.name} website`}
															fill
															sizes={featured ? '(min-width: 1024px) 640px, 92vw' : '(min-width: 768px) 560px, 92vw'}
															className="object-cover object-top"
														/>
													</div>
												</div>
											</div>

											<div className="flex flex-1 flex-col p-6 sm:p-7">
												<div className="flex items-start justify-between gap-3">
													<h3 className={cx(s.display, 'text-2xl leading-tight sm:text-3xl')}>{p.name}</h3>
													<span aria-hidden className="grid h-11 w-11 shrink-0 rotate-6 place-items-center rounded-xl border-[3px] border-[#111] bg-[#fffaf0] text-xl">{c.emoji}</span>
												</div>
												{featured && (
													<p className={cx(s.mono, 'mt-2 inline-flex w-fit -rotate-1 rounded-md border-2 border-[#111] bg-[#ff90e8] px-2 text-xs font-bold uppercase')}>★ Featured</p>
												)}
												<div className="mt-4 space-y-3 leading-relaxed">
													{paras.map((t, j) => <p key={j}>{t}</p>)}
												</div>

												<h4 className="sr-only">Stack</h4>
												<ul className="mt-5 flex flex-wrap gap-1.5">
													{p.stack.map(t => (
														<li key={t} className={cx('rounded-md border-2 border-[#111] px-2 py-0.5 text-[13px] font-bold', c.chip)}>{t}</li>
													))}
												</ul>

												<div className="mt-auto pt-6">
													{p.link ? (
														<a href={p.link} target="_blank" rel="noreferrer" className={cx(btn, s.press, 'bg-[#111] px-5 py-3 text-white')}>
															Visit website <span aria-hidden>↗</span><span className="sr-only"> (opens in new tab)</span>
														</a>
													) : (
														<p className={cx(s.mono, 'inline-flex rounded-lg border-2 border-dashed border-[#111] px-3 py-2 text-xs font-bold uppercase')}>No public link</p>
													)}
												</div>
											</div>
										</article>
									</li>
								)
							})}
						</ul>
					</div>
				</section>

				<Marquee
					reverse
					className={cx(s.display, 'bg-[#ff90e8] text-xl sm:text-2xl')}
					items={["Let's build something", 'Say hi', 'Ideas welcome', "Let's build something", 'Say hi', 'Ideas welcome']}
				/>

				{/* ================= CONTACT ================= */}
				<section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-[#fffaf0]">
					<div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
						<div className={cx(s.shadowLg, s.dots, 'relative rounded-3xl border-[3px] border-[#111] bg-[#7ef0c1] p-6 sm:p-10 lg:p-14')}>
							<span aria-hidden className={cx(s.shadow, 'absolute -top-5 right-6 rotate-6 rounded-lg border-[3px] border-[#111] bg-[#ffd23f] px-3 py-1 font-bold sm:right-12')}>
								📬 inbox open
							</span>
							<SectionLabel n="03" color="bg-white">Contact</SectionLabel>
							<h2 id="contact-title" className={cx(s.display, 'mt-6 max-w-4xl text-4xl leading-[1.05] sm:text-6xl')}>
								Let&apos;s make an amazing app together.
							</h2>
							<div className="mt-5 max-w-2xl space-y-1 rounded-xl border-[3px] border-[#111] bg-white p-4 text-lg font-medium">
								{PROFILE.footerPitch.map(t => <p key={t}>{t}</p>)}
							</div>

							<div className="mt-10 grid gap-6 lg:grid-cols-2">
								<div>
									<h3 className={cx(s.mono, 'text-xs font-bold uppercase tracking-wider')}>Email me</h3>
									<ul className="mt-3 flex flex-col gap-3">
										{CONTACT.emails.map((e, i) => (
											<li key={e}>
												<a href={`mailto:${e}`} className={cx(btn, s.press, 'w-full justify-between break-all px-5 py-4 text-left text-lg sm:text-xl', i === 0 ? 'bg-[#ffd23f]' : 'bg-white')}>
													<span>{e}</span><span aria-hidden>✉️</span>
												</a>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className={cx(s.mono, 'text-xs font-bold uppercase tracking-wider')}>Find me online</h3>
									<ul className="mt-3 grid grid-cols-2 gap-3">
										{CONTACT.links.map((l, i) => (
											<li key={l.href}>
												<a href={l.href} target="_blank" rel="noreferrer" className={cx(btn, s.press, 'w-full justify-between px-5 py-4 text-lg sm:text-xl', i === 0 ? 'bg-[#a5a6ff]' : 'bg-[#ff90e8]')}>
													{l.label === 'Github' ? 'GitHub' : l.label} <span aria-hidden>↗</span>
													<span className="sr-only"> (opens in new tab)</span>
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* ================= FOOTER ================= */}
			<footer className="border-t-[3px] border-[#111] bg-[#111] text-white">
				<div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
					<div>
						<p className={cx(s.display, 'text-2xl')}>{PROFILE.name}</p>
						<p className="mt-1 text-white/80">{PROFILE.role} · built with</p>
						<ul className="mt-3 flex flex-wrap gap-2">
							{TECH_FOOTER.map(t => (
								<li key={t} className="rounded-md border-2 border-white px-2 py-0.5 text-sm font-bold">{t}</li>
							))}
						</ul>
					</div>
					<Link href="/styles" className={cx(btn, 'self-start border-white bg-[#ffd23f] px-6 py-3 text-lg text-[#111] shadow-[4px_4px_0_0_#fff] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#fff] lg:self-auto')}>
						<span aria-hidden>←</span> All styles
					</Link>
				</div>
				<p className={cx(s.mono, 'border-t-2 border-white/20 px-4 py-4 text-center text-xs text-white/70')}>
					Neo-Brutalism edition · thick lines, hard shadows, zero blur
				</p>
			</footer>
		</div>
	)
}
