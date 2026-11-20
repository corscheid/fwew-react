import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StyleSheet, TextStyle } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
  style?: TextStyle;
};

export function ResultCount({ visible, resultCount, style }: ResultCountProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  if (!visible) return null;

  if (["nx0", "nx1"].includes(appLanguage)) {
    const octalResultCount = resultCount.toString(8);
    return (
      <Themed.Text style={[styles.resultCount, style]}>
        {`°${octalResultCount}a ${ui.common.results(resultCount)}`}
      </Themed.Text>
    );
  }

  return (
    <Themed.Text style={[styles.resultCount, style]}>{`${resultCount} ${ui.common.results(resultCount)}`}</Themed.Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    alignSelf: "center",
  },
});
