<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const blogs = await fetch('/api/blogs.json').then((res) => res.json());
		return {
			props: {
				blogs
			}
		};
	}
</script>

<script>
    export let blogs;
	function titleFrom(slug) {
		const arr = slug.split('-')
		return arr.slice(3).join(' ')
	}
	function dateFrom(slug) {
		const arr = slug.split('-')
		return `${arr[2]}/${arr[1]}/${arr[0]}`
	}
</script>


<h1>Blogs</h1>


{#each blogs as blog}
    <a href="/blog/{blog}">
		<span>{titleFrom(blog)}</span>
		<br/>
		<span>{dateFrom(blog)}</span>
		<hr/>
	</a>
{/each}


<style>

</style>