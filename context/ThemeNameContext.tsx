import { useThemeName } from "@/hooks/useThemeName";
import { createContext, useContext } from "react";

export type ThemeNameType = ReturnType<typeof useThemeName>;

export const ThemeNameContext = createContext<ThemeNameType>(
  null as unknown as ThemeNameType
);

export const useThemeNameContext = () => useContext(ThemeNameContext);

var auxthemeKey = 128

type ThemeNameProviderProps = {
  value: ThemeNameType;
  children: React.ReactNode;
};

export function signalChangeTheme() {
  auxthemeKey += 1
}

export function ThemeNameProvider({ value, children }: ThemeNameProviderProps) {
  return (
    <ThemeNameContext.Provider value={value} key={`themeprovider ${auxthemeKey}`}>
      {children}
    </ThemeNameContext.Provider>
  );
}
