<script lang="ts">
import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
const {addNewArrg,updateArrg}=arrayData
const {i,types}:{i:number,types:string[]}=$props()

</script>


<Button disabled={!arrayData.data.methods[i].name||arrayData.data.inputValue.types.singleTypes.length===arrayData.data.methods[i].arrgs.length} onclick={()=>addNewArrg(i)}>add New argument</Button>
{#each arrayData.data.methods[i].arrgs as _,arrgIndex }
<Select name="method" value="" valueFallback="Select method" label="method" data={types} onchange={(type)=>updateArrg(type,i,arrgIndex)} selectItem={method => {return method}} />
{/each}
