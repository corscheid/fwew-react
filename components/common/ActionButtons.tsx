import { DialectDisplay } from "@/constants/Dialects";
import { ResultsLanguages } from "@/constants/Language";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import {
  getColorExtension,
  getPWAThemeUpdater,
  getThemedComponents,
} from "@/themes";
import type { FAIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { FlagMap } from "../settings/Flags";
import { waitFor } from "@testing-library/react-native";

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <DialectButton />
      <LanguageDisplay />
      <ActionButton href="/favorites" icon="heart" />
      <ActionButton href="/settings" icon="gear" />
    </View>
  );
}

function LanguageDisplay() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const Languages = ResultsLanguages.map((rl) => rl.value);
  const index = Languages.indexOf(resultsLanguage);
  const resultsFlag = FlagMap[resultsLanguage];

  const nextLanguage = async () => {
    if (index < 0 || index === Languages.length - 1) {
      await saveResultsLanguage(Languages[0]);
      return;
    }
    await saveResultsLanguage(Languages[index + 1]);
  };

  return (
    <Pressable style={styles.actionButton} onPress={nextLanguage}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.5 : 1 }}>{resultsFlag}</View>
      )}
    </Pressable>
  );
}

function DialectButton() {
  const { dialect, saveDialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const updatePWATheme = getPWAThemeUpdater(themeName);
  return (
    <Pressable
      style={styles.actionButton}
      onPress={async () => {
        const value = dialect === "forest" ? "reef" : "forest";
        await saveDialect(value);
        updatePWATheme(value);
        //signalChangeTheme();
      }}
    >
      {({ pressed }) => (
        <View style={[styles.dialectButton, { opacity: pressed ? 0.5 : 1 }]}>
          <Themed.MonoText style={styles.dialectText}>
            {DialectDisplay[dialect].abbr}
          </Themed.MonoText>
        </View>
      )}
    </Pressable>
  );
}

type ABProps = {
  href: Href;
  icon: FAIconName;
};

function ActionButton({ href, icon }: ABProps) {
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const router = useRouter();

  return (
    <Pressable
      style={styles.actionButton}
      onPress={() => router.navigate(href)}
    >
      {({ pressed }) => (
        <FontAwesome
          name={icon}
          size={25}
          color={colorExtension.dark.text}
          style={{ opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
    gap: 12,
  },
  dialectButton: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  dialectText: {
    color: "#fff",
    fontFamily: "Monospace",
    fontSize: Platform.OS === "web" ? 24 : 20,
    paddingTop: Platform.OS === "web" ? 8 : 0,
    marginTop: Platform.OS === "web" ? -10 : -3,
  },
  actionButton: {
    width: 32,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
