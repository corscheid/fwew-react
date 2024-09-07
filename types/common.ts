import type { Dialect as FwDialect, LanguageCode } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "eo" | "nx0" | "nx1";

export type NumericString = `${number}` | "";

export type OptionType<T> = { name: string; value: T };

export type Dialect = Exclude<FwDialect, "interdialect">;

export type Auxtheme = "normal" | "frutiger aero";

export type ActiveWindow = "search" | "list" | "random" | "number" | "other";
