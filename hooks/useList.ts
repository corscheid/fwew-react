import type { Word } from "fwew.js";
import { list } from "fwew.js";
import { useCallback, useRef, useState } from "react";

export function useList() {
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  let abortController = useRef(new AbortController());

  const execute = useCallback(async (filterExpression: string) => {
    if (filterExpression.length === 0) return;
    setLoading(true);
    try {
      const data = await list(filterExpression, {
        signal: abortController.current.signal,
      });
      setResults(data);
    } catch {
      setResults([]);
    }
    setLoading(false);
  }, []);

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  return { loading, results, execute, cancel };
}
