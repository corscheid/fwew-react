import { Auxtheme } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState, useCallback } from "react";
import { completeAero } from "@/themes/frutigerAero";
import { completeNormal } from "@/themes/default";

export function useAuxtheme() {
  const [auxtheme, setAuxtheme] = useState<Auxtheme>("normal");
  const { getItem, setItem } = useAsyncStorage("fw_auxtheme");

  async function saveAuxtheme(value: Auxtheme) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setAuxtheme(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setAuxtheme(value as Auxtheme);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    auxtheme,
    saveAuxtheme,
  };
}

export function getTheme() {
  const auxtheme = useAuxtheme().auxtheme
  if (auxtheme === "frutiger aero") {
    return completeAero
  }
  return completeNormal
}
