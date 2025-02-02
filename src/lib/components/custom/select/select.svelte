<script lang="ts" generics="T">
	import type { Props } from "./types";
	import LabelErrorWrapper from "../labelErrorWrapper/labelErrorWrapper.svelte";
 import * as Select from "$lib/components/ui/select/index.js";
	import Input from "../input/input.svelte";

let {errorMessage='',label,labelId=label,data,selectItem,value=$bindable(),valueFallback,name,onchange}:Props<T>=$props()

  const selectedValue=(selectItem?selectItem(data[0]) as T:data[0])as string
  const dataMinLenght=data.length===1
  if(dataMinLenght&&onchange)onchange(selectedValue as T)
  if(dataMinLenght&&!onchange)value=selectedValue 

  
</script>
{#if data.length>1}
<LabelErrorWrapper  {errorMessage} {label} {labelId}>
  <Select.Root onValueChange={(value)=>onchange&&onchange(value as T)} type="single" {name} bind:value>
    <Select.Trigger class="w-[15rem]">{value||valueFallback}</Select.Trigger>
    <Select.Content>
        {#each data as item }
    {@const selectedItem=selectItem?selectItem(item):item as string}
    <Select.Item value={selectedItem} label={selectedItem}/>
    {/each}
    </Select.Content>
  </Select.Root>
</LabelErrorWrapper>
{:else}

<Input value={selectedValue} {label} {labelId} errorMessage="" inputType="input" readonly />
{/if}
