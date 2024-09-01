import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { useValid } from "@/hooks/useValid";
import { ScrollView, StyleSheet } from "react-native";

export default function ValidScreen() {
  const { query, results, loading, search, cancel } = useValid();

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      // refreshControl={
      //   <RefreshControl
      //     refreshing={loading}
      //     onRefresh={execute}
      //     colors={[colors.primary]}
      //   />
      // }
    >
      <View style={styles.main}>
        <SearchBar query={query} search={search} cancel={cancel} autoFocus />
        <ResultCount
          resultCount={results.length}
          visible={results.length > 0 && !loading}
        />
        {results.map((row, index) => (
          <GradientCardView key={`vrc_${index}`} style={styles.container}>
            <Text>{row}</Text>
          </GradientCardView>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    gap: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
});
