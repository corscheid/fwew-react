import { NumericString } from "@/types/common";
import { random, type Word } from "fwew.js";
import { useCallback, useState } from "react";

export function useRandom() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  let abortController = new AbortController();

  const execute = useCallback(
    async (numWords: NumericString, filterExpression: string) => {
      if (numWords.length === 0) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        if (filterExpression.length > 0) {
          const data = await random(+numWords, filterExpression, {
            signal: abortController.signal,
          });
          setResults(data);
          setLoading(false);
          return;
        }
        const data = await random(+numWords, undefined, {
          signal: abortController.signal,
        });
        setResults(data);
      } catch (e: any) {
        setResults([]);
      }
      setLoading(false);
    },
    []
  );

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  return { loading, results, execute, cancel };
}
