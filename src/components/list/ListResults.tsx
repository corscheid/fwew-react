import { ResultCard } from "@/components/common/ResultCard";
import type { Word } from "fwew.js";
import { memo } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import { NoResults } from "../common/NoResults";

type ListResultsProps = {
  loading?: boolean;
  results: Word[] | null;
};

export const ListResults = memo(function ListResults({ loading, results }: ListResultsProps) {
  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }

  if (results == null || results.map == null) {
    return null;
  }

  if (results.length === 0) {
    return <NoResults />;
  }

  return (
    <View style={styles.container}>
      {results.map((word) => (
        <ResultCard key={word.ID} word={word} />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
