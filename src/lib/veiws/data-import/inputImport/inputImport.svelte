<script lang="ts">
	import Input from "$lib/components/custom/input/input.svelte";
	import Select from "$lib/components/custom/select/select.svelte";
	import { importData } from "../state/importData/importData.svelte";
	import { onchangeHandler } from "./helper";
	import type { Props } from "./type";
    let {inputType}:Props=$props()
</script>
{#if inputType==='json'||inputType===''}
<Input errorMessage={importData.data.errorMessage} value="" label="file" inputType="input" dataType="file" onchangeInput={e=> onchangeHandler(e,'json')}/>
{:else}
<Input errorMessage={importData.data.errorMessage} value="" label="array" inputType="textarea" onchangeText={e=> onchangeHandler(e,'array')}/>
{/if}

{#if Array.isArray(importData.data.value)&& importData.data.value.length}
<Select value={importData.data.value[0][0]} label="arrays" errorMessage="" data={importData.data.value} selectItem={([key])=>{return key}} onchange={e=> console.log(e)}/>
{/if}