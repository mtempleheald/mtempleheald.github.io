// Shadow Endpoint for index.svelte
export async function load() {
	const files = Object.keys(import.meta.globEager('./**/*')) // ./yyyy/mm/dd/title/+page.ext
		.filter((f) => f != './+page.svelte' && f != './+page.server.js')
		.reverse();

	const blogs = files.map((file) => {
		const f = {};
		f['url'] = file.replace(/^.\//, '').replace(/\/\+page.*/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		const date_elements = f['url'].split('/');
		f['date'] = `${date_elements[2]}/${date_elements[1]}/${date_elements[0]}`;
		console.log(f);
		return f;
	});

	return { blogs };
}
