import { SmallButton } from "@/components/common/SmallButton";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { Platform, StyleSheet, View } from "react-native";

type NumberSearchBarProps = {
  mode: string;
  toggleMode: () => void;
  query: string;
  search: (query: string) => void;
  clear: () => void;
};

export function NumberSearchBar(props: NumberSearchBarProps) {
  const { mode, toggleMode, query, search, clear } = props;
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  let ui = getUI(appLanguage, dialect);
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.inputContainer}>
      <Themed.TextInput
        value={query}
        onChangeText={search}
        placeholder={mode === "number" ? ui.numbers.placeholderNumeric : ui.numbers.placeholderAlpha}
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 16,
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
