import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fabriceliut.github.io',
  base: '/Komizo/',
  output: 'static',
  integrations: [sitemap()]
});
