import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "прикм.", name: "Прикметник" },
  "adp.": { abbr: "adp.", name: "Прийменник" },
  "adv.": { abbr: "присл.", name: "Прислівник" },
  "conj.": { abbr: "conj.", name: "Сполучник" },
  "inter.": { abbr: "inter.", name: "Питальний*" },
  "intj.": { abbr: "intj.", name: "Вставне слово, вигук" },
  "n.": { abbr: "ім.", name: "Іменник" },
  "num.": { abbr: "числ.", name: "Числівник" },
  "part.": { abbr: "part.", name: "Частка*" },
  "ph.": { abbr: "ph.", name: "Речення*" },
  "pn.": { abbr: "pn.", name: "Займенник" },
  "prop.n.": { abbr: "prop.n.", name: "Власна назва*" },
  "sbd.": { abbr: "sbd.", name: "іменник*" },
  "vim.": { abbr: "vim.", name: "Неперехідне модальне дієслово" },
  "vin.": { abbr: "vin.", name: "Неперехідне дієслово" },
  "vtr.": { abbr: "vtr.", name: "Перехідне дієслово" },
  "vtrm.": { abbr: "vtrm.", name: "Перехідне модальне дієслово" },
  "adj., adv.": { abbr: "прикм., adv.", name: "Прикметник, Прислівник" },
  "adj., conj.": { abbr: "прикм., conj.", name: "Прикметник, Сполучник" },
  "adj., intj.": {
    abbr: "прикм., intj.",
    name: "Прикметник, Вставне слово, вигук",
  },
  "adj., n.": { abbr: "прикм., ім.", name: "Прикметник, Іменник" },
  "adv., conj.": { abbr: "присл., conj.", name: "Прислівник, Сполучник" },
  "adv., intj.": {
    abbr: "присл., intj.",
    name: "Прислівник, Вставне слово, вигук",
  },
  "adv., n.": { abbr: "присл., ім.", name: "Прислівник, Іменник" },
  "adv., part.": { abbr: "присл., part.", name: "Прислівник, Частка*" },
  "conj., adj.": { abbr: "conj., прикм.", name: "Сполучник, Прикметник" },
  "inter., intj.": {
    abbr: "inter., intj.",
    name: "Питальний*, Вставне слово, вигук",
  },
  "n., intj.": { abbr: "ім., intj.", name: "Іменник, Вставне слово, вигук" },
  "part., intj.": {
    abbr: "part., intj.",
    name: "Частка*, Вставне слово, вигук",
  },
  "vin., intj.": {
    abbr: "vin., intj.",
    name: "Неперехідне дієслово, Вставне слово, вигук",
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
    results: (count) => (count === 1 ? "результат" : "результати"),
    noResults: "немає результату",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Пошук",
    list: "Список",
    random: "Випадкові слова",
    numbers: "Числа",
    other: "Інше",

    lenition: "Леніція",
    stats: "Статистика",
    valid: "Перевірка слів",
    lists: "Додатково",

    cameronWords: "Слова Кемерона",
    homonyms: "Омоніми",
    multiIPA: "IPA (MФА)",
    oddballs: "Винятки",
    profanity: "Нецензурна лексика",
    that: "That", // TODO

    names: "Імена",

    favorites: "Обране",
    settings: "Налаштування",
  },
  search: {
    search: "Пошук",
    naviOnly: "Пошук лише за словами На'ві",
    audio: "Вимова",
    favorite: "Обране",
    navi: "На'ві",
    partOfSpeech: "Частина мови",
    definition: "Визначення",
    breakdown: "Наголос",
    infixDots: "Інфікс (крапки)",
    infixSlots: "Інфікс (місця)",
    prefixes: "Префікси",
    infixes: "Інфікси",
    suffixes: "Суфікси",
    lenition: "Леніція (пом'якшення)",
    comment: "Коментар",
    source: "Джерело",
    ipa: "International Phonetic Alphabet",
  },
  list: {
    list: "Список",
    listOptions: "Kритерії списку",
    listMenu: {
      whatValues: [
        { value: "pos", description: "частина мови" },
        { value: "word", description: "слово" },
        { value: "words", description: "слова у порядку публікування" },
        { value: "syllables", description: "кількість складів" },
        { value: "stress", description: "позиція наголошеного складу" },
        { value: "length", description: "довжина слова у фонемах" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "починається з" },
          { value: "ends", description: "закінчується на" },
          { value: "is", description: "є" },
          { value: "has", description: "має" },
          { value: "like", description: "це як" },
          { value: "not-starts", description: "не починається з" },
          { value: "not-ends", description: "не закінчується на" },
          { value: "not-is", description: "не" },
          { value: "not-has", description: "не має" },
          { value: "not-like", description: "не схоже" },
        ],
        word: [
          { value: "starts", description: "починається з" },
          { value: "ends", description: "закінчується на" },
          { value: "has", description: "має" },
          { value: "like", description: "це як" },
          { value: "not-starts", description: "не починається з" },
          { value: "not-ends", description: "не закінчується на" },
          { value: "not-has", description: "не має" },
          { value: "not-like", description: "не схоже" },
        ],
        words: [
          { value: "first", description: "старіші" },
          { value: "last", description: "новіші" },
        ],
        syllables: [
          { value: "<", description: "менше ніж" },
          { value: "<=", description: "менше ніж або дорівнює" },
          { value: "=", description: "дорівнює" },
          { value: ">=", description: "більше ніж або дорівнює" },
          { value: ">", description: "більше ніж" },
          { value: "!=", description: "не дорівнює" },
        ],
        stress: [
          { value: "<", description: "менше ніж" },
          { value: "<=", description: "менше ніж або дорівнює" },
          { value: "=", description: "дорівнює" },
          { value: ">=", description: "більше ніж або дорівнює" },
          { value: ">", description: "більше ніж" },
          { value: "!=", description: "не дорівнює" },
        ],
        length: [
          { value: "<", description: "менше ніж" },
          { value: "<=", description: "менше ніж або дорівнює" },
          { value: "=", description: "дорівнює" },
          { value: ">=", description: "більше ніж або дорівнює" },
          { value: ">", description: "більше ніж" },
          { value: "!=", description: "не дорівнює" },
        ],
      },
    },
    and: "і...",
  },
  random: {
    random: "Випадкові",
    randomOptions: "Критерії випадкових слів",
    numWords: "Кількість випадкових слів",
    where: "де....",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "Вісімкове:",
    decimal: "Десяткове:",
  },
  names: {
    single: "Скорочене ім'я",
    full: "Повне ім'я",
    alu: `Ім'я з "alu"`,
    options: "Критерії",
    numNames: "Кількість імен, що генеруються",
    copyAll: "Копіювати все",
    dialect: "Діалект",
    dialects: [
      { name: "Лісовий", value: "forest" },
      // { name: "Міждіалектний", value: "interdialect" },
      { name: "Рифовий", value: "reef" },
    ],
    syllablesOptions: [
      { name: "Випадково", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "Кількість складів",
  },
  nameFull: {
    numSyllables1: "Кількість складів у імені",
    numSyllables2: "Кількість складів у імені роду",
    numSyllables3: "Кількість складів у імені батьків",
    nameEnding: "Закінчення імені",
    nameEndingHint:
      "-'itan   чол.рід, -'ite  жін.рід, -'itu  середній рід. (не є канонічним)",
    nameEndingOptions: [
      { value: "random", name: "Випадково" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Кількість складів у першому імені",
    nounMode: "Відмінок менника*",
    adjMode: "Відмінок прикметника*",
    nounModes: [
      { name: "щось", value: "something" },
      { name: "звичайний іменник*", value: "normal noun" },
      { name: "дієслово-er*", value: "verb-er" },
    ],
    adjModes: [
      { name: "будь-який", value: "any" },
      { name: "немає", value: "none" },
      { name: "щось", value: "something" },
      { name: "активний дієприкметник", value: "active participle verb" },
      { name: "родовий відмінок іменника", value: "genitive noun" },
      { name: "звичайний прикметник*", value: "normal adjective" },
      { name: "походження іменника*", value: "origin noun" },
      { name: "частка дієслова*", value: "participle verb" },
      { name: "пасивний дієприкметник*", value: "passive participle verb" },
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
    clusters: "Збори приголосних",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "про Fwew",
    version: "Версія",
    credits: "Автори",
    development: "Розробка",
    design: "Дизайн",
    testing: "Тестування",
    translation: "Переклад",
    appLanguage: "Мова застосунку",
    resultsLanguage: "Мова результату",
    dialect: "Діалект",
    theme: "Тема",
  },
};

export default strings;
