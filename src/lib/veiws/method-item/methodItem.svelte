<script lang="ts">
import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import type { Methods } from "$lib/state/arrayData/types";
	import Method from "../method/method.svelte";
const {addNewArrg,updateArrg,deleteArrg}=arrayData
const {i,method}:{i:number,method:Methods}=$props()
</script>


<Button disabled={!arrayData.data.methods[i].name||arrayData.data.inputValue.types.singleTypes.length===arrayData.data.methods[i].arrgs.length} onclick={()=>addNewArrg(i)}>add New argument</Button>
{#each method.arrgs as arrg,arrgIndex }
<div class="flex space-x-3 items-center">
    <Select name="method" value={arrg.type} valueFallback="Select method" label="method" data={arrg.types} onchange={(type)=>updateArrg(type,i,arrgIndex)} selectItem={method => {return method}} />
    <Button onclick={()=>deleteArrg(i,arrgIndex)}>Delete</Button>
</div>

{/each}  


