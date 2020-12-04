import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import {listFiles} from 'list-files-in-dir';// https://www.npmjs.com/package/list-files-in-dir
import { fstat } from 'fs';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
		dir: 'docs/build'
  },
	plugins: [
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
			dedupe: ['svelte']
		}),
		commonjs(),		
		clear({
			targets: ['docs/content'],
			watch: true,
		}),
		listFiles('src/content/blogs')
			.then(paths => {
				generateBlogIndex(Array.from(paths, p => p.replace(/^.*[\\\/]/, '')))
			}),
			listFiles('src/content/topics')
				.then(paths => {
					generateTopicIndex(Array.from(paths, p => p.replace(/^.*[\\\/]/, '')))
				}),
		copy({
      targets: [
        { src: 'src/content/**/*', dest: 'docs' }
			],
			flatten: false
    }),

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
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});
			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

/*
	Parse blog filename to extract title, date and tags, write this to _index.json in src/blogs, to be published along with the content itself
	Filename should be YYYY-MM-DD-Title-Goes-Here[tag1,tag2,tag3].md
	Test parsing using console.log
*/
function generateBlogIndex(blogs) {
	const fs = require('fs');
	let index = [];
	blogs.sort() // want blogs to be ordered by date
		.reverse() // with the latest at the top
		.forEach(blog => {
			if (blog != '_index.json') {
				let date = blog.substr(0,10);
				let title = blog.substr(11).replace(/\[.*\]/,'').replace('.md','').replace(/\-/g,' ');
				let tagsString = blog.replace('.md','').match(/\[.*\]/);
				let tags = tagsString ? tagsString[0].replace(/[\[\]]/g,'').split(',') : [];
				index.push ({"link": blog.replace('.md',''), "title": title, "created": date, "tags": tags });
			}
		});
	fs.writeFile('src/content/blogs/_index.json', JSON.stringify(index), (err) => {
		if (err) {
			throw err;
		}
		console.log("Blog index created");
	})
}
/*
  Parse topic filename to extract title, write this to _index.json in src/topics, to be published along with the content itself
*/
function generateTopicIndex(topics) {
	const fs = require('fs');
	let index = [];
	topics.sort() // want topics to be ordered by filename 
		.forEach(topic => {
			if (topic.substr(topic.length - 3) === '.md') {
				let title = topic.replace('.md','').replace(/\-/g, ' ');
				index.push ({"link": topic.replace('.md',''), "title": title });
			}
		});
	fs.writeFile('src/content/topics/_index.json', JSON.stringify(index), (err) => {
		if (err) {
			throw err;
		}
		console.log("Topic index created");
	})
}