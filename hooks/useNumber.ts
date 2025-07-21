import { useDebounce } from "@/hooks/useDebounce";
import type { FwewError, FwewNumber } from "fwew.js";
import { naviToNumber, numberToNavi } from "fwew.js";
import { useCallback, useEffect, useState } from "react";

export function useNumber() {
  const [mode, setMode] = useState<"text" | "number">("number");
  const [query, search] = useState("");
  const [result, setResult] = useState<FwewNumber | FwewError | null>(null);
  const debounce = useDebounce();

  const toggleMode = useCallback(() => {
    if (mode === "number") {
      setMode("text");
    } else {
      setMode("number");
    }
  }, [mode]);

  const clear = useCallback(() => {
    search("");
    setResult(null);
  }, []);

  const doSearch = useCallback(async () => {
    if (query === "") {
      setResult(null);
      return;
    }
    // Remove all commas
    let query2 = query.replace(/[,]/g, '');
    let n;
    if (/^(0[xX][0-9a-fA-F]+)$/.test(query2)) {
      n = parseInt(query2, 16);
    } else if (/^(0[bB][01]+)$/.test(query2)) {
      n = parseInt(query2.slice(2), 2);
    } else if (/^(0[0-7]+)$/.test(query2)) {
      n = parseInt(query2, 8);
    } else if (/^([0-9]+)$/.test(query2)) {
      n = parseInt(query2, 10);
    }
    if (n) {
      const data = await numberToNavi(n);
      setResult(data);
      return;
    }
    if (/^([a-zA-ZäÄìÌ]+)$/.test(query2)) {
      const data = await naviToNumber(query2);
      setResult(data);
      return;
    }
  }, [query]);

  useEffect(() => {
    debounce(doSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, mode]);

  return [mode, toggleMode, query, result, search, clear] as const;
}
