<script context="module">
	export async function preload({ params: { app } }) {
		console.log(`loading app bundle '${app}.js'`)

		const file = process.browser
			? `/bundles/${app}.mjs`
			: `${process.cwd()}/static-dist/bundles/${app}.js`

		try {
			const module = await import(file)
			return { app, Component: module.default || module }
		} catch (err) {
			this.error(404, `couldn't load '${file}' bundle: ${err.toString()}`)
		}
	}
</script>

<script>
	export let app
	export let Component

	// onMount is only called when this route is initialized
	// if you click a link from an app to another,
	// this won't be triggered
	import { onMount } from 'svelte'
	onMount(() => console.log(`[app].svelte route was mounted`))
</script>

<h1>App "{app}"</h1>
<svelte:component this="{Component}"/>

<p><a href="/apps-ssr">back to list</a></p>
