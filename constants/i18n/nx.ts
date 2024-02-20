import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "syonlì'u",
  "adp.": "starlì'u",
  "adv.": "fyalì'u",
  "conj.": "tilì'u",
  "inter.": "tìpawm",
  "intj.": "tìleym",
  "n.": "tstxolì'u",
  "num.": "holpxay",
  "part.": "lahea fnel",
  "ph.": "lì'ukìngvi",
  "pn.": "tstxolì'u a vll",
  "prop.n.": "tstxo",
  "sbd.": "zeya fnetilì'u",
  "vim.": "srunga'a kemlì'u (kea -l/-t)",
  "vin.": "kemlì'u (kea -l/-t)",
  "vtr.": "kemlì'u (-l/-t)",
  "vtrm.": "srunga'a kemlì'u tìlatemä",
  // "adj., adv.": "syonlì'u, fyalì'u",
  // "adj., conj.": "syonlì'u, tilì'u",
  // "adj., intj.": "syonlì'u, tìleym",
  // "adj., n.": "syonlì'u, tstxolì'u",
  // "adv., conj.": "fyalì'u, tilì'u",
  // "adv., intj.": "fyalì'u, tìleym",
  // "adv., n.": "fyalì'u, tstxolì'u",
  // "inter., intj.": "tìpawm, tìleym",
  // "n., intj.": "tstxolì'u, tìleym",
  // "part., intj.": "lahea fnel, tìleym",
  // "vin., intj.": "kemlì'u (kea -l/-t), tìleym",
  // "vin., vtr.": "kemlì'u",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
    names: "Tstxo",
    settings: "Tìftxey",
  },
  search: {
    search: "Fwew",
    naviOnly: "Fwew aylì'uti leNa'vi nì'aw",
    audio: "Pam",
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
      { name: "melì'fyafnel", value: "interdialect" },
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
  },
};

export default strings;
