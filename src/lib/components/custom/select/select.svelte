<script lang="ts" generics="T">
	import type { Props } from "./types";
	import LabelErrorWrapper from "../labelErrorWrapper/labelErrorWrapper.svelte";
 import * as Select from "$lib/components/ui/select/index.js";

let {errorMessage='',label,labelId=label,data,selectItem,value=$bindable(),valueFallback,name}:Props<T>=$props()

  
</script>
<LabelErrorWrapper {errorMessage} {label} {labelId}>
      <Select.Root type="single" {name} bind:value>
        <Select.Trigger class="w-[180px]">{value||valueFallback}</Select.Trigger>
        <Select.Content>
            {#each data as item }
        {@const selectedItem=selectItem(item)}
        <Select.Item value={selectedItem} label={selectedItem}/>
        {/each}
        </Select.Content>
      </Select.Root>
</LabelErrorWrapper>

