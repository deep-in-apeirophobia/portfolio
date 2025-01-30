"use client"

import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { useState } from "react"

export default function ProfileBadge() {
	const { scrollY } = useScroll()
	const [state, setState] = useState<'open' | 'closed'>('open')

	useMotionValueEvent(scrollY, "change", (current) => {
		
		setState(current > 15 ? "closed" : "open")
	})

	return (
		<div
			className="
				rounded-full  group 
				fixed bottom-10 right-10 overflow-hidden
				 z-10 p-1"
		>
			<div className="
				w-full h-full
				bg-gradient-to-r from-indigo-500 to-teal-400 
				absolute -left-full -top-5 
				group-hover:left-full group-hover:top-5 transition-all duration-700 -z-10">
			</div>

			<motion.button 
				initial="open" variants={{ 
					clsoed: {}, 
					open: {}
				}} animate={state}
				layout
				className="
					rounded-full  border-solid bg-neutral-900  overflow-hidden
					flex flex-row items-center z-20 "
			>

				<AnimatePresence >
					{state === 'open' && (
						<motion.span 
							initial={{ opacity: 0, x: -30, width: 0}}
							animate={{ opacity: 1, x: 0, width: '14ch'}}
							exit={{ opacity: 0, x: 10, width: 0}}
							className="px-4 overflow-hidden text-nowrap"
						>
							Hi, I&apos;m Atrin!
						</motion.span>
					)}
				</AnimatePresence>

				<motion.div className="overflow-hidden rounded-full w-[36px] h-[36px]">
					<Image 
						src='/profile-small.jpg'
						alt="This is me! Atrin!"
						width={36}
						height={36}
					/>
				</motion.div>
			</motion.button>
		</div>
	)
}
