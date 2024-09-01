import { Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { GradientCardView, Text } from "../common/Themed";

export function DialectSelect() {
  const { dialect, dialectDisplay, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <GradientCardView style={styles.iconContainer}>
          <Text style={styles.value}>{dialectDisplay}</Text>
          <Text style={styles.value}>{ui.names.dialect}</Text>
        </GradientCardView>
      }
      openedContent={
        <GradientCardView>
          {Dialects.map((d, i) => (
            <GradientCardView key={`sd_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                icon={null}
                value={d.name}
                selected={dialect === d.value}
                onSelect={() => saveDialect(d.value)}
              />
            </GradientCardView>
          ))}
        </GradientCardView>
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
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
