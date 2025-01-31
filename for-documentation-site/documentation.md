Steps in order to create an HTML application of which the Freon editor is a part.

1. create a monorepo with two packages: dsl and webapp.
2. in the webapp create a Flowbite/Tailwind project and make it as you wish.
3. in the dsl package create a Freon project.
4. from the dsl package.json remove the src/starter.ts file
   (5. optional: adjust the package.json scripts such that it is convenient to give commands)

-----

- Create a WebappConfigurator.ts. In the webapp/routes/+page.svelte add an initialization of the language environment, similar to the starter file:

```ts
<script lang="ts">
	import FreonLayout from '$lib/FreonLayout.svelte';
  import { configureExternals, configureLoggers, LanguageEnvironment } from "@mono/education";
  import { WebappConfigurator } from "$lib/language/WebappConfigurator.js";
  import { ServerCommunication } from "@freon4dsl/core";
  import { onMount } from 'svelte';

    onMount(() => {
        WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
        WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());
        configureExternals();
        configureLoggers();
    })

</script>
```

In the WebappConfigurator set the requested info from the language in some store variables.
```ts
let langEnv: FreEnvironment = LanguageEnvironment.getInstance();
// the language name
languageName.set(langEnv.languageName);
```
