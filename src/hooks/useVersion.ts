import Constants from "expo-constants";
import type { Version } from "fwew.js";
import { version as fwewVersion } from "fwew.js";
import { useEffect, useState } from "react";

export function useVersion() {
  const [version, setVersion] = useState<Version>();

  const AppVersion = Constants.expoConfig?.version;
  const CommitHash = process.env.EXPO_PUBLIC_GIT_COMMIT_HASH;
  const Branch = process.env.EXPO_PUBLIC_GIT_BRANCH;

  const getVersion = async () => {
    const data = await fwewVersion();
    setVersion(data);
  };

  useEffect(() => {
    void getVersion();
  }, []);

  return {
    AppVersion,
    Branch,
    CommitHash,
    ...version,
  };
}
