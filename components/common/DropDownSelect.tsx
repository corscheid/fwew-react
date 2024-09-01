import { GradientCardView } from "@/components/common/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

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

  const toggle = () => setOpen((prev) => !prev);

  const handleChange = (option: T) => {
    onChange(option);
    toggle();
  };

  return (
    <GradientCardView>
      <TouchableOpacity
        onPress={toggle}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 10,
          paddingVertical: 8,
        }}
      >
        {value ? renderOption(value) : <GradientCardView style={{ padding: 16 }} />}
        <FontAwesome
          name={open ? "chevron-down" : "chevron-right"}
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
      {open && (
        <>
          {options.map((option, i) => (
            <TouchableOpacity
              key={keyExtractor(option, i)}
              onPress={() => handleChange(option)}
            >
              {renderOption(option)}
            </TouchableOpacity>
          ))}
        </>
      )}
    </GradientCardView>
  );
}
