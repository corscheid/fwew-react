import GlobalStyle from "@/components/common/GlobalStyle";
import { getUI } from "@/constants/i18n";
import { ContextProviders } from "@/context/ContextProviders";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useDialect } from "@/hooks/useDialect";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

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

  return (
    <ContextProviders>
      <RootLayoutNav />
    </ContextProviders>
  );
}

function RootLayoutNav() {
  const appLanguageValue = useAppLanguage();
  const { appLanguage } = appLanguageValue;
  const dialectValue = useDialect();
  const { dialect } = dialectValue;

  return (
    <>
      <GlobalStyle />
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
    </>
  );
}
