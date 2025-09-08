import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

import siteConfig from "../data/site-config.ts";
import { sortItemsByDateDesc } from "../utils/data-utils.ts";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(sortItemsByDateDesc);
  return rss({
    description: siteConfig.description,
    items: posts.map((item) => ({
      description: item.data.excerpt,
      link: `/blog/${item.id}/`,
      pubDate: item.data.publishDate.setUTCHours(0),
      title: item.data.title,
    })),
    site: context.site,
    title: siteConfig.title,
  });
}
