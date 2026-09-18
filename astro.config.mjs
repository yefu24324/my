import solidJs from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      components: {
        ContentPanel: "./src/components/overrides/ContentPanel.astro",
        Header: "./src/components/overrides/Header.astro",
        Hero: "./src/components/overrides/Hero.astro",
        PageFrame: "./src/components/overrides/PageFrame.astro",
        ThemeSelect: "./src/components/overrides/ThemeSelect.astro",
        TwoColumnContent: "./src/components/overrides/TwoColumnContent.astro",
      },
      customCss: ["./src/styles/global.css", "./src/styles/base.css"],
      markdown: {
        processedDirs: ["./src/content/blog"],
      },
      plugins: [],
      sidebar: [
        {
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
          label: "Guides",
        },
        {
          items: [{ autogenerate: { directory: "reference" } }],
          label: "Reference",
        },
      ],
      social: [{ href: "https://github.com/withastro/starlight", icon: "github", label: "GitHub" }],
      title: "夜浮卿的个人博客和分享",
    }),
    // mdx(),
    // sitemap(),
    solidJs(),
  ],
  site: "http://yefu24324.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
