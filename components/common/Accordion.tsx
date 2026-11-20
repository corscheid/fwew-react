import { useColorSchemeContext } from "@/context/ColorSchemeContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

type AccordionProps = {
  closedContent: React.ReactNode;
  openedContent: React.ReactNode;
  initiallyOpen?: boolean;
};

export function Accordion(props: AccordionProps) {
  const { closedContent, openedContent, initiallyOpen } = props;
  const [expanded, setExpanded] = useState(initiallyOpen ?? false);
  const { colorSchemeValue } = useColorSchemeContext();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorSchemeValue ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView>
      <Pressable
        style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]}
        onPress={() => setExpanded((e) => !e)}
      >
        {closedContent}
        <FontAwesome
          size={24}
          name={expanded ? "chevron-down" : "chevron-right"}
          color={colors.text}
          style={styles.arrow}
        />
      </Pressable>
      {expanded && openedContent}
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 16,
    borderRadius: 8,
  },
  arrow: {
    marginLeft: "auto",
  },
});
