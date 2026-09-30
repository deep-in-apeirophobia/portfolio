import Image from 'next/image'
import Link from 'next/link'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { interTight } from './fonts'
import GridOverlay from './GridOverlay'

// Colour: white paper, black ink, one signal red. Nothing else.
const RED = 'text-[#e30613]'
const GRID = 'grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6'
const FOCUS = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]'

function paragraphs(text: string): string[] {
	return text
		.split(/\n\s*\n/)
		.map(p => p.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
		// A blank line in the source is only a real paragraph break if the sentence has ended.
		.reduce<string[]>((acc, p) => {
			const prev = acc[acc.length - 1]
			if (prev && !/[.!?]$/.test(prev)) acc[acc.length - 1] = `${prev} ${p}`
			else acc.push(p)
			return acc
		}, [])
}

const NAV = [
	{ n: '1', label: 'About', href: '#about' },
	{ n: '2', label: 'Work', href: '#work' },
	{ n: '3', label: 'Contact', href: '#contact' },
]

// Hero lines are placed on the grid, each starting on a different column (desktop only).
const HERO_LINES: { text: string, start: string, red?: boolean }[] = [
	{ text: 'Build', start: 'md:col-start-1' },
	{ text: 'vibrant, fast', start: 'md:col-start-3' },
	{ text: 'and scalable', start: 'md:col-start-1' },
	{ text: 'web apps', start: 'md:col-start-5' },
	{ text: 'with me.', start: 'md:col-start-5', red: true },
]

function SectionHead({ n, title, id, dark = false }: { n: string, title: string, id: string, dark?: boolean }) {
	return (
		<div className={`${GRID} border-t-2 ${dark ? 'border-white' : 'border-black'} pt-4`}>
			<p aria-hidden className={`col-span-1 text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.8] tracking-[-0.06em] ${RED} md:col-span-3`}>
				{n}
			</p>
			<h2 id={id} className="col-span-3 scroll-mt-24 self-end md:scroll-mt-44 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.85] tracking-[-0.045em] md:col-span-9 md:col-start-4">
				<span className="sr-only">{n}. </span>{title}
			</h2>
		</div>
	)
}

export default function SwissPage() {
	return (
		<div className={`${interTight.className} relative min-h-screen overflow-x-clip bg-white text-black antialiased selection:bg-[#e30613] selection:text-white`}>
			<a href="#main" className={`sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-black focus:px-3 focus:py-2 focus:text-white`}>
				Skip to content
			</a>

			{/* ——— Masthead: four information columns, no logo, no ornament ——— */}
			<header className="sticky top-0 z-50 bg-white px-4 md:px-8">
				<div className={`${GRID} border-b border-black py-3 text-[13px] font-medium leading-[1.25] md:text-[14px]`}>
					<p className="col-span-2 font-bold md:col-span-3">
						<a href="#top" className={FOCUS}>{PROFILE.name}</a>
					</p>
					<p className="hidden md:col-span-3 md:block">{PROFILE.role}</p>
					<nav aria-label="Sections" className="col-span-2 md:col-span-4">
						<ul className="flex justify-end gap-3 md:justify-start md:gap-6">
							{NAV.map(item => (
								<li key={item.href}>
									<a href={item.href} className={`group flex items-baseline gap-1 hover:text-[#e30613] ${FOCUS}`}>
										<span className={`tabular-nums ${RED}`}>{item.n}</span>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div className="hidden md:col-span-2 md:flex md:justify-end">
						<GridOverlay />
					</div>
				</div>
			</header>

			<main id="main" className="px-4 md:px-8">
				{/* ——— 0 Hero: a concert poster ——— */}
				<section id="top" aria-labelledby="hero-title" className="flex min-h-[calc(100svh-45px)] flex-col pb-6 pt-6 md:pt-8">
					<div className={`${GRID} text-[13px] leading-[1.25] md:text-[14px]`}>
						<p className="col-span-2 md:col-span-3">
							<span className="block text-black/55">Portfolio</span>
							Web development
						</p>
						<p className="col-span-2 md:col-span-3">
							<span className="block text-black/55">Set in</span>
							Inter Tight, 12-column grid
						</p>
						<p className="hidden md:col-span-3 md:block">
							<span className="block text-black/55">Style study</span>
							International Typographic Style
						</p>
					</div>

					<h1 id="hero-title" className="my-auto py-10 md:py-8">
						<span className="sr-only">{PROFILE.name}, {PROFILE.role}. </span>
						<span className={`${GRID} text-[clamp(3.6rem,16.5vw,6rem)] font-bold leading-[0.86] tracking-[-0.055em] md:text-[clamp(4rem,10.4vw,12rem)] md:leading-[0.87]`}>
							{HERO_LINES.map(line => (
								<span
									key={line.text}
									className={`col-span-4 ${line.start} md:col-end-13 md:whitespace-nowrap ${line.red ? RED : ''}`}
								>
									{line.text}
								</span>
							))}
						</span>
					</h1>

					<div className={`${GRID} gap-y-6 border-t-2 border-black pt-3 text-[15px] leading-[1.35] md:text-[16px]`}>
						<div className="col-span-2 md:col-span-3">
							<p className="text-[13px] text-black/55">Name</p>
							<p className="font-bold">{PROFILE.name}</p>
						</div>
						<div className="col-span-2 md:col-span-2 md:col-start-4">
							<p className="text-[13px] text-black/55">Role</p>
							<p className="font-bold">{PROFILE.role}</p>
						</div>
						<p className="col-span-4 max-w-[34ch] md:col-span-3 md:col-start-7">
							{PROFILE.heroTagline}.
						</p>
						<p className="col-span-4 md:col-span-3 md:col-start-10 md:text-right">
							<a href="#about" className={`inline-flex items-baseline gap-2 font-bold hover:text-[#e30613] ${FOCUS}`}>
								Scroll to 1 About <span aria-hidden>↓</span>
							</a>
						</p>
					</div>
				</section>

				{/* ——— 1 About ——— */}
				<section aria-labelledby="about" className="pt-24 md:pt-40">
					<SectionHead n="1" title="About" id="about" />
					<div className={`${GRID} mt-12 gap-y-10 md:mt-20`}>
						<figure className="col-span-2 md:col-span-3">
							<Image
								src={PROFILE.photo}
								alt={`Portrait of ${PROFILE.name}`}
								width={307}
								height={307}
								className="aspect-square w-full object-cover grayscale contrast-[1.15]"
							/>
							<figcaption className="mt-2 text-[12px] leading-[1.3] text-black/60">
								Fig. 1 &nbsp;{PROFILE.name}, {PROFILE.role.toLowerCase()}
							</figcaption>
						</figure>
						<div className="col-span-4 md:col-span-8 md:col-start-5">
							<p className="text-[clamp(1.4rem,2.4vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.02em]">
								{ABOUT[0]}
							</p>
						</div>
						<p className="col-span-4 text-[16px] leading-[1.5] md:col-span-4 md:col-start-5 md:text-[17px]">
							{ABOUT[1].replace(/\s+/g, ' ')}
						</p>
						<dl className="col-span-4 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-black pt-3 text-[14px] leading-[1.3] md:col-span-3 md:col-start-10 md:grid-cols-1">
							<div>
								<dt className="text-black/55">Discipline</dt>
								<dd className="font-bold">Front end + back end</dd>
							</div>
							<div>
								<dt className="text-black/55">Selected work</dt>
								<dd className="font-bold tabular-nums">{PROJECTS.length} projects</dd>
							</div>
						</dl>
					</div>
				</section>

				{/* ——— 2 Work ——— */}
				<section aria-labelledby="work" className="pt-24 md:pt-40">
					<SectionHead n="2" title="Selected work" id="work" />
					<ol className="mt-12 md:mt-20">
						{PROJECTS.map((project, i) => {
							const flip = i % 2 === 1
							const body = paragraphs(project.description)
							return (
								<li key={project.name} className={`${GRID} gap-y-6 border-t border-black pb-16 pt-4 md:pb-28`}>
									<p className={`col-span-1 text-[15px] font-bold tabular-nums ${RED} md:col-span-1`}>
										2.{i + 1}
									</p>
									<h3 className="col-span-3 text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.04em] md:col-span-4">
										{project.name}
									</h3>

									<figure className={`col-span-4 md:row-span-3 md:col-span-7 ${flip ? 'md:col-start-1 md:row-start-2' : 'md:col-start-6 md:row-start-1'}`}>
										<div className="group relative overflow-hidden bg-black">
											<Image
												src={project.thumbnail}
												alt={`Screenshot of the ${project.name} website`}
												width={2560}
												height={1496}
												sizes="(min-width: 768px) 58vw, 100vw"
												className="aspect-[16/10] w-full object-cover object-top grayscale contrast-[1.1] transition-[filter] duration-500 group-hover:grayscale-0 motion-reduce:transition-none"
											/>
										</div>
										<figcaption className="mt-2 text-[12px] leading-[1.3] text-black/60">
											Fig. 2.{i + 1} &nbsp;{project.name}, home page
										</figcaption>
									</figure>

									<div className={`col-span-4 space-y-4 text-[15px] leading-[1.5] md:col-span-4 md:text-[16px] ${flip ? 'md:col-start-9 md:row-start-2' : 'md:col-start-2 md:row-start-2'}`}>
										{body.map((p, j) => <p key={j} className="max-w-[46ch]">{p}</p>)}
										{project.link && (
											<p className="pt-2">
												<a
													href={project.link}
													target="_blank"
													rel="noreferrer"
													className={`inline-flex items-baseline gap-2 border-b-2 border-[#e30613] pb-0.5 font-bold ${RED} hover:bg-[#e30613] hover:text-white ${FOCUS}`}
												>
													Visit website <span aria-hidden>→</span>
													<span className="sr-only">(opens {project.name} in a new tab)</span>
												</a>
											</p>
										)}
									</div>

									<div className={`col-span-4 md:col-span-4 ${flip ? 'md:col-start-9 md:row-start-3' : 'md:col-start-2 md:row-start-3'}`}>
										<p className="border-t border-black pt-2 text-[12px] font-medium uppercase tracking-[0.06em] text-black/60">Stack</p>
										<ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${project.name} technology stack`}>
											{project.stack.map(tech => (
												<li key={tech} className="border border-black px-2 py-[3px] text-[12px] font-medium leading-[1.2]">
													{tech}
												</li>
											))}
										</ul>
									</div>
								</li>
							)
						})}
					</ol>
				</section>
			</main>

			{/* ——— 3 Contact: the black field ——— */}
			<footer aria-labelledby="contact" className="bg-black px-4 pb-8 pt-8 text-white md:px-8 md:pt-10">
				<SectionHead n="3" title="Contact" id="contact" dark />

				<div className={`${GRID} mt-12 gap-y-10 md:mt-20`}>
					<div className="col-span-4 text-[17px] leading-[1.4] md:col-span-3">
						{PROFILE.footerPitch.map(line => <p key={line}>{line}</p>)}
					</div>
					<div className="col-span-4 md:col-span-9 md:col-start-4">
						<p className="text-[13px] text-white/60">Email</p>
						<ul className="mt-2 space-y-1">
							{CONTACT.emails.map(email => (
								<li key={email}>
									<a
										href={`mailto:${email}`}
										className={`break-all text-[clamp(1.6rem,5.2vw,4.75rem)] font-bold leading-[1] tracking-[-0.045em] hover:text-[#ff2a36] ${FOCUS}`}
									>
										{email}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className={`${GRID} mt-16 gap-y-8 border-t border-white/40 pt-4 text-[14px] leading-[1.4] md:mt-28`}>
					<div className="col-span-2 md:col-span-3 md:col-start-4">
						<p className="text-white/60">Elsewhere</p>
						<ul className="mt-1">
							{CONTACT.links.map(link => (
								<li key={link.href}>
									<a href={link.href} target="_blank" rel="noreferrer" className={`font-bold hover:text-[#ff2a36] ${FOCUS}`}>
										{link.label} <span aria-hidden>↗</span>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="col-span-2 md:col-span-3">
						<p className="text-white/60">Works with</p>
						<ul className="mt-1 columns-2 gap-x-4">
							{TECH_FOOTER.map(t => <li key={t}>{t}</li>)}
						</ul>
					</div>
					<div className="col-span-4 md:col-span-3 md:col-start-10">
						<p className="text-white/60">This page</p>
						<p>Swiss / International Typographic Style. Set in Inter Tight on a 12-column grid.</p>
						<Link href="/styles" className={`mt-3 inline-flex items-baseline gap-2 font-bold text-[#ff2a36] hover:text-white ${FOCUS}`}>
							<span aria-hidden>←</span> All styles
						</Link>
					</div>
				</div>

				<p aria-hidden className="mt-16 select-none text-[clamp(3.6rem,17.5vw,17rem)] font-bold leading-[0.78] tracking-[-0.065em] md:mt-24">
					Atrin<span className="text-[#e30613]">.</span>
				</p>
			</footer>
		</div>
	)
}
