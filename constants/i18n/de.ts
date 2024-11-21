import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Adjektiv" },
  "adp.": { abbr: "adp.", name: "Adposition" },
  "adv.": { abbr: "adv.", name: "Adverb" },
  "conj.": { abbr: "conj.", name: "Konjunktion" },
  "inter.": { abbr: "inter.", name: "Interrogativ" },
  "intj.": { abbr: "intj.", name: "Interjektion" },
  "n.": { abbr: "n.", name: "Nomen" },
  "num.": { abbr: "num.", name: "Nummer" },
  "part.": { abbr: "part.", name: "Partikel" },
  "ph.": { abbr: "ph.", name: "Phrase" },
  "pn.": { abbr: "pn.", name: "Pronomen" },
  "prop.n.": { abbr: "prop.n.", name: "Eigenname" },
  "sbd.": { abbr: "sbd.", name: "Subordinator" },
  "vim.": { abbr: "vim.", name: "intransitives Modalverb" },
  "vin.": { abbr: "vin.", name: "intransitives Verb" },
  "vtr.": { abbr: "vtr.", name: "transitives Verb" },
  "vtrm.": { abbr: "vtrm.", name: "transitives Modalverb" },
  "adj., adv.": { abbr: "adj., adv.", name: "Adjektiv, Adverb" },
  "adj., conj.": { abbr: "adj., conj.", name: "Adjektiv, Konjunktion" },
  "adj., intj.": { abbr: "adj., intj.", name: "Adjektiv, Interjektion" },
  "adj., n.": { abbr: "adj., n.", name: "Adjektiv, Nomen" },
  "adv., conj.": { abbr: "adv., conj.", name: "Adverb, Konjunktion" },
  "adv., intj.": { abbr: "adv., intj.", name: "Adverb, Interjektion" },
  "adv., n.": { abbr: "adv., n.", name: "Adverb, Nomen" },
  "adv., part.": { abbr: "adv., part.", name: "Adverb, Partikel" },
  "conj., adj.": { abbr: "conj., adj.", name: "Konjunktion, Adjektiv" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogativ, Interjektion",
  },
  "n., intj.": { abbr: "n., intj.", name: "Nomen, Interjektion" },
  "part., intj.": { abbr: "part., intj.", name: "Partikel, Interjektion" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "intransitives Verb, Interjektion",
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
    results: (count) => (count === 1 ? "Ergebnis" : "Ergebnisse"),
    noResults: "keine Ergebnisse",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Suche",
    list: "Liste",
    random: "Zufall",
    numbers: "Zahlen",
    other: "Andere",

    lenition: "Lenierung",
    stats: "Statistiken",
    valid: "Gültig",
    lists: "Listen",

    cameronWords: "Cameron-Wörter",
    homonyms: "Homonyme",
    multiIPA: "Multi IPA",
    oddballs: "Sonderlinge",
    profanity: "Vulgärsprache",
    that: "Dass",

    names: "Namen",

    favorites: "Favoriten",
    settings: "Einstellungen",
  },
  search: {
    search: "Suche",
    naviOnly: "Nur Na'vi-Wörter suchen",
    audio: "Audio",
    favorite: "Favorit",
    navi: "Na'vi",
    partOfSpeech: "Wortart",
    definition: "Definition",
    breakdown: "Silbentrennung",
    infixDots: "Infixe (Punkte)",
    infixSlots: "Infixe (Slots)",
    prefixes: "Präfixe",
    infixes: "Infixe",
    suffixes: "Suffixe",
    lenition: "Lenierung",
    comment: "Kommentar",
    source: "Quelle",
    ipa: "IPA",
  },
  list: {
    list: "Liste",
    listOptions: "Listenoptionen",
    listMenu: {
      whatValues: [
        { value: "pos", description: "Wortart" },
        { value: "word", description: "Wort" },
        {
          value: "words",
          description: "Wörter nach Veröffentlichung",
        },
        { value: "syllables", description: "Anzahl der Silben" },
        { value: "stress", description: "betonte Silbenposition" },
        { value: "length", description: "Länge des Wortes in Phonemen" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "beginnt mit" },
          { value: "ends", description: "endet mit" },
          { value: "is", description: "ist" },
          { value: "has", description: "hat" },
          { value: "like", description: "ist wie" },
          { value: "not-starts", description: "beginnt nicht mit" },
          { value: "not-ends", description: "endet nicht mit" },
          { value: "not-is", description: "ist nicht" },
          { value: "not-has", description: "hat nicht" },
          { value: "not-like", description: "ist nicht wie" },
        ],
        word: [
          { value: "starts", description: "beginnt mit" },
          { value: "ends", description: "endet mit" },
          { value: "has", description: "hat" },
          { value: "like", description: "ist wie" },
          { value: "not-starts", description: "beginnt nicht mit" },
          { value: "not-ends", description: "endet nicht mit" },
          { value: "not-has", description: "hat nicht" },
          { value: "not-like", description: "ist nicht wie" },
        ],
        words: [
          { value: "first", description: "älteste Wörter" },
          { value: "last", description: "neueste Wörter" },
        ],
        syllables: [
          { value: "<", description: "kleiner als" },
          { value: "<=", description: "kleiner als oder gleich" },
          { value: "=", description: "gleich" },
          { value: ">=", description: "größer als oder gleich" },
          { value: ">", description: "größer als" },
          { value: "!=", description: "ungleich" },
        ],
        stress: [
          { value: "<", description: "kleiner als" },
          { value: "<=", description: "kleiner als oder gleich" },
          { value: "=", description: "gleich" },
          { value: ">=", description: "größer als oder gleich" },
          { value: ">", description: "größer als" },
          { value: "!=", description: "ungleich" },
        ],
        length: [
          { value: "<", description: "kleiner als" },
          { value: "<=", description: "kleiner als oder gleich" },
          { value: "=", description: "gleich" },
          { value: ">=", description: "größer als oder gleich" },
          { value: ">", description: "größer als" },
          { value: "!=", description: "ungleich" },
        ],
      },
    },
    and: "und...",
  },
  random: {
    random: "Zufall",
    randomOptions: "Zufallsoptionen",
    numWords: "Anzahl der zufälligen Wörter",
    where: "wo...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktal:",
    decimal: "dezimal:",
  },
  names: {
    single: "Einzel",
    full: "Voll",
    alu: "Alu",
    options: "Optionen",
    numNames: "Anzahl der zu generierenden Namen",
    copyAll: "Alle kopieren",
    dialect: "Dialekt",
    dialects: [
      { name: "Wald", value: "forest" },
      // { name: "Interdialekt", value: "interdialect" },
      { name: "Riff", value: "reef" },
    ],
    syllablesOptions: [
      { name: "zufällig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Anzahl der Silben",
  },
  nameFull: {
    numSyllables1: "Anzahl der Silben im Vornamen",
    numSyllables2: "Anzahl der Silben im Familiennamen",
    numSyllables3: "Anzahl der Silben im Elternnamen",
    nameEnding: "Namensendung",
    nameEndingHint:
      "-'itan für männlich, -'ite für weiblich, -'itu für nicht-binär (nicht kanonisch)",
    nameEndingOptions: [
      { value: "random", name: "zufällig" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Anzahl der Silben im Vornamen",
    nounMode: "Substantivmodus",
    adjMode: "Adjektivmodus",
    nounModes: [
      { name: "etwas", value: "something" },
      { name: "normales Substantiv", value: "normal noun" },
      { name: "Verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "beliebig", value: "any" },
      { name: "etwas", value: "something" },
      { name: "kein", value: "none" },
      { name: "normales Adjektiv", value: "normal adjective" },
      { name: "Genitiv-Substantiv", value: "genitive noun" },
      { name: "Herkunfts-Substantiv", value: "origin noun" },
      { name: "Partizip-Verb", value: "participle verb" },
      { name: "aktives Partizip-Verb", value: "active participle verb" },
      { name: "passives Partizip-Verb", value: "passive participle verb" },
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
    clusters: "Konsonantengruppen",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Über",
    version: "Version",
    credits: "Credits",
    development: "Entwicklung",
    design: "Design",
    testing: "Testen",
    translation: "Übersetzung",
    appLanguage: "App-Sprache",
    resultsLanguage: "Ergebnis-Sprache",
    dialect: "Dialekt",
    theme: "Theme",
  },
};

export default strings;
