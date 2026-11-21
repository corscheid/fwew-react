export type FilterExpressionBuilderValue = {
  what?: ListMenuWhatItem;
  cond?: ListMenuCondItem;
  spec: string;
};

export type WhatValue = "pos" | "word" | "words" | "syllables" | "stress" | "length";
export type CondValueString =
  "starts" | "ends" | "is" | "has" | "like" | "not-starts" | "not-ends" | "not-is" | "not-has" | "not-like";
export type CondValueNumber = "<" | "<=" | "=" | ">=" | ">" | "!=";
export type CondValueWords = "first" | "last";

export type ListMenuItem<ValueType extends string> = {
  value: ValueType;
  description: string;
};

export type ListMenuWhatItem = ListMenuItem<WhatValue>;
export type ListMenuWhat = ListMenuWhatItem[];

export type ListMenuCond = {
  pos: ListMenuItem<CondValueString>[];
  word: ListMenuItem<CondValueString>[];
  words: ListMenuItem<CondValueWords>[];
  syllables: ListMenuItem<CondValueNumber>[];
  stress: ListMenuItem<CondValueNumber>[];
  length: ListMenuItem<CondValueNumber>[];
};

export type ListMenuCondItem = ListMenuCond[WhatValue][number];

export type ListMenu = {
  whatValues: ListMenuWhat;
  condValues: ListMenuCond;
};

export type ListMenuWhatOrCondItem = ListMenuWhatItem | ListMenuCondItem;
