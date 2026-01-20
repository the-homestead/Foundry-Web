import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Foundry",
		template: "%s • Foundry",
	},

	description:
		"Foundry is a modern, global mod repository for every game. Upload, version, and discover mods for Minecraft, Hytale, Skyrim SE, Fallout 4, and beyond.",

	applicationName: "Foundry",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",

	keywords: [
		"Foundry",
		"mods",
		"mod repository",
		"Minecraft mods",
		"Hytale mods",
		"Skyrim mods",
		"Fallout 4 mods",
		"game mods",
		"mod hosting",
		"mod distribution",
		"modding platform",
	],

	authors: [{ name: "Homestead Systems" }],
	creator: "Homestead Systems",
	publisher: "Homestead Systems",

	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},

	/* ---------------- Icons ---------------- */

	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{ url: "/favicon.ico", type: "image/x-icon" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		shortcut: "/favicon.ico",
	},

	/* ---------------- PWA ---------------- */

	manifest: "/site.webmanifest",

	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],

	/* ---------------- Open Graph ---------------- */

	openGraph: {
		type: "website",
		siteName: "Foundry",
		title: "Foundry — A Global Home for Mods",
		description:
			"Upload, version, and discover mods for Minecraft, Hytale, Skyrim SE, Fallout 4, and beyond. Foundry is the next-gen mod repository.",
		url: "https://foundry.homestead.systems", // change when live
		images: [
			{
				url: "/foundry.png", // add this (1200x630)
				width: 1200,
				height: 630,
				alt: "Foundry — A Global Home for Mods",
			},
		],
	},

	/* ---------------- Twitter ---------------- */

	twitter: {
		card: "summary_large_image",
		title: "Foundry — A Global Home for Mods",
		description:
			"The modern mod repository for every game. Starting with Minecraft, Hytale, Skyrim SE, and Fallout 4.",
		images: ["/foundry.png"],
		creator: "@ItzDabbzz", // optional
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
