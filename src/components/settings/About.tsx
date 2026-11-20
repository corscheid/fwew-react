import { Credits } from "@/components/settings/Credits";
import { Version } from "@/components/settings/Version";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StyleSheet } from "react-native";

export function About() {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Themed.CardView style={styles.expanded}>
      <Themed.Text style={styles.value}>{ui.settings.about}</Themed.Text>
      <Version />
      <Credits />
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  expanded: {
    padding: 16,
    gap: 8,
  },
});
