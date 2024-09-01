import { GradientCardView, Text } from "@/components/common/Themed";
import credits from "@/constants/Credits";
import { getUI } from "@/constants/i18n";
import { AppLanguages } from "@/constants/Language";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { ExtendedLanguageCode } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { FlagMap } from "./Flags";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  return (
    <GradientCardView style={styles.creditsContainer}>
      <Text style={styles.label}>{ui.settings.credits}</Text>
      <CreditsItem
        title={ui.settings.development}
        names={credits.development}
      />
      <CreditsItem title={ui.settings.design} names={credits.design} />
      <CreditsItem title={ui.settings.testing} names={credits.testing} />
      <CreditsItem
        title={ui.settings.translation}
        names={credits.translation}
      />
    </GradientCardView>
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

  return (
    <GradientCardView>
      <Text style={styles.label}>{title}</Text>
      <GradientCardView style={styles.creditsItemContainer}>
        {names.map((name, i) => (
          <GradientCardView
            key={`ci_${title}_${i}`}
            style={[
              styles.textContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <Text style={styles.text}>{name}</Text>
          </GradientCardView>
        ))}
      </GradientCardView>
    </GradientCardView>
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
