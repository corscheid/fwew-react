import { ResultCount } from "@/components/common/ResultCount";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { useTheme } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ListScreen() {

  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute, cancel } = useList();
  const debounce = useDebounce();
  const { colors } = useTheme();
  const resultsVisible = filterExpression.length > 0 && results.length > 0;

  const getData = useCallback(async () => {
    if (incomplete || filterExpression.length === 0) {
      return;
    }
    debounce(() => execute(filterExpression));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete]);

  useEffect(() => {
    void getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getData}
          colors={[colors.primary]}
        />
      }
    >
      <ListOptions
        filters={filters}
        add={add}
        remove={remove}
        update={update}
        incomplete={incomplete}
      />
      <ResultCount
        visible={resultsVisible}
        resultCount={results.length}
        style={styles.resultCount}
      />
      <ListResults loading={loading} results={resultsVisible ? results : []} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  resultCount: {
    padding: 16,
  },
});
