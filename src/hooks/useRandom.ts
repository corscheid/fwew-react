import { NumericString } from "@/types/common";
import { random, type Word } from "fwew.js";
import { useRef, useState } from "react";

export function useRandom() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  const abortController = useRef(new AbortController());

  const execute = async (numWords: NumericString, filterExpression: string) => {
    if (numWords.length === 0) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      if (filterExpression.length > 0) {
        const data = await random(+numWords, filterExpression, {
          signal: abortController.current.signal,
        });
        setResults(data);
        setLoading(false);
        return;
      }
      const data = await random(+numWords, undefined, {
        signal: abortController.current.signal,
      });
      setResults(data);
    } catch {
      setResults([]);
    }
    setLoading(false);
  };

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  return { loading, results, execute, cancel };
}
