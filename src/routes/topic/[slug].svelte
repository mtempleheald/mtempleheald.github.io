<script context="module">
    //import { compile } from 'mdsvex'; // TODO: Figure out how to stop the error (code runs as expected then shows error instead)
    import snarkdown from 'snarkdown'
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, params }) {
		
        const slug = params.slug
        const target = '/api/topics/' + params.slug
        let txt;
        let html;
        await fetch(target)
            .then(resp => resp.text())
            .then(html => txt = html)
        //await compile(txt).then(res => res.code)
        html = snarkdown(txt)
		return {
			props: {
                topic: html
			}
		};
	}
</script>

<script>
    export let topic;
</script>

{@html topic}

