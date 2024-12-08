<script lang="ts">
	import Input from "$lib/components/custom/input/input.svelte";
	import { onchangeHandler } from "./helper";
	import type { Props } from "./type";
    let {inputType}:Props=$props()
</script>
{#if inputType==='json'}
<Input value="" label="file" inputType="input" dataType="file" onchange={e=> onchangeHandler(e,'json')}/>
{:else}
<Input value="" label="array" inputType="textarea" onchange={e=> onchangeHandler(e,'array')}/>
{/if}