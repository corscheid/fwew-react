import { useActiveWindow } from "@/hooks/useActiveWindow";
import { createContext, useContext } from "react";

export type ActiveWindowType = ReturnType<typeof useActiveWindow>;

export const ActiveWindowContext = createContext<ActiveWindowType>(
  null as unknown as ActiveWindowType
);

export const useActiveWindowContext = () => useContext(ActiveWindowContext);

type ActiveWindowProviderProps = {
  value: ActiveWindowType;
  children: React.ReactNode;
};

export function ActiveWindowProvider({ value, children }: ActiveWindowProviderProps) {
  return (
    <ActiveWindowContext.Provider value={value}>{children}</ActiveWindowContext.Provider>
  );
}
