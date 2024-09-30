import { ResultCard } from "@/components/common/ResultCard";
import { SearchBar } from "@/components/common/SearchBar";
import { WideLayout } from "@/components/common/WideLayout";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useFavorites } from "@/hooks/useFavorites";
import { StatusBar } from "expo-status-bar";
import { LanguageCode } from "fwew.js";
import { useState } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const [query, search] = useState("");
  const { resultsLanguage } = useResultsLanguageContext();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const { width } = useWindowDimensions();
  const wide = width > 720;

  if (wide) {
    return (
      <WideLayout
        sidebar={<SearchBar query={query} search={search} />}
        main={
          <View style={{ gap: 16 }}>
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
        }
      />
    );
  }

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={{ gap: 16, padding: 16 }}>
        <SearchBar query={query} search={search} />
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
    </ScrollView>
  );
}
