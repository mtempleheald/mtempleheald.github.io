<script>
	import { Link } from "svelte-navigator";
</script>


<!--
@component
Navigation bar component
-->
<nav>
  <ul>
    <li><Link to="/" class="navAnchor">Home</Link></li>
    <li><Link to="/blog" class="navAnchor">Blog</Link></li>
    <li><Link to="/topic" class="navAnchor">Topic</Link></li>
    <li><Link to="/about" class="navAnchor">About</Link></li>
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