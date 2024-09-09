import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Adjectif",
  "adp.": "Adposition",
  "adv.": "Adverbe",
  "conj.": "Conjonction",
  "inter.": "Interrogatif",
  "intj.": "Interjection",
  "n.": "Nom",
  "num.": "Nombre",
  "part.": "Particule",
  "ph.": "Phrase",
  "pn.": "Pronom",
  "prop.n.": "Nom propre",
  "sbd.": "Subordonnant",
  "vim.": "Verbe modal intransitif",
  "vin.": "Verbe intransitif",
  "vtr.": "Verbe transitif",
  "vtrm.": "Verbe modal transitif",
  "adj., adv.": "Adjectif, Adverbe",
  "adj., conj.": "Adjectif, Conjonction",
  "adj., intj.": "Adjectif, Interjection",
  "adj., n.": "Adjectif, Nom",
  "adv., conj.": "Adverbe, Conjonction",
  "adv., intj.": "Adverbe, Interjection",
  "adv., n.": "Adverbe, Nom",
  "inter., intj.": "Interrogatif, Interjection",
  "n., intj.": "Nom, Interjection",
  "part., intj.": "Particule, Interjection",
  "vin., intj.": "Verbe intransitif, Interjection",
  "vin., vtr.": "Verbe intransitif ou transitif",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "À propos",
    version: "Version",
    credits: "Crédits",
    development: "Développement",
    design: "Design",
    testing: "Test",
    translation: "Traduction",
    appLanguage: "Langue de l'application",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Langue des résultats",
  },
};

export default strings;
