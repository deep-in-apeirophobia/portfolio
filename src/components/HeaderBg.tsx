"use client"

import useWindowDimensions from "@/hooks/useWindowDimensions"
import { useMemo, useRef, } from "react";

import { motion } from 'motion/react'
import { useFollowPointer } from "@/hooks/useFollowPointer";

export default function HeaderBG() {
	const dimensions = useWindowDimensions();

	const bgRef = useRef<HTMLDivElement | null>(null)
	const circleRef = useRef<HTMLDivElement | null>(null)

	const circleRadius = useMemo(() => Math.min(dimensions.height, dimensions.width) / 5, [dimensions])
	const { x, y } = useFollowPointer(circleRef, bgRef)

	if (dimensions.fake) return <></>

	return (
		<>
			<svg width="0" height="0" className="opacity-0">
				<defs>
					<clipPath id="headerbgmask">

						{[...Array(21)].map((_, i) => {
							const top = 0.05 * i * dimensions.height;
							const left = 0.05 * (20 - i) * dimensions.height;
							return (
								<polygon points={`${dimensions.width - top},0 ${dimensions.width - top + 7},0 ${dimensions.width},${left + 7} ${dimensions.width},${left}`} key={i}/>
							)
						})}
						{[...Array(21)].map((_, i) => {
							const top = 0.05 * i * dimensions.height;
							const left = 0.05 * (20 - i) * dimensions.height;
							return (
								<polygon points={`${top},${dimensions.height} ${top + 7},${dimensions.height} 0,${dimensions.height - left + 7} 0,${dimensions.height - left}`} key={i}/>
							)
						})}
					</clipPath>
				</defs>
			</svg>
			<div className="absolute inset-0 overflow-hidden header-bg bg-gradient-to-b from-neutral-700 to-80% md:to-90% to-stone-950" ref={bgRef}>
			 <motion.div 
					ref={circleRef}
					style={{
						width: circleRadius,
						height: circleRadius,
						x, y
					}}

					className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute
										 rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 "
				/>
			</div>
		</>
	)
}
