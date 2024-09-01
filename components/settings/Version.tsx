import { MonoText } from "@/components/common/StyledText";
import { GradientCardView, Text } from "@/components/common/Themed";
import { GitDetails } from "@/components/settings/GitDetails";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useVersion } from "@/hooks/useVersion";
import { StyleSheet } from "react-native";

export function Version() {
  const version = useVersion();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <>
      <Text style={styles.label}>{ui.settings.version}</Text>
      <GradientCardView style={styles.versionContainer}>
        <GradientCardView>
          <MonoText style={styles.text}>fwew-react</MonoText>
          <MonoText style={styles.text}>fwew-api </MonoText>
          <MonoText style={styles.text}>fwew-lib</MonoText>
          <MonoText style={styles.text}>dictionary</MonoText>
        </GradientCardView>
        <GradientCardView>
          <MonoText style={styles.text}>
            {version.AppVersion}{" "}
            <GitDetails
              branch={version.Branch}
              commitHash={version.CommitHash}
            />
          </MonoText>
          <MonoText style={styles.text}>{version.APIVersion || "?"}</MonoText>
          <MonoText style={styles.text}>{version.FwewVersion || "?"}</MonoText>
          <MonoText style={styles.text}>{version.DictVersion || "?"}</MonoText>
        </GradientCardView>
      </GradientCardView>
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
