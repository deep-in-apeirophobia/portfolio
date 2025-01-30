import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
	children?: React.ReactNode,
	className?: string,
}
type ChipProp<T extends ElementType> = BaseProps & {
	as?: T,
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseProps>

const Chip = <T extends ElementType>(_props: ChipProp<T>) => {
	const { as: Tag = 'div', children, className, ...props } = _props

	return (
		<Tag className={twMerge("text-xs px-3 py-1 bg-indigo-600/40 text-white inline rounded-full", className)} {...props}>
			{children}	
		</Tag>
	)
}

export default Chip;
