import { View } from 'react-native';
import { useColorScheme } from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";

export function highlight() {
  // This is only here to prevent React from complaining about how
  // the render order changed
  const { activeWindow } = useActiveWindowContext();
  return (<View></View>);
}

export function Topbar() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#3a5575", height:"100%"}}/>
      : <View style={{backgroundColor:"#7494ba", height:"100%"}}/>;

  return theme
}

export function TopbarReef() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#3a7569", height:"100%"}}/>
      : <View style={{backgroundColor:"#74baac", height:"100%"}}/>

  return theme
}

export function Bottombar() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}/>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}/>

  return theme
}

export function BottombarReef() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}/>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}/>

  return theme
}

export function Background(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#282b2d", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#d9e2ed", height:"100%"}}>{element}</View>

  return theme
}

export function BackgroundReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#282b2d", borderRadius:8}}>{element}</View>
      : <View style={{backgroundColor:"#d9e2ed", borderRadius:8}}>{element}</View>

  return theme
}

export function StyleCard(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", borderRadius:8}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", borderRadius:8}}>{element}</View>

  return theme
}

export function StyleCardReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", borderRadius:8}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", borderRadius:8}}>{element}</View>
  return theme
}

export function StyleCard2(element: JSX.Element) {
  return StyleCard(element)
}

export function StyleCard2Reef(element: JSX.Element) {
  return StyleCardReef(element)
}

export const completeNormal = {
  Topbar, TopbarReef, Bottombar, BottombarReef, highlight,
  Background, BackgroundReef,
  StyleCard, StyleCardReef, StyleCard2, StyleCard2Reef
}
