<script lang="ts">
	import { Button, Modal, Label, Input, Radio } from 'flowbite-svelte';
	import { dialogs } from '$lib/stores/Dialogs.svelte';
	import { serverInfo } from '$lib/stores/ModelInfo.svelte';

	let newName: string = '';
	let internalSelected: string = ''
</script>

<Modal bind:open={dialogs.openModelDialogVisible} size="xs" autoclose={false} class="w-full">
	<div class="flex flex-col space-y-6" >
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Open Model</h3>
		<Label class="space-y-2">
			<span>Name of model</span>
			<Input bind:value={newName} type="text" name="model-name" placeholder="my_model" required />
		</Label>

		<div class="grid grid-cols-4">
			{#each serverInfo.allModelNames as model}
				<Radio class="p-2" name="models" on:change={() => {internalSelected = model}} >{model}</Radio>
			{/each}
		</div>

	</div>
	<svelte:fragment slot="footer">
		<Button on:click={() => alert('Handle "success": ' + internalSelected)}>Open</Button>
		<Button color="alternative" on:click={() => alert('Handle "cancel": ' + internalSelected)}>Cancel</Button>
	</svelte:fragment>

</Modal>
