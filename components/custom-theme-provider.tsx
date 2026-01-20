"use client";

import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { $theme } from "../stores/theme";

const ACCENT_ALLOWED = ["latte", "frappe", "macchiato", "mocha"];

export function CustomThemeProvider() {
	const theme = useStore($theme);

	if (!theme) {
		return null;
	}

	// biome-ignore lint/correctness/useHookAtTopLevel: Throws error for no reason
	useEffect(() => {
		const root = document.documentElement;

		// 1️⃣ toggle dark/light globally
		root.classList.toggle("dark", theme.mode === "dark");
		root.classList.toggle("light", theme.mode === "light");

		// 2️⃣ remove any existing theme classes
		const THEME_PREFIXES = [
			"latte",
			"frappe",
			"macchiato",
			"mocha",
			"dracula",
			"fuchsia",
			"ripe",
			"one",
		];
		for (const cls of [...root.classList]) {
			if (
				THEME_PREFIXES.some((p) => cls.startsWith(p)) ||
				cls === "one"
			) {
				root.classList.remove(cls);
			}
		}

		// 3️⃣ apply base class
		if (theme.base && theme.base !== "default") {
			root.classList.add(`${theme.base}-base`);
		}

		// 4️⃣ apply accent if allowed
		if (theme.accent && ACCENT_ALLOWED.includes(theme.base)) {
			root.classList.add(`${theme.base}-${theme.accent}`);
		}

		// 5️⃣ default ShadCN theme is when base === "default" (no class added)
	}, [theme]);

	return null;
}
