
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, a as validate_slots, r as route, g as globals, e as element, b as space, t as text, f as add_location, h as insert_dev, j as append_dev, k as set_data_dev, n as noop, l as detach_dev } from './main-fc915a33.js';

/* src\pages\_fallback.svelte generated by Svelte v3.29.4 */

const { console: console_1 } = globals;
const file = "src\\pages\\_fallback.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p0;
	let t3;
	let p1;
	let t4;
	let code;
	let t5_value = /*$route*/ ctx[0].leftover + "";
	let t5;
	let t6;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Page not found";
			t1 = space();
			p0 = element("p");
			p0.textContent = "What on Earth were you trying to achieve?";
			t3 = space();
			p1 = element("p");
			t4 = text("The path ");
			code = element("code");
			t5 = text(t5_value);
			t6 = text(" was not found.");
			add_location(h1, file, 6, 0, 104);
			add_location(p0, file, 7, 0, 129);
			add_location(code, file, 8, 12, 191);
			add_location(p1, file, 8, 0, 179);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t4);
			append_dev(p1, code);
			append_dev(code, t5);
			append_dev(p1, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$route*/ 1 && t5_value !== (t5_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t5, t5_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
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

function instance($$self, $$props, $$invalidate) {
	let $route;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(0, $route = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Fallback", slots, []);
	console.log("route", $route);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Fallback> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ route, $route });
	return [$route];
}

class Fallback extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fallback",
			options,
			id: create_fragment.name
		});
	}
}

export default Fallback;
//# sourceMappingURL=_fallback-59e141b4.js.map
