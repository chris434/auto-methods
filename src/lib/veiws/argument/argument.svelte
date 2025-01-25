<script lang="ts">
import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData,get } from "$lib/state/arrayData/arrayData.svelte";
	import type { MethodProps} from "$lib/state/arrayData/types";
	import Statement from "../statement/statement.svelte";

const methodProps:MethodProps=$props()
let method=$derived(get<"methods">(methodProps))  
</script>

{#each method.arrgs as arrg, arrgIndex }
{@const arrgProps={...methodProps,arrgIndex}}
{@const {updateArrg,deleteArrg}=arrayData.arrgActions(arrgProps)}


<div class="flex space-x-3 items-center">
    <Select name="argument" value={arrg.type} valueFallback="Select argument" label="argument" data={arrg.types} onchange={(type)=>updateArrg(type)} selectItem={method => {return method}} />
    <Button class="mt-3" onclick={deleteArrg}>Delete</Button>
</div>
<Statement {...methodProps} {arrgIndex} type={arrg.type}/>
{/each}  


