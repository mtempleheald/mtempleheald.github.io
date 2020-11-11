import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
//import { routify } from '@sveltech/routify';
import clear from 'rollup-plugin-clear';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
    sourcemap: true,
    format: 'esm',
    name: 'app',
		dir: 'docs/bundle'
		// preserveModules: true,
    // preserveModulesRoot: 'src'
  },
	plugins: [
		clear({
			targets: ['docs/bundle'],
			// optional, whether clear the directores when rollup recompile on --watch mode.
			watch: true, // default: false
		}),
		// https://github.com/roxiness/routify/blob/v1.9.10/config.defaults.json
		// routify({
		// 	sourceDir: 'docs',
		// 	routifyDir: 'docs/routify',
    //   dynamicImports: true,
    //   singleBuild: production,
    // }),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			modulesOnly: true
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('docs'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}