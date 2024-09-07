import { ActiveWindow } from "@/types/common";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useActiveWindow() {
  const [activeWindow, setActiveWindow] = useState<ActiveWindow>("search");
  const { getItem, setItem } = useAsyncStorage("active_window");

  async function saveActiveWindow(value: ActiveWindow) {
    try {
      await setItem(value);
    } catch (error) {
      console.error(error);
      return;
    }
    setActiveWindow(value);
  }

  useEffect(() => {
    (async () => {
      const value = await getItem();
      if (value) {
        setActiveWindow(value as ActiveWindow);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    activeWindow,
    saveActiveWindow,
  };
}
