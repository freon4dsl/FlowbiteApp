1. When the core-svelte version 1.1.0 is published, remove the install-local script from main/package.json.
2. Address this error:
   "c:\Users\anneke\WebstormProjects\FlowbiteApp\packages\webapp\src\lib\main-app\WebappLayout.svelte:69:20
   Error: Type 'FreEditor | undefined' is not assignable to type 'FreEditor'.
   Type 'undefined' is not assignable to type 'FreEditor'. (ts)
   {:else}
   <FreonComponent editor={WebappConfigurator.getInstance().editorEnvironment?.editor} />
   "
