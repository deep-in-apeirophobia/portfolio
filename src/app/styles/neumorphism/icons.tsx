// Minimal line icons, drawn with the same 1.8px stroke so they read as engraved into the material.
type P = { className?: string }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export const MailIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<rect x="3" y="5" width="18" height="14" rx="3" />
		<path d="m4 7 8 6 8-6" />
	</svg>
)

export const GithubIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
	</svg>
)

export const LinkedinIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<rect x="3" y="3" width="18" height="18" rx="4" />
		<path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0v3" />
	</svg>
)

export const ArrowIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<path d="M7 17 17 7M9 7h8v8" />
	</svg>
)

export const DownIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<path d="M12 5v14M6 13l6 6 6-6" />
	</svg>
)

export const UpIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<path d="M12 19V5M6 11l6-6 6 6" />
	</svg>
)

export const GridIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<rect x="4" y="4" width="6.5" height="6.5" rx="2" />
		<rect x="13.5" y="4" width="6.5" height="6.5" rx="2" />
		<rect x="4" y="13.5" width="6.5" height="6.5" rx="2" />
		<rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" />
	</svg>
)

export const UserIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<circle cx="12" cy="8" r="4" />
		<path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5" />
	</svg>
)

export const LayersIcon = ({ className }: P) => (
	<svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
		<path d="m12 3 9 5-9 5-9-5 9-5Z" />
		<path d="m3 13 9 5 9-5" />
	</svg>
)
