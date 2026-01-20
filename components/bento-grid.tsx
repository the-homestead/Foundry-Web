"use client";

import createGlobe from "cobe";
import { Download, Flame, Shield } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import type React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Mock API Data ---------------- */

const trendingMods = [
	{
		id: "1",
		name: "Create+",
		author: "Railfunner",
		game: "Minecraft",
		downloads: 4_823_112,
		icon: "/logos/Minecraft/minecraft.svg",
	},
	{
		id: "2",
		name: "Better Biomes",
		author: "LunaDev",
		game: "Hytale",
		downloads: 913_221,
		icon: "/logos/Hytale/Hytale-Logo-Illustrated-HOnly.png",
	},
	{
		id: "3",
		name: "Nordic Armors",
		author: "Skjor",
		game: "Skyrim SE",
		downloads: 3_029_187,
		icon: "/logos/SkyrimSE/skyrim.png",
	},
	{
		id: "4",
		name: "Wasteland Redux",
		author: "Ashfall",
		game: "Fallout 4",
		downloads: 1_892_211,
		icon: "/logos/Fallout4/ae-hero-logo.png",
	},
];

/* ---------------- Section ---------------- */

export function FeaturesSection() {
	const features = [
		{
			title: "Versioned Mod Hosting",
			description:
				"Upload multiple versions, manage changelogs, and target specific game releases and loaders.",
			skeleton: <SkeletonVersions />,
			className:
				"col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
		},
		{
			title: "Fast Global Downloads",
			description:
				"Mods are delivered through a global CDN for blazing-fast downloads worldwide.",
			skeleton: <SkeletonDownloads />,
			className:
				"border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
		},
		{
			title: "Discover Trending Mods",
			description:
				"Browse curated collections and trending uploads across all supported games.",
			skeleton: <SkeletonDiscover />,
			className:
				"col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
		},
		{
			title: "Secure & Moderated",
			description:
				"All uploads are scanned and moderated to keep creators and players safe.",
			skeleton: <SkeletonSecurity />,
			className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		},
	];

	return (
		<div className="relative z-20 mx-auto max-w-7xl py-16">
			{/* Trending Mods */}
			<div className="mb-16 px-6">
				<div className="mb-6 flex items-center gap-2">
					<Flame className="h-5 w-5 text-primary" />
					<h3 className="font-semibold text-xl tracking-tight">
						Trending Mods
					</h3>
				</div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{trendingMods.map((mod) => (
						<motion.div
							className="group flex flex-col gap-3 rounded-xl border bg-background p-4 shadow-sm transition-colors hover:bg-muted/40"
							key={mod.id}
							whileHover={{ y: -4, scale: 1.02 }}
						>
							<div className="flex items-center gap-3">
								<Image
									alt={mod.name}
									className="rounded-md"
									height={48}
									src={mod.icon}
									width={48}
								/>
								<div className="min-w-0">
									<p className="truncate font-medium text-sm">
										{mod.name}
									</p>
									<p className="truncate text-muted-foreground text-xs">
										by {mod.author}
									</p>
								</div>
							</div>

							<div className="mt-auto flex items-center justify-between text-muted-foreground text-xs">
								<span>{mod.game}</span>
								<span>{mod.downloads.toLocaleString()} dl</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Headline */}
			<div className="px-8">
				<h4 className="mx-auto max-w-5xl text-center font-bold text-3xl tracking-tight lg:text-5xl dark:text-white">
					A global home for every mod
				</h4>

				<p className="mx-auto my-4 max-w-2xl text-center text-muted-foreground text-sm lg:text-base">
					Foundry supports all games — starting with Hytale,
					Minecraft, Skyrim SE, and Fallout 4.
				</p>
			</div>

			{/* Bento Grid */}
			<div className="relative mt-12">
				<div className="grid grid-cols-1 rounded-xl border bg-background lg:grid-cols-6 dark:border-neutral-800">
					{features.map((feature) => (
						<FeatureCard
							className={feature.className}
							key={feature.title}
						>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>
								{feature.description}
							</FeatureDescription>
							<div className="h-full w-full">
								{feature.skeleton}
							</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

/* ---------------- Shared UI ---------------- */

const FeatureCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative flex flex-col gap-3 overflow-hidden p-6 sm:p-8",
				className
			)}
		>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="font-semibold text-xl tracking-tight md:text-2xl">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className="max-w-sm text-muted-foreground text-sm md:text-base">
			{children}
		</p>
	);
};

/* ---------------- Skeletons ---------------- */

const SkeletonVersions = () => {
	const versions = [
		{
			version: "v1.4.2",
			game: "Minecraft 1.20.1",
			loader: "Fabric",
			notes: "Improved performance and fixed chunk loading bug.",
			latest: true,
		},
		{
			version: "v1.3.9",
			game: "Minecraft 1.19.4",
			loader: "Fabric",
			notes: "Added config options and new recipes.",
			latest: false,
		},
		{
			version: "v1.2.0",
			game: "Minecraft 1.18.2",
			loader: "Forge",
			notes: "Initial public release.",
			latest: false,
		},
	];

	return (
		<div className="relative mt-4 flex h-full flex-col gap-4 rounded-xl border bg-gradient-to-br from-muted/40 to-muted/10 p-4 shadow-sm">
			{/* Header */}
			<div className="flex items-center gap-3">
				<Image
					alt="Create+"
					className="rounded-md"
					height={36}
					src="/foundry.png"
					width={36}
				/>
				<div className="min-w-0">
					<p className="truncate font-semibold text-sm">Create+</p>
					<p className="text-muted-foreground text-xs">
						by Railgunner
					</p>
				</div>

				<span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 font-medium text-[11px] text-primary">
					Latest
				</span>
			</div>

			{/* Versions */}
			<div className="flex flex-col gap-2">
				{versions.map((v) => (
					<div
						className={cn(
							"group flex flex-col gap-2 rounded-lg border bg-background p-3 transition-colors hover:bg-muted/40",
							v.latest && "border-primary/40 bg-primary/5"
						)}
						key={v.version}
					>
						<div className="flex items-center gap-2 text-sm">
							<span className="font-medium">{v.version}</span>

							{v.latest && (
								<span className="rounded-full bg-primary px-2 py-0.5 font-semibold text-[10px] text-primary-foreground">
									Latest
								</span>
							)}

							<span className="ml-auto text-muted-foreground text-xs">
								{v.game}
							</span>
						</div>

						<div className="flex items-center gap-2 text-xs">
							<span className="rounded-full border bg-muted/40 px-2 py-0.5">
								{v.loader}
							</span>
							<span className="truncate text-muted-foreground">
								{v.notes}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const SkeletonDownloads = () => {
	return (
		<div className="relative mt-4 flex h-full items-center justify-center overflow-hidden rounded-xl border bg-muted/30 p-6">
			{/* Stat overlay */}
			<div className="relative z-10 flex flex-col items-center gap-2 rounded-xl bg-background/80 px-4 py-3 backdrop-blur">
				<Download className="h-6 w-6 text-primary" />
				<p className="font-bold text-2xl">9,824,331</p>
				<p className="text-muted-foreground text-xs">
					downloads served globally
				</p>
			</div>

			{/* Globe */}
			<Globe className="absolute -right-24 -bottom-32 h-[420px] w-[420px] opacity-80" />
		</div>
	);
};

const SkeletonDiscover = () => {
	const games = ["Hytale", "Minecraft", "Skyrim SE", "Fallout 4"];

	return (
		<div className="relative mt-4 flex flex-wrap gap-2">
			{games.map((game) => (
				<motion.div
					className="rounded-full border bg-muted/40 px-4 py-1.5 font-medium text-xs"
					key={game}
					whileHover={{ y: -3, scale: 1.05 }}
				>
					{game}
				</motion.div>
			))}
		</div>
	);
};

const SkeletonSecurity = () => {
	return (
		<div className="relative mt-4 flex h-full flex-col items-center justify-center gap-4 rounded-xl border bg-muted/30 p-6">
			<Shield className="h-10 w-10 text-primary" />
			<p className="font-medium text-sm">Malware scanning enabled</p>
			<p className="max-w-xs text-center text-muted-foreground text-xs">
				All uploads are automatically scanned and reviewed before public
				release.
			</p>
		</div>
	);
};

/* ---------------- Globe ---------------- */

export const Globe = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) {
			return;
		}

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16_000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [37.7595, -122.4367], size: 0.05 },
				{ location: [40.7128, -74.006], size: 0.08 },
				{ location: [51.5074, -0.1278], size: 0.06 },
				{ location: [35.6895, 139.6917], size: 0.06 },
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => globe.destroy();
	}, []);

	return (
		<canvas
			className={className}
			ref={canvasRef}
			style={{
				width: 600,
				height: 600,
				maxWidth: "100%",
				aspectRatio: 1,
			}}
		/>
	);
};
