import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";

type Props = {
  href: Href<string>;
  title: string;
  description?: string;
};

export function ScreenLinkCard({ href, title, description }: Props) {
  return (
    <Link href={href}>
      <CardView style={styles.card}>
        <CardView style={styles.textGroup}>
          {title.split(" ").map((titleWord, i) => (
            <Text key={`lnw_names_${i}`} style={styles.text}>
              {titleWord}
            </Text>
          ))}
          {description && <ItalicText>{description}</ItalicText>}
        </CardView>
      </CardView>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 32,
    width: 256,
    height: 128,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  textGroup: {
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
