"use client"

import { useEffect, useState } from "react";

type DimensionData = {
	width: number,
	height: number,
	fake?: boolean
}

const getWindowDimensions = (): DimensionData => {
	if (!window) return { width: 1000, height: 1000, fake: true }
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height }
}

const useWindowDimensions = () => {
	const [dimensions, setDimensions] = useState<DimensionData>({ width: 1000, height: 1000, fake: true })

	useEffect(() => {
		setDimensions((d) => {
			if (d.fake) 
				return getWindowDimensions()
			return d
		})
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
