import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Прикметник",
  "adp.": "Прийменник",
  "adv.": "Прислівник",
  "conj.": "Сполучник",
  "inter.": "Питальний*",
  "intj.": "Вставне слово, вигук",
  "n.": "Іменник",
  "num.": "Чисельник",
  "part.": "Частка*",
  "ph.": "Речення*",
  "pn.": "Займенник",
  "prop.n.": "Власна назва*",
  "sbd.": "іменник*",
  "vim.": "Неперехідне модальне дієслово",
  "vin.": "Неперехідне дієслово",
  "vtr.": "Перехідне дієслово",
  "vtrm.": "Перехідне модальне дієслово",
  "adj., adv.": "Прикметник, Прислівник",
  "adj., conj.": "Прикметник, Сполучник",
  "adj., intj.": "Прикметник, Вставне слово, вигук",
  "adj., n.": "Прикметник, Іменник",
  "adv., conj.": "Прислівник, Сполучник",
  "adv., intj.": "Прислівник, Вставне слово, вигук",
  "adv., n.": "Прислівник, Іменник",
  "inter., intj.": "Питальний*, Вставне слово, вигук",
  "n., intj.": "Іменник, Вставне слово, вигук",
  "part., intj.": "Частка*, Вставне слово, вигук",
  "vin., intj.": "Неперехідне дієслово, Вставне слово, вигук",
  "vin., vtr.": "Неперехідне або Перехідне дієслово",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  name,
  value,
}));

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

    lenition: "Lenition", // TODO
    stats: "Статистика",
    valid: "Valid", // TODO
    lists: "Додаткові категорії",

    cameronWords: "слова Кемерона",
    homonyms: "Омоніми",
    multiIPA: "Multi IPA", // TODO
    oddballs: "Oddballs", // TODO
    profanity: "Profanity", // TODO
    that: "That", // TODO

    names: "Імена",

    favorites: "Вибране",
    settings: "Налаштування",
  },
  search: {
    search: "Пошук",
    naviOnly: "Пошук лише за словами На'ві",
    audio: "Вимова",
    favorite: "Вибране",
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
    listOptions: "Параметри списку",
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
    randomOptions: "Параметри випадкових слів",
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
    alu: "Ім'я з Alu",
    options: "Параметри",
    numNames: "Кількість імен, що генеруються",
    copyAll: "Копіювати все",
    dialect: "Діалект",
    dialects: [
      { name: "Лісовий", value: "forest" },
      // { name: "Міждіалектний", value: "interdialect" },
      { name: "Рифовий", value: "reef" },
    ],
    syllablesOptions: [
      { name: "випадковий", value: "0" },
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
      { value: "random", name: "випадковий" },
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
  settings: {
    about: "про Fwew",
    version: "Версія",
    credits: "Автори",
    development: "Розробка",
    design: "Дизайн",
    testing: "Тестування",
    translation: "Переклад",
    appLanguage: "Мова застосунку",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Мова результату",
  },
};

export default strings;
