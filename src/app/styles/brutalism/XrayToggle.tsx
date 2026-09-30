'use client'

import { useState } from 'react'
import styles from './brutalism.module.css'

// "Show structure": outlines every element on the page, like a DOM inspector.
export function XrayToggle({ targetId }: { targetId: string }) {
	const [on, setOn] = useState(false)
	return (
		<button
			type="button"
			className={styles.rawButton}
			aria-pressed={on}
			onClick={() => {
				const el = document.getElementById(targetId)
				el?.classList.toggle(styles.xray, !on)
				setOn(!on)
			}}
		>
			{on ? '[x] hide structure' : '[ ] show structure'}
		</button>
	)
}
