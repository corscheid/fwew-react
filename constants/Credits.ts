import { ExtendedLanguageCode } from "@/types/common";

export type CreditsTranslationType = {
  [key in ExtendedLanguageCode]: string[];
};

export type CreditsType = {
  development: string[];
  design: string[];
  testing: string[];
  translation: CreditsTranslationType;
};

const Credits: CreditsType = {
  development: ["Tirea Aean", "Txonpay"],
  design: ["Tirea Aean", "Tsyili"],
  testing: ["Palusyulang", "Tsyili", "Txonpay"],
  translation: {
    de: ["Tìtstewan"],
    en: ["Tirea Aean", "Tsyili", "Atxewluke (suchtrashley)"],
    eo: ["Tirea Aean"],
    es: ["ExploBth", "Alyara Arati"],
    et: [],
    fr: ["Vawmataw"],
    hu: [],
    ko: ["유펀"],
    nl: ["Charlotte", "Wllìm"],
    nx0: ["Tsyili", "Palusyulang", "Tirea Aean"],
    nx1: ["Txonpay", "Tirea Aean"],
    pl: [],
    pt: ["Palusyulang", "Tslakxime", "'Ìohan"],
    ru: ["Tan Jala"],
    sv: [],
    tr: ["İsmail yiğit"],
    uk: ["Anurai Tawkamiyä"],
  },
};

export default Credits;
