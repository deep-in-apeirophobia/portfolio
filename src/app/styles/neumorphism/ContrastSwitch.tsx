'use client'

import { useState } from 'react'
import s from './neumorphism.module.css'

// Neumorphism's famous flaw: pure soft UI has no edges, so controls are hard to find.
// This switch lets the viewer compare: "Edges on" (default, accessible) vs the original edgeless look.
export default function ContrastSwitch() {
	const [edges, setEdges] = useState(true)

	function toggle() {
		const next = !edges
		setEdges(next)
		document.getElementById('neu-page')?.setAttribute('data-edges', next ? 'on' : 'off')
	}

	return (
		<button
			type="button"
			role="switch"
			aria-checked={edges}
			onClick={toggle}
			className={s.switchWrap}
		>
			<span className={s.switchLabel}>Edges</span>
			<span className={s.switchTrack} data-on={edges}>
				<span className={s.switchThumb} />
			</span>
			<span className={s.srOnly}>{edges ? '(visible outlines on)' : '(original edgeless soft UI)'}</span>
		</button>
	)
}
