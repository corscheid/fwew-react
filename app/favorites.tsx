import { ResultCard } from "@/components/common/ResultCard";
import { View } from "@/components/common/Themed";
import { useFavorites } from "@/hooks/useFavorites";
import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const auxtheme = getTheme();

  const content = (
    <ScrollView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.container}>
        {favorites.map((word) => (
          <ResultCard key={word.ID} word={word} />
        ))}
      </View>
    </ScrollView>
  );

  return auxtheme.Background(content);
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});
