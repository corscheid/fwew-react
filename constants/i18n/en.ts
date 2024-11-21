import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Adjective" },
  "adp.": { abbr: "adp.", name: "Adposition" },
  "adv.": { abbr: "adv.", name: "Adverb" },
  "conj.": { abbr: "conj.", name: "Conjunction" },
  "inter.": { abbr: "inter.", name: "Interrogative" },
  "intj.": { abbr: "intj.", name: "Interjection" },
  "n.": { abbr: "n.", name: "Noun" },
  "num.": { abbr: "num.", name: "Number" },
  "part.": { abbr: "part.", name: "Particle" },
  "ph.": { abbr: "ph.", name: "Phrase" },
  "pn.": { abbr: "pn.", name: "Pronoun" },
  "prop.n.": { abbr: "prop.n.", name: "Proper Noun" },
  "sbd.": { abbr: "sbd.", name: "Subordinator" },
  "vim.": { abbr: "vim.", name: "Intransitive Modal Verb" },
  "vin.": { abbr: "vin.", name: "Intransitive Verb" },
  "vtr.": { abbr: "vtr.", name: "Transitive Verb" },
  "vtrm.": { abbr: "vtrm.", name: "Transitive Modal Verb" },
  "adj., adv.": { abbr: "adj., adv.", name: "Adjective, Adverb" },
  "adj., conj.": { abbr: "adj., conj.", name: "Adjective, Conjunction" },
  "adj., intj.": { abbr: "adj., intj.", name: "Adjective, Interjection" },
  "adj., n.": { abbr: "adj., n.", name: "Adjective, Noun" },
  "adv., conj.": { abbr: "adv., conj.", name: "Adverb, Conjunction" },
  "adv., intj.": { abbr: "adv., intj.", name: "Adverb, Interjection" },
  "adv., n.": { abbr: "adv., n.", name: "Adverb, Noun" },
  "adv., part.": { abbr: "adv., part.", name: "Adverb, Particle" },
  "conj., adj.": { abbr: "conj., adj.", name: "Conjunction, Adjective" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogative, Interjection",
  },
  "n., intj.": { abbr: "n., intj.", name: "Noun, Interjection" },
  "part., intj.": { abbr: "part., intj.", name: "Particle, Interjection" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Intransitive Verb, Interjection",
  },
};

const partOfSpeechList = Object.entries(partOfSpeech).map(
  ([value, { name }]) => ({ name, value })
);

const table1Data = [
  ["Case", "Noun", "", "Clause Wrapper", ""],
  ["", "", "proximal", "distal", "answer"],
  ["Subjective", "Tsaw", "Fwa", "Tsawa", "Teynga"],
  ["Agentive", "Tsal", "Fula", "Tsala", "Teyngla"],
  ["Patientive", "Tsat", "Futa", "Tsata", "Teyngta"],
  ["Genitive", "Tseyä", "N/A", "N/A", ""],
  ["Dative", "Tsar", "Fura", "Tsara", ""],
  ["Topical", "Tsari", "Furia", "Tsaria", ""],
];

const table2Data = [
  ["tsa-", "prefix", "that"],
  ["tsa'u", "n.", "that (thing)"],
  ["tsakem", "n.", "that (action)"],
  ["fmawnta", "sbd.", "that news"],
  ["fayluta", "sbd.", "these words"],
  ["tsnì", "sbd.", "that (function word)"],
  ["tsonta", "conj.", "to (with kxìm)"],
  ["kuma/akum", "conj.", "that (as a result)"],
  ["a", "part.", "clause level attributive marker"],
];

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "result" : "results"),
    noResults: "no results",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Search",
    list: "List",
    random: "Random",
    numbers: "Numbers",
    other: "Other",

    lenition: "Lenition",
    stats: "Stats",
    valid: "Valid",
    lists: "Lists",

    cameronWords: "Cameron Words",
    homonyms: "Homonyms",
    multiIPA: "Multi IPA",
    oddballs: "Oddballs",
    profanity: "Profanity",
    that: "That",

    names: "Names",

    favorites: "Favorites",
    settings: "Settings",
  },
  search: {
    search: "Search",
    naviOnly: "Search Na'vi words only",
    navi: "Na'vi",
    audio: "Audio",
    favorite: "Favorite",
    partOfSpeech: "Part of speech",
    definition: "Definition",
    breakdown: "Breakdown",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Prefixes",
    infixes: "Infixes",
    suffixes: "Suffixes",
    lenition: "Lenition",
    comment: "Comment",
    source: "Source",
    ipa: "IPA",
  },
  list: {
    list: "List",
    listOptions: "List Options",
    listMenu: {
      whatValues: [
        { value: "pos", description: "part of speech" },
        { value: "word", description: "word" },
        { value: "words", description: "words in order of release" },
        { value: "syllables", description: "number of syllables" },
        { value: "stress", description: "stressed syllable position" },
        { value: "length", description: "length of the word in phonemes" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "starts with" },
          { value: "ends", description: "ends with" },
          { value: "is", description: "is" },
          { value: "has", description: "has" },
          { value: "like", description: "is like" },
          { value: "not-starts", description: "does not start with" },
          { value: "not-ends", description: "does not end with" },
          { value: "not-is", description: "is not" },
          { value: "not-has", description: "does not have" },
          { value: "not-like", description: "is not like" },
        ],
        word: [
          { value: "starts", description: "starts with" },
          { value: "ends", description: "ends with" },
          { value: "has", description: "has" },
          { value: "like", description: "is like" },
          { value: "not-starts", description: "does not start with" },
          { value: "not-ends", description: "does not end with" },
          { value: "not-has", description: "does not have" },
          { value: "not-like", description: "is not like" },
        ],
        words: [
          { value: "first", description: "oldest" },
          { value: "last", description: "newest" },
        ],
        syllables: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
        stress: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
        length: [
          { value: "<", description: "is less than" },
          { value: "<=", description: "is less than or equal to" },
          { value: "=", description: "is equal to" },
          { value: ">=", description: "is greater than or equal to" },
          { value: ">", description: "is greater than" },
          { value: "!=", description: "is not equal to" },
        ],
      },
    },
    and: "and...",
  },
  random: {
    random: "Random",
    randomOptions: "Random Options",
    numWords: "Number of random words",
    where: "where...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Single",
    full: "Full",
    alu: "Alu",
    options: "Options",
    numNames: "Number of names to generate",
    copyAll: "Copy All",
    dialect: "Dialect",
    dialects: [
      { name: "forest", value: "forest" },
      // { name: "interdialect", value: "interdialect" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "random", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Number of syllables",
  },
  nameFull: {
    numSyllables1: "Number of syllables in first name",
    numSyllables2: "Number of syllables in family name",
    numSyllables3: "Number of syllables in parent's name",
    nameEnding: "Name ending",
    nameEndingHint:
      "-'itan for male, -'ite for female, -'itu for non-binary (non-canon)",
    nameEndingOptions: [
      { value: "random", name: "random" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Number of Syllables in First Name",
    nounMode: "Noun Mode",
    adjMode: "Adjective Mode",
    nounModes: [
      { name: "something", value: "something" },
      { name: "normal noun", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "any", value: "any" },
      { name: "none", value: "none" },
      { name: "something", value: "something" },
      { name: "active participle verb", value: "active participle verb" },
      { name: "genitive noun", value: "genitive noun" },
      { name: "normal adjective", value: "normal adjective" },
      { name: "origin noun", value: "origin noun" },
      { name: "participle verb", value: "participle verb" },
      { name: "passive participle verb", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "A1 Names",
        value: CameronWords.A1Names,
      },
      {
        key: "A2 Names",
        value: CameronWords.A2Names,
      },
      {
        key: "Nouns",
        value: CameronWords.Nouns,
      },
      {
        key: "Life",
        value: CameronWords.Life,
      },
      { key: "Other", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Drops, except before ll/rr)",
    lenitingPrefixes: "Leniting prefixes",
    lenitingAdpositions: "Leniting adpositions",
  },
  stats: {
    phonemes: "Phoneme Frequencies",
    clusters: "Consonant Clusters",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "About Fwew",
    version: "Version",
    credits: "Credits",
    development: "Development",
    design: "Design",
    testing: "Testing",
    translation: "Translation",
    appLanguage: "App Language",
    resultsLanguage: "Results Language",
    dialect: "Dialect",
    theme: "Theme",
  },
};

export default strings;
