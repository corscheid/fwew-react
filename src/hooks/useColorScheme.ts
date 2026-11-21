import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import { useColorScheme as useDefaultColorScheme } from "react-native";

export type ColorSchemeName = "light" | "dark" | "auto";

export function useColorScheme() {
  const deviceColorScheme = useDefaultColorScheme();
  const [colorSchemeName, setColorSchemeName] = useState<ColorSchemeName>("auto");
  const [isLoaded, setIsLoaded] = useState(false);
  const { getItem, setItem } = useAsyncStorage("fw_colorscheme");

  async function saveColorScheme(value: ColorSchemeName) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setColorSchemeName(value);
  }

  useEffect(() => {
    (async () => {
      try {
        const value = await getItem();
        if (value) {
          setColorSchemeName(value as ColorSchemeName);
        } else {
          setColorSchemeName("auto");
          await setItem("auto");
        }
      } catch (error) {
        console.error("Failed to load color scheme:", error);
      } finally {
        setIsLoaded(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colorSchemeValue = useMemo(() => {
    if (!isLoaded) return deviceColorScheme;
    if (colorSchemeName === "auto") {
      return deviceColorScheme;
    }
    return colorSchemeName;
  }, [deviceColorScheme, colorSchemeName, isLoaded]);

  return {
    colorSchemeName,
    colorSchemeValue,
    saveColorScheme,
    isLoaded,
  };
}
