import AudioResources from "@/constants/AudioResources";
import { useAudioPlayer } from "expo-audio";
import { useState } from "react";

export function useSound(wordId: string) {
  const player = useAudioPlayer(`${AudioResources.URL}/${wordId}.mp3`);
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
