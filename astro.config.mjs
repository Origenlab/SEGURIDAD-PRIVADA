import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seguridad-privada.com.mx',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
