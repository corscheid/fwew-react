import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "expo-router/react-navigation";
import { Pressable, StyleSheet, View } from "react-native";

type NameResultsProps = {
  names: string[];
  copyName: (name: string) => void;
};

export function NameResults({ names, copyName }: NameResultsProps) {
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.results}>
      {names.map((name, i) => (
        <Pressable
          key={`nr_${i}`}
          onPress={() => copyName(name)}
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
          <Themed.CardView style={styles.nameCard}>
            <Themed.Text style={styles.name}>{name}</Themed.Text>
            <FontAwesome name="copy" size={24} color={theme.colors.text} />
          </Themed.CardView>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    flex: 1,
    gap: 16,
    paddingBottom: 32,
  },
  nameCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 18,
    maxWidth: "85%",
  },
});
