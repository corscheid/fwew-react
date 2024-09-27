import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import type { LinkType } from "@/types/common";
import { StyleSheet, View } from "react-native";

export function IndexGrid({ links }: { links: LinkType[] }) {
  return (
    <View style={styles.grid}>
      {links.map((link) => (
        <ScreenLinkCard key={`oi_${link.title}`} {...link} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 16,
    justifyContent: "center",
    maxWidth: "80%",
    alignSelf: "center",
    marginVertical: "auto",
  },
  item: {
    flex: 1,
    minWidth: 320,
    maxWidth: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
});
