import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "omadussõna" },
  "adp.": { abbr: "adp.", name: "adpositsioon" },
  "adv.": { abbr: "adv.", name: "adverb" },
  "conj.": { abbr: "conj.", name: "sidesõna" },
  "inter.": { abbr: "inter.", name: "interrogatiiv" },
  "intj.": { abbr: "intj.", name: "interjektsioon" },
  "n.": { abbr: "n.", name: "nimisõna" },
  "num.": { abbr: "num.", name: "number" },
  "part.": { abbr: "part.", name: "partikkel" },
  "ph.": { abbr: "ph.", name: "fraas" },
  "pn.": { abbr: "pn.", name: "asemäärsõna" },
  "prop.n.": { abbr: "prop.n.", name: "pärisnimi" },
  "sbd.": { abbr: "sbd.", name: "subordinatiiv" },
  "vim.": { abbr: "vim.", name: "intransitiivne modaalverb" },
  "vin.": { abbr: "vin.", name: "intransitiivne verb" },
  "vtr.": { abbr: "vtr.", name: "transitiivne verb" },
  "vtrm.": { abbr: "vtrm.", name: "transitiivne modaalverb" },
  "adj., adv.": { abbr: "adj., adv.", name: "omadussõna, adverb" },
  "adj., conj.": { abbr: "adj., conj.", name: "omadussõna, sidesõna" },
  "adj., intj.": { abbr: "adj., intj.", name: "omadussõna, interjektsioon" },
  "adj., n.": { abbr: "adj., n.", name: "omadussõna, nimisõna" },
  "adv., conj.": { abbr: "adv., conj.", name: "adverb, sidesõna" },
  "adv., intj.": { abbr: "adv., intj.", name: "adverb, interjektsioon" },
  "adv., n.": { abbr: "adv., n.", name: "adverb, nimisõna" },
  "adv., part.": { abbr: "adv., part.", name: "adverb, partikkel" },
  "conj., adj.": { abbr: "conj., adj.", name: "sidesõna, omadussõna" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "interrogatiiv, interjektsioon",
  },
  "n., intj.": { abbr: "n., intj.", name: "nimisõna, interjektsioon" },
  "part., intj.": { abbr: "part., intj.", name: "partikkel, interjektsioon" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "intransitiivne verb, interjektsioon",
  },
  "vin., vtr.": {
    abbr: "vin., vtr.",
    name: "intransitiivne või transitiivne verb",
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
    results: (count) => (count === 1 ? "tulemus" : "tulemused"),
    noResults: "tulemusi pole",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Otsing",
    list: "Nimekiri",
    random: "Juhuslik",
    numbers: "Numbrid",
    other: "Other",

    lenition: "Lenition",
    stats: "Statistika",
    valid: "Kehtiv",
    lists: "Loendid",

    cameronWords: "Cameroni sõnad",
    homonyms: "Homonüümid",
    multiIPA: "Mitu IPA",
    oddballs: "Veidrused",
    profanity: "Roppused",
    that: "See",

    names: "Nimed",

    favorites: "Lemmikud",
    settings: "Seaded",
  },
  search: {
    search: "Otsing",
    naviOnly: "Otsi ainult Na'vi sõnu",
    audio: "Audio",
    favorite: "Lemmik",
    navi: "Na'vi",
    partOfSpeech: "Sõnaliik",
    definition: "Definitsioon",
    breakdown: "Silbitus",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Eesliited",
    infixes: "Infixes",
    suffixes: "Tagasõnad",
    lenition: "Lenition",
    comment: "Kommentaar",
    source: "Allikas",
    ipa: "IPA",
  },
  list: {
    list: "Nimekiri",
    listOptions: "Loendi Valikud",
    listMenu: {
      whatValues: [
        { value: "pos", description: "kõne osa" },
        { value: "word", description: "sõna" },
        {
          value: "words",
          description: "sõnad väljalaske järjekorras",
        },
        { value: "syllables", description: "silpide arv" },
        { value: "stress", description: "rõhutatud silbi asend" },
        { value: "length", description: "sõna pikkus foneemides" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "algab" },
          { value: "ends", description: "lõpeb" },
          { value: "is", description: "on" },
          { value: "has", description: "on" },
          { value: "like", description: "on nagu" },
          { value: "not-starts", description: "ei alga" },
          { value: "not-ends", description: "ei lõpe" },
          { value: "not-is", description: "pole" },
          { value: "not-has", description: "pole" },
          { value: "not-like", description: "pole nagu" },
        ],
        word: [
          { value: "starts", description: "algab" },
          { value: "ends", description: "lõpeb" },
          { value: "has", description: "on" },
          { value: "like", description: "on nagu" },
          { value: "not-starts", description: "ei alga" },
          { value: "not-ends", description: "ei lõpe" },
          { value: "not-has", description: "pole" },
          { value: "not-like", description: "pole nagu" },
        ],
        words: [
          { value: "first", description: "vanimad sõnad" },
          { value: "last", description: "uusimad sõnad" },
        ],
        syllables: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
        stress: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
        length: [
          { value: "<", description: "väiksem kui" },
          { value: "<=", description: "väiksem kui või võrdne" },
          { value: "=", description: "võrdne" },
          { value: ">=", description: "suurem kui või võrdne" },
          { value: ">", description: "suurem kui" },
          { value: "!=", description: "pole võrdne" },
        ],
      },
    },
    and: "ja...",
  },
  random: {
    random: "Juhuslik",
    randomOptions: "Juhuslike Valikute",
    numWords: "Juhuslike sõnade arv",
    where: "kus...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Üksik",
    full: "Täielik",
    alu: "Alu",
    options: "Valikud",
    numNames: "Genereeritavate nimede arv",
    copyAll: "Kopeeri kõik",
    dialect: "Dialekt",
    dialects: [
      { name: "metsa", value: "forest" },
      // { name: "interdialektiline", value: "interdialect" },
      { name: "rifi", value: "reef" },
    ],
    syllablesOptions: [
      { name: "juhuslik", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Silpide arv",
  },
  nameFull: {
    numSyllables1: "Eesnime silpide arv",
    numSyllables2: "Perekonnanime silpide arv",
    numSyllables3: "Vanema nime silpide arv",
    nameEnding: "Nime lõpp",
    nameEndingHint:
      "-'itan meessoost, -'ite naissoost, -'itu mitte-binaarne (mitte-kanoniline)",
    nameEndingOptions: [
      { value: "random", name: "juhuslik" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Eesnime silpide arv",
    nounMode: "Substantiivirežiim",
    adjMode: "Omadussõnarežiim",
    nounModes: [
      { name: "midagi", value: "something" },
      { name: "tavaline substantiiv", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "mis tahes", value: "any" },
      { name: "midagi", value: "something" },
      { name: "mitte ükski", value: "none" },
      { name: "tavaline omadussõna", value: "normal adjective" },
      { name: "omastavas käändes substantiiv", value: "genitive noun" },
      { name: "päritolu substantiiv", value: "origin noun" },
      { name: "partitsiipverb", value: "participle verb" },
      { name: "aktiivne partitsiipverb", value: "active participle verb" },
      { name: "passiivne partitsiipverb", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "A1 Nimed",
        value: CameronWords.A1Names,
      },
      {
        key: "A2 Nimed",
        value: CameronWords.A2Names,
      },
      {
        key: "Nimisõnad",
        value: CameronWords.Nouns,
      },
      {
        key: "Elu",
        value: CameronWords.Life,
      },
      { key: "Muud", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Langeb, välja arvatud enne ll/rr)",
    lenitingPrefixes: "Leniting eesliited",
    lenitingAdpositions: "Leniteerivad adpositsioonid",
  },
  stats: {
    phonemes: "Foneemi sagedused",
    clusters: "Konsonantide klastrid",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Info",
    version: "Versioon",
    credits: "Autorid",
    development: "Arendus",
    design: "Disain",
    testing: "Testimine",
    translation: "Tõlge",
    appLanguage: "Rakenduse keel",
    resultsLanguage: "Tulemuste keel",
    dialect: "Dialekt",
    theme: "Theme",
  },
};

export default strings;
