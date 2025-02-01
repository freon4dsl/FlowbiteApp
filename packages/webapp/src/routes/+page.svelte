<script lang="ts">
	import FreonLayout from '$lib/main-app/FreonLayout.svelte';
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

<FreonLayout />
