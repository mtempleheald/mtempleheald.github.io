<script>
  import Nav from '$lib/Nav.svelte';
</script>


<!--
@component
Header component
-->
<div>
<header>
  <h1>Mark Temple-Heald</h1>
  <h2>the right tool for the job</h2>
</header>
<Nav/>
</div>



<style>
  div {
    display: flex;
    flex-flow: wrap;    
    align-items: center;    
    background-color: transparent;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
    padding: 0 2rem;
  }
  h1 {
		color: #ff3e00;
		text-transform: uppercase;
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: 400;
    margin: 0.25rem 0;
  }
  h2 {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 400;
    margin: 0;
  }
</style>