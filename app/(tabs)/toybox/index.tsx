import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";

export default function ToyboxScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { toybox } = i18n[appLanguage];

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <span>
        <Link href="/(tabs)/toybox/names">
          <CardView style={styles.card}>
            <Text style={styles.text}>{toybox.names}</Text>
            <ItalicText>Names</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/toybox/lists">
          <CardView style={styles.card}>
            <Text style={styles.text}>{toybox.lists}</Text>
            <ItalicText>Lists</ItalicText>
          </CardView>
        </Link>
        </span>
        <span>
        <Link href="/(tabs)/toybox/stats">
          <CardView style={styles.card}>
            <Text style={styles.text}>{toybox.stats}</Text>
            <ItalicText>Stats</ItalicText>
          </CardView>
        </Link>
        <Link href="/(tabs)/toybox/valid">
          <CardView style={styles.card}>
            <Text style={styles.text}>{toybox.valid}</Text>
            <ItalicText>Valid</ItalicText>
          </CardView>
        </Link>
        </span>
        <Link href="/(tabs)/toybox/lenition">
          <CardView style={styles.card}>
            <Text style={styles.text}>{toybox.lenition}</Text>
            <ItalicText>Lenition</ItalicText>
          </CardView>
        </Link>
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
