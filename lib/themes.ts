// lib/themes.ts
export type ThemeBase =
	| "default"
	| "latte"
	| "frappe"
	| "macchiato"
	| "mocha"
	| "dracula"
	| "fuchsia-light"
	| "fuchsia-dark"
	| "one"
	| "ripe-lilac-light"
	| "ripe-lilac-dark";

export type ThemeAccent =
	| "flamingo"
	| "green"
	| "lavender"
	| "maroon"
	| "mauve"
	| "peach"
	| "pink"
	| "red"
	| "rosewater"
	| "sapphire"
	| "sky"
	| "teal"
	| "yellow";

export const CATPPUCCIN_ACCENTS: ThemeAccent[] = [
	"flamingo",
	"green",
	"lavender",
	"maroon",
	"mauve",
	"peach",
	"pink",
	"red",
	"rosewater",
	"sapphire",
	"sky",
	"teal",
	"yellow",
];

export const BASE_THEMES: { label: string; value: ThemeBase }[] = [
	{ label: "Latte", value: "latte" },
	{ label: "Frappe", value: "frappe" },
	{ label: "Macchiato", value: "macchiato" },
	{ label: "Mocha", value: "mocha" },
	{ label: "Dracula", value: "dracula" },
	{ label: "Fuchsia (Light)", value: "fuchsia-light" },
	{ label: "Fuchsia (Dark)", value: "fuchsia-dark" },
	{ label: "One Dark", value: "one" },
	{ label: "Ripe Lilac (Light)", value: "ripe-lilac-light" },
	{ label: "Ripe Lilac (Dark)", value: "ripe-lilac-dark" },
];

export type ThemeMode = "light" | "dark";
