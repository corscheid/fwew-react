import FwewTheme from "@/themes/fwew";
import FrutigerAeroTheme from "@/themes/frutigerAero";
import { type Dialect } from "@/types/common";
import { type ColorExtension } from "@/types/theme";
import { type Theme } from "@react-navigation/native";
import { type ColorSchemeName, ViewStyle } from "react-native";

const ThemeMap = {
  fwew: FwewTheme,
  frutigerAero: FrutigerAeroTheme
};

export type ThemeName = keyof typeof ThemeMap;

export const ThemeNamesUser = Object.values(ThemeMap).map(function(theme) {return theme.name})

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

export function getTopbar(themeName: ThemeName, dialect: Dialect) {
  return ThemeMap[themeName].Topbar(dialect);
}

export function getBottombar(themeName: ThemeName, dialect: Dialect) {
  return ThemeMap[themeName].Bottombar(dialect);
}

export function getBackground(themeName: ThemeName, content: JSX.Element, dialect: Dialect, cancel: boolean) {
  if (!cancel) {
    return content
  }
  return ThemeMap[themeName].Background(content, dialect);
}

export function getButtonBackground(themeName: ThemeName, style:ViewStyle, content: JSX.Element, dialect: Dialect, selected: boolean) {
  return ThemeMap[themeName].ButtonBackground(content, style, dialect, selected);
}
