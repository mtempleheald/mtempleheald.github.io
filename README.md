# Readme

Somewhere to gather my thoughts, in a convenient way, for the rest of time.

Previous attempts include:

- Hand made blog written in php - I can only blame immaturity and lack of experience with decent programming languages
- Wordpress - I just don't like the interface, slow, need more customisation and generally dislike frameworks
- GitHub Pages with Jekyll - constant security warnings, dependencies I don't understand and have no interest in learning
- https://foambubble.github.io/foam/ - nice idea, mindmaps seem to want a centre though, I want to wander aimlessly without recentering, also access away from my development environment, i.e. I need to host this, also tooling not quite ready.

I just started playing with Svelte and discovered JS Markdown libraries, so that's sorted, I'll do it myself again but all the content will be markdown.
I can host in GitHub Pages, access from anywhere and write to from any development machine I happen to be connected to.

## Useful commands

- `npm install` - import package dependencies
- `npm run dev` - run locally listen for changes
- `npm run build` - run in release mode for deployment

# Useful links

[Svelte](https://svelte.dev)
[Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

[Rollup](https://rollupjs.org)
[Rollup flags](https://rollupjs.org/guide/en/#command-line-flags)

[Snarkdown](https://github.com/developit/snarkdown/blob/master/test/index.js)
[Supported markdown](https://github.com/developit/snarkdown/blob/master/test/index.js)

## Change History

- Download project from the [REPL](https://svelte.dev/repl) to new project folder and run `npm install`
  Run the project locally `npm run dev`
- Destined for GitHub Pages which only support root or /docs for website root
  - Change 'public' to 'docs' throughout `rollup.config.js`
  - Add 404.html page to handle the occasion when GitHub Pages can't find a file - redirect to intended page and rewrite history
  - Add .nojekyll file so that underscore-prefixed files are not treated specially (hidden)
  - check in built code (for now)
- Migrated over some old blogs and other stuff
- Implemented routing
  - Tried [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
    - Hash-based routing, need to specify `use:link`, bit clunky to use
  - Considered [svelte-router-spa](https://www.npmjs.com/package/svelte-router-spa)
    - [GitHub](https://github.com/jorgegorka/svelte-router)
    - Seems cleverer, more user friendly and with less boilerplate, with the routing config in one place and available when needed.
  - Selected [Routify](https://routify.dev) based on Reddit recommendations
    - [GitHub](https://github.com/roxiness/routify)
    - "proper" routing, also aligned to folder structure, my kind of approach, KISS
  - Switched to [svelte-navigator](https://github.com/mefechoel/svelte-navigator) when Routify proved problematic in GitHub pages.
    - Uses History API instead of hash routing
    - Simple, clean, clear split of SPA vs SSR in documentation and I don't want SSR for github pages
- Implemented snarkdown as markdown parser, working in a very limited way, need to revisit sometime
- Implemented build time index generator for markdown blog entries using [Directory Tree NPM module](https://github.com/mihneadb/node-directory-tree/blob/master/lib/directory-tree.js) for inspiration.
- Revisit the process following some other projects using GitHub actions
  - build process now handles docs folder generation, excluded from checkin, much neater to manage
  - move static files from docs folder to root, copied over during build
