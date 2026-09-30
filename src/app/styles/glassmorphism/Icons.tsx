// Minimal SF-Symbols-like line icons (2px stroke, rounded caps) drawn inline.
type P = { className?: string }

const base = {
	width: 20,
	height: 20,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
	'aria-hidden': true,
	focusable: false,
}

export const ChevronLeft = ({ className }: P) => (
	<svg {...base} className={className}><path d="M15 5l-7 7 7 7" /></svg>
)

export const ChevronRight = ({ className }: P) => (
	<svg {...base} className={className}><path d="M9 5l7 7-7 7" /></svg>
)

export const ArrowUpRight = ({ className }: P) => (
	<svg {...base} className={className}><path d="M7 17L17 7M8 7h9v9" /></svg>
)

export const ArrowDown = ({ className }: P) => (
	<svg {...base} className={className}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)

export const Envelope = ({ className }: P) => (
	<svg {...base} className={className}>
		<rect x="3" y="5" width="18" height="14" rx="3" />
		<path d="M4 7l8 6 8-6" />
	</svg>
)

export const GitHub = ({ className }: P) => (
	<svg width={20} height={20} viewBox="0 0 24 24" aria-hidden focusable={false} className={className} fill="currentColor">
		<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
	</svg>
)

export const LinkedIn = ({ className }: P) => (
	<svg width={20} height={20} viewBox="0 0 24 24" aria-hidden focusable={false} className={className} fill="currentColor">
		<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zM9.5 9.75h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.81c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.89h-4v-11z" />
	</svg>
)

export const Sparkle = ({ className }: P) => (
	<svg {...base} className={className}>
		<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
		<path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z" />
	</svg>
)
