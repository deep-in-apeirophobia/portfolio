import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import s from './dada.module.css'
import { Gear, RegMark, RoundStamp, Wheel } from './Decor'
import { fontVars } from './fonts'
import { Ransom, cx, torn } from './Ransom'
import TzaraBag from './TzaraBag'

export const metadata: Metadata = {
	title: 'Dada Collage · Atrin Hojjat',
	description: 'Atrin Hojjat’s portfolio cut up and pasted back together in the manner of Zurich and Berlin Dada, 1916–1924: ransom-note type, halftone cut-outs and deliberate nonsense.',
}

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

const NAV = [
	{ href: '#about', en: 'About', de: 'über mich', cls: cx(s.scrap, '-rotate-2'), font: s.fAbril },
	{ href: '#projects', en: 'Projects', de: 'Arbeiten', cls: 'bg-[#16130f] text-[#f4eddb] rotate-1', font: s.fAnton },
	{ href: '#contact', en: 'Contact', de: 'Kontakt', cls: cx(s.newsprint, '-rotate-1'), font: s.fBodoni },
]

// Stack chips: each one a label torn from a different packet.
const CHIP_LOOKS = [
	cx(s.fAnton, s.newsprint, 'uppercase tracking-wide'),
	cx(s.fElite, 'bg-[#f6ecc6]'),
	cx(s.fBodoni, 'bg-[#16130f] text-[#f4eddb] italic font-bold'),
	cx(s.fCourier, s.scrap, 'font-bold border border-[#16130f]'),
	cx(s.fPlayfair, s.scrap, 'italic font-black'),
	cx(s.fRubik, 'bg-transparent text-[#c8221a] text-[11px]'),
	cx(s.fOld, 'bg-[#fbf6e8] font-bold underline decoration-[#c8221a] decoration-2'),
]
const CHIP_ROT = ['-rotate-2', 'rotate-1', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-0']
const CUTS = [s.cut0, s.cut1, s.cut2, s.cut3]

const FAUX = 'Die Kunst ist tot. Es lebe die neue Maschinenkunst. Dada ne signifie rien. Man nehme eine Zeitung, man nehme eine Schere, man suche in dieser Zeitung einen Artikel aus von der Länge, die man seinem Gedicht zu geben beabsichtigt. Fümms bö wö tää zää Uu, pögiff, kwii Ee. Das Merz-Bild ist ein abstraktes Kunstwerk. Dada ist der Sinn der Welt. Priimiititii tisch tesch priimiititii tesch tusch. '

export default function DadaPage() {
	return (
		<div id="top" className={cx(s.page, fontVars, 'min-h-screen')}>
			<a href="#main" className={cx(s.fRubik, 'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#c8221a] focus:px-4 focus:py-2 focus:text-sm focus:text-[#f4eddb]')}>
				Skip to content
			</a>

			{/* ═════════ MASTHEAD + NAV ═════════ */}
			<header className="relative z-20">
				<div className={cx(s.fCourier, 'flex items-center justify-between gap-4 bg-[#16130f] px-4 py-1.5 text-[11px] uppercase tracking-[.2em] text-[#ece2c9] sm:px-8')}>
					<span>Blatt Nr. 1 · Zürich – Berlin – www</span>
					<span aria-hidden="true" className="hidden md:inline">☞ Dada ne signifie rien ☜</span>
					<span className="hidden sm:inline">Preis: 0 Mark</span>
				</div>
				<div className="mx-auto flex max-w-[1360px] flex-wrap items-end justify-between gap-x-6 gap-y-3 px-4 pb-2 pt-4 sm:px-8">
					<a href="#top" className="group flex items-baseline gap-2 text-[#16130f]" aria-label="Der Atrin, back to top">
						<span aria-hidden="true" className={cx(s.fFraktur, 'text-3xl sm:text-4xl')}>Der</span>
						<span aria-hidden="true" className={cx(s.fAbril, 'text-4xl leading-none tracking-tight sm:text-5xl')}>ATRIN</span>
						<span aria-hidden="true" className={cx(s.fRubik, 'ml-1 -rotate-6 bg-[#c8221a] px-1.5 text-[10px] text-[#f4eddb]')}>dada</span>
					</a>
					<nav aria-label="Sections">
						<ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
							{NAV.map((n, i) => (
								<li key={n.href}>
									<a href={n.href} className={cx(s.navItem, s.pasted, 'inline-flex items-baseline gap-1.5 px-3 py-1.5', n.cls, CUTS[i])}>
										<span aria-hidden="true" className="text-[#c8221a]">☞</span>
										<span className={cx(n.font, 'text-lg leading-none')}>{n.en}</span>
										<span className={cx(s.fElite, 'text-[11px] opacity-80')}>/{n.de}</span>
									</a>
								</li>
							))}
							<li>
								<Link href="/styles" className={cx(s.navItem, s.fCourier, 'inline-block rotate-2 border-2 border-dashed border-[#16130f] px-2.5 py-1 text-xs font-bold uppercase')}>
									All styles ↗
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div aria-hidden="true" className="mx-4 h-[5px] border-y-2 border-[#16130f] sm:mx-8" />
			</header>

			<main id="main">
				{/* ═════════ HERO ═════════ */}
				<section aria-labelledby="hero-name" className="relative mx-auto max-w-[1360px] px-4 pb-16 pt-6 sm:px-8 lg:pb-24">
					<div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
						<div className="relative z-10 lg:col-span-7">
							<div className="flex flex-wrap items-center gap-3">
								<p className={cx(s.fElite, s.pasted, s.cut1, '-rotate-2 bg-[#f6ecc6] px-3 py-1 text-lg')}>{PROFILE.greeting}</p>
								<span aria-hidden="true" className={cx(s.fBodoni, 'rotate-3 text-xl italic text-[#8a6d45]')}>da · da · da</span>
							</div>

							<h1 id="hero-name" className="mt-4 text-[clamp(3.1rem,10vw,6.9rem)] leading-[0.95] text-[#16130f]">
								<Ransom text={PROFILE.name.split(' ')[0].toUpperCase()} seed={11} className="block" />
								<Ransom text={PROFILE.name.split(' ')[1].toUpperCase()} seed={29} className="block pl-[0.6em]" />
							</h1>

							<p className={cx(s.fRubik, s.pasted, 'mt-3 inline-flex rotate-1 items-center gap-3 bg-[#16130f] px-4 py-2 text-[clamp(.9rem,1.7vw,1.35rem)] uppercase text-[#f4eddb]')}>
								<span aria-hidden="true" className="text-[#c8221a]">☞</span>
								{PROFILE.role}
							</p>

							<div className="mt-7">
								<TzaraBag words={PROFILE.heroWords} sentence="Build vibrant, fast and scalable web apps with me." />
							</div>

							<p
								className={cx(s.fElite, s.scrap, s.pasted, 'mt-9 max-w-[34rem] -rotate-1 px-5 py-4 text-[17px] leading-relaxed')}
								style={{ clipPath: torn(5, 5, 18) }}
							>
								<span aria-hidden="true" className="mr-1 text-[#c8221a]">¶</span>
								{PROFILE.heroTagline}.
							</p>
						</div>

						{/* the collage */}
						<div className="relative h-[430px] sm:h-[560px] lg:col-span-5 lg:h-[680px]">
							<div aria-hidden="true" className="absolute right-[4%] top-[6%] aspect-square w-[62%] rounded-full bg-[#c8221a]" />
							<div
								aria-hidden="true"
								className={cx(s.newsprint, s.pasted, 'absolute left-[0%] top-[2%] w-[48%] rotate-[-7deg] p-3')}
								style={{ clipPath: torn(3, 6, 10) }}
							>
								<p className={cx(s.fFraktur, 'text-xl leading-none')}>Berliner Tageblatt</p>
								<div className={cx(s.fauxText, 'mt-1 columns-2 border-t border-[#16130f] pt-1')}>{FAUX}</div>
							</div>
							<div
								aria-hidden="true"
								className={cx(s.halftone, s.pasted, 'absolute bottom-[10%] left-[-2%] aspect-[4/3] w-[58%] rotate-[-9deg]')}
								style={{ clipPath: torn(8, 8, 12) }}
							>
								<Image src={PROJECTS[0].thumbnail} alt="" fill sizes="(min-width:1024px) 22vw, 55vw" className="object-cover object-top" />
							</div>
							<figure className="absolute left-[22%] top-[14%] w-[58%] rotate-[4deg]">
								<div className={cx(s.halftone, s.halftoneCoarse, s.pasted, 'relative aspect-[4/5]')} style={{ clipPath: torn(21, 12, 10) }}>
									<Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill priority sizes="(min-width:1024px) 26vw, 60vw" className="object-cover" />
								</div>
								<figcaption className={cx(s.fCourier, 'mt-1 -rotate-2 bg-[#f4eddb] px-2 py-0.5 text-[11px] uppercase tracking-widest')}>Abb. A · der Ingenieur</figcaption>
							</figure>
							<RoundStamp id="dd-stamp-hero" className={cx(s.inkMask, 'absolute right-[0%] top-[52%] w-[30%] rotate-[-14deg] text-[#c8221a]')} />
							<Gear className="absolute bottom-[3%] right-[18%] w-[22%] text-[#16130f]" />
							<Wheel className="absolute bottom-[0%] left-[52%] w-[13%] text-[#16130f]" />
							<span aria-hidden="true" className={cx(s.fAnton, 'absolute right-[-2%] top-[0%] origin-top-right text-[clamp(3rem,7vw,6.5rem)] leading-none text-[#16130f] [writing-mode:vertical-rl]')}>DADA</span>
							<span aria-hidden="true" className="absolute left-[1%] top-[40%] z-10 rotate-[6deg] text-[#c8221a] text-[clamp(3rem,6vw,5.5rem)] leading-none">☛</span>
							<span aria-hidden="true" className={cx(s.fElite, 'absolute bottom-[0%] left-[0%] -rotate-3 bg-[#16130f] px-2 py-0.5 text-sm text-[#f4eddb]')}>fmsbw tözäu pggiv-..?mü</span>
							<RegMark className="absolute left-[40%] top-[0%] w-7 text-[#16130f]" />
							<RegMark className="absolute bottom-[18%] right-[2%] w-7 text-[#c8221a]" />
						</div>
					</div>
				</section>

				{/* placard from the 1920 Erste Internationale Dada-Messe */}
				<div aria-hidden="true" className="relative z-10 -mx-4 rotate-[-1.5deg] bg-[#16130f] py-2.5 text-[#ece2c9]">
					<p className={cx(s.fRubik, 'whitespace-nowrap text-center text-[clamp(.75rem,1.6vw,1.2rem)] uppercase tracking-wider')}>
						Die Kunst ist tot <span className="text-[#c8221a]">✶</span> es lebe die neue Maschinenkunst <span className="text-[#c8221a]">✶</span> da da da
					</p>
				</div>

				{/* ═════════ ABOUT ═════════ */}
				<section id="about" aria-labelledby="about-h" className="relative mx-auto max-w-[1360px] scroll-mt-6 px-4 py-20 sm:px-8 lg:py-28">
					<div className="flex flex-wrap items-end gap-x-5 gap-y-2">
						<span aria-hidden="true" className={cx(s.fAbril, 'text-[clamp(4rem,9vw,7.5rem)] leading-[.8] text-[#c8221a]')}>§1</span>
						<h2 id="about-h" className="text-[clamp(2.6rem,6vw,5rem)] leading-none">
							<Ransom text="ABOUT" seed={42} />
						</h2>
						<span className={cx(s.fFraktur, s.pasted, s.scrap, 'rotate-3 px-3 py-1 text-3xl')}>über mich</span>
					</div>

					<div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
						<div className="relative mx-auto w-full max-w-[380px] lg:col-span-4 lg:mx-0">
							<div className={cx(s.halftone, s.halftoneCoarse, s.pasted, 'relative aspect-square -rotate-3')} style={{ clipPath: torn(64, 9, 10) }}>
								<Image src={PROFILE.photo} alt={`${PROFILE.name}, smiling, head and shoulders`} fill sizes="380px" className="object-cover" />
							</div>
							<RoundStamp id="dd-stamp-about" top="MERZ · ATRIN · MERZ · ATRIN ·" center="✶" className={cx(s.inkMask, 'absolute -right-4 -top-6 w-28 rotate-12 text-[#c8221a]')} />
							{/* contact-sheet strip: the same face, re-cut three times (Hausmann-style repetition) */}
							<div aria-hidden="true" className="mt-6 flex rotate-2 gap-1 bg-[#16130f] p-1.5">
								{['object-[30%_20%]', 'object-center', 'object-[70%_60%]'].map((pos, i) => (
									<div key={pos} className={cx(s.halftone, 'relative aspect-square flex-1')}>
										<Image src={PROFILE.photo} alt="" fill sizes="120px" className={cx('scale-150 object-cover', pos)} />
										{i === 1 && <span className="absolute inset-0 z-10 bg-[#c8221a] mix-blend-screen" />}
									</div>
								))}
							</div>
							<p className={cx(s.fCourier, 'mt-2 text-[12px] uppercase tracking-widest text-[#4a3f30]')}>Abb. B · three cuts, one face</p>
						</div>

						<div className="relative lg:col-span-8">
							<div
								className={cx(s.scrap, s.pasted, 'relative -rotate-1 px-6 py-7 sm:px-10 sm:py-9')}
								style={{ clipPath: torn(71, 7, 20) }}
							>
								<p className={cx(s.fCourier, 'mb-3 border-b border-[#16130f] pb-1 text-[11px] uppercase tracking-[.25em]')}>Aus dem Leben · from life</p>
								<p className={cx(s.fOld, 'text-[18px] leading-[1.65] sm:text-[19px]')}>
									<span className={cx(s.fAbril, 'float-left mr-2 mt-1 text-[4.6rem] leading-[.8] text-[#c8221a]')} aria-hidden="true">{ABOUT[0][0]}</span>
									<span className="sr-only">{ABOUT[0][0]}</span>
									{ABOUT[0].slice(1)}
								</p>
							</div>
							<div className={cx(s.fAnton, 'relative z-10 my-[-10px] ml-auto w-fit rotate-3 bg-[#c8221a] px-3 py-1 text-xl uppercase tracking-wide text-[#f4eddb]')} aria-hidden="true">
								☞ weiter / continued
							</div>
							<div
								className={cx(s.newsprint, s.pasted, 'relative ml-0 rotate-[.8deg] px-6 py-7 sm:ml-16 sm:px-10 sm:py-9')}
								style={{ clipPath: torn(77, 7, 20) }}
							>
								<p className={cx(s.fOld, 'text-[18px] italic leading-[1.65] sm:text-[19px]')}>{ABOUT[1].replace(/\s+/g, ' ')}</p>
							</div>
						</div>
					</div>
				</section>

				{/* ═════════ PROJECTS ═════════ */}
				<section id="projects" aria-labelledby="projects-h" className={cx(s.newsprint, s.tornTop, 'relative scroll-mt-2')}>
					<div className="mx-auto max-w-[1360px] px-4 pb-24 pt-16 sm:px-8 lg:pt-20">
						<div className="flex flex-wrap items-end gap-x-5 gap-y-2">
							<span aria-hidden="true" className={cx(s.fAbril, 'text-[clamp(4rem,9vw,7.5rem)] leading-[.8] text-[#c8221a]')}>§2</span>
							<h2 id="projects-h" className="text-[clamp(2.4rem,6vw,5rem)] leading-none">
								<Ransom text="PROJECTS" seed={7} />
							</h2>
							<span className={cx(s.fFraktur, s.pasted, 'bg-[#16130f] px-3 py-1 text-3xl text-[#f4eddb] -rotate-2')}>Arbeiten</span>
						</div>
						<p className={cx(s.fElite, 'mt-4 max-w-xl text-[15px] text-[#3b3226]')}>
							Five works, cut from the screen and pasted onto paper. Nr. 1 to Nr. 5, in no particular order (as all things should be).
						</p>

						<ol className="mt-16 space-y-24 lg:space-y-32">
							{PROJECTS.map((p, i) => {
								const flip = i % 2 === 1
								const paras = paragraphs(p.description)
								return (
									<li key={p.name}>
										<article aria-labelledby={`proj-${i}`} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
											<figure className={cx('relative lg:col-span-6', flip && 'lg:order-2')}>
												<span aria-hidden="true" className={cx(s.fAbril, 'absolute -top-14 z-10 text-[clamp(6rem,12vw,10rem)] leading-none', flip ? '-right-2 text-[#16130f]' : '-left-3 text-[#c8221a]')}>
													{i + 1}
												</span>
												<div
													className={cx(s.halftone, s.pasted, 'relative aspect-[4/3]', flip ? 'rotate-[2.5deg]' : 'rotate-[-2deg]')}
													style={{ clipPath: torn(100 + i * 13, 9, 16) }}
												>
													<Image src={p.thumbnail} alt={`Screenshot of the ${p.name} website`} fill sizes="(min-width:1024px) 40vw, 92vw" className="object-cover object-top" />
												</div>
												<figcaption className={cx(s.fCourier, 'mt-3 flex items-center gap-2 text-[12px] uppercase tracking-widest text-[#3b3226]', flip && 'justify-end')}>
													<RegMark className="w-4 text-[#c8221a]" />
													Abb. {i + 1} · {p.name}
												</figcaption>
											</figure>

											<div className={cx('relative lg:col-span-6', flip && 'lg:order-1')}>
												<h3 id={`proj-${i}`} className="text-[clamp(2rem,4vw,3.4rem)] leading-tight">
													<Ransom text={p.name} seed={300 + i * 17} flip={0.25} />
												</h3>
												<div className={cx(s.pasted, 'mt-6', flip ? 'rotate-[.7deg]' : 'rotate-[-.6deg]')}>
													<div className={cx(s.scrap, 'px-6 py-6 sm:px-8')} style={{ clipPath: torn(200 + i * 7, 6, 18) }}>
														{paras.map((t, k) => (
															<p key={k} className={cx(s.fOld, 'text-[17px] leading-[1.65]', k > 0 && 'mt-3')}>{t}</p>
														))}
													</div>
												</div>
												<h4 className="sr-only">Stack</h4>
												<ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2.5" aria-label={`${p.name} tech stack`}>
													{p.stack.map((t, k) => (
														<li
															key={t}
															className={cx(CHIP_LOOKS[(k + i) % CHIP_LOOKS.length], CHIP_ROT[(k * 3 + i) % CHIP_ROT.length], CUTS[k % 4], 'px-2 py-1 text-[13px] leading-none')}
														>
															{t}
														</li>
													))}
												</ul>
												{p.link && (
													<a
														href={p.link}
														target="_blank"
														rel="noopener noreferrer"
														className={cx(s.stamp, s.visit, s.fRubik, 'mt-8 inline-flex -rotate-3 items-center gap-2 px-4 py-2.5 text-sm uppercase text-[#c8221a]')}
													>
														<span aria-hidden="true" className="text-lg">☞</span> Visit website
														<span className="sr-only">: {p.name} (opens in a new tab)</span>
													</a>
												)}
											</div>
										</article>
									</li>
								)
							})}
						</ol>
					</div>
				</section>
			</main>

			{/* ═════════ CONTACT / FOOTER ═════════ */}
			<footer id="contact" aria-labelledby="contact-h" className={cx(s.tornTop, 'relative scroll-mt-2 bg-[#16130f] text-[#ece2c9]')}>
				<div className="mx-auto max-w-[1360px] px-4 pb-10 pt-16 sm:px-8 lg:pt-24">
					<div className="flex flex-wrap items-end gap-x-5 gap-y-2">
						<span aria-hidden="true" className={cx(s.fAbril, 'text-[clamp(4rem,9vw,7.5rem)] leading-[.8] text-[#c8221a]')}>§3</span>
						<h2 id="contact-h" className="text-[clamp(2.6rem,7vw,6rem)] leading-none text-[#16130f]">
							<Ransom text="KONTAKT" seed={93} palette={[3, 4, 5, 6, 8]} />
						</h2>
						<span className={cx(s.fElite, 'rotate-2 text-xl text-[#ece2c9]')}>/ contact</span>
					</div>

					<div className="mt-12 grid gap-12 lg:grid-cols-12">
						<div className="lg:col-span-7">
							<p className={cx(s.fBodoni, 'text-[clamp(1.6rem,3.2vw,2.7rem)] font-bold italic leading-[1.15]')}>
								{PROFILE.footerPitch[0]}
							</p>
							<p className={cx(s.fElite, 'mt-4 text-lg text-[#d9cfb4]')}>{PROFILE.footerPitch[1]}</p>

							<h3 className={cx(s.fCourier, 'mt-10 text-[12px] uppercase tracking-[.3em] text-[#c9bd9d]')}>Post · write to</h3>
							<ul className="mt-3 flex flex-col items-start gap-3">
								{CONTACT.emails.map((e, i) => (
									<li key={e}>
										<a
											href={`mailto:${e}`}
											className={cx(s.fElite, s.scrap, s.visit, 'inline-block px-4 py-2 text-[clamp(1rem,2.4vw,1.5rem)] text-[#16130f]', i ? 'rotate-1' : '-rotate-1')}
											style={{ clipPath: torn(400 + i, 4, 12) }}
										>
											<span aria-hidden="true" className="mr-2 text-[#c8221a]">✉</span>{e}
										</a>
									</li>
								))}
							</ul>

							<h3 className={cx(s.fCourier, 'mt-10 text-[12px] uppercase tracking-[.3em] text-[#c9bd9d]')}>Elsewhere · anderswo</h3>
							<ul className="mt-3 flex flex-wrap gap-4">
								{CONTACT.links.map((l, i) => (
									<li key={l.href}>
										<a
											href={l.href}
											target="_blank"
											rel="noopener noreferrer"
											className={cx(s.stamp, s.visit, s.fRubik, 'inline-flex items-center gap-2 px-4 py-2.5 text-sm uppercase text-[#e2483e]', i ? 'rotate-3' : '-rotate-2')}
										>
											<span aria-hidden="true">☞</span> {l.label}
											<span className="sr-only"> (opens in a new tab)</span>
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="relative lg:col-span-5">
							<h3 className={cx(s.fCourier, 'text-[12px] uppercase tracking-[.3em] text-[#c9bd9d]')}>Werkzeuge · poster-poem of tools</h3>
							<ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
								{TECH_FOOTER.map((t, i) => (
									<li
										key={t}
										className={cx(
											[s.fAbril, s.fAnton, s.fElite, s.fRubik, s.fBodoni, s.fFraktur, s.fPlayfair, s.fCourier][i % 8],
											['bg-[#ece2c9] text-[#16130f]', 'text-[#ece2c9]', 'bg-[#c8221a] text-[#f4eddb]', 'border-2 border-[#ece2c9] text-[#ece2c9]'][i % 4],
											['text-4xl', 'text-3xl uppercase', 'text-xl', 'text-lg', 'text-5xl italic', 'text-4xl', 'text-2xl font-black italic', 'text-xl font-bold'][i % 8],
											CHIP_ROT[(i * 2) % CHIP_ROT.length],
											'px-2 py-0.5 leading-tight',
										)}
									>
										{t}
									</li>
								))}
							</ul>
							<Gear className="absolute -bottom-6 right-0 hidden w-24 text-[#c8221a] lg:block" />
							<p aria-hidden="true" className={cx(s.fOld, 'mt-10 max-w-sm text-[15px] italic text-[#a99d80]')}>
								„Fümms bö wö tää zää Uu, pögiff, kwii Ee.“ (K. Schwitters, Ursonate)
							</p>
						</div>
					</div>

					<div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t-2 border-dashed border-[#5a4f3e] pt-6">
						<Link href="/styles" className={cx(s.visit, s.fAbril, 'inline-flex -rotate-2 items-center gap-3 bg-[#ece2c9] px-5 py-2 text-3xl text-[#16130f]')}>
							<span aria-hidden="true" className="text-[#c8221a]">☞</span> All styles
						</Link>
						<p className={cx(s.fCourier, 'text-[12px] uppercase tracking-widest text-[#c9bd9d]')}>
							{PROFILE.name} · {PROFILE.role} · collage after Höch, Hausmann, Schwitters &amp; Tzara
						</p>
						<a href="#top" className={cx(s.fElite, s.inlineLink, 'text-sm text-[#ece2c9]')}>↑ back to the top</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
