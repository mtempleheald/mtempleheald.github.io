<script>
  import snarkdown from 'snarkdown';
  import { Route, Link } from "svelte-navigator";

  export let blogRoute;

  async function loadMarkdownContent(path) {
    let response = await fetch(path);
    if (response.status === 200) {
      let data = await response.text();
      return snarkdown(data);
    }
  }
  async function loadJsonContent(path) {
    let response = await fetch(path);
    if (response.status === 200) {
      let data = await response.json();
      return data;
    }
  }
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

</style>