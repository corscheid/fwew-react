import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Adjetivo" },
  "adp.": { abbr: "adp.", name: "Adposição" },
  "adv.": { abbr: "adv.", name: "Advérbio" },
  "conj.": { abbr: "conj.", name: "Conjunção" },
  "inter.": { abbr: "inter.", name: "Interrogativo" },
  "intj.": { abbr: "intj.", name: "Interjeição" },
  "n.": { abbr: "n.", name: "Substantivo" },
  "num.": { abbr: "num.", name: "Número" },
  "part.": { abbr: "part.", name: "Partícula" },
  "ph.": { abbr: "ph.", name: "Frase" },
  "pn.": { abbr: "pn.", name: "Pronome" },
  "prop.n.": { abbr: "prop.n.", name: "Nome Próprio" },
  "sbd.": { abbr: "sbd.", name: "Subordinador" },
  "vim.": { abbr: "vim.", name: "Verbo Modal Intransitivo" },
  "vin.": { abbr: "vin.", name: "Verbo intransitivo" },
  "vtr.": { abbr: "vtr.", name: "Verbo Transitivo" },
  "vtrm.": { abbr: "vtrm.", name: "Verbo Modal Transitivo" },
  "adj., adv.": { abbr: "adj., adv.", name: "Adjetivo, Advérbio" },
  "adj., conj.": { abbr: "adj., conj.", name: "Adjetivo, Conjunção" },
  "adj., intj.": { abbr: "adj., intj.", name: "Adjetivo, Interjeição" },
  "adj., n.": { abbr: "adj., n.", name: "Adjetivo, Substantivo" },
  "adv., conj.": { abbr: "adv., conj.", name: "Advérbio, Conjunção" },
  "adv., intj.": { abbr: "adv., intj.", name: "Advérbio, Interjeição" },
  "adv., n.": { abbr: "adv., n.", name: "Advérbio, Substantivo" },
  "adv., part.": { abbr: "adv., part.", name: "Advérbio, Partícula" },
  "conj., adj.": { abbr: "conj., adj.", name: "Conjunção, Adjetivo" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogativo, Interjeição",
  },
  "n., intj.": { abbr: "n., intj.", name: "Substantivo, Interjeição" },
  "part., intj.": { abbr: "part., intj.", name: "Partícula, Interjeição" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Verbo intransitivo, Interjeição",
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
    other: "Outro",

    lenition: "Lenição",
    stats: "Estátisticas",
    valid: "Válido",
    lists: "Listas",

    cameronWords: "Palavras do Cameron",
    homonyms: "Homônimo",
    multiIPA: "IPA Múltiplo",
    oddballs: "Bolas curvas",
    profanity: "Insultos",
    that: "Aquilo",

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
          { value: "not-has", description: "não possui" },
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
          { value: "<", description: "menor que" },
          { value: "<=", description: "menor que ou igual a" },
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
    randomOptions: "Opções de Aleatorização",
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
        key: "Nomes em A1",
        value: CameronWords.A1Names,
      },
      {
        key: "Nomes em A2",
        value: CameronWords.A2Names,
      },
      {
        key: "Substantivos",
        value: CameronWords.Nouns,
      },
      {
        key: "Vida",
        value: CameronWords.Life,
      },
      { key: "Outro", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Desaparece, exceto antes de ll/rr)",
    lenitingPrefixes: "Prefixos que causam lenição",
    lenitingAdpositions: "Adposições que causam lenição",
  },
  stats: {
    phonemes: "Frequência de Fonemas",
    clusters: "Aglomerados de Consoantes",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Sobre o Fwew",
    version: "Versão",
    credits: "Créditos",
    development: "Desenvolvimento",
    design: "Design",
    testing: "Teste",
    translation: "Tradução",
    appLanguage: "Idioma do Aplicativo",
    resultsLanguage: "Idioma dos Resultados",
    dialect: "Dialeto",
    theme: "Theme",
  },
};

export default strings;
