import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StyleSheet } from "react-native";

export function NoResults() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { common } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return <Themed.Text style={styles.text}>{common.noResults}</Themed.Text>;
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    padding: 16,
    fontSize: 16,
  },
});
