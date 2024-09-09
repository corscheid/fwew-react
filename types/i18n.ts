import type { Dialect, ExtendedLanguageCode, OptionType } from "@/types/common";
import type { ListMenu } from "@/types/list";
import type { AdjectiveMode, NameEnding, NounMode } from "fwew.js";

export type SyllableCount = "0" | "1" | "2" | "3" | "4";

export type PartOfSpeech = {
  [key: string]: string;
};

export type CommonStrings = {
  results: (count: number) => string;
  noResults: string;
  partOfSpeech: PartOfSpeech;
  partOfSpeechList: OptionType<string>[];
};

export type ScreenStrings = {
  search: string;
  list: string;
  random: string;
  numbers: string;
  other: string;

  lenition: string;
  stats: string;
  valid: string;
  lists: string;

  cameronWords: string;
  homonyms: string;
  multiIPA: string;
  oddballs: string;
  profanity: string;
  that: string;

  names: string;

  favorites: string;
  settings: string;
};

export type SearchStrings = {
  search: string;
  naviOnly: string;
  audio: string;
  favorite: string;
  navi: string;
  partOfSpeech: string;
  definition: string;
  breakdown: string;
  infixDots: string;
  infixSlots: string;
  prefixes: string;
  infixes: string;
  suffixes: string;
  lenition: string;
  comment: string;
  source: string;
  ipa: string;
};

export type ListStrings = {
  list: string;
  listOptions: string;
  listMenu: ListMenu;
  and: string;
};

export type RandomStrings = {
  random: string;
  randomOptions: string;
  numWords: string;
  where: string;
};

export type NumbersStrings = {
  placeholderNumeric: string;
  placeholderAlpha: string;
  octal: string;
  decimal: string;
};

export type NamesStrings = {
  single: string;
  full: string;
  alu: string;
  options: string;
  numNames: string;
  copyAll: string;
  dialect: string;
  dialects: OptionType<Dialect>[];
  syllablesOptions: OptionType<SyllableCount>[];
};

export type NameSingleStrings = {
  numSyllables: string;
};

export type NameFullStrings = {
  numSyllables1: string;
  numSyllables2: string;
  numSyllables3: string;
  nameEnding: string;
  nameEndingHint: string;
  nameEndingOptions: OptionType<NameEnding>[];
};

export type NameAluStrings = {
  numSyllables: string;
  nounMode: string;
  adjMode: string;
  nounModes: OptionType<NounMode>[];
  adjModes: OptionType<AdjectiveMode>[];
};

export type CameronWordsStrings = {
  data: {
    key: string;
    value: string;
  }[];
};

export type LenitionStrings = {
  glottalStop: string;
  lenitingPrefixes: string;
  lenitingAdpositions: string;
};

export type StatsStrings = {
  phonemes: string;
  clusters: string;
};

export type SettingsStrings = {
  about: string;
  version: string;
  credits: string;
  development: string;
  design: string;
  testing: string;
  translation: string;
  appLanguage: string;
  auxtheme: string;
  auxthemes: {
    name: string;
    value: string;
  }[];
  resultsLanguage: string;
};

export type UITranslation = {
  common: CommonStrings;
  screens: ScreenStrings;
  search: SearchStrings;
  list: ListStrings;
  random: RandomStrings;
  numbers: NumbersStrings;
  names: NamesStrings;
  nameSingle: NameSingleStrings;
  nameFull: NameFullStrings;
  nameAlu: NameAluStrings;
  cameronWords: CameronWordsStrings;
  lenition: LenitionStrings;
  stats: StatsStrings;
  settings: SettingsStrings;
};

export type I18N = {
  [key in ExtendedLanguageCode]: UITranslation;
};
