<script lang="ts">
	import Select from "$lib/components/custom/select/select.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import Argument from "../argument/argument.svelte";
	import { METHODS } from "./data";
	import Button from "$lib/components/ui/button/button.svelte";

let methodsData= $derived(arrayData.data.methods)

</script>
{#if arrayData.data.inputValue.data.length}
{#each methodsData as method,methodIndex}
{@const {replaceMethod,addNewArrg}=arrayData.methodActions({methodIndex})}
<Select name="method" value="" valueFallback="Select method" label="method" data={METHODS} selectItem={method => {return method}} onchange={name=>replaceMethod(name)}/>
<Button disabled={!method.name||arrayData.data.inputValue.types.singleTypes.length===method.arrgs.length} onclick={addNewArrg}>add New argument</Button>
<Argument {...{methodIndex}} />
{/each}

{/if}