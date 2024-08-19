import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";

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
