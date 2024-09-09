import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjektiv",
  "adp.": "Adposition",
  "adv.": "Adverb",
  "conj.": "Konjunktion",
  "inter.": "Interrogativ",
  "intj.": "Interjektion",
  "n.": "Nomen",
  "num.": "Nummer",
  "part.": "Partikel",
  "ph.": "Phrase",
  "pn.": "Pronomen",
  "prop.n.": "Eigenname",
  "sbd.": "Subordinator",
  "vim.": "intransitives Modalverb",
  "vin.": "intransitives Verb",
  "vtr.": "transitives Verb",
  "vtrm.": "transitives Modalverb",
  "adj., adv.": "Adjektiv, Adverb",
  "adj., conj.": "Adjektiv, Konjunktion",
  "adj., intj.": "Adjektiv, Interjektion",
  "adj., n.": "Adjektiv, Nomen",
  "adv., conj.": "Adverb, Konjunktion",
  "adv., intj.": "Adverb, Interjektion",
  "adv., n.": "Adverb, Nomen",
  "inter., intj.": "Interrogativ, Interjektion",
  "n., intj.": "Nomen, Interjektion",
  "part., intj.": "Partikel, Interjektion",
  "vin., intj.": "intransitives Verb, Interjektion",
  "vin., vtr.": "intransitives oder transitives Verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Über",
    version: "Version",
    credits: "Credits",
    development: "Entwicklung",
    design: "Design",
    testing: "Testen",
    translation: "Übersetzung",
    appLanguage: "App-Sprache",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Ergebnis-Sprache",
  },
};

export default strings;
