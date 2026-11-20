import { NumberResultCard } from "@/components/number/NumberResultCard";
import { NumberSearchBar } from "@/components/number/NumberSearchBar";
import { useNumber } from "@/hooks/useNumber";
import { StyleSheet, useWindowDimensions, View } from "react-native";

export default function NumbersScreen() {
  const [mode, toggleMode, query, result, search, clear] = useNumber();
  const { width } = useWindowDimensions();
  const wide = width > 720;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={[styles.container, { width: wide ? "66%" : "100%" }]}>
        <NumberSearchBar mode={mode} toggleMode={toggleMode} query={query} search={search} clear={clear} />
        <NumberResultCard result={result} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
