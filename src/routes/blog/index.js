// Shadow Endpoint for index.svelte
export async function GET() {
	const files = Object.keys(import.meta.globEager('./**/*')) // ./yyyy/mm/dd/title.ext
		.filter((f) => f != './index.svelte' && f != './index.js')
		.reverse();

	const blogs = files.map((file) => {
		const f = {};
		f['url'] = file.replace(/^.\//, '').replace(/\..*$/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		const date_elements = f['url'].split('/');
		f['date'] = `${date_elements[2]}/${date_elements[1]}/${date_elements[0]}`;
		return f;
	});

	return {
		body: { blogs }
	};
}
