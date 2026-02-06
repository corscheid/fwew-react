import { useColorScheme } from "@/hooks/useColorScheme";
import { createContext, type ReactNode, useContext } from "react";

export type ColorSchemeType = ReturnType<typeof useColorScheme>;

export const ColorSchemeContext = createContext<ColorSchemeType>(
  null as unknown as ColorSchemeType
);

export const useColorSchemeContext = () => useContext(ColorSchemeContext);

type ColorSchemeProviderProps = {
  value: ColorSchemeType;
  children: ReactNode;
};

export function ColorSchemeProvider({
  value,
  children,
}: ColorSchemeProviderProps) {
  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
}
