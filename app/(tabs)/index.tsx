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
import { LinearGradient } from 'expo-linear-gradient';

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

  const frutigerForest = ["#000033", "#0000AA"]
  const frutigerReef = ["#001A22", "#004A55"]

  return (
    <View style={{height: "100%"}}>
      <LinearGradient
        start={{ x: 0, y:0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9,1]}
        colors={dialect === "reef" ? frutigerReef : frutigerForest}
        //colors={[colors.background, colors.background]}
        style={styles.container}
      >
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
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
