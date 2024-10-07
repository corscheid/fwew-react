import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents, ThemeNames, ThemeNamesUser } from "@/themes";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { useTheme } from "@react-navigation/native";

export function ThemeSelect() {
  const { themeName, saveThemeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const theme = useTheme();
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView>
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Themed.Text style={styles.value}>
              {themeName.slice(0, 2).toUpperCase()}
            </Themed.Text>
          </View>
          <Themed.Text style={styles.value}>Theme</Themed.Text>
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
    </Themed.CardView>
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
