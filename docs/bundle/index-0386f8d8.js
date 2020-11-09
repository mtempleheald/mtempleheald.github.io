
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, b as add_location, c as insert_dev, o as append_dev, n as noop, f as detach_dev } from './main-cb06803b.js';

/* src\pages\index.svelte generated by Svelte v3.29.4 */

const file = "src\\pages\\index.svelte";

function create_fragment(ctx) {
	let section;
	let h1;
	let t1;
	let p;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			h1.textContent = "Home";
			t1 = space();
			p = element("p");
			p.textContent = "The mentality of musing while meandering";
			add_location(h1, file, 8, 1, 45);
			add_location(p, file, 9, 1, 61);
			add_location(section, file, 6, 0, 31);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(section, t1);
			append_dev(section, p);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Pages", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Pages> was created with unknown prop '${key}'`);
	});

	return [];
}

class Pages extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pages",
			options,
			id: create_fragment.name
		});
	}
}

export default Pages;
//# sourceMappingURL=index-0386f8d8.js.map
