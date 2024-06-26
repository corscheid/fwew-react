import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { CurrentRenderContext } from "@react-navigation/native";
import { Link } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";

export default function StatsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { lists } = i18n[appLanguage];

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <span>
          <Link href="/(tabs)/toybox/lists/cameron">
            <CardView style={styles.card}>
              <Text style={styles.text}>{lists.cameron}</Text>
              <ItalicText>Cameron Words</ItalicText>
            </CardView>
          </Link>
          <Link href="/(tabs)/toybox/lists/homonyms">
            <CardView style={styles.card}>
              <Text style={styles.text}>{lists.homonyms}</Text>
              <ItalicText>Homonyms</ItalicText>
            </CardView>
          </Link>
        </span>
        <span>
        <Link href="/(tabs)/toybox/lists/multi-ipa">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.multi_ipa}</Text>
            <ItalicText>Multi IPA</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/toybox/lists/oddballs">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.oddballs}</Text>
            <ItalicText>Oddball words</ItalicText>
          </CardView>
        </Link>
        </span>
        <span>
        <Link href="/(tabs)/toybox/lists/profanity">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.profanity}</Text>
            <ItalicText>Profanity</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/toybox/lists/that">
          <CardView style={styles.card}>
            <Text style={styles.text}>{lists.that}</Text>
            <ItalicText>"that"</ItalicText>
          </CardView>
        </Link>
        </span>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 16,
  },
  card: {
    padding: 32,
    width: 256,
    height: 128,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
