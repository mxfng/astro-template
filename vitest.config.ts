import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    environmentMatchGlobs: [
      // Use browser environment for JSX/TSX files
      ["**/*.{jsx,tsx}", "browser"],
      // Use node environment for regular JS/TS files
      ["**/*.{js,ts}", "node"],
    ],
  },
});
