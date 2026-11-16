import FwewTheme from "@/themes/fwew";
import { type Dialect } from "@/types/common";
import { type ColorExtension } from "@/types/theme";
import { type Theme } from "expo-router/react-navigation";
import { type ColorSchemeName } from "react-native";

const ThemeMap = {
  fwew: FwewTheme,
};

export type ThemeName = keyof typeof ThemeMap;

export const ThemeNames = Object.keys(ThemeMap) as ThemeName[];

export function getTheme(
  themeName: ThemeName,
  colorScheme: ColorSchemeName,
  dialect: Dialect
): Theme {
  if (!colorScheme) {
    colorScheme = "light";
  }
  return ThemeMap[themeName][colorScheme][dialect];
}

export function getColorExtension(themeName: ThemeName): ColorExtension {
  return ThemeMap[themeName].ext;
}

export function getThemedComponents(themeName: ThemeName) {
  return ThemeMap[themeName].components;
}

export function getPWAThemeUpdater(themeName: ThemeName) {
  return ThemeMap[themeName].updatePWATheme;
}
