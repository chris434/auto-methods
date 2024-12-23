<script lang="ts">
	import Input from "$lib/components/custom/input/input.svelte";
	import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { importData } from "../state/importData/importData.svelte";
	import { importDataHandler } from "./helpers/importDataHandler";
	import { onchangeHandler } from "./helpers/onchangeHandler";
	import type {Props} from './type'
    let {inputType}:Props=$props()
	let selectValue=$state<{value:string}>({value:''})
	let {setImportData}=importData

</script>
{#if inputType==='json'||inputType===''}
	<Input errorMessage={importData.data.errorMessage} value="" label="file" inputType="input" dataType="file" onchangeInput={e=> onchangeHandler(e,'json')} onremove={()=>setImportData({})}/>
{:else}
<Input errorMessage={importData.data.errorMessage} value="" label="array or object" inputType="textarea" onchangeText={e=> onchangeHandler(e,'array')}/>
{/if}

{#if Array.isArray(importData.data.value)&& importData.data.value.length}
<section class="flex gap-3 items-end">
	<Select bind:value={selectValue.value}  label="arrays" data={importData.data.value} selectItem={([key])=>{return key}} valueFallback="Select array" name="arrays"/>
	<Button onclick={()=> importDataHandler(selectValue.value)} disabled={!selectValue.value} class="mb-3">Import</Button>
</section>
{/if}