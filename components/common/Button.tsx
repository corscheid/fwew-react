import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import type { FAIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  useColorScheme,
  type TextStyle,
  type ViewStyle,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  icon: FAIconName;
  text?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function Button(props: ButtonProps) {
  const { onPress, disabled, icon, text, style, textStyle } = props;
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const theme = useTheme();
  const Themed = getThemedComponents(themeName);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          //backgroundColor: disabled ? colors.placeholder : theme.colors.primary,
          opacity: pressed ? 0.5 : 1,
          ...style,
        },
      ]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={colorExtension.dark.text} />
      {text && (
        <Themed.Text style={{ color: colorExtension.dark.text, ...textStyle }}>
          {text}
        </Themed.Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
