import { View } from "@/components/common/Themed";
import { NumberResultCard } from "@/components/number/NumberResultCard";
import { NumberSearchBar } from "@/components/number/NumberSearchBar";
import { useNumber } from "@/hooks/useNumber";
import { StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";
import { useDialectContext } from "@/context/DialectContext";

export default function NumbersScreen() {
  const auxtheme = getTheme();

  const [mode, toggleMode, query, result, search, clear] = useNumber();

  const content = (
    <View style={styles.container}>
      <NumberSearchBar
        mode={mode}
        toggleMode={toggleMode}
        query={query}
        search={search}
        clear={clear}
      />
      <NumberResultCard result={result} />
    </View>
  );

  return auxtheme.Background(content);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
