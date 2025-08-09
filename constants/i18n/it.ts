import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Aggettivo" },
  "adp.": { abbr: "adp.", name: "Apposizione" },
  "adv.": { abbr: "adv.", name: "Avverbio" },
  "conj.": { abbr: "conj.", name: "Congiunzione" },
  "inter.": { abbr: "inter.", name: "Interrogativo" },
  "intj.": { abbr: "intj.", name: "Interiezione" },
  "n.": { abbr: "n.", name: "Sostantivo" },
  "num.": { abbr: "num.", name: "Numero" },
  "part.": { abbr: "part.", name: "Particella" },
  "ph.": { abbr: "ph.", name: "Frase" },
  "pn.": { abbr: "pn.", name: "Pronome" },
  "prop.n.": { abbr: "prop.n.", name: "Nome Proprio" },
  "sbd.": { abbr: "sbd.", name: "Subordinante" },
  "vim.": { abbr: "vim.", name: "Verbo Modale Intransitivo" },
  "vin.": { abbr: "vin.", name: "Verbo Intransitivo" },
  "vtr.": { abbr: "vtr.", name: "Verbo Transitivo" },
  "vtrm.": { abbr: "vtrm.", name: "Verbo Modale Transitivo" },
  "adj., adv.": { abbr: "adj., adv.", name: "Aggettivo, Avverbio" },
  "adj., conj.": { abbr: "adj., conj.", name: "Aggettivo, Congiunzione" },
  "adj., intj.": { abbr: "adj., intj.", name: "Aggettivo, Interiezione" },
  "adj., n.": { abbr: "adj., n.", name: "Aggettivo, Nome" },
  "adv., conj.": { abbr: "adv., conj.", name: "Avverbio, Congiunzione" },
  "adv., intj.": { abbr: "adv., intj.", name: "Avverbio, Interiezione" },
  "adv., n.": { abbr: "adv., n.", name: "Avverbio, Nome" },
  "adv., part.": { abbr: "adv., part.", name: "Avverbio, Particella" },
  "conj., adj.": { abbr: "conj., adj.", name: "Congiunzione, Aggettivo" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogativo, Interiezione",
  },
  "n., intj.": { abbr: "n., intj.", name: "Nome, Interiezione" },
  "part., intj.": { abbr: "part., intj.", name: "Particella, Interiezione" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Verbo Intransitivo, Interiezione",
  },
};

const partOfSpeechList = Object.entries(partOfSpeech).map(
  ([value, { name }]) => ({ name, value })
);

// TODO
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

// TODO
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
    results: (count) => (count === 1 ? "risultato" : "risultati"),
    noResults: "nessun risultato",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Cerca",
    list: "Lista",
    random: "Casuale",
    numbers: "Numeri",
    other: "Altro",

    lenition: "Lenizione",
    stats: "Statistiche",
    valid: "Valido",
    lists: "Liste",

    allWords: "Tutte le parole", // TODO
    cameronWords: "Parole di Cameron",
    homonyms: "Omonimi",
    multiIPA: "Multi IPA",
    oddballs: "Eccezioni",
    profanity: "Turpiloquio",
    that: "Quello",

    names: "Nomi",

    favorites: "Preferiti",
    settings: "Impostazioni",
  },
  search: {
    search: "Cerca",
    naviOnly: "Cerca solo parole in Na'vi",
    navi: "Na'vi",
    audio: "Audio",
    favorite: "Preferiti",
    partOfSpeech: "Parte del Discorso",
    definition: "Definizione",
    breakdown: "Divisione in sillabe",
    infixDots: "Infissi (punti)",
    infixSlots: "Infissi (slot)",
    prefixes: "Prefissi",
    infixes: "infissi",
    suffixes: "suffissi",
    lenition: "Lenizione",
    comment: "Commento",
    source: "Fonte",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Opzioni Lista",
    listMenu: {
      whatValues: [
        { value: "pos", description: "parte del discorso" },
        { value: "word", description: "parola" },
        { value: "words", description: "Parole in ordine di pubblicazione" },
        { value: "syllables", description: "numero di sillabe" },
        { value: "stress", description: "Posizione della sillaba accentata" },
        { value: "length", description: "Lunghezza della parola in fonemi" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "comincia con" },
          { value: "ends", description: "finisce con" },
          { value: "is", description: "è" },
          { value: "has", description: "ha" },
          { value: "like", description: "è come" },
          { value: "not-starts", description: "non comincia con" },
          { value: "not-ends", description: "non finisce con" },
          { value: "not-is", description: "non è" },
          { value: "not-has", description: "non ha" },
          { value: "not-like", description: "non è come" },
        ],
        word: [
          { value: "starts", description: "comincia con" },
          { value: "ends", description: "finisce con" },
          { value: "has", description: "ha" },
          { value: "like", description: "è come" },
          { value: "not-starts", description: "non comincia con" },
          { value: "not-ends", description: "non finisce con" },
          { value: "not-has", description: "non ha" },
          { value: "not-like", description: "non è come" },
        ],
        words: [
          { value: "first", description: "più vecchio" },
          { value: "last", description: "più nuovo" },
        ],
        syllables: [
          { value: "<", description: "è minore di" },
          { value: "<=", description: "è minore o uguale a" },
          { value: "=", description: "è uguale a" },
          { value: ">=", description: "è maggiore o uguale a" },
          { value: ">", description: "è maggiore di" },
          { value: "!=", description: "non è uguale a" },
        ],
        stress: [
          { value: "<", description: "è minore di" },
          { value: "<=", description: "è minore o uguale a" },
          { value: "=", description: "è uguale a" },
          { value: ">=", description: "è maggiore o uguale a" },
          { value: ">", description: "è maggiore di" },
          { value: "!=", description: "non è uguale a" },
        ],
        length: [
          { value: "<", description: "è minore di" },
          { value: "<=", description: "è minore o uguale a" },
          { value: "=", description: "è uguale a" },
          { value: ">=", description: "è maggiore o uguale a" },
          { value: ">", description: "è maggiore di" },
          { value: "!=", description: "non è uguale a" },
        ],
      },
    },
    and: "e...",
  },
  random: {
    random: "Casuale",
    randomOptions: "Opzioni Casuali",
    numWords: "Numero di parole casuali",
    where: "dove...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "ottale:",
    decimal: "decimale:",
  },
  names: {
    single: "Singolo",
    full: "Pieno",
    alu: "Alu",
    options: "Opzioni",
    numNames: "Numero di nomi da generare",
    copyAll: "Copia Tutto",
    dialect: "Dialetto",
    dialects: [
      { name: "Foresta", value: "forest" },
      // { name: "Interdialettale", value: "interdialect" },
      { name: "Reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "casuale", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "numero di sillabe",
  },
  nameFull: {
    numSyllables1: "Numero di sillabe nel primo nome",
    numSyllables2: "Numero di sillabe nel nome di famiglia",
    numSyllables3: "Numero di sillave nel nome del genitore",
    nameEnding: "Finale del nome",
    nameEndingHint:
      "-'itan per maschio, -'ite per femmina, 'itu per in non binari (non canonico)",
    nameEndingOptions: [
      { value: "random", name: "casuale" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Numero di sillabe nel primo nome",
    nounMode: "Modalità sostantivo",
    adjMode: "Modalità aggettivo",
    nounModes: [
      { name: "qualcosa", value: "something" },
      { name: "nome normale", value: "normal noun" },
      { name: "agente", value: "verb-er" },
    ],
    adjModes: [
      { name: "qualsiasi", value: "any" },
      { name: "nessuno", value: "none" },
      { name: "qualcosa", value: "something" },
      { name: "participio attivo del verbo", value: "active participle verb" },
      { name: "genitivo", value: "genitive noun" },
      { name: "aggettivo normale", value: "normal adjective" },
      { name: "nome di origine", value: "origin noun" },
      { name: "verbo al participio ", value: "participle verb" },
      { name: "vebo al participio passivo ", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "A1 Nomi",
        value: CameronWords.A1Names,
      },
      {
        key: "A2 Nomi",
        value: CameronWords.A2Names,
      },
      {
        key: "Nomi",
        value: CameronWords.Nouns,
      },
      {
        key: "Vita",
        value: CameronWords.Life,
      },
      { key: "Altro", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Cade, se non prima di ll/rr)",
    lenitingPrefixes: "Prefisso Lenitivo",
    lenitingAdpositions: "Apposizione lenitiva",
  },
  stats: {
    phonemes: "Frequenze dei fonemi",
    clusters: "Gruppi consonantici",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "A proposito di Fwew",
    version: "Versione",
    credits: "Crediti",
    development: "Sviluppo",
    design: "Design",
    testing: "Testing",
    translation: "Traduzione",
    appLanguage: "App Linguaggio",
    resultsLanguage: "Risultati Linguaggio",
    dialect: "Dialetto",
    theme: "Theme", // TODO
    colorScheme: "Color Scheme", // TODO
    colorSchemes: [
      { name: "dark", value: "dark" }, // TODO
      { name: "light", value: "light" }, // TODO
      { name: "auto", value: "auto" }, // TODO
    ],
  },
};

export default strings;
