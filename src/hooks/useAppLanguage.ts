import type { ExtendedLanguageCode } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useAppLanguage() {
  const [appLanguage, setAppLanguage] = useState<ExtendedLanguageCode>("en");
  const [isLoaded, setIsLoaded] = useState(false);
  const { getItem, setItem } = useAsyncStorage("fw_lang_app");

  async function saveAppLanguage(value: ExtendedLanguageCode) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setAppLanguage(value);
  }

  useEffect(() => {
    (async () => {
      try {
        const value = await getItem();
        if (value) {
          setAppLanguage(value as ExtendedLanguageCode);
        }
      } catch (error) {
        console.error("Failed to load app language:", error);
      } finally {
        setIsLoaded(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    appLanguage,
    saveAppLanguage,
    isLoaded,
  };
}
