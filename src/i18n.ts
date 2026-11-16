import { PAGES } from './routes.mjs';
import { LANDINGS, LANDING_KEYS } from './landings';

export const SITE = 'https://tokimichi.app';
export const CONTACT_EMAIL = 'hola@tokimichi.app';
// El webhook de la lista de espera en n8n.
export const WAITLIST_ENDPOINT = 'https://vps24874.cubepath.net/webhook/tokimichi-lista-espera';

export type Lang = 'en' | 'es';
export type PageKey = 'home' | 'privacy' | 'travel' | 'travelGuide' | 'voice' | 'noStreaks' | 'celebrations';

/** Las rutas de cada página por idioma, definidas en routes.mjs para compartirlas con el sitemap. */
export const ROUTES = PAGES as Record<PageKey, Record<Lang, string>>;
export const PAGE_UPDATED = Object.fromEntries(Object.entries(PAGES).map(([key, page]) => [key, page.updated])) as Record<PageKey, string>;

export const altLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

export const UI = {
	es: {
		langName: 'English',
		home: 'Tokimichi, inicio',
		toLuna: 'Modo Luna',
		toMochi: 'Modo Mochi',
		meta: {
			title: 'Tokimichi: la app para guardar y revivir tus recuerdos más felices',
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
		exploreTitle: 'Empieza por lo que quieras guardar',
		relatedTitle: 'Sigue por aquí',
		crumbLabel: 'Estás en',
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
			title: 'Tokimichi: the app to save and relive your happiest memories',
			description:
				'The app where your experiences stay alive: save trips, parties and birthdays with text, photos, video or voice, and relive them anytime. Android first.',
		},
		status: 'It isn’t out yet: Android comes first, in English and Spanish.',
		h1: 'Relive your happiest memories.',
		h1Parts: ['Relive your ', 'happiest memories', '.'],
		lede: 'Tokimichi is the app where your experiences stay alive. You save what you feel as you live it, and whenever you like you go back to that trip, that birthday or that night with friends, just as it was.',
		heroAlt: 'Tokimichi home screen with two experiences in progress: a birthday, with a photo of a cake, and a trip to Egypt, with the pyramids.',
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
		roadNote: '',
		road: [
			{ tag: '09:12', shot: 'formulario', title: 'Start something lovely', body: 'A trip, a getaway, a day trip, a birthday, a party, a get-together or whatever comes to mind.', alt: 'New experience form with the types to choose from, trip to get-together, and Egypt typed as the destination.' },
			{ tag: '15:32', shot: 'experiencia', title: 'Save what you feel', body: 'A sentence, a photo, a video or your voice, in seconds and with the local time of the country you’re in.', alt: 'Screen of an experience with a moment saved at 19:04.' },
			{ tag: '19:04', shot: 'pregunta', title: 'Tokimichi asks you', body: 'Up to three times a day, and it never nags. Not in the mood? Tap “Not today” and it leaves no trace.', alt: 'Screen with the question “How are you feeling today?” and an answer being written.' },
			{ tag: 'A year', shot: 'dias', title: 'Then one day, you go back', body: 'Open that day and it’s all there: what you wrote, your photos, videos and voice, in the order it happened.', alt: 'Screen of an experience with its days expanded: today, yesterday and day 1.' },
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
		exploreTitle: 'Start with what you want to keep',
		relatedTitle: 'Keep reading',
		crumbLabel: 'You are here',
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
			description: 'La app guarda todo en tu móvil y, si quieres, una copia en tu propio Google Drive. La web solo te pide el correo, para la lista de espera; aquí explicamos para qué se usa y cómo borrarlo.',
		},
		title: 'Privacidad',
		updated: 'Actualizada el 17 de noviembre de 2026',
		sections: [
			{ h: 'La app', p: ['Lo que guardas en Tokimichi se queda en tu móvil. Solo sale de ahí si haces tú una copia donde elijas, si activas la copia en Google Drive o si nos mandas el registro de la app. Si esto cambia, actualizaremos esta página antes de que te afecte.'] },
			{ h: 'La copia en Google Drive', p: ['Si en Ajustes inicias sesión con Google, Tokimichi guarda cada día una copia de tus experiencias, con sus fotos, vídeos y audios, en una carpeta «Tokimichi» de tu propio Google Drive. Va directamente de tu móvil a tu Drive: no pasa por ningún servidor nuestro y nosotros no podemos verla.', 'Para eso pide dos permisos: drive.file, que solo deja ver y cambiar los archivos que crea la propia app, nunca el resto de tu Drive, y tu dirección de correo, para enseñarte en qué cuenta se copia. El uso que Tokimichi hace de la información recibida de las API de Google cumple la Política de Datos de Usuario de los Servicios de API de Google, incluidos los requisitos de uso limitado.', 'Puedes cerrar la sesión en Ajustes cuando quieras: la app deja de copiar y retira el permiso. Lo ya copiado sigue en tu Drive hasta que lo borres tú.'] },
			{ h: 'Si algo falla: el registro de la app', p: ['Para poder arreglar fallos, la app apunta en tu móvil lo que hace y lo que falla: cuándo se abre, qué se sube o se copia, cuántos archivos, los errores y si se cerró de golpe. No apunta lo que escribes, ni tus fotos, vídeos o audios. Ocupa como mucho 256 KB y lo más antiguo se va borrando solo.', 'Ese registro no sale del móvil a menos que lo envíes tú. Puedes hacerlo desde Ajustes > «Si algo falla», o cuando la app te lo ofrece tras cerrarse de golpe: se abre tu correo (u otra app que elijas) con el registro adjunto, y ves lo que mandas antes de enviarlo. Lleva también la versión de la app, la del sistema, el modelo de móvil y el idioma.', 'Lo recibimos por correo electrónico, gestionado con Gmail de Google, y lo usamos solo para encontrar y arreglar el fallo. La base legal es tu consentimiento, al enviarlo. Lo borramos cuando el fallo está resuelto, o antes si nos lo pides.'] },
			{ h: 'La lista de espera', p: ['Si te apuntas, guardamos tu correo, el idioma de la página, la página desde la que te apuntaste y la fecha.', 'Lo usamos solo para avisarte de que la app ha salido. La base legal es tu consentimiento, que retiras cuando quieras.', 'Se guarda en un servidor privado que contratamos, y no se vende ni se cede a nadie. Lo borramos después de enviar el aviso, o antes si nos lo pides. Ese servidor puede registrar datos técnicos de la conexión, como la dirección IP, por seguridad.'] },
			{ h: 'La web', p: ['No hay cookies, analítica ni publicidad. Las fuentes están alojadas aquí mismo.', 'La web se aloja en GitHub Pages, y GitHub registra datos técnicos de las visitas, como la dirección IP, para operar y proteger su servicio.', 'Si eliges Modo Luna o Modo Mochi, esa preferencia se guarda solo en tu navegador.'] },
			{ h: 'Tus derechos', p: [`Puedes pedir acceso, rectificación, borrado, limitación u oposición, y retirar tu consentimiento, escribiendo a ${CONTACT_EMAIL}. Si crees que no se ha respetado tu privacidad, puedes reclamar ante la Agencia Española de Protección de Datos.`] },
			{ h: 'Responsable', p: [`Marc Mayol. Contacto: ${CONTACT_EMAIL}.`] },
		],
	},
	en: {
		meta: {
			title: 'Tokimichi privacy: what is stored and why',
			description: 'The app keeps everything on your phone and, if you want, a copy in your own Google Drive. The website only asks for your email, for the waiting list. Here’s what happens to it and how to delete it.',
		},
		title: 'Privacy',
		updated: 'Updated on 17 November 2026',
		sections: [
			{ h: 'The app', p: ['What you save in Tokimichi stays on your phone. It only leaves if you make a copy yourself, wherever you choose, turn on the Google Drive backup or send us the app’s log. If that changes, we’ll update this page before it affects you.'] },
			{ h: 'The Google Drive backup', p: ['If you sign in with Google in Settings, Tokimichi saves a copy of your experiences each day, with their photos, videos and audio, to a “Tokimichi” folder in your own Google Drive. It goes straight from your phone to your Drive: it never passes through a server of ours and we can’t see it.', 'To do that it asks for two permissions: drive.file, which only lets it see and change the files the app itself creates, never the rest of your Drive, and your email address, to show you which account it backs up to. Tokimichi’s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.', 'You can sign out in Settings at any time: the app stops backing up and gives up the permission. What’s already copied stays in your Drive until you delete it.'] },
			{ h: 'If something goes wrong: the app’s log', p: ['So that bugs can be fixed, the app notes on your phone what it does and what fails: when it opens, what is imported or backed up, how many files, errors and whether it closed unexpectedly. It doesn’t note what you write, or your photos, videos or audio. It takes up to 256 KB and the oldest part is deleted on its own.', 'That log never leaves your phone unless you send it, from Settings > “If something goes wrong” or when the app offers it after closing unexpectedly. Your email (or another app you choose) then opens with the log attached, and you can see what you send before sending it. It also includes the app version, the system version, the phone model and the language.', 'We receive it by email, handled with Google’s Gmail, and use it only to find and fix the problem. The legal basis is your consent, when you send it. We delete it once the problem is fixed, or sooner if you ask.'] },
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
		`## ${t.exploreTitle}`, '', ...LANDING_KEYS.map((key) => `- [${LANDINGS[lang][key].anchor}](${SITE}${ROUTES[key][lang]}): ${LANDINGS[lang][key].blurb}`), '',
		`[${t.privacyLink}](${SITE}${ROUTES.privacy[lang]})`, '',
	].join('\n');
}

export function privacyMarkdown(lang: Lang): string {
	const t = PRIVACY[lang];
	return [`# ${t.title}`, '', t.updated, '', ...t.sections.flatMap((s) => [`## ${s.h}`, '', ...s.p.flatMap((p) => [p, ''])])].join('\n');
}
