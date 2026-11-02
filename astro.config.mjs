// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const BUILT = new Date().toISOString();

export default defineConfig({
	site: 'https://tokimichi.app',
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
			serialize(item) {
				const pairs = {
					'https://tokimichi.app/': 'https://tokimichi.app/es/',
					'https://tokimichi.app/privacy/': 'https://tokimichi.app/es/privacidad/',
				};
				const entry = Object.entries(pairs).find(([en, es]) => item.url === en || item.url === es);
				if (entry) {
					item.links = [
						{ lang: 'en', url: entry[0] },
						{ lang: 'es', url: entry[1] },
						{ lang: 'x-default', url: entry[0] },
					];
				}
				item.lastmod = BUILT;
				return item;
			},
		}),
	],
});
