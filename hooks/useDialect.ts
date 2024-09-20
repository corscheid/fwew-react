import { Dialect } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const dialectAbbr: { [key in Dialect]: string } = {
  forest: "LN",
  reef: "LW",
};

export function useDialect() {
  const [dialect, setDialect] = useState<Dialect>("forest");
  const { getItem, setItem } = useAsyncStorage("fw_dialect");

  async function saveDialect(value: Dialect) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setDialect(value);
  }

  async function toggleDialect() {
    const value = dialect === "forest" ? "reef" : "forest";
    void saveDialect(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setDialect(value as Dialect);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dialect,
    dialectDisplay: dialectAbbr[dialect],
    saveDialect,
    toggleDialect,
  };
}
