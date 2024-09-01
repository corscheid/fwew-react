import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { GradientCardView, Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { AppLanguages } from "@/constants/Language";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet } from "react-native";

export function AppLanguageSelect() {
  const { appLanguage, saveAppLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <GradientCardView style={styles.iconContainer}>
          {FlagMap[appLanguage]}
          <Text style={styles.value}>{ui.settings.appLanguage}</Text>
        </GradientCardView>
      }
      openedContent={
        <GradientCardView>
          {AppLanguages.map((language, i) => (
            <GradientCardView key={`sal_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={appLanguage === language.value}
                onSelect={() => saveAppLanguage(language.value)}
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
