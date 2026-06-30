import credits from "@/constants/Credits";
import { getUI } from "@/constants/i18n";
import { AppLanguages } from "@/constants/Language";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { ExtendedLanguageCode } from "@/types/common";
import { useTheme } from "expo-router/react-navigation";
import { StyleSheet, View } from "react-native";
import { FlagMap } from "./Flags";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.creditsContainer}>
      <Themed.Text style={styles.label}>{ui.settings.credits}</Themed.Text>
      <Themed.Text style={styles.label}>{ui.settings.development}</Themed.Text>
      <CreditsItem names={credits.development} />
      <Themed.Text style={styles.label}>{ui.settings.design}</Themed.Text>
      <CreditsItem names={credits.design} />
      <Themed.Text style={styles.label}>{ui.settings.testing}</Themed.Text>
      <CreditsItem names={credits.testing} />
      <Themed.Text style={styles.label}>{ui.settings.translation}</Themed.Text>
      {AppLanguages.map((language, i) => {
        const names = credits.translation[language.value];
        if (names.length > 0)
          return (
            <CreditsItem
              key={`sct_${i}_${language.value}`}
              language={language.value}
              names={names}
            />
          );
      })}
    </View>
  );
}

function CreditsItem({
  language,
  names,
}: {
  language?: ExtendedLanguageCode;
  names: string[];
}) {
  const { colors } = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.creditsItemContainer}>
      <View>{language && FlagMap[language]}</View>
      <View style={{ flex: 1 }}>
        <View style={styles.creditsItemContainer}>
          {names.map((name, i) => (
            <View
              key={`ci_${name}_${i}`}
              style={[
                styles.textContainer,
                { backgroundColor: colors.background },
              ]}
            >
              <Themed.Text style={styles.text}>{name}</Themed.Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  creditsContainer: {
    paddingTop: 8,
    gap: 8,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  creditsItemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  textContainer: {
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
