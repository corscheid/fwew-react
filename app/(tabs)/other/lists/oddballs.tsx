import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useOddballs } from "@/hooks/useOddballs";
import { ScrollView, StyleSheet, View } from "react-native";
import { getBackground } from "@/themes";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";

export default function OddballsScreen() {
  const { results, resultCount, loading } = useOddballs();
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();

  return getBackground(themeName,
    <ScrollView>
      <View style={styles.container}>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        <FwewSearchResults loading={loading} results={results} />
      </View>
    </ScrollView>, dialect
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
