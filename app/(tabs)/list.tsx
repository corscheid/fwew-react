import { ResultCount } from "@/components/common/ResultCount";
import { WideLayout } from "@/components/common/WideLayout";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useList } from "@/hooks/useList";
import { getBackground, getThemedComponents } from "@/themes";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
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
  const resultsVisible = filterExpression.length > 0 && results.length > 0;
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const getData = () => debounce(async () => await execute(filterExpression));

  useEffect(() => {
    if (incomplete || filterExpression.length === 0) {
      return;
    }
    getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete]);

  const { dialect } = useDialectContext();

  var content = (<ScrollView
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
      <Themed.CardView>
      <ListOptions
        filters={filters}
        add={add}
        remove={remove}
        update={update}
        incomplete={incomplete}
      />
      </Themed.CardView>
      <ResultCount visible={resultsVisible} resultCount={results.length} />
      <ListResults
        loading={loading}
        results={resultsVisible ? results : []}
      />
    </View>
  </ScrollView>);

  if (wide) {
    content = (
      <WideLayout
        sidebar={
          <Themed.CardView>
            <ListOptions
              filters={filters}
              add={add}
              remove={remove}
              update={update}
              incomplete={incomplete}
            />
          </Themed.CardView>
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
      />
    );
  }

  return getBackground(themeName, content, dialect);
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
