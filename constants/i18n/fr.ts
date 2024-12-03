import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Adjectif" },
  "adp.": { abbr: "adp.", name: "Adposition" },
  "adv.": { abbr: "adv.", name: "Adverbe" },
  "conj.": { abbr: "conj.", name: "Conjonction" },
  "inter.": { abbr: "inter.", name: "Interrogatif" },
  "intj.": { abbr: "intj.", name: "Interjection" },
  "n.": { abbr: "n.", name: "Nom" },
  "num.": { abbr: "num.", name: "Nombre" },
  "part.": { abbr: "part.", name: "Particule" },
  "ph.": { abbr: "ph.", name: "Phrase" },
  "pn.": { abbr: "pn.", name: "Pronom" },
  "prop.n.": { abbr: "prop.n.", name: "Nom propre" },
  "sbd.": { abbr: "sbd.", name: "Subordonnant" },
  "vim.": { abbr: "vim.", name: "Verbe modal intransitif" },
  "vin.": { abbr: "vin.", name: "Verbe intransitif" },
  "vtr.": { abbr: "vtr.", name: "Verbe transitif" },
  "vtrm.": { abbr: "vtrm.", name: "Verbe modal transitif" },
  "adj., adv.": { abbr: "adj., adv.", name: "Adjectif, Adverbe" },
  "adj., conj.": { abbr: "adj., conj.", name: "Adjectif, Conjonction" },
  "adj., intj.": { abbr: "adj., intj.", name: "Adjectif, Interjection" },
  "adj., n.": { abbr: "adj., n.", name: "Adjectif, Nom" },
  "adv., conj.": { abbr: "adv., conj.", name: "Adverbe, Conjonction" },
  "adv., intj.": { abbr: "adv., intj.", name: "Adverbe, Interjection" },
  "adv., n.": { abbr: "adv., n.", name: "Adverbe, Nom" },
  "adv., part.": { abbr: "adv., part.", name: "Adverbe, Particule" },
  "conj., adj.": { abbr: "conj., adj.", name: "Conjonction, Adjectif" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Interrogatif, Interjection",
  },
  "n., intj.": { abbr: "n., intj.", name: "Nom, Interjection" },
  "part., intj.": { abbr: "part., intj.", name: "Particule, Interjection" },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Verbe intransitif, Interjection",
  },
  "vin., vtr.": { abbr: "vin., vtr.", name: "Verbe intransitif ou transitif" },
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
    results: (count) => (count === 1 ? "résultat" : "résultats"),
    noResults: "pas de résultats",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Recherche",
    list: "Liste",
    random: "Aléatoire",
    numbers: "Nombres",
    other: "Autre",

    lenition: "Lenition",
    stats: "Statistiques",
    valid: "Valide",
    lists: "Listes",

    cameronWords: "Mots de Cameron",
    homonyms: "Homonymes",
    multiIPA: "Multi-API",
    oddballs: "Excentriques",
    profanity: "Obscénité",
    that: "Ce",

    names: "Noms",

    favorites: "Favoris",
    settings: "Paramètres",
  },
  search: {
    search: "Recherche",
    naviOnly: "Rechercher uniquement des mots Na'vi",
    audio: "Audio",
    favorite: "Favori",
    navi: "Na'vi",
    partOfSpeech: "Partie du discours",
    definition: "Définition",
    breakdown: "Syllabes",
    infixDots: "Infixes (points)",
    infixSlots: "Infixes (slots)",
    prefixes: "Préfixes",
    infixes: "Infixes",
    suffixes: "Suffixes",
    lenition: "Lenition",
    comment: "Commentaire",
    source: "Source",
    ipa: "API",
  },
  list: {
    list: "Liste",
    listOptions: "Options de Liste",
    listMenu: {
      whatValues: [
        { value: "pos", description: "partie du discours" },
        { value: "word", description: "mot" },
        {
          value: "words",
          description: "mots par ordre de publication",
        },
        { value: "syllables", description: "nombre de syllabes" },
        { value: "stress", description: "position de la syllabe accentuée" },
        { value: "length", description: "longueur du mot en phonèmes" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "commence par" },
          { value: "ends", description: "se termine par" },
          { value: "is", description: "est" },
          { value: "has", description: "a" },
          { value: "like", description: "est comme" },
          { value: "not-starts", description: "ne commence pas par" },
          { value: "not-ends", description: "ne se termine pas par" },
          { value: "not-is", description: "n'est pas" },
          { value: "not-has", description: "n'a pas" },
          { value: "not-like", description: "n'est pas comme" },
        ],
        word: [
          { value: "starts", description: "commence par" },
          { value: "ends", description: "se termine par" },
          { value: "has", description: "a" },
          { value: "like", description: "est comme" },
          { value: "not-starts", description: "ne commence pas par" },
          { value: "not-ends", description: "ne se termine pas par" },
          { value: "not-has", description: "n'a pas" },
          { value: "not-like", description: "n'est pas comme" },
        ],
        words: [
          { value: "first", description: "mots les plus anciens" },
          { value: "last", description: "mots les plus récents" },
        ],
        syllables: [
          { value: "<", description: "moins que" },
          { value: "<=", description: "moins que ou égal à" },
          { value: "=", description: "égal à" },
          { value: ">=", description: "supérieur ou égal à" },
          { value: ">", description: "supérieur à" },
          { value: "!=", description: "pas égal à" },
        ],
        stress: [
          { value: "<", description: "moins que" },
          { value: "<=", description: "moins que ou égal à" },
          { value: "=", description: "égal à" },
          { value: ">=", description: "supérieur ou égal à" },
          { value: ">", description: "supérieur à" },
          { value: "!=", description: "pas égal à" },
        ],
        length: [
          { value: "<", description: "moins que" },
          { value: "<=", description: "moins que ou égal à" },
          { value: "=", description: "égal à" },
          { value: ">=", description: "supérieur ou égal à" },
          { value: ">", description: "supérieur à" },
          { value: "!=", description: "pas égal à" },
        ],
      },
    },
    and: "et...",
  },
  random: {
    random: "Aléatoire",
    randomOptions: "Options Aléatoires",
    numWords: "Nombre de mots aléatoires",
    where: "où...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "octal:",
    decimal: "decimal:",
  },
  names: {
    single: "Simple",
    full: "Complet",
    alu: "Alu",
    options: "Options",
    numNames: "Nombre de Noms à Générer",
    copyAll: "Copier Tout",
    dialect: "Dialecte",
    dialects: [
      { name: "forêt", value: "forest" },
      // { name: "interdialectal", value: "interdialect" },
      { name: "récif", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aléatoire", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Nombre de Syllabes",
  },
  nameFull: {
    numSyllables1: "Nombre de Syllabes dans le Prénom",
    numSyllables2: "Nombre de Syllabes dans le Nom de Famille",
    numSyllables3: "Nombre de Syllabes dans le Nom du Parent",
    nameEnding: "Terminaison du Nom",
    nameEndingHint:
      "-'itan pour masculin, -'ite pour féminin, -'itu pour non-binaire (non-canonique)",
    nameEndingOptions: [
      { value: "random", name: "aléatoire" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Nombre de Syllabes dans le Prénom",
    nounMode: "Mode Nom",
    adjMode: "Mode Adjectif",
    nounModes: [
      { name: "quelque chose", value: "something" },
      { name: "nom normal", value: "normal noun" },
      { name: "verbe-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "n'importe quel", value: "any" },
      { name: "quelque chose", value: "something" },
      { name: "aucun", value: "none" },
      { name: "adjectif normal", value: "normal adjective" },
      { name: "nom génitif", value: "genitive noun" },
      { name: "nom d'origine", value: "origin noun" },
      { name: "verbe participe", value: "participle verb" },
      { name: "verbe participe actif", value: "active participle verb" },
      { name: "verbe participe passif", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "A1 Noms",
        value: CameronWords.A1Names,
      },
      {
        key: "A2 Noms",
        value: CameronWords.A2Names,
      },
      {
        key: "Noms",
        value: CameronWords.Nouns,
      },
      {
        key: "Vie",
        value: CameronWords.Life,
      },
      { key: "Autre", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "(Gouttes, sauf avant ll/rr)",
    lenitingPrefixes: "Préfixes lénitifs",
    lenitingAdpositions: "Adpositions lénitrices",
  },
  stats: {
    phonemes: "Fréquences des phonèmes",
    clusters: "Groupes de consonnes",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "À propos",
    version: "Version",
    credits: "Crédits",
    development: "Développement",
    design: "Design",
    testing: "Test",
    translation: "Traduction",
    appLanguage: "Langue de l'application",
    resultsLanguage: "Langue des résultats",
    dialect: "Dialecte",
    theme: "Theme",
  },
};

export default strings;
