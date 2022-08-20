// Shadow Endpoint for index.svelte
export async function load() {
	const files = Object.keys(import.meta.globEager('./**/*')) // ./yyyy/mm/dd/title/+page.ext
		.filter((f) => f != './+page.svelte' && f != './+page.server.js');

	const topics = files.map((file) => {
		const f = {};
		f['url'] = file.replace(/^.\//, '').replace(/\/\+page.*/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		return f;
	});
	return { topics };
}
