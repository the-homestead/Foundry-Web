// stores/theme.ts
"use client";

import { persistentAtom } from "@nanostores/persistent";
import type { ThemeAccent, ThemeBase, ThemeMode } from "@/lib/themes";

export interface ThemeState {
	mode: ThemeMode; // 🌗 new
	base: ThemeBase;
	accent: ThemeAccent | null;
}

export const $theme =
	typeof window !== "undefined"
		? persistentAtom<ThemeState>(
				"ui:theme",
				{
					mode: "dark",
					base: "mocha",
					accent: "mauve", // must match ACCENT_ALLOWED
				},
				{
					encode: JSON.stringify,
					decode: JSON.parse,
				}
			)
		: null;

export function setMode(mode: ThemeMode) {
	const current = $theme.get();
	$theme.set({ ...current, mode });
}

export function toggleMode() {
	const current = $theme.get();
	$theme.set({
		...current,
		mode: current.mode === "dark" ? "light" : "dark",
	});
}

export function setBaseTheme(base: ThemeBase) {
	const current = $theme.get();
	$theme.set({ ...current, base });
}

export function setAccent(accent: ThemeAccent | null) {
	const current = $theme.get();
	$theme.set({ ...current, accent });
}
