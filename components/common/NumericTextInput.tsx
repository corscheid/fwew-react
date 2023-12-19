import { TextInput, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import type { NumericString } from "@/types/common";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type NumericTextInputProps = {
  value?: string | NumericString;
  onChangeText: (text: NumericString) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function NumericTextInput(props: NumericTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.inputContainer}>
      <TextInput
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
      <TouchableOpacity
        onPress={() => onChangeText("")}
        style={[styles.clearButton, { borderColor: colors.text }]}
      >
        <FontAwesome name="close" size={24} color={colors.text} />
      </TouchableOpacity>
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
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  clearButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
