"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring, useTime, useTransform } from 'motion/react'

import { RefObject, useEffect, useRef } from "react";
import { frame } from 'motion';

const SIZE = 0.5;
const POINTS  = 20;
const LINE_WIDTH  = 0.005;

const Clip = () => {
	return (
		<svg width="0" height="0" className="opacity-0">
			<defs>
				<clipPath id="footergraphicmask" clipPathUnits="objectBoundingBox">

					{[...Array(POINTS + 1)].map((_, i) => {
						const top = i * SIZE / POINTS;
						const left = (POINTS - i) * SIZE / POINTS;
						return (
							<polygon points={`${top},${SIZE} ${top + LINE_WIDTH},${SIZE} ${SIZE},${left + LINE_WIDTH} ${SIZE},${left}`} key={i}/>
						)
					})}
					{[...Array(POINTS + 1)].map((_, i) => {
						const top = SIZE + i * SIZE / POINTS;
						const left = SIZE + (POINTS - i) * SIZE / POINTS;
						return (
							<polygon points={`${top},${SIZE} ${top + LINE_WIDTH},${SIZE} ${SIZE},${left + LINE_WIDTH} ${SIZE},${left}`} key={i}/>
						)
					})}
					{[...Array(POINTS + 1)].map((_, i) => {
						const top = SIZE - i * SIZE / POINTS;
						const left = SIZE + (POINTS - i) * SIZE / POINTS;
						return (
							<polygon points={`${top},${SIZE} ${top + LINE_WIDTH},${SIZE} ${SIZE},${left + LINE_WIDTH} ${SIZE},${left}`} key={i}/>
						)
					})}
					{[...Array(POINTS + 1)].map((_, i) => {
						const top = SIZE + i * SIZE / POINTS;
						const left = SIZE - (POINTS - i) * SIZE / POINTS;
						return (
							<polygon points={`${top},${SIZE} ${top + LINE_WIDTH},${SIZE} ${SIZE},${left + LINE_WIDTH} ${SIZE},${left}`} key={i}/>
						)
					})}
				</clipPath>
			</defs>
		</svg>
	)
}

const spring = { damping: 20, stiffness: 50, restDelta: 0.001 }

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
	const xPoint = useMotionValue(0)
	const yPoint = useMotionValue(0)
	const x = useSpring(xPoint, spring)
	const y = useSpring(yPoint, spring)

	useEffect(() => {
		if (!ref.current) return

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
				const element = ref.current!

				frame.read(() => {
						if (!element) return ;
						const rect = element.getBoundingClientRect(); 
						const center = {
							x: (rect.left + rect.right) / 2,
							y: (rect.top + rect.bottom) / 2,
						}
						xPoint.set(
								20 * (clientX - center.x) / window.innerWidth
						)
						yPoint.set(
								20 * (clientY - center.y) / window.innerHeight
						)
				})
		}

		window.addEventListener("pointermove", handlePointerMove)

		return () =>
				window.removeEventListener("pointermove", handlePointerMove)
	}, [])

	return { x, y }
}

export default function FooterGraphic() {

	const bgRef = useRef<HTMLDivElement | null>(null)
	const circleRef = useRef<HTMLDivElement | null>(null)

	const { x, y } = useFollowPointer(circleRef)

	const time = useTime()

	const currentTime = useTransform(() => time.get() % 5000);

	const blackRange = useTransform(
			currentTime,
			[0, 3350, 3500, 3650, 6000],
			[12, 12, 1, 12, 12],
			{ clamp: false }
	)
	const blueRange = useTransform(
			currentTime,
			[0, 3350, 3500, 3650, 6000],
			[21, 21, 2, 21, 21],
			{ clamp: false,  }
	)
	const purpleRange = useTransform(
			currentTime,
			[0, 3350, 3500, 3650, 6000],
			[53, 53, 49, 53, 53],
			{ clamp: false,  }
	)

	const background = useMotionTemplate`radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${blackRange}%, rgba(43,134,197,1) ${blueRange}%, rgba(43,134,197,0.75) 42%, rgba(65,7,142,0.70) ${purpleRange}%, rgba(61,31,134,0.6) 56%, rgba(0,0,0,1) 76%, rgba(0,0,0,1) 100%)`

	return (
		<>
			<Clip />
			<div className="h-full aspect-square overflow-hidden footer-graphic bg-transparent" ref={bgRef}>
			 <motion.div 
					ref={circleRef}
					style={{
						width: '100%',
						height: '100%',
						background,
						x, y
					}}

					className="footer-graphic-eye relative"
				/>
			</div>
		</>
	)
}
