<script context="module">
    import { toPath } from '../api/blogs/_pathResolver'
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		
        const slug = page.params.slug
        const target = '/api/blogs/' + page.params.slug
        let blog;
        await fetch(target)
            .then(resp => resp.text())
            .then(data => blog = data)
		return {
			props: {
                blog
			}
		};
	}
</script>

<script>
    //import { compile } from 'mdsvex';
  import snarkdown from 'snarkdown';

    export let blog;
	// function slugDisplay(slug) {
	// 	const arr = slug.split('-')
	// 	return `${arr.slice(3).join(' ')} ${arr[2]}/${arr[1]}/${arr[0]}`
	// }
</script>

{@html snarkdown(blog)}

