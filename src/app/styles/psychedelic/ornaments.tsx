import type { CSSProperties } from 'react'

/*
 * Hand-built SVG ornament for the psychedelic poster page:
 * filters that melt type, Art Nouveau whiplash corners (Mucha by way of the Avalon Ballroom),
 * flower-power daisies, paisley teardrops, and the "Wes Wilson" balloon lettering helper.
 */

/** Invisible <svg> that holds the shared filters. Referenced from CSS as url(#psy-melt) etc. */
export function PsyDefs() {
	return (
		<svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
			<defs>
				{/* Low-frequency turbulence displaces glyph outlines: letters look hand-drawn and "melting". */}
				<filter id="psy-melt" x="-10%" y="-20%" width="120%" height="140%">
					<feTurbulence type="fractalNoise" baseFrequency="0.009 0.022" numOctaves="2" seed="7" result="noise" />
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
				</filter>
				<filter id="psy-melt-soft" x="-5%" y="-20%" width="110%" height="140%">
					<feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="1" seed="3" result="noise" />
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
				</filter>
				{/* Split-fountain duotone for the portrait: shadows go deep violet, highlights go marigold. */}
				<filter id="psy-duotone" colorInterpolationFilters="sRGB">
					<feColorMatrix type="saturate" values="0" />
					<feComponentTransfer>
						<feFuncR type="table" tableValues="0.22 0.95 1" />
						<feFuncG type="table" tableValues="0.03 0.35 0.93" />
						<feFuncB type="table" tableValues="0.33 0.35 0.55" />
					</feComponentTransfer>
				</filter>
			</defs>
		</svg>
	)
}

/** Art Nouveau whiplash corner: a long lashing curve that coils into a spiral, with seed-pod dots. */
export function Whiplash({ className, style }: { className?: string, style?: CSSProperties }) {
	return (
		<svg className={className} style={style} viewBox="0 0 220 220" aria-hidden="true" focusable="false">
			<g fill="none" stroke="currentColor" strokeLinecap="round">
				<path d="M8 212 C 8 110 50 30 150 12 C 180 7 205 8 214 8" strokeWidth="9" />
				<path d="M8 212 C 20 150 60 118 100 118 C 138 118 150 150 128 166 C 110 178 90 162 100 146 C 108 134 124 140 120 150" strokeWidth="7" />
				<path d="M214 8 C 150 20 118 60 118 100 C 118 138 150 150 166 128 C 178 110 162 90 146 100 C 134 108 140 124 150 120" strokeWidth="7" />
				<path d="M30 190 C 40 120 90 60 190 34" strokeWidth="3" strokeDasharray="1 11" />
			</g>
			<g fill="currentColor">
				<circle cx="60" cy="60" r="11" />
				<circle cx="86" cy="40" r="6" />
				<circle cx="40" cy="86" r="6" />
				<circle cx="104" cy="28" r="3.5" />
				<circle cx="28" cy="104" r="3.5" />
				<path d="M150 170 C 165 160 190 165 200 190 C 178 196 158 190 150 170 Z" />
				<path d="M170 150 C 160 165 165 190 190 200 C 196 178 190 158 170 150 Z" />
			</g>
		</svg>
	)
}

/** Flower-power daisy (Peter Max / Yellow Submarine). */
export function Flower({ className, petal = 'currentColor', eye = '#2a0a2e', ring = '#ffe600', style }: { className?: string, petal?: string, eye?: string, ring?: string, style?: CSSProperties }) {
	return (
		<svg className={className} style={style} viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">
			<g fill={petal} stroke="#2a0a2e" strokeWidth="3">
				{Array.from({ length: 8 }, (_, i) => (
					<ellipse key={i} cx="0" cy="-27" rx="12" ry="21" transform={`rotate(${i * 45})`} />
				))}
			</g>
			<circle r="15" fill={ring} stroke="#2a0a2e" strokeWidth="3" />
			<circle r="7" fill={eye} />
		</svg>
	)
}

/** Paisley teardrop drawn as nested outlines, with a dotted halo. */
export function Paisley({ className, colors = ['#ff8a00', '#e0169a', '#ffe600', '#2438ff'], style }: { className?: string, colors?: string[], style?: CSSProperties }) {
	const d = 'M50 150 C 8 130 4 72 30 44 C 50 22 88 22 94 52 C 98 74 78 88 62 78 C 50 70 56 54 70 58 C 96 80 90 132 50 150 Z'
	return (
		<svg className={className} style={style} viewBox="0 0 110 160" aria-hidden="true" focusable="false">
			{colors.map((c, i) => (
				<path key={i} d={d} fill={c} stroke="#2a0a2e" strokeWidth={3 / (1 - i * 0.2)} transform={`translate(${52 * i * 0.2} ${100 * i * 0.2}) scale(${1 - i * 0.2})`} />
			))}
			<g fill="#2a0a2e">
				{Array.from({ length: 9 }, (_, i) => {
					const t = i / 8
					return <circle key={i} cx={12 + t * 30} cy={122 - t * 88 + Math.sin(t * Math.PI) * -6} r="2.6" />
				})}
			</g>
		</svg>
	)
}

/**
 * "Balloon" lettering in the manner of Wes Wilson: each letter is stretched vertically along a sine curve
 * so the word swells in the middle and pinches at the ends, filling an envelope shape instead of a box.
 * Screen readers get the plain text once.
 */
export function Balloon({ text, swell = 0.55, className }: { text: string, swell?: number, className?: string }) {
	const words = text.split(' ')
	const letters = text.replace(/ /g, '').length
	let idx = 0
	return (
		<span className={className}>
			<span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>{text}</span>
			<span aria-hidden="true" style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '0.28em', alignItems: 'center' }}>
				{words.map((w, wi) => (
					<span key={wi} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
						{Array.from(w).map((ch, ci) => {
							const t = letters > 1 ? idx / (letters - 1) : 0.5
							idx++
							const s = 1 + swell * Math.sin(t * Math.PI)
							return (
								<span key={ci} style={{ display: 'inline-block', transform: `scaleY(${s.toFixed(3)})`, margin: `0 ${(-0.01).toFixed(2)}em` }}>{ch}</span>
							)
						})}
					</span>
				))}
			</span>
		</span>
	)
}
