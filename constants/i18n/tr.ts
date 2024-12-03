import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "adj.", name: "Sıfat" },
  "adp.": { abbr: "adp.", name: "Edat" },
  "adv.": { abbr: "adv.", name: "Zarf" },
  "conj.": { abbr: "conj.", name: "Bağlaç" },
  "inter.": { abbr: "inter.", name: "Soru" },
  "intj.": { abbr: "intj.", name: "Ünlem" },
  "n.": { abbr: "n.", name: "İsim" },
  "num.": { abbr: "num.", name: "Sayı" },
  "part.": { abbr: "part.", name: "Parça" },
  "ph.": { abbr: "ph.", name: "İfade" },
  "pn.": { abbr: "pn.", name: "Zamir" },
  "prop.n.": { abbr: "prop.n.", name: "Özel isim" },
  "sbd.": { abbr: "sbd.", name: "Edat" },
  "vim.": { abbr: "vim.", name: "Edat" },
  "vin.": { abbr: "vin.", name: "Edat" },
  "vtr.": { abbr: "vtr.", name: "Edat" },
  "vtrm.": { abbr: "vtrm.", name: "Edat" },
  "adj., adv.": { abbr: "adj., adv.", name: "Sıfat, Zarf" },
  "adj., conj.": { abbr: "adj., conj.", name: "Sıfat, Bağlaç" },
  "adj., intj.": { abbr: "adj., intj.", name: "Sıfat, Ünlem" },
  "adj., n.": { abbr: "adj., n.", name: "Sıfat, İsim" },
  "adv., conj.": { abbr: "adv., conj.", name: "Zarf, Bağlaç" },
  "adv., intj.": { abbr: "adv., intj.", name: "Zarf, Ünlem" },
  "adv., n.": { abbr: "adv., n.", name: "Zarf, İsim" },
  "adv., part.": { abbr: "adv., part.", name: "Zarf, Parça" },
  "conj., adj.": { abbr: "conj., adj.", name: "Bağlaç, Sıfat" },
  "inter., intj.": { abbr: "inter., intj.", name: "Soru, Ünlem" },
  "n., intj.": { abbr: "n., intj.", name: "İsim, Ünlem" },
  "part., intj.": { abbr: "part., intj.", name: "Parça, Ünlem" },
  "vin., intj.": { abbr: "vin., intj.", name: "Edat" },
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
    results: (count) => (count === 1 ? "sonuç" : "sonuçlar"),
    noResults: "sonuç yok",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Ara",
    list: "Liste",
    random: "Rastgele",
    numbers: "Sayılar",
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

    names: "İsimler",

    favorites: "Favoriler",
    settings: "Ayarlar",
  },
  search: {
    search: "Ara",
    naviOnly: "Yalnızca Na'vi kelimelerini ara",
    audio: "Audio",
    favorite: "Favori",
    navi: "Na'vi",
    partOfSpeech: "Konuşmanın bölümü",
    definition: "Tanım",
    breakdown: "Heceler",
    infixDots: "Düzeltmeler (noktaları)",
    infixSlots: "Düzeltmeler (yerleri)",
    prefixes: "Önekler",
    infixes: "Düzeltmeler",
    suffixes: "Son ekler",
    lenition: "Cömertlik",
    comment: "Yorum",
    source: "Kaynak",
    ipa: "IPA",
  },
  list: {
    list: "Liste",
    listOptions: "Liste Seçenekleri",
    listMenu: {
      whatValues: [
        { value: "pos", description: "konuşmanın bölümü" },
        { value: "word", description: "kelime" },
        {
          value: "words",
          description: "yayınlanma sırasına göre kelimeler",
        },
        { value: "syllables", description: "hece sayısı" },
        { value: "stress", description: "vurgulu hece pozisyonu" },
        { value: "length", description: "fonemlerde kelimenin uzunluğu" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "ile başlar" },
          { value: "ends", description: "ile biter" },
          { value: "is", description: "tam olarak" },
          { value: "has", description: "sahip olmak" },
          { value: "like", description: "gibi" },
          { value: "not-starts", description: "ile başlamaz" },
          { value: "not-ends", description: "ile bitmiyor" },
          { value: "not-is", description: "tam olarak değil" },
          { value: "not-has", description: "bulunmamaktadır" },
          { value: "not-like", description: "gibi değil" },
        ],
        word: [
          { value: "starts", description: "ile başlar" },
          { value: "ends", description: "ile biter" },
          { value: "has", description: "sahip olmak" },
          { value: "like", description: "gibi" },
          { value: "not-starts", description: "ile başlamaz" },
          { value: "not-ends", description: "ile bitmiyor" },
          { value: "not-has", description: "bulunmamaktadır" },
          { value: "not-like", description: "gibi değil" },
        ],
        words: [
          { value: "first", description: "eski kelimeler" },
          { value: "last", description: "yeni kelimeler" },
        ],
        syllables: [
          { value: "<", description: "daha az" },
          { value: "<=", description: "daha az veya eşit" },
          { value: "=", description: "eşit" },
          { value: ">=", description: "daha büyük veya eşit" },
          { value: ">", description: "daha büyük" },
          { value: "!=", description: "eşit değil" },
        ],
        stress: [
          { value: "<", description: "daha az" },
          { value: "<=", description: "daha az veya eşit" },
          { value: "=", description: "eşit" },
          { value: ">=", description: "daha büyük veya eşit" },
          { value: ">", description: "daha büyük" },
          { value: "!=", description: "eşit değil" },
        ],
        length: [
          { value: "<", description: "daha az" },
          { value: "<=", description: "daha az veya eşit" },
          { value: "=", description: "eşit" },
          { value: ">=", description: "daha büyük veya eşit" },
          { value: ">", description: "daha büyük" },
          { value: "!=", description: "eşit değil" },
        ],
      },
    },
    and: "ve...",
  },
  random: {
    random: "Rastgele",
    randomOptions: "Rasgele Seçenekler",
    numWords: "Rastgele kelimeler için bir sayı giriniz",
    where: "nerede...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "oktal:",
    decimal: "onaltılı:",
  },
  names: {
    single: "Tek",
    full: "Tam",
    alu: "Alu",
    options: "Seçenekler",
    numNames: "Üretilecek İsim Sayısı",
    copyAll: "Tümünü Kopyala",
    dialect: "Lehçe",
    dialects: [
      { name: "orman", value: "forest" },
      // { name: "interdialekt", value: "interdialect" },
      { name: "resif", value: "reef" },
    ],
    syllablesOptions: [
      { name: "rastgele", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
    ],
  },
  nameSingle: {
    numSyllables: "Hece Sayısı",
  },
  nameFull: {
    numSyllables1: "İsimdeki hece sayısı",
    numSyllables2: "Soyadındaki hece sayısı",
    numSyllables3: "Ebeveyn adındaki hece sayısı",
    nameEnding: "İsim Sonu",
    nameEndingHint:
      "-'itan erkekler için, -'ite kadınlar için, -'itu cinsiyetsiz için (kanonik olmayan)",
    nameEndingOptions: [
      { value: "random", name: "rastgele" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Hece Sayısı",
    nounMode: "İsim Kipi",
    adjMode: "Sıfat Kipi",
    nounModes: [
      { name: "bir şey", value: "something" },
      { name: "normal isim", value: "normal noun" },
      { name: "fiil-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "herhangi bir", value: "any" },
      { name: "bir şey", value: "something" },
      { name: "hiçbiri", value: "none" },
      { name: "normal sıfat", value: "normal adjective" },
      { name: "iyelik isim", value: "genitive noun" },
      { name: "köken isim", value: "origin noun" },
      { name: "sıfat-fiil", value: "participle verb" },
      { name: "etken sıfat-fiil", value: "active participle verb" },
      { name: "edilgen sıfat-fiil", value: "passive participle verb" },
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
    clusters: "Ünsüz harfler",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Hakkında",
    version: "Versiyon",
    credits: "Yardımcılar",
    development: "Geliştirici",
    design: "Tasarımcı",
    testing: "Test yapan",
    translation: "Çevirmen",
    appLanguage: "Uygulama Dili",
    resultsLanguage: "Sonuç Dili",
    dialect: "Lehçe",
    theme: "Theme",
  },
};

export default strings;
