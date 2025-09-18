import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/office.css"],
      title: "夜浮卿的个人博客和分享",
    }),
    // mdx(),
    sitemap(),
    solidJs(),
  ],
  server: {
    allowedHosts: ["yefu24324.com", "host.docker.internal"],
    host: true,
  },
  site: "http://yefu24324.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
