import { homeMarkdown } from '../i18n';
export const GET = () => new Response(homeMarkdown('en'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
