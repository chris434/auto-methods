<script lang="ts">
	import Select from "$lib/components/custom/select/select.svelte";
import Button from "$lib/components/ui/button/button.svelte";
	import Each from "$lib/layouts/each/each.svelte";
	import { arrayData} from "$lib/state/arrayData/arrayData.svelte";
	import type { StatementComponentProps,Statement } from "$lib/state/arrayData/types";
	import Condition from "../condition/condition.svelte"
 let arrgProps:StatementComponentProps=$props()
 console.log(arrgProps)
  </script>

 {#snippet statement(statement:Statement,statementIndex:number)}
 {@const {addCondition}=arrayData.satementActions({...arrgProps,statementIndex})}
 <div class="flex space-x-3 rounded-lg w-fit bg-slate-200 p-3">
     <div class="text-3xl">{statement.statementType} Value</div> 
     <Button onclick={addCondition}>Add condition</Button>
 </div>
 <section>
 <Condition {...arrgProps} {statementIndex} />
 </section>
 {/snippet}

<Each key="statement" props={arrgProps} children={statement}/>


