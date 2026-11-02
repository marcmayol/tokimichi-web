import { homeMarkdown } from '../i18n';
export const GET = () => new Response(homeMarkdown('es'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
