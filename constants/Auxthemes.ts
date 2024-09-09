import type { Auxtheme } from "@/types/common";

export type AuxthemeMeta = {
  value: Auxtheme;
  label: string;
};

export const Auxthemes: AuxthemeMeta[] = [
  { value: "normal", label: "normal" },
  { value: "frutiger aero", label: "frutiger aero" },
];
