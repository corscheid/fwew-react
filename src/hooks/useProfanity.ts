import { useStaticList } from "@/hooks/useStaticList";
import { fwew } from "fwew.js";

const profanityQuery = [
  "skxawng",
  "kalweyaveng",
  "kurkung",
  "pela'ang",
  "pxasìk",
  "teylupil",
  "tsahey",
  "txanfwìngtu",
  "vitronvä'",
  "vonvä'",
  "wiya",
  "yayl",
].join(" ");

export const useProfanity = () => useStaticList((s) => fwew(profanityQuery, s));
