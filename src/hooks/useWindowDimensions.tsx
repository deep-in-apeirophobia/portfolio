"use client"

import { useEffect, useState } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height }
}

const useWindowDimensions = () => {
	const [dimensions, setDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		const listener = () => {
			setDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', listener)

		return () => {
			window.removeEventListener('resize', listener)
		}
	}, [])

	return dimensions
}

export default useWindowDimensions;
