<script>
	import { Link } from "svelte-navigator";
</script>



<nav>
  <ul>
    <li><Link to="/">home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/topic">Topic</Link></li>
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
  a {
    color: inherit;
    padding: 0.2rem 0.8rem;
  }
</style>