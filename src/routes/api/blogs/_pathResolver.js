
// YYYY-MM-DD-some-arbitrary-path to YYYY/MM/DD/some-arbitrary-path.md
export function toPath(slug) {
    let arr = slug.split('-');
    return arr.length > 1 ? `${arr[0]}/${arr[1]}/${arr[2]}/${arr.slice(3).join('-')}.md` : null;
}
// YYYY/MM/DD/some-arbitrary-path.md to YYYY-MM-DD-some-arbitrary-path
export function toSlug(path) {
    let arr = path.split('/');
    return arr.length > 1 ? `${arr[0]}-${arr[1]}-${arr[2]}-${arr[3].replace('.md','')}` : null;
}