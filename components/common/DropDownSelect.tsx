import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "expo-router/react-navigation";
import React, { useState } from "react";
import { Pressable, View } from "react-native";

type DropDownSelectProps<T> = {
  options: T[];
  value: T;
  initiallyOpen?: boolean;
  renderOption: (option: T) => React.ReactNode;
  keyExtractor: (option: T, index: number) => string;
  onChange: (value: T) => void;
};

export function DropDownSelect<T>(props: DropDownSelectProps<T>) {
  const {
    options,
    value,
    initiallyOpen,
    renderOption,
    keyExtractor,
    onChange,
  } = props;
  const [open, setOpen] = useState(initiallyOpen ?? false);
  const { colors } = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const toggle = () => setOpen((prev) => !prev);

  const handleChange = (option: T) => {
    onChange(option);
    toggle();
  };

  return (
    <Themed.CardView>
      <Pressable
        onPress={toggle}
        style={({ pressed }) => ({
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 10,
          paddingVertical: 8,
          opacity: pressed ? 0.5 : 1,
        })}
      >
        {value ? renderOption(value) : <View style={{ padding: 16 }} />}
        <FontAwesome
          name={open ? "chevron-down" : "chevron-right"}
          size={24}
          color={colors.text}
        />
      </Pressable>
      {open && (
        <>
          {options.map((option, i) => (
            <Pressable
              key={keyExtractor(option, i)}
              onPress={() => handleChange(option)}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            >
              {renderOption(option)}
            </Pressable>
          ))}
        </>
      )}
    </Themed.CardView>
  );
}
