import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "adjektiv",
  "adp.": "adposition",
  "adv.": "adverb",
  "conj.": "konjunktion",
  "inter.": "interrogativ",
  "intj.": "interjektion",
  "n.": "substantiv",
  "num.": "nummer",
  "part.": "partikel",
  "ph.": "fras",
  "pn.": "pronomen",
  "prop.n.": "egennamn",
  "sbd.": "subordinator",
  "vim.": "intransitivt modalverb",
  "vin.": "intransitivt verb",
  "vtr.": "transitivt verb",
  "vtrm.": "transitivt modalverb",
  "adj., adv.": "adjektiv, adverb",
  "adj., conj.": "adjektiv, konjunktion",
  "adj., intj.": "adjektiv, interjektion",
  "adj., n.": "adjektiv, substantiv",
  "adv., conj.": "adverb, konjunktion",
  "adv., intj.": "adverb, interjektion",
  "adv., n.": "adverb, substantiv",
  "inter., intj.": "interrogativ, interjektion",
  "n., intj.": "substantiv, interjektion",
  "part., intj.": "partikel, interjektion",
  "vin., intj.": "intransitivt verb, interjektion",
  "vin., vtr.": "intransitivt eller transitivt verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Om",
    version: "Version",
    credits: "Skapare",
    development: "Utveckling",
    design: "Design",
    testing: "Testning",
    translation: "Översättning",
    appLanguage: "App-språk",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Resultatspråk",
  },
};

export default strings;
