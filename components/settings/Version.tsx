import { GitDetails } from "@/components/settings/GitDetails";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useVersion } from "@/hooks/useVersion";
import { getThemedComponents } from "@/themes";
import { StyleSheet, View } from "react-native";

export function Version() {
  const version = useVersion();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <>
      <Themed.Text style={styles.label}>{ui.settings.version}</Themed.Text>
      <View style={styles.versionContainer}>
        <View>
          <Themed.MonoText style={styles.text}>fwew-react</Themed.MonoText>
          <Themed.MonoText style={styles.text}>fwew-api </Themed.MonoText>
          <Themed.MonoText style={styles.text}>fwew-lib</Themed.MonoText>
          <Themed.MonoText style={styles.text}>dictionary</Themed.MonoText>
        </View>
        <View>
          <Themed.MonoText style={styles.text}>
            {version.AppVersion}{" "}
            <GitDetails
              branch={version.Branch}
              commitHash={version.CommitHash}
            />
          </Themed.MonoText>
          <Themed.MonoText style={styles.text}>
            {version.APIVersion || "?"}
          </Themed.MonoText>
          <Themed.MonoText style={styles.text}>
            {version.FwewVersion || "?"}
          </Themed.MonoText>
          <Themed.MonoText style={styles.text}>
            {version.DictVersion || "?"}
          </Themed.MonoText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
