import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { WideLayout } from "@/components/common/WideLayout";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFwew } from "@/hooks/useFwew";
import { useTheme } from "@react-navigation/native";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function SearchScreen() {
  const {
    query,
    naviOnly,
    results,
    resultCount,
    loading,
    search,
    setNaviOnly,
    execute,
    cancel,
  } = useFwew();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).search;
  const { width } = useWindowDimensions();
  const wide = width > 720;

  if (wide) {
    return (
      <WideLayout
        sidebar={
          <>
            <SearchBar
              query={query}
              search={search}
              execute={execute}
              cancel={cancel}
              autoFocus
            />
            <SwitchInput
              leftLabel={ui.naviOnly}
              rightLabel=""
              value={naviOnly}
              onValueChange={setNaviOnly}
            />
          </>
        }
        header={
          <ResultCount
            visible={query.length > 0 && resultCount > 0}
            resultCount={resultCount}
            style={styles.bottomPadded}
          />
        }
        main={<FwewSearchResults loading={loading} results={results} />}
        refresh={{
          loading,
          getData: execute,
          colors: [colors.primary],
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        search={search}
        execute={execute}
        cancel={cancel}
        autoFocus
      />
      <SwitchInput
        leftLabel={ui.naviOnly}
        rightLabel=""
        value={naviOnly}
        onValueChange={setNaviOnly}
      />
      <ResultCount
        visible={query.length > 0 && resultCount > 0}
        resultCount={resultCount}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={execute}
            colors={[colors.primary]}
          />
        }
      >
        <FwewSearchResults loading={loading} results={results} />
      </ScrollView>
    </View>
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
