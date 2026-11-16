import type { FAIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "expo-router/react-navigation";
import { Pressable, StyleSheet } from "react-native";

type SmallButtonProps = {
  onPress: () => void;
  icon: FAIconName;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
};

export function SmallButton(props: SmallButtonProps) {
  const { onPress, icon, color, borderColor, disabled } = props;
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: colors.card,
          borderWidth: borderColor ? 1 : 0,
          opacity: pressed ? 0.5 : 1,
          borderColor,
        },
      ]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={color ?? colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 10,
    paddingTop: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
