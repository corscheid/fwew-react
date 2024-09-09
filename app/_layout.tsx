import GlobalStyle from "@/components/common/GlobalStyle";
import { getUI } from "@/constants/i18n";
import { AppLanguageProvider } from "@/context/AppLanguageContext";
import { DialectProvider } from "@/context/DialectContext";
import { ActiveWindowProvider } from "@/context/ActiveWindowContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { ResultsLanguageProvider } from "@/context/ResultsLanguageContext";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useDialect } from "@/hooks/useDialect";
import { useFavorites } from "@/hooks/useFavorites";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import {
  FwewDarkReefTheme,
  FwewDarkTheme,
  FwewLightReefTheme,
  FwewLightTheme,
} from "@/themes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useActiveWindow } from "@/hooks/useActiveWindow";
import { AuxthemeProvider } from "@/context/AuxthemeContext";
import { useAuxtheme } from "@/hooks/useAuxtheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const appLanguageValue = useAppLanguage();
  const { appLanguage } = appLanguageValue;
  const resultsLanguage = useResultsLanguage();
  const dialectValue = useDialect();
  const { dialect } = dialectValue;
  const windowValue = useActiveWindow();
  const auxtheme = useAuxtheme();
  const favorites = useFavorites();
  const theme =
    colorScheme === "dark"
      ? dialectValue.dialect === "reef"
        ? FwewDarkReefTheme
        : FwewDarkTheme
      : dialectValue.dialect === "reef"
      ? FwewLightReefTheme
      : FwewLightTheme;

  return (
    <>
      <GlobalStyle />
      <StatusBar style="light" />
      <ThemeProvider value={theme}>
        <AuxthemeProvider value={auxtheme}>
          <AppLanguageProvider value={appLanguageValue}>
            <ResultsLanguageProvider value={resultsLanguage}>
              <ActiveWindowProvider value={windowValue}>
                <DialectProvider value={dialectValue}>
                  <FavoritesProvider value={favorites}>
                    <Stack>
                      <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="favorites"
                        options={{
                          title: getUI(appLanguage, dialect).screens.favorites,
                          presentation: "modal",
                        }}
                      />
                      <Stack.Screen
                        name="settings"
                        options={{
                          title: getUI(appLanguage, dialect).screens.settings,
                          presentation: "modal",
                        }}
                      />
                    </Stack>
                  </FavoritesProvider>
                </DialectProvider>
              </ActiveWindowProvider>
            </ResultsLanguageProvider>
          </AppLanguageProvider>
        </AuxthemeProvider>
      </ThemeProvider>
    </>
  );
}
