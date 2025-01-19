<script lang="ts">
    import {Alert, Heading} from 'flowbite-svelte';
    import { Drawer, CloseButton } from 'flowbite-svelte';
    import { sineIn } from 'svelte/easing';
    import InfoPanel from "$lib/InfoPanel.svelte";
    import NavBar from "$lib/NavBar.svelte";
    import {drawerHidden} from "$lib/stores/DrawerStore";
    import ModelInfo from "$lib/ModelInfo.svelte";
    import { Footer, FooterCopyright } from 'flowbite-svelte';
    let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn
    };
</script>

<NavBar/>

<div style="height:60px;" class="md:hidden lg:hidden xl:hidden block">
    <!--  This block is here to shift the content down on small media. This is done because the "sm:mt-12"
      marking down below does not function. -->
</div>

<div style="height:1000px;" class="sm:mt-12 md:mt-20 lg:mt-20 xl:mt-20 overflow-scroll pb-16 bg-red-800">
    --------------------------------
    Editor content comes here ...
</div>

<Footer class="absolute bottom-0 start-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <FooterCopyright href="/" by="Freon™" year={2025}/>
</Footer>


<!-- Normally hidden elements-->

<Drawer placement="right" transitionType="fly" {transitionParams} bind:hidden={$drawerHidden} id="sidebar1">
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            Model Info
        </h5>
        <CloseButton on:click={() => ($drawerHidden = true)} class="mb-4 dark:text-white" />
    </div>
    <ModelInfo/>
</Drawer>
