import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { valid } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useValid() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    if (query === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    let data: string;

    try {
      data = await valid(resultsLanguage, query.trim(), {
        signal: abortController.current.signal,
      });
    } catch {
      setResults([]);
      setLoading(false);
      return;
    }

    let tempResults: string[];
    tempResults = [];
    const thing = data.trim().split("\n");

    for (const k in thing) {
      tempResults.push(thing[k].replaceAll("**", "`").replaceAll("`", ""));
    }

    setResults(tempResults);
    setLoading(false);
  }, [resultsLanguage, query]);

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, resultsLanguage]);

  return {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } as const;
}
