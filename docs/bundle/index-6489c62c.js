
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, b as add_location, c as insert_dev, n as noop, f as detach_dev } from './main-ad35202c.js';

/* src\pages\index.svelte generated by Svelte v3.29.4 */

const file = "src\\pages\\index.svelte";

function create_fragment(ctx) {
	let br0;
	let br1;
	let br2;
	let br3;
	let br4;
	let br5;
	let t0;
	let h1;
	let t2;
	let p;

	const block = {
		c: function create() {
			br0 = element("br");
			br1 = element("br");
			br2 = element("br");
			br3 = element("br");
			br4 = element("br");
			br5 = element("br");
			t0 = space();
			h1 = element("h1");
			h1.textContent = "This is index (home)!";
			t2 = space();
			p = element("p");
			p.textContent = "We are using Routify.";
			add_location(br0, file, 1, 0, 2);
			add_location(br1, file, 1, 5, 7);
			add_location(br2, file, 1, 10, 12);
			add_location(br3, file, 1, 15, 17);
			add_location(br4, file, 1, 20, 22);
			add_location(br5, file, 1, 25, 27);
			add_location(h1, file, 2, 0, 34);
			add_location(p, file, 3, 0, 66);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, br0, anchor);
			insert_dev(target, br1, anchor);
			insert_dev(target, br2, anchor);
			insert_dev(target, br3, anchor);
			insert_dev(target, br4, anchor);
			insert_dev(target, br5, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(br2);
			if (detaching) detach_dev(br3);
			if (detaching) detach_dev(br4);
			if (detaching) detach_dev(br5);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
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
//# sourceMappingURL=index-6489c62c.js.map
