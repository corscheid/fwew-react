import { ActionButtons } from "@/components/common/ActionButtons";
import { Logo } from "@/components/common/Logo";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { Stack } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import { getBackground, getTopbar } from "@/themes";

// https://docs.expo.dev/router/reference/faq/#missing-back-button
export const unstable_settings = {
  initialRouteName: "index",
};

export default function StackLayout() {
  const { themeName } = useThemeNameContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens, names } = getUI(appLanguage, dialect);
  const Topbar = getTopbar(themeName, dialect)

  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <View style={styles.actionButton}>
            <ActionButtons />
          </View>
        ),
        headerBackground: () => Topbar,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: screens.other,
          headerLeft: () => (
            <View style={styles.logo}>
              <Logo />
            </View>
          ),
        }}
      />
      <Stack.Screen name="lenition" options={{ title: screens.lenition }} />
      <Stack.Screen name="stats" options={{ title: screens.stats }} />
      <Stack.Screen name="valid" options={{ title: screens.valid }} />
      <Stack.Screen name="lists/index" options={{ title: screens.lists }} />
      <Stack.Screen
        name="lists/cameron"
        options={{ title: screens.cameronWords }}
      />
      <Stack.Screen
        name="lists/homonyms"
        options={{ title: screens.homonyms }}
      />
      <Stack.Screen
        name="lists/multi-ipa"
        options={{ title: screens.multiIPA }}
      />
      <Stack.Screen
        name="lists/oddballs"
        options={{ title: screens.oddballs }}
      />
      <Stack.Screen
        name="lists/profanity"
        options={{ title: screens.profanity }}
      />
      <Stack.Screen name="lists/that" options={{ title: screens.that }} />
      <Stack.Screen name="names/index" options={{ title: screens.names }} />
      <Stack.Screen
        name="names/name-single"
        options={{ title: names.single }}
      />
      <Stack.Screen name="names/name-full" options={{ title: names.full }} />
      <Stack.Screen name="names/name-alu" options={{ title: names.alu }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: Platform.OS === "web" ? 0 : -16,
    marginRight: Platform.OS === "web" ? 0 : 16,
  },
  actionButton: {
    marginRight: Platform.OS === "web" ? 0 : -16,
  },
});
