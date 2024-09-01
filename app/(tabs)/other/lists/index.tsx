import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import { ItalicText } from "@/components/common/StyledText";
import { CardView, GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function ListsScreen() {
  const auxtheme = getTheme()
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const content = (
    <ScrollView>
      <View style={styles.container}>
        <ScreenLinkCard
          href="/other/lists/cameron"
          title={screens.cameronWords}
        />
        <ScreenLinkCard
          href={"/other/lists/homonyms"}
          title={screens.homonyms}
        />
        <ScreenLinkCard
          href={"/other/lists/multi-ipa"}
          title={screens.multiIPA}
        />
        <ScreenLinkCard
          href={"/(tabs)/other/lists/oddballs"}
          title={screens.oddballs}
        />
        <ScreenLinkCard
          href={"/other/lists/profanity"}
          title={screens.profanity}
        />
        <ScreenLinkCard href={"/other/lists/that"} title={screens.that} />
      </View>
    </ScrollView>
  );

  return auxtheme.Background(content);
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
