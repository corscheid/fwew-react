import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "przymiotnik" },
  "adp.": { abbr: "adp.", name: "przyimek" },
  "adv.": { abbr: "adv.", name: "przysłówek" },
  "conj.": { abbr: "conj.", name: "spójnik" },
  "inter.": { abbr: "inter.", name: "zaimek pytający" },
  "intj.": { abbr: "intj.", name: "wykrzyknik" },
  "n.": { abbr: "n.", name: "rzeczownik" },
  "num.": { abbr: "num.", name: "liczebnik" },
  "part.": { abbr: "part.", name: "cząstka" },
  "ph.": { abbr: "ph.", name: "wyrażenie" },
  "pn.": { abbr: "pn.", name: "zaimek" },
  "prop.n.": { abbr: "prop.n.", name: "nazwa własna" },
  "sbd.": { abbr: "sbd.", name: "spójnik podrzędny" },
  "vim.": { abbr: "vim.", name: "czasownik modalny nieprzechodni" },
  "vin.": { abbr: "vin.", name: "czasownik nieprzechodni" },
  "vtr.": { abbr: "vtr.", name: "czasownik przechodni" },
  "vtrm.": { abbr: "vtrm.", name: "czasownik modalny przechodni" },
  "adj., adv.": { abbr: "adj., adv.", name: "przymiotnik, przysłówek" },
  "adj., conj.": { abbr: "adj., conj.", name: "przymiotnik, spójnik" },
  "adj., intj.": { abbr: "adj., intj.", name: "przymiotnik, wykrzyknik" },
  "adj., n.": { abbr: "adj., n.", name: "przymiotnik, rzeczownik" },
  "adv., conj.": { abbr: "adv., conj.", name: "przysłówek, spójnik" },
  "adv., intj.": { abbr: "adv., intj.", name: "przysłówek, wykrzyknik" },
  "adv., n.": { abbr: "adv., n.", name: "przysłówek, rzeczownik" },
  "adv., part.": { abbr: "adv., part.", name: "przysłówek, cząstka" },
  "conj., adj.": { abbr: "conj., adj.", name: "spójnik, przymiotnik" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "zaimek pytający, wykrzyknik",
  },
  "n., intj.": { abbr: "n., intj.", name: "rzeczownik, wykrzyknik" },
  "part., intj.": { abbr: "part., intj.", name: "cząstka, wykrzyknik" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "czasownik nieprzechodni, wykrzyknik",
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
    results: (count) => (count === 1 ? "wynik" : "wyniki"),
    noResults: "brak wyników",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Szukaj",
    list: "Lista",
    random: "Losowy",
    numbers: "Liczby",
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

    names: "Imiona",

    favorites: "Ulubione",
    settings: "Ustawienia",
  },
  search: {
    search: "Szukaj",
    naviOnly: "Szukaj tylko słów Na'vi",
    audio: "Audio",
    favorite: "Ulubione",
    navi: "Na'vi",
    partOfSpeech: "Część mowy",
    definition: "Definicja",
    breakdown: "Podział na sylaby",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Prefiksy",
    infixes: "Infixes",
    suffixes: "Sufiksy",
    lenition: "Lenition",
    comment: "Komentarz",
    source: "Źródło",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Opcje Listy",
    listMenu: {
      whatValues: [
        { value: "pos", description: "część mowy" },
        { value: "word", description: "słowo" },
        {
          value: "words",
          description: "słowa w kolejności publikacji",
        },
        { value: "syllables", description: "liczba sylab" },
        { value: "stress", description: "pozycja akcentowanej sylaby" },
        { value: "length", description: "długość słowa w fonemach" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "zaczyna się" },
          { value: "ends", description: "kończy się" },
          { value: "is", description: "jest" },
          { value: "has", description: "ma" },
          { value: "like", description: "jest jak" },
          { value: "not-starts", description: "nie zaczyna się" },
          { value: "not-ends", description: "nie kończy się" },
          { value: "not-is", description: "nie jest" },
          { value: "not-has", description: "nie ma" },
          { value: "not-like", description: "nie jest jak" },
        ],
        word: [
          { value: "starts", description: "zaczyna się" },
          { value: "ends", description: "kończy się" },
          { value: "has", description: "ma" },
          { value: "like", description: "jest jak" },
          { value: "not-starts", description: "nie zaczyna się" },
          { value: "not-ends", description: "nie kończy się" },
          { value: "not-has", description: "nie ma" },
          { value: "not-like", description: "nie jest jak" },
        ],
        words: [
          { value: "first", description: "najstarsze słowa" },
          { value: "last", description: "najnowsze słowa" },
        ],
        syllables: [
          { value: "<", description: "mniej niż" },
          { value: "<=", description: "mniej niż lub równe" },
          { value: "=", description: "równy" },
          { value: ">=", description: "większy lub równy" },
          { value: ">", description: "większy niż" },
          { value: "!=", description: "nie równy" },
        ],
        stress: [
          { value: "<", description: "mniej niż" },
          { value: "<=", description: "mniej niż lub równe" },
          { value: "=", description: "równy" },
          { value: ">=", description: "większy lub równy" },
          { value: ">", description: "większy niż" },
          { value: "!=", description: "nie równy" },
        ],
        length: [
          { value: "<", description: "mniej niż" },
          { value: "<=", description: "mniej niż lub równe" },
          { value: "=", description: "równy" },
          { value: ">=", description: "większy lub równy" },
          { value: ">", description: "większy niż" },
          { value: "!=", description: "nie równy" },
        ],
      },
    },
    and: "i...",
  },
  random: {
    random: "Losowy",
    randomOptions: "Opcje Losowe",
    numWords: "Liczba losowych słów",
    where: "gdzie...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Pojedynczy",
    full: "Pełny",
    alu: "Alu",
    options: "Opcje",
    numNames: "Liczba Generowanych Nazw",
    copyAll: "Kopiuj Wszystko",
    dialect: "Dialekt",
    dialects: [
      { name: "leśny", value: "forest" },
      // { name: "międzydialektalny", value: "interdialect" },
      { name: "riffowy", value: "reef" },
    ],
    syllablesOptions: [
      { name: "losowy", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Liczba sylab",
  },
  nameFull: {
    numSyllables1: "Liczba sylab w imieniu",
    numSyllables2: "Liczba sylab w nazwisku",
    numSyllables3: "Liczba sylab w imieniu rodzica",
    nameEnding: "Zakończenie imienia",
    nameEndingHint:
      "-'itan dla męskich, -'ite dla żeńskich, -'itu dla niebinarnych (niekanoniczne)",
    nameEndingOptions: [
      { value: "random", name: "losowy" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Liczba sylab w imieniu",
    nounMode: "Tryb rzeczownika",
    adjMode: "Tryb przymiotnika",
    nounModes: [
      { name: "coś", value: "something" },
      { name: "normalny rzeczownik", value: "normal noun" },
      { name: "czasownik-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "dowolny", value: "any" },
      { name: "coś", value: "something" },
      { name: "żaden", value: "none" },
      { name: "normalny przymiotnik", value: "normal adjective" },
      { name: "rzeczownik dopełniacz", value: "genitive noun" },
      { name: "rzeczownik pochodzenia", value: "origin noun" },
      { name: "czasownik w stronie biernej", value: "participle verb" },
      { name: "czasownik w stronie czynnej", value: "active participle verb" },
      {
        name: "czasownik w stronie bierniej",
        value: "passive participle verb",
      },
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
    clusters: "Zbiory spółgłosek",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "O aplikacji",
    version: "Wersja",
    credits: "Autorzy",
    development: "Rozwój",
    design: "Projekt",
    testing: "Testowanie",
    translation: "Tłumaczenie",
    appLanguage: "Język aplikacji",
    resultsLanguage: "Język wyników",
    dialect: "Dialekt",
    theme: "Theme",
  },
};

export default strings;
