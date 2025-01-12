<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
import Condition from "./condition/condition.svelte";
import type { Props } from "./types";
    const{addCondition}=arrayData
let {type,statement,methodIndex,arrgIndex,statementIndex}:Props=$props()  
</script>
<div class="flex space-x-3 rounded-lg w-fit bg-slate-200 p-3">
    <div class="text-3xl">{statement.statementType} Value</div>
    <Button onclick={()=> addCondition(type,methodIndex,arrgIndex,statementIndex)}>Add condition</Button>
</div>
    
<section>
{#each statement.condisions as condition,conditionIndex}
    <Condition {methodIndex} statementType={statement.statementType} {condition} {type} {arrgIndex} {statementIndex} {conditionIndex}/>
{/each}
</section>
