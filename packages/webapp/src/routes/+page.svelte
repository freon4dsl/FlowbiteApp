<script lang="ts">
	import FreonLayout from '$lib/FreonLayout.svelte';
    import { configureExternals, configureLoggers, LanguageEnvironment } from "@mono/education";
    import { WebappConfigurator } from "$lib/language/WebappConfigurator.js";
    import { ServerCommunication } from "@freon4dsl/core";

    WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
    WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());
    configureExternals();
    configureLoggers();
</script>

<div style="height:60px"></div>
<div style="padding-top: 30px">
    {LanguageEnvironment.getInstance().languageName}
    WEBAPP222
</div>
<FreonLayout />
