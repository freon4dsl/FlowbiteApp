<script lang="ts">
    import LabelComponent from "../../lib/components/LabelComponent.svelte";
    import { LabelBox } from "@freon4dsl/core";
    // Parameters
    interface Props {
        box1: LabelBox;
        box2: LabelBox;
    }

    let { box1, box2 }: Props = $props();

</script>

<div data-testid="test-label1">
    <LabelComponent box={box1}/>
</div>
<div data-testid="test-label2">
        <LabelComponent box={box2}/>
</div>

