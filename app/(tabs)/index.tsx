import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFwew } from "@/hooks/useFwew";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents, getBackground } from "@/themes";

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
  const { themeName } = useThemeNameContext();

  return getBackground(
    themeName,
    (<ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <View style={{ alignItems: "center" }}>
        <View style={[styles.container, { width: wide ? "66%" : "100%" }]}>
          <SearchBar
            query={query}
            search={(q) => {
              router.setParams({ q });
              search(q);
            }}
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
        </View>
      </View>
    </ScrollView>), dialect
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bottomPadded: {
    paddingBottom: 16,
  },
});
