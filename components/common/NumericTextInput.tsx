import { SmallButton } from "@/components/common/SmallButton";
import { PlainCardView, GradientCardView, TextInput } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import type { NumericString } from "@/types/common";
import { StyleSheet, useColorScheme, View } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

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
  const auxtheme = getTheme()

  return (
    <GradientCardView style={styles.inputContainer}>
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
      <View style={styles.clearButton}>
      {auxtheme.ButtonBackgroundList((<PlainCardView>
        {value && value.length > 0 && (
          <SmallButton icon="close" onPress={() => onChangeText("")} />
        )}
    </PlainCardView>))}
    </View>
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
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
