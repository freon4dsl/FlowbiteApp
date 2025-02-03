<script>
    let value = $state(0);
    /** @type {{max?: number}} */
    let { max = 3 } = $props();
    function increment() {
        if (value < max) value++;
    }
    function decrement() {
        if (value > 0) value--;
    }
</script>

<style>
    .counter > * {
        display: inline-block;
    }
</style>

<div class="counter">
    <button onclick={decrement}>decrement</button>
    <div data-testid="counter-value">{value}</div>
    <button onclick={increment}>increment</button>
</div>
