<script lang="ts">
	import Label from "$lib/components/ui/label/label.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
	import type { Props } from "./types";
let {label,labelId=label,inputType,dataType="text",value,onchange}:Props=$props()
</script>
<div>
    <Label for={labelId}>{label}</Label>
    {#if inputType==='input'}
    <Input {value} id={labelId} type={dataType}  {onchange}/>
    {:else}
    <Textarea {value} id={labelId} {onchange}/>
    {/if}
    </div>