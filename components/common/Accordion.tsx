import { CardView } from "@/components/common/Themed";
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

  return (
    <CardView>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setExpanded((e) => !e)}
      >
        {closedContent}
        <FontAwesome
          size={24}
          name={expanded ? "chevron-down" : "chevron-right"}
          color={colors.text}
          style={styles.arrow}
        />
      </TouchableOpacity>
      {expanded && openedContent}
    </CardView>
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
