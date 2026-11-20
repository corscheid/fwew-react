import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { dictLen, phonemeFrequency } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useStats() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState<string>();
  const [phonemeGrid, setPhonemes] = useState<string[][]>([]);
  const [clusterName, setClusterName] = useState<string>();
  const [clusterMap, setClusters] = useState<string[][]>([]);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    setLoading(true);

    let data1: string;
    let data2: string[][][];

    try {
      data1 = await dictLen(resultsLanguage, {
        signal: abortController.current.signal,
      });
      data2 = await phonemeFrequency(resultsLanguage, {
        signal: abortController.current.signal,
      });
    } catch {
      setLoading(false);
      return;
    }

    setWordCount(data1);
    setPhonemes(data2[0]);
    // data2[1][0][0] will be empty on the display page,
    // so it's used as a carrier for the language's
    // name for "consonant clusters"
    setClusterName(data2[1][0][0]);
    data2[1][0][0] = "";
    setClusters(data2[1]);
    setLoading(false);
  }, [resultsLanguage]);

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultsLanguage]);

  return {
    wordCount,
    phonemeGrid,
    clusterName,
    clusterMap,
    loading,
    execute,
    cancel,
  } as const;
}
