// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://adrianwedd.github.io",
  base: "/why-demonstrated-risk-is-ignored/",
  build: {
    format: "file",
    inlineStylesheets: "auto"
  }
});
