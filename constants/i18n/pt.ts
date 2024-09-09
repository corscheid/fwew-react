import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjetivo",
  "adp.": "Adposição",
  "adv.": "Advérbio",
  "conj.": "Conjunção",
  "inter.": "Interrogativo",
  "intj.": "Interjeição",
  "n.": "Substantivo",
  "num.": "Número",
  "part.": "Partícula",
  "ph.": "Frase",
  "pn.": "Pronome",
  "prop.n.": "Nome Próprio",
  "sbd.": "Subordinador",
  "vim.": "Verbo Modal Intransitivo",
  "vin.": "Verbo intransitivo",
  "vtr.": "Verbo Transitivo",
  "vtrm.": "Verbo Modal Transitivo",
  "adj., adv.": "Adjetivo, Advérbio",
  "adj., conj.": "Adjetivo, Conjunção",
  "adj., intj.": "Adjetivo, Interjeição",
  "adj., n.": "Adjetivo, Substantivo",
  "adv., conj.": "Advérbio, Conjunção",
  "adv., intj.": "Advérbio, Interjeição",
  "adv., n.": "Advérbio, Substantivo",
  "inter., intj.": "Interrogativo, Interjeição",
  "n., intj.": "Substantivo, Interjeição",
  "part., intj.": "Partícula, Interjeição",
  "vin., intj.": "Verbo intransitivo, Interjeição",
  "vin., vtr.": "Verbo Intransitivo ou Transitivo",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "resultado" : "resultados"),
    noResults: "nenhum resultado",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Procurar",
    list: "Lista",
    random: "Aleatório",
    numbers: "Números",
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

    names: "Nomes",

    favorites: "Favoritos",
    settings: "Configurações",
  },
  search: {
    search: "Procurar",
    naviOnly: "Procure apenas palavras Na'vi",
    audio: "Audio",
    favorite: "Favorito",
    navi: "Na'vi",
    partOfSpeech: "Classe gramatical",
    definition: "Definição",
    breakdown: "Separação sílabica",
    infixDots: "Infixos (pontos)",
    infixSlots: "Infixos (posição)",
    prefixes: "Prefixos",
    infixes: "Infixos",
    suffixes: "Sufixos",
    lenition: "Lenição",
    comment: "Comentário",
    source: "Fonte",
    ipa: "IPA",
  },
  list: {
    list: "Lista",
    listOptions: "Opções da Lista",
    listMenu: {
      whatValues: [
        { value: "pos", description: "classe gramatical" },
        { value: "word", description: "palavra" },
        {
          value: "words",
          description: "palavras por ordem de lançamento",
        },
        { value: "syllables", description: "número de sílabas" },
        { value: "stress", description: "posição da sílaba estressada" },
        { value: "length", description: "comprimento da palavra em fonemas" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "começa com" },
          { value: "ends", description: "termina com" },
          { value: "is", description: "é" },
          { value: "has", description: "tem" },
          { value: "like", description: "é como" },
          { value: "not-starts", description: "não começa com" },
          { value: "not-ends", description: "não termina com" },
          { value: "not-is", description: "não é" },
          { value: "not-has", description: "não tem" },
          { value: "not-like", description: "não é como" },
        ],
        word: [
          { value: "starts", description: "começa com" },
          { value: "ends", description: "termina com" },
          { value: "has", description: "tem" },
          { value: "like", description: "é como" },
          { value: "not-starts", description: "não começa com" },
          { value: "not-ends", description: "não termina com" },
          { value: "not-has", description: "não tem" },
          { value: "not-like", description: "não é como" },
        ],
        words: [
          { value: "first", description: "palavras mais antigas" },
          { value: "last", description: "palavras mais recentes" },
        ],
        syllables: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que ou igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "maior ou igual a" },
          { value: ">", description: "maior que" },
          { value: "!=", description: "diferente de" },
        ],
        stress: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que ou igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "maior ou igual a" },
          { value: ">", description: "maior que" },
          { value: "!=", description: "diferente de" },
        ],
        length: [
          { value: "<", description: "menos que" },
          { value: "<=", description: "menos que ou igual a" },
          { value: "=", description: "igual a" },
          { value: ">=", description: "maior ou igual a" },
          { value: ">", description: "maior que" },
          { value: "!=", description: "diferente de" },
        ],
      },
    },
    and: "e...",
  },
  random: {
    random: "Aleatório",
    randomOptions: "Opções de Randomização",
    numWords: "Número de palavras aleatórias",
    where: "onde...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Simples",
    full: "Inteiro",
    alu: "Alu",
    options: "Opções",
    numNames: "Número de nomes gerados",
    copyAll: "Copiar todos",
    dialect: "Dialeto",
    dialects: [
      { name: "floresta", value: "forest" },
      // { name: "interdialeto", value: "interdialect" },
      { name: "recife", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aleatório", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Número de sílabas",
  },
  nameFull: {
    numSyllables1: "Número de sílabas no primeiro nome",
    numSyllables2: "Número de sílabas no nome de familia",
    numSyllables3: "Número de sílabas no nome do parente",
    nameEnding: "Final do nome",
    nameEndingHint:
      "-'itan para masculino, -'ite para feminino, -'itu para não binário (não canônico)",
    nameEndingOptions: [
      { value: "random", name: "aleatório" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Número de sílabas no primeiro nome",
    nounMode: "Modo substantivo",
    adjMode: "Modo adjetivo",
    nounModes: [
      { name: "alguma coisa", value: "something" },
      { name: "substantivo comum", value: "normal noun" },
      { name: "fazedor de verbo", value: "verb-er" },
    ],
    adjModes: [
      { name: "qualquer um", value: "any" },
      { name: "alguma coisa", value: "something" },
      { name: "nenhum", value: "none" },
      { name: "adjetivo normal", value: "normal adjective" },
      { name: "substantivo genitivo", value: "genitive noun" },
      { name: "substantivo de origem", value: "origin noun" },
      { name: "verbo no particípio", value: "participle verb" },
      {
        name: "verbo no particípio ativo/presente",
        value: "active participle verb",
      },
      {
        name: "verbo verbo no particípio passivo/passado",
        value: "passive participle verb",
      },
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
    clusters: "Aglomerados de consoantes",
  },
  settings: {
    about: "Sobre",
    version: "Versão",
    credits: "Créditos",
    development: "Desenvolvimento",
    design: "Design",
    testing: "Teste",
    translation: "Tradução",
    appLanguage: "Idioma do Aplicativo",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Idioma dos Resultados",
  },
};

export default strings;
