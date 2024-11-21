import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "adjektivo" },
  "adp.": { abbr: "adp.", name: "adpozicio" },
  "adv.": { abbr: "adv.", name: "adverbo" },
  "conj.": { abbr: "conj.", name: "konjunkcio" },
  "inter.": { abbr: "inter.", name: "interrogativa vorto" },
  "intj.": { abbr: "intj.", name: "interjekcio" },
  "n.": { abbr: "n.", name: "substantivo" },
  "num.": { abbr: "num.", name: "numero" },
  "part.": { abbr: "part.", name: "partiklo" },
  "ph.": { abbr: "ph.", name: "frazo" },
  "pn.": { abbr: "pn.", name: "pronomo" },
  "prop.n.": { abbr: "prop.n.", name: "propra nomo" },
  "sbd.": { abbr: "sbd.", name: "subordinanto" },
  "vim.": { abbr: "vim.", name: "netranzitiva modalverbo" },
  "vin.": { abbr: "vin.", name: "netranzitiva verbo" },
  "vtr.": { abbr: "vtr.", name: "tranzitiva verbo" },
  "vtrm.": { abbr: "vtrm.", name: "tranzitiva modalverbo" },
  "adj., adv.": { abbr: "adj., adv.", name: "adjektivo, adverbo" },
  "adj., conj.": { abbr: "adj., conj.", name: "adjektivo, konjunkcio" },
  "adj., intj.": { abbr: "adj., intj.", name: "adjektivo, interjekcio" },
  "adj., n.": { abbr: "adj., n.", name: "adjektivo, substantivo" },
  "adv., conj.": { abbr: "adv., conj.", name: "adverbo, konjunkcio" },
  "adv., intj.": { abbr: "adv., intj.", name: "adverbo, interjekcio" },
  "adv., n.": { abbr: "adv., n.", name: "adverbo, substantivo" },
  "adv., part.": { abbr: "adv., part.", name: "adverbo, partiklo" },
  "conj., adj.": { abbr: "conj., adj.", name: "konjunkcio, adjektivo" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "interrogativa vorto, interjekcio",
  },
  "n., intj.": { abbr: "n., intj.", name: "substantivo, interjekcio" },
  "part., intj.": { abbr: "part., intj.", name: "partiklo, interjekcio" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "netranzitiva verbo, interjekcio",
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
    results: (count) => (count === 1 ? "rezulto" : "rezultoj"),
    noResults: "sen rezultoj",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Serĉi",
    list: "Listo",
    random: "Hazarda",
    numbers: "Nombroj",
    other: "Aliaj",

    lenition: "Lenition",
    stats: "Statistiko",
    valid: "Valida",
    lists: "Listoj",

    cameronWords: "Vortoj de Kameron",
    homonyms: "Homonimoj",
    multiIPA: "Multobla IPA",
    oddballs: "Anomalio",
    profanity: "Vortoj Malĝentilaj",
    that: "Tiu",

    names: "Nomoj",

    favorites: "Favoratoj",
    settings: "Agordoj",
  },
  search: {
    search: "Serĉi",
    naviOnly: "Serĉi nur Na'viajn vortojn",
    audio: "Audio",
    favorite: "Favorato",
    navi: "Na'via vorto",
    partOfSpeech: "Vorttipo",
    definition: "Difino",
    breakdown: "Silaboj",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Prefiksoj",
    infixes: "Infixes",
    suffixes: "Sufiksoj",
    lenition: "Lenition",
    comment: "Komento",
    source: "Fonto",
    ipa: "IPA",
  },
  list: {
    list: "Listo",
    listOptions: "Opcioj de Listo",
    listMenu: {
      whatValues: [
        { value: "pos", description: "vorttipo" },
        {
          value: "word",
          description: "vort",
        },
        {
          value: "words",
          description: "vortaj en ordo de publikigo",
        },
        { value: "syllables", description: "nombro de silaboj" },
        { value: "stress", description: "stresita silaba pozicio" },
        { value: "length", description: "longeco de la vorto en fonemoj" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "komencas per" },
          { value: "ends", description: "finiĝas per" },
          { value: "is", description: "estas" },
          { value: "has", description: "havas" },
          { value: "like", description: "estas kiel" },
          { value: "not-starts", description: "ne komencas per" },
          { value: "not-ends", description: "ne finiĝas per" },
          { value: "not-is", description: "ne estas" },
          { value: "not-has", description: "ne havas" },
          { value: "not-like", description: "ne estas kiel" },
        ],
        word: [
          { value: "starts", description: "komencas per" },
          { value: "ends", description: "finiĝas per" },
          { value: "has", description: "havas" },
          { value: "like", description: "estas kiel" },
          { value: "not-starts", description: "ne komencas per" },
          { value: "not-ends", description: "ne finiĝas per" },
          { value: "not-has", description: "ne havas" },
          { value: "not-like", description: "ne estas kiel" },
        ],
        words: [
          { value: "first", description: "plej malnovaj vortoj" },
          { value: "last", description: "plej novaj vortoj" },
        ],
        syllables: [
          { value: "<", description: "malpli ol" },
          { value: "<=", description: "malpli ol aŭ egala al" },
          { value: "=", description: "egala al" },
          { value: ">=", description: "pli ol aŭ egala al" },
          { value: ">", description: "pli ol" },
          { value: "!=", description: "ne egala al" },
        ],
        stress: [
          { value: "<", description: "malpli ol" },
          { value: "<=", description: "malpli ol aŭ egala al" },
          { value: "=", description: "egala al" },
          { value: ">=", description: "pli ol aŭ egala al" },
          { value: ">", description: "pli ol" },
          { value: "!=", description: "ne egala al" },
        ],
        length: [
          { value: "<", description: "malpli ol" },
          { value: "<=", description: "malpli ol aŭ egala al" },
          { value: "=", description: "egala al" },
          { value: ">=", description: "pli ol aŭ egala al" },
          { value: ">", description: "pli ol" },
          { value: "!=", description: "ne egala al" },
        ],
      },
    },
    and: "kaj...",
  },
  random: {
    random: "Hazarda",
    randomOptions: "Hazardaj Opcioj",
    numWords: "Nombro de hazardaj vortoj",
    where: "kie...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktala:",
    decimal: "dekuma:",
  },
  names: {
    single: "Simpla",
    full: "Plena",
    alu: "Alu",
    options: "Opcioj",
    numNames: "Nombro de Generataj Nomoj",
    copyAll: "Kopii ĉiujn",
    dialect: "Dialekto",
    dialects: [
      { name: "arbara", value: "forest" },
      // { name: "interdialekta", value: "interdialect" },
      { name: "rifa", value: "reef" },
    ],
    syllablesOptions: [
      { name: "hazarda", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Nombro de Silaboj",
  },
  nameFull: {
    numSyllables1: "Nombro de Silaboj en la Nomo",
    numSyllables2: "Nombro de Silaboj en la Familia Nomo",
    numSyllables3: "Nombro de Silaboj en la Patra Nomo",
    nameEnding: "Nomo Fino",
    nameEndingHint:
      "-'itan por viro, -'ite por virino, -'itu por nebinara (nekana)",
    nameEndingOptions: [
      { value: "random", name: "hazarda" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Nombro de Silaboj en la Nomo",
    nounMode: "Substantiva Modo",
    adjMode: "Adjektiva Modo",
    nounModes: [
      { name: "io", value: "something" },
      { name: "normala substantivo", value: "normal noun" },
      { name: "verbo-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "iu", value: "any" },
      { name: "io", value: "something" },
      { name: "nenio", value: "none" },
      { name: "normala adjektivo", value: "normal adjective" },
      { name: "genitiva substantivo", value: "genitive noun" },
      { name: "origina substantivo", value: "origin noun" },
      { name: "participo verbo", value: "participle verb" },
      { name: "aktiva participo verbo", value: "active participle verb" },
      { name: "pasiva participo verbo", value: "passive participle verb" },
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
    glottalStop: "(Foriras, escepte antaŭ ll/rr)",
    lenitingPrefixes: "Leniting prefixes",
    lenitingAdpositions: "Leniting adpositions",
  },
  stats: {
    phonemes: "Frekvencoj de Fonemoj",
    clusters: "Konsonantgrupoj",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Pri",
    version: "Versio",
    credits: "Kreditoj",
    development: "Disvolviĝo",
    design: "Dizajno",
    testing: "Testado",
    translation: "Traduko",
    appLanguage: "Lingvo de la aplikaĵo",
    resultsLanguage: "Lingvo de la rezultoj",
    dialect: "Dialekto",
    theme: "Theme",
  },
};

export default strings;
