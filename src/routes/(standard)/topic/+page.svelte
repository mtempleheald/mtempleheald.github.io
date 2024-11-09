<script>
	
	/** @type {{data: import('./$types').PageData}} */
	let { data } = $props();
</script>

<h1>Topics</h1>

{#each data.topics as topic}
	<a href="/topic/{topic.url}">
		<span>{topic.title}</span>
		<hr />
	</a>
{/each}

<style>
</style>
