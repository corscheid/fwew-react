import type { Dialect } from "@/types/common";
import type { ColorExtension, ThemeType } from "@/types/theme";
import { useTheme, type Theme } from "@react-navigation/native";
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  type TextInputProps,
  type TextProps,
  type ViewProps,
  type ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";
import { useDialect } from "@/hooks/useDialect";

const FwewDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#7494ba",
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
    primary: "#74baac",
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
    placeholder: "#BBB",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2e77d1",
    link: "#007aff",
    innerCard: "#d9d9d9",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: "#547aab",
    placeholder: "#BBB",
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
  const { dark } = useTheme();

  return ( dark ?
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#292929","#0A0A0A"]}
      locations={[0,1]}
      style={[
        {
          borderRadius: 8,
          borderColor: "#AAA",
          borderWidth: 1,
        },
        style,
        
      ]}
      {...otherProps}
    />
    :
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#F6F6F6","#D7D7D7"]}
      locations={[0,1]}
      style={[
        {
          borderRadius: 8,
          borderColor: "#AAA",
          borderWidth: 1,
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
      style={[{ color: colors.text }, style]}
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
    ?.setAttribute("content", FrutigerAeroTheme.light[dialect].colors.primary);

  document
    .querySelector(`meta[${attrThemeColor}][${attrMediaDark}]`)
    ?.setAttribute("content", FrutigerAeroTheme.dark[dialect].colors.primary);
}

function Topbar(dialect: Dialect): JSX.Element {
  const { colors } = useTheme();
  return dialect === "reef" ?
  <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        />
  :
  <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        />
}

function Bottombar(dialect: Dialect): JSX.Element {
  const { activeWindow } = useActiveWindowContext();
  const background = (<LinearGradient start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  colors={["#555", "#333", "#222", "#555"]}
  locations={[0,0.5,0.5,1]}
  style={{ height: "95%", borderRadius: 24, margin: 1 }} />);

  const highlight = (<DefaultView style={{flexDirection: "row", justifyContent:'space-between', width: "100%", flex:2, zIndex: 1}}>
    <DefaultView style={{width: "20%", zIndex: 2}}>{activeWindow === "search" ? background : <DefaultView />}</DefaultView> 
    <DefaultView style={{width: "20%", zIndex: 2}}>{activeWindow === "list" ? background : <DefaultView />}</DefaultView>
    <DefaultView style={{width: "20%", zIndex: 2}}>{activeWindow === "random" ? background : <DefaultView />}</DefaultView>
    <DefaultView style={{width: "20%", zIndex: 2}}>{activeWindow === "numbers" ? background : <DefaultView />}</DefaultView>
    <DefaultView style={{width: "20%", zIndex: 2}}>{activeWindow === "other" ? background : <DefaultView />}</DefaultView>
  </DefaultView>);

  return dialect === "reef" ?
  <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        >{highlight}</LinearGradient>
  :
  <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        >{highlight}</LinearGradient>
}

function Background(content: JSX.Element, dialect: Dialect): JSX.Element {
  const theme = useTheme();
  return dialect === "reef" ?
  theme.dark ?
  <LinearGradient
        start={{ x: 0, y:0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9,1]}
        colors={["#001a22", "#00444f"]}
        style={{height: "100%"}}
        >{content}</LinearGradient>
  : <LinearGradient
  start={{ x: 0, y:0 }}
  end={{ x: 0, y: 1 }}
  locations={[0.9,1]}
  colors={["#AAFFFF", "#00AAAA"]}
  style={{height: "100%"}}
  >
  {content}</LinearGradient>
  :
  theme.dark ? <LinearGradient
        start={{ x: 0, y:0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9,1]}
        colors={["#000033", "#0000AA"]}
        style={{height: "100%"}}
        >{content}</LinearGradient>
  : <LinearGradient
      start={{ x: 0, y:0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.9,1]}
      colors={["#AAFFFF", "#008822"]}
      style={{height: "100%"}}
    >{content}</LinearGradient>
}

function ButtonBackground(content: JSX.Element, style:ViewStyle, dialect: Dialect, selected: boolean): JSX.Element {
  const { colors, dark } = useTheme();
  const theme = 
  selected ?
  dialect === "reef" ?
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#74baac","#3a7569"]}
                      style={{borderRadius: 8, ...style}}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                    >{content}</LinearGradient>
                    :
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#7494ba","#3a5575"]}
                      style={{borderRadius: 8, ...style}}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                    >{content}</LinearGradient>
  :
  <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#AAA", "#333"]}
                      style={{borderRadius: 8, ...style}}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                    >{content}</LinearGradient>
  return theme
}

const FrutigerAeroTheme: ThemeType = {
  name: "2009",
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
  ButtonBackground,
};

export default FrutigerAeroTheme;
