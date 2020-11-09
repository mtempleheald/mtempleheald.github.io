<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>


<div class="wrapper">
<Header/>
<main>
  <slot />
</main>
</div>
<Footer/>



<style>
  .wrapper {
    min-height: calc(100vh - var(--footer-height));
  }
main {
  margin-top: 1rem;
  min-height: 70vh;
}
</style>