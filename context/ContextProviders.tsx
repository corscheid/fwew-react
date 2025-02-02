import { AppLanguageProvider } from "@/context/AppLanguageContext";
import { DialectProvider } from "@/context/DialectContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { ResultsLanguageProvider } from "@/context/ResultsLanguageContext";
import { ThemeNameProvider } from "@/context/ThemeNameContext";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useDialect } from "@/hooks/useDialect";
import { useFavorites } from "@/hooks/useFavorites";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import { useThemeName } from "@/hooks/useThemeName";
import { getTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import { ActiveWindowProvider } from "@/context/ActiveWindowContext";
import { useActiveWindow } from "@/hooks/useActiveWindow";
import { ColorSchemeProvider } from "./ColorSchemeContext";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const { colorSchemeValue } = colorScheme;
  const appLanguageValue = useAppLanguage();
  const { appLanguage } = appLanguageValue;
  const resultsLanguage = useResultsLanguage();
  const dialectValue = useDialect();
  const { dialect } = dialectValue;
  const favorites = useFavorites();
  const themeNameValue = useThemeName();
  const { themeName } = themeNameValue;
  const windowValue = useActiveWindow();
  const theme = getTheme(themeName, colorSchemeValue, dialect);

  return (
    <ThemeNameProvider value={themeNameValue}>
      <ThemeProvider value={theme}>
        <AppLanguageProvider value={appLanguageValue}>
          <ResultsLanguageProvider value={resultsLanguage}>
            <ActiveWindowProvider value={windowValue}>
              <ColorSchemeProvider value={colorScheme}>
                <DialectProvider value={dialectValue}>
                  <FavoritesProvider value={favorites}>
                    {children}
                  </FavoritesProvider>
                </DialectProvider>
              </ColorSchemeProvider>
            </ActiveWindowProvider>
          </ResultsLanguageProvider>
        </AppLanguageProvider>
      </ThemeProvider>
    </ThemeNameProvider>
  );
}
