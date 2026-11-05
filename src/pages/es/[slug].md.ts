import type { APIContext } from 'astro';
import { LANDING_KEYS, landingMarkdown, type LandingKey } from '../../landings';
import { ROUTES } from '../../i18n';

export function getStaticPaths() {
	return LANDING_KEYS.map((id) => ({ params: { slug: ROUTES[id].es.replace('/es/', '').replaceAll('/', '') }, props: { id } }));
}
export const GET = ({ props }: APIContext) =>
	new Response(landingMarkdown('es', (props as { id: LandingKey }).id), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
