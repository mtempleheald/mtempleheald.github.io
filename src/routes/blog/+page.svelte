<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Blogs</h1>

{#each data.blogs as blog}
	<a href="/blog/{blog.url}">
		<span>{blog.title}</span>
		<br />
		<span>{blog.date}</span>
		<hr />
	</a>
{/each}

<style>
</style>
