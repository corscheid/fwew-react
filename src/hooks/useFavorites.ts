import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import type { Word } from "fwew.js";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Word[]>([]);
  const { getItem, setItem } = useAsyncStorage("savedWords");

  const isFavorite = (word: Word) => favorites.some((w) => w.ID === word.ID);

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
    let cancelled = false;
    getItem()
      .then((value) => {
        if (cancelled) return;
        if (!value) return;
        const savedWordsArr: Word[] = JSON.parse(value);
        if (savedWordsArr == null) return;
        setFavorites(savedWordsArr);
      })
      .catch((error) => {
        if (!cancelled) console.error(error);
      });
    return () => {
      cancelled = true;
    };
  }, [getItem]);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
