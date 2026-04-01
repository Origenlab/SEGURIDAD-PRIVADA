import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seguridad-privada.com.mx',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) => !page.includes('/draft'),
      serialize: (item) => {
        // Home page - highest priority
        if (item.url === 'https://seguridad-privada.com.mx' || item.url === 'https://seguridad-privada.com.mx/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Pillar pages - very high priority
        else if (item.url.includes('/seguridad-condominios') || item.url.includes('/seguridad-residenciales') || item.url.includes('/guardias-intramuros')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Service pages
        else if (item.url.includes('/servicios/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Zone pages - local SEO
        else if (item.url.includes('/zonas/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Blog posts
        else if (item.url.includes('/blog/') || item.url.includes('/noticias/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Other pages
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});
