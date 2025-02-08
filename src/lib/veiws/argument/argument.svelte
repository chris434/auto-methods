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
{@const {updateArrg,deleteArrg,setTypeOf,addStatement}=arrayData.arrgActions(arrgProps)}
<div class="flex space-x-3 items-center">
	<Select name="argument" value={arrg.type} valueFallback="Select argument" label="argument" data={arrg.types} onchange={(type)=>updateArrg(type)} />
    <Button class="mt-3" onclick={deleteArrg}>Delete</Button>
</div>
{#if arrg.type}
<div class="flex space-x-3 items-center">
    <Select data={TYPEOF}  name="typeof" value={arrg.typeof} valueFallback="Select typeof" label="typeof" onchange={(value)=>setTypeOf(value)} />
	<Button class="mt-3" onclick={addStatement}>add Statement</Button>
 </div>
 {#if arrg.typeof==='type and value'}
<Statement {...methodProps} {arrgIndex} type={arrg.type}/>
{/if}
{/if}
{/snippet}

<Each key="arrgs" children={argument} props={methodProps}/>


