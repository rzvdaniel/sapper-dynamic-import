<script>
	export let env;
	const bundleCss = env === 'dev' ? 'bundle.css' : 'hello-world/bundle.css'
</script>

<style>
	h1 {
		color: red;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="{bundleCss}">
</svelte:head>

<h1>Hello World!</h1>
