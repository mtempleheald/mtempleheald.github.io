<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>

<title>About</title>
</svelte:head>

# About me

I've worked as a professional software developer since 2008 and dabbled for years before that.  
I've worked with dozens of programming languages, frameworks and platforms.  
I've performed:

- data modelling (relational, dimensional and hierarchical) and technical design
- development
- testing (manual, automated and performance)
- analysis (business and technical)
  With many different ways of working
- DevOps
- Waterfall, Agile, Kanban, Scrum
- Solo projects, local teams, cross-site teams, off shore teams, cross-discipline teams, off the shelf product configuration
- Version control (none, PVCS, SVN, TFSVC, Git)

I consider my primary skill to be the ability to understand new topics quicker than most.  
More often than not I'll reach a practical level of understanding and not dig deeper than necessary.

What really motivates me is designing practical solutions to a real world problems, using existing knowledge but always considering alternatives.  
In order to do that I think it is absolutely critical to be _T-shaped_.  
In my case that means that I can do testing and business analysis but I'm strong when it comes to technical design, development and, I like to think, architecture.

<style>

</style>
