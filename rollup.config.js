import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import { listFiles } from 'list-files-in-dir';// https://www.npmjs.com/package/list-files-in-dir
import { writeFile } from 'fs';

const production = !process.env.ROLLUP_WATCH; // if we're not watching, we're in release/production mode

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
			// extract component CSS into separate file for performance
			css: css => {
				css.write('bundle.css');
			}
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		commonjs(),
		clear({
			targets: ['docs/content'],
			watch: true,
		}),
		// generate indexes (also creates target directories before copy)
		listFiles('src/content/blogs')
			.then(paths => {
				generateBlogIndex(Array.from(paths, p => p.replace(/^.*[\\\/]/, '')))
			}),
		listFiles('src/content/topics')
			.then(paths => {
				generateTopicIndex(Array.from(paths, p => p.replace(/^.*[\\\/]/, '')))
			}),
		// Copy required files to target directory
		copy({
			targets: [
				{ src: 'src/content/**/*', dest: 'docs' },
				{ src: '*.html', dest: 'docs' },
				{ src: '*.css', dest: 'docs' },
				{ src: 'favicon.ico', dest: 'docs' }
			],
			flatten: false
		}),
	
		// spin up local server when not in production
		!production && serve(),

		// Watch for changes when not in production
		!production && livereload('docs'),

		// minify for production
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
	let index = [];
	blogs.sort() // want blogs to be ordered by date
		.reverse() // with the latest at the top
		.forEach(blog => {
			if (blog != 'index.json') {
				let date = blog.substr(0,10);
				let title = blog.substr(11).replace(/\[.*\]/,'').replace('.md','').replace(/\-/g,' ');
				let tagsString = blog.replace('.md','').match(/\[.*\]/);
				let tags = tagsString ? tagsString[0].replace(/[\[\]]/g,'').split(',') : [];
				index.push ({"link": blog.replace('.md',''), "title": title, "created": date, "tags": tags });
			}
		});
	writeFile('src/content/blogs/index.json', JSON.stringify(index), (err) => {
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
	let index = [];
	topics.sort() // want topics to be ordered by filename 
		.forEach(topic => {
			if (topic.substr(topic.length - 3) === '.md') {
				let title = topic.replace('.md','').replace(/\-/g, ' ');
				index.push ({"link": topic.replace('.md',''), "title": title });
			}
		});
	writeFile('src/content/topics/index.json', JSON.stringify(index), (err) => {
		if (err) {
			throw err;
		}
		console.log("Topic index created");
	})
}