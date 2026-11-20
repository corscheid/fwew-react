import { useDialectContext } from "@/context/DialectContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { AdjectiveMode, NounMode } from "fwew.js";
import { nameAlu } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useNameAlu() {
  const [numNames, setNumNames] = useState<NumericString>("4");
  const { dialect } = useDialectContext();
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const [numSyllables, setNumSyllables] = useState<NumericString>("0");
  const [nounMode, setNounMode] = useState<NounMode>("something");
  const [adjMode, setAdjMode] = useState<AdjectiveMode>("something");

  const execute = useCallback(async () => {
    if (!numNames || !numSyllables || !nounMode || !adjMode || !dialect) {
      return;
    }
    setLoading(true);
    const results = await nameAlu(numNames, numSyllables, nounMode, adjMode, dialect, {
      signal: abortController.current.signal,
    });
    setNames(results.trim().split("\n"));
    setLoading(false);
  }, [adjMode, dialect, nounMode, numNames, numSyllables]);

  const updateNumNames = (text: string) => {
    if (text === "") {
      setNumNames(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 50 || num < 1) return;
    setNumNames(`${num}`);
  };

  const updateNumSyllables = (text: string) => {
    if (text === "") {
      setNumSyllables(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setNumSyllables(`${num}`);
  };

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numNames, numSyllables, nounMode, adjMode, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    nounMode,
    setNounMode,
    adjMode,
    setAdjMode,
    loading,
    execute,
  };
}
