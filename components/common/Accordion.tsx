import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";

type AccordionProps = {
  closedContent: React.ReactNode;
  openedContent: React.ReactNode;
  initiallyOpen?: boolean;
};

export function Accordion(props: AccordionProps) {
  const { closedContent, openedContent, initiallyOpen } = props;
  const [expanded, setExpanded] = useState(initiallyOpen ?? false);
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const Themed = getThemedComponents(themeName);

  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          { opacity: pressed ? 0.5 : 1 },
        ]}
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
    </>
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
