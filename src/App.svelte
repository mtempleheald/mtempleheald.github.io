<script>
  import { Router, Route } from "svelte-navigator";
  import snarkdown from 'snarkdown';// Supported markdown https://github.com/developit/snarkdown/blob/master/test/index.js
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
var notFound = `
# Page not found

What on Earth were you trying to achieve?
`;



</script>



<svelte:head>
  <title>Mark Temple-Heald</title>
  <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
  <meta name="robots" content="noindex, nofollow">
	<meta name="description" content="MTH on the web">
</svelte:head>

<Router>
  <Header></Header>
  <main>

    <Route path="/">
      {@html snarkdown(index)}
    </Route>

    <Route path="blog/*blogRoute" component={Blog} />

    <Route path="topic/*topicRoute" component={Topic} />

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
}
</style>