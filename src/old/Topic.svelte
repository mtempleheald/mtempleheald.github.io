<script>
  import { Route, Link } from "svelte-navigator";
  import { loadMarkdownContent, loadJsonContent } from './common.js';

  export let topicRoute;

</script>


<article>
  <Route path=":id" let:params>
    {#await loadMarkdownContent('/content/topics/' + topicRoute + '.md')}
      <p>loading topic...</p>
    {:then content}
      {@html content}
    {:catch error}
      <p>Error loading topic</p>
      <p>{error.message}</p>
    {/await}
  </Route>
  <Route>
    <h1>Topics of Interest</h1>
    {#await loadJsonContent('/content/topics/index.json')}
      <p>loading topics...</p>
    {:then content}      
      <ul>
      {#each content as t}
        <li><Link to="./{t.link}">{t.title}</Link></li>
      {/each}
      </ul>
    {:catch error}      
      <p>Error loading topics</p>
      <p>{error.message}</p>
    {/await}
  </Route>
</article>


<style>
  article {
    max-width: 1000px;
    margin: auto;
  }
</style>