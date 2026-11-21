// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  expoConfig,
  {
    settings: {
      react: {
        version: "19.3",
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  },
]);
