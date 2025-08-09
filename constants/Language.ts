import type { ExtendedLanguageCode } from "@/types/common";

export type LanguageMeta = {
  value: ExtendedLanguageCode;
  label: string;
  ui: boolean;
  results: boolean;
};

const Languages: LanguageMeta[] = [
  { value: "de", label: "Deutsch", ui: true, results: true },
  { value: "et", label: "Eesti", ui: true, results: true },
  { value: "en", label: "English", ui: true, results: true },
  { value: "es", label: "Español", ui: true, results: true },
  { value: "eo", label: "Esperanto", ui: true, results: false },
  { value: "fr", label: "Français", ui: true, results: true },
  { value: "ko", label: "한국어", ui: true, results: true },
  { value: "hu", label: "Magyar", ui: true, results: true },
  { value: "it", label: "Italiano", ui: true, results: false },
  { value: "nl", label: "Nederlands", ui: true, results: true },
  { value: "nx0", label: "Lì'fya leNa'vi", ui: true, results: false },
  { value: "nx1", label: "Lì'fya leNa'vi (wione)", ui: false, results: false },
  { value: "pl", label: "Polski", ui: true, results: true },
  { value: "pt", label: "Português", ui: true, results: true },
  { value: "ru", label: "Русский", ui: true, results: true },
  { value: "sv", label: "Svenska", ui: true, results: true },
  { value: "tr", label: "Türkçe", ui: true, results: true },
  { value: "uk", label: "Українська", ui: true, results: true },
];

export const AppLanguages = Languages.filter((l) => l.ui);
export const ResultsLanguages = Languages.filter((l) => l.results);
