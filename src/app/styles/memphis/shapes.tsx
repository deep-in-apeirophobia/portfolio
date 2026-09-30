// Inline-SVG Memphis furniture: squiggles, zigzags, arcs and sparks.
// All purely decorative, so every svg is aria-hidden.

type SvgProps = { className?: string, color?: string, stroke?: number, style?: React.CSSProperties }

export function Squiggle({ className, color = '#111', stroke = 7, style, waves = 5 }: SvgProps & { waves?: number }) {
	const w = 40
	let d = `M${stroke} 30`
	for (let i = 0; i < waves; i++) {
		const x = stroke + i * w
		d += ` C${x + w * 0.25} ${i % 2 ? 58 : 2}, ${x + w * 0.75} ${i % 2 ? 58 : 2}, ${x + w} 30`
	}
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox={`0 0 ${waves * w + stroke * 2} 60`} fill="none">
			<path d={d} stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export function ZigzagLine({ className, color = '#111', stroke = 6, style, peaks = 6 }: SvgProps & { peaks?: number }) {
	const w = 24
	const pts: string[] = []
	for (let i = 0; i <= peaks * 2; i++) pts.push(`${stroke + i * w / 2},${i % 2 ? 6 : 26}`)
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox={`0 0 ${peaks * w + stroke * 2} 32`} fill="none">
			<polyline points={pts.join(' ')} stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export function Spark({ className, color = '#111', style }: SvgProps) {
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round">
			<path d="M20 3v34M3 20h34M8 8l24 24M32 8L8 32" />
		</svg>
	)
}

export function Arc({ className, fill = '#19c3b8', style }: SvgProps & { fill?: string }) {
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox="0 0 120 64" fill="none">
			<path d="M4 60a56 56 0 0 1 112 0z" fill={fill} stroke="#111" strokeWidth={4} strokeLinejoin="round" />
			<path d="M26 60a34 34 0 0 1 68 0" stroke="#111" strokeWidth={4} />
			<path d="M46 60a14 14 0 0 1 28 0" stroke="#111" strokeWidth={4} />
		</svg>
	)
}

export function Ring({ className, color = '#2f4bff', style }: SvgProps) {
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox="0 0 100 100" fill="none">
			<circle cx="50" cy="50" r="38" stroke="#111" strokeWidth="22" />
			<circle cx="50" cy="50" r="38" stroke={color} strokeWidth="14" />
		</svg>
	)
}

export function Lightning({ className, fill = '#ffd426', style }: SvgProps & { fill?: string }) {
	return (
		<svg aria-hidden="true" focusable="false" className={className} style={style} viewBox="0 0 60 100" fill="none">
			<path d="M36 3L6 56h20L18 97l36-58H32L44 3z" fill={fill} stroke="#111" strokeWidth={4} strokeLinejoin="round" />
		</svg>
	)
}
