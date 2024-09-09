import { CameronWords } from "@/constants/Cameron";
import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "adj.": "형용사",
  "adp.": "부치사",
  "adv.": "부사",
  "conj.": "접속사",
  "inter.": "의문사",
  "intj.": "감탄사",
  "n.": "명사",
  "num.": "수사",
  "part.": "불변화사",
  "ph.": "구",
  "pn.": "대명사",
  "prop.n.": "고유명사",
  "sbd.": "종속접속사",
  "vim.": "조동사(자)",
  "vin.": "자동사",
  "vtr.": "타동사",
  "vtrm.": "조동사(타)",
  "adj., adv.": "형용사, 부사",
  "adj., conj.": "형용사, 접속사",
  "adj., intj.": "형용사, 감탄사",
  "adj., n.": "형용사, 명사",
  "adv., conj.": "부사, 접속사",
  "adv., intj.": "부사, 감탄사",
  "adv., n.": "부사, 명사",
  "inter., intj.": "의문사, 감탄사",
  "n., intj.": "명사, 감탄사",
  "part., intj.": "불변화사, 감탄사",
  "vin., intj.": "자동사, 감탄사",
  "vin., vtr.": "자동사, 타동사",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  name,
  value,
}));

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
  settings: {
    about: "Fwew 정보",
    version: "버전",
    credits: "도와준 사람들",
    development: "개발",
    design: "디자인",
    testing: "테스트",
    translation: "번역",
    appLanguage: "앱 언어",
    auxtheme: "Other Themes", // TODO
    auxthemes: [
      { name: "normal", value: "normal" }, // TODO
      { name: "frutiger aero", value: "frutiger aero" }, // TODO
    ],
    resultsLanguage: "출력 언어",
  },
};

export default strings;
