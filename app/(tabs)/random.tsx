import { Button } from "@/components/common/Button";
import { ResultCount } from "@/components/common/ResultCount";
import { WideLayout } from "@/components/common/WideLayout";
import { ListResults } from "@/components/list/ListResults";
import { RandomOptions } from "@/components/random/RandomOptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useRandom } from "@/hooks/useRandom";
import { NumericString } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { useThemeName } from "@/hooks/useThemeName";
import { useDialectContext } from "@/context/DialectContext";
import { getButtonBackground, getThemedComponents, getBackground } from "@/themes";
import { useCallback, useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function RandomScreen() {
  const [numWords, setNumWords] = useState<NumericString>("8");
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute, cancel } = useRandom();
  const debounce = useDebounce();
  const { dialect } = useDialectContext();
  const resultsVisible = numWords.length > 0 && results.length > 0;
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const theme = useTheme();
  const themeName = useThemeName().themeName;

  const updateNumWords = useCallback((num: NumericString) => {
    if (num === "") {
      setNumWords("");
      return;
    }
    const n = +num;
    if (isNaN(n) || n < 1 || n > 100) {
      return;
    }
    setNumWords(num);
  }, []);

  const getData = () =>
    debounce(async () => await execute(numWords, filterExpression));

  // initial data load
  useEffect(() => {
    getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // subsequent data loads
  useEffect(() => {
    if (numWords.length === 0 || filterExpression.length === 0 || incomplete) {
      return;
    }
    getData();
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numWords, filterExpression, incomplete]);

  if (wide) {
    return getBackground(themeName, (
      <WideLayout
        sidebar={
          <>
            <RandomOptions
              numWords={numWords}
              updateNumWords={updateNumWords}
              filters={filters}
              add={add}
              remove={remove}
              update={update}
              incomplete={incomplete}
            />
            <View style={{ paddingTop: 16 }}>
            {getButtonBackground(themeName, {}, (<Button
            icon="refresh"
            onPress={() => execute(numWords, filterExpression)}
            disabled={loading}
          />), dialect, true)}
            </View>
          </>
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
    ), dialect
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
        <RandomOptions
          numWords={numWords}
          updateNumWords={updateNumWords}
          filters={filters}
          add={add}
          remove={remove}
          update={update}
          incomplete={incomplete}
        />
        <View style={{}}>
          {getButtonBackground(themeName, {}, (<Button
            icon="refresh"
            onPress={() => execute(numWords, filterExpression)}
            disabled={loading}
          />), dialect, true)}
        </View>
        <ResultCount visible={resultsVisible} resultCount={results.length} />
        <ListResults
          loading={loading}
          results={resultsVisible ? results : []}
        />
      </View>
    </ScrollView>
  ), dialect
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
