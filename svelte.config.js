import adapter from '@sveltejs/adapter-static';
import md from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess(), md.mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	}
};

export default config;
