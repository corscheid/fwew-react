import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import { View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { ScrollView, StyleSheet } from "react-native";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenLinkCard href="/(tabs)/other/names" title={screens.names} />
        <ScreenLinkCard href="/(tabs)/other/lists" title={screens.lists} />
        <ScreenLinkCard href="/(tabs)/other/stats" title={screens.stats} />
        <ScreenLinkCard href={"/(tabs)/other/valid"} title={screens.valid} />
        <ScreenLinkCard
          href="/(tabs)/other/lenition"
          title={screens.lenition}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    gap: 16,
  },
});
