import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useList } from "@/hooks/useList";
import { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function AllScreen() {
  const { results, loading, execute } = useList();
  const resultCount = results.length;
  const { width } = useWindowDimensions();
  const wide = width > 720;

  useEffect(() => {
    void execute("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (wide) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ResultCount visible={resultCount > 0} resultCount={resultCount} />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FwewSearchResults loading={loading} results={[results]} />
          )}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ResultCount visible={resultCount > 0} resultCount={resultCount} />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FwewSearchResults loading={loading} results={[results]} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
