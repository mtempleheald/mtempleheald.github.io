import { toSlug } from './_pathResolver'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {

    const modules = import.meta.glob('../../../blogs/**/*.md');
    let slugs = [];
    for (const path in modules) {
        slugs.push(toSlug(path.replace('../../../blogs/','')))
    }

    return {
        body: slugs.sort((a,b) => a > b ? -1 : 1)
    }

}