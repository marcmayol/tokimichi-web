import { ROUTES, SITE, type Lang, type PageKey } from './i18n';

export type LandingKey = Exclude<PageKey, 'home' | 'privacy'>;

interface Section {
	h: string;
	p?: string[];
	list?: string[];
	shot?: { name: string; alt: string };
}
export interface Landing {
	kind: 'app' | 'guide';
	anchor: string;
	blurb: string;
	meta: { title: string; description: string };
	h1Parts: [string, string, string];
	lede: string;
	shot: { name: string; alt: string };
	sections: Section[];
	limits?: { h: string; list: string[] };
	faq: { q: string; a: string }[];
	related: LandingKey[];
}

export const LANDING_KEYS: LandingKey[] = ['travel', 'travelGuide', 'voice', 'noStreaks', 'celebrations'];


export const LANDINGS: Record<Lang, Record<LandingKey, Landing>> = {
	es: {
		travel: {
			kind: 'app',
			anchor: 'App de diario de viaje',
			blurb: 'Cada día del viaje en su sitio, con texto, fotos, vídeo o voz.',
			meta: {
				title: 'App de diario de viaje para guardar cada día | Tokimichi',
				description: 'Tokimichi es una app de diario de viaje: guarda cada día con texto, fotos, vídeo o voz, con la hora del país en el que estás. Saldrá primero en Android.',
			},
			h1Parts: ['La app de diario de viaje para guardar ', 'cada día', '.'],
			lede: 'Tokimichi ordena tu viaje por días, con lo que escribes, tus fotos, tus vídeos y tu voz. Cuando vuelvas, abres aquel martes en Kioto y lo encuentras como lo dejaste.',
			shot: { name: 'dias', alt: 'Pantalla de un viaje con sus días desplegados: hoy, ayer y el día 1.' },
			sections: [
				{
					h: 'Cada día del viaje, en su sitio',
					p: [
						'Creas el viaje, escribes el destino y cada momento cae en su día. A medianoche empieza el siguiente, sin que tengas que tocar nada.',
						'Cada momento lleva la hora del país en el que estás. Las 19:04 de Tokio siguen siendo las 19:04 cuando lo relees en casa.',
					],
					shot: { name: 'experiencia', alt: 'Pantalla de un viaje con un momento guardado a las 19:04.' },
				},
				{
					h: 'Se guarda en segundos, o al volver',
					p: ['En ruta casi nunca hay tiempo para sentarse a escribir, así que cada momento admite lo que te venga mejor:'],
					list: [
						'Una frase, aunque sea corta.',
						'Una foto o un vídeo, de la cámara o de la galería.',
						'Tu voz: grabas, pausas si hace falta y sigues.',
						'Al volver, subes fotos, vídeos y audios de golpe, y cada archivo va a su día según su fecha.',
					],
				},
				{
					h: 'Te pregunta, sin agobiar',
					p: [
						'Eliges cuántas veces al día quieres que te pregunte, de ninguna a tres. Si no te apetece, tocas «Hoy no» y no queda rastro. Y cuando das el día por terminado, ya no te pregunta más hasta el siguiente.',
					],
					shot: { name: 'pregunta', alt: 'Pantalla con la pregunta «¿Cómo te sientes hoy?» y una respuesta a medio escribir.' },
				},
				{
					h: 'También en el avión',
					p: ['Hoy la app guarda todo en tu móvil y no necesita internet, así que funciona igual sin datos, sin wifi y en modo avión.'],
				},
			],
			limits: {
				h: 'Lo que no hace',
				list: [
					'No dibuja tu ruta ni usa el GPS. Si lo que buscas es un mapa del recorrido, hay apps pensadas para eso.',
					'No sirve para que tu familia siga el viaje: no tiene perfiles ni seguidores.',
					'Puedes guardar una copia en un archivo, pero aún no se puede restaurar en un móvil nuevo. Está en camino, junto con la copia automática.',
					'Todavía no se puede descargar: saldrá primero en Android, y después en iPhone.',
				],
			},
			faq: [
				{ q: '¿Puedo añadir algo a un día que ya pasó?', a: 'Sí. Abres ese día y añades lo que quieras, y si subes archivos cada uno se coloca en su día según su fecha.' },
				{ q: '¿Sirve para una escapada de fin de semana?', a: 'Sí. La escapada tiene su propio tipo y también se ordena por días.' },
				{ q: '¿Necesita internet durante el viaje?', a: 'No. Hoy todo se guarda en el móvil, sin conexión.' },
				{ q: '¿Tengo que compartir mi viaje con alguien?', a: 'No. Tokimichi no es una red social: lo que guardas es para ti.' },
			],
			related: ['travelGuide', 'voice', 'noStreaks'],
		},
		travelGuide: {
			kind: 'guide',
			anchor: 'Cómo guardar los recuerdos de un viaje',
			blurb: 'Qué anotar mientras viajas y cómo ordenarlo al volver.',
			meta: {
				title: 'Cómo guardar los recuerdos de un viaje para no olvidarlos',
				description: 'Qué anotar durante el viaje, qué no guarda una foto y cómo ordenarlo todo al volver, con una app, un cuaderno o una caja. Guía práctica y sin complicaciones.',
			},
			h1Parts: ['Cómo guardar los recuerdos de un viaje ', 'antes de que se borren', '.'],
			lede: 'Las fotos guardan cómo era el sitio, pero rara vez cómo fue el día. Esto es lo que merece la pena recoger sobre la marcha y cómo tenerlo a mano años después.',
			shot: { name: 'experiencia', alt: 'Pantalla de un viaje en Tokimichi con un momento guardado a las 19:04.' },
			sections: [
				{
					h: 'Lo primero que se olvida',
					p: [
						'El monumento lo recordarás, y además está en internet. Lo que se pierde enseguida es lo pequeño: el chiste de la cena, el nombre de aquel bar, lo perdidos que acabasteis por una mala indicación. Justo eso es lo que hace que un viaje sea tuyo.',
						'Por eso la regla más útil es apuntar pronto y poco. Una línea escrita esa misma noche vale más que una crónica que nunca llegas a empezar.',
					],
				},
				{
					h: 'Qué anotar cada día',
					p: ['No hace falta escribir bien. Con responder a una o dos de estas preguntas ya tienes el día:'],
					list: [
						'¿Qué te ha hecho reír hoy?',
						'¿Qué has comido y dónde?',
						'¿Qué ha salido mal, y cómo lo habéis arreglado?',
						'¿Quién te ha ayudado o te ha hablado?',
						'¿Cómo te sentías al acostarte?',
					],
				},
				{
					h: 'Graba también cómo sonaba',
					p: [
						'Una nota de voz de veinte segundos guarda cosas que no caben en una foto: el ruido de un mercado, la música de la calle, la risa de quien viaja contigo. Y hablar cuesta menos que escribir cuando llegas cansado.',
					],
				},
				{
					h: 'Elige un sitio y deja de dudar',
					p: ['Lo que más estropea un recuerdo es tenerlo repartido entre el carrete, tres chats y una libreta. Cualquiera de estas opciones funciona si la usas siempre:'],
					list: [
						'Un cuaderno de viaje: agradable de hojear, pero solo guarda lo que quepa en papel.',
						'Una caja por viaje, con entradas, billetes y una nota con el lugar y la fecha.',
						'Un álbum impreso: mejor al volver, cuando ya has elegido las fotos.',
						'Una app de diario de viaje: va siempre contigo y admite fotos, vídeo y voz.',
					],
				},
				{
					h: 'Ordénalo la primera semana',
					p: [
						'Al volver, reserva un rato antes de que la rutina se lo coma todo. Borra las fotos repetidas, separa lo que quieres conservar y haz una copia de seguridad fuera del móvil: si lo pierdes o se estropea, lo que solo estaba ahí se pierde con él.',
					],
				},
				{
					h: 'Cómo lo hace Tokimichi',
					p: [
						'Tokimichi sirve justo para esto. Guarda el viaje por días, con texto, fotos, vídeo o voz, te hace una pregunta si tú quieres y al volver puedes subir el resto, cada archivo en su día. Aún no ha salido: si te interesa, apúntate y te avisamos.',
					],
				},
			],
			faq: [
				{ q: '¿Qué hago si ya he vuelto y no apunté nada?', a: 'Empieza por las fotos: míralas en orden y escribe lo que te venga a la cabeza con cada una. Hoy recuerdas más de lo que recordarás dentro de un mes.' },
				{ q: '¿Cuánto hay que escribir al día?', a: 'Con una o dos frases basta. Si te pides más, lo normal es que lo abandones al tercer día.' },
				{ q: '¿Es mejor un cuaderno o una app?', a: 'Depende de ti. El cuaderno es más bonito y la app admite vídeo y voz y va siempre en el bolsillo. Lo importante es que uses uno solo.' },
			],
			related: ['travel', 'voice', 'celebrations'],
		},
		voice: {
			kind: 'app',
			anchor: 'App de diario de voz',
			blurb: 'Tu voz, guardada junto a las fotos de aquel día.',
			meta: {
				title: 'App de diario de voz para guardar tus recuerdos | Tokimichi',
				description: 'Un diario de voz para tus experiencias: graba cómo te sientes, pausa, sigue y escúchate después junto a las fotos de aquel día. Saldrá primero en Android.',
			},
			h1Parts: ['Un diario de voz para recordar ', 'cómo sonaba', '.'],
			lede: 'Hay cosas que cuesta escribir y se cuentan solas. En Tokimichi grabas tu voz en el momento y queda junto a las fotos y las notas de esa experiencia.',
			shot: { name: 'experiencia', alt: 'Pantalla de una experiencia con un momento guardado a las 19:04.' },
			sections: [
				{
					h: 'Por qué guardar tu voz',
					p: [
						'Dentro de diez años, oírte contar aquel día te llevará a él más rápido que leerlo. Se nota si estabas emocionado. Y se cuela lo que había alrededor: una canción, el mar, alguien que te interrumpe a media frase.',
					],
				},
				{
					h: 'Grabar es lo fácil',
					list: [
						'Abres la experiencia y empiezas a grabar.',
						'Si te interrumpen, pausas y sigues después.',
						'Terminas y se guarda con su fecha y su hora.',
						'Cuando quieras, lo reproduces desde ese mismo día.',
					],
				},
				{
					h: 'Los audios que ya tienes también valen',
					p: [
						'Si grabaste notas de voz con otra app, puedes subirlas a la experiencia. Cada audio se coloca en su día según su fecha, y si alguno no la tiene, queda en hoy y la app te lo dice.',
					],
				},
				{
					h: 'Tu voz, en su contexto',
					p: [
						'Un diario de voz suelto acaba siendo una lista de archivos. Aquí cada audio pertenece a algo que viviste, como tu viaje a Egipto o el cumpleaños de tu madre, y lo escuchas en el orden en que pasó, entre tus fotos, tus vídeos y lo que escribiste.',
					],
					shot: { name: 'dias', alt: 'Pantalla de una experiencia con sus días desplegados: hoy, ayer y el día 1.' },
				},
			],
			limits: {
				h: 'Lo que no hace',
				list: [
					'No transcribe tus audios a texto ni los resume con IA.',
					'No sigue tu estado de ánimo ni hace gráficas: no es una herramienta de terapia ni de salud.',
					'Necesita permiso para usar el micrófono, solo para grabar tu voz.',
					'Todavía no se puede descargar: saldrá primero en Android, y después en iPhone.',
				],
			},
			faq: [
				{ q: '¿Dónde se guardan los audios?', a: 'De momento, en tu móvil. Puedes guardar una copia en un archivo, con tus fotos y vídeos incluidos.' },
				{ q: '¿Puedo mezclar voz, fotos y texto?', a: 'Sí. En una misma experiencia cabe todo, y aparece en el orden en que pasó.' },
				{ q: '¿Puedo borrar una grabación?', a: 'Sí. Borras el momento y se elimina con sus archivos. No se puede deshacer, y la app te lo avisa antes.' },
			],
			related: ['travel', 'travelGuide', 'celebrations'],
		},
		noStreaks: {
			kind: 'app',
			anchor: 'Un diario sin rachas',
			blurb: 'Sin contadores, sin culpa y con los avisos que tú elijas.',
			meta: {
				title: 'Diario sin rachas ni culpa: escribe cuando quieras | Tokimichi',
				description: 'Una app de diario sin rachas: nada te riñe si un día no escribes, tú eliges cuántos avisos recibes y solo la abres cuando vives algo que quieres recordar.',
			},
			h1Parts: ['Un diario ', 'sin rachas', ' ni culpa.'],
			lede: 'Tokimichi no cuenta los días que llevas escribiendo. Tampoco te pide escribir cada día: la abres cuando estás viviendo algo que quieres recordar, ya sea un viaje a Lisboa o la Nochevieja con tus amigos, y el resto del tiempo te deja en paz.',
			shot: { name: 'pregunta', alt: 'Pantalla con la pregunta «¿Cómo te sientes hoy?» y una respuesta a medio escribir.' },
			sections: [
				{
					h: 'Por experiencias, no por fechas',
					p: [
						'Los diarios de siempre te ponen delante una página en blanco cada mañana. Aquí eliges entre siete tipos, del viaje a la quedada, y empiezas por algo concreto. Si no hay nada que contar, no hay nada pendiente.',
					],
					shot: { name: 'formulario', alt: 'Formulario de nueva experiencia con los tipos para elegir, de viaje a quedada.' },
				},
				{
					h: 'Los avisos los eliges tú',
					p: ['Cada experiencia tiene sus avisos, y la decisión es tuya:'],
					list: [
						'De ninguno a tres al día.',
						'«Hoy no» los cierra sin dejar rastro.',
						'Al finalizar el día, ya no te pregunta más.',
					],
				},
				{
					h: 'Nada que mantener',
					p: [
						'Sin rachas. Sin puntos. Sin seguidores que vean si has publicado. Si abandonas la app tres meses, al volver sigue todo donde estaba, y nadie te lo echa en cara.',
					],
				},
			],
			limits: {
				h: 'Cuándo no es para ti',
				list: [
					'Si te ayuda ver una racha para coger el hábito de escribir a diario, hay apps hechas para eso.',
					'No registra tu estado de ánimo ni muestra estadísticas.',
					'No tiene bloqueo con contraseña ni con huella dentro de la app.',
					'Todavía no se puede descargar: saldrá primero en Android, y después en iPhone.',
				],
			},
			faq: [
				{ q: '¿Pasa algo si no escribo en días?', a: 'Nada. Ni contadores que se reinician ni mensajes para que vuelvas.' },
				{ q: '¿Puedo quitar todos los avisos?', a: 'Sí. Puedes dejar una experiencia sin avisos y añadir momentos solo cuando quieras.' },
				{ q: '¿Sirve como diario personal de todos los días?', a: 'Puedes usarla así con el tipo «otra cosa», pero está pensada para guardar experiencias concretas.' },
			],
			related: ['travel', 'travelGuide', 'voice'],
		},
		celebrations: {
			kind: 'app',
			anchor: 'Recuerdos de cumpleaños y fiestas',
			blurb: 'Lo que pasó aquella noche, en el orden en que pasó.',
			meta: {
				title: 'Guarda los recuerdos de tus cumpleaños y fiestas | Tokimichi',
				description: 'Guarda cumpleaños, bodas o Nochevieja con fotos, vídeo, voz y texto, en el orden en que pasaron, y vuelve a ellos cuando quieras. Saldrá primero en Android.',
			},
			h1Parts: ['Tus cumpleaños y fiestas, ', 'tal como fueron', '.'],
			lede: 'Al día siguiente quedan cuarenta fotos en el carrete, mezcladas con capturas y tickets. Tokimichi reúne cada celebración en un solo sitio, con lo que dijiste y sentiste aquella noche.',
			shot: { name: 'inicio', alt: 'Pantalla de inicio de Tokimichi con un cumpleaños, con la foto de una tarta, y un viaje a Egipto.' },
			sections: [
				{
					h: 'Una celebración, un solo bloque',
					p: [
						'Una fiesta no se corta a medianoche. Todo lo que guardes queda seguido, aunque acabes a las cinco de la mañana con los zapatos en la mano, y cada momento lleva su hora.',
					],
				},
				{
					h: 'Para el tuyo y para el de los demás',
					p: ['Le pones nombre y ya está. Sirve para lo que quieras celebrar:'],
					list: [
						'Tu cumpleaños, o el de tu madre.',
						'Una boda, Nochevieja o San Juan.',
						'Una tarde con los amigos de siempre.',
						'Tu primer concierto, o cualquier otra cosa que no tenga tipo.',
					],
					shot: { name: 'formulario', alt: 'Formulario de nueva experiencia con los tipos para elegir, de viaje a quedada.' },
				},
				{
					h: 'Lo que la foto no cuenta',
					p: [
						'La foto del brindis no dice quién hizo el discurso ni de qué os reíais. Para eso está la frase al momento, el vídeo de las velas o la nota de voz de camino a casa. Si te pregunta en mal momento, tocas «Hoy no».',
					],
				},
				{
					h: 'Y al año siguiente, vuelves',
					p: [
						'Abres la experiencia y ahí está todo. En orden. También puedes subir después las fotos y vídeos de la noche, y añadir lo que te hayan pasado tus amigos por el chat.',
					],
				},
			],
			limits: {
				h: 'Lo que no hace',
				list: [
					'No es un álbum compartido: los invitados no pueden subir sus fotos a tu experiencia.',
					'La película y el álbum con tus recuerdos están en camino, todavía no existen.',
					'Todavía no se puede descargar: saldrá primero en Android, y después en iPhone.',
				],
			},
			faq: [
				{ q: '¿Puedo añadir fotos al día siguiente?', a: 'Sí. Puedes subir fotos, vídeos y audios cuando quieras, y añadir más momentos después.' },
				{ q: '¿Sirve para una boda de varios días?', a: 'Sí. Las fiestas y celebraciones son un bloque continuo, y si dura más de un día cada momento muestra su fecha y su hora.' },
				{ q: '¿Quién puede ver lo que guardo?', a: 'Solo tú. No hay perfiles, ni seguidores, ni nada público.' },
			],
			related: ['travelGuide', 'noStreaks', 'voice'],
		},
	},
	en: {
		travel: {
			kind: 'app',
			anchor: 'Travel journal app',
			blurb: 'Every day of the trip in its place, with text, photos, video or voice.',
			meta: {
				title: 'Travel journal app that saves every day | Tokimichi',
				description: 'Tokimichi is a travel journal app: save each day with text, photos, video or voice, in the local time of wherever you are. Coming to Android first.',
			},
			h1Parts: ['The travel journal app that keeps ', 'every day', '.'],
			lede: 'Tokimichi sorts your trip by day, with what you write, your photos, your videos and your voice. When you’re home, you open that Tuesday in Kyoto and it’s just as you left it.',
			shot: { name: 'dias', alt: `Screen of a trip with its days expanded: today, yesterday and day 1.` },
			sections: [
				{
					h: 'Every day of the trip, in its place',
					p: [
						'You create the trip, type the destination, and each moment lands on its day. At midnight the next one begins, without you touching anything.',
						'Every moment carries the local time of the country you’re in. 19:04 in Tokyo is still 19:04 when you reread it at home.',
					],
					shot: { name: 'experiencia', alt: `Screen of a trip with a moment saved at 19:04.` },
				},
				{
					h: 'Saved in seconds, or once you’re back',
					p: ['On the road there’s rarely time to sit down and write, so each moment takes whatever suits you:'],
					list: [
						'A sentence, however short.',
						'A photo or video, from the camera or your gallery.',
						'Your voice: record, pause if you need to, and carry on.',
						'Back home, upload photos, videos and audio in one go, and each file finds its day from its date.',
					],
				},
				{
					h: 'It asks, and it doesn’t nag',
					p: [
						'You choose how many times a day it asks, from none to three. Not in the mood? Tap “Not today” and it leaves no trace. Once you call the day done, it stops asking until the next one.',
					],
					shot: { name: 'pregunta', alt: `Screen with the question “How are you feeling today?” and an answer being written.` },
				},
				{
					h: 'Works on the plane too',
					p: ['Today the app keeps everything on your phone and doesn’t need the internet, so it works the same with no data, no wifi and in airplane mode.'],
				},
			],
			limits: {
				h: 'What it doesn’t do',
				list: [
					'It doesn’t draw your route or use GPS. If you’re after a map of the journey, other apps are built for that.',
					'It won’t let your family follow along: there are no profiles or followers.',
					'You can save a copy to a file, but it can’t be restored on a new phone yet. That’s on the way, along with automatic backup.',
					'You can’t download it yet: Android comes first, then iPhone. It launches in English and Spanish.',
				],
			},
			faq: [
				{ q: 'Can I add something to a day that’s gone?', a: 'Yes. Open that day and add what you like, and any files you upload go to their own day based on their date.' },
				{ q: 'Does it work for a weekend away?', a: 'Yes. Getaways have their own type and are sorted by day too.' },
				{ q: 'Does it need internet during the trip?', a: 'No. Today everything is saved on the phone, offline.' },
				{ q: 'Do I have to share my trip with anyone?', a: 'No. Tokimichi isn’t a social network: what you save is for you.' },
			],
			related: ['travelGuide', 'voice', 'noStreaks'],
		},
		travelGuide: {
			kind: 'guide',
			anchor: 'How to keep travel memories',
			blurb: 'What to note while you travel and how to sort it when you’re back.',
			meta: {
				title: 'How to keep travel memories before you forget them',
				description: 'What to note during a trip, what a photo can’t hold, and how to sort it all when you’re home, with an app, a notebook or a box. A short, practical guide.',
			},
			h1Parts: ['How to keep travel memories ', 'before they fade', '.'],
			lede: 'Photos keep what a place looked like, but rarely how the day felt. Here’s what’s worth catching as you go, and how to have it within reach years from now.',
			shot: { name: 'experiencia', alt: `Screen of a trip in Tokimichi with a moment saved at 19:04.` },
			sections: [
				{
					h: 'What goes first',
					p: [
						'You’ll remember the monument, and the internet will too. What slips away is the small stuff: the joke at dinner, the name of that bar, how lost you got after one bad direction. That’s exactly what makes a trip yours.',
						'So the most useful rule is to note things early and briefly. One line written that night beats the full account you never get round to.',
					],
				},
				{
					h: 'What to note each day',
					p: ['You don’t need to write well. Answer one or two of these and you’ve got the day:'],
					list: [
						'What made you laugh today?',
						'What did you eat, and where?',
						'What went wrong, and how did you fix it?',
						'Who helped you or talked to you?',
						'How did you feel going to bed?',
					],
				},
				{
					h: 'Record how it sounded too',
					p: [
						'A twenty-second voice note holds what a photo can’t: the noise of a market, music in the street, the laugh of whoever you’re travelling with. And when you get in tired, talking is easier than writing.',
					],
				},
				{
					h: 'Pick one place and stop deciding',
					p: ['Nothing spoils a memory like having it scattered across your camera roll, three chats and a notebook. Any of these works if you stick with it:'],
					list: [
						'A travel notebook: lovely to leaf through, but it only holds what fits on paper.',
						'A box for each trip, with tickets, passes and a note of the place and date.',
						'A printed album: best once you’re home and have chosen the photos.',
						'A travel journal app: always on you, and it takes photos, video and voice.',
					],
				},
				{
					h: 'Sort it in the first week',
					p: [
						'Once you’re back, set aside some time before routine swallows it all. Delete duplicate photos, set aside what you want to keep, and back it up somewhere other than your phone: if the phone is lost or breaks, whatever lived only there goes with it.',
					],
				},
				{
					h: 'How Tokimichi does it',
					p: [
						'Tokimichi does exactly this. It keeps a trip by day, with text, photos, video or voice, asks you a question if you want it to, and lets you upload the rest once you’re home, each file on its day. It isn’t out yet: if you’re interested, sign up and we’ll let you know.',
					],
				},
			],
			faq: [
				{ q: 'What if I’m already home and noted nothing?', a: 'Start with the photos: go through them in order and write whatever comes to mind for each. You remember more today than you will in a month.' },
				{ q: 'How much should I write each day?', a: 'A sentence or two is enough. Ask for more and you’ll probably give up by day three.' },
				{ q: 'Is a notebook or an app better?', a: 'That’s down to you. A notebook is nicer to hold; an app takes video and voice and is always in your pocket. What matters is using just one.' },
			],
			related: ['travel', 'voice', 'celebrations'],
		},
		voice: {
			kind: 'app',
			anchor: 'Voice diary app',
			blurb: 'Your voice, kept next to the photos from that day.',
			meta: {
				title: 'Voice diary app to keep your memories | Tokimichi',
				description: 'A voice diary for your experiences: record how you feel, pause, carry on, and listen later alongside the photos from that day. Coming to Android first.',
			},
			h1Parts: ['A voice diary to remember ', 'how it sounded', '.'],
			lede: 'Some things are hard to write and easy to say. In Tokimichi you record your voice in the moment, and it stays next to the photos and notes from that experience.',
			shot: { name: 'experiencia', alt: `Screen of an experience with a moment saved at 19:04.` },
			sections: [
				{
					h: 'Why keep your voice',
					p: [
						'Ten years from now, hearing yourself tell that day will take you back faster than reading about it. You can hear if you were excited. And what was around you slips in: a song, the sea, someone interrupting mid-sentence.',
					],
				},
				{
					h: 'Recording is the easy part',
					list: [
						'Open the experience and start recording.',
						'If someone interrupts, pause and carry on later.',
						'Finish, and it’s saved with its date and time.',
						'Play it back from that same day whenever you like.',
					],
				},
				{
					h: 'The audio you already have counts too',
					p: [
						'If you recorded voice notes with another app, you can upload them to the experience. Each one goes to its day based on its date, and if one has no date, it lands on today and the app tells you.',
					],
				},
				{
					h: 'Your voice, in context',
					p: [
						'A standalone voice diary tends to end up as a list of files. Here each recording belongs to something you lived, like your trip to Egypt or your mum’s birthday, and you hear it in the order it happened, among your photos, videos and what you wrote.',
					],
					shot: { name: 'dias', alt: `Screen of an experience with its days expanded: today, yesterday and day 1.` },
				},
			],
			limits: {
				h: 'What it doesn’t do',
				list: [
					'It doesn’t transcribe your recordings or summarise them with AI.',
					'It doesn’t track your mood or draw charts: it isn’t a therapy or health tool.',
					'It needs microphone permission, only to record your voice.',
					'You can’t download it yet: Android comes first, then iPhone. It launches in English and Spanish.',
				],
			},
			faq: [
				{ q: 'Where are the recordings stored?', a: 'For now, on your phone. You can save a copy to a file, with your photos and videos included.' },
				{ q: 'Can I mix voice, photos and text?', a: 'Yes. It all fits in one experience and appears in the order it happened.' },
				{ q: 'Can I delete a recording?', a: 'Yes. Delete the moment and its files go with it. It can’t be undone, and the app warns you first.' },
			],
			related: ['travel', 'travelGuide', 'celebrations'],
		},
		noStreaks: {
			kind: 'app',
			anchor: 'A journal app with no streaks',
			blurb: 'No counters, no guilt, and only the reminders you choose.',
			meta: {
				title: 'Journal app with no streaks or guilt | Tokimichi',
				description: 'A journal app with no streaks: nothing scolds you for skipping a day, you pick how many reminders you get, and you open it when something is worth keeping.',
			},
			h1Parts: ['A journal app with ', 'no streaks', ' and no guilt.'],
			lede: 'Tokimichi doesn’t count how many days you’ve been writing. It doesn’t ask you to write every day either: you open it when you’re living something you want to remember, like a trip to Lisbon or New Year’s Eve with friends, and the rest of the time it leaves you alone.',
			shot: { name: 'pregunta', alt: `Screen with the question “How are you feeling today?” and an answer being written.` },
			sections: [
				{
					h: 'Built around experiences, not dates',
					p: [
						'Traditional journals hand you a blank page every morning. Here you pick from seven types, trip to get-together, and start from something specific. With nothing to tell, nothing is overdue.',
					],
					shot: { name: 'formulario', alt: `New experience form with the types to choose from, trip to get-together.` },
				},
				{
					h: 'You choose the reminders',
					p: ['Each experience has its own reminders, and the call is yours:'],
					list: [
						'From none to three a day.',
						'“Not today” dismisses them and leaves no trace.',
						'Once you finish the day, it stops asking.',
					],
				},
				{
					h: 'Nothing to keep up',
					p: [
						'No streaks. No points. No followers watching whether you’ve posted. Drop the app for three months and it’s all where you left it when you come back, with nobody holding it against you.',
					],
				},
			],
			limits: {
				h: 'When it’s not for you',
				list: [
					'If seeing a streak helps you build a daily writing habit, there are apps made for that.',
					'It doesn’t log your mood or show statistics.',
					'It has no password or fingerprint lock inside the app.',
					'You can’t download it yet: Android comes first, then iPhone. It launches in English and Spanish.',
				],
			},
			faq: [
				{ q: 'What happens if I don’t write for days?', a: 'Nothing. No counter resets and no messages asking you to come back.' },
				{ q: 'Can I turn off all reminders?', a: 'Yes. You can leave an experience with no reminders and add moments only when you want to.' },
				{ q: 'Does it work as an everyday journal?', a: 'You can use it that way with the “something else” type, but it’s designed for keeping specific experiences.' },
			],
			related: ['travel', 'travelGuide', 'voice'],
		},
		celebrations: {
			kind: 'app',
			anchor: 'Birthday and party memories',
			blurb: 'What happened that night, in the order it happened.',
			meta: {
				title: 'Keep your birthday and party memories | Tokimichi',
				description: 'Keep birthdays, weddings and New Year’s Eve with photos, video, voice and text, in the order they happened, and go back whenever you like. Android first.',
			},
			h1Parts: ['Your birthdays and parties, ', 'just as they were', '.'],
			lede: 'The next day there are forty photos on your camera roll, mixed in with screenshots and receipts. Tokimichi gathers each celebration in one place, with what you said and felt that night.',
			shot: { name: 'inicio', alt: `Tokimichi home screen with a birthday, showing a photo of a cake, and a trip to Egypt.` },
			sections: [
				{
					h: 'One celebration, one block',
					p: [
						'A party doesn’t stop at midnight. Everything you save stays together, even if you finish at five in the morning with your shoes in your hand, and each moment keeps its time.',
					],
				},
				{
					h: 'For yours and for everyone else’s',
					p: ['Give it a name and you’re done. It works for anything you want to celebrate:'],
					list: [
						'Your birthday, or your mum’s.',
						'A wedding or New Year’s Eve.',
						'An afternoon with your oldest friends.',
						'Your first concert, or anything else without a type.',
					],
					shot: { name: 'formulario', alt: `New experience form with the types to choose from, trip to get-together.` },
				},
				{
					h: 'What the photo leaves out',
					p: [
						'The photo of the toast doesn’t say who gave the speech or what you were laughing at. That’s what a line in the moment, a video of the candles or a voice note on the way home are for. If it asks at a bad time, tap “Not today”.',
					],
				},
				{
					h: 'And next year, you go back',
					p: [
						'Open the experience and it’s all there. In order. You can also upload the night’s photos and videos later, and add whatever friends send you in the chat.',
					],
				},
			],
			limits: {
				h: 'What it doesn’t do',
				list: [
					'It isn’t a shared album: guests can’t upload their photos to your experience.',
					'The film and album of your memories are on the way and don’t exist yet.',
					'You can’t download it yet: Android comes first, then iPhone. It launches in English and Spanish.',
				],
			},
			faq: [
				{ q: 'Can I add photos the next day?', a: 'Yes. You can upload photos, videos and audio whenever you like, and add more moments later.' },
				{ q: 'Does it work for a wedding over several days?', a: 'Yes. Parties and celebrations are one continuous block, and if it runs over a day, each moment shows its date and time.' },
				{ q: 'Who can see what I save?', a: 'Only you. There are no profiles, followers or anything public.' },
			],
			related: ['travelGuide', 'noStreaks', 'voice'],
		},
	},
};

/** La misma landing en Markdown, para los agentes. */
export function landingMarkdown(lang: Lang, key: LandingKey): string {
	const l = LANDINGS[lang][key];
	return [
		`# ${l.h1Parts.join('')}`, '', l.lede, '',
		...l.sections.flatMap((s) => [`## ${s.h}`, '', ...(s.p ?? []).flatMap((p) => [p, '']), ...(s.list ?? []).map((i) => `- ${i}`), ...(s.list ? [''] : [])]),
		...(l.limits ? [`## ${l.limits.h}`, '', ...l.limits.list.map((i) => `- ${i}`), ''] : []),
		...l.faq.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
		`[Tokimichi](${SITE}${ROUTES.home[lang]})`, '',
		...l.related.map((r) => `- [${LANDINGS[lang][r].anchor}](${SITE}${ROUTES[r][lang]})`), '',
	].join('\n');
}
