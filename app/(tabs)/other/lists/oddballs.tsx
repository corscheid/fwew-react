import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useOddballs } from "@/hooks/useOddballs";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function OddballsScreen() {
  const auxtheme = getTheme();
  const { results, resultCount, loading, execute } = useOddballs();
  const { colors } = useTheme();

  const content = (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <ResultCount visible={resultCount > 0} resultCount={resultCount} />
      <FwewSearchResults loading={loading} results={results} />
    </ScrollView>
  );
  return auxtheme.Background(content);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
