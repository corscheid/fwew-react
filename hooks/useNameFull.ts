import { useDialectContext } from "@/context/DialectContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { NameEnding } from "fwew.js";
import { nameFull } from "fwew.js";
import { useCallback, useEffect, useRef, useState } from "react";

export function useNameFull() {
  const [numNames, setNumNames] = useState<NumericString>("4");
  const { dialect } = useDialectContext();
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();
  const abortController = useRef(new AbortController());

  const [syllables1, setSyllables1] = useState<NumericString>("0");
  const [syllables2, setSyllables2] = useState<NumericString>("0");
  const [syllables3, setSyllables3] = useState<NumericString>("0");
  const [ending, setEnding] = useState<NameEnding>("random");

  const execute = useCallback(async () => {
    if (!ending) return;
    if (!numNames) return;
    if (!syllables1) return;
    if (!syllables2) return;
    if (!syllables3) return;
    if (!dialect) return;
    setLoading(true);
    const names = await nameFull(ending, numNames, syllables1, syllables2, syllables3, dialect, {
      signal: abortController.current.signal,
    });
    setNames(names.trim().split("\n"));
    setLoading(false);
  }, [dialect, ending, numNames, syllables1, syllables2, syllables3]);

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

  const updateSyllables1 = (text: string) => {
    if (text === "") {
      setSyllables1(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables1(`${num}`);
  };

  const updateSyllables2 = (text: string) => {
    if (text === "") {
      setSyllables2(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables2(`${num}`);
  };

  const updateSyllables3 = (text: string) => {
    if (text === "") {
      setSyllables3(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables3(`${num}`);
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
  }, [ending, numNames, syllables1, syllables2, syllables3, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    syllables1,
    updateSyllables1,
    syllables2,
    updateSyllables2,
    syllables3,
    updateSyllables3,
    ending,
    setEnding,
    loading,
    execute,
  };
}
