import { NoResults } from "@/components/common/NoResults";
import { ResultCard } from "@/components/common/ResultCard";
import { SearchBar } from "@/components/common/SearchBar";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { StatusBar } from "expo-status-bar";
import { LanguageCode } from "fwew.js";
import { useState } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

export default function FavoritesScreen() {
  const { favorites } = useFavoritesContext();
  const [query, search] = useState("");
  const { resultsLanguage } = useResultsLanguageContext();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const { width } = useWindowDimensions();
  const wide = width > 720;

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: wide ? "66%" : "100%", gap: 16, padding: 16 }}>
          {favorites.length > 0 ? (
            <SearchBar query={query} search={search} />
          ) : (
            <NoResults />
          )}
          {favorites
            .filter(
              (w) =>
                w.Navi.includes(query) ||
                w.EN.includes(query) ||
                w[languageCode].includes(query)
            )
            .map((word) => (
              <ResultCard key={word.ID} word={word} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
