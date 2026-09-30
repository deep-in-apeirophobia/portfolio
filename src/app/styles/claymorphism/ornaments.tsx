import type { CSSProperties } from 'react'

/*
 * Clay ornaments drawn as flat SVG silhouettes, then "inflated" with one shared SVG filter:
 * the alpha channel is blurred into a height map and lit with a diffuse + specular light
 * from the top-left, the same trick a Blender clay render fakes with subsurface scattering.
 */

export function ClayFilters() {
	return (
		<svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
			<defs>
				<filter id="clay-puff" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
					<feGaussianBlur in="SourceAlpha" stdDeviation="7" result="height" />
					<feDiffuseLighting in="height" surfaceScale="8" diffuseConstant="1.22" lightingColor="#ffffff" result="diffuse">
						<feDistantLight azimuth="225" elevation="58" />
					</feDiffuseLighting>
					<feBlend in="SourceGraphic" in2="diffuse" mode="multiply" result="lit" />
					<feSpecularLighting in="height" surfaceScale="8" specularConstant="0.75" specularExponent="18" lightingColor="#ffffff" result="spec">
						<feDistantLight azimuth="225" elevation="48" />
					</feSpecularLighting>
					<feComposite in="lit" in2="spec" operator="arithmetic" k1="0" k2="1" k3="0.55" k4="0" result="shiny" />
					<feComposite in="shiny" in2="SourceAlpha" operator="in" />
				</filter>
			</defs>
		</svg>
	)
}

type OrnProps = { className?: string, style?: CSSProperties, color?: string, shadow?: string }

const svgBase = (shadow: string): CSSProperties => ({
	overflow: 'visible',
	filter: `drop-shadow(0 18px 18px ${shadow})`,
})

export function ClayStar({ className, style, color = '#ffe68f', shadow = 'rgb(214 160 40 / 0.45)' }: OrnProps) {
	return (
		<svg viewBox="0 0 200 200" className={className} style={{ ...svgBase(shadow), ...style }} aria-hidden="true">
			<path
				filter="url(#clay-puff)"
				fill={color}
				stroke={color}
				strokeWidth="26"
				strokeLinejoin="round"
				d="M100 22 L122 74 L178 78 L135 114 L149 170 L100 140 L51 170 L65 114 L22 78 L78 74 Z"
			/>
		</svg>
	)
}

export function ClayHeart({ className, style, color = '#ffb8da', shadow = 'rgb(220 90 150 / 0.45)' }: OrnProps) {
	return (
		<svg viewBox="0 0 200 200" className={className} style={{ ...svgBase(shadow), ...style }} aria-hidden="true">
			<path
				filter="url(#clay-puff)"
				fill={color}
				d="M100 176 C60 146 18 116 18 72 C18 42 42 22 68 22 C84 22 94 30 100 42 C106 30 116 22 132 22 C158 22 182 42 182 72 C182 116 140 146 100 176 Z"
			/>
		</svg>
	)
}

export function ClaySquiggle({ className, style, color = '#a8ecd2', shadow = 'rgb(58 170 132 / 0.45)' }: OrnProps) {
	return (
		<svg viewBox="0 0 240 120" className={className} style={{ ...svgBase(shadow), ...style }} aria-hidden="true">
			<path
				filter="url(#clay-puff)"
				fill="none"
				stroke={color}
				strokeWidth="30"
				strokeLinecap="round"
				d="M24 70 C44 20 74 20 88 60 S132 100 148 60 S196 20 216 56"
			/>
		</svg>
	)
}

export function ClayCode({ className, style, color = '#aad8ff', shadow = 'rgb(70 142 222 / 0.45)' }: OrnProps) {
	return (
		<svg viewBox="0 0 220 160" className={className} style={{ ...svgBase(shadow), ...style }} aria-hidden="true">
			<g filter="url(#clay-puff)" fill="none" stroke={color} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round">
				<path d="M66 36 L24 80 L66 124" />
				<path d="M154 36 L196 80 L154 124" />
				<path d="M124 30 L96 130" />
			</g>
		</svg>
	)
}

export function ClayCloud({ className, style, color = '#fffaff', shadow = 'rgb(116 84 214 / 0.3)' }: OrnProps) {
	return (
		<svg viewBox="0 0 240 140" className={className} style={{ ...svgBase(shadow), ...style }} aria-hidden="true">
			<g filter="url(#clay-puff)" fill={color}>
				<circle cx="80" cy="82" r="44" />
				<circle cx="132" cy="60" r="50" />
				<circle cx="178" cy="88" r="36" />
				<rect x="46" y="84" width="160" height="40" rx="20" />
			</g>
		</svg>
	)
}

export function ClayArrow({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
			<path d="M7 17 L17 7" />
			<path d="M9 7 H17 V15" />
		</svg>
	)
}
