import type { DialectDisplayType, DialectMeta } from "@/types/common";

export const Dialects: DialectMeta[] = [
	{ name: "Lì'fya Na'rìngä", value: "forest", abbr: "LN" },
	{ name: "Lì'fya Wionä", value: "reef", abbr: "LW" },
];

export const DialectDisplay: DialectDisplayType = {
	forest: Dialects[0],
	reef: Dialects[1],
};
