'use client'

import { useId, useState } from 'react'
import styles from './grunge.module.css'

// Adobe's ZapfDingbats encoding: what each ASCII key produced when a paragraph was set in the font.
function zapf(ch: string): string {
	const c = ch.charCodeAt(0)
	if (c < 0x21 || c > 0x7e) return ch
	const special: Record<number, number> = {
		0x25: 0x260e, 0x2a: 0x261b, 0x2b: 0x261e, 0x48: 0x2605, 0x6c: 0x25cf,
		0x6e: 0x25a0, 0x73: 0x25b2, 0x74: 0x25bc, 0x75: 0x25c6, 0x76: 0x2756, 0x77: 0x25d7,
	}
	let cp = special[c]
	if (!cp) {
		if (c <= 0x2f) cp = 0x2700 + (c - 0x20)
		else if (c <= 0x47) cp = 0x2710 + (c - 0x30)
		else if (c <= 0x6b) cp = 0x2729 + (c - 0x49)
		else if (c === 0x6d) cp = 0x274d
		else if (c <= 0x72) cp = 0x274f + (c - 0x6f)
		else cp = 0x2758 + (c - 0x78)
	}
	// U+FE0E asks for the monochrome text presentation, never a colour emoji.
	return String.fromCodePoint(cp) + '︎'
}

const toDingbats = (s: string) => Array.from(s).map(zapf).join('')

export function DingbatParagraphs({ paragraphs }: { paragraphs: string[] }) {
	const [on, setOn] = useState(false)
	const noteId = useId()

	return (
		<div className={styles.dingbatWrap}>
			<div className={styles.dingbatControl}>
				<button
					type="button"
					className={styles.stampButton}
					aria-pressed={on}
					aria-describedby={noteId}
					onClick={() => setOn(v => !v)}
				>
					<span className={styles.stampBox} aria-hidden="true">{on ? '✕' : ''}</span>
					{on ? 'Back to the alphabet' : 'Too boring? Set it in Dingbats'}
				</button>
				<p id={noteId} className={styles.dingbatNote}>
					In 1994 David Carson found a Bryan Ferry interview so dull he ran it in <i>Ray Gun</i> entirely in Zapf Dingbats.
				</p>
			</div>

			{paragraphs.map((p, i) => (
				<p key={i} className={`${styles.bodyText} ${i === 0 ? styles.dropCap : ''}`}>
					{on ? (
						<>
							<span className={styles.srOnly}>{p}</span>
							<span className={styles.dingbats} aria-hidden="true">{toDingbats(p)}</span>
						</>
					) : p}
				</p>
			))}
		</div>
	)
}
