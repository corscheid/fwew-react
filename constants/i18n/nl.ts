import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Bijvoeglijk naamwoord",
  "adp.": "Adpositie",
  "adv.": "Bijwoord",
  "conj.": "Voegwoord",
  "inter.": "Vragend",
  "intj.": "Interjectie",
  "n.": "Naamwoord",
  "num.": "Nummer",
  "part.": "Deeltje",
  "ph.": "Zin",
  "pn.": "Voornaamwoord",
  "prop.n.": "Eigennaam",
  "sbd.": "Subordinator",
  "vim.": "Intransitief modaal werkwoord",
  "vin.": "Intransitief werkwoord",
  "vtr.": "Transitief werkwoord",
  "vtrm.": "Transitief modaal werkwoord",
  "adj., adv.": "Bijvoeglijk naamwoord, Bijwoord",
  "adj., conj.": "Bijvoeglijk naamwoord, Voegwoord",
  "adj., intj.": "Bijvoeglijk naamwoord, Interjectie",
  "adj., n.": "Bijvoeglijk naamwoord, Naamwoord",
  "adv., conj.": "Bijwoord, Voegwoord",
  "adv., intj.": "Bijwoord, Interjectie",
  "adv., n.": "Bijwoord, Naamwoord",
  "inter., intj.": "Vragend, Interjectie",
  "n., intj.": "Naamwoord, Interjectie",
  "part., intj.": "Deeltje, Interjectie",
  "vin., intj.": "Intransitief werkwoord, Interjectie",
  "vin., vtr.": "Intransitief of transitief werkwoord",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "resultaat" : "resultaten"),
    noResults: "geen resultaten",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Zoeken",
    list: "Lijst",
    random: "Willekeurig",
    numbers: "Getallen",
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

    names: "Namen",

    favorites: "Favorieten",
    settings: "Instellingen",
  },
  search: {
    search: "Zoeken",
    naviOnly: "Alleen Na'vi woorden zoeken",
    audio: "Audio",
    favorite: "Favoriet",
    navi: "Na'vi",
    partOfSpeech: "Woordsoort",
    definition: "Definitie",
    breakdown: "Lettergrepen",
    infixDots: "Tussenvoegsels (dots)",
    infixSlots: "Tussenvoegsels (slots)",
    prefixes: "Voorvoegsels",
    infixes: "Tussenvoegsels",
    suffixes: "Achtervoegsels",
    lenition: "Lenitie",
    comment: "Commentaar",
    source: "Bron",
    ipa: "IPA",
  },
  list: {
    list: "Lijst",
    listOptions: "Lijstopties",
    listMenu: {
      whatValues: [
        { value: "pos", description: "woordsoort" },
        { value: "word", description: "woord" },
        {
          value: "words",
          description: "woorden in volgorde van publicatie",
        },
        { value: "syllables", description: "aantal lettergrepen" },
        {
          value: "stress",
          description: "positie van beklemtoonde lettergreep",
        },
        { value: "length", description: "lengte van het woord in fonemen" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "begint met" },
          { value: "ends", description: "eindigt met" },
          { value: "is", description: "is" },
          { value: "has", description: "heeft" },
          { value: "like", description: "is als" },
          { value: "not-starts", description: "begint niet met" },
          { value: "not-ends", description: "eindigt niet met" },
          { value: "not-is", description: "is niet" },
          { value: "not-has", description: "heeft niet" },
          { value: "not-like", description: "is niet als" },
        ],
        word: [
          { value: "starts", description: "begint met" },
          { value: "ends", description: "eindigt met" },
          { value: "has", description: "heeft" },
          { value: "like", description: "is als" },
          { value: "not-starts", description: "begint niet met" },
          { value: "not-ends", description: "eindigt niet met" },
          { value: "not-has", description: "heeft niet" },
          { value: "not-like", description: "is niet als" },
        ],
        words: [
          { value: "first", description: "oudste woorden" },
          { value: "last", description: "nieuwste woorden" },
        ],
        syllables: [
          { value: "<", description: "minder dan" },
          { value: "<=", description: "minder dan of gelijk aan" },
          { value: "=", description: "gelijk aan" },
          { value: ">=", description: "groter dan of gelijk aan" },
          { value: ">", description: "groter dan" },
          { value: "!=", description: "niet gelijk aan" },
        ],
        stress: [
          { value: "<", description: "minder dan" },
          { value: "<=", description: "minder dan of gelijk aan" },
          { value: "=", description: "gelijk aan" },
          { value: ">=", description: "groter dan of gelijk aan" },
          { value: ">", description: "groter dan" },
          { value: "!=", description: "niet gelijk aan" },
        ],
        length: [
          { value: "<", description: "minder dan" },
          { value: "<=", description: "minder dan of gelijk aan" },
          { value: "=", description: "gelijk aan" },
          { value: ">=", description: "groter dan of gelijk aan" },
          { value: ">", description: "groter dan" },
          { value: "!=", description: "niet gelijk aan" },
        ],
      },
    },
    and: "en...",
  },
  random: {
    random: "Willekeurig",
    randomOptions: "Willukeurige opties",
    numWords: "Aantal willekeurige woorden",
    where: "waarbij...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Enkel",
    full: "Volledig",
    alu: "Alu",
    options: "Opties",
    numNames: "Aantal te Genereren Namen",
    copyAll: "Kopieer Alles",
    dialect: "Dialect",
    dialects: [
      { name: "forest", value: "forest" },
      // { name: "interdialect", value: "interdialect" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "willekeurig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Aantal lettergrepen",
  },
  nameFull: {
    numSyllables1: "Aantal lettergrepen in de voornaam",
    numSyllables2: "Aantal lettergrepen in de achternaam",
    numSyllables3: "Aantal lettergrepen in de naam van de ouder",
    nameEnding: "Naam Einde",
    nameEndingHint:
      "-'itan voor mannelijk, -'ite voor vrouwelijk, -'itu voor non-binair (niet-canoniek)",
    nameEndingOptions: [
      { value: "random", name: "willekeurig" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Aantal lettergrepen in de voornaam",
    nounMode: "Naamwoordmodus",
    adjMode: "Bijvoeglijk naamwoordmodus",
    nounModes: [
      { name: "iets", value: "something" },
      { name: "normaal naamwoord", value: "normal noun" },
      { name: "werkwoord-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "elke", value: "any" },
      { name: "iets", value: "something" },
      { name: "geen", value: "none" },
      { name: "normaal bijvoeglijk naamwoord", value: "normal adjective" },
      { name: "genitief naamwoord", value: "genitive noun" },
      { name: "oorsprong naamwoord", value: "origin noun" },
      { name: "deelwoord werkwoord", value: "participle verb" },
      { name: "actief deelwoord werkwoord", value: "active participle verb" },
      { name: "passief deelwoord werkwoord", value: "passive participle verb" },
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
    clusters: "Medeklinkerclusters",
  },
  settings: {
    about: "Over",
    version: "Versie",
    credits: "Credits",
    development: "Ontwikkeling",
    design: "Ontwerp",
    testing: "Testen",
    translation: "Vertaling",
    appLanguage: "Taal van app",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Taal van resultaten",
  },
};

export default strings;
