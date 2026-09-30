import { PICO, type PixelMap } from './sprites'

type Props = {
	map: PixelMap
	/** Size of one art pixel in CSS pixels. */
	scale?: number
	className?: string
	title?: string
	/** Optional per-letter colour overrides. */
	colors?: Partial<Record<string, string>>
}

/**
 * Renders a text pixel map as crisp SVG <rect>s. Horizontal runs of the same colour
 * are merged into one rect to keep the DOM small.
 */
export default function Pixels({ map, scale = 4, className, title, colors }: Props) {
	const w = Math.max(...map.map(r => r.length))
	const h = map.length
	const rects: React.ReactNode[] = []
	map.forEach((row, y) => {
		let x = 0
		while (x < row.length) {
			const c = row[x]
			if (c === '.' || c === ' ') { x++; continue }
			let run = 1
			while (row[x + run] === c) run++
			const fill = colors?.[c] ?? PICO[c as keyof typeof PICO] ?? c
			rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={fill} />)
			x += run
		}
	})
	return (
		<svg
			viewBox={`0 0 ${w} ${h}`}
			width={w * scale}
			height={h * scale}
			shapeRendering="crispEdges"
			className={className}
			role={title ? 'img' : undefined}
			aria-hidden={title ? undefined : true}
			aria-label={title}
		>
			{rects}
		</svg>
	)
}
