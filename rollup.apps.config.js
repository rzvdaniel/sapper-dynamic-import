import resolve from 'rollup-plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

import globby from 'globby'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

export default [{
	input: globby.sync('apps/*.svelte'),
	output: {
		dir: 'static-dist/bundles',
		format: 'esm',
		entryFileNames: '[name].mjs',
	},
	plugins: [
		svelte({ dev, hydratable: true }),
		resolve(),
		!dev && terser({ module: true }),
	],
}, {
	input: globby.sync('apps/*.svelte'),
	output: {
		dir: 'static-dist/bundles',
		format: 'cjs',
	},
	plugins: [
		svelte({
			dev,
			generate: 'ssr',
		}),
		resolve(),
	],
}]
