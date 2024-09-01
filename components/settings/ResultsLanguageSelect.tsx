import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { GradientCardView, Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { ResultsLanguages } from "@/constants/Language";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { StyleSheet } from "react-native";

export function ResultsLanguageSelect() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <GradientCardView style={styles.iconContainer}>
          {FlagMap[resultsLanguage]}
          <Text style={styles.value}>{ui.settings.resultsLanguage}</Text>
        </GradientCardView>
      }
      openedContent={
        <GradientCardView>
          {ResultsLanguages.map((language, i) => (
            <GradientCardView key={`srl_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={resultsLanguage === language.value}
                onSelect={() => saveResultsLanguage(language.value)}
              />
            </GradientCardView>
          ))}
        </GradientCardView>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
