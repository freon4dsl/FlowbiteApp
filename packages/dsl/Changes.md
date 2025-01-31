# changes from create freon command

- added index that exports configureExternals()
- adjusted dsl/package.json to include the following
```bash
  "main": "index.js",
  "module": "index.js",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  },
```
