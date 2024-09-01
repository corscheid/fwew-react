import { Auxtheme } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const auxthemeAbbr: { [key in Auxtheme]: string } = {
  normal: "normal",
  frutigerAero: "FA",
};

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

  async function toggleAuxtheme() {
    const value = auxtheme === "normal" ? "normal" : "frutiger aero";
    saveAuxtheme(value);
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
    auxthemeDisplay: auxthemeAbbr[auxtheme],
    saveAuxtheme,
    toggleAuxtheme,
  };
}
