import type {ExtendedLanguageCode} from "@/types/common";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import type {LanguageCode} from "fwew.js";
import {useEffect, useState} from "react";

export function useResultsLanguage() {
  const [resultsLanguage, setResultsLanguage] = useState<LanguageCode>("en");
  const { getItem, setItem } = useAsyncStorage("fw_lang_results");

  async function saveResultsLanguage(value: ExtendedLanguageCode) {
    if (value === "eo" || value === "nx0" || value === "nx1") {
      return;
    }
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setResultsLanguage(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setResultsLanguage(value as LanguageCode);
        return;
      }
    })();
  }, [getItem]);

  return {
    resultsLanguage,
    saveResultsLanguage,
  };
}
