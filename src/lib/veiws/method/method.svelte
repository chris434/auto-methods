<script lang="ts">
	import Select from "$lib/components/custom/select/select.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import MethodItem from "../method-item/methodItem.svelte";
	import { METHODS } from "./data";
const {replaceMethod}=arrayData
</script>
{#if arrayData.data.inputValue.data.length}
{#each arrayData.data.methods  as {types},i}
<Select name="method" value="" valueFallback="Select method" label="method" data={METHODS} selectItem={method => {return method}} onchange={name=>replaceMethod(name,i)}/>
<MethodItem {types} {i}/>
{/each}
{/if}