import { getUI } from "@/constants/i18n";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { ReefMe } from "@/lib/dialect";
import { getColorExtension, getThemedComponents } from "@/themes";
import type { Dialect } from "@/types/common";
import type { Word } from "fwew.js";
import { StyleSheet, View } from "react-native";

type ResultOverviewProps = {
  dialect: Dialect;
  word: Word;
  local: string;
};

export function ResultOverview({ dialect, word, local }: ResultOverviewProps) {
  const forestNavi = word.Navi;
  const { reefNavi } = ReefMe(word.IPA, word.Navi);
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const Themed = getThemedComponents(themeName);
  const { resultsLanguage } = useResultsLanguageContext();
  const ui = getUI(resultsLanguage, dialect);

  return (
    <View style={styles.closedContainer}>
      {/* Na'vi */}
      <Themed.Text style={styles.navi}>{dialect === "reef" ? reefNavi : forestNavi}</Themed.Text>
      {/* Part of Spech */}
      <View style={[styles.posContainer, { backgroundColor: colors.innerCard }]}>
        <Themed.MonoText style={styles.pos}>{ui.common.partOfSpeech[word.PartOfSpeech].abbr}</Themed.MonoText>
      </View>
      {/* Definition */}
      <Themed.Text style={styles.local} numberOfLines={1}>
        {local}
      </Themed.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  closedContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "88%",
    gap: 16,
  },
  navi: {
    fontSize: 24,
  },
  posContainer: {
    padding: 4,
    borderRadius: 4,
  },
  pos: {
    fontSize: 16,
  },
  local: {
    flex: 1,
    fontSize: 18,
  },
});
