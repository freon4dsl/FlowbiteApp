Steps in order to create an HTML application of which the FReon editor is a part.

1. create a monorepo with two packages: dsl and webapp.
2. in the webapp create a Flowbite/Tailwind project and make it as you wish.
3. in the dsl package create a Freon project.
4. from the dsl package.json remove the dependency on webapp-lib
5. dsl: remove src/starter.ts (or move it to the other package?)
6. adjust the package.json scripts such that it is convenient to give commands
7. in webapp add dependency on dsl

--
1. adjust the webapp to your liking
2. add EditorPart.svelte and in it, use the Environment from the dsl.
3. add a store for knowing the unit's name, and whether there is a unit in present
