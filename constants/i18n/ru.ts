import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "прил.", name: "прилагательное" },
  "adp.": { abbr: "адл.", name: "предлог" },
  "adv.": { abbr: "нар.", name: "наречие" },
  "conj.": { abbr: "союз.", name: "союз" },
  "inter.": { abbr: "вопр.", name: "вопросительное слово" },
  "intj.": { abbr: "межд.", name: "междометие" },
  "n.": { abbr: "сущ.", name: "существительное" },
  "num.": { abbr: "числ.", name: "число" },
  "part.": { abbr: "част.", name: "частица" },
  "ph.": { abbr: "фр.", name: "фраза" },
  "pn.": { abbr: "мест.", name: "местоимение" },
  "prop.n.": { abbr: "имя собст.", name: "имя собственное" },
  "sbd.": { abbr: "подч. союз", name: "подчинительный союз" },
  "vim.": { abbr: "мод. неп. гл.", name: "непереходный модальный глагол" },
  "vin.": { abbr: "неп. гл.", name: "непереходный глагол" },
  "vtr.": { abbr: "пер. гл.", name: "переходный глагол" },
  "vtrm.": { abbr: "мод. пер. гл.", name: "переходный модальный глагол" },
  "adj., adv.": { abbr: "прил., нар.", name: "прилагательное, наречие" },
  "adj., conj.": { abbr: "прил., союз", name: "прилагательное, союз" },
  "adj., intj.": { abbr: "прил., межд.", name: "прилагательное, междометие" },
  "adj., n.": { abbr: "прил., сущ.", name: "прилагательное, существительное" },
  "adv., conj.": { abbr: "нар., союз", name: "наречие, союз" },
  "adv., intj.": { abbr: "нар., межд.", name: "наречие, междометие" },
  "adv., n.": { abbr: "нар., сущ.", name: "наречие, имя существительное" },
  "adv., part.": { abbr: "нар., част.", name: "наречие, частица" },
  "conj., adj.": { abbr: "союз., прил.", name: "союз, прилагательное" },
  "inter., intj.": {
    abbr: "вопр., межд.",
    name: "вопросительное слово, междометие",
  },
  "n., intj.": { abbr: "сущ., межд.", name: "существительное, междометие" },
  "part., intj.": { abbr: "част., межд.", name: "частица, междометие" },
  "vin., intj.": {
    abbr: "неп. гл., межд.",
    name: "непереходный глагол, междометие",
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

const getResultText = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `результат`;
  }
  if (
    (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
    (lastTwoDigits < 10 || lastTwoDigits > 20)
  ) {
    return `результата`;
  }
  return `результатов`;
};

const strings: UITranslation = {
  common: {
    results: getResultText,
    noResults: "Нет результатов",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Поиск слов",
    list: "Список",
    random: "Случайные слова",
    numbers: "Числа",
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

    names: "Имена",

    favorites: "Избранное",
    settings: "Настройки",
  },
  search: {
    search: "Поиск",
    naviOnly: "Искать только по словам На'ви",
    audio: "Аудио",
    favorite: "Избранное",
    navi: "На'ви",
    partOfSpeech: "Часть речи",
    definition: "Значение слова",
    breakdown: "Разделение на слоги",
    infixDots: "Инфиксы (показаны точками)",
    infixSlots: "Инфиксы (по позициям)",
    prefixes: "Префиксы",
    infixes: "Инфиксы",
    suffixes: "Суффиксы",
    lenition: "Лениция",
    comment: "Комментарий",
    source: "Источник",
    ipa: "Транскрипция МФА (IPA)",
  },
  list: {
    list: "Список",
    listOptions: "Параметры списка",
    listMenu: {
      whatValues: [
        { value: "pos", description: "часть речи" },
        { value: "word", description: "слово" },
        {
          value: "words",
          description: "слова по дате публикации",
        },
        { value: "syllables", description: "количество слогов" },
        { value: "stress", description: "позиция ударного слога" },
        { value: "length", description: "длина слова в фонемах" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "начинается с" },
          { value: "ends", description: "заканчивается на" },
          { value: "is", description: "совпадает с" },
          { value: "has", description: "содержит" },
          { value: "like", description: "похоже на" },
          { value: "not-starts", description: "не начинается с" },
          { value: "not-ends", description: "не заканчивается на" },
          { value: "not-is", description: "не совпадает с" },
          { value: "not-has", description: "не содержит" },
          { value: "not-like", description: "не похоже на" },
        ],
        word: [
          { value: "starts", description: "начинается с" },
          { value: "ends", description: "заканчивается на" },
          { value: "has", description: "содержит" },
          { value: "like", description: "похоже на" },
          { value: "not-starts", description: "не начинается с" },
          { value: "not-ends", description: "не заканчивается на" },
          { value: "not-has", description: "не содержит" },
          { value: "not-like", description: "не похоже на" },
        ],
        words: [
          { value: "first", description: "самые старые слова" },
          { value: "last", description: "самые новые слова" },
        ],
        syllables: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
        stress: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
        length: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
      },
    },
    and: "и...",
  },
  random: {
    random: "Случайные слова",
    randomOptions: "Параметры случайных слов",
    numWords: "Количество случайных слов",
    where: "где...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "в восьмеричной:",
    decimal: "в десятеричной:",
  },
  names: {
    single: "Имя (одно)",
    full: "Имя (полное)",
    alu: "Имя (с alu)",
    options: "Параметры имени",
    numNames: "Количество генерируемых имен",
    copyAll: "Копировать все",
    dialect: "Диалект",
    dialects: [
      { name: "лесной", value: "forest" },
      // { name: "междиалектный", value: "interdialect" },
      { name: "рифовый", value: "reef" },
    ],
    syllablesOptions: [
      { name: "случайно", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
  },
  nameSingle: {
    numSyllables: "Количество слогов",
  },
  nameFull: {
    numSyllables1: "Количество слогов в имени",
    numSyllables2: "Количество слогов в фамилии",
    numSyllables3: "Количество слогов в имени родителя",
    nameEnding: "Окончание имени",
    nameEndingHint:
      "-'itan для мужчин, -'ite для женщин, -'itu для небинарных (не является каноном)",
    nameEndingOptions: [
      { value: "random", name: "случайно" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Количество слогов в имени",
    nounMode: "Существительное",
    adjMode: "Прилагательное",
    nounModes: [
      { name: "какое-нибудь существительное", value: "something" },
      { name: "обычное существительное", value: "normal noun" },
      { name: "отглагольное существительное с -yu", value: "verb-er" },
    ],
    adjModes: [
      { name: "любое", value: "any" },
      { name: "какое-нибудь", value: "something" },
      { name: "никакое", value: "none" },
      { name: "обычное прилагательное", value: "normal adjective" },
      {
        name: "существительное в притяжательном падеже",
        value: "genitive noun",
      },
      { name: "существительное с ta (происхождение)", value: "origin noun" },
      { name: "причастие", value: "participle verb" },
      { name: "активное причастие", value: "active participle verb" },
      { name: "пассивное причастие", value: "passive participle verb" },
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
    clusters: "Согласные кластеры",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "О приложении",
    version: "Версия",
    credits: "Авторы",
    development: "Разработка",
    design: "Дизайн",
    testing: "Тестирование",
    translation: "Перевод",
    appLanguage: "Язык интерфейса",
    resultsLanguage: "Язык результатов",
    dialect: "Диалект",
    theme: "Theme",
  },
};

export default strings;
