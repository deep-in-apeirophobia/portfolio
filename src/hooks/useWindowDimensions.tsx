"use client"

import { useEffect, useState } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height }
}

const useWindowDimensions = () => {
	const [dimensions, setDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		const listener = (e: UIEvent) => {
		}

		window.addEventListener('resize', listener)

		return () => {
			window.removeEventListener('resize', listener)
		}
	}, [])

	return dimensions
}

export default useWindowDimensions;
