import { SmallButton } from "@/components/common/SmallButton";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import type { NumericString } from "@/types/common";
import { StyleSheet, useColorScheme, View } from "react-native";

type NumericTextInputProps = {
  value?: string | NumericString;
  onChangeText: (text: NumericString) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function NumericTextInput(props: NumericTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView style={styles.inputContainer}>
      <Themed.TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={(text) => onChangeText(text as NumericString)}
        keyboardType="number-pad"
        style={[styles.input, { borderColor: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        autoFocus={autoFocus}
      />
      <View style={styles.clearButton}>
        {value && value.length > 0 && (
          <SmallButton icon="close" onPress={() => onChangeText("")} />
        )}
      </View>
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    //paddingVertical: 4,
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  clearButton: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
