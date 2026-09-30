import Link from "next/link";
import { DESIGN_STYLES, STYLE_SETS } from "./registry";

export const metadata = {
	title: "Design Styles · Atrin's Portfolio",
	description: "The portfolio redesigned in twenty different design styles and aesthetics.",
};

export default function StylesIndex() {
	return (
		<main className="min-h-screen bg-stone-950 text-neutral-100 px-6 py-16 md:px-16">
			<div className="mx-auto max-w-5xl">
				<Link href="/" className="text-sm text-neutral-400 hover:text-white">← Back to the portfolio</Link>
				<h1 className="mt-6 text-4xl md:text-6xl font-bold [font-family:var(--font-space-grotesk)]">Design Styles</h1>
				<p className="mt-4 max-w-2xl text-lg text-neutral-400">
					The same portfolio, redesigned {DESIGN_STYLES.length} times. Each page is a study of one design style or aesthetic.
				</p>
				{STYLE_SETS.map(set => (
					<section key={set.id} className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold [font-family:var(--font-space-grotesk)]">{set.title}</h2>
						<p className="mt-2 text-neutral-400">{set.intro}</p>
						<ol className="mt-8 grid gap-4 md:grid-cols-2">
							{DESIGN_STYLES.filter(style => style.set === set.id).map((style, i) => (
								<li key={style.slug}>
									<Link
										href={`/styles/${style.slug}`}
										className="block h-full rounded-lg border border-neutral-800 p-6 transition-colors hover:border-neutral-500 hover:bg-neutral-900"
									>
										<span className="text-sm text-neutral-500">{String(i + 1).padStart(2, '0')} · {style.era}</span>
										<h3 className="mt-2 text-2xl font-semibold [font-family:var(--font-space-grotesk)]">{style.name}</h3>
										<p className="mt-2 text-neutral-400">{style.tagline}</p>
									</Link>
								</li>
							))}
						</ol>
					</section>
				))}
			</div>
		</main>
	);
}
