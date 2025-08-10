import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";

type Props = {
  href: Href;
  title: string;
};

export function ScreenLinkCard({ href, title }: Props) {
  const { themeName } = useThemeNameContext();
  const { colorSchemeValue } = useColorSchemeContext();
  const Themed = getThemedComponents(themeName);
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];

  return (
    <Link href={href}>
      <Themed.CardView style={styles.container}>
        <Themed.Text style={styles.text}>{title}</Themed.Text>
        <FontAwesome
          size={24}
          name="chevron-right"
          color={colors.text}
          style={styles.arrow}
        />
      </Themed.CardView>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 16,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
  },
  arrow: {
    marginLeft: "auto",
  },
});
