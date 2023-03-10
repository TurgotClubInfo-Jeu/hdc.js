import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  server: {
    port: 3000
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  build: {
    target: "esnext"
  }
});
