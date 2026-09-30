// Pure geometry for the Op Art page. Everything here returns SVG path data or shape lists, so the same
// code runs on the server (static patterns) and in the client (the pointer-driven bulge in the hero).

type Pt = [number, number]

const r1 = (n: number) => Math.round(n * 10) / 10

/**
 * Vasarely-style spherical bulge. Points inside radius R are pushed outwards so the middle of the
 * grid swells towards the viewer. f(t) = t + k·t·(1−t)² keeps f(1) = 1 and f'(1) = 1, so the warp
 * blends into the flat grid without a visible seam; k < 3 keeps it monotonic (no fold-over).
 */
export function bulge(x: number, y: number, cx: number, cy: number, R: number, k = 2.1): Pt {
	const dx = x - cx
	const dy = y - cy
	const d = Math.hypot(dx, dy)
	if (d >= R || d === 0) return [x, y]
	const t = d / R
	const s = (t + k * t * (1 - t) * (1 - t)) / t
	return [cx + dx * s, cy + dy * s]
}

/**
 * "Vega" checkerboard: returns one path containing every black cell of a grid warped by `bulge`.
 * Each cell edge is subdivided so the squares curve smoothly over the sphere.
 */
export function vegaChecker(W: number, H: number, cell: number, cx: number, cy: number, R: number, sub = 3): string {
	const cols = Math.ceil(W / cell) + 2
	const rows = Math.ceil(H / cell) + 2
	const x0 = (W - cols * cell) / 2
	const y0 = (H - rows * cell) / 2
	const step = cell / sub
	const nx = cols * sub + 1
	const ny = rows * sub + 1
	const px = new Float64Array(nx * ny)
	const py = new Float64Array(nx * ny)
	for (let j = 0; j < ny; j++) {
		for (let i = 0; i < nx; i++) {
			const [x, y] = bulge(x0 + i * step, y0 + j * step, cx, cy, R)
			px[j * nx + i] = x
			py[j * nx + i] = y
		}
	}
	const at = (i: number, j: number) => `${r1(px[j * nx + i])} ${r1(py[j * nx + i])}`
	const parts: string[] = []
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if ((r + c) % 2) continue
			const i0 = c * sub
			const j0 = r * sub
			const seg: string[] = [`M${at(i0, j0)}`]
			for (let s = 1; s <= sub; s++) seg.push(at(i0 + s, j0))
			for (let s = 1; s <= sub; s++) seg.push(at(i0 + sub, j0 + s))
			for (let s = sub - 1; s >= 0; s--) seg.push(at(i0 + s, j0 + sub))
			for (let s = sub - 1; s > 0; s--) seg.push(at(i0, j0 + s))
			parts.push(seg.join('L') + 'Z')
		}
	}
	return parts.join('')
}

/**
 * Bridget Riley "Current" (1964): closely spaced parallel lines whose wave amplitude and frequency
 * drift across the band, so neighbouring lines never cross but the field appears to ripple.
 */
export function currentLines(W: number, H: number, gap: number, seed = 0): string {
	const n = Math.floor(H / gap) + 4
	const parts: string[] = []
	for (let j = -2; j < n; j++) {
		const y0 = j * gap
		const pts: string[] = []
		for (let x = -10; x <= W + 10; x += 8) {
			const u = x / W
			// amplitude swells in two places, wavelength tightens towards the right
			const amp = gap * (0.35 + 1.9 * Math.pow(Math.sin(Math.PI * (u * 1.5 + seed)), 2))
			const phase = (x / (70 - 38 * u)) + j * 0.22 + seed * 4
			pts.push(`${r1(x)} ${r1(y0 + amp * Math.sin(phase))}`)
		}
		parts.push('M' + pts.join('L'))
	}
	return parts.join('')
}

/**
 * Bridget Riley "Movement in Squares" (1961): a checkerboard whose columns compress towards a fold
 * two thirds of the way across, then open out again. Returns black cells as rects.
 */
export function movementInSquares(W: number, H: number, rows: number, cols: number, fold = 0.64) {
	const weights: number[] = []
	for (let c = 0; c < cols; c++) {
		const u = (c + 0.5) / cols
		weights.push(0.025 + Math.pow(Math.abs(u - fold), 1.35))
	}
	const total = weights.reduce((a, b) => a + b, 0)
	const rh = H / rows
	const cells: { x: number; y: number; w: number; h: number }[] = []
	let x = 0
	for (let c = 0; c < cols; c++) {
		const w = (weights[c] / total) * W
		for (let r = 0; r < rows; r++) {
			if ((r + c) % 2 === 0) cells.push({ x: r1(x), y: r1(r * rh), w: r1(w + 0.4), h: r1(rh) })
		}
		x += w
	}
	return cells
}

/**
 * Bridget Riley "Blaze" (1962): concentric zigzag rings. The teeth of each ring are rotated half a
 * step against the next, so the zigzags spiral and the disc seems to spin.
 */
export function blazeRings(size: number, rings: number, teeth: number, inner: number) {
	const c = size / 2
	const outer = size / 2
	const step = (outer - inner) / rings
	const amp = step * 0.42
	const out: { d: string; dark: boolean }[] = []
	for (let k = rings; k >= 0; k--) {
		const r = inner + k * step
		const pts: string[] = []
		const twist = (k % 2 ? 1 : -1) * (Math.PI / teeth) * 0.5
		for (let m = 0; m < teeth * 2; m++) {
			const a = (m * Math.PI) / teeth + twist
			const rr = Math.min(outer, r + (m % 2 ? amp : -amp))
			pts.push(`${r1(c + rr * Math.cos(a))} ${r1(c + rr * Math.sin(a))}`)
		}
		out.push({ d: 'M' + pts.join('L') + 'Z', dark: k % 2 === 0 })
	}
	return out
}

// Vasarely's later "Vega-Nor"/"Planetary Folklore" palette: ultramarine through violet to magenta,
// with warm complementary discs.
const FIELD = ['#f36a2d', '#e2305e', '#b52a8f', '#6a2fa8', '#3431a8', '#161b6e']
const DISC = ['#ffd23a', '#ffb02e', '#ff7a4a', '#f2479a', '#b04fe0', '#5f78ff']

function mix(a: string, b: string, t: number) {
	const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16))
	const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16))
	return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('')
}

function ramp(stops: string[], t: number) {
	const x = Math.max(0, Math.min(0.9999, t)) * (stops.length - 1)
	const i = Math.floor(x)
	return mix(stops[i], stops[i + 1], x - i)
}

/**
 * Vasarely "Vega" in colour: a square grid, each square holding a disc, swollen by the same bulge.
 * Colour runs from the sphere's centre outwards; discs take the complementary ramp.
 */
export function vegaColour(W: number, H: number, cell: number, cx: number, cy: number, R: number) {
	const cols = Math.ceil(W / cell) + 1
	const rows = Math.ceil(H / cell) + 1
	const x0 = (W - cols * cell) / 2
	const y0 = (H - rows * cell) / 2
	const squares: { d: string; fill: string }[] = []
	const discs: { cx: number; cy: number; rx: number; ry: number; fill: string }[] = []
	const far = Math.hypot(W, H) / 2
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const ax = x0 + c * cell
			const ay = y0 + r * cell
			const q = [
				bulge(ax, ay, cx, cy, R),
				bulge(ax + cell, ay, cx, cy, R),
				bulge(ax + cell, ay + cell, cx, cy, R),
				bulge(ax, ay + cell, cx, cy, R),
			]
			const mx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4
			const my = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4
			const w = (Math.hypot(q[1][0] - q[0][0], q[1][1] - q[0][1]) + Math.hypot(q[2][0] - q[3][0], q[2][1] - q[3][1])) / 2
			const h = (Math.hypot(q[3][0] - q[0][0], q[3][1] - q[0][1]) + Math.hypot(q[2][0] - q[1][0], q[2][1] - q[1][1])) / 2
			const t = Math.hypot(mx - cx, my - cy) / far
			const checker = (r + c) % 2 ? 0.06 : 0
			squares.push({ d: 'M' + q.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z', fill: ramp(FIELD, t * 1.2 + checker) })
			const grow = Math.max(0, 1 - Math.hypot(mx - cx, my - cy) / R)
			const k = 0.26 + 0.14 * grow
			discs.push({ cx: r1(mx), cy: r1(my), rx: r1(w * k), ry: r1(h * k), fill: ramp(DISC, t * 1.2) })
		}
	}
	return { squares, discs }
}
