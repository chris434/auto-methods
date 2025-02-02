<script lang="ts">
	import Label from "$lib/components/ui/label/label.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
	import type { Props } from "./types";
	import Button from "$lib/components/ui/button/button.svelte";
let {label,labelId=label,inputType,errorMessage,dataType="text",accept,readonly,value=$bindable(),onchangeInput,onchangeText,onremove}:Props=$props()
</script>

<div>
    <Label for={labelId}>{label}</Label>
    {#if inputType==='input'}
    {@const showRemoveButton=dataType==='file'&&value}
    <div class="flex w-[20rem] gap-3">
        <Input {readonly} {accept} class={showRemoveButton?'w-[14.25rem]':'w-[20rem]'} bind:value id={labelId} type={dataType} onchange={onchangeInput}/>
        {#if showRemoveButton}
        <Button onclick={()=> {
            value=''
            onremove?.()
            }}>remove</Button>
        {/if}
    </div>
    {:else}
    <Textarea {value} id={labelId} onchange={onchangeText}/>
    {/if}
    <div class="text-red-400 mt-3">{errorMessage}</div>  
    </div>