import type { Word } from "fwew.js";
import { list } from "fwew.js";
import { useRef, useState } from "react";

export function useList() {
  const [results, setResults] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const abortController = useRef(new AbortController());

  const execute = async (filterExpression: string) => {
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
  };

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  return { loading, results, execute, cancel };
}
