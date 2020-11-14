<script>
  import { Route, Link } from "svelte-navigator";

  export let blogRoute;
</script>


<article>
  <Route path=":id" let:params>
    <h1>Blog post /blog/{blogRoute}</h1>
    <p>TODO use snarkdown to render markdown file based on passed id = {params.id}</p>
  </Route>
  <Route>
    <h1>Blogs to be listed here</h1>
  </Route>
</article>


<style>

</style>