import { privacyMarkdown } from '../../i18n';
export const GET = () => new Response(privacyMarkdown('es'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
