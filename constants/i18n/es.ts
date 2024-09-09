import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjetivo",
  "adp.": "Adposición",
  "adv.": "Adverbio",
  "conj.": "Conjunción",
  "inter.": "Interrogativo",
  "intj.": "Interjección",
  "n.": "Nombre",
  "num.": "Número",
  "part.": "Partícula",
  "ph.": "Frase",
  "pn.": "Pronombre",
  "prop.n.": "Nombre propio",
  "sbd.": "Subordinador",
  "vim.": "Verbo modal intransitivo",
  "vin.": "Verbo intransitivo",
  "vtr.": "Verbo transitivo",
  "vtrm.": "Verbo modal transitivo",
  "adj., adv.": "Adjetivo, Adverbio",
  "adj., conj.": "Adjetivo, Conjunción",
  "adj., intj.": "Adjetivo, Interjección",
  "adj., n.": "Adjetivo, Nombre",
  "adv., conj.": "Adverbio, Conjunción",
  "adv., intj.": "Adverbio, Interjección",
  "adv., n.": "Adverbio, Nombre",
  "inter., intj.": "Interrogativo, Interjección",
  "n., intj.": "Nombre, Interjección",
  "part., intj.": "Partícula, Interjección",
  "vin., intj.": "Verbo intransitivo, Interjección",
  "vin., vtr.": "Verbo intransitivo o transitivo",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Acerca de",
    version: "Versión",
    credits: "Créditos",
    development: "Desarrollo",
    design: "Diseño",
    testing: "Ensayo",
    translation: "Traducción",
    appLanguage: "Idioma de la aplicación",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Idioma de los resultados",
  },
};

export default strings;
