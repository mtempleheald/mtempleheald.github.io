export async function load() {

	// List all modules in blog src directory
	// /src/routes/(standard)/blog/yyyy/mm/dd/title/+page.*
	// Don't include the blog index page itself
	const files = Object.keys(import.meta.glob('/src/**/blog/**/*', { eager: true }))
		.filter((f) => f != '/src/routes/(standard)/blog/+page.svelte')
		.reverse();

	const blogs = files.map((file) => {
		const f = {};
		f['url'] = file.substring(28).replace(/\/\+page.*/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		const date_elements = f['url'].split('/');
		f['date'] = `${date_elements[2]}/${date_elements[1]}/${date_elements[0]}`;
		return f;
	});

	return { blogs };
}
