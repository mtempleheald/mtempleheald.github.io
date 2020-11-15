<script>
  import { Router, Route } from "svelte-navigator";
  import snarkdown from 'snarkdown';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Blog from './Blog.svelte';
  import Topic from './Topic.svelte';

  // TODO move these to inject from external markdown files
var index = `
# Home

Mindful meanderings manifest more manageable machinations.

Manoeuvring murky multifaceted modernism means meticulously managing many mistakes, misconceptions, misunderstandings.

Measured multipronged musings, mechanical movements, may maximise meritorious magnificence.
`;
var about = `
# About me

TODO
`;
var notFound = `
# Page not found

What on Earth were you trying to achieve?
`;
</script>



<Router>
  <Header></Header>
  <main>

    <Route path="/">
      {@html snarkdown(index)}
    </Route>

    <Route path="blog/*blogRoute" component={Blog} />

    <Route path="topic/*topicRoute" component={Topic} />

    <Route path="about">
      {@html snarkdown(about)}
    </Route>

    <Route>
      {@html snarkdown(notFound)}
    </Route>

  </main>
  <Footer></Footer>
</Router>



<style>
main {
  margin-top: 1rem;
  min-height: 75vh;
  padding: 0 2rem;
}
</style>