import { defineConfig } from "vite";

export default defineConfig({
  base: "./thienbon.github.io",
  build: {
    minify: "terser",
  },
});
