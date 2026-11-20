export type FwewAffix = {
  navi: string;
  display: string;
} & (
  | {
      productive: true;
      for: string;
    }
  | {
      productive: false;
      for: null;
    }
);

export type FwewAffixes = {
  [key in "prefix" | "infix" | "suffix" | "affix"]: {
    [key: string]: FwewAffix;
  };
};

export const Affixes: FwewAffixes = {
  prefix: {
    ay: {
      navi: "ay+",
      productive: true,
      for: "nouns",
      display: "unspecified plural, four or more of",
    },
    fay: {
      navi: "fay+",
      productive: true,
      for: "nouns",
      display: "these [noun]s",
    },
    fì: {
      navi: "fì-",
      productive: true,
      for: "nouns",
      display: "this [noun]",
    },
    fne: {
      navi: "fne-",
      productive: true,
      for: "nouns",
      display: "kind/type of [noun]",
    },
    fra: {
      navi: "fra-",
      productive: true,
      for: "nouns",
      display: "every, each [noun]",
    },
    fray: {
      navi: "fray+",
      productive: true,
      for: "nouns",
      display: "all of these [noun]s",
    },
    kaw: {
      navi: "kaw-",
      productive: false,
      for: null,
      display: "not one",
    },
    ketsuk: {
      navi: "ketsuk-",
      productive: true,
      for: "verbs",
      display: "in[verb]able, un[verb]able; unable to [verb]",
    },
    le: {
      navi: "le-",
      productive: false,
      for: null,
      display: "[word]like; creates adjectives from existing words",
    },
    me: {
      navi: "me+",
      productive: true,
      for: "nouns",
      display: "plural, two of",
    },
    munsna: {
      navi: "munsna-",
      productive: true,
      for: "nouns",
      display: "pair of [noun]s",
    },
    nì: {
      navi: "nì-",
      productive: true,
      for: "adjectives, ordinal numbers, and pronouns",
      display: "[word]ly; creates adverbs from existing words",
    },
    pay: {
      navi: "pay+",
      productive: true,
      for: "nouns",
      display: "what [noun]s?",
    },
    pxe: {
      navi: "pxe+",
      productive: true,
      for: "nouns and pronouns",
      display: "plural, three of",
    },
    sä: {
      navi: "sä-",
      productive: false,
      for: null,
      display: "creates nouns meaning (1) instrument doing [word] or (2) specific instance of doing [word]",
    },
    sna: {
      navi: "sna-",
      productive: false,
      for: null,
      display: "group, herd, clump, pile, etc. of [noun]s",
    },
    tì: {
      navi: "tì-",
      productive: false,
      for: null,
      display: "creates abstract/concept nouns from existing words",
    },
    tsa: {
      navi: "tsa-",
      productive: true,
      for: "nouns",
      display: "that [noun]",
    },
    tsay: {
      navi: "tsay+",
      productive: true,
      for: "nouns",
      display: "those [noun]s",
    },
    tsuk: {
      navi: "tsuk-",
      productive: true,
      for: "verbs",
      display: "[verb]able; able to [verb]",
    },
  },
  infix: {
    alm: {
      navi: "<alm>",
      productive: true,
      for: "verbs",
      display: "has/have [verb]ed; completed action in the general/far past",
    },
    aly: {
      navi: "<aly>",
      productive: true,
      for: "verbs",
      display: "will have [verb]ed; completed action in the general/far future",
    },
    am: {
      navi: "<am>",
      productive: true,
      for: "verbs",
      display: "past tense",
    },
    arm: {
      navi: "<arm>",
      productive: true,
      for: "verbs",
      display: "was [verb]ing; action ongoing in the general/far past",
    },
    ary: {
      navi: "<ary>",
      productive: true,
      for: "verbs",
      display: "will be [verb]ing; action happening in the general/far future",
    },
    asy: {
      navi: "<asy>",
      productive: true,
      for: "verbs",
      display: "future tense (with intention or determination of the speaker)",
    },
    ats: {
      navi: "<ats>",
      productive: true,
      for: "verbs",
      display: "might, must; speaker concludes/assumes based on evidence",
    },
    awn: {
      navi: "<awn>",
      productive: true,
      for: "verbs",
      display: '[verb]ed (as adjective), as in "The/a [verb]ed [noun]"',
    },
    ay: {
      navi: "<ay>",
      productive: true,
      for: "verbs",
      display: "future tense (prediction)",
    },
    äng: {
      navi: "<äng>",
      productive: true,
      for: "verbs",
      display: "speaker is unhappy or has negative emotion about the action",
    },
    äp: {
      navi: "<äp>",
      productive: true,
      for: "verbs",
      display: "[verb] self; [noun] [verb]s their/its self",
    },
    ei: {
      navi: "<ei>",
      productive: true,
      for: "verbs",
      display: "speaker is happy or has positive emotion about the action",
    },
    er: {
      navi: "<er>",
      productive: true,
      for: "verbs",
      display:
        "is [verb]ing; ongoing action at unspecified time; used for action happening at the same time as another",
    },
    eyk: {
      navi: "<eyk>",
      productive: true,
      for: "verbs",
      display: 'make [verb], cause to [verb], as in "Mo\'at makes Neytiri teach Jake"',
    },
    ilv: {
      navi: "<ilv>",
      productive: true,
      for: "verbs",
      display: "would have [verb]ed; completed hypothetical action or action removed from reality; have [verb]ed",
    },
    imv: {
      navi: "<imv>",
      productive: true,
      for: "verbs",
      display: "past hypothetical action or action removed from reality",
    },
    irv: {
      navi: "<irv>",
      productive: true,
      for: "verbs",
      display: "would be [verb]ing; ongoing hypothetical action or action removed from reality",
    },
    iv: {
      navi: "<iv>",
      productive: true,
      for: "verbs",
      display:
        "hypothetical action or action removed from reality; e.g.: want, should, need, etc. to [verb, with <iv> inside]",
    },
    iyev: {
      navi: "<iyev>",
      productive: true,
      for: "verbs",
      display: "future hypothetical action or action removed from reality",
    },
    ìlm: {
      navi: "<ìlm>",
      productive: true,
      for: "verbs",
      display: "had/have just [verb]ed; completed action in the recent past",
    },
    ìly: {
      navi: "<ìly>",
      productive: true,
      for: "verbs",
      display: "will soon have [verb]ed; completed action in the near future",
    },
    ìm: {
      navi: "<ìm>",
      productive: true,
      for: "verbs",
      display: "recent past tense",
    },
    ìrm: {
      navi: "<ìrm>",
      productive: true,
      for: "verbs",
      display: "was [verb]ing; action happening in the recent past",
    },
    ìry: {
      navi: "<ìry>",
      productive: true,
      for: "verbs",
      display: "will be [verb]ing; action happening in the near future",
    },
    ìsy: {
      navi: "<ìsy>",
      productive: true,
      for: "verbs",
      display: "immediate/near future tense (with intention or determination of the speaker)",
    },
    ìy: {
      navi: "<ìy>",
      productive: true,
      for: "verbs",
      display: "immediate/near future tense",
    },
    ìyev: {
      navi: "<ìyev>",
      productive: true,
      for: "verbs",
      display: "future hypothetical action or action removed from reality",
    },
    ol: {
      navi: "<ol>",
      productive: true,
      for: "verbs",
      display: "has/have [verb]ed; action completed at unspecified time",
    },
    us: {
      navi: "<us>",
      productive: true,
      for: "verbs",
      display: '[verb]ing (as adjective), as in "The/a [verb]ing [noun]"',
    },
    uy: {
      navi: "<uy>",
      productive: true,
      for: "verbs",
      display: "honorific (honourific) or ceremonial",
    },
  },
  suffix: {
    an: {
      navi: "-an",
      productive: false,
      for: null,
      display: "masculine",
    },
    ä: {
      navi: "-ä",
      productive: true,
      for: "nouns ending with anything except a, ä, e, i, and ì",
      display: "of [noun], [noun]'s; possessive;",
    },
    e: {
      navi: "-e",
      productive: false,
      for: null,
      display: "feminine",
    },
    fkeyk: {
      navi: "-fkeyk",
      productive: true,
      for: "nouns",
      display: "state, condition",
    },
    it: {
      navi: "-it",
      productive: true,
      for: "nounds ending with consonant, dipthong, or pseudo-vowel",
      display: "noun the action is performed on",
    },
    ìl: {
      navi: "-ìl",
      productive: true,
      for: "nouns ending with consonant, dipthong, or pseudo-vowel",
      display: "noun performing the action",
    },
    ìri: {
      navi: "-ìri",
      productive: true,
      for: "nouns ending with consonant, dipthong, or pseudo-vowel",
      display: "regarding, in regards to [noun]",
    },
    kel: {
      navi: "-kel",
      productive: false,
      for: null,
      display: "[noun]lessness; lack of [noun]",
    },
    l: {
      navi: "-l",
      productive: true,
      for: "nouns ending in a vowel",
      display: "noun performing the action (on another noun)",
    },
    lo: {
      navi: "-lo",
      productive: false,
      for: null,
      display: "[number] times; as in once, twice, thrice, four times, etc.",
    },
    nay: {
      navi: "-nay",
      productive: false,
      for: null,
      display: "apprentice [noun]; one rank below [noun]",
    },
    "nga'": {
      navi: "-nga'",
      productive: false,
      for: null,
      display: "[noun]-containing",
    },
    o: {
      navi: "-o",
      productive: true,
      for: "nouns",
      display: "some [noun]",
    },
    r: {
      navi: "-r",
      productive: true,
      for: "nouns ending with a vowel or diphthong",
      display: 'to/for [noun], as in "The game is enjoyable to/for me"',
    },
    ri: {
      navi: "-ri",
      productive: true,
      for: "nouns ending with a vowel",
      display: "regarding, in regards to [noun]",
    },
    ru: {
      navi: "-ru",
      productive: true,
      for: "nouns ending with a vowel",
      display: 'to/for [noun], as in "The game is enjoyable to/for me"',
    },
    t: {
      navi: "-t",
      productive: true,
      for: "nouns ending with a vowel",
      display: "noun the action is performed on",
    },
    ti: {
      navi: "-ti",
      productive: true,
      for: "nouns",
      display: "noun the action is performed on",
    },
    tswo: {
      navi: "-tswo",
      productive: true,
      for: "verbs",
      display: "[verb]ability; the ability to [verb]",
    },
    tsyìp: {
      navi: "-tsyìp",
      productive: true,
      for: "nouns",
      display: "small/little/mini [noun]",
    },
    tu: {
      navi: "-tu",
      productive: false,
      for: null,
      display: "[noun]ist; person who specializes in [noun]",
    },
    ur: {
      navi: "-ur",
      productive: true,
      for: "nouns ending with a consonant, dipthong, or pseudo-vowel",
      display: 'to/for [noun], as in "The game is enjoyable to/for me"',
    },
    ve: {
      navi: "-ve",
      productive: true,
      for: "numbers",
      display: "[number]st, [number]nd, [number]rd, [number]th, but it's always -ve",
    },
    vi: {
      navi: "-vi",
      productive: false,
      for: null,
      display: "[noun] is a smaller piece of a larger whole",
    },
    y: {
      navi: "-y",
      productive: true,
      for: "pronouns ending in a or e; vowel will change to e (oey, ngey); casual shortening of -yä",
      display: "of [noun], [noun]'s; possessive (casual)",
    },
    ya: {
      navi: "-ya",
      productive: true,
      for: "collective nouns",
      display: "used for directly addressing a collective of people",
    },
    yä: {
      navi: "-yä",
      productive: true,
      for: "nouns ending with a, ä, e, i, or ì",
      display: "of [noun], [noun]'s; possessive",
    },
    yu: {
      navi: "-yu",
      productive: true,
      for: "verbs",
      display: "[verb]er; person who [verb]s",
    },
  },
  affix: {
    a: {
      navi: "-a-",
      productive: true,
      for: "adjectives",
      display: 'points adjective to the noun it describes, as in "The tall-> person"',
    },
    pe: {
      navi: "-pe+",
      productive: true,
      for: "nouns",
      display: "what/which [noun]?",
    },
    si: {
      navi: "si",
      productive: false,
      for: null,
      display: "to do or engage in the act of [word, usually noun]",
    },
    "tì us": {
      navi: "tì- -us-",
      productive: true,
      for: "verbs",
      display: '[verb]ing (as noun), as in "[verb]ing is good"',
    },
  },
};
