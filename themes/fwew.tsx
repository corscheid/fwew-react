import type { Dialect } from "@/types/common";
import type { ColorExtension, ThemeType } from "@/types/theme";
import { useTheme, type Theme } from "@react-navigation/native";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  Platform,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from "react-native";

const FwewDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#3a5575",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b5778",
    notification: "#ff453a",
  },
};

const FwewDarkReefTheme: Theme = {
  dark: true,
  colors: {
    primary: "#3a7569",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b786c",
    notification: "#ff453a",
  },
};

const FwewLightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#7494ba",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#537aa8",
    notification: "#ff3b30",
  },
};

const FwewLightReefTheme: Theme = {
  dark: false,
  colors: {
    primary: "#74baac",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#53a897",
    notification: "#ff3b30",
  },
};

const FwewColorExtension: ColorExtension = {
  light: {
    text: "#000",
    background: "#fff",
    tint: "#2e77d1",
    placeholder: "#555",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2e77d1",
    link: "#007aff",
    innerCard: "#d9d9d9",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: "#547aab",
    placeholder: "#999",
    tabIconDefault: "#ccc",
    tabIconSelected: "#547aab",
    link: "#62a0ea",
    innerCard: "#2d3133",
  },
};

function Text(props: TextProps) {
  const { colors } = useTheme();
  return (
    <DefaultText {...props} style={[{ color: colors.text }, props.style]} />
  );
}

function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

function BoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontWeight: "bold" }]} />;
}

function ItalicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontStyle: "italic" }]} />;
}

function UnderlinedText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { textDecorationLine: "underline" }]}
    />
  );
}

function CardView(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultView
      style={[
        {
          backgroundColor: colors.card,
          borderRadius: 8,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultTextInput
      style={[{ backgroundColor: colors.card, color: colors.text }, style]}
      selectionColor={colors.primary}
      cursorColor={colors.primary}
      {...otherProps}
    />
  );
}

function updatePWATheme(dialect: Dialect): void {
  if (Platform.OS !== "web") {
    return;
  }

  const attrThemeColor = "name=theme-color";

  const attrMediaLight = "media='(prefers-color-scheme: light)'";
  const attrMediaDark = "media='(prefers-color-scheme: dark)'";

  document
    .querySelector(`meta[${attrThemeColor}][${attrMediaLight}]`)
    ?.setAttribute("content", FwewTheme.light[dialect].colors.primary);

  document
    .querySelector(`meta[${attrThemeColor}][${attrMediaDark}]`)
    ?.setAttribute("content", FwewTheme.dark[dialect].colors.primary);
}

const FwewTheme: ThemeType = {
  light: {
    forest: FwewLightTheme,
    reef: FwewLightReefTheme,
  },
  dark: {
    forest: FwewDarkTheme,
    reef: FwewDarkReefTheme,
  },
  ext: FwewColorExtension,
  components: {
    Text,
    MonoText,
    BoldText,
    ItalicText,
    UnderlinedText,
    CardView,
    TextInput,
  },
  updatePWATheme,
};

export default FwewTheme;
