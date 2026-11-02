import { ROUTES, SITE } from '../i18n';

const text = `# Tokimichi

> The app where your experiences stay alive: save trips, parties and anything else you want to remember, and relive them whenever you like. It asks up to three questions a day. For now, everything is stored on the phone. It isn't out yet: Android comes first, in English and Spanish, and there is no release date.

## Pages

- [Home](${SITE}/index.md): what the app does and answers to common questions
- [Portada en español](${SITE}/es.md): la misma página en español
- [Privacy](${SITE}/privacy.md): what the app and the website store
- [Privacidad](${SITE}/es/privacidad.md): la misma política en español

## Waiting list

People can join at ${SITE}${ROUTES.home.en} with their email and explicit consent.
`;

export const GET = () => new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
