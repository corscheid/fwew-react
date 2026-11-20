import { useThemeName } from "@/hooks/useThemeName";
import { createContext, useContext } from "react";

export type ThemeNameType = ReturnType<typeof useThemeName>;

export const ThemeNameContext = createContext<ThemeNameType>(null as unknown as ThemeNameType);

export const useThemeNameContext = () => useContext(ThemeNameContext);

type ThemeNameProviderProps = {
  value: ThemeNameType;
  children: React.ReactNode;
};

export function ThemeNameProvider({ value, children }: ThemeNameProviderProps) {
  return <ThemeNameContext.Provider value={value}>{children}</ThemeNameContext.Provider>;
}
