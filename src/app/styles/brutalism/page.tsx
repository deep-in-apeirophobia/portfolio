import type { Metadata } from 'next'
import Image from 'next/image'
import fs from 'node:fs'
import path from 'node:path'
import { ABOUT, CONTACT, PROFILE, PROJECTS, TECH_FOOTER } from '@/content/portfolio'
import { arimo, cousine, tinos } from './fonts'
import { XrayToggle } from './XrayToggle'
import styles from './brutalism.module.css'

export const metadata: Metadata = {
	title: 'Brutalism · Atrin Hojjat',
	description: 'Atrin Hojjat, full-stack developer. Portfolio redesigned as a raw, brutalist web page.',
}

const ROOT_ID = 'bru-root'

/* ---------- honest materials: real file sizes & dimensions, read at render time ---------- */

type FileInfo = { name: string, size: string, dims: string }

function fileInfo(publicPath: string): FileInfo {
	const name = publicPath.split('/').pop() ?? publicPath
	try {
		const abs = path.join(process.cwd(), 'public', publicPath)
		const bytes = fs.statSync(abs).size
		const size = bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(2)} MB` : `${(bytes / 1024).toFixed(1)} KB`
		let dims = ''
		const head = Buffer.alloc(24)
		const fd = fs.openSync(abs, 'r')
		fs.readSync(fd, head, 0, 24, 0)
		fs.closeSync(fd)
		if (head.toString('ascii', 1, 4) === 'PNG') dims = `${head.readUInt32BE(16)}×${head.readUInt32BE(20)}`
		return { name, size, dims }
	} catch {
		return { name, size: '? KB', dims: '' }
	}
}

/* ---------- normalise the project descriptions (stray \n and indentation) ---------- */

function paragraphs(text: string): string[] {
	const parts = text
		.split('\n')
		.map(s => s.replace(/\s+/g, ' ').trim())
		.filter(Boolean)
	// Rejoin fragments that were broken mid-sentence (next part starts lowercase).
	const out: string[] = []
	for (const p of parts) {
		if (out.length && /^[a-z]/.test(p)) out[out.length - 1] += ' ' + p
		else out.push(p)
	}
	return out
}

const NAV = [
	{ href: '#hero', label: 'top' },
	{ href: '#about', label: 'about' },
	{ href: '#projects', label: 'projects' },
	{ href: '#contact', label: 'contact' },
]

function Tag({ children }: { children: React.ReactNode }) {
	return <span className={styles.tag} aria-hidden="true">{children}</span>
}

export default function BrutalismPage() {
	const generated = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
	const photo = fileInfo(PROFILE.photo)
	const projects = PROJECTS.map(p => ({ ...p, file: fileInfo(p.thumbnail), paras: paragraphs(p.description) }))

	return (
		<div id={ROOT_ID} className={`${styles.root} ${arimo.variable} ${tinos.variable} ${cousine.variable}`}>
			<a href="#main" className={styles.skip}>skip to content</a>

			{/* ===== status bar ===== */}
			<div className={styles.statusBar}>
				<span>GET /styles/brutalism</span>
				<span>200 OK</span>
				<span>text/html; charset=utf-8</span>
				<span className={styles.hideSm}>generated {generated}</span>
			</div>

			{/* ===== nav ===== */}
			<header className={styles.header}>
				<nav aria-label="Sections" className={styles.nav}>
					<span className={styles.navLabel}>INDEX:</span>
					{NAV.map(n => (
						<a key={n.href} href={n.href} className={styles.link}>[{n.label}]</a>
					))}
					<a href="/styles" className={styles.link}>[../all styles]</a>
				</nav>
				<XrayToggle targetId={ROOT_ID} />
			</header>

			<main id="main">
				{/* ===== HERO ===== */}
				<section id="hero" aria-labelledby="hero-name" className={styles.hero}>
					<Tag>&lt;section id=&quot;hero&quot;&gt;</Tag>
					<h1 id="hero-name" className={styles.name}>
						<span>ATRIN</span> <span>HOJJAT</span>
					</h1>

					<div className={styles.heroGrid}>
						<dl className={styles.heroMeta}>
							<div><dt>role</dt><dd className={styles.role}>{PROFILE.role}</dd></div>
							<div><dt>greeting</dt><dd>{PROFILE.greeting}</dd></div>
							<div><dt>file</dt><dd className={styles.mono}>index.html</dd></div>
						</dl>

						<p className={styles.pitch}>
							{PROFILE.heroWords.map((w, i) => {
								const loud = w === w.toUpperCase()
								const isMe = w.includes('ME')
								if (isMe) {
									return (
										<span key={i}>
											<span className={styles.quiet}>with </span>
											<mark className={styles.me}>ME</mark>
										</span>
									)
								}
								return (
									<span key={i} className={loud ? styles.loud : styles.quiet}>{w}{' '}</span>
								)
							})}
						</p>
					</div>

					<div className={styles.taglineRow}>
						<p className={styles.tagline}>{PROFILE.heroTagline}.</p>
						<a href="#projects" className={styles.link}>&darr; see the work (5 entries)</a>
					</div>
				</section>

				{/* ===== marquee ===== */}
				<div className={styles.marquee} aria-hidden="true">
					<div className={styles.marqueeTrack}>
						{[0, 1].map(k => (
							<span key={k}>
								{TECH_FOOTER.map(t => <span key={t}>{t.toUpperCase()} ■ </span>)}
								NO FRAMEWORK FOR TASTE ■ VIEW SOURCE ■&nbsp;
							</span>
						))}
					</div>
				</div>

				{/* ===== ABOUT ===== */}
				<section id="about" aria-labelledby="about-h" className={styles.section}>
					<Tag>&lt;section id=&quot;about&quot;&gt;</Tag>
					<div className={styles.sectionHead}>
						<h2 id="about-h" className={styles.h2}>ABOUT</h2>
						<span className={styles.count}>02 paragraphs / 01 image</span>
					</div>
					<div className={styles.aboutGrid}>
						<figure className={styles.photoCell}>
							<Image
								src={PROFILE.photo}
								alt="Portrait of Atrin Hojjat"
								width={307}
								height={307}
								className={styles.photo}
							/>
							<figcaption className={styles.caption}>
								fig.1 — {photo.name} — 307×307 — {photo.size}
							</figcaption>
						</figure>
						<div className={styles.aboutText}>
							{ABOUT.map((p, i) => (
								<p key={i}>
									<span className={styles.pnum}>¶{i + 1}</span>
									{p.replace(/\s+/g, ' ')}
								</p>
							))}
						</div>
					</div>
				</section>

				{/* ===== PROJECTS ===== */}
				<section id="projects" aria-labelledby="projects-h" className={styles.section}>
					<Tag>&lt;section id=&quot;projects&quot;&gt;</Tag>
					<div className={styles.sectionHead}>
						<h2 id="projects-h" className={styles.h2}>WORK</h2>
						<span className={styles.count}>{String(projects.length).padStart(2, '0')} entries, unsorted</span>
					</div>

					<div className={styles.tableHead} aria-hidden="true">
						<span>NO.</span><span>FILE</span><span>ENTRY</span>
					</div>

					<ol className={styles.projects}>
						{projects.map((p, i) => (
							<li key={p.name} className={styles.project}>
								<article aria-labelledby={`p-${i}`} className={styles.projectRow}>
									<div className={styles.pno}>{String(i + 1).padStart(2, '0')}</div>

									<figure className={styles.shotCell}>
										<Image
											src={p.thumbnail}
											alt={`Screenshot of the ${p.name} website`}
											width={800}
											height={600}
											sizes="(max-width: 800px) 100vw, 40vw"
											className={styles.shot}
										/>
										<figcaption className={styles.caption}>
											{p.file.name} — {p.file.dims} — {p.file.size}
										</figcaption>
									</figure>

									<div className={styles.entry}>
										<h3 id={`p-${i}`} className={styles.h3}>{p.name}</h3>
										{p.paras.map((para, j) => <p key={j} className={styles.desc}>{para}</p>)}

										<p className={styles.stackLabel}>stack[{p.stack.length}]:</p>
										<ul className={styles.stack} aria-label={`${p.name} tech stack`}>
											{p.stack.map(s => <li key={s}>{s}</li>)}
										</ul>

										<p className={styles.visit}>
											{p.link ? (
												<a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
													Visit website &rarr; <span className={styles.url}>{p.link.replace('https://', '')}</span>
												</a>
											) : (
												<span className={styles.noLink}>{'// no public url'}</span>
											)}
										</p>
									</div>
								</article>
							</li>
						))}
					</ol>
				</section>

				{/* ===== CONTACT ===== */}
				<section id="contact" aria-labelledby="contact-h" className={styles.contact}>
					<Tag>&lt;footer id=&quot;contact&quot;&gt;</Tag>
					<h2 id="contact-h" className={styles.contactH}>CONTACT</h2>
					<p className={styles.pitchSmall}>
						{PROFILE.footerPitch.join(' ')}
					</p>

					<ul className={styles.emails}>
						{CONTACT.emails.map(e => (
							<li key={e}>
								<a href={`mailto:${e}`} className={styles.email}>{e}</a>
							</li>
						))}
					</ul>

					<table className={styles.table}>
						<caption className={styles.srOnly}>Links and tech</caption>
						<tbody>
							{CONTACT.links.map(l => (
								<tr key={l.label}>
									<th scope="row">{l.label.toLowerCase()}</th>
									<td>
										<a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
											{l.href.replace('https://', '').replace(/\/$/, '')}
										</a>
									</td>
								</tr>
							))}
							<tr>
								<th scope="row">tech</th>
								<td>{TECH_FOOTER.join(', ')}</td>
							</tr>
							<tr>
								<th scope="row">up</th>
								<td><a href="/styles" className={styles.link}>../ All styles</a></td>
							</tr>
						</tbody>
					</table>

					<div className={styles.eof}>
						<span>© {PROFILE.name}</span>
						<span>styled to look unstyled</span>
						<span>EOF</span>
					</div>
				</section>
			</main>
		</div>
	)
}
