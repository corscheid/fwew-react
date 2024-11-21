import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useDialect } from "@/hooks/useDialect";
import { getColorExtension, getThemedComponents, getButtonBackground } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";

type OptionItemProps = {
  icon?: React.ReactNode;
  value: string;
  selected: boolean;
  onSelect?: () => void;
};

export function OptionItem(props: OptionItemProps) {
  const { icon, value, selected, onSelect } = props;
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const Themed = getThemedComponents(themeName);
  const dialect = useDialect().dialect

  const getTextColor = () => {
    if (selected) return colorExtension.dark.text;
    if (theme.dark) return colorExtension.dark.placeholder;
    return colorExtension.light.text;
  };

  return getButtonBackground(themeName, {},
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <View
        style={[
          styles.container
        ]}
      >
        <View style={styles.itemContainer}>
          {icon}
          <Themed.Text style={[styles.value, { color: getTextColor() }]}>
            {value}
          </Themed.Text>
        </View>
        <View style={styles.itemContainer}>
          {selected && (
            <FontAwesome
              name="check"
              size={24}
              color={colorExtension.dark.text}
              style={styles.check}
            />
          )}
        </View>
      </View>
    </Pressable>, dialect, selected
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    padding: 8,
  },
  check: {
    paddingRight: 8,
  },
});
