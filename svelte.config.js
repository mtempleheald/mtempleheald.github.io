import adapter from '@sveltejs/adapter-static';
import md from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [md.mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			onError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	}
};

export default config;
