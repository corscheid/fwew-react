import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "omadussõna",
  "adp.": "adpositsioon",
  "adv.": "adverb",
  "conj.": "sidesõna",
  "inter.": "interrogatiiv",
  "intj.": "interjektsioon",
  "n.": "nimisõna",
  "num.": "number",
  "part.": "partikkel",
  "ph.": "fraas",
  "pn.": "asemäärsõna",
  "prop.n.": "pärisnimi",
  "sbd.": "subordinatiiv",
  "vim.": "intransitiivne modaalverb",
  "vin.": "intransitiivne verb",
  "vtr.": "transitiivne verb",
  "vtrm.": "transitiivne modaalverb",
  "adj., adv.": "omadussõna, adverb",
  "adj., conj.": "omadussõna, sidesõna",
  "adj., intj.": "omadussõna, interjektsioon",
  "adj., n.": "omadussõna, nimisõna",
  "adv., conj.": "adverb, sidesõna",
  "adv., intj.": "adverb, interjektsioon",
  "adv., n.": "adverb, nimisõna",
  "inter., intj.": "interrogatiiv, interjektsioon",
  "n., intj.": "nimisõna, interjektsioon",
  "part., intj.": "partikkel, interjektsioon",
  "vin., intj.": "intransitiivne verb, interjektsioon",
  "vin., vtr.": "intransitiivne või transitiivne verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Info",
    version: "Versioon",
    credits: "Autorid",
    development: "Arendus",
    design: "Disain",
    testing: "Testimine",
    translation: "Tõlge",
    appLanguage: "Rakenduse keel",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Tulemuste keel",
  },
};

export default strings;
