<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
