import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useProfanity } from "@/hooks/useProfanity";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function ProfanityScreen() {
  const auxtheme = getTheme()
  const { results, resultCount, loading, execute } = useProfanity();
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
