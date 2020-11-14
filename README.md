# Readme

I need somewhere to gather my thoughts, in a convenient way, for the rest of time.
Previous attempts include:
- Hand made blog written in php - I can only blame immaturity and lack of experience with decent programming languages
- Wordpress - I just don't like the interface, need more customisation and generally hate frameworks
- GitHub Pages with Jekyll - constant security warnings, dependencies I don't understand and have no interest in learning
- https://foambubble.github.io/foam/ - nice idea, mindmaps seem to want a centre though, I want to wander aimlessly without recentering, also access away from my development environment, i.e. I need to host this, also tooling not quite ready.

I just started playing with Svelte and discovered JS Markdown libraries, so that's sorted, I'll do it myself again but all the content will be markdown.
I can host in GitHub Pages, access from anywhere and write to from any development machine I happen to be connected to.


# Getting Started

Requires npm and therefore node.

Download project from the [REPL](https://svelte.dev/repl) to new project folder and run `npm install`

Run the project locally `npm run dev`

This project is destined for GitHub Pages which only support root or /docs for website root.
Since I want source code in here too, /docs is the only option, therefore:
- Remove `/public/build` from .gitignore, don't replace it with a 'docs' equivalent.
- Update rollup.config.js to change output file from `public/build/bundle.js` to `docs/build/bundle.js`
- Update the watch directory, from `!production && livereload('public')` to `!production && livereload('docs')`
- Update package.json, from `"start": "sirv public"` to `"start": "sirv docs"`

Checking in built code is not usually my style, but it works in this case.
I get to write in markdown, this gets built into raw JS during dev and I check the two in together without thinking about it.


# Routing

Tried [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- Hash-based routing, need to specify `use:link`, bit clunky to use

Considered [svelte-router-spa](https://www.npmjs.com/package/svelte-router-spa) 
- [GitHub](https://github.com/jorgegorka/svelte-router)
- Seems cleverer, more user friendly and with less boilerplate, with the routing config in one place and available when needed.

Settled on [Routify](https://routify.dev)
- [GitHub](https://github.com/roxiness/routify)
- Recommended on Reddit
- "proper" routing, also aligned to folder structure, my kind of approach, KISS

Couldn't get Routify working so switched to [svelte-navigator](https://github.com/mefechoel/svelte-navigator)
- Simple, clean, clear split of SPA vs SSR in documentation and I don't want SSR for github pages
- Uses History API instead of hash routing

# Useful links

[Svelte](https://svelte.dev)
[Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

[Rollup](https://rollupjs.org)
[Rollup flags](https://rollupjs.org/guide/en/#command-line-flags)

[Snarkdown](https://github.com/developit/snarkdown/blob/master/test/index.js)
