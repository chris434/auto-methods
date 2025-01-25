<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData,get } from "$lib/state/arrayData/arrayData.svelte";
	import type { StatementComponentProps } from "$lib/state/arrayData/types";
	import Condition from "../condition/condition.svelte"
 let arrgProps:StatementComponentProps=$props()
  
  const arrg = $derived(get<"arrgs">(arrgProps))

</script>

{#each arrg.statements  as statement,statementIndex }
{@const {addCondition}=arrayData.satementActions({...arrgProps,statementIndex})}
<div class="flex space-x-3 rounded-lg w-fit bg-slate-200 p-3">
    <div class="text-3xl">{statement.statementType} Value</div> 
    <Button onclick={addCondition}>Add condition</Button>
</div>
<section>
<Condition {...arrgProps}  type={arrg.type} {statementIndex} />
</section>
{/each}


