import type { ExtendedLanguageCode } from "@/types/common";

export type LanguageMeta = {
	value: ExtendedLanguageCode;
	label: string;
	ui: boolean;
	results: boolean;
};

const Languages: LanguageMeta[] = [
	{ label: "Deutsch", value: "de", ui: true, results: true },
	{ label: "Eesti", value: "et", ui: true, results: true },
	{ label: "English", value: "en", ui: true, results: true },
	{ label: "Español", value: "es", ui: true, results: true },
	{ label: "Esperanto", value: "eo", ui: true, results: false },
	{ label: "Français", value: "fr", ui: true, results: true },
	{ label: "한국어", value: "ko", ui: true, results: true },
	{ label: "Italiano", value: "it", ui: true, results: true },
	{ label: "Lì'fya leNa'vi", value: "nx0", ui: true, results: false },
	{ label: "Lì'fya leNa'vi (wionä)", value: "nx1", ui: false, results: false },
	{ label: "Magyar", value: "hu", ui: true, results: true },
	{ label: "Nederlands", value: "nl", ui: true, results: true },
	{ label: "Polski", value: "pl", ui: true, results: true },
	{ label: "Português", value: "pt", ui: true, results: true },
	{ label: "Русский", value: "ru", ui: true, results: true },
	{ label: "Svenska", value: "sv", ui: true, results: true },
	{ label: "Türkçe", value: "tr", ui: true, results: true },
	{ label: "Українська", value: "uk", ui: true, results: true },
];

export const AppLanguages = Languages.filter((l) => l.ui);
export const ResultsLanguages = Languages.filter((l) => l.results);
