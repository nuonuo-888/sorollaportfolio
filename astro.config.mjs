// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import edgeoneAdapter from "@edgeone/astro";

// Skip the Netlify adapter during `astro dev` to avoid reading the global
// Netlify config (which can be locked down on some systems).
const isDevCommand = process.argv.some((arg) => arg.includes("dev"));
const useNetlifyAdapter = !isDevCommand;

export default defineConfig({
  output: "server",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: edgeoneAdapter()
});