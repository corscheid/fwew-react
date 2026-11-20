import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useLocalSearchParams } from "expo-router";
import type { Word } from "fwew.js";
import { fwew, search as fwewSearch } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useFwew() {
  const { q } = useLocalSearchParams<{ q?: string }>();
  const { resultsLanguage } = useResultsLanguageContext();
  const [query, search] = useState(q ?? "");
  const [naviOnly, setNaviOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[][]>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const execute = useCallback(async () => {
    if (query === "") {
      setResults([]);
      setResultCount(0);
      return;
    }

    setLoading(true);

    let data: Word[][];
    let query_encoded = query.trim();

    // Make sure it carries no characters that can disrupt the URL
    let not_for_url = ["/", "\\", "?", "%", "@", "#"];
    for (let char of not_for_url) {
      query_encoded = query_encoded.replaceAll(char, " ");
    }

    try {
      if (naviOnly) {
        data = await fwew(query_encoded, {
          signal: abortController.current.signal,
        });
      } else {
        data = await fwewSearch(resultsLanguage, query_encoded, {
          signal: abortController.current.signal,
        });
      }
    } catch {
      setResults([]);
      setResultCount(0);
      setLoading(false);
      return;
    }

    setResults(data);
    setResultCount(
      // number of actual results = total number of words - number of "blank header words"
      data.reduce((acc, cur) => acc + cur.length, 0) - data.length
    );
    setLoading(false);
  }, [naviOnly, query, resultsLanguage]);

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [execute]);

  return {
    query,
    naviOnly,
    results,
    resultCount,
    loading,
    search,
    setNaviOnly,
    execute,
    cancel,
  } as const;
}
