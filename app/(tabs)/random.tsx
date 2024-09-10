import { Button } from "@/components/common/Button";
import { ResultCount } from "@/components/common/ResultCount";
import { GradientCardView, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import { RandomOptions } from "@/components/random/RandomOptions";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useRandom } from "@/hooks/useRandom";
import { NumericString } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";
import { useDialectContext } from "@/context/DialectContext";

export default function RandomScreen() {
  const auxtheme = getTheme();

  const [numWords, setNumWords] = useState<NumericString>("8");
  const { filters, filterExpression, incomplete, add, remove, update } =
    useFilterExpression();
  const { loading, results, execute, cancel } = useRandom();
  const debounce = useDebounce();
  const { colors } = useTheme();
  const resultsVisible = numWords.length > 0 && results.length > 0;

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

  const getData = useCallback(async () => {
    if (numWords.length === 0) {
      return;
    }
    if (filterExpression.length > 0 && incomplete) {
      return;
    }
    debounce(() => execute(numWords, filterExpression));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterExpression, incomplete, numWords]);

  useEffect(() => {
    if (!incomplete) {
      void getData();
    }
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  const content = (
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
      <GradientCardView>
      <RandomOptions
        numWords={numWords}
        updateNumWords={updateNumWords}
        filters={filters}
        add={add}
        remove={remove}
        update={update}
        incomplete={incomplete}
      />
      </GradientCardView>
      <View style={{ paddingTop: 16, height: 72 }}>
        {auxtheme.ButtonBackground(<Button
          icon="refresh"
          text=""
          onPress={() => execute(numWords, filterExpression)}
          disabled={loading}
        />)}
      </View>
      <ResultCount
        visible={resultsVisible}
        resultCount={results.length}
        style={styles.resultCount}
      />
      <ListResults loading={loading} results={resultsVisible ? results : []} />
    </ScrollView>
  );

  return auxtheme.Background(content);
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
