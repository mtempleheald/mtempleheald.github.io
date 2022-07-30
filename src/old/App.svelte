<script>
	import { Router, Route } from 'svelte-navigator';
	import snarkdown from 'snarkdown';
	import Header from '../lib/Header.svelte';
	import Footer from './Footer.svelte';
	import Blog from './Blog.svelte';
	import Topic from './Topic.svelte';
	import { loadMarkdownContent, loadJsonContent } from './common.js';
</script>

<Router>
	<Header />
	<main>
		<Route path="/">
			{#await loadMarkdownContent('/content/index.md')}
				<p>loading content...</p>
			{:then content}
				{@html content}
			{:catch error}
				<p>Error loading content</p>
				<p>{error.message}</p>
			{/await}
		</Route>

		<Route path="blog/*blogRoute" component={Blog} />

		<Route path="topic/*topicRoute" component={Topic} />

		<Route path="about">
			{#await loadMarkdownContent('/content/about.md')}
				<p>loading content...</p>
			{:then content}
				{@html content}
			{:catch error}
				<p>Error loading content</p>
				<p>{error.message}</p>
			{/await}
		</Route>

		<Route>
			{#await loadMarkdownContent('/content/404.md')}
				<p>loading content...</p>
			{:then content}
				{@html content}
			{:catch error}
				<p>Error loading content</p>
				<p>{error.message}</p>
			{/await}
		</Route>
	</main>
	<Footer />
</Router>

<style>
	main {
		margin-top: 1rem;
		min-height: 75vh;
		padding: 0 2rem;
	}
</style>
