import { useAuxtheme } from "@/hooks/useAuxtheme";
import { createContext, useContext } from "react";

export type AuxthemeType = ReturnType<typeof useAuxtheme>;

export const AuxthemeContext = createContext<AuxthemeType>(
  null as unknown as AuxthemeType
);

export const useAuxthemeContext = () => useContext(AuxthemeContext);

var auxthemeKey = 0

type AuxthemeProviderProps = {
  value: AuxthemeType;
  children: React.ReactNode;
};

export function signalChangeTheme() {
  auxthemeKey += 1
}

export function AuxthemeProvider({ value, children }: AuxthemeProviderProps) {
  return (
    <AuxthemeContext.Provider value={value} key={auxthemeKey}>{children}</AuxthemeContext.Provider>
  );
}
