<script lang="ts">
    import { Alert } from 'flowbite-svelte';
    import { Drawer, CloseButton } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';
    import InfoPanel from "$lib/InfoPanel.svelte";
    import NavBar from "$lib/NavBar.svelte";
    import {drawerHidden} from "$lib/stores/DrawerStore";
    import ModelInfo from "$lib/ModelInfo.svelte";
    import { Footer, FooterCopyright } from 'flowbite-svelte';
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
</script>

<NavBar/>

<div class="p-8">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    <Alert>
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
</div>

<InfoPanel/>

<Drawer transitionType="fly" {transitionParams} bind:hidden={$drawerHidden} id="sidebar1">
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            Model Info
        </h5>
        <CloseButton on:click={() => ($drawerHidden = true)} class="mb-4 dark:text-white" />
    </div>
    <ModelInfo/>
</Drawer>

<Footer>
    <FooterCopyright href="/" by="Freon™" year={2025}/>
</Footer>
