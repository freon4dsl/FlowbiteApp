<script lang="ts">

    import { onMount } from "svelte";
    import { MockVariables } from "./MockVariables.js";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    onMount( () => {
        MockVariables.reset();
    });

    const onKeyDown = (event: KeyboardEvent) => {
        MockVariables.keydown(event);
    }

    const onKeyPress = (event: KeyboardEvent) => {
        MockVariables.keypress(event);
    }

</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions Ignored because everything is in the test environment -->
<div id="mockComponent"
     onkeypress={onKeyPress}
     onkeydown={onKeyDown}
     role="group"
>
    {@render children?.()}
</div>
