<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const topics = await fetch('/api/topics.json').then((res) => res.json());
		return {
			props: {
				topics
			}
		};
	}
</script>

<script>
    export let topics;
</script>


<h1>Topics</h1>


{#each topics as topic}
    <a href="/topic/{topic}">
		<span>{topic.replace(/\-/g,' ')}</span>
		<hr/>
	</a>
{/each}


<style>

</style>