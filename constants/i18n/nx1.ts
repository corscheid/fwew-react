import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

// Lì'fya leNa'vi (Wione)

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "shonlìu" },
  "adp.": { abbr: "adp.", name: "starlìu" },
  "adv.": { abbr: "adv.", name: "fyalìu" },
  "conj.": { abbr: "conj.", name: "tilìu" },
  "inter.": { abbr: "inter.", name: "tìpawm" },
  "intj.": { abbr: "intj.", name: "tìleym" },
  "n.": { abbr: "n.", name: "tstxolìu" },
  "num.": { abbr: "num.", name: "holbay" },
  "part.": { abbr: "part.", name: "lahea fnel" },
  "ph.": { abbr: "ph.", name: "lìukìngvi" },
  "pn.": { abbr: "pn.", name: "tstxolìu a vll" },
  "prop.n.": { abbr: "prop.n.", name: "tstxo" },
  "sbd.": { abbr: "sbd.", name: "zeya fnetilìu" },
  "vim.": { abbr: "vim.", name: "srungaa kemlìu (kea -l/-t)" },
  "vin.": { abbr: "vin.", name: "kemlìu (kea -l/-t)" },
  "vtr.": { abbr: "vtr.", name: "kemlìu (-l/-t)" },
  "vtrm.": { abbr: "vtrm.", name: "srungaa kemlìu tìlateme" },
  "adj., adv.": { abbr: "adj., adv.", name: "shonlìu, fyalìu" },
  "adj., conj.": { abbr: "adj., conj.", name: "shonlìu, tilìu" },
  "adj., intj.": { abbr: "adj., intj.", name: "shonlìu, tìleym" },
  "adj., n.": { abbr: "adj., n.", name: "shonlìu, tstxolìu" },
  "adv., conj.": { abbr: "adv., conj.", name: "fyalìu, tilìu" },
  "adv., intj.": { abbr: "adv., intj.", name: "fyalìu, tìleym" },
  "adv., n.": { abbr: "adv., n.", name: "fyalìu, tstxolìu" },
  "adv., part.": { abbr: "adv., part.", name: "fyalìu, lahea fnel" },
  "conj., adj.": { abbr: "conj., adj.", name: "tilìu, shonlìu" },
  "inter., intj.": { abbr: "inter., intj.", name: "tìpawm, tìleym" },
  "n., intj.": { abbr: "n., intj.", name: "tstxolìu, tìleym" },
  "part., intj.": { abbr: "part., intj.", name: "lahea fnel, tìleym" },
  "vin., intj.": { abbr: "vin., intj.", name: "kemlìu (kea -l/-t), tìleym" },
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
    results: () => "kum",
    noResults: "Kea kum",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Fwew",
    list: "Sestarsìm",
    random: "Renulke",
    numbers: "Holbay",
    other: "Lahe",

    lenition: "Ayselatem Pame",
    stats: "Ayseomùm",
    valid: "Kangay",
    lists: "Aysestarsìm",

    cameronWords: "Aylìu Kämerone",
    homonyms: "Pam fkan teng a aylìu aketeng",
    multiIPA: "Melìupam",
    oddballs: "Aylìu a hek",
    profanity: "Aylìu areptùm",
    that: "That",

    names: "Aystxo",

    favorites: "Swawneyna Aylìu",
    settings: "Tìftxey",
  },
  search: {
    search: "Fwew",
    naviOnly: "Fwew aylìuti leNa'vi nìaw",
    audio: "Pam",
    favorite: "Sweyn",
    navi: "Na'vi",
    partOfSpeech: "Fnel",
    definition: "Ral",
    breakdown: "Lì'kong",
    infixDots: "Kemlìuvi (<>)",
    infixSlots: "Kemlìuvi (..)",
    prefixes: "Eolìuvi",
    infixes: "Kemlìuvi",
    suffixes: "Uolìuvi",
    lenition: "Pame tìlatem",
    comment: "Seplldevi",
    source: "Tsim",
    ipa: "Lìupam (IPA)",
  },
  list: {
    list: "Sestarsìm",
    listOptions: "Tìftxey",
    listMenu: {
      whatValues: [
        { value: "pos", description: "fnelìu" },
        { value: "word", description: "lìu" },
        { value: "words", description: "aylìu ìle kewan" },
        { value: "syllables", description: "holbay lì'konge" },
        { value: "stress", description: "dura lì'konge tseng" },
        { value: "length", description: "ngimpup lìue (ìle flldepam)" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "sngäi fa" },
          { value: "ends", description: "'ia fa" },
          { value: "is", description: "lu" },
          { value: "has", description: "nga'" },
          { value: "like", description: "lu bel" },
          { value: "not-starts", description: "ke sngäi fa" },
          { value: "not-ends", description: "ke 'ia fa" },
          { value: "not-is", description: "ke lu" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: "ke lu bel" },
        ],
        word: [
          { value: "starts", description: "sngäi fa" },
          { value: "ends", description: "'ia fa" },
          { value: "has", description: "nga'" },
          { value: "like", description: "lu bel" },
          { value: "not-starts", description: "ke sngäi fa" },
          { value: "not-ends", description: "ke 'ia fa" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: "ke lu bel" },
        ],
        words: [
          { value: "first", description: "lìu alal frato" },
          { value: "last", description: "lìu amip frato" },
        ],
        syllables: [
          { value: "<", description: "lu hìi to" },
          { value: "<=", description: "lu hìi to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu aba to fu teng na" },
          { value: ">", description: "lu aba to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        stress: [
          { value: "<", description: "lu hìi to" },
          { value: "<=", description: "lu hìi to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu aba to fu teng na" },
          { value: ">", description: "lu aba to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        length: [
          { value: "<", description: "lu hìi to" },
          { value: "<=", description: "lu hìi to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: "lu aba to fu teng na" },
          { value: ">", description: "lu aba to" },
          { value: "!=", description: "ke lu teng na" },
        ],
      },
    },
    and: "ulte...",
  },
  random: {
    random: "Renulke",
    randomOptions: "Tìftxey",
    numWords: "Holbay lìue",
    where: "hu shon a...",
  },
  numbers: {
    placeholderNumeric: "052",
    placeholderAlpha: "mrrvomun",
    octal: "holbay Na'viye:",
    decimal: "holbay Tawtuteye:",
  },
  names: {
    single: "Fyin",
    full: "'Enshem",
    alu: "Alu",
    options: "Tìftxey",
    numNames: "Holbay tstxoe",
    copyAll: "Munge Fraut",
    dialect: "Lì'fyafnel",
    dialects: [
      { name: "lì'fya na'rìnge", value: "forest" },
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
    numSyllables: "Holbay lì'konge",
  },
  nameFull: {
    numSyllables1: "Holbay lì'konge a mì stxo aawve",
    numSyllables2: "Holbay lì'konge a mì stxo soaie",
    numSyllables3: "Holbay lì'konge a mì stxo sa'seme",
    nameEnding: "Tì'ia tstxoe",
    nameEndingHint: "-'itan fpi fnelan, -'ite fpi fnele, -'itu fpi aylahe",
    nameEndingOptions: [
      { value: "random", name: "renulke" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Holbay lì'konge",
    nounMode: "Fnetstxolìu",
    adjMode: "Fneshonlìu",
    nounModes: [
      { name: "'uo", value: "something" },
      { name: "tstxolìu letrrtrr", value: "normal noun" },
      { name: "kemsiyu", value: "verb-er" },
    ],
    adjModes: [
      { name: "ketsran", value: "any" },
      { name: "'uo", value: "something" },
      { name: "keu", value: "none" },
      { name: "shonlìu letrrtrr", value: "normal adjective" },
      { name: "tstxolìu a hu -e/-ye", value: "genitive noun" },
      { name: "tstxolìu tsime", value: "origin noun" },
      { name: "kemlìu a hu -a<us> fu -a<awn>", value: "participle verb" },
      { name: "kemlìu a hu -a<us>", value: "active participle verb" },
      { name: "kemlìu a hu -a<awn>", value: "passive participle verb" },
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
        key: "Aystxolìu",
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
    glottalStop: "('ìp, mungwrr sre 'll fu 'rr)",
    lenitingPrefixes: "ayeolìuvi a leykatem 'awvea pamit lìue",
    lenitingAdpositions: "aystarlìu a leykatem 'awvea pamit lìue",
  },
  stats: {
    phonemes: "Ayfamrelvi",
    clusters: "Aysnao",
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
    appLanguage: "'Ure lì'fya",
    resultsLanguage: "Kume lì'fya",
    dialect: "Lì'fyafnel",
    theme: "Lupra",
  },
};

export default strings;
