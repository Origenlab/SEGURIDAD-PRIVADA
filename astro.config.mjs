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
      filter: (page) =>
        !page.includes('/draft') &&
        !page.includes('/aviso-de-privacidad') &&
        !page.includes('/mapa-del-sitio'),
      serialize: (item) => {
        const url = item.url;

        // Homepage — máxima prioridad
        if (url === 'https://seguridad-privada.com.mx' || url === 'https://seguridad-privada.com.mx/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Pillar pages — pilares del negocio
        else if (url.includes('/seguridad-condominios') || url.includes('/seguridad-residenciales') || url.includes('/guardias-intramuros')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Páginas de servicios
        else if (url.includes('/servicios/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Páginas de zonas — SEO local
        else if (url.includes('/zonas/')) {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        }
        // Índices principales
        else if (url.endsWith('/servicios') || url.endsWith('/zonas') || url.endsWith('/blog') || url.endsWith('/emergencias')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Directorio de emergencias — recurso ciudadano con alto intento de búsqueda
        else if (url.includes('/emergencias/')) {
          item.priority = 0.65;
          item.changefreq = 'monthly';
        }
        // Blog posts
        else if (url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Nosotros, contacto, bolsa
        else if (url.endsWith('/nosotros') || url.endsWith('/contacto')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        else {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        return item;
      }
    })
  ]
});
