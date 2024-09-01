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
import { useDialectContext } from "@/context/DialectContext";
import { LinearGradient } from 'expo-linear-gradient';

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

export function CardView(props: ViewProps) {
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

  return (
    <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#0A0A0A", "#292929"]}
              //colors={[theme.colors.primary, theme.colors.primary]}
              style={{borderRadius:5}}
            >
      <DefaultView
        style={[
          {
            //backgroundColor: colors.card,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#999999"
          },
          style,
        ]}
        {...otherProps}
      />
    </LinearGradient>
  );
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
