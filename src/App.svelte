<script>
	import { onMount } from 'svelte';
	import Router, { link } from 'svelte-spa-router';
	import active from 'svelte-spa-router/active';
	import Index from './components/Index.svelte';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Topic from './components/Topic.svelte';
	import Blog from './components/Blog.svelte';
	import NotFound from './components/NotFound.svelte';

	const routes = {
		'/': Index,
		'/topic/:topic': Topic,
		'/blog': Blog,		

    '*': NotFound // must be last route
	}
	
	// onMount(() => {
	// });	

  //function winResize(e) {
  //}

</script>



<!-- <svelte:window on:resize={winResize} bind:innerWidth={winWidth} /> -->
<svelte:head>
  <title>Mark Temple-Heald</title>
  <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
  <meta name="robots" content="noindex, nofollow">
	<meta name="description" content="MTH on the web">
</svelte:head>

<Header></Header>
<main>
	<Router {routes} />
</main>
<Footer></Footer>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>