import AudioResources from "@/constants/AudioResources";
import { useDialectContext } from "@/context/DialectContext";
import { Dialect } from "@/types/common";
import { useAudioPlayer } from "expo-audio";
import { useState } from "react";

function getURL(dialect: Dialect, wordId: string) {
  let baseURL: string;
  switch (dialect) {
    case "forest":
      baseURL = AudioResources.URL.forest;
    case "reef":
      baseURL = AudioResources.URL.reef;
    default:
      baseURL = AudioResources.URL.forest;
  }
  return `${baseURL}/${wordId}.mp3`
}

export function useSound(wordId: string) {
  const { dialect } = useDialectContext();
  const player = useAudioPlayer(getURL(dialect,wordId));
  const [disabled, setDisabled] = useState(false);

  const playSound = (): void => {
    try {
      player.seekTo(0);
      player.play();
      setDisabled(false);
    } catch (error) {
      console.error(error);
      setDisabled(true);
    }
  };

  return { playSound, disabled };
}
