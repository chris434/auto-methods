<script lang="ts">
	import Label from "$lib/components/ui/label/label.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
	import type { Props } from "./types";
let {label,labelId=label,inputType,errorMessage,dataType="text",value,onchangeInput,onchangeText}:Props=$props()
</script>

<div>
    <Label for={labelId}>{label}</Label>
    {#if inputType==='input'}
    <Input {value} id={labelId} type={dataType} onchange={onchangeInput}/>
    {:else}
    <Textarea {value} id={labelId} onchange={onchangeText}/>
    {/if}
    <div class="text-red-400 mt-3">{errorMessage}</div>  
    </div>