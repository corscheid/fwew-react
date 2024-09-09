import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "Sıfat",
  "adp.": "Edat",
  "adv.": "Zarf",
  "conj.": "Bağlaç",
  "inter.": "Soru",
  "intj.": "Ünlem",
  "n.": "İsim",
  "num.": "Sayı",
  "part.": "Parça",
  "ph.": "İfade",
  "pn.": "Zamir",
  "prop.n.": "Özel isim",
  "sbd.": "Edat",
  "vim.": "Edat",
  "vin.": "Edat",
  "vtr.": "Edat",
  "vtrm.": "Edat",
  "adj., adv.": "Sıfat, Zarf",
  "adj., conj.": "Sıfat, Bağlaç",
  "adj., intj.": "Sıfat, Ünlem",
  "adj., n.": "Sıfat, İsim",
  "adv., conj.": "Zarf, Bağlaç",
  "adv., intj.": "Zarf, Ünlem",
  "adv., n.": "Zarf, İsim",
  "inter., intj.": "Soru, Ünlem",
  "n., intj.": "İsim, Ünlem",
  "part., intj.": "Parça, Ünlem",
  "vin., intj.": "Edat",
  "vin., vtr.": "Edat",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

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
  settings: {
    about: "Hakkında",
    version: "Versiyon",
    credits: "Yardımcılar",
    development: "Geliştirici",
    design: "Tasarımcı",
    testing: "Test yapan",
    translation: "Çevirmen",
    appLanguage: "Uygulama Dili",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "Sonuç Dili",
  },
};

export default strings;
