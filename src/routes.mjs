// Las rutas de cada página: de aquí salen el selector de idioma, los hreflang, los Markdown y el sitemap.
// Al cambiar el texto de una página, cambia su `updated`: es el lastmod que ve Search Console.
export const PAGES = {
	home: { en: '/', es: '/es/', updated: '2026-11-05' },
	privacy: { en: '/privacy/', es: '/es/privacidad/', updated: '2026-11-02' },
	travel: { en: '/travel-journal-app/', es: '/es/app-diario-de-viaje/', updated: '2026-11-05' },
	travelGuide: { en: '/how-to-keep-travel-memories/', es: '/es/como-guardar-recuerdos-de-un-viaje/', updated: '2026-11-05' },
	voice: { en: '/voice-diary-app/', es: '/es/app-diario-de-voz/', updated: '2026-11-05' },
	noStreaks: { en: '/journal-app-no-streaks/', es: '/es/diario-sin-rachas/', updated: '2026-11-05' },
	celebrations: { en: '/birthday-party-memories/', es: '/es/recuerdos-de-cumpleanos-y-fiestas/', updated: '2026-11-05' },
};
