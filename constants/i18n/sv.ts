import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "adjektiv" },
  "adp.": { abbr: "adp.", name: "adposition" },
  "adv.": { abbr: "adv.", name: "adverb" },
  "conj.": { abbr: "conj.", name: "konjunktion" },
  "inter.": { abbr: "inter.", name: "interrogativ" },
  "intj.": { abbr: "intj.", name: "interjektion" },
  "n.": { abbr: "n.", name: "substantiv" },
  "num.": { abbr: "num.", name: "nummer" },
  "part.": { abbr: "part.", name: "partikel" },
  "ph.": { abbr: "ph.", name: "fras" },
  "pn.": { abbr: "pn.", name: "pronomen" },
  "prop.n.": { abbr: "prop.n.", name: "egennamn" },
  "sbd.": { abbr: "sbd.", name: "subordinator" },
  "vim.": { abbr: "vim.", name: "intransitivt modalverb" },
  "vin.": { abbr: "vin.", name: "intransitivt verb" },
  "vtr.": { abbr: "vtr.", name: "transitivt verb" },
  "vtrm.": { abbr: "vtrm.", name: "transitivt modalverb" },
  "adj., adv.": { abbr: "adj., adv.", name: "adjektiv, adverb" },
  "adj., conj.": { abbr: "adj., conj.", name: "adjektiv, konjunktion" },
  "adj., intj.": { abbr: "adj., intj.", name: "adjektiv, interjektion" },
  "adj., n.": { abbr: "adj., n.", name: "adjektiv, substantiv" },
  "adv., conj.": { abbr: "adv., conj.", name: "adverb, konjunktion" },
  "adv., intj.": { abbr: "adv., intj.", name: "adverb, interjektion" },
  "adv., n.": { abbr: "adv., n.", name: "adverb, substantiv" },
  "adv., part.": { abbr: "adv., part.", name: "adverb, partikel" },
  "conj., adj.": { abbr: "conj., adj.", name: "konjunktion, adjektiv" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "interrogativ, interjektion",
  },
  "n., intj.": { abbr: "n., intj.", name: "substantiv, interjektion" },
  "part., intj.": { abbr: "part., intj.", name: "partikel, interjektion" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "intransitivt verb, interjektion",
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
    results: (count) => (count === 1 ? "resultat" : "resultat"),
    noResults: "inga resultat",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Sök",
    list: "Lista",
    random: "Slumpmässig",
    numbers: "Nummer",
    other: "Other",

    lenition: "Lenition", // TODO
    stats: "Stats", // TODO
    valid: "Valid", // TODO
    lists: "Lists", // TODO

    cameronWords: "Cameron Words", // TODO
    homonyms: "Homonyms", // TODO
    multiIPA: "Multi IPA", // TODO
    oddballs: "Oddballs", // TODO
    profanity: "Profanity", // TODO
    that: "That", // TODO

    names: "Namn",

    favorites: "Favoriter",
    settings: "Inställningar",
  },
  search: {
    search: "Sök",
    naviOnly: "Sök endast Na'vi-ord",
    audio: "Audio",
    favorite: "Favorit",
    navi: "Na'vi",
    partOfSpeech: "Ordklass",
    definition: "Definition",
    breakdown: "Orddelning",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Prefixes",
    infixes: "Infixes",
    suffixes: "Suffixes",
    lenition: "Lenition",
    comment: "Kommentar",
    source: "Källa",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Listalternativ",
    listMenu: {
      whatValues: [
        { value: "pos", description: "del av tal" },
        { value: "word", description: "ord" },
        {
          value: "words",
          description: "ord i publiceringsordning",
        },
        { value: "syllables", description: "antal stavelser" },
        { value: "stress", description: "betonad stavelseposition" },
        { value: "length", description: "längd på ordet i fonem" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "börjar med" },
          { value: "ends", description: "slutar med" },
          { value: "is", description: "är" },
          { value: "has", description: "har" },
          { value: "like", description: "är som" },
          { value: "not-starts", description: "börjar inte med" },
          { value: "not-ends", description: "slutar inte med" },
          { value: "not-is", description: "är inte" },
          { value: "not-has", description: "har inte" },
          { value: "not-like", description: "är inte som" },
        ],
        word: [
          { value: "starts", description: "börjar med" },
          { value: "ends", description: "slutar med" },
          { value: "has", description: "har" },
          { value: "like", description: "är som" },
          { value: "not-starts", description: "börjar inte med" },
          { value: "not-ends", description: "slutar inte med" },
          { value: "not-has", description: "har inte" },
          { value: "not-like", description: "är inte som" },
        ],
        words: [
          { value: "first", description: "äldsta ord" },
          { value: "last", description: "nyaste ord" },
        ],
        syllables: [
          { value: "<", description: "mindre än" },
          { value: "<=", description: "mindre än eller lika med" },
          { value: "=", description: "lika med" },
          { value: ">=", description: "större än eller lika med" },
          { value: ">", description: "större än" },
          { value: "!=", description: "inte lika med" },
        ],
        stress: [
          { value: "<", description: "mindre än" },
          { value: "<=", description: "mindre än eller lika med" },
          { value: "=", description: "lika med" },
          { value: ">=", description: "större än eller lika med" },
          { value: ">", description: "större än" },
          { value: "!=", description: "inte lika med" },
        ],
        length: [
          { value: "<", description: "mindre än" },
          { value: "<=", description: "mindre än eller lika med" },
          { value: "=", description: "lika med" },
          { value: ">=", description: "större än eller lika med" },
          { value: ">", description: "större än" },
          { value: "!=", description: "inte lika med" },
        ],
      },
    },
    and: "och...",
  },
  random: {
    random: "Slumpmässig",
    randomOptions: "Slumpässiga Alternativ",
    numWords: "Antal slumpmässiga ord",
    where: "var...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Enkel",
    full: "Full",
    alu: "Alu",
    options: "Alternativ",
    numNames: "Antal Namn att Generera",
    copyAll: "Kopiera alla",
    dialect: "Dialekt",
    dialects: [
      { name: "skog", value: "forest" },
      // { name: "interdialekt", value: "interdialect" },
      { name: "rev", value: "reef" },
    ],
    syllablesOptions: [
      { name: "slumpmässig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
  },
  nameSingle: {
    numSyllables: "Antal stavelser",
  },
  nameFull: {
    numSyllables1: "Antal stavelser i förnamn",
    numSyllables2: "Antal stavelser i efternamn",
    numSyllables3: "Antal stavelser i föräldersnamn",
    nameEnding: "Namnändelse",
    nameEndingHint:
      "-'itan för manlig, -'ite för kvinnlig, -'itu för icke-binär (icke-kanonisk)",
    nameEndingOptions: [
      { value: "random", name: "slumpmässig" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Antal stavelser i förnamn",
    nounMode: "Substantivläge",
    adjMode: "Adjektivläge",
    nounModes: [
      { name: "något", value: "something" },
      { name: "normalt substantiv", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "något", value: "any" },
      { name: "något", value: "something" },
      { name: "inget", value: "none" },
      { name: "normalt adjektiv", value: "normal adjective" },
      { name: "genitiv substantiv", value: "genitive noun" },
      { name: "ursprung substantiv", value: "origin noun" },
      { name: "particip verb", value: "participle verb" },
      { name: "aktiv particip verb", value: "active participle verb" },
      { name: "passiv particip verb", value: "passive participle verb" },
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
    phonemes: "Phoneme Frequencies", // TODO
    clusters: "Konsonantkluster",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Om",
    version: "Version",
    credits: "Skapare",
    development: "Utveckling",
    design: "Design",
    testing: "Testning",
    translation: "Översättning",
    appLanguage: "App-språk",
    resultsLanguage: "Resultatspråk",
    dialect: "Dialekt",
    theme: "Theme",
  },
};

export default strings;
