<script>
  import { Route, Link } from "svelte-navigator";

  export let topicRoute;
</script>


<article>
  <Route path=":id" let:params>
    <h1>Topic {topicRoute}</h1>
    <p>TODO use snarkdown to render markdown file based on passed id = {params.id}</p>
  </Route>
  <Route path="">
    <h1>Topics to be listed here</h1>
  </Route>
</article>


<style>

</style>