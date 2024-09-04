import { View } from 'react-native';
import { useColorScheme } from "react-native";

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
      : <View style={{backgroundColor:"#74baac"}}/>

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
      : <View style={{backgroundColor:"#ffffff"}}/>

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
      ? <View style={{backgroundColor:"#282b2d", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#d9e2ed", height:"100%"}}>{element}</View>

  return theme
}

export function StyleCard(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}>{element}</View>

  return theme
}

export function StyleCardReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <View style={{backgroundColor:"#181a1b", height:"100%"}}>{element}</View>
      : <View style={{backgroundColor:"#ffffff", height:"100%"}}>{element}</View>
  return theme
}