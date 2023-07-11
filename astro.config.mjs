import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify()
});