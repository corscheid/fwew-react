import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useOddballs } from "@/hooks/useOddballs";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { getBackground } from "@/themes";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";

export default function OddballsScreen() {
  const { results, resultCount, loading } = useOddballs();
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { themeName } = useThemeNameContext();
  const { dialect } = useDialectContext();

  if (wide) {
    return getBackground(themeName, (
      <View>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        <FwewSearchResults loading={loading} results={results} />
      </View>
    ), dialect, false);
  }

  return getBackground(themeName, (
    <ScrollView>
      <View style={styles.container}>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        <FwewSearchResults loading={loading} results={results} />
      </View>
    </ScrollView>
  ), dialect, true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
    gap: 16,
  },
});
