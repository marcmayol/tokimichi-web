export const SITE = 'https://tokimichi.app';
export const CONTACT_EMAIL = 'hola@tokimichi.app';
// El webhook de la lista de espera en n8n.
export const WAITLIST_ENDPOINT = 'https://vps24874.cubepath.net/webhook/tokimichi-lista-espera';

export type Lang = 'en' | 'es';
export type PageKey = 'home' | 'privacy';

/** Las rutas de cada página por idioma: de aquí salen el selector, los hreflang y los Markdown. */
export const ROUTES: Record<PageKey, Record<Lang, string>> = {
	home: { en: '/', es: '/es/' },
	privacy: { en: '/privacy/', es: '/es/privacidad/' },
};

export const altLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

export const UI = {
	es: {
		langName: 'English',
		home: 'Tokimichi, inicio',
		toLuna: 'Modo Luna',
		toMochi: 'Modo Mochi',
		meta: {
			title: 'Tokimichi: la app para revivir tus recuerdos más felices',
			description:
				'La app donde tus experiencias siguen vivas: guarda viajes, fiestas y cumpleaños con texto, fotos, vídeo o voz, y revívelos cuando quieras. Primero en Android.',
		},
		status: 'Aún no está publicada: saldrá primero en Android, en español e inglés.',
		h1: 'Revive tus recuerdos más felices.',
		h1Parts: ['Revive tus recuerdos ', 'más felices', '.'],
		lede: 'Tokimichi es la app donde tus experiencias siguen vivas. Guardas lo que sientes mientras lo vives, y cuando quieras vuelves a aquel viaje, aquel cumpleaños o aquella noche con amigos, tal como fue.',
		heroAlt: 'Pantalla de inicio de Tokimichi con dos experiencias en curso: un cumpleaños, con la foto de una tarta, y un viaje a Egipto, con las pirámides.',
		form: {
			label: 'Te avisamos cuando salga en Android',
			footLabel: 'Tu correo',
			placeholder: 'tu@correo.com',
			send: 'Avísame',
			sending: 'Enviando…',
			consentA: 'Acepto la',
			consentLink: 'política de privacidad',
			consentB: '. Solo te escribimos para esto.',
			ok: 'Apuntado. Te escribimos el día que salga.',
			errEmail: 'Ese correo no parece completo. Revísalo y vuelve a probar.',
			errConsent: 'Necesitamos que marques la casilla para poder escribirte.',
			errNet: 'No se ha podido enviar. Comprueba tu conexión y vuelve a probar.',
			toolDesc: 'Apunta un correo a la lista de espera de Tokimichi para avisar del lanzamiento en Android.',
			toolEmail: 'Correo de la persona que quiere el aviso, con su permiso.',
			toolConsent: 'Marcar solo si la persona ha aceptado la política de privacidad.',
			toolTrap: 'Dejar siempre vacío: es una trampa para bots.',
		},
		roadTitle: 'Así sigue vivo un recuerdo',
		roadNote: '',
		road: [
			{ tag: '09:12', shot: 'formulario', title: 'Empieza algo bonito', body: 'Un viaje, una escapada, una excursión, un cumpleaños, una fiesta, una quedada o lo que se te ocurra.', alt: 'Formulario de nueva experiencia con los tipos para elegir, de viaje a quedada, y el destino Egipto escrito.' },
			{ tag: '15:32', shot: 'experiencia', title: 'Guarda lo que sientes', body: 'Una frase, una foto, un vídeo o tu voz, en segundos y con la hora del país en el que estés.', alt: 'Pantalla de una experiencia con un momento guardado a las 19:04.' },
			{ tag: '19:04', shot: 'pregunta', title: 'Tokimichi te pregunta', body: 'Hasta tres veces al día y sin insistir. Si no te apetece, tocas «Hoy no» y no queda rastro.', alt: 'Pantalla con la pregunta «¿Cómo te sientes hoy?» y una respuesta a medio escribir.' },
			{ tag: 'Un año', shot: 'dias', title: 'Y un día, vuelves', body: 'Abres aquel día y ahí está todo: lo que escribiste, tus fotos, tus vídeos y tu voz, en el orden en que pasó.', alt: 'Pantalla de una experiencia con sus días desplegados: hoy, ayer y el día 1.' },
		],
		promiseTitle: 'Tus recuerdos, solo tuyos',
		promise: [
			{ name: 'En tu móvil', text: 'De momento se guardan ahí, y puedes sacar una copia cuando quieras.' },
			{ name: 'Solo para ti', text: 'No es una red social: sin seguidores ni me gusta.' },
			{ name: 'Sin rachas', text: 'Nadie te riñe si un día no escribes.' },
		],
		nextTitle: 'Para revivirlo aún mejor',
		nextNote: 'Todo esto está en camino.',
		next: ['Una película con tus recuerdos', 'Un álbum con tus recuerdos', 'Copia automática en tu Drive o tu nube', 'iPhone'],
		faqTitle: 'Preguntas',
		faq: [
			{ q: '¿Es solo para viajes?', a: 'No. Sirve para cualquier cosa que quieras recordar como la viviste: un cumpleaños, una fiesta, una tarde con amigos.' },
			{ q: '¿Dónde se guarda todo?', a: 'De momento, en tu móvil. Puedes guardar una copia en un archivo cuando quieras.' },
			{ q: '¿Y si cambio de móvil?', a: 'Estamos preparando copias automáticas en tu Drive o tu nube personal, para que te lleves tus recuerdos al móvil nuevo.' },
			{ q: '¿Cuándo sale?', a: 'Primero en Android, cuando esté lista, y después en iPhone. Todavía no hay fecha; si te apuntas, te avisamos.' },
			{ q: '¿En qué idiomas saldrá?', a: 'En español y en inglés desde el primer día.' },
			{ q: '¿Qué significa Tokimichi?', a: 'Une dos palabras japonesas: toki, tiempo, y michi, camino. El camino del tiempo.' },
		],
		footTitle: 'Lo que vives hoy merece seguir vivo.',
		privacyLink: 'Privacidad',
		madeBy: 'Hecho por Marc Mayol',
		notFound: { title: 'Por aquí no hay camino', body: 'Esta página no existe.', back: 'Volver al inicio' },
	},
	en: {
		langName: 'Español',
		home: 'Tokimichi, home',
		toLuna: 'Luna mode',
		toMochi: 'Mochi mode',
		meta: {
			title: 'Tokimichi: the app to relive your happiest memories',
			description:
				'The app where your experiences stay alive: save trips, parties and birthdays with text, photos, video or voice, and relive them anytime. Android first.',
		},
		status: 'It isn’t out yet: Android comes first, in English and Spanish.',
		h1: 'Relive your happiest memories.',
		h1Parts: ['Relive your ', 'happiest memories', '.'],
		lede: 'Tokimichi is the app where your experiences stay alive. You save what you feel as you live it, and whenever you like you go back to that trip, that birthday or that night with friends, just as it was.',
		heroAlt: 'Tokimichi home screen with two experiences in progress: a birthday, with a photo of a cake, and a trip to Egypt, with the pyramids. Screenshot of the Spanish alpha.',
		form: {
			label: 'We’ll tell you when it’s out on Android',
			footLabel: 'Your email',
			placeholder: 'you@email.com',
			send: 'Notify me',
			sending: 'Sending…',
			consentA: 'I accept the',
			consentLink: 'privacy policy',
			consentB: '. We’ll only write to you about this.',
			ok: 'You’re on the list. We’ll email you when it’s out.',
			errEmail: 'That email looks incomplete. Check it and try again.',
			errConsent: 'Please tick the box so we can write to you.',
			errNet: 'It couldn’t be sent. Check your connection and try again.',
			toolDesc: 'Adds an email to the Tokimichi waiting list to announce the Android launch.',
			toolEmail: 'Email of the person who wants the notice, with their permission.',
			toolConsent: 'Tick only if the person has accepted the privacy policy.',
			toolTrap: 'Always leave empty: this is a bot trap.',
		},
		roadTitle: 'How a memory stays alive',
		roadNote: 'These screens are from the Spanish alpha. The app launches in English and Spanish.',
		road: [
			{ tag: '09:12', shot: 'formulario', title: 'Start something lovely', body: 'A trip, a getaway, a day trip, a birthday, a party, a meetup or whatever comes to mind.', alt: 'New experience form with the types to choose from, trip to meetup, and Egypt typed as the destination. Screenshot of the Spanish alpha.' },
			{ tag: '15:32', shot: 'experiencia', title: 'Save what you feel', body: 'A sentence, a photo, a video or your voice, in seconds and with the local time of the country you’re in.', alt: 'Screen of an experience with a moment saved at 19:04. Screenshot of the Spanish alpha.' },
			{ tag: '19:04', shot: 'pregunta', title: 'Tokimichi asks you', body: 'Up to three times a day, and it never nags. Not in the mood? Tap “Not today” and it leaves no trace.', alt: 'Screen with the question “How do you feel today?” and an answer being written. Screenshot of the Spanish alpha.' },
			{ tag: 'A year', shot: 'dias', title: 'Then one day, you go back', body: 'Open that day and it’s all there: what you wrote, your photos, videos and voice, in the order it happened.', alt: 'Screen of an experience with its days expanded: today, yesterday and day 1. Screenshot of the Spanish alpha.' },
		],
		promiseTitle: 'Your memories, only yours',
		promise: [
			{ name: 'On your phone', text: 'That’s where they live for now, and you can make a copy whenever you want.' },
			{ name: 'Just for you', text: 'It isn’t a social network: no followers, no likes.' },
			{ name: 'No streaks', text: 'No guilt if you skip a day.' },
		],
		nextTitle: 'To relive it even better',
		nextNote: 'All of this is on the way.',
		next: ['A film of your memories', 'An album of your memories', 'Automatic backup to your Drive or cloud', 'iPhone'],
		faqTitle: 'Questions',
		faq: [
			{ q: 'Is it only for trips?', a: 'No. It works for anything you want to remember just as it happened: a birthday, a party, an afternoon with friends.' },
			{ q: 'Where is everything saved?', a: 'For now, on your phone. You can save a copy to a file whenever you want.' },
			{ q: 'What if I change phones?', a: 'We’re working on automatic backups to your Drive or personal cloud, so your memories can come with you to your new phone.' },
			{ q: 'When is it coming out?', a: 'Android first, when it’s ready, then iPhone. There’s no date yet; sign up and we’ll tell you.' },
			{ q: 'What languages will it be in?', a: 'English and Spanish from day one.' },
			{ q: 'What does Tokimichi mean?', a: 'It joins two Japanese words: toki, time, and michi, path. The path of time.' },
		],
		footTitle: 'What you live today deserves to stay alive.',
		privacyLink: 'Privacy',
		madeBy: 'Made by Marc Mayol',
		notFound: { title: 'There’s no path this way', body: 'This page doesn’t exist.', back: 'Back to home' },
	},
} as const;

/** La política de privacidad, una sola vez por idioma. */
export const PRIVACY = {
	es: {
		meta: {
			title: 'Privacidad de Tokimichi: qué datos se guardan y por qué',
			description: 'Por ahora, la app guarda todo en tu móvil. La web solo te pide el correo, para la lista de espera; aquí explicamos para qué se usa y cómo borrarlo.',
		},
		title: 'Privacidad',
		updated: 'Actualizada el 2 de noviembre de 2026',
		sections: [
			{ h: 'La app', p: ['Hoy, lo que guardas en Tokimichi se queda en tu móvil, y no sale de ahí salvo que hagas tú una copia donde elijas. Si esto cambia, actualizaremos esta página antes de que te afecte.'] },
			{ h: 'La lista de espera', p: ['Si te apuntas, guardamos tu correo, el idioma de la página, la página desde la que te apuntaste y la fecha.', 'Lo usamos solo para avisarte de que la app ha salido. La base legal es tu consentimiento, que retiras cuando quieras.', 'Se guarda en un servidor privado que contratamos, y no se vende ni se cede a nadie. Lo borramos después de enviar el aviso, o antes si nos lo pides. Ese servidor puede registrar datos técnicos de la conexión, como la dirección IP, por seguridad.'] },
			{ h: 'La web', p: ['No hay cookies, analítica ni publicidad. Las fuentes están alojadas aquí mismo.', 'La web se aloja en GitHub Pages, y GitHub registra datos técnicos de las visitas, como la dirección IP, para operar y proteger su servicio.', 'Si eliges Modo Luna o Modo Mochi, esa preferencia se guarda solo en tu navegador.'] },
			{ h: 'Tus derechos', p: [`Puedes pedir acceso, rectificación, borrado, limitación u oposición, y retirar tu consentimiento, escribiendo a ${CONTACT_EMAIL}. Si crees que no se ha respetado tu privacidad, puedes reclamar ante la Agencia Española de Protección de Datos.`] },
			{ h: 'Responsable', p: [`Marc Mayol. Contacto: ${CONTACT_EMAIL}.`] },
		],
	},
	en: {
		meta: {
			title: 'Tokimichi privacy: what is stored and why',
			description: 'For now, the app keeps everything on your phone. The website only asks for your email, for the waiting list. Here’s what happens to it and how to delete it.',
		},
		title: 'Privacy',
		updated: 'Updated on 2 November 2026',
		sections: [
			{ h: 'The app', p: ['Today, what you save in Tokimichi stays on your phone, and it doesn’t leave unless you make a copy yourself, wherever you choose. If that changes, we’ll update this page before it affects you.'] },
			{ h: 'The waiting list', p: ['If you sign up, we store your email, the page language, the page you signed up from and the date.', 'We use it only to tell you the app is out. The legal basis is your consent, which you can withdraw at any time.', 'It’s kept on a private server we rent, and it isn’t sold or passed on to anyone. We delete it after sending the notice, or sooner if you ask. That server may log technical connection data, such as the IP address, for security.'] },
			{ h: 'The website', p: ['There are no cookies, analytics or ads. The fonts are hosted here too.', 'The site is hosted on GitHub Pages, and GitHub logs technical data about visits, such as the IP address, to run and protect its service.', 'If you choose Luna or Mochi mode, that preference is stored only in your browser.'] },
			{ h: 'Your rights', p: [`You can ask for access, correction, deletion, restriction or objection, and withdraw your consent, by writing to ${CONTACT_EMAIL}. If you think your privacy hasn’t been respected, you can complain to the Spanish Data Protection Agency (AEPD).`] },
			{ h: 'Data controller', p: [`Marc Mayol. Contact: ${CONTACT_EMAIL}.`] },
		],
	},
} as const;

/** La misma página en Markdown, para los agentes. */
export function homeMarkdown(lang: Lang): string {
	const t = UI[lang];
	return [
		`# Tokimichi`, '', `> ${t.h1}`, '', t.lede, '', t.status, '',
		`## ${t.roadTitle}`, '', ...t.road.map((s) => `- **${s.title}.** ${s.body}`), '',
		`## ${t.promiseTitle}`, '', ...t.promise.map((p) => `- **${p.name}.** ${p.text}`), '',
		`## ${t.nextTitle}`, '', t.nextNote, '', ...t.next.map((n) => `- ${n}`), '',
		`## ${t.faqTitle}`, '', ...t.faq.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
		`[${t.privacyLink}](${SITE}${ROUTES.privacy[lang]})`, '',
	].join('\n');
}

export function privacyMarkdown(lang: Lang): string {
	const t = PRIVACY[lang];
	return [`# ${t.title}`, '', t.updated, '', ...t.sections.flatMap((s) => [`## ${s.h}`, '', ...s.p.flatMap((p) => [p, ''])])].join('\n');
}
