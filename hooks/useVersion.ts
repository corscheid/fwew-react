import type { Version } from "fwew.js";
import { version as fwewVersion } from "fwew.js";
import { useEffect, useState } from "react";
import Constants from "expo-constants";

export function useVersion() {
  const [version, setVersion] = useState<Version>();

  const AppVersion = Constants.expoConfig?.version;
  const CommitHash = process.env.EXPO_PUBLIC_GIT_COMMIT_HASH;

  const getVersion = async () => {
    const data = await fwewVersion();
    setVersion(data);
  };

  useEffect(() => {
    getVersion();
  }, []);

  return {
    AppVersion,
    CommitHash,
    ...version,
  };
}
