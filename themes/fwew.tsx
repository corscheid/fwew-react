import type { Dialect } from "@/types/common";
import type { ColorExtension, ThemeType } from "@/types/theme";
import { DefaultTheme, useTheme, type Theme } from "@react-navigation/native";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  type TextInputProps,
  type TextProps,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";
import { useDialect } from "@/hooks/useDialect";

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
  fonts: {
    ...DefaultTheme.fonts,
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
  fonts: {
    ...DefaultTheme.fonts,
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
  fonts: {
    ...DefaultTheme.fonts,
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
  fonts: {
    ...DefaultTheme.fonts,
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

function Topbar(dialect: Dialect): JSX.Element {
  const { colors } = useTheme();
  return <DefaultView
  style={{backgroundColor: colors.primary,
    height: "100%",
  }}
  />;
}

function Bottombar(dialect: Dialect): JSX.Element {
  const { activeWindow } = useActiveWindowContext();

  const { colors } = useTheme();
  return <DefaultView
  style={{backgroundColor: colors.card,
    height: "100%",
  }}
  />;
}

function Background(content: JSX.Element, dialect: Dialect): JSX.Element {
  const { colors } = useTheme();
  return <DefaultView
  style={{backgroundColor: colors.background,
    height: "100%",
  }}
  >{content}</DefaultView>;
}

function ButtonBackground(content: JSX.Element, style:ViewStyle, dialect: Dialect, selected: boolean): JSX.Element {
  const { colors, dark } = useTheme();
  const theme = selected ?
  dialect === "reef" ?
                    <DefaultView
                      style={{backgroundColor: colors.primary, borderRadius: 8, ...style}}
                    >{content}</DefaultView>
                    :
                    <DefaultView
                      style={{backgroundColor: colors.primary, borderRadius: 8, ...style}}
                    >{content}</DefaultView>
  :
                    <DefaultView
                    style={{backgroundColor: dark ? FwewColorExtension.dark.innerCard : FwewColorExtension.light.innerCard, borderRadius: 8, ...style}}
                  >{content}</DefaultView>
  return theme
}

const FwewTheme: ThemeType = {
  name: "Fwew",
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
  Topbar,
  Bottombar,
  Background,
  ButtonBackground
};

export default FwewTheme;
