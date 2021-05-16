import { toSlug } from './_pathResolver'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ query }) {

    const modules = import.meta.glob('../../../blogs/**/*.{md,svelte.md}');
    let slugs = [];
    for (const path in modules) {
        slugs.push(toSlug(path.replace('../../../blogs/','')))
    }

    return {
        body: [
            "2021-03-16-DevOps-Shared-Environments"
        ]
    }

}