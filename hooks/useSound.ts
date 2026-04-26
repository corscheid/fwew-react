import AudioResources from "@/constants/AudioResources";
import { Dialect } from "@/types/common";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";

function getUrl(dialect: Dialect, wordId: string, isForestEquiv: boolean) {
  if (isForestEquiv) {
    dialect = "forest";
  }
  let baseURL: string;
  switch (dialect) {
    case "forest":
      baseURL = AudioResources.URL.forest;
      break;
    case "reef":
      baseURL = AudioResources.URL.reef;
      break;
    default:
      baseURL = AudioResources.URL.forest;
      break;
  }
  return `${baseURL}/${wordId}.mp3`
}

export function useSound(dialect: Dialect, wordId: string, isForestEquiv: boolean) {
  const player = useAudioPlayer(getUrl(dialect, wordId, isForestEquiv));
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    player.replace(getUrl(dialect, wordId, isForestEquiv));
  }, [player, dialect, wordId, isForestEquiv]);

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
