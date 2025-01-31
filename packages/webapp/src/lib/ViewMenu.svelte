<script lang="ts">
	import { Checkbox, Dropdown, DropdownDivider, DropdownItem, NavLi } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { projectionNames, projectionsShown } from '$lib/stores/LanguageStore.js';
	import type { ProjectionItem } from '$lib/ts-utils/MenuItem';

	let allProjections: ProjectionItem[] = [];
	for (const view of $projectionNames) {
		let selected: boolean = false;
		if (view !== 'default') {
			if ($projectionsShown.includes(view)) {
				selected = true;
			}
			allProjections.push({ name: view, selected: selected });
		}
	}
</script>

<NavLi class="cursor-pointer"
	>View<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" /></NavLi
>
<Dropdown class="z-20 w-44 space-y-3 p-3 text-sm">
	<li>
		<Checkbox checked disabled>Default</Checkbox>
	</li>
	{#each allProjections as option}
		<li>
			<Checkbox>{option.name}</Checkbox>
		</li>
	{/each}
	<DropdownDivider />
	<DropdownItem on:click={() => console.log('Apply Changes')}>Apply changes</DropdownItem>
</Dropdown>
