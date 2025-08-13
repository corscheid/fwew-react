import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

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
  const router = useRouter();

  return (
    <Themed.CardView>
      <Pressable style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
        onPress={() => router.push(href)}
      >
        <Themed.Text style={styles.text}>{title}</Themed.Text>
        <FontAwesome
          size={24}
          name="chevron-right"
          color={colors.text}
          style={styles.arrow}
        />
      </Pressable>
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
  arrow: {
    marginLeft: "auto",
  },
});
