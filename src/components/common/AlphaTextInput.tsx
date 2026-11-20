import { SmallButton } from "@/components/common/SmallButton";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { StyleSheet, View } from "react-native";

type AlphaTextInputProps = {
  value?: string | `${number}` | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function AlphaTextInput(props: AlphaTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView style={styles.inputContainer}>
      <Themed.TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
        style={[styles.input, { borderColor: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus={autoFocus}
      />
      {value ? (
        <SmallButton icon="close" onPress={() => onChangeText("")} />
      ) : (
        <View style={[styles.clearButton, { borderColor: colors.text }]} />
      )}
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  clearButton: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
