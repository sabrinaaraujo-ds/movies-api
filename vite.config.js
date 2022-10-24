import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { nodePolyfills } from "vite-plugin-node-polyfills";
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "setupTests.js",
  },
});
