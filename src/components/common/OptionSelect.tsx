import { OptionItem } from "@/components/common/OptionItem";
import { OptionType } from "@/types/common";
import { StyleSheet, View } from "react-native";

export type OptionSelectProps<T extends string> = {
  items: OptionType<T>[];
  active: (value: T) => boolean;
  onSelect: (value: T) => void;
  col?: boolean;
};

export function OptionSelect<T extends string>(props: OptionSelectProps<T>) {
  const { items, active, onSelect, col } = props;
  return (
    <View style={col ? null : styles.container}>
      {items.map((option, i) => (
        <OptionItem
          key={`os_${option.value}_${i}`}
          value={option.name}
          selected={active(option.value)}
          onSelect={() => onSelect(option.value)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 8,
  },
});
