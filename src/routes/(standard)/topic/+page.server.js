export async function load() {

	// List all modules in topic src directory
	// /src/routes/(standard)/topic/title/+page.*
	// Don't include the topic index page itself
	const files = Object.keys(import.meta.glob('/src/**/topic/**/*', { eager: true }))
		.filter((f) => f != '/src/routes/(standard)/topic/+page.svelte')

	// Strip out the intended URL & title from the full module path
	const topics = files.map((file) => {
		const f = {};
		f['url'] = file.substring(29).replace(/\/\+page.*/, '');
		f['title'] = f['url'].split('/').pop().split('-').join(' ');
		return f;
	});
	return { topics };
}
