"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function AnimatedNumber({ value }: { value: number }) {
	const motionValue = useMotionValue(0);
	const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });

	// Transform the numeric spring into a formatted string
	const formatted = useTransform(spring, (latest: number) =>
		Intl.NumberFormat("en-US", {
			notation: "compact",
			maximumFractionDigits: 1,
		}).format(Math.round(latest))
	);

	useEffect(() => {
		motionValue.set(value);
	}, [value, motionValue]);

	return <motion.span>{formatted}</motion.span>;
}

export function TrendingModCard({
	mod,
}: {
	mod: {
		name: string;
		author: string;
		game: string;
		downloads: number;
		image: string;
	};
}) {
	return (
		<motion.div
			className="h-full"
			transition={{ type: "spring", stiffness: 260, damping: 18 }}
			whileHover={{ y: -6, scale: 1.02 }}
		>
			<Card className="h-full overflow-hidden rounded-xl border bg-background/80 backdrop-blur">
				<CardContent className="flex h-full flex-col gap-4 p-4">
					{/* Header */}
					<div className="flex items-center gap-3">
						<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border bg-muted">
							<Image
								alt={mod.game}
								className="object-contain p-1"
								fill
								src={mod.image}
							/>
						</div>

						<div className="min-w-0">
							<p className="truncate font-semibold text-sm">
								{mod.name}
							</p>
							<p className="truncate text-muted-foreground text-xs">
								by {mod.author}
							</p>
						</div>

						<Badge
							className="ml-auto text-[10px]"
							variant="secondary"
						>
							{mod.game}
						</Badge>
					</div>

					{/* Divider */}
					<div className="h-px w-full bg-border" />

					{/* Stats */}
					<div className="flex items-end justify-between">
						<div>
							<p className="font-bold text-lg leading-none">
								<AnimatedNumber value={mod.downloads} />
							</p>
							<p className="text-muted-foreground text-xs">
								downloads
							</p>
						</div>

						<Badge
							className="rounded-full px-3 py-1 text-xs"
							variant="outline"
						>
							Trending
						</Badge>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
