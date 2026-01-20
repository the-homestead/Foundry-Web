"use client";

import { motion } from "framer-motion";

export function FadeUp({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 24 }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
				delay,
			}}
		>
			{children}
		</motion.div>
	);
}
