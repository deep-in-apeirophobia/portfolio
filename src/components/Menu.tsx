'use client'
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link";
import { useState } from "react"

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div 
			layout
			className="
				absolute top-10 left-4 md:left-10 p-4
				rounded-full  border-solid bg-neutral-800  overflow-hidden
				flex flex-row items-center z-50 "
			initial="close"
			animate={open ? 'open' : 'close'}
		>

			<button onClick={() => setOpen(o => !o)} className="group">
				<motion.svg width="20" height="20" viewBox="0,0 40,40">
					<motion.line
						className="stroke-white stroke-[5px] group-hover:stroke-white/50 transition-all duration-300"
						variants={{
							open: {
								x1: 4,
								y1: 4,
								x2: 36,
								y2: 36,
							},
							close: {
								x1: 0,
								y1: 4,
								x2: 40,
								y2: 4,
							},
						}}
					/>
					<motion.line
						className="stroke-white stroke-[5px] group-hover:stroke-white/50 transition-all duration-300"
						variants={{
							open: {
								x1: 4,
								y1: 36,
								x2: 36,
								y2: 4,
							},
							close: {
								x1: 0,
								y1: 36,
								x2: 40,
								y2: 36,
							},
						}}
					/>
					<motion.line
						className="stroke-white stroke-[5px] group-hover:stroke-white/50 transition-all duration-300"
						variants={{
							open: {
								x1: 20,
								y1: 20,
								x2: 20,
								y2: 20,
							},
							close: {
								x1: 0,
								y1: 20,
								x2: 40,
								y2: 20,
							},
						}}
					/>
				</motion.svg>
			</button>

			<AnimatePresence >
				{open && (
					<motion.div 
						initial={{ width: 0}}
						animate={{ width: '288px'}}
						exit={{ width: 0}}
						className="flex gap-8 px-8"
					>
						<motion.div
							className="text-nowrap"
							initial={{ opacity: 0, x: -30, y: -5 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							exit={{ opacity: 0, x: 10, y: 5 }}
						>
							<Link href="/">
								Home
							</Link>
						</motion.div>
						<motion.div
							className="text-nowrap"
							initial={{ opacity: 0, x: -30, y: -5 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							exit={{ opacity: 0, x: 10, y: 5 }}
						>
							<Link href="/contact-me">
								Contact Me
							</Link>
						</motion.div>
						<motion.div
							className="text-nowrap"
							initial={{ opacity: 0, x: -30, y: -5 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							exit={{ opacity: 0, x: 10, y: 5 }}
						>
							<Link href="/about">
								About
							</Link>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default Menu;
