import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { FlagMap } from "@/components/settings/Flags";
import { ResultsLanguages } from "@/constants/Language";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StyleSheet, View } from "react-native";

export function ResultsLanguageSelect() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView>
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>{FlagMap[resultsLanguage]}</View>
          <Themed.Text style={styles.value}>
            {ui.settings.resultsLanguage}
          </Themed.Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {ResultsLanguages.map((language, i) => (
            <View key={`srl_${i}`}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={resultsLanguage === language.value}
                onSelect={() => saveResultsLanguage(language.value)}
              />
            </View>
          ))}
        </View>
      }
    />
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
