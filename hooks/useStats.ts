import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { dictLen, phonemeFrequency } from "fwew.js";
import { useEffect, useState } from "react";

// Helper to ensure numbers are guaranteed from maps
let numberOnly: number = 0

function assign(value: number | undefined) {
  // if value is null or undefined, don't do anything
  if (typeof value === 'number') {
     numberOnly = value;
  } else {
    numberOnly = 0
  }
}

export function useStats() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState<String>();
  const [phonemeGrid, setPhonemes] = useState<String[][]>([]);
  const [clusterMap, setClusters] = useState<String[][]>([]);
  const debounce = useDebounce();
  let abortController = new AbortController();

  const execute = async () => {
    setLoading(true);

    let data1: String;
    let data2: String[][][]
    let value1: Map<string,Map<string,number>>
    
    try {
        data1 = await dictLen({
          signal: abortController.signal,
        });
        data2 = await phonemeFrequency({
          signal: abortController.signal,
        });
    } catch (e: any) {
      setLoading(false);
      return;
    }
    
    setWordCount(data1)
    setPhonemes(data2[0]);
    setClusters(data2[1]);
    setLoading(false);
  };

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [resultsLanguage]);

  return {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
    execute,
    cancel,
  } as const;
}
