import { blazeRings, currentLines, movementInSquares, vegaColour } from './patterns'
import s from './op.module.css'

// Static Op Art figures, rendered on the server as inline SVG.

/** Riley "Current": a band of rippling parallel lines, used as a section divider. */
export function CurrentBand({ seed = 0, label }: { seed?: number; label: string }) {
	const W = 1440
	const H = 170
	return (
		<div className={s.band} role="presentation">
			<svg className={s.bandSvg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
				<rect width={W} height={H} className={s.fillPaper} />
				<path d={currentLines(W, H, 9, seed)} className={s.strokeInk} fill="none" strokeWidth={4.2} />
			</svg>
			<span className={s.bandLabel} aria-hidden="true">{label}</span>
		</div>
	)
}

/** Riley "Movement in Squares": a checkerboard folding towards a vertical crease. */
export function SquaresBand({ label }: { label: string }) {
	const W = 1440
	const H = 216
	const cells = movementInSquares(W, H, 6, 44, 0.57)
	return (
		<div className={`${s.band} ${s.bandTall}`} role="presentation">
			<svg className={s.bandSvg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
				<rect width={W} height={H} className={s.fillPaper} />
				{cells.map((c, i) => (
					<rect key={i} x={c.x} y={c.y} width={c.w} height={c.h} className={s.fillInk} />
				))}
			</svg>
			<span className={s.bandLabel} aria-hidden="true">{label}</span>
		</div>
	)
}

/** Riley "Blaze": concentric zigzag rings that spiral around a central disc (the portrait sits in it). */
export function Blaze({ className }: { className?: string }) {
	const size = 600
	const rings = blazeRings(size, 15, 30, 118)
	return (
		<svg className={className} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" focusable="false">
			{rings.map((r, i) => (
				<path key={i} d={r.d} className={r.dark ? s.fillInk : s.fillPaper} />
			))}
			<circle cx={size / 2} cy={size / 2} r={122} className={s.fillInk} />
		</svg>
	)
}

/** Vasarely "Vega" in his later, limited colour palette: backdrop for the contact plate. */
export function VegaColour() {
	const W = 1440
	const H = 1000
	const { squares, discs } = vegaColour(W, H, 52, W * 0.7, H * 0.5, 470)
	return (
		<svg className={s.vegaColour} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
			{squares.map((q, i) => (
				<path key={`q${i}`} d={q.d} fill={q.fill} />
			))}
			{discs.map((d, i) => (
				<ellipse key={`d${i}`} cx={d.cx} cy={d.cy} rx={d.rx} ry={d.ry} fill={d.fill} />
			))}
		</svg>
	)
}

/**
 * The name set as Op lettering: letters filled with horizontal stripes on a field of vertical stripes.
 * The figure is carried only by the change of direction, as on 1960s Op posters.
 */
export function StripeName({ lines, period = 18, id, className }: { lines: string[]; period?: number; id: string; className?: string }) {
	const p = period
	const W = 1000
	const lineH = 200
	const H = lineH * lines.length
	return (
		<svg className={`${s.stripeName} ${className ?? ''}`} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
			<defs>
				<pattern id={`${id}-v`} width={p} height={p} patternUnits="userSpaceOnUse">
					<rect width={p} height={p} className={s.fillPaper} />
					<rect width={p * 0.4} height={p} className={s.fillInk} />
				</pattern>
				<pattern id={`${id}-h`} width={p} height={p} patternUnits="userSpaceOnUse">
					<rect width={p} height={p} className={s.fillPaper} />
					<rect width={p} height={p * 0.56} className={s.fillInk} />
				</pattern>
			</defs>
			<rect width={W} height={H} fill={`url(#${id}-v)`} />
			{lines.map((line, i) => (
				<text
					key={line}
					x={8}
					y={i * lineH + lineH * 0.86}
					textLength={W - 16}
					lengthAdjust="spacingAndGlyphs"
					fill={`url(#${id}-h)`}
					stroke="var(--ink)"
					strokeWidth={p * 0.22}
					paintOrder="stroke"
					className={s.stripeNameText}
				>
					{line}
				</text>
			))}
		</svg>
	)
}
