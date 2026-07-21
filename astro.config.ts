import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://n4french.co.uk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://n4french.co.uk/join/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          fr: 'fr-FR',
        },
      },
    }),
  ],
});
