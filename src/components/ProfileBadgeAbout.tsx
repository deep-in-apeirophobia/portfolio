"use client"

import { motion, } from "motion/react"
import Image from "next/image"

export default function ProfileBadgeAbout() {


	return (
		<div
			className="
				rounded-full  group 
				overflow-hidden relative
				 md:p-4 min-h-[100px]"
		>
			<div className="
				w-full h-full
				bg-gradient-to-r from-indigo-500 to-teal-400 
				absolute -left-full -top-5 
				group-hover:left-full group-hover:top-5 transition-all duration-700 -z-10">
			</div>

			<motion.div 
				layout
				className="
					rounded-full  border-solid bg-neutral-900  overflow-hidden
					flex flex-row items-center z-20 text-3xl md:text-5xl"
			>


				<motion.div className="overflow-hidden rounded-full w-[100px] h-[100px]">
					<Image 
						src='/profile-small.jpg'
						alt="This is me! Atrin!"
						width={100}
						height={100}
					/>
				</motion.div>
				<motion.span 
					initial={{ opacity: 0, x: -30, width: 0}}
					animate={{ opacity: 1, x: 0, width: '14ch'}}
					exit={{ opacity: 0, x: 10, width: 0}}
					className="px-4 overflow-hidden text-nowrap"
				>
					Hi, I&apos;m Atrin!
				</motion.span>
			</motion.div>
		</div>
	)
}
