<script>
</script>

<!--
@component
Navigation bar component
-->
<nav>
	<ul>
		<li><a href="/" class="navAnchor">Home</a></li>
		<li><a href="/blog" class="navAnchor">Blog</a></li>
		<li><a href="/topic" class="navAnchor">Topic</a></li>
		<li><a href="/about" class="navAnchor">About</a></li>
	</ul>
</nav>

<style>
	nav {
		margin-left: auto;
	}
	ul {
		list-style-type: none;
		line-height: 1;
	}
	li {
		display: inline;
	}
	:global(.navAnchor) {
		color: inherit;
		padding: 0.2rem 0.8rem;
	}
</style>
