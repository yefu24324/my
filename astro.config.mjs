import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), solidJs()],
  server: {
    allowedHosts: ["yefu24324.com", "host.docker.internal"],
    host: true,
  },
  site: "http://yefu24324.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
