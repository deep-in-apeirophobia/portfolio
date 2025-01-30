"use client"

import { frame } from "motion"
import { useMotionValue, useScroll, useSpring } from "motion/react"
import { RefObject, useEffect } from "react"

const spring = { damping: 30, stiffness: 90, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>, bgRef: RefObject<HTMLDivElement | null>) {
	const xPoint = useMotionValue(0)
	const yPoint = useMotionValue(0)
	const x = useSpring(xPoint, spring)
	const y = useSpring(yPoint, spring)
	const { scrollY } = useScroll()

	useEffect(() => {
		if (!ref.current) return

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
				const element = ref.current

				frame.read(() => {
						if (!element) return ;
						xPoint.set(
								clientX - element.offsetLeft - element.offsetWidth / 2
						)
						yPoint.set(
								Math.min(
									clientY - element.offsetTop - element.offsetHeight / 2 + scrollY.get(),
									bgRef.current!.getBoundingClientRect().height - element.offsetWidth / 2
								),
						)
				})
		}

		window.addEventListener("pointermove", handlePointerMove)

		return () =>
				window.removeEventListener("pointermove", handlePointerMove)
	}, [])

	return { x, y }
}

