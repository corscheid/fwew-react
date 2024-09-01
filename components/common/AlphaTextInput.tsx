import { SmallButton } from "@/components/common/SmallButton";
import { GradientCardView, TextInput } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";

type AlphaTextInputProps = {
  value?: string | `${number}` | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
  autoFocus?: boolean;
};

export function AlphaTextInput(props: AlphaTextInputProps) {
  const { value, onChangeText, placeholder, autoFocus } = props;
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <GradientCardView style={styles.inputContainer}>
      <TextInput
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
        <GradientCardView style={[styles.clearButton, { borderColor: colors.text }]} />
      )}
    </GradientCardView>
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
