import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, useColorScheme } from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";
import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";
import { useDialectContext } from "@/context/DialectContext";

export function highlight() {
  const { activeWindow } = useActiveWindowContext();
  const background = (<LinearGradient start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  colors={["#555", "#333", "#222", "#555"]}
  locations={[0,0.5,0.5,1]}
  style={{ height: "80%", borderRadius: 5, margin: 5 }} ></LinearGradient>);

  return (<View style={{flexDirection: "row", justifyContent:'space-between', width: "100%", flex:2}}>
    <View style={styles.buttonOverlay}>{activeWindow === "search" ? background : <View />}</View> 
    <View style={styles.buttonOverlay}>{activeWindow === "list" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "random" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "number" ? background : <View />}</View>
    <View style={styles.buttonOverlay}>{activeWindow === "other" ? background : <View />}</View>
  </View>);
}

export function Topbar() {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
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
      />
    :
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

export function Bottombar(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
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
    :
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

export function Background(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
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
    :
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

export function StyleCard(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
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
                    :
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
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
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
    :
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

export function ButtonBackground(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#74baac","#3a7569"]}
                      style={{borderRadius: 8}}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                    >{element}</LinearGradient>
                    :
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#7494ba","#3a5575"]}
                      style={{borderRadius: 8}}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                    >{element}</LinearGradient>

  return theme
}

export function ButtonBackgroundTop(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const theme = dialect === "reef" ?
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#74baac","#3a7569"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius: 4, borderWidth: 1, width: 40, height: 40, justifyContent: 'center',
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
                    :
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#7494ba","#3a5575"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius: 4, borderWidth: 1, width: 40, height: 40, justifyContent: 'center',
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>

  return theme
}

export function ButtonBackgroundList(element: JSX.Element) {
  const { dialect } = useDialectContext();
  const colorScheme = useColorScheme();
  const theme = dialect === "reef" ?
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#74baac","#3a7569"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius: 4, borderWidth: 1, justifyContent: 'center',
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>
                    :
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      colors={["#7494ba","#3a5575"]}
                      //colors={[theme.colors.primary, theme.colors.primary]}
                      style={{borderRadius: 4, borderWidth: 1, justifyContent: 'center',
                        borderColor: "#999999"}}
                    >{element}</LinearGradient>

  return theme
}

export const FwewDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#88BBFF",
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
    primary: "#88BBFF",
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

const bottomButtonColor = "#999999"
const bottomButtonColorDark = "#999999"

export const completeAero = {
  Topbar, Bottombar, highlight,
  Background, ButtonBackground, ButtonBackgroundTop, ButtonBackgroundList,
  StyleCard, StyleCard2,
  FwewDarkTheme, FwewDarkReefTheme, FwewLightTheme, FwewLightReefTheme,
  bottomButtonColor, bottomButtonColorDark,
}

const styles = StyleSheet.create({
  buttonOverlay: {
    width: "20%"
  },
});
