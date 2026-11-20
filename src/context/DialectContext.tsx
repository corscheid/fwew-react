import { useDialect } from "@/hooks/useDialect";
import { createContext, useContext } from "react";

export type DialectType = ReturnType<typeof useDialect>;

export const DialectContext = createContext<DialectType>(null as unknown as DialectType);

export const useDialectContext = () => useContext(DialectContext);

type DialectProviderProps = {
  value: DialectType;
  children: React.ReactNode;
};

export function DialectProvider({ value, children }: DialectProviderProps) {
  return <DialectContext.Provider value={value}>{children}</DialectContext.Provider>;
}
