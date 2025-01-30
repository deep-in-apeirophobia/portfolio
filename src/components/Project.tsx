"use client"

import type { Project } from '@/types/project'
import { motion, useMotionValueEvent, } from 'motion/react'
import { useRef, useState } from "react";
// import GlassPhotoScene from "./Glass";
import { useScroll } from "motion/react";
import Chip from './chip';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// const GlassPhotoScene = dynamic(() => import("./Glass"), { ssr: false });

export function Project(props: { project: Project }) {
	const { project } = props;

	const [animation, setAnimation] = useState('hide')

	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "end center"],
	})

	useMotionValueEvent(scrollYProgress, 'change', (v) => {
		if (v > 0) {
			setAnimation('show')
		}
	})
	// const [mounted, setMounted] = useState(false);
	//
 //  useEffect(() => {
 //    setMounted(true);
 //  }, []);


	return (
		<div ref={ref} className="group flex flex-col md:flex-row md:odd:flex-row-reverse">
			<div className="w-full md:w-[600px] aspect-video px-8 py-4">
				{/*mounted && <GlassPhotoScene imageUrl={project.thumbnail}/>*/}
				<div className="relative h-full w-full overflow-hidden [&>img]:rounded-lg">
					<Image src={project.thumbnail} alt={project.name}  fill
					sizes="(max-width: 768px) 400px, (max-width: 1200px) 600px, 800px"/>
				</div>
			</div>

			<motion.div initial="hide" animate={animation} className="px-8 md:px-0 md:max-w-[40%] space-y-4 py-8" variants={{
				hide: {},
				show: {
					transition: {
						staggerChildren: 0.25
					}
				},
			}}>
				<motion.h4 className="text-4xl [font-family:var(--font-space-grotesk)] group-odd:text-right" variants={{
					hide: {},
					show: {
						transition: {
							staggerChildren: 0.1
						}
					},
				}}>
					{project.name.split('').map((c, i) => (
						<motion.span key={i} variants={{
							hide: { opacity: 0 },
							show: { opacity: 1 },
						}}>{c}</motion.span>
					))}
				</motion.h4>

				<div>
					{project.description.split('\n').map((line, i) => (
						<motion.p key={i} className="text-base text-justify [font-family:var(--font-space-grotesk)] group-odd:rtl" variants={{
							hide: {},
							show: {
								transition: {
									staggerChildren: 0.01
								}
							},
						}}>
							{line.split('').map((c, i) => (
								<motion.span key={i} variants={{
									hide: { opacity: 0 },
									show: { opacity: 1 },
								}}>{c}</motion.span>
							))}
						</motion.p>
					))}
				</div>

				<motion.div className="flex items-center gap-2 flex-wrap group-odd:flex-row-reverse" variants={{
					hide: {},
					show: {
						transition: {
							staggerChildren: 0.1
						}
					},
				}}>
					{project.stack.map((item) => (
						<motion.span className="text-sm [font-family:var(--font-space-grotesk)]" key={item} variants={{
							hide: { opacity: 0, y: -20, },
							show: { opacity: 1, y: 0, }
						}}>
							<Chip className="text-nowrap">
								{item}
							</Chip>
						</motion.span>
					))}

				</motion.div>

				{project.link && (
					<motion.div className="group-even:text-right group-odd:text-left">
						<motion.a href={project.link} target="_blank" className="text-sm [font-family:var(--font-space-grotesk)] text-blue-600" variants={{
							hide: {},
							show: {
								transition: {
									staggerChildren: 0.03
								}
							},
						}}>
							{'Visit Website'.split('').map((c, i) => (
								<motion.span key={i} variants={{
									hide: { opacity: 0 },
									show: { opacity: 1 },
								}}>{c}</motion.span>
							))}
						</motion.a>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}
