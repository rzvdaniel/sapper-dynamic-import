# Sapper dynamic Svelte apps loading

This is an example of dynamically loading Svelte that are previously built in a separate step.

## 1. Original Sample

This demo was originally created by Maurício Kishi (https://github.com/mrkishi) as an aswer to a question asked at https://github.com/sveltejs/svelte/issues/2760. His Sandbox demo can be found at https://codesandbox.io/s/3ulgy.

## 2. Svelte Template

The aim is to asynchronously load compiled Svelte applications without any prior knowledge. The applications are not be part of the compile Sapper project, but they're loaded from an external path instead. 

The nice thing here is that the two Svelte applications are created separatelly in the "apps" folder. You can develope them independently and test with with "npm run dev". After compilation (npm run build) the bundled app files are copied to the "static-apps" folder from where they are dynamically loaded at runtime by the Sapper website.

If you wish to create your own app, you can find more details here at [https://github.com/sveltejs/template].

There are two additional configuration needed right now for the apps to correclt load the corresponding CSS bundles.

1. Instruct the app

## 3. Sapper Template

This repository is an updated version of the original [Sapper](https://github.com/sveltejs/sapper) template. The idea is to dynamically load Svelte applications when navigating to a so called "Application Host" (that't just another page in the Sapper project).

To clone it and get started:

```bash
git clone https://github.com/rzvdaniel/sapper-dynamic-import.git
cd sapper-dynamic-import
npm install # or yarn!
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and navigate Apps route in the Home page. From there, you have access to the two links that asynchronously load the two Svelte sample apps:

Each of the two links would direct you to the same page ([app].svelte) using two different route options:
- /app/bye-world
- /app/hello-world

Once the [app].svelte page is accessed by the route nevigation, the corresponding Svelte app is dynamically loaded at runtime.

Best!
