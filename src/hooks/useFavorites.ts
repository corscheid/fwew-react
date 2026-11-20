import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import type { Word } from "fwew.js";
import { useCallback, useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Word[]>([]);
  const { getItem, setItem } = useAsyncStorage("savedWords");

  const isFavorite = (word: Word) => favorites.some((w) => w.ID === word.ID);

  const getFavorites = useCallback(async () => {
    try {
      const value = await getItem();
      if (!value) return;
      const savedWordsArr: Word[] = JSON.parse(value);
      if (savedWordsArr == null) return;
      setFavorites(savedWordsArr);
    } catch (error) {
      console.error(error);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function addFavorite(word: Word) {
    try {
      const exists = isFavorite(word);
      if (exists) return;
      const value = JSON.stringify([word, ...favorites]);
      await setItem(value);
      setFavorites((prev) => [word, ...prev]);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async function removeFavorite(word: Word) {
    try {
      const newFavorites = favorites.filter((w) => w.ID !== word.ID);
      const value = JSON.stringify(newFavorites);
      await setItem(value);
      setFavorites(newFavorites);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async function toggleFavorite(word: Word) {
    if (isFavorite(word)) {
      await removeFavorite(word);
    } else {
      await addFavorite(word);
    }
  }

  async function clearFavorites() {
    try {
      await setItem(JSON.stringify([]));
      setFavorites([]);
    } catch (error) {
      console.error(error);
      return;
    }
  }

  useEffect(() => {
    void getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
