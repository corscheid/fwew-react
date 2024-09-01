import { SmallButton } from "@/components/common/SmallButton";
import { GradientCardView, TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Platform, StyleSheet, useColorScheme } from "react-native";

type NumberSearchBarProps = {
  mode: string;
  toggleMode: () => void;
  query: string;
  search: (query: string) => void;
  clear: () => void;
};

export function NumberSearchBar(props: NumberSearchBarProps) {
  const { mode, toggleMode, query, search, clear } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  let ui = getUI(appLanguage, dialect);

  return (
    <GradientCardView style={styles.inputContainer}>
      <TextInput
        value={query}
        onChangeText={search}
        placeholder={
          mode === "number"
            ? ui.numbers.placeholderNumeric
            : ui.numbers.placeholderAlpha
        }
        placeholderTextColor={colors.placeholder}
        keyboardType={mode === "number" ? "number-pad" : "default"}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus
      />
      <SmallButton icon="close" onPress={clear} />
      <SmallButton icon="exchange" onPress={toggleMode} />
    </GradientCardView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderWidth: 1,
    height: Platform.OS === "web" ? null : 50,
  },
});
