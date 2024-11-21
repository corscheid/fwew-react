import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useMultiIPA } from "@/hooks/useMultiIPA";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { getBackground } from "@/themes";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";

export default function MultiIPAScreen() {
  const { results, resultCount, loading } = useMultiIPA();
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { themeName } = useThemeNameContext();
  const { dialect } = useDialectContext();

  return getBackground(
    themeName, (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={[styles.container, { width: wide ? "66%" : "100%" }]}>
          <ResultCount visible={resultCount > 0} resultCount={resultCount} />
          <FwewSearchResults loading={loading} results={results} />
        </View>
      </View>
    </ScrollView>), dialect
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
