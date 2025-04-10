import { DialectDisplay, Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import {
  getColorExtension,
  getPWAThemeUpdater,
  getThemedComponents,
} from "@/themes";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";

export function DialectSelect() {
  const { dialect, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();
  const { themeName, saveThemeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const Themed = getThemedComponents(themeName);
  const updatePWATheme = getPWAThemeUpdater(themeName);

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View
            style={[styles.icon, { backgroundColor: theme.colors.primary }]}
          >
            <Themed.MonoText
              style={[styles.value, { color: colorExtension.dark.text }]}
            >
              {DialectDisplay[dialect].abbr}
            </Themed.MonoText>
          </View>
          <Themed.Text style={styles.value}>{ui.settings.dialect}</Themed.Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {Dialects.map((d, i) => (
            <View key={`sd_${i}`}>
              <OptionItem
                icon={
                  <View style={styles.icon}>
                    <Themed.MonoText
                      style={[
                        styles.value,
                        {
                          color:
                            dialect === d.value
                              ? colorExtension.dark.text
                              : theme.colors.text,
                        },
                      ]}
                    >
                      {d.abbr}
                    </Themed.MonoText>
                  </View>
                }
                value={d.name}
                selected={dialect === d.value}
                onSelect={async () => {
                  await saveDialect(d.value);
                  updatePWATheme(d.value);
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
