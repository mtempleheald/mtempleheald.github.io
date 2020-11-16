export async function loadMarkdownContent(path) {
	let response = await fetch(path);
	if (response.status === 200) {
		let data = await response.text();
		return snarkdown(data);
	}
}
export async function loadJsonContent(path) {
	let response = await fetch(path);
	if (response.status === 200) {
		let data = await response.json();
		return data;
	}
}