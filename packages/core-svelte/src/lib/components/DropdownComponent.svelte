<script lang="ts">
    import { DROPDOWN_LOGGER } from "$lib/components/ComponentLoggers.js";

    /**
     * This component is a dropdown menu that is used with a TextDropdownComponent.
     */
    import { createEventDispatcher } from "svelte";
    import { FreLogger, type SelectOption } from "@freon4dsl/core";

    interface Props {
        selectedId?: string;
        options?: SelectOption[];
    }

    let { selectedId = $bindable(""), options = [] }: Props = $props();
    let id: string = "dropdown";
    const dispatcher = createEventDispatcher();

    const LOGGER = DROPDOWN_LOGGER

    let isSelected = $derived((option: SelectOption) => { // determines the style of the selected option
        if (options.length === 1) {
            return true;
        }
        return option.id === selectedId;
    });

    /**
     * When one of the items in the menu is clicked, a custom event is dispatched to the parent of this component.
     * @param option
     */
    const handleClick = (option: SelectOption) => {
        LOGGER.log("handleClick")
        selectedId = option.id;
        dispatcher("freItemSelected", option);
    };
</script>

<span class="dropdown-component-container">
<nav class="dropdown-component"
     id="{id}"
>
    {#if options.length > 0 }
        {#each options as option (option.id + option.label)}
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_click_events_have_key_events -->
            <div class="dropdown-component-item"
                 class:dropdown-component-selected={isSelected(option)}
                 onmousedown={(event) => {event.preventDefault(); event.stopPropagation(); handleClick(option); }}
                 role="none"
            >
                {option.label}
            </div>
        {/each}
    {:else}
        <div class="dropdown-component-error">
            No selection available
        </div>
    {/if}
</nav>
</span>

<style>
    .dropdown-component-container {
        position: relative;
    }
</style>
