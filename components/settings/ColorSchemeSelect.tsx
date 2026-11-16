import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { ColorSchemeName } from "@/hooks/useColorScheme";
import { getColorExtension, getThemedComponents } from "@/themes";
import { FAIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "expo-router/react-navigation";
import { StyleSheet, View } from "react-native";

export function ColorSchemeSelect() {
  const { colorSchemeName, colorSchemeValue, saveColorScheme } =
    useColorSchemeContext();
  const { dialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const Themed = getThemedComponents(themeName);

  const iconMap: Record<ColorSchemeName, FAIconName> = {
    dark: "moon-o",
    light: "sun-o",
    auto: "magic",
  };

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <FontAwesome
              size={24}
              name={colorSchemeValue === "dark" ? "moon-o" : "sun-o"}
              color={
                colorSchemeName === "dark"
                  ? colorExtension.dark.text
                  : theme.colors.text
              }
            />
          </View>
          <Themed.Text style={styles.value}>
            {ui.settings.colorScheme}
          </Themed.Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {ui.settings.colorSchemes.map((csn, i) => (
            <View key={`scsn_${i}`}>
              <OptionItem
                icon={
                  <View style={styles.icon}>
                    <FontAwesome
                      size={24}
                      name={iconMap[csn.value]}
                      color={
                        colorSchemeName === csn.value
                          ? colorExtension.dark.text
                          : theme.colors.text
                      }
                    />
                  </View>
                }
                value={csn.name}
                selected={colorSchemeName === csn.value}
                onSelect={async () => {
                  await saveColorScheme(csn.value);
                }}
              />
            </View>
          ))}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    height: 32,
    width: 32,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
