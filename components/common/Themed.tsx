/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Colors from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  useColorScheme,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleCard, StyleCardReef } from "@/themes/frutigerAero";
import { useDialectContext } from "@/context/DialectContext";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
      <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[style]}
      {...otherProps}
    />
  );
}

export function PlainCardView(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultView
      style={[
        {
          //backgroundColor: colors.card,
          borderRadius: 8,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function GradientCardView(props: ViewProps) {
  const { style, ...otherProps } = props;
  //const auxtheme = useAuxtheme().auxtheme
  const auxtheme = "frutiger" as string
  const { colors } = useTheme();
  const { dialect } = useDialectContext();
  const content = (<DefaultView style={style} {...otherProps}/>)

  return dialect === "reef"
  ? StyleCardReef(content)
  : StyleCard(content);
}

export function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultTextInput
      style={[{ color: colors.text }, style]}
      selectionColor={colors.primary}
      cursorColor={colors.primary}
      {...otherProps}
    />
  );
}
