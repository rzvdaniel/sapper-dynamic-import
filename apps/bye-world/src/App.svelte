<script>
	export let env;
	const bundleCss = env === 'dev' ? 'bundle.css' : 'bye-world/bundle.css'
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="{bundleCss}">
</svelte:head>

<h1>Bye World!</h1>
