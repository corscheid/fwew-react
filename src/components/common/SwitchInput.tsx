import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { useTheme } from "expo-router/react-navigation";
import { StyleSheet, Switch, View } from "react-native";

type SwitchInputProps = {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SwitchInput(props: SwitchInputProps) {
  const { leftLabel, rightLabel, value, onValueChange } = props;
  const theme = useTheme();
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <View style={styles.switch}>
      <Themed.Text>{leftLabel}</Themed.Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: colors.placeholder,
          true: theme.colors.primary,
        }}
        thumbColor={colorExtension.light.background}
        // @ts-ignore
        activeThumbColor={theme.colors.text}
        ios_backgroundColor={theme.colors.card}
      />
      <Themed.Text>{rightLabel}</Themed.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
  },
});
