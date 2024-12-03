import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Adjetivo" },
  "adp.": { abbr: "adp.", name: "Adposición" },
  "adv.": { abbr: "adv.", name: "Adverbio" },
  "conj.": { abbr: "conj.", name: "Conjunción" },
  "inter.": { abbr: "inter.", name: "Interrogativo" },
  "intj.": { abbr: "intj.", name: "Interjección" },
  "n.": { abbr: "n.", name: "Nombre" },
  "num.": { abbr: "num.", name: "Número" },
  "part.": { abbr: "part.", name: "Partícula" },
  "ph.": { abbr: "ph.", name: "Frase" },
  "pn.": { abbr: "pn.", name: "Pronombre" },
  "prop.n.": { abbr: "prop.n.", name: "Nombre propio" },
  "sbd.": { abbr: "sbd.", name: "Subordinador" },
  "vim.": { abbr: "vim.", name: "Verbo modal intransitivo" },
  "vin.": { abbr: "vin.", name: "Verbo intransitivo" },
  "vtr.": { abbr: "vtr.", name: "Verbo transitivo" },
  "vtrm.": { abbr: "vtrm.", name: "Verbo modal transitivo" },
  "adj., adv.": { abbr: "adj., adv.", name: "Adjetivo, Adverbio" },
  "adj., conj.": { abbr: "adj., conj.", name: "Adjetivo, Conjunción" },
  "adj., intj.": { abbr: "adj., intj.", name: "Adjetivo, Interjección" },
  "adj., n.": { abbr: "adj., n.", name: "Adjetivo, Nombre" },
  "adv., conj.": { abbr: "adv., conj.", name: "Adverbio, Conjunción" },
  "adv., intj.": { abbr: "adv., intj.", name: "Adverbio, Interjección" },
  "adv., n.": { abbr: "adv., n.", name: "Adverbio, Nombre" },
  "adv., part.": { abbr: "adv., part.", name: "Adverbio, Partícula" },
  "conj., adj.": { abbr: "conj., adj.", name: "Conjunción, Adjetivo" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogativo, Interjección",
  },
  "n., intj.": { abbr: "n., intj.", name: "Nombre, Interjección" },
  "part., intj.": { abbr: "part., intj.", name: "Partícula, Interjección" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Verbo intransitivo, Interjección",
  },
  "vin., vtr.": { abbr: "vin., vtr.", name: "Verbo intransitivo o transitivo" },
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
    results: (count) => (count === 1 ? "resultado" : "resultados"),
    noResults: "sin resultados",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Busca",
    list: "Lista",
    random: "Aleatorio",
    numbers: "Números",
    other: "Otros",

    lenition: "Lenición",
    stats: "Estadísticas",
    valid: "Válido",
    lists: "Listas",

    cameronWords: "Palabras de Cameron",
    homonyms: "Homónimos",
    multiIPA: "IPA múltiple",
    oddballs: "Bichos Raros",
    profanity: "Profanidad",
    that: "Que",

    names: "Nombres",

    favorites: "Favoritos",
    settings: "Ajustes",
  },
  search: {
    search: "Busca",
    naviOnly: "Sólo busca palabras Na'vi",
    audio: "Audio",
    favorite: "Favorito",
    navi: "Na'vi",
    partOfSpeech: "Parte de la oración",
    definition: "Definición",
    breakdown: "Sílabas",
    infixDots: "Infijos (puntos)",
    infixSlots: "Infijs (slots)",
    prefixes: "Prefijos",
    infixes: "Infijes",
    suffixes: "Sufijos",
    lenition: "Lenición",
    comment: "Comentario",
    source: "Fuente",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Opciones de Lista",
    listMenu: {
      whatValues: [
        { value: "pos", description: "parte de la oración" },
        {
          value: "word",
          description: "palabra",
        },
        {
          value: "words",
          description: "palabras en orden de lanzamiento",
        },
        { value: "syllables", description: "número de sílabas" },
        { value: "stress", description: "posición de la sílaba acentuada" },
        { value: "length", description: "longitud de la palabra en fonemas" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "empieza con" },
          { value: "ends", description: "termina con" },
          { value: "is", description: "es" },
          { value: "has", description: "tiene" },
          { value: "like", description: "es como" },
          { value: "not-starts", description: "no empieza con" },
          { value: "not-ends", description: "no termina con" },
          { value: "not-is", description: "no es" },
          { value: "not-has", description: "no tiene" },
          { value: "not-like", description: "no es como" },
        ],
        word: [
          { value: "starts", description: "empieza con" },
          { value: "ends", description: "termina con" },
          { value: "has", description: "tiene" },
          { value: "like", description: "es como" },
          { value: "not-starts", description: "no empieza con" },
          { value: "not-ends", description: "no termina con" },
          { value: "not-has", description: "no tiene" },
          { value: "not-like", description: "no es como" },
        ],
        words: [
          { value: "first", description: "palabras más antiguas" },
          { value: "last", description: "palabras más nuevas" },
        ],
        syllables: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que o igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "mayor que o igual a" },
          { value: ">", description: "mayor que" },
          { value: "!=", description: "no es igual a" },
        ],
        stress: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que o igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "mayor que o igual a" },
          { value: ">", description: "mayor que" },
          { value: "!=", description: "no es igual a" },
        ],
        length: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que o igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "mayor que o igual a" },
          { value: ">", description: "mayor que" },
          { value: "!=", description: "no es igual a" },
        ],
      },
    },
    and: "y...",
  },
  random: {
    random: "Aleatorio",
    randomOptions: "Opciones Aleatorias",
    numWords: "Número de palabras aleatorias",
    where: "donde...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Sencillo",
    full: "Completo",
    alu: "Alu",
    options: "Opciones",
    numNames: "Número de Nombres a Generar",
    copyAll: "Copiar Todo",
    dialect: "Dialecto",
    dialects: [
      { name: "bosque", value: "forest" },
      // { name: "interdialectal", value: "interdialect" },
      { name: "arrecife", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aleatorio", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Número de Sílabas",
  },
  nameFull: {
    numSyllables1: "Número de Sílabas en el Nombre",
    numSyllables2: "Número de Sílabas en el Apellido",
    numSyllables3: "Número de Sílabas en el Nombre del Padre",
    nameEnding: "Terminación del Nombre",
    nameEndingHint:
      "-'itan para masculino, -'ite para femenino, -'itu para no binario (no canónico)",
    nameEndingOptions: [
      { value: "random", name: "aleatorio" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Número de Sílabas en el Nombre",
    nounMode: "Modo Sustantivo",
    adjMode: "Modo Adjetivo",
    nounModes: [
      { name: "algo", value: "something" },
      { name: "sustantivo normal", value: "normal noun" },
      { name: "verbo-dor", value: "verb-er" },
    ],
    adjModes: [
      { name: "cualquier", value: "any" },
      { name: "algo", value: "something" },
      { name: "ninguno", value: "none" },
      { name: "adjetivo normal", value: "normal adjective" },
      { name: "sustantivo genitivo", value: "genitive noun" },
      { name: "sustantivo de origen", value: "origin noun" },
      { name: "verbo participio", value: "participle verb" },
      { name: "verbo participio activo", value: "active participle verb" },
      { name: "verbo participio pasivo", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "Nombres A1",
        value: CameronWords.A1Names,
      },
      {
        key: "Nombres A2",
        value: CameronWords.A2Names,
      },
      {
        key: "Sustantivos",
        value: CameronWords.Nouns,
      },
      {
        key: "Vida",
        value: CameronWords.Life,
      },
      { key: "Otro", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Se va, excepto antes de ll/rr)",
    lenitingPrefixes: "Prefijos lenitivos",
    lenitingAdpositions: "Adposiciónes lenitivas",
  },
  stats: {
    phonemes: "Frecuencias de fonemas",
    clusters: "Grupos de consonantes",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Acerca de",
    version: "Versión",
    credits: "Créditos",
    development: "Desarrollo",
    design: "Diseño",
    testing: "Ensayo",
    translation: "Traducción",
    appLanguage: "Idioma de la aplicación",
    resultsLanguage: "Idioma de los resultados",
    dialect: "Dialecto",
    theme: "Theme",
  },
};

export default strings;
