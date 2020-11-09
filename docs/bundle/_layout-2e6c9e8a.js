
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, m as validate_each_argument, v as validate_store, u as url, c as component_subscribe, o as isActive, a as validate_slots, e as element, t as text, p as attr_dev, q as toggle_class, f as add_location, h as insert_dev, j as append_dev, l as detach_dev, n as noop, w as destroy_each, b as space, x as create_component, y as mount_component, z as transition_in, A as transition_out, B as destroy_component, C as create_slot, D as update_slot } from './main-50306e1d.js';

/* src\Nav.svelte generated by Svelte v3.29.4 */
const file = "src\\Nav.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i][0];
	child_ctx[4] = list[i][1];
	return child_ctx;
}

// (15:4) {#each links as [path, name]}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*name*/ ctx[4] + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[0](/*path*/ ctx[3]));
			toggle_class(a, "selected", /*$isActive*/ ctx[1](/*path*/ ctx[3]));
			add_location(a, file, 15, 8, 227);
			add_location(li, file, 15, 4, 223);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$url*/ 1 && a_href_value !== (a_href_value = /*$url*/ ctx[0](/*path*/ ctx[3]))) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*$isActive, links*/ 6) {
				toggle_class(a, "selected", /*$isActive*/ ctx[1](/*path*/ ctx[3]));
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(15:4) {#each links as [path, name]}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let nav;
	let ul;
	let each_value = /*links*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			nav = element("nav");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(ul, file, 13, 2, 178);
			attr_dev(nav, "class", "svelte-i1ms94");
			add_location(nav, file, 12, 0, 169);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav, anchor);
			append_dev(nav, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$url, links, $isActive*/ 7) {
				each_value = /*links*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav);
			destroy_each(each_blocks, detaching);
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
	let $url;
	let $isActive;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));
	validate_store(isActive, "isActive");
	component_subscribe($$self, isActive, $$value => $$invalidate(1, $isActive = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Nav", slots, []);
	const links = [["./", "home"], ["./topic", "topic"], ["./blog", "blog"]];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Nav> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ url, isActive, links, $url, $isActive });
	return [$url, $isActive, links];
}

class Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Nav",
			options,
			id: create_fragment.name
		});
	}
}

/* src\Header.svelte generated by Svelte v3.29.4 */
const file$1 = "src\\Header.svelte";

function create_fragment$1(ctx) {
	let header;
	let h1;
	let t1;
	let h2;
	let t3;
	let nav;
	let current;
	nav = new Nav({ $$inline: true });

	const block = {
		c: function create() {
			header = element("header");
			h1 = element("h1");
			h1.textContent = "Mark Temple-Heald's place on the web";
			t1 = space();
			h2 = element("h2");
			h2.textContent = "the right tool for the job";
			t3 = space();
			create_component(nav.$$.fragment);
			attr_dev(h1, "class", "svelte-fvumuc");
			add_location(h1, file$1, 7, 2, 74);
			add_location(h2, file$1, 8, 2, 123);
			attr_dev(header, "class", "svelte-fvumuc");
			add_location(header, file$1, 6, 0, 62);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			append_dev(header, h1);
			append_dev(header, t1);
			append_dev(header, h2);
			append_dev(header, t3);
			mount_component(nav, header, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(nav.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(nav.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			destroy_component(nav);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Header", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Header> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Nav });
	return [];
}

class Header extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Header",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\Footer.svelte generated by Svelte v3.29.4 */

const file$2 = "src\\Footer.svelte";

function create_fragment$2(ctx) {
	let footer;
	let p0;
	let t1;
	let p1;
	let t3;
	let a0;
	let t5;
	let a1;
	let t7;
	let a2;

	const block = {
		c: function create() {
			footer = element("footer");
			p0 = element("p");
			p0.textContent = "This is my site, there are many like it but this one is mine.";
			t1 = space();
			p1 = element("p");
			p1.textContent = "If you don't like it, you know where the close button is.";
			t3 = space();
			a0 = element("a");
			a0.textContent = "Mark Temple-Heald";
			t5 = space();
			a1 = element("a");
			a1.textContent = "Home";
			t7 = space();
			a2 = element("a");
			a2.textContent = "GitHub";
			add_location(p0, file$2, 7, 2, 41);
			add_location(p1, file$2, 8, 2, 113);
			attr_dev(a0, "href", "https://www.linkedin.com/in/mtempleheald");
			attr_dev(a0, "target", "_blank");
			add_location(a0, file$2, 9, 2, 181);
			attr_dev(a1, "href", "https://mtempleheald.github.io");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file$2, 10, 2, 273);
			attr_dev(a2, "href", "https://github.com/mtempleheald");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file$2, 11, 2, 342);
			add_location(footer, file$2, 6, 0, 29);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, footer, anchor);
			append_dev(footer, p0);
			append_dev(footer, t1);
			append_dev(footer, p1);
			append_dev(footer, t3);
			append_dev(footer, a0);
			append_dev(footer, t5);
			append_dev(footer, a1);
			append_dev(footer, t7);
			append_dev(footer, a2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(footer);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Footer", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
	});

	return [];
}

class Footer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Footer",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src\pages\_layout.svelte generated by Svelte v3.29.4 */
const file$3 = "src\\pages\\_layout.svelte";

function create_fragment$3(ctx) {
	let header;
	let t0;
	let main;
	let t1;
	let footer;
	let current;
	header = new Header({ $$inline: true });
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);
	footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			create_component(header.$$.fragment);
			t0 = space();
			main = element("main");
			if (default_slot) default_slot.c();
			t1 = space();
			create_component(footer.$$.fragment);
			attr_dev(main, "class", "svelte-n9hy0");
			add_location(main, file$3, 8, 0, 128);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(header, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			insert_dev(target, t1, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(default_slot, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			transition_out(default_slot, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(header, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			if (default_slot) default_slot.d(detaching);
			if (detaching) detach_dev(t1);
			destroy_component(footer, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Layout", slots, ['default']);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Layout> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ Header, Footer });
	return [$$scope, slots];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment$3.name
		});
	}
}

export default Layout;
//# sourceMappingURL=_layout-2e6c9e8a.js.map
