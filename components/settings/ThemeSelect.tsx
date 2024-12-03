import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents, ThemeNames, ThemeNamesUser } from "@/themes";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export function ThemeSelect() {
  const { themeName, saveThemeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const theme = useTheme();
  const Themed = getThemedComponents(themeName);
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Themed.Text style={styles.value}>
              {themeName.slice(0, 2).toUpperCase()}
            </Themed.Text>
          </View>
          <Themed.Text style={styles.value}>{ui.settings.theme}</Themed.Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {ThemeNames.map((tn, i) => (
            <View key={`stn_${i}`}>
              <OptionItem
                icon={
                  <View style={styles.icon}>
                    <Themed.MonoText
                      style={[
                        styles.value,
                        {
                          color:
                            themeName === tn
                              ? colorExtension.dark.text
                              : theme.colors.text,
                        },
                      ]}
                    >
                      {tn.slice(0, 2).toUpperCase()}
                    </Themed.MonoText>
                  </View>
                }
                value={ThemeNamesUser[i]}
                selected={themeName === tn}
                onSelect={() => saveThemeName(tn)}
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
