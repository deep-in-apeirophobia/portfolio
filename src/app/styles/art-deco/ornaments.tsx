// Inline-SVG Art Deco ornaments. All strokes/fills reference the shared gold
// gradients defined once in <GoldDefs /> so every ornament reads as the same foil.

const GOLD = 'url(#deco-gold)'
// Straight horizontal/vertical lines have a zero-size bounding box, so gradients can't paint them.
const SOLID = '#d9b565'

export function GoldDefs() {
	return (
		<svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
			<defs>
				<linearGradient id="deco-gold" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#fff1c1" />
					<stop offset="0.35" stopColor="#e3c06a" />
					<stop offset="0.52" stopColor="#9c7230" />
					<stop offset="0.72" stopColor="#f0d488" />
					<stop offset="1" stopColor="#a47a33" />
				</linearGradient>
				<linearGradient id="deco-gold-h" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0" stopColor="#8f672a" />
					<stop offset="0.3" stopColor="#f3d98f" />
					<stop offset="0.5" stopColor="#b88c3f" />
					<stop offset="0.72" stopColor="#fbe7a8" />
					<stop offset="1" stopColor="#8f672a" />
				</linearGradient>
			</defs>
		</svg>
	)
}

/** Half sunburst / fan: concentric arcs and radiating ribs from a bottom-centre point. */
export function Fan({ className, rays = 17 }: { className?: string, rays?: number }) {
	const cx = 100
	const cy = 100
	const lines = Array.from({ length: rays }, (_, i) => {
		const a = Math.PI - (Math.PI * (i + 1)) / (rays + 1)
		const r0 = 22
		const r1 = i % 2 === 0 ? 96 : 80
		return {
			x1: +(cx + r0 * Math.cos(a)).toFixed(2),
			y1: +(cy - r0 * Math.sin(a)).toFixed(2),
			x2: +(cx + r1 * Math.cos(a)).toFixed(2),
			y2: +(cy - r1 * Math.sin(a)).toFixed(2),
		}
	})
	return (
		<svg className={className} viewBox="0 0 200 101" aria-hidden="true" focusable="false">
			<path d="M4 100 A96 96 0 0 1 196 100" fill="none" stroke={GOLD} strokeWidth="1" />
			<path d="M78 100 A22 22 0 0 1 122 100 Z" fill={GOLD} />
			<path d="M66 100 A34 34 0 0 1 134 100" fill="none" stroke={GOLD} strokeWidth="1" />
			{lines.map((l, i) => (
				<line key={i} {...l} stroke={SOLID} strokeWidth={i % 2 === 0 ? 1.4 : 0.7} />
			))}
			<line x1="0" y1="100.5" x2="200" y2="100.5" stroke={SOLID} strokeWidth="1" />
		</svg>
	)
}

/** Stepped corner bracket (top-left orientation; flip with CSS for the others). */
export function Corner({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
			<path d="M1 64 V1 H64" fill="none" stroke={GOLD} strokeWidth="1.5" />
			<path d="M7 64 V19 H13 V13 H19 V7 H64" fill="none" stroke={GOLD} strokeWidth="1" />
			<path d="M13 64 V25 H19 V19 H25 V13 H64" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.8" />
			<path d="M28 22 L32 18 L36 22 L32 26 Z" fill={GOLD} />
			<path d="M22 28 L26 32 L22 36 L18 32 Z" fill={GOLD} opacity="0.7" />
		</svg>
	)
}

/** Horizontal divider: parallel lines converging on a central diamond with chevrons. */
export function Divider({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 320 24" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
			<line x1="0" y1="9" x2="128" y2="9" stroke={SOLID} strokeWidth="0.8" />
			<line x1="20" y1="12" x2="128" y2="12" stroke={SOLID} strokeWidth="1.4" />
			<line x1="40" y1="15" x2="128" y2="15" stroke={SOLID} strokeWidth="0.8" />
			<line x1="192" y1="9" x2="320" y2="9" stroke={SOLID} strokeWidth="0.8" />
			<line x1="192" y1="12" x2="300" y2="12" stroke={SOLID} strokeWidth="1.4" />
			<line x1="192" y1="15" x2="280" y2="15" stroke={SOLID} strokeWidth="0.8" />
			<path d="M134 6 L140 12 L134 18" fill="none" stroke={GOLD} strokeWidth="1.2" />
			<path d="M186 6 L180 12 L186 18" fill="none" stroke={GOLD} strokeWidth="1.2" />
			<path d="M160 1 L171 12 L160 23 L149 12 Z" fill="none" stroke={GOLD} strokeWidth="1" />
			<path d="M160 6 L166 12 L160 18 L154 12 Z" fill={GOLD} />
		</svg>
	)
}

/** Stepped ziggurat / skyscraper crown, echoing the Chrysler & Empire State setbacks. */
export function Ziggurat({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 400 120" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
			<path
				d="M0 119 H60 V100 H100 V80 H135 V60 H160 V40 H180 V22 H192 V6 L200 0 L208 6 V22 H220 V40 H240 V60 H265 V80 H300 V100 H340 V119 H400"
				fill="none" stroke={GOLD} strokeWidth="1.5"
			/>
			<path
				d="M72 119 V108 H110 V88 H145 V68 H170 V48 H188 V30 H212 V48 H230 V68 H255 V88 H290 V108 H328 V119"
				fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.75"
			/>
			{[176, 188, 200, 212, 224].map((x) => (
				<line key={x} x1={x} y1={x === 200 ? 14 : 52} x2={x} y2="119" stroke={SOLID} strokeWidth="0.6" opacity="0.6" />
			))}
			<path d="M200 60 L208 68 L200 76 L192 68 Z" fill={GOLD} />
		</svg>
	)
}

/** Stack of chevrons pointing down (scroll cue). */
export function Chevrons({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
			<path d="M6 6 L20 16 L34 6" fill="none" stroke={GOLD} strokeWidth="1.5" />
			<path d="M6 15 L20 25 L34 15" fill="none" stroke={GOLD} strokeWidth="1.1" opacity="0.75" />
			<path d="M6 24 L20 34 L34 24" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.5" />
		</svg>
	)
}

/** Small solid diamond used as a list separator. */
export function Lozenge({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
			<path d="M5 0 L10 5 L5 10 L0 5 Z" fill={GOLD} />
		</svg>
	)
}
