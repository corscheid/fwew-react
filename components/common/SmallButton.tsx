import type { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

type SmallButtonProps = {
  onPress: () => void;
  icon: FontAwesomeIconName;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
};

export function SmallButton(props: SmallButtonProps) {
  const { onPress, icon, color, borderColor, disabled } = props;
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          borderWidth: borderColor ? 1 : 0,
          borderColor,
        },
      ]}
      disabled={disabled}
    >
      <FontAwesome name={icon} size={24} color={color ?? colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 10,
    // paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
