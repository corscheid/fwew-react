import { WideLayout } from "@/components/common/WideLayout";
import { NumberResultCard } from "@/components/number/NumberResultCard";
import { NumberSearchBar } from "@/components/number/NumberSearchBar";
import { useNumber } from "@/hooks/useNumber";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getBackground } from "@/themes";

export default function NumbersScreen() {
  const [mode, toggleMode, query, result, search, clear] = useNumber();
  const { width } = useWindowDimensions();
  const wide = width > 720;

  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();

  var content = (
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

  if (wide) {
    content = (
      <WideLayout
        sidebar={
          <NumberSearchBar
            mode={mode}
            toggleMode={toggleMode}
            query={query}
            search={search}
            clear={clear}
          />
        }
        main={<NumberResultCard result={result} />}
      />
    );
  }

  return getBackground(themeName, content, dialect);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
