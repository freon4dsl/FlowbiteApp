<script lang="ts">
    import {Checkbox, Dropdown, DropdownDivider, DropdownItem, NavLi} from "flowbite-svelte";
    import {ChevronDownOutline} from "flowbite-svelte-icons";
    import {projectionNames, projectionsShown} from "$lib/stores/LanguageStore.js";
    import type {ProjectionItem} from "$lib/ts-utils/MenuItem";

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

<NavLi class="cursor-pointer">View<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"/></NavLi>
<Dropdown class="w-44 z-20 p-3 space-y-3 text-sm">
    <li>
        <Checkbox checked disabled>Default</Checkbox>
    </li>
    {#each allProjections as option}
    <li>
        <Checkbox>{option.name}</Checkbox>
    </li>
        {/each}
    <DropdownDivider/>
    <DropdownItem on:click={()=> console.log("Apply Changes")}>
        Apply changes
    </DropdownItem >
</Dropdown>
