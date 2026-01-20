"use client";

import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { $theme } from "../stores/theme";

const ACCENT_ALLOWED = ["latte", "frappe", "macchiato", "mocha"];

export function CustomThemeProvider() {
	// biome-ignore lint/correctness/useHookAtTopLevel: SSR
	const theme = $theme ? useStore($theme) : null;

	// client-only guard
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!(mounted && theme)) {
			return; // only run on client and if theme exists
		}

		const root = document.documentElement;

		// toggle dark/light globally
		root.classList.toggle("dark", theme.mode === "dark");
		root.classList.toggle("light", theme.mode === "light");

		// remove existing theme classes
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
				THEME_PREFIXES.some((p) => cls.startsWith(cls)) ||
				cls === "one"
			) {
				root.classList.remove(cls);
			}
		}

		// apply base class
		if (theme.base && theme.base !== "default") {
			root.classList.add(`${theme.base}-base`);
		}

		// apply accent if allowed
		if (theme.accent && ACCENT_ALLOWED.includes(theme.base)) {
			root.classList.add(`${theme.base}-${theme.accent}`);
		}
	}, [mounted, theme]);

	return null;
}
