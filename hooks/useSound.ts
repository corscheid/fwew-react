import AudioResources from "@/constants/AudioResources";
import { useDialectContext } from "@/context/DialectContext";
import { Dialect } from "@/types/common";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";

function getUrl(dialect: Dialect, wordId: string) {
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

export function useSound(wordId: string) {
  const { dialect } = useDialectContext();
  const player = useAudioPlayer(getUrl(dialect, wordId));
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    player.replace(getUrl(dialect, wordId));
  }, [dialect, player, wordId]);

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
