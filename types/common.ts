import type { Href } from "expo-router";
import type { Dialect as FwDialect, LanguageCode } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "eo" | "nx0" | "nx1";

export type NumericString = `${number}` | "";

export type OptionType<T> = { name: string; value: T };

export type Dialect = Exclude<FwDialect, "interdialect">;

export type DialectAbbr = "LN" | "LW";

export type DialectMeta = { name: string; value: Dialect; abbr: DialectAbbr };

export type DialectDisplayType = {
  [key in Dialect]: DialectMeta;
};

export type LinkType = {
  href: Href;
  title: string;
  Component?: () => JSX.Element;
  links?: LinkType[];
};

export type ActiveWindow = "search" | "list" | "random" | "numbers" | "other";
