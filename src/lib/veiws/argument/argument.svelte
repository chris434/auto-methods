<script lang="ts">
import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Each from "$lib/layouts/each/each.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import type { Arrgs, MethodProps} from "$lib/state/arrayData/types";
	import Statement from "../statement/statement.svelte";
	import { TYPEOF, TYPEOF_OPARATOR } from "./data";

const methodProps:MethodProps=$props()
</script>

{#snippet argument(arrg:Arrgs,arrgIndex:number)}
{@const arrgProps={...methodProps,arrgIndex}}
{@const {updateArrg,deleteArrg,setTypeOf}=arrayData.arrgActions(arrgProps)}
<div class="flex space-x-3 items-center">
    <Select name="argument" value={arrg.type} valueFallback="Select argument" label="argument" data={arrg.types} onchange={(type)=>updateArrg(type)} selectItem={method => {return method}} />
    <Button class="mt-3" onclick={deleteArrg}>Delete</Button>
</div>
{#if arrg.type}
<div class="flex space-x-3">
    <Select name="typeof" value={arrg.typeof} valueFallback="Select typeof" label="typeof" data={TYPEOF} selectItem={method => {return method}} onchange={value=>setTypeOf(value,'typeof')} />
 </div>
 {#if arrg.typeof==='type and value'}
<Statement {...methodProps} {arrgIndex} type={arrg.type}/>
{/if}
{/if}
{/snippet}

<Each key="arrgs" children={argument} props={methodProps}/>


