<script lang="ts">
import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import type { Methods } from "$lib/state/arrayData/types";
	import Argument from "../argument/argument.svelte";
const {addNewArrg,updateArrg,deleteArrg}=arrayData
const {methodIndex,method}:{methodIndex:number,method:Methods}=$props()

$effect(()=>console.log(method,Date))
</script>


<Button disabled={!arrayData.data.methods[methodIndex].name||arrayData.data.inputValue.types.singleTypes.length===arrayData.data.methods[methodIndex].arrgs.length} onclick={()=>addNewArrg(methodIndex)}>add New argument</Button>
{#each method.arrgs as arrg,arrgIndex }
<div class="flex space-x-3 items-center">
    <Select name="argument" value={arrg.type} valueFallback="Select argument" label="argument" data={arrg.types} onchange={(type)=>updateArrg(type,methodIndex,arrgIndex)} selectItem={method => {return method}} />
    <Button class="mt-3" onclick={()=>deleteArrg(methodIndex,arrgIndex)}>Delete</Button>
</div>

{#each arrg.statements  as statement,statementIndex }
<Argument {methodIndex} {arrgIndex}  {statementIndex} {statement}  type={arrg.type}/> 
{/each}
{/each}  


