import { coverageConfigDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "v8",
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/{next,postcss,tailwind}.config.?(c|m)[jt]s",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
