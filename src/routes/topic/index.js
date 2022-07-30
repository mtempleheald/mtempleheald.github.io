// Shadow Endpoint for index.svelte
export async function GET() {
	const files = Object.keys(import.meta.globEager('./**/*')) // ./yyyy/mm/dd/title.ext
		.filter((f) => f != './index.svelte' && f != './index.js');

	const topics = files.map((file) => {
		const f = {};
		f['url'] = file.replace(/^.\//, '').replace(/\..*$/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		return f;
	});
	return {
		body: { topics }
	};
}
