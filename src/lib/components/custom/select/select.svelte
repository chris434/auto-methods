<script lang="ts" generics="T">
	import type { Props } from "./types";
	import LabelErrorWrapper from "../labelErrorWrapper/labelErrorWrapper.svelte";
 import * as Select from "$lib/components/ui/select/index.js";
	import { Target } from "svelte-radix";

let {errorMessage='',label,labelId=label,data,selectItem,value=$bindable(),valueFallback,name,onchange}:Props<T>=$props()

  
</script>
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

