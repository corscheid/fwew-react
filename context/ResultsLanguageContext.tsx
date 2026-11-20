import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import { createContext, useContext } from "react";

export type ResultsLanguageType = ReturnType<typeof useResultsLanguage>;

export const ResultsLanguageContext = createContext<ResultsLanguageType>(null as unknown as ResultsLanguageType);

export const useResultsLanguageContext = () => useContext(ResultsLanguageContext);

type ResultsLanguageProviderProps = {
  value: ResultsLanguageType;
  children: React.ReactNode;
};

export function ResultsLanguageProvider({ value, children }: ResultsLanguageProviderProps) {
  return <ResultsLanguageContext.Provider value={value}>{children}</ResultsLanguageContext.Provider>;
}
