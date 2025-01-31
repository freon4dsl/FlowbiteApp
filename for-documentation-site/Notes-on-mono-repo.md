# Mono-repository issues

There are some subtle differences between the creating a Flowbite app in an ordinary repository versus a mono-repository.

- In the tailwind.config.ts file change to refer to the correct node-modules placement:
```ts
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
```
 into:

```ts
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
```

- adjust the script in dsl/package.json to refer to the correct node-modules placement:
``` bash
   "server": "node ../../node_modules/@freon4dsl/server/dist/server/server-starter.js"
```

- change the vite.config.js file from:
```ts
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
```
into:

```ts
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		exclude: ['flowbite']
	}
});
```

