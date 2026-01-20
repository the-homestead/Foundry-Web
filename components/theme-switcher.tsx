// components/theme-switcher.tsx
"use client";

import { useStore } from "@nanostores/react";
import { Check, Moon, Sun } from "lucide-react";
import { BASE_THEMES, CATPPUCCIN_ACCENTS } from "@/lib/themes";
import {
	$theme,
	setAccent,
	setBaseTheme,
	setMode,
	toggleMode,
} from "../stores/theme";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "./ui/context-menu";

export default function ThemeSwitcher({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useStore($theme);

	const isCatppuccin =
		theme.base === "latte" ||
		theme.base === "frappe" ||
		theme.base === "macchiato" ||
		theme.base === "mocha";

	return (
		<ContextMenu>
			<ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

			<ContextMenuContent className="w-60">
				{/* 🌗 Mode toggle (pinned) */}
				<ContextMenuLabel>Appearance</ContextMenuLabel>

				<ContextMenuItem onClick={() => setMode("light")}>
					<Sun className="mr-2 h-4 w-4" />
					<span className="flex-1">Light</span>
					{theme.mode === "light" && <Check className="h-4 w-4" />}
				</ContextMenuItem>

				<ContextMenuItem onClick={() => setMode("dark")}>
					<Moon className="mr-2 h-4 w-4" />
					<span className="flex-1">Dark</span>
					{theme.mode === "dark" && <Check className="h-4 w-4" />}
				</ContextMenuItem>

				{/* Optional: quick toggle */}
				<ContextMenuItem onClick={toggleMode}>
					<span className="flex-1">Toggle mode</span>
				</ContextMenuItem>

				<ContextMenuSeparator />

				{/* 🎨 Base themes */}
				<ContextMenuLabel>Theme Pack</ContextMenuLabel>

				<ContextMenuItem onClick={() => setBaseTheme("default")}>
					<span className="flex-1">Default</span>
					{theme.base === "default" && <Check className="h-4 w-4" />}
				</ContextMenuItem>

				{BASE_THEMES.map((t) => (
					<ContextMenuItem
						key={t.value}
						onClick={() => setBaseTheme(t.value)}
					>
						<span className="flex-1">{t.label}</span>
						{theme.base === t.value && (
							<Check className="h-4 w-4" />
						)}
					</ContextMenuItem>
				))}

				{/* 🌈 Accent submenu */}
				{isCatppuccin && (
					<>
						<ContextMenuSeparator />

						<ContextMenuSub>
							<ContextMenuSubTrigger>
								Accent Color
							</ContextMenuSubTrigger>
							<ContextMenuSubContent className="w-48">
								<ContextMenuItem
									onClick={() => setAccent(null)}
								>
									<span className="flex-1">Default</span>
									{!theme.accent && (
										<Check className="h-4 w-4" />
									)}
								</ContextMenuItem>

								{CATPPUCCIN_ACCENTS.map((accent) => (
									<ContextMenuItem
										key={accent}
										onClick={() => setAccent(accent)}
									>
										<span className="flex-1 capitalize">
											{accent}
										</span>
										{theme.accent === accent && (
											<Check className="h-4 w-4" />
										)}
									</ContextMenuItem>
								))}
							</ContextMenuSubContent>
						</ContextMenuSub>
					</>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
