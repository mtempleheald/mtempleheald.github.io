<script>
import { url, isActive } from "@sveltech/routify";

const links = [
  ["./topic", "topic"],
  ["./blog", "blog"],
];
</script>



<nav>
  <ul>
    <li><a href="/">home</a></li>
    {#each links as [path, name]}
    <li><a href={$url(path)} class:selected={$isActive(path)}>{name}</a></li>
    {/each}
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
    padding: 0 0.8rem;
  }
</style>