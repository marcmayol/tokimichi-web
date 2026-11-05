// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { PAGES } from './src/routes.mjs';

const SITE = 'https://tokimichi.app';

export default defineConfig({
	site: SITE,
	output: 'static',
	trailingSlash: 'always',
	build: { inlineStylesheets: 'always' },
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		sitemap({
			i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
			// Astro no empareja rutas con distinto nombre: lo hace serialize con el mismo mapa que el HTML.
			// Una página sin fila en routes.mjs rompe el build: así el sitemap no puede quedarse atrás.
			serialize(item) {
				const page = Object.values(PAGES).find((p) => item.url === SITE + p.en || item.url === SITE + p.es);
				if (!page) throw new Error(`Falta en src/routes.mjs: ${item.url}`);
				item.links = [
					{ lang: 'en', url: SITE + page.en },
					{ lang: 'es', url: SITE + page.es },
					{ lang: 'x-default', url: SITE + page.en },
				];
				item.lastmod = page.updated;
				return item;
			},
		}),
	],
});
