import type { Dialect } from "@/types/common";

const AudioResources: { URL: Record<Dialect, string> } = {
  URL: {
    forest: "https://s.learnnavi.org/audio/vocab",
    reef: "https://s.learnnavi.org/audio/vocab/reef",
  },
};

export default AudioResources;
