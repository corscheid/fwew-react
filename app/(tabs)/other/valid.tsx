import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useValid } from "@/hooks/useValid";
import { getThemedComponents, getBackground } from "@/themes";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useDialectContext } from "@/context/DialectContext";

export default function ValidScreen() {
  const { query, results, loading, search, cancel } = useValid();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { dialect } = useDialectContext();

  if (wide) {
    return (
      <View style={{ gap: 16 }}>
        <SearchBar query={query} search={search} cancel={cancel} autoFocus />
        <ResultCount
          resultCount={results.length}
          visible={results.length > 0 && !loading}
        />
        {results.map((row, index) => (
          <Themed.CardView key={`vrc_${index}`} style={styles.container}>
            <Themed.Text>{row}</Themed.Text>
          </Themed.CardView>
        ))}
      </View>
    );
  }

  return getBackground(themeName, (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={{ alignItems: "center" }}>
        <View style={styles.container}>
          <SearchBar query={query} search={search} cancel={cancel} autoFocus />
          <ResultCount
            resultCount={results.length}
            visible={results.length > 0 && !loading}
          />
          {results.map((row, index) => (
            <Themed.CardView key={`vrc_${index}`} style={styles.container}>
              <Themed.Text>{row}</Themed.Text>
            </Themed.CardView>
          ))}
        </View>
      </View>
    </ScrollView>
  ), dialect, true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
    fontSize: 16,
    width: "100%",
  },
  bottomPadded: {
    paddingBottom: 16,
  },
});
