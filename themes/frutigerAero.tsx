import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";

export function highlight() {
  const { activeWindow } = useActiveWindowContext();
  const background = (<LinearGradient start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  colors={["#CCC", "#555", "#999", "#CCC"]}
  locations={[0,0.5,0.5,1]}
  style={{ height: "80%", borderRadius: 5, margin: 5, borderWidth: 1, borderColor:"#000" }} ></LinearGradient>);

  return (<View style={{flexDirection: "row", justifyContent:'space-between', width: "100%", flex:2}}>
    <View style={styles.buttonOverlay}>{activeWindow === "search" ? background : <View />}</View> 
    <View style={styles.buttonOverlay}>{activeWindow === "list" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "random" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "number" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "other" ? background : <View />}</View>
  </View>);
}

export function Topbar() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        />
      : <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
      locations={[0,0.5,0.5,1]}
      style={{ height: "100%" }}
      />;

  return theme
}

export function TopbarReef() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        />
      : <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
      locations={[0,0.5,0.5,1]}
      style={{ height: "100%" }}
      />;

  return theme
}

export function Bottombar(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        >{element}</LinearGradient>
      : <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#2288FF", "#2244FF","#004499", "#2288FF"]}
      locations={[0,0.5,0.5,1]}
      style={{ height: "100%" }}
      >{element}</LinearGradient>

  return theme
}

export function BottombarReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
        locations={[0,0.5,0.5,1]}
        style={{ height: "100%" }}
        >{element}</LinearGradient> : <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#44BBBB", "#228A92","#006A6A", "#44BBBB"]}
      locations={[0,0.5,0.5,1]}
      style={{ height: "100%" }}
      >{element}</LinearGradient>

  return theme
}

export function Background(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? <LinearGradient
        start={{ x: 0, y:0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9,1]}
        colors={["#000033", "#0000AA"]}
        style={{height: "100%"}}
        //colors={[colors.background, colors.background]}
      >
      {element}
    </LinearGradient>
      : <LinearGradient
      start={{ x: 0, y:0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.9,1]}
      colors={["#AAFFFF", "#008822"]}
      style={{height: "100%"}}
    >
    {element}
  </LinearGradient>

  return theme
}

export function BackgroundReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
        ? <LinearGradient
        start={{ x: 0, y:0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9,1]}
        colors={["#001a22", "#00444f"]}
        style={{height: "100%"}}
        //colors={[colors.background, colors.background]}
      >
      {element}
    </LinearGradient>
      :  <LinearGradient
      start={{ x: 0, y:0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.9,1]}
      colors={["#AAFFFF", "#00AAAA"]}
      style={{height: "100%"}}
    >
    {element}
  </LinearGradient>
      
  return theme
}

export function StyleCard(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
                    ? <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#292929","#0A0A0A"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius:8,
                      borderWidth: 1,
                      borderColor: "#999999"}}
                    >{element}</LinearGradient>
                    : <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#F6F6F6","#D7D7D7"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius:8,
                        borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>

  return theme
}

export function StyleCardReef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
  colorScheme === "dark"
                  ? <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#292929","#0A0A0A"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius:8,
                        borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
                  : <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#F6F6F6","#D7D7D7"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius:8,
                        borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
  return theme
}

export function StyleCard2(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
                    ? <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#292929","#0A0A0A"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderWidth: 1,
                      borderColor: "#999999"}}
                    >{element}</LinearGradient>
                    : <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#F6F6F6","#D7D7D7"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>

  return theme
}

export function StyleCard2Reef(element: JSX.Element) {
  const colorScheme = useColorScheme();
  const theme =
  colorScheme === "dark"
                  ? <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#292929","#0A0A0A"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
                  : <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#F6F6F6","#D7D7D7"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderWidth: 1,
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
  return theme
}

const styles = StyleSheet.create({
  buttonOverlay: {
    width: "20%"
  },
});
