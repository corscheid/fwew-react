import { GradientCardView } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type AccordionProps = {
  closedContent: React.ReactNode;
  openedContent: React.ReactNode;
  initiallyOpen?: boolean;
};

export function Accordion(props: AccordionProps) {
  const { closedContent, openedContent, initiallyOpen } = props;
  const [expanded, setExpanded] = useState(initiallyOpen ?? false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <GradientCardView>
      <TouchableOpacity style={styles.container} onPress={toggleExpanded}>
        {closedContent}
        {expanded ? (
          <FontAwesome
            size={24}
            name="chevron-down"
            color={colors.text}
            style={styles.arrow}
          />
        ) : (
          <FontAwesome
            size={24}
            name="chevron-right"
            color={colors.text}
            style={styles.arrow}
          />
        )}
      </TouchableOpacity>
      {expanded && openedContent}
    </GradientCardView>
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
