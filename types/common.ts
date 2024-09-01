import type { Dialect as FwDialect, LanguageCode, FwAuxtheme } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "eo" | "nx0" | "nx1";

export type NumericString = `${number}` | "";

export type OptionType<T> = { name: string; value: T };

export type Dialect = Exclude<FwDialect, "interdialect">;

export type Auxtheme = FwAuxtheme;
