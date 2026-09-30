import s from './y2k.module.css'

/* Decorative Frutiger Aero pieces, all CSS/SVG. Every element here is aria-hidden. */

type BubbleSpec = { x: string, y: string, size: number, delay?: number }

export function Bubbles({ items }: { items: BubbleSpec[] }) {
	return (
		<div className={s.bubbleLayer} aria-hidden="true">
			{items.map((b, i) => (
				<span
					key={i}
					className={s.bubble}
					style={{ left: b.x, top: b.y, width: b.size, height: b.size, animationDelay: `${b.delay ?? i * -1.7}s` }}
				/>
			))}
		</div>
	)
}

export function Aurora({ className = '' }: { className?: string }) {
	return (
		<svg className={`${s.aurora} ${className}`} viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
			<defs>
				<linearGradient id="y2kSwooshA" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#b6ff3b" stopOpacity="0" />
					<stop offset=".35" stopColor="#b6ff3b" stopOpacity=".75" />
					<stop offset=".7" stopColor="#3fe0c8" stopOpacity=".55" />
					<stop offset="1" stopColor="#3fb6ff" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="y2kSwooshB" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#ffffff" stopOpacity="0" />
					<stop offset=".5" stopColor="#ffffff" stopOpacity=".9" />
					<stop offset="1" stopColor="#ffffff" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="y2kSwooshC" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#1fb3ff" stopOpacity="0" />
					<stop offset=".45" stopColor="#1fb3ff" stopOpacity=".45" />
					<stop offset="1" stopColor="#7ef0ff" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path d="M-40 430 C 280 300, 560 520, 900 360 S 1340 220, 1500 300 L 1500 350 C 1320 290, 1120 420, 900 430 S 300 400, -40 500 Z" fill="url(#y2kSwooshC)" />
			<path d="M-40 470 C 300 340, 620 520, 960 390 S 1360 260, 1500 320 L 1500 336 C 1350 290, 1160 420, 960 412 S 320 380, -40 492 Z" fill="url(#y2kSwooshA)" />
			<path d="M-40 452 C 320 330, 640 500, 980 376 S 1380 250, 1500 306" fill="none" stroke="url(#y2kSwooshB)" strokeWidth="3" />
			<path d="M-40 500 C 360 380, 660 540, 1000 420 S 1380 300, 1500 350" fill="none" stroke="url(#y2kSwooshB)" strokeWidth="1.5" opacity=".7" />
		</svg>
	)
}

export function Hills({ className = '' }: { className?: string }) {
	return (
		<svg className={`${s.hills} ${className}`} viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
			<defs>
				<linearGradient id="y2kHillBack" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stopColor="#9be84a" />
					<stop offset="1" stopColor="#3f9d1c" />
				</linearGradient>
				<linearGradient id="y2kHillFront" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0" stopColor="#c6ff5e" />
					<stop offset=".25" stopColor="#7fd62a" />
					<stop offset="1" stopColor="#2f8a12" />
				</linearGradient>
				<linearGradient id="y2kHillShine" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#fff" stopOpacity="0" />
					<stop offset=".4" stopColor="#fff" stopOpacity=".9" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path d="M0 120 C 260 40, 520 60, 760 110 S 1200 60, 1440 90 L1440 220 L0 220 Z" fill="url(#y2kHillBack)" />
			<path d="M0 170 C 300 90, 640 100, 900 140 S 1300 120, 1440 110 L1440 220 L0 220 Z" fill="url(#y2kHillFront)" />
			<path d="M0 170 C 300 90, 640 100, 900 140 S 1300 120, 1440 110" fill="none" stroke="url(#y2kHillShine)" strokeWidth="3" />
		</svg>
	)
}

export function LensFlare() {
	return (
		<div className={s.flare} aria-hidden="true">
			<span className={s.flareSun} />
			<span className={s.flareRing} style={{ left: '38%', top: '44%', width: 70, height: 70 }} />
			<span className={s.flareRing} style={{ left: '52%', top: '62%', width: 30, height: 30 }} />
			<span className={s.flareRing} style={{ left: '63%', top: '76%', width: 110, height: 110 }} />
		</div>
	)
}

type IconName = 'user' | 'folder' | 'mail' | 'code' | 'link' | 'globe' | 'arrow' | 'grid' | 'home'

const PATHS: Record<IconName, React.ReactNode> = {
	user: <><circle cx="12" cy="8.5" r="4" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6z" /></>,
	folder: <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />,
	mail: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3.5 7l8.5 6.5L20.5 7" fill="none" stroke="rgba(0,60,120,.55)" strokeWidth="1.6" /></>,
	code: <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />,
	link: <path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />,
	globe: <><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17" fill="none" stroke="currentColor" strokeWidth="1.6" /></>,
	arrow: <path d="M5 12h12M12 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />,
	grid: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>,
	home: <path d="M3.5 11.5L12 4l8.5 7.5V20a1 1 0 0 1-1 1H15v-6H9v6H4.5a1 1 0 0 1-1-1z" />,
}

export function Icon({ name, className = '' }: { name: IconName, className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
			{PATHS[name]}
		</svg>
	)
}

export type OrbColor = 'blue' | 'green' | 'orange' | 'teal' | 'violet'

/* A glossy "jelly" orb icon like the Vista Welcome Center / XP control panel icons. */
export function Orb({ icon, color = 'blue', size = 'md' }: { icon: IconName, color?: OrbColor, size?: 'sm' | 'md' | 'lg' }) {
	return (
		<span className={`${s.orb} ${s[`orb_${color}`]} ${s[`orb_${size}`]}`} aria-hidden="true">
			<Icon name={icon} className={s.orbIcon} />
		</span>
	)
}
