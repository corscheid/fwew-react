import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useMultiIPA } from "@/hooks/useMultiIPA";
import { ScrollView, StyleSheet, View } from "react-native";
import { getBackground } from "@/themes";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";

export default function MultiIPAScreen() {
  const { results, resultCount, loading } = useMultiIPA();
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
