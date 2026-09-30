import { PICO, type PixelMap } from './sprites'

const GRASS: PixelMap = [
	'EEEEEEEE',
	'EEDEEEEE',
	'DEEEEDEE',
	'DDDEDDDD',
	'UDUUUDUU',
	'UUUUUUUU',
	'UUUPUUUU',
	'UUUUUUUU',
]

const DIRT: PixelMap = [
	'UUUUUUUU',
	'UPUUUUUU',
	'UUUUUOUU',
	'UUUUUUUU',
	'UUUUUUPU',
	'UUOUUUUU',
	'UUUUUUUU',
	'PUUUUUUU',
]

const BRICK: PixelMap = [
	'OOOOOOOK',
	'UUUUUUUK',
	'UUUUUUUK',
	'KKKKKKKK',
	'OOOKOOOO',
	'UUUKUUUU',
	'UUUKUUUU',
	'KKKKKKKK',
]

function Tile({ id, map, px }: { id: string, map: PixelMap, px: number }) {
	return (
		<pattern id={id} width={map[0].length * px} height={map.length * px} patternUnits="userSpaceOnUse">
			{map.flatMap((row, y) => row.split('').map((c, x) => (
				<rect key={`${x}-${y}`} x={x * px} y={y * px} width={px} height={px} fill={PICO[c as keyof typeof PICO]} />
			)))}
		</pattern>
	)
}

/** A tiled strip of grass + dirt blocks, 4 CSS px per art pixel. */
export function Ground({ className, rows = 3, id = 'g' }: { className?: string, rows?: number, id?: string }) {
	return (
		<svg className={className} width="100%" height={32 * rows} shapeRendering="crispEdges" aria-hidden>
			<defs>
				<Tile id={`${id}-grass`} map={GRASS} px={4} />
				<Tile id={`${id}-dirt`} map={DIRT} px={4} />
			</defs>
			<rect x="0" y="0" width="100%" height="32" fill={`url(#${id}-grass)`} />
			<rect x="0" y="32" width="100%" height={32 * (rows - 1)} fill={`url(#${id}-dirt)`} />
		</svg>
	)
}

/** A row of castle bricks, used as the floor of the stage-select screen. */
export function Bricks({ className, rows = 2, id = 'b' }: { className?: string, rows?: number, id?: string }) {
	return (
		<svg className={className} width="100%" height={32 * rows} shapeRendering="crispEdges" aria-hidden>
			<defs>
				<Tile id={`${id}-brick`} map={BRICK} px={4} />
			</defs>
			<rect x="0" y="0" width="100%" height={32 * rows} fill={`url(#${id}-brick)`} />
		</svg>
	)
}
