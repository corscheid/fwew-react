import { useFavorites } from "@/hooks/useFavorites";
import { createContext, useContext } from "react";

export type FavoritesType = ReturnType<typeof useFavorites>;

export const FavoritesContext = createContext<FavoritesType>(null as unknown as FavoritesType);

export const useFavoritesContext = () => useContext(FavoritesContext);

type FavoritesProviderProps = {
  value: FavoritesType;
  children: React.ReactNode;
};

export function FavoritesProvider({ value, children }: FavoritesProviderProps) {
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
