<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="viewport"
		content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

{@render children?.()}
