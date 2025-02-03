<script lang="ts">
    import MockSurroundingComponent from "./MockSurroundingComponent.svelte";
    import OptionalComponent from "../../lib/components/OptionalComponent.svelte";
    import { OptionalBox, FreEditor } from "@freon4dsl/core";

    // Parameters
    interface Props {
        box: OptionalBox;
        editor: FreEditor;
    }

    let { box, editor }: Props = $props();
    export const id = "mock-environment";

    const onKeyDown = (event: KeyboardEvent) => {
        console.log("onKeyDown: " + event.key + " ctrl: " + event.ctrlKey + " alt: " + event.altKey);
    }

    const onKeyPress = (event: KeyboardEvent) => {
        console.log("onKeyPress: " + event.key + " ctrl: " + event.ctrlKey + " alt: " + event.altKey);
    }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions Ignored because everything is in the test environment -->
<div      onkeypress={onKeyPress}
          onkeydown={onKeyDown}
id="mock-environment" role="group">
    <MockSurroundingComponent>
        <OptionalComponent box={box} editor={editor}/>
    </MockSurroundingComponent>
</div>
