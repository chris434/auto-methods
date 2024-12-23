<script lang="ts">
	import Select from "$lib/components/custom/select/select.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import { METHODS } from "./data";

</script>
{#if arrayData.data.inputValue.data.length}
<Select name="method" value="" valueFallback="Select method" label="method" data={METHODS} selectItem={method => {return method}}/>
{/if}