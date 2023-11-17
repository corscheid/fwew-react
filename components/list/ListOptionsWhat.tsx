import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { List, ListMenuItem, WhatValue } from "@/constants/List";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type ListOptionsWhatProps = {
  onSelect: (what: ListMenuItem<WhatValue>) => void;
};

export function ListOptionsWhat({ onSelect }: ListOptionsWhatProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View>
      {List.WhatValues.map((what, index) => (
        <TouchableOpacity key={`w_${index}`} onPress={() => onSelect(what)}>
          <Text style={styles.option}>
            {what.value}:{" "}
            <Text style={[styles.description, { color: colors.placeholder }]}>
              {what.description}
            </Text>
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  description: {
    fontWeight: "normal",
  },
});