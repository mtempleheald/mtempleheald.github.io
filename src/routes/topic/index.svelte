<script>
    export let topics; // returned from shadow endpoint
</script>

<h1>Topics</h1>

{#each topics as topic}
    <a href="/topic/{topic.url}">
		<span>{topic.title}</span>
		<hr/>
	</a>
{/each}

<style>

</style>