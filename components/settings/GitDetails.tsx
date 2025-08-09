import { ExternalLink } from "@/components/common/ExternalLink";
import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { StyleSheet } from "react-native";

type GitDetailsProps = {
  branch?: string;
  commitHash?: string;
};

export function GitDetails({ branch, commitHash }: GitDetailsProps) {
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const Themed = getThemedComponents(themeName);

  if (!branch || !commitHash) {
    return null;
  }

  return (
    <Themed.MonoText style={styles.text}>
      (
      <ExternalLink href={`https://github.com/corscheid/fwew-react/tree/${branch}`}>
        <Themed.MonoText style={{ color: colors.link }}>
          {branch} {commitHash?.substring(0, 7)}
        </Themed.MonoText>
      </ExternalLink>
      )
    </Themed.MonoText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
