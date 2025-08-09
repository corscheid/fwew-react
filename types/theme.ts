import type { Dialect } from "@/types/common";
import type { Theme } from "@react-navigation/native";
import type { JSX } from "react";
import type { TextInputProps, TextProps, ViewProps } from "react-native";

export type ColorExtension = Record<
  "light" | "dark",
  {
    text: string;
    background: string;
    tint: string;
    placeholder: string;
    tabIconDefault: string;
    tabIconSelected: string;
    link: string;
    innerCard: string;
  }
>;

export type ThemeType = {
  light: Record<Dialect, Theme>;
  dark: Record<Dialect, Theme>;
  ext: ColorExtension;
  components: {
    Text: (props: TextProps) => JSX.Element;
    MonoText: (props: TextProps) => JSX.Element;
    BoldText: (props: TextProps) => JSX.Element;
    ItalicText: (props: TextProps) => JSX.Element;
    UnderlinedText: (props: TextProps) => JSX.Element;
    CardView: (props: ViewProps) => JSX.Element;
    TextInput: (props: TextInputProps) => JSX.Element;
  };
  updatePWATheme: (dialect: Dialect) => void;
};
