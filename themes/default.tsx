import { View } from 'react-native';
import { useColorScheme } from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";
import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";
import { useDialectContext } from "@/context/DialectContext";

export function highlight() {
  // This is only here to prevent React from complaining about how
  // the render order changed
  const { activeWindow } = useActiveWindowContext();
  return (<View></View>);
}

export function Topbar() {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#3a7569", height:"100%"}}/>
      : <View style={{backgroundColor:"#74baac", height:"100%"}}/>
    :
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#3a5575", height:"100%"}}/>
      : <View style={{backgroundColor:"#7494ba", height:"100%"}}/>;

  return theme
}

export function Bottombar() {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}/>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}/>
    :
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}/>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}/>

  return theme
}

export function Background(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#282b2d", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#d9e2ed", height:"100%"}}>{element}</View>
    : colorScheme === "dark"
      ? <View style={{backgroundColor:"#282b2d", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#d9e2ed", height:"100%"}}>{element}</View>

  return theme
}

export function StyleCard(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", borderRadius:8}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", borderRadius:8}}>{element}</View>
    :
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", borderRadius:8}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", borderRadius:8}}>{element}</View>

  return theme
}

export function StyleCard2(element: JSX.Element) {
  return StyleCard(element)
}

export function ButtonBackground(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const thisColor = dialect === "reef" ?
    colorScheme === "light" ? FwewLightReefTheme.colors.primary : FwewDarkReefTheme.colors.primary
    : 
    colorScheme === "light" ? FwewLightTheme.colors.primary : FwewDarkTheme.colors.primary
  return <View style={{backgroundColor: thisColor, borderRadius: 8}}>{element}</View>
}

export function ButtonBackgroundTop(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const theme = <View>{element}</View>
  return theme
}

export function ButtonBackgroundList(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const thisColor = dialect === "reef" ?
    colorScheme === "light" ? FwewLightReefTheme.colors.card : FwewDarkReefTheme.colors.card
    : 
    colorScheme === "light" ? FwewLightTheme.colors.card : FwewDarkTheme.colors.card
  const theme = <View style={{backgroundColor: thisColor, borderRadius: 8}}>{element}</View>
  return theme
}

export const FwewDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#3a5575",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b5778",
  },
};

export const FwewDarkReefTheme: Theme = {
  ...FwewDarkTheme,
  colors: {
    ...FwewDarkTheme.colors,
    primary: "#3a7569",
    background: "#282b2d",
    card: "#181a1b",
    text: "#e8e6e3",
    border: "#3b786c",
  },
};

export const FwewLightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7494ba",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#537aa8",
  },
};

export const FwewLightReefTheme: Theme = {
  ...FwewLightTheme,
  colors: {
    ...FwewLightTheme.colors,
    primary: "#74baac",
    background: "#d9e2ed",
    card: "#ffffff",
    text: "#000000",
    border: "#53a897",
  },
};

const bottomButtonColor = "#555"
const bottomButtonColorDark = "#999"

export const completeNormal = {
  Topbar, Bottombar, highlight,
  Background, ButtonBackground, ButtonBackgroundTop, ButtonBackgroundList,
  StyleCard, StyleCard2,
  FwewDarkTheme, FwewDarkReefTheme, FwewLightTheme, FwewLightReefTheme,
  bottomButtonColor, bottomButtonColorDark,
}
