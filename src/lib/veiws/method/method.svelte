<script lang="ts">
	import Select from "$lib/components/custom/select/select.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import Argument from "../argument/argument.svelte";
	import { METHODS } from "./data";
	import Button from "$lib/components/ui/button/button.svelte";
	import Each from "$lib/layouts/each/each.svelte";
	import type { Methods } from "$lib/state/arrayData/types";
</script>
{#snippet method(method:Methods,methodIndex:number)}
 {@const {replaceMethod,addNewArrg}=arrayData.methodActions({methodIndex})}
 <Select name="method" value="" valueFallback="Select method" label="method" data={METHODS} selectItem={method => {return method}} onchange={name=>replaceMethod(name)}/>
 <Button disabled={!method.name||arrayData.data.inputValue.types.singleTypes.length===method.arrgs.length} onclick={addNewArrg}>add New argument</Button>
 <Argument {...{methodIndex}} />
 {/snippet}

{#if arrayData.data.inputValue.data.length}
<Each key="methods" props={null}  children={method}/>
{/if}