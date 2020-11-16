<script>
  import snarkdown from 'snarkdown';
  import { Route, Link } from "svelte-navigator";
  import { loadMarkdownContent, loadJsonContent } from './common.js';

  export let blogRoute;

</script>


<article>
  <Route path=":id" let:params>
    {#await loadMarkdownContent('/content/blogs/' + blogRoute + '.md')}
      <p>loading blog...</p>
    {:then content}
      {@html content}
    {:catch error}
      <p>Error loading blog</p>
      <p>{error.message}</p>
    {/await}
  </Route>
  <Route>
    <h1>Blog articles</h1>
    {#await loadJsonContent('/content/blogs/_index.json')}
      <p>loading blogs...</p>
    {:then content}
      <ul>
      {#each content as b}
        <li><Link to="./{b.name}">{b.name}</Link></li>
      {/each}
      </ul>
    {:catch error}      
      <p>Error loading blogs</p>
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