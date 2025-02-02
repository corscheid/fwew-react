import { ResultCount } from "@/components/common/ResultCount";
import { WideLayout } from "@/components/common/WideLayout";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { getBackground } from "@/themes";
import { useTheme } from "@react-navigation/native";
import { useThemeName } from "@/hooks/useThemeName";
import { useDialectContext } from "@/context/DialectContext";
import { useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function ListScreen() {
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute, cancel } = useList();
  const debounce = useDebounce();
  const { dialect } = useDialectContext();
  const resultsVisible = results.length > 0;
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const theme = useTheme();
  const themeName = useThemeName().themeName;

  const getData = () => debounce(async () => await execute(filterExpression));

  useEffect(() => {
    if (incomplete) {
      return;
    }
    getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete]);

  if (wide) {
    return getBackground(themeName,
      (<WideLayout
        sidebar={
          <ListOptions
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            incomplete={incomplete}
            initiallyOpen
          />
        }
        header={
          <ResultCount
            visible={resultsVisible}
            resultCount={results.length}
            style={styles.bottomPadded}
          />
        }
        main={
          <ListResults
            loading={loading}
            results={resultsVisible ? results : []}
          />
        }
        refresh={{
          loading,
          getData,
          colors: [theme.colors.primary],
        }}
      />), dialect, true
    );
  }

  return getBackground(themeName, (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getData}
          colors={[theme.colors.primary]}
        />
      }
    >
      <View style={styles.container}>
        <ListOptions
          filters={filters}
          add={add}
          remove={remove}
          update={update}
          incomplete={incomplete}
          initiallyOpen={false}
        />
        <ResultCount
          visible={!loading && resultsVisible}
          resultCount={results.length}
        />
        <ListResults
          loading={loading}
          results={resultsVisible ? results : []}
        />
      </View>
    </ScrollView>), dialect, true
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  bottomPadded: {
    paddingBottom: 16,
  },
});
