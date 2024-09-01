import { GradientCardView, Text } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

type OptionItemProps = {
  icon?: React.ReactNode;
  value: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function OptionItem(props: OptionItemProps) {
  const { icon, value, selected, onSelect } = props;
  const theme = useTheme();

  const getTextColor = () => {
    if (selected) return Colors.dark.text;
    if (theme.dark) return Colors.dark.placeholder;
    return Colors.light.text;
  };

  return (
    <TouchableOpacity onPress={onSelect}>
      <GradientCardView
        style={[
          styles.iconContainer,
          {
            backgroundColor: selected
              ? theme.colors.primary
              : theme.colors.card,
          },
        ]}
      >
        {icon}
        <Text style={[styles.value, { color: getTextColor() }]}>{value}</Text>
        {selected && (
          <FontAwesome
            name="check"
            size={24}
            color={Colors.dark.text}
            style={styles.check}
          />
        )}
      </GradientCardView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  value: {
    fontSize: 16,
    padding: 8,
  },
  check: {
    paddingRight: 8,
  },
});
