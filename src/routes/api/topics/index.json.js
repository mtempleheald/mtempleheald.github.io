/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {

    const modules = import.meta.glob('../../../topics/*.md');
    let slugs = [];
    for (const path in modules) {
        slugs.push(path.replace('../../../topics/','').replace('.md',''))
    }

    return {
        body: slugs.sort((a,b) => a > b ? -1 : 1)
    }

}