import { useDialectContext } from "@/context/DialectContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import { nameSingle } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useNameSingle() {
  const [numNames, setNumNames] = useState<NumericString>("4");
  const { dialect } = useDialectContext();
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const [numSyllables, setNumSyllables] = useState<NumericString>("0");

  const execute = useCallback(async () => {
    if (!numNames || !numSyllables || !dialect) return;
    setLoading(true);
    const names = await nameSingle(numNames, numSyllables, dialect, {
      signal: abortController.current.signal,
    });
    setNames(names.trim().split("\n"));
    setLoading(false);
  }, [dialect, numNames, numSyllables]);

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
  }, [numNames, numSyllables, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    loading,
    execute,
  };
}
