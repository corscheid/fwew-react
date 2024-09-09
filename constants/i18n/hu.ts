import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjektiv",
  "adp.": "Adposition",
  "adv.": "Adverb",
  "conj.": "Konjunktion",
  "inter.": "Interrogativ",
  "intj.": "Interjektion",
  "n.": "Nomen",
  "num.": "Nummer",
  "part.": "Partikel",
  "ph.": "Phrase",
  "pn.": "Pronomen",
  "prop.n.": "Eigenname",
  "sbd.": "Subordinator",
  "vim.": "intransitives Modalverb",
  "vin.": "intransitives Verb",
  "vtr.": "transitives Verb",
  "vtrm.": "transitives Modalverb",
  "adj., adv.": "Adjektiv, Adverb",
  "adj., conj.": "Adjektiv, Konjunktion",
  "adj., intj.": "Adjektiv, Interjektion",
  "adj., n.": "Adjektiv, Nomen",
  "adv., conj.": "Adverb, Konjunktion",
  "adv., intj.": "Adverb, Interjektion",
  "adv., n.": "Adverb, Nomen",
  "inter., intj.": "Interrogativ, Interjektion",
  "n., intj.": "Nomen, Interjektion",
  "part., intj.": "Partikel, Interjektion",
  "vin., intj.": "intransitives Verb, Interjektion",
  "vin., vtr.": "intransitives oder transitives Verb",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Névjegy",
    version: "Verzió",
    credits: "Készítők",
    development: "Fejlesztés",
    design: "Design",
    testing: "Tesztelés",
    translation: "Fordítás",
    appLanguage: "Alkalmazás nyelve",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Eredmények nyelve",
  },
};

export default strings;
