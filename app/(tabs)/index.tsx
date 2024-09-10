import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFwew } from "@/hooks/useFwew";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

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
  const auxtheme = getTheme()
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).search;
  const content = (
    <View style={{height: "100%"}}>
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
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
      <FwewSearchResults loading={loading} results={results} />
    </ScrollView>
    </View>
)
  
  return dialect === "reef"
  ? auxtheme.BackgroundReef(content)
  : auxtheme.Background(content);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
