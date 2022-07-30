<script>
	export let blogs; // returned from shadow endpoint
</script>

<h1>Blogs</h1>

{#each blogs as blog}
	<a href="/blog/{blog.url}">
		<span>{blog.title}</span>
		<br />
		<span>{blog.date}</span>
		<hr />
	</a>
{/each}

<style>
</style>
