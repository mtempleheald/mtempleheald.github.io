import { toPath } from './_pathResolver'
import * as fs from 'fs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	let srcFile = toPath(params.slug);
	const blog = srcFile ? fs.readFileSync('./src/blogs/' + srcFile, 'utf8') : '';
	return {
		body: blog
	}
}