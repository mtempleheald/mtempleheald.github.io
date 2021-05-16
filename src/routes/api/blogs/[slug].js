import { toPath } from './_pathResolver'
import * as fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const blog = fs.readFileSync('./src/blogs/' + toPath(params.slug), 'utf8');
	return {
		body: blog
	}
}