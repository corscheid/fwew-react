import { SmallButton } from "@/components/common/SmallButton";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";

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
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  let ui = getUI(appLanguage, dialect);
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.inputContainer}>
      <Themed.CardView style={styles.input}>
      <Themed.TextInput
        value={query}
        onChangeText={search}
        placeholder={
          mode === "number"
            ? ui.numbers.placeholderNumeric
            : ui.numbers.placeholderAlpha
        }
        placeholderTextColor={colors.placeholder}
        keyboardType={mode === "number" ? "number-pad" : "default"}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus
      />
      </Themed.CardView>
      <Themed.CardView style={styles.button}>
        <SmallButton icon="close" onPress={clear}/>
      </Themed.CardView>
      <Themed.CardView style={styles.button}>
        <SmallButton icon="exchange" onPress={toggleMode}/>
      </Themed.CardView>
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
    height: Platform.OS === "web" ? null : 60,
  },
});
