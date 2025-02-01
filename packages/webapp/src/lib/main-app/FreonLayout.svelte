<script lang="ts">
	import { FooterLink, FooterLinkGroup } from 'flowbite-svelte';
	import { Drawer, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import NavBar from '$lib/main-app/NavBar.svelte';
	import { drawerHidden } from '$lib/stores/LanguageInfo.svelte.js';
	import ModelInfo from '$lib/main-app/ModelInfo.svelte';
	import { Footer, FooterCopyright } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { WebappConfigurator } from '$lib/language';
	import { serverInfo } from '$lib/stores/ModelInfo.svelte.js';
	import { dialogs } from '$lib/stores/Dialogs.svelte';
	import OpenModelDialog from '$lib/app-parts/OpenModelDialog.svelte';
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	onMount(async () => {
		//Get list of models from server
		const names = await WebappConfigurator.getInstance().serverCommunication?.loadModelList()
		if (!!names && names.length > 0) {
			serverInfo.allModelNames = names;
			console.log("On server: " + serverInfo.allModelNames.join(", "))
		}
		// If a model is given as parameter, open this model
		// A new model is created when this model does not exist
		const urlParams = new URLSearchParams(window.location.search);
		const model = urlParams.get('model');
		if (model !== null) {
			openModel(model);
		} else {
			console.log('open dialog')
			// No model given as parameter, ask for it
			// if (!$userMessageOpen) {
				// open the app with the open/new model dialog
				dialogs.openModelDialogVisible = true;
			// }
		}
	});

	function openModel(model: string) {
		// let comm = EditorState.getInstance();
		// comm.openModel(model);
	}
</script>

<NavBar />

<div style="height:60px;" class="block md:hidden lg:hidden xl:hidden">
	<!--  This block is here to shift the content down on small media. This is done because the "sm:mt-12"
      marking down below does not function. -->
</div>

<div
	style="height:1000px;"
	class="flex items-center justify-center bg-primary-700 pb-16 sm:mb-12 sm:mt-12 md:mb-20 md:mt-20 lg:mb-20 lg:mt-20 xl:mb-20 xl:mt-20"
>
	<div class="text-amber-50 text-wrap">Editor content comes here ...</div>
	<div class="text-amber-50">Open Model Dialog is {dialogs.openModelDialogVisible}</div>
</div>

<Footer
	class="md: fixed bottom-0 start-0 z-20 w-full border-t border-gray-200 bg-white p-4 px-4 text-xs shadow md:flex md:items-center md:justify-between md:py-1 dark:border-gray-600 dark:bg-gray-800"
>
	<FooterCopyright
		href="/"
		by="Openmodeling"
		year={2025}
		class="inline-flex items-center text-xs"
	/>
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-xs text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="https://openmodeling.nl" class="inline-flex items-center"
			>openmodeling.nl</FooterLink
		>
	</FooterLinkGroup>
</Footer>

<!-- Normally hidden elements-->

<Drawer
	placement="right"
	transitionType="fly"
	{transitionParams}
	bind:hidden={drawerHidden.value}
	id="sidebar1"
>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			Model Info
		</h5>
		<CloseButton on:click={() => (drawerHidden.value = true)} class="mb-4 dark:text-white" />
	</div>
	<ModelInfo />
</Drawer>

<OpenModelDialog/>
