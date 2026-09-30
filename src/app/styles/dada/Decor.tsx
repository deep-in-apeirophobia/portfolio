// Printers' marks and machine parts: the bits Höch and Hausmann pasted between faces and headlines.

type P = { className?: string }

export function Gear({ className, teeth = 12 }: P & { teeth?: number }) {
	const pts: string[] = []
	for (let i = 0; i < teeth * 2; i++) {
		const a = (i / (teeth * 2)) * Math.PI * 2
		const r1 = i % 2 === 0 ? 50 : 40
		const a2 = a + Math.PI / (teeth * 2)
		pts.push(`${50 + r1 * Math.cos(a)},${50 + r1 * Math.sin(a)}`)
		pts.push(`${50 + r1 * Math.cos(a2)},${50 + r1 * Math.sin(a2)}`)
	}
	return (
		<svg viewBox="0 0 100 100" className={className} aria-hidden="true">
			<polygon points={pts.join(' ')} fill="currentColor" />
			<circle cx="50" cy="50" r="22" fill="none" stroke="#ece2c9" strokeWidth="3" />
			<circle cx="50" cy="50" r="8" fill="#ece2c9" />
			{[0, 60, 120].map(d => (
				<rect key={d} x="48" y="28" width="4" height="44" fill="#ece2c9" transform={`rotate(${d} 50 50)`} />
			))}
		</svg>
	)
}

export function RegMark({ className }: P) {
	return (
		<svg viewBox="0 0 40 40" className={className} aria-hidden="true">
			<circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
			<circle cx="20" cy="20" r="5" fill="currentColor" />
			<path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="1.2" />
		</svg>
	)
}

export function RoundStamp({ className, id, top = 'DADA · MERZ · DADA · MERZ ·', center = '1916' }: P & { id: string, top?: string, center?: string }) {
	return (
		<svg viewBox="0 0 120 120" className={className} aria-hidden="true">
			<defs>
				<path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
			</defs>
			<circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="3" />
			<circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1.5" />
			<text fontSize="13" fontFamily="var(--dd-rubik), sans-serif" fill="currentColor" letterSpacing="2">
				<textPath href={`#${id}`}>{top}</textPath>
			</text>
			<text x="60" y="68" textAnchor="middle" fontSize="22" fontFamily="var(--dd-abril), serif" fill="currentColor">{center}</text>
		</svg>
	)
}

export function Wheel({ className }: P) {
	return (
		<svg viewBox="0 0 100 100" className={className} aria-hidden="true">
			<circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" />
			<circle cx="50" cy="50" r="7" fill="currentColor" />
			{Array.from({ length: 10 }, (_, i) => (
				<line key={i} x1="50" y1="50" x2={50 + 44 * Math.cos((i * Math.PI) / 5)} y2={50 + 44 * Math.sin((i * Math.PI) / 5)} stroke="currentColor" strokeWidth="2.5" />
			))}
		</svg>
	)
}
