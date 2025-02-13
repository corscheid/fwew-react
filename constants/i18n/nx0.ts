import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

// Lì'fya leNa'vi (Na'rìngä)

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "syonlì'u" },
  "adp.": { abbr: "adp.", name: "starlì'u" },
  "adv.": { abbr: "adv.", name: "fyalì'u" },
  "conj.": { abbr: "conj.", name: "tilì'u" },
  "inter.": { abbr: "inter.", name: "tìpawm" },
  "intj.": { abbr: "intj.", name: "tìleym" },
  "n.": { abbr: "n.", name: "tstxolì'u" },
  "num.": { abbr: "num.", name: "holpxay" },
  "part.": { abbr: "part.", name: "lahea fnel" },
  "ph.": { abbr: "ph.", name: "lì'ukìngvi" },
  "pn.": { abbr: "pn.", name: "tstxolì'u a vll" },
  "prop.n.": { abbr: "prop.n.", name: "tstxo" },
  "sbd.": { abbr: "sbd.", name: "zeya fnetilì'u" },
  "vim.": { abbr: "vim.", name: "srunga'a kemlì'u (kea -l/-t)" },
  "vin.": { abbr: "vin.", name: "kemlì'u (kea -l/-t)" },
  "vtr.": { abbr: "vtr.", name: "kemlì'u (-l/-t)" },
  "vtrm.": { abbr: "vtrm.", name: "srunga'a kemlì'u tìlatemä" },
  "adj., adv.": { abbr: "adj., adv.", name: "syonlì'u, fyalì'u" },
  "adj., conj.": { abbr: "adj., conj.", name: "syonlì'u, tilì'u" },
  "adj., intj.": { abbr: "adj., intj.", name: "syonlì'u, tìleym" },
  "adj., n.": { abbr: "adj., n.", name: "syonlì'u, tstxolì'u" },
  "adv., conj.": { abbr: "adv., conj.", name: "fyalì'u, tilì'u" },
  "adv., intj.": { abbr: "adv., intj.", name: "fyalì'u, tìleym" },
  "adv., n.": { abbr: "adv., n.", name: "fyalì'u, tstxolì'u" },
  "adv., part.": { abbr: "adv., part.", name: "fyalì'u, lahea fnel" },
  "conj., adj.": { abbr: "conj., adj.", name: "tilì'u, syonlì'u" },
  "inter., intj.": { abbr: "inter., intj.", name: "tìpawm, tìleym" },
  "n., intj.": { abbr: "n., intj.", name: "tstxolì'u, tìleym" },
  "part., intj.": { abbr: "part., intj.", name: "lahea fnel, tìleym" },
  "vin., intj.": { abbr: "vin., intj.", name: "kemlì'u (kea -l/-t), tìleym" },
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
    results: () => "kum",
    noResults: "Kea kum",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Fwew",
    list: "Sästarsìm",
    random: "Renulke",
    numbers: "Holpxay",
    other: "Lahe",

    lenition: "Aysälatem Pamä",
    stats: "Aysäomum",
    valid: "Kangay",
    lists: "Aysästarsìm",

    allWords: "Fralì'u",
    cameronWords: "Aylì'u Kämeronä",
    homonyms: "Pam fkan teng a aylì'u aketeng",
    multiIPA: "Melì'upam",
    oddballs: "Aylì'u a hek",
    profanity: "Aylì'u aräptum",
    that: "That",

    names: "Aystxo",

    favorites: "Swawneyna Aylì'u",
    settings: "Tìftxey",
  },
  search: {
    search: "Fwew",
    naviOnly: "Fwew aylì'uti leNa'vi nì'aw",
    audio: "Pam",
    favorite: "Sweyn",
    navi: "Na'vi",
    partOfSpeech: "Fnel",
    definition: "Ral",
    breakdown: "Lì'kong",
    infixDots: "Kemlì'uvi (<>)",
    infixSlots: "Kemlì'uvi (..)",
    prefixes: "Eolì'uvi",
    infixes: "Kemlì'uvi",
    suffixes: "Uolì'uvi",
    lenition: "Pamä tìlatem",
    comment: "Säplltxevi",
    source: "Tsim",
    ipa: "Lì'upam (IPA)",
  },
  list: {
    list: "Sästarsìm",
    listOptions: "Tìftxey",
    listMenu: {
      whatValues: [
        { value: "pos", description: "fnelì'u" },
        { value: "word", description: "lì'u" },
        { value: "words", description: "aylì'u ìlä kewan" },
        { value: "syllables", description: "holpxay lì'kongä" },
        { value: "stress", description: "txura lì'kongä tseng" },
        { value: "length", description: "ngimpup lì'uä (ìlä flltxepam)" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "sngä'i fa" },
          { value: "ends", description: "'i'a fa" },
          { value: "is", description: "lu" },
          { value: "has", description: "nga'" },
          { value: "like", description: "lu pxel" },
          { value: "not-starts", description: "ke sngä'i fa" },
          { value: "not-ends", description: "ke 'i'a fa" },
          { value: "not-is", description: "ke lu" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: "ke lu pxel" },
        ],
        word: [
          { value: "starts", description: "sngä'i fa" },
          { value: "ends", description: "'i'a fa" },
          { value: "has", description: "nga'" },
          { value: "like", description: "lu pxel" },
          { value: "not-starts", description: "ke sngä'i fa" },
          { value: "not-ends", description: "ke 'i'a fa" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: "ke lu pxel" },
        ],
        words: [
          { value: "first", description: "lì'u alal frato" },
          { value: "last", description: "lì'u amip frato" },
        ],
        syllables: [
          { value: "<", description: "lu hì'i to" },
          { value: "<=", description: "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu apxa to fu teng na" },
          { value: ">", description: "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        stress: [
          { value: "<", description: "lu hì'i to" },
          { value: "<=", description: "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu apxa to fu teng na" },
          { value: ">", description: "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        length: [
          { value: "<", description: "lu hì'i to" },
          { value: "<=", description: "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu apxa to fu teng na" },
          { value: ">", description: "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
      },
    },
    and: "ulte...",
  },
  random: {
    random: "Renulke",
    randomOptions: "Tìftxey",
    numWords: "Holpxay lì'uä",
    where: "hu syon a...",
  },
  numbers: {
    placeholderNumeric: "052",
    placeholderAlpha: "mrrvomun",
    octal: "holpxay Na'viyä:",
    decimal: "holpxay Tawtuteyä:",
  },
  names: {
    single: "Fyin",
    full: "'Änsyem",
    alu: "Alu",
    options: "Tìftxey",
    numNames: "Holpxay lì'uä",
    copyAll: "Munge Fra'ut",
    dialect: "Lì'fyafnel",
    dialects: [
      { name: "lì'fya na'rìngä", value: "forest" },
      // { name: "melì'fyafnel", value: "interdialect" },
      { name: "lì'fya wione", value: "reef" },
    ],
    syllablesOptions: [
      { name: "renulke", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Holpxay lì'kongä",
  },
  nameFull: {
    numSyllables1: "Holpxay lì'kongä a mì stxo a'awve",
    numSyllables2: "Holpxay lì'kongä a mì stxo soaiä",
    numSyllables3: "Holpxay lì'kongä a mì stxo sa'semä",
    nameEnding: "Tì'i'a tstxoä",
    nameEndingHint: "-'itan fpi fnelan, -'ite fpi fnele, -'itu fpi aylahe",
    nameEndingOptions: [
      { value: "random", name: "renulke" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Holpxay lì'kongä",
    nounMode: "Fnetstxolì'u",
    adjMode: "Fnesyonlì'u",
    nounModes: [
      { name: "'uo", value: "something" },
      { name: "tstxolì'u letrrtrr", value: "normal noun" },
      { name: "kemsiyu", value: "verb-er" },
    ],
    adjModes: [
      { name: "ketsran", value: "any" },
      { name: "'uo", value: "something" },
      { name: "ke'u", value: "none" },
      { name: "syonlì'u letrrtrr", value: "normal adjective" },
      { name: "tstxolì'u a hu -ä/-yä", value: "genitive noun" },
      { name: "tstxolì'u tsimä", value: "origin noun" },
      { name: "kemlì'u a hu -a<us> fu -a<awn>", value: "participle verb" },
      { name: "kemlì'u a hu -a<us>", value: "active participle verb" },
      { name: "kemlì'u a hu -a<awn>", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "Ta 'Awvea Uniltìrantokx a Stxo",
        value: CameronWords.A1Names,
      },
      {
        key: "Ta Muvea Uniltìrantokx a Stxo",
        value: CameronWords.A2Names,
      },
      {
        key: "Aystxolì'u",
        value: CameronWords.Nouns,
      },
      {
        key: "Tìrey",
        value: CameronWords.Life,
      },
      { key: "Lahe", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "('ìp mungwrr sre 'll fu 'rr)",
    lenitingPrefixes: "ayeolì'uvi a leykatem 'awvea pamit lì'uä",
    lenitingAdpositions: "aystarlìu a leykatem 'awvea pamit lì'uä",
  },
  stats: {
    phonemes: "Ayfamrelvi",
    clusters: "Aysna'o",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Teri Fwew",
    version: "Srey",
    credits: "Irayo",
    development: "Rengopyu",
    design: "'Ongopyu",
    testing: "Fmetokyu",
    translation: "Ralpengyu",
    appLanguage: "'Urä lì'fya",
    resultsLanguage: "Kumä lì'fya",
    dialect: "Lì'fyafnel",
    theme: "Lupra",
    colorScheme: "Ayopin",
    colorSchemes: [
      { name: "vawm", value: "dark" },
      { name: "neyn", value: "light" },
      { name: "auto", value: "auto" },
    ],
  },
};

export default strings;
