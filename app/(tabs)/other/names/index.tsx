import { ItalicText } from "@/components/common/StyledText";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function NamesScreen() {
  const auxtheme = getTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names } = getUI(appLanguage, dialect);

  return auxtheme.Background(
    <View style={styles.container}>
      <ScreenLinkCard href="/other/names/name-single" title={names.single} description="Neytiri" />
      <ScreenLinkCard href="/other/names/name-full" title={names.full} description="Neytiri te Tskaha Mo'at'ite" />
      <ScreenLinkCard href="/other/names/name-alu" title={names.alu} description="Neytiri alu Taronyu Teyluä" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
});
