import * as fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const topic = fs.readFileSync(`./src/topics/${params.slug}.md`, 'utf8');
	return {
		body: topic
	}
}