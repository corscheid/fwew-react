import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";
import { useDialect } from "@/hooks/useDialect";

const dialect = useDialect().dialect;

// Lì'fya leNa'vi (Na'rìngä)

const partOfSpeech = {
  "adj.": dialect === "reef" ? "shonlìu" : "syonlì'u",
  "adp.": dialect === "reef" ? "starlìu" : "starlì'u",
  "adv.": dialect === "reef" ? "starlìu" : "fyalì'u",
  "conj.": dialect === "reef" ? "tilìu" : "tilì'u",
  "inter.": "tìpawm",
  "intj.": "tìleym",
  "n.": dialect === "reef" ? "tstxolìu" : "tstxolì'u",
  "num.": dialect === "reef" ? "holbay" : "holpxay",
  "part.": "lahea fnel",
  "ph.": dialect === "reef" ? "lìukìngvi" : "lì'ukìngvi",
  "pn.": dialect === "reef" ? "tstxolìu a vll" : "tstxolì'u a vll",
  "prop.n.": "tstxo",
  "sbd.": dialect === "reef" ? "zeya fnetilìu" : "zeya fnetilì'u",
  "vim.": dialect === "reef" ? "srunga'a kemlìu (kea -l/-t)" : "srunga'a kemlì'u (kea -l/-t)",
  "vin.": dialect === "reef" ? "kemlìu (kea -l/-t)" : "kemlì'u (kea -l/-t)",
  "vtr.": dialect === "reef" ? "kemlìu (-l/-t)" : "kemlì'u (-l/-t)",
  "vtrm.": dialect === "reef" ? "srunga'a kemlìu tìlateme" : "srunga'a kemlì'u tìlatemä",
  "adj., adv.": dialect === "reef" ? "shonlìu, fyalìu" : "syonlì'u, fyalì'u",
  "adj., conj.": dialect === "reef" ? "shonlìu, tilìu" : "syonlì'u, tilì'u",
  "adj., intj.": dialect === "reef" ? "shonlìu, tìleym" : "syonlì'u, tìleym",
  "adj., n.": dialect === "reef" ? "shonlìu, tstxolìu" : "syonlì'u, tstxolì'u",
  "adv., conj.": dialect === "reef" ? "fyalìu, tilìu" : "fyalì'u, tilì'u",
  "adv., intj.": dialect === "reef" ? "fyalìu, tìleym" : "fyalì'u, tìleym",
  "adv., n.": dialect === "reef" ? "fyalìu, tstxolìu" : "fyalì'u, tstxolì'u",
  "inter., intj.": "tìpawm, tìleym",
  "n., intj.": dialect === "reef" ? "tstxolìu, tìleym" : "tstxolì'u, tìleym",
  "part., intj.": "lahea fnel, tìleym",
  "vin., intj.": dialect === "reef" ? "kemlìu (kea -l/-t), tìleym" : "kemlì'u (kea -l/-t), tìleym",
  "vin., vtr.": dialect === "reef" ? "kemlìu" : "kemlì'u",
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
    list: dialect === "reef" ? "Sestarsìm" : "Sästarsìm",
    random: "Renulke",
    numbers: dialect === "reef" ? "Holbay" : "Holpxay",
    other: "Lahe",

    lenition: dialect === "reef" ? "Ayselatem Pame" : "Aysälatem Pamä",
    stats: dialect === "reef" ? "Ayseomùm" : "Aysäomum",
    valid: "Kangay",
    lists: dialect === "reef" ? "Aysestarsìm" : "Aysästarsìm",

    cameronWords: dialect === "reef" ? "Aylìu Kämerone" : "Aylì'u Kämeronä",
    homonyms: dialect === "reef" ? "Pam fkan teng a aylìu aketeng" : "Pam fkan teng a aylì'u aketeng",
    multiIPA: dialect === "reef" ? "Melìupam" : "Melì'upam",
    oddballs: dialect === "reef" ? "Aylìu a hek" : "Aylì'u a hek",
    profanity: dialect === "reef" ? "Aylì'u areptùm" : "Aylì'u aräptum",
    that: "That",

    names: "Aystxo",

    favorites: dialect === "reef" ? "Swawneyna Aylìu" : "Swawneyna Aylì'u",
    settings: "Tìftxey",
  },
  search: {
    search: "Fwew",
    naviOnly: dialect === "reef" ? "Fwew aylìuti leNa'vi nìaw" : "Fwew aylì'uti leNa'vi nì'aw",
    audio: "Pam",
    favorite: "Sweyn",
    navi: "Na'vi",
    partOfSpeech: "Fnel",
    definition: "Ral",
    breakdown: "Lì'kong",
    infixDots: dialect === "reef" ? "Kemlìuvi (<>)" : "Kemlì'uvi (<>)",
    infixSlots: dialect === "reef" ? "Kemlìuvi (..)" : "Kemlì'uvi (..)",
    prefixes: dialect === "reef" ? "Eolìuvi" : "Eolì'uvi",
    infixes: dialect === "reef" ? "Kemlìuvi" : "Kemlì'uvi",
    suffixes: dialect === "reef" ? "Uolìuvi" : "Uolì'uvi",
    lenition: dialect === "reef" ? "Pame tìlatem" : "Pamä tìlatem",
    comment: dialect === "reef" ? "Seplldevi" : "Säplltxevi",
    source: "Tsim",
    ipa: dialect === "reef" ? "Lìupam (IPA)" : "Lì'upam (IPA)",
  },
  list: {
    list: dialect === "reef" ? "Sestarsìm" : "Sästarsìm",
    listOptions: "Tìftxey",
    listMenu: {
      whatValues: [
        { value: "pos", description: dialect === "reef" ? "fnelìu" : "fnelì'u" },
        { value: "word", description: dialect === "reef" ? "lìu" : "lì'u" },
        { value: "words", description: dialect === "reef" ? "aylìu ìle kewan" : "aylì'u ìlä kewan" },
        { value: "syllables", description: "holpxay lì'kongä" },
        { value: "stress", description: "txura lì'kongä tseng" },
        { value: "length", description: dialect === "reef" ? "ngimpup lìuä (ìle flldepam)" : "ngimpup lì'uä (ìlä flltxepam)" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: dialect === "reef" ? "sngäi fa" : "sngä'i fa" },
          { value: "ends", description: dialect === "reef" ? "'ia fa" : "'i'a fa" },
          { value: "is", description: "lu" },
          { value: "has", description: "nga'" },
          { value: "like", description: dialect === "reef" ? "lu bel" : "lu pxel" },
          { value: "not-starts", description: dialect === "reef" ? "ke sngäi fa" : "ke sngä'i fa" },
          { value: "not-ends", description: dialect === "reef" ? "ke 'ia fa" : "ke 'i'a fa" },
          { value: "not-is", description: "ke lu" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: dialect === "reef" ? "ke lu bel" : "ke lu pxel" },
        ],
        word: [
          { value: "starts", description: dialect === "reef" ? "sngäi fa" : "sngä'i fa" },
          { value: "ends", description: dialect === "reef" ? "'ia fa" : "'i'a fa" },
          { value: "has", description: "nga'" },
          { value: "like", description: dialect === "reef" ? "lu bel" : "lu pxel" },
          { value: "not-starts", description: dialect === "reef" ? "ke sngäi fa" : "ke sngä'i fa" },
          { value: "not-ends", description: dialect === "reef" ? "ke 'ia fa" : "ke 'i'a fa" },
          { value: "not-has", description: "ke nga'" },
          { value: "not-like", description: dialect === "reef" ? "ke lu bel" : "ke lu pxel" },
        ],
        words: [
          { value: "first", description: dialect === "reef" ? "lìu alal frato" : "lì'u alal frato" },
          { value: "last", description: dialect === "reef" ? "lìu amip frato" : "lì'u amip frato" },
        ],
        syllables: [
          { value: "<", description: dialect === "reef" ? "lu hìi to" : "lu hì'i to" },
          { value: "<=", description: dialect === "reef" ? "lu hìi to fu teng" : "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: dialect === "reef" ? "lu aba to fu teng na" : "lu apxa to fu teng na" },
          { value: ">", description: dialect === "reef" ? "lu aba to" : "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        stress: [
          { value: "<", description: dialect === "reef" ? "lu hìi to" : "lu hì'i to" },
          { value: "<=", description: dialect === "reef" ? "lu hìi to fu teng" : "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: dialect === "reef" ? "lu aba to fu teng na" : "lu apxa to fu teng na" },
          { value: ">", description: dialect === "reef" ? "lu aba to" : "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
        length: [
          { value: "<", description: dialect === "reef" ? "lu hìi to" : "lu hì'i to" },
          { value: "<=", description: dialect === "reef" ? "lu hìi to fu teng" : "lu hì'i to fu teng" },
          { value: "=", description: "lu teng na" },
          { value: ">=", description: dialect === "reef" ? "lu aba to fu teng na" : "lu apxa to fu teng na" },
          { value: ">", description: dialect === "reef" ? "lu apa to" : "lu apxa to" },
          { value: "!=", description: "ke lu teng na" },
        ],
      },
    },
    and: "ulte...",
  },
  random: {
    random: "Renulke",
    randomOptions: "Tìftxey",
    numWords: dialect === "reef" ? "Holbay lìue" : "Holpxay lì'uä",
    where: dialect === "reef" ? "hu shon a..." : "hu syon a...",
  },
  numbers: {
    placeholderNumeric: "052",
    placeholderAlpha: "mrrvomun",
    octal: dialect === "reef" ? "holbay Na'viye:" : "holpxay Na'viyä:",
    decimal: dialect === "reef" ? "holbay Tawtuteye:" : "holpxay Tawtuteyä:",
  },
  names: {
    single: "Fyin",
    full: dialect === "reef" ? "'Enshem" : "'Änsyem",
    alu: "Alu",
    options: "Tìftxey",
    numNames: dialect === "reef" ? "Holbay lìue" : "Holpxay lì'uä",
    copyAll: dialect === "reef" ? "Munge Fraut" : "Munge Fra'ut",
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
  /////////////////////////////////////////
  nameSingle: {
    numSyllables: dialect === "reef" ? "Holbay lì'konge" : "Holpxay lì'kongä",
  },
  nameFull: {
    numSyllables1: dialect === "reef" ? "Holbay lì'konge a mì stxo aawve" : "Holpxay lì'kongä a mì stxo a'awve",
    numSyllables2: dialect === "reef" ? "Holbay lì'konge a mì stxo soaie" : "Holpxay lì'kongä a mì stxo soaiä",
    numSyllables3: dialect === "reef" ? "Holbay lì'konge a mì stxo sa'seme" : "Holpxay lì'kongä a mì stxo sa'semä",
    nameEnding: dialect === "reef" ? "shonlìu" : "Tì'i'a tstxoä",
    nameEndingHint: "-'itan fpi fnelan, -'ite fpi fnele, -'itu fpi aylahe",
    nameEndingOptions: [
      { value: "random", name: "renulke" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: dialect === "reef" ? "Holbay lì'konge" : "Holpxay lì'kongä",
    nounMode: dialect === "reef" ? "Fnetstxolìu" : "Fnetstxolì'u",
    adjMode: dialect === "reef" ? "Fneshonlìu" : "Fnesyonlì'u",
    nounModes: [
      { name: "'uo", value: "something" },
      { name: dialect === "reef" ? "tstxolìu letrrtrr" : "tstxolì'u letrrtrr", value: "normal noun" },
      { name: "kemsiyu", value: "verb-er" },
    ],
    adjModes: [
      { name: "ketsran", value: "any" },
      { name: "'uo", value: "something" },
      { name: dialect === "reef" ? "keu" : "ke'u", value: "none" },
      { name: dialect === "reef" ? "shonlìu letrrtrr" : "syonlì'u letrrtrr", value: "normal adjective" },
      { name: dialect === "reef" ? "tstxolìu a hu -e/-ye" : "tstxolì'u a hu -ä/-yä", value: "genitive noun" },
      { name: dialect === "reef" ? "tstxolìu tsime" : "tstxolì'u tsimä", value: "origin noun" },
      { name: dialect === "reef" ? "kemlìu a hu -a<us> fu -a<awn>" : "kemlì'u a hu -a<us> fu -a<awn>", value: "participle verb" },
      { name: dialect === "reef" ? "kemlìu a hu -a<us>" : "kemlì'u a hu -a<us>", value: "active participle verb" },
      { name: dialect === "reef" ? "kemlìu a hu -a<awn>" : "kemlì'u a hu -a<awn>", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "Ta 'Awvea Uniltìrantokx a Stxo",
        value: CameronWords.A1Names,
      },
      {
        key: "Ta Muvea UNiltìrantokx a Stxo",
        value: CameronWords.A2Names,
      },
      {
        key: dialect === "reef" ? "Aystxolìu" : "Aystxolì'u",
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
    clusters: dialect === "reef" ? "Aysnao" : "Aysna'o",
  },
  settings: {
    about: "Teri Fwew",
    version: "Srey",
    credits: "Irayo",
    development: "Rengopyu",
    design: "'Ongopyu",
    testing: "Fmetokyu",
    translation: "Ralpengyu",
    appLanguage: dialect === "reef" ? "'Ure lì'fya" : "'Urä lì'fya",
    resultsLanguage: dialect === "reef" ? "Kume lì'fya" : "Kumä lì'fya",
  },
};

export default strings;
