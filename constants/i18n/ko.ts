import { CameronWords } from "@/constants/Cameron";
import type { PartOfSpeech, UITranslation } from "@/types/i18n";

const partOfSpeech: PartOfSpeech = {
  "adj.": { abbr: "형", name: "형용사" },
  "adp.": { abbr: "부치", name: "부치사" },
  "adv.": { abbr: "부", name: "부사" },
  "conj.": { abbr: "접속", name: "접속사" },
  "inter.": { abbr: "의문", name: "의문사" },
  "intj.": { abbr: "감탄", name: "감탄사" },
  "n.": { abbr: "명", name: "명사" },
  "num.": { abbr: "수", name: "수사" },
  "part.": { abbr: "불변화사", name: "불변화사" },
  "ph.": { abbr: "구", name: "구" },
  "pn.": { abbr: "대", name: "대명사" },
  "prop.n.": { abbr: "고유", name: "고유명사" },
  "sbd.": { abbr: "종속접속사", name: "종속접속사" },
  "vim.": { abbr: "(조)자동", name: "조동사(자)" },
  "vin.": { abbr: "자동", name: "자동사" },
  "vtr.": { abbr: "타동", name: "타동사" },
  "vtrm.": { abbr: "(조)타동", name: "조동사(타)" },
  "adj., adv.": { abbr: "형/부", name: "형용사, 부사" },
  "adj., conj.": { abbr: "형/접속", name: "형용사, 접속사" },
  "adj., intj.": { abbr: "형/감탄", name: "형용사, 감탄사" },
  "adj., n.": { abbr: "형/명", name: "형용사, 명사" },
  "adv., conj.": { abbr: "부/접속", name: "부사, 접속사" },
  "adv., intj.": { abbr: "부/감탄", name: "부사, 감탄사" },
  "adv., n.": { abbr: "부/명", name: "부사, 명사" },
  "inter., intj.": { abbr: "의문/감탄", name: "의문사, 감탄사" },
  "n., intj.": { abbr: "명/감탄", name: "명사, 감탄사" },
  "part., intj.": { abbr: "불변화사/감탄", name: "불변화사, 감탄사" },
  "vin., intj.": { abbr: "자동/감탄", name: "자동사, 감탄사" },
  "vin., vtr.": { abbr: "동", name: "자동사, 타동사" },
};

const partOfSpeechList = Object.entries(partOfSpeech).map(
  ([value, { name }]) => ({ name, value })
);

const table1Data = [
  ["격", "명사", "접속사", ""],
  ["", "", "근경", "원경", "답변"],
  ["기본형", "Tsaw", "Fwa", "Tsawa", "Teynga"],
  ["주어", "Tsal", "Fula", "Tsala", "Teyngla"],
  ["직접목적어", "Tsat", "Futa", "Tsata", "Teyngta"],
  ["소유", "Tseyä", "N/A", "N/A", ""],
  ["간접목적어", "Tsar", "Fura", "Tsara", ""],
  ["주제문", "Tsari", "Furia", "Tsaria", ""],
];

const table2Data = [
  ["tsa-", "접두사", "그것"],
  ["tsa'u", "명", "그것(사물)"],
  ["tsakem", "명", "그것(행위)"],
  ["fmawnta", "종속접속사", "그 소식"],
  ["fayluta", "종속접속사", "그 말, 그 단어들"],
  ["tsnì", "종속접속사", "(특정 동사와 함께 사용하는 종속접속사)"],
  [
    "tsonta",
    "접속",
    "~하라고, ~하도록(kxìm'명령하다' 동사와 함께 사용하는 종속접속사)",
  ],
  ["kuma/akum", "접속", "그리하여, 결과적으로"],
  ["a", "불변화사", "~한, ~하는 (절 단위의 명사접속사)"],
];

const strings: UITranslation = {
  common: {
    results: (count) => (count === 1 ? "개의 결과" : "개의 결과"),
    noResults: "해당하는 단어를 찾을 수 없습니다.",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "검색",
    list: "모아보기",
    random: "무작위 단어장",
    numbers: "수",
    other: "기타",

    lenition: "연음화",
    stats: "통계",
    valid: "발음 유효성 검사",
    lists: "일람표",

    cameronWords: "제임스 카메론 자작 단어",
    homonyms: "동음이의어",
    multiIPA: "다음어",
    oddballs: "예외",
    profanity: "비속어",
    that: '"그것"',

    names: "이름 생성",

    favorites: "즐겨찾기",
    settings: "설정",
  },
  search: {
    search: "검색",
    naviOnly: "나비어만 검색하기",
    navi: "나비어",
    audio: "음성",
    favorite: "즐겨찾기",
    partOfSpeech: "품사",
    definition: "뜻",
    breakdown: "강세",
    infixDots: "접요사(점)",
    infixSlots: "접요사<군>",
    prefixes: "접두사",
    infixes: "접요사",
    suffixes: "접미사",
    lenition: "연음화",
    comment: "댓글",
    source: "출처",
    ipa: "발음기호",
  },
  list: {
    list: "모아보기",
    listOptions: "설정",
    listMenu: {
      whatValues: [
        { value: "pos", description: "품사가" },
        { value: "word", description: "단어가" },
        { value: "words", description: "출시순으로 정렬" },
        { value: "syllables", description: "음절의 개수가" },
        { value: "stress", description: "강세가 있는 음절의 위치가" },
        { value: "length", description: "음소의 개수가" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "다음으로 시작할 것" },
          { value: "ends", description: "다음으로 끝날 것" },
          { value: "is", description: "다음과 동일할 것" },
          { value: "has", description: "다음을 포함할 것" },
          { value: "like", description: "다음과 비슷할 것" },
          { value: "not-starts", description: "다음으로 시작하지 않을 것" },
          { value: "not-ends", description: "다음으로 끝나지 않을 것" },
          { value: "not-is", description: "다음과 동일하지 않을 것" },
          { value: "not-has", description: "다음을 포함하지 않을 것" },
          { value: "not-like", description: "다음과 비슷하지 않을 것" },
        ],
        word: [
          { value: "starts", description: "다음으로 시작할 것" },
          { value: "ends", description: "다음으로 끝날 것" },
          { value: "has", description: "다음을 포함할 것" },
          { value: "like", description: "다음과 비슷할 것" },
          { value: "not-starts", description: "다음으로 시작하지 않을 것" },
          { value: "not-ends", description: "다음으로 끝나지 않을 것" },
          { value: "not-has", description: "다음을 포함하지 않을 것" },
          { value: "not-like", description: "다음과 비슷하지 않을 것" },
        ],
        words: [
          { value: "first", description: "내림차순(오래된 단어부터)" },
          { value: "last", description: "오름차순(최신 단어부터)" },
        ],
        syllables: [
          { value: "<", description: "다음 수보다 적을 것" },
          { value: "<=", description: "다음 수보다 적거나 같을 것" },
          { value: "=", description: "다음 수와 같을 것" },
          { value: ">=", description: "다음 수보다 크거나 같을 것" },
          { value: ">", description: "다음 수보다 클 것" },
          { value: "!=", description: "다음 수와 같지 않을 것" },
        ],
        stress: [
          { value: "<", description: "다음 수보다 적을 것" },
          { value: "<=", description: "다음 수보다 적거나 같을 것" },
          { value: "=", description: "다음 수와 같을 것" },
          { value: ">=", description: "다음 수보다 크거나 같을 것" },
          { value: ">", description: "다음 수보다 클 것" },
          { value: "!=", description: "다음 수와 같지 않을 것" },
        ],
        length: [
          { value: "<", description: "다음 수보다 적을 것" },
          { value: "<=", description: "다음 수보다 적거나 같을 것" },
          { value: "=", description: "다음 수와 같을 것" },
          { value: ">=", description: "다음 수보다 크거나 같을 것" },
          { value: ">", description: "다음 수보다 클 것" },
          { value: "!=", description: "다음 수와 같지 않을 것" },
        ],
      },
    },
    and: "그리고",
  },
  random: {
    random: "무작위 단어장",
    randomOptions: "설정",
    numWords: "생성할 단어의 개수",
    where: "추가설정",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "팔진법:",
    decimal: "십진법:",
  },
  names: {
    single: "이름만",
    full: "본명",
    alu: "별명",
    options: "설정",
    numNames: "생성할 이름의 개수",
    copyAll: "전체 복사",
    dialect: "지역방언",
    dialects: [
      { name: "숲 부족", value: "forest" },
      // { name: "둘 다", value: "interdialect" },
      { name: "산호초 부족", value: "reef" },
    ],
    syllablesOptions: [
      { name: "무작위", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nameSingle: {
    numSyllables: "음절 개수",
  },
  nameFull: {
    numSyllables1: "이름의 음절 개수",
    numSyllables2: "가문명의 음절 개수",
    numSyllables3: "부모명의 음절 개수",
    nameEnding: "성별",
    nameEndingHint:
      "-'itan(남성), -'ite(여성), -'itu(논바이너리/해당 설정은 공식이 아닙니다)",
    nameEndingOptions: [
      { value: "random", name: "무작위" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "이름의 음절 수",
    nounMode: "별명",
    adjMode: "별명의 수식어",
    nounModes: [
      { name: "무작위", value: "something" },
      { name: "일반 명사", value: "normal noun" },
      { name: "(동사)하는 자", value: "verb-er" },
    ],
    adjModes: [
      { name: "무작위('없음' 포함)", value: "any" },
      { name: "없음", value: "none" },
      { name: "무작위 생성", value: "something" },
      { name: "동사의 능동태 형용사화", value: "active participle verb" },
      { name: "소유격", value: "genitive noun" },
      { name: "일반 형용사", value: "normal adjective" },
      { name: "일반 명사", value: "origin noun" },
      { name: "동사의 형용사화", value: "participle verb" },
      { name: "동사의 수동태 형용사화", value: "passive participle verb" },
    ],
  },
  cameronWords: {
    data: [
      {
        key: "아바타(2009) 인명",
        value: CameronWords.A1Names,
      },
      {
        key: "물의 길 인명",
        value: CameronWords.A2Names,
      },
      {
        key: "명사",
        value: CameronWords.Nouns,
      },
      {
        key: "생물",
        value: CameronWords.Life,
      },
      { key: "기타", value: CameronWords.Other },
    ],
  },
  lenition: {
    glottalStop: "아포스트로피( ' ) 생략 ( '이 ll/rr 앞에 오는 경우는 제외)",
    lenitingPrefixes: "연음화 발생 접두사",
    lenitingAdpositions: "연음화 발생 부치사",
  },
  stats: {
    phonemes: "음절 구성표",
    clusters: "자음군",
  },
  that: {
    table1Data,
    table2Data,
  },
  settings: {
    about: "Fwew 정보",
    version: "버전",
    credits: "도와준 사람들",
    development: "개발",
    design: "디자인",
    testing: "테스트",
    translation: "번역",
    appLanguage: "앱 언어",
    resultsLanguage: "출력 언어",
    dialect: "지역방언",
    theme: "Theme",
  },
};

export default strings;
