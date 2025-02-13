import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "melléknév" },
  "adp.": { abbr: "adp.", name: "Adposition" },
  "adv.": { abbr: "adv.", name: "Adverb" },
  "conj.": { abbr: "conj.", name: "Conjunction" },
  "inter.": { abbr: "inter.", name: "Kérdő" },
  "intj.": { abbr: "intj.", name: "Közbeszólás" },
  "n.": { abbr: "n.", name: "Főnév" },
  "num.": { abbr: "num.", name: "Szám" },
  "part.": { abbr: "part.", name: "Részecske" },
  "ph.": { abbr: "ph.", name: "Kifejezés" },
  "pn.": { abbr: "pn.", name: "Névmás" },
  "prop.n.": { abbr: "prop.n.", name: "Tulajdonnév" },
  "sbd.": { abbr: "sbd.", name: "Beosztott" },
  "vim.": { abbr: "vim.", name: "Intransitív modális ige" },
  "vin.": { abbr: "vin.", name: "Intransitív ige" },
  "vtr.": { abbr: "vtr.", name: "Tranzitív ige" },
  "vtrm.": { abbr: "vtrm.", name: "Tranzitív modális ige" },
  "adj., adv.": { abbr: "adj., adv.", name: "Melléknév, határozószó" },
  "adj., conj.": { abbr: "adj., conj.", name: "melléknév, kötőszó" },
  "adj., intj.": { abbr: "adj., intj.", name: "melléknév, közbeszólás" },
  "adj., n.": { abbr: "adj., n.", name: "melléknév, főnév" },
  "adv., conj.": { abbr: "adv., conj.", name: "Adverb, Conjuction" },
  "adv., intj.": { abbr: "adv., intj.", name: "Adverb, Interjective" },
  "adv., n.": { abbr: "adv., n.", name: "határozószó, főnév" },
  "adv., part.": { abbr: "adv., part.", name: "határozószó, részecske" },
  "conj., adj.": { abbr: "conj., adj.", name: "Conjunction, melléknév" },
  "inter., intj.": { abbr: "inter., intj.", name: "Kérdés, közbeszólás" },
  "n., intj.": { abbr: "n., intj.", name: "Főnév, Közbeszólás" },
  "part., intj.": { abbr: "part., intj.", name: "Particle, Interjection" },
  "vin., intj.": { abbr: "vin., intj.", name: "Intransitív ige, közbeszólás" },
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
  ["Genitive", "Tseyä", "N/A", "N/A", "Teyngä"],
  ["Dative", "Tsar", "Fura", "Tsara", "Teyngra"],
  ["Topical", "Tsari", "Furia", "Tsaria", "Teyngria"],
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
    results: (count) => (count === 1 ? "eredmény" : "eredmények"),
    noResults: "nincs találat",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Keresés",
    list: "Lista",
    random: "Véletlen",
    numbers: "Számok",
    other: "Other",

    lenition: "Leníció",
    stats: "Statisztika",
    valid: "Érvényes",
    lists: "Listák",

    allWords: "All Words", // TODO
    cameronWords: "Cameron szavak",
    homonyms: "Homonimák",
    multiIPA: "Többszörös IPA",
    oddballs: "Anomáliák",
    profanity: "Káromkodás",
    that: "Hogy",

    names: "Név",

    favorites: "Kedvencek",
    settings: "Beállítások",
  },
  search: {
    search: "Keresés",
    naviOnly: "Csak a navigációs szavak",
    audio: "Audio",
    favorite: "Kedvenc",
    navi: "Na'vi",
    partOfSpeech: "Szófaj",
    definition: "Definíció",
    breakdown: "Szótagolás",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Előtagok",
    infixes: "Infixes",
    suffixes: "Utótagok",
    lenition: "Leníció",
    comment: "Megjegyzés",
    source: "Forrás",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Lista Beállításai",
    listMenu: {
      whatValues: [
        { value: "pos", description: "beszéd része" },
        { value: "word", description: "szó" },
        { value: "words", description: "szavakat a megjelenés sorrendjében" },
        { value: "syllables", description: "szótagok száma" },
        { value: "stress", description: "kiemelt szótag pozíció" },
        { value: "length", description: "a szó hossza fonémákban" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "kezdődik" },
          { value: "ends", description: "végződik" },
          { value: "is", description: "van" },
          { value: "has", description: "van" },
          { value: "like", description: "olyan, mint" },
          { value: "not-starts", description: "nem kezdődik" },
          { value: "not-ends", description: "nem végződik" },
          { value: "not-is", description: "nincs" },
          { value: "not-has", description: "nincs" },
          { value: "not-like", description: "nem olyan, mint" },
        ],
        word: [
          { value: "starts", description: "kezdődik" },
          { value: "ends", description: "végződik" },
          { value: "has", description: "van" },
          { value: "like", description: "olyan, mint" },
          { value: "not-starts", description: "nem kezdődik" },
          { value: "not-ends", description: "nem végződik" },
          { value: "not-has", description: "nincs" },
          { value: "not-like", description: "nem olyan, mint" },
        ],
        words: [
          { value: "first", description: "legrégebbi szavak" },
          { value: "last", description: "legújabb szavak" },
        ],
        syllables: [
          { value: "<", description: "kisebb, mint" },
          { value: "<=", description: "kisebb vagy egyenlő" },
          { value: "=", description: "egyenlő" },
          { value: ">=", description: "nagyobb vagy egyenlő" },
          { value: ">", description: "nagyobb, mint" },
          { value: "!=", description: "nem egyenlő" },
        ],
        stress: [
          { value: "<", description: "kisebb, mint" },
          { value: "<=", description: "kisebb vagy egyenlő" },
          { value: "=", description: "egyenlő" },
          { value: ">=", description: "nagyobb vagy egyenlő" },
          { value: ">", description: "nagyobb, mint" },
          { value: "!=", description: "nem egyenlő" },
        ],
        length: [
          { value: "<", description: "kisebb, mint" },
          { value: "<=", description: "kisebb vagy egyenlő" },
          { value: "=", description: "egyenlő" },
          { value: ">=", description: "nagyobb vagy egyenlő" },
          { value: ">", description: "nagyobb, mint" },
          { value: "!=", description: "nem egyenlő" },
        ],
      },
    },
    and: "és...",
  },
  random: {
    random: "Véletlen",
    randomOptions: "Véletlen Beállítások",
    numWords: "Véletlenszerű szavak száma",
    where: "hol...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Egyszerű",
    full: "Teljes",
    alu: "Alu",
    options: "Opciók",
    numNames: "Generálandó Nevek Száma",
    copyAll: "Minden nevet másol",
    dialect: "Dialektus",
    dialects: [
      { name: "forest", value: "forest" },
      // { name: "interdialect", value: "interdialect" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "véletlen", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Szótagok száma",
  },
  nameFull: {
    numSyllables1: "Keresztnév szótagjainak száma",
    numSyllables2: "Vezetéknév szótagjainak száma",
    numSyllables3: "Szülők nevének szótagjainak száma",
    nameEnding: "Név Vége",
    nameEndingHint:
      "-'itan férfiaknak, -'ite nőknek, -'itu nem-binárisoknak (nem kánonikus)",
    nameEndingOptions: [
      { value: "random", name: "véletlen" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Keresztnév szótagjainak száma",
    nounMode: "Főnévi mód",
    adjMode: "Melléknévi mód",
    nounModes: [
      { name: "valami", value: "something" },
      { name: "normál főnév", value: "normal noun" },
      { name: "ige-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "bármelyik", value: "any" },
      { name: "valami", value: "something" },
      { name: "egyik sem", value: "none" },
      { name: "normál melléknév", value: "normal adjective" },
      { name: "birtokos főnév", value: "genitive noun" },
      { name: "eredet főnév", value: "origin noun" },
      { name: "particip ige", value: "participle verb" },
      { name: "aktív particip ige", value: "active participle verb" },
      { name: "passzív particip ige", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "A1 Nevek",
        value: CameronWords.A1Names,
      },
      {
        key: "A2 Nevek",
        value: CameronWords.A2Names,
      },
      {
        key: "Főnevek",
        value: CameronWords.Nouns,
      },
      {
        key: "Élet",
        value: CameronWords.Life,
      },
      { key: "Más", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Elmegy, kivéve ll/rr előtt)",
    lenitingPrefixes: "leníciót okozó előtagok",
    lenitingAdpositions: "leníciót okozó adpozíciók",
  },
  stats: {
    phonemes: "Fonémafrekvenciák",
    clusters: "Mássalhangzócsoportok",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Névjegy",
    version: "Verzió",
    credits: "Készítők",
    development: "Fejlesztés",
    design: "Design",
    testing: "Tesztelés",
    translation: "Fordítás",
    appLanguage: "Alkalmazás nyelve",
    resultsLanguage: "Eredmények nyelve",
    dialect: "Dialektus",
    theme: "Theme",
    colorScheme: "Color Scheme", // TODO
    colorSchemes: [
      // TODO
      { name: "dark", value: "dark" },
      { name: "light", value: "light" },
      { name: "auto", value: "auto" },
    ],
  },
};

export default strings;
