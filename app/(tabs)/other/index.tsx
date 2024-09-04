import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import { ItalicText } from "@/components/common/StyledText";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { Background, BackgroundReef } from "@/themes/frutigerAero";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const content = (
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

  return dialect === "reef"
  ? BackgroundReef(content)
  : Background(content);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 16,
  },
});
