<script lang="ts" generics="T">
	import type { Props } from "./types";
	import LabelErrorWrapper from "../labelErrorWrapper/labelErrorWrapper.svelte";
 import * as Select from "$lib/components/ui/select/index.js";

let {errorMessage,label,labelId=label,data,selectItem,value,onchange}:Props<T>=$props()
</script>
<LabelErrorWrapper {errorMessage} {label} {labelId}>
    <Select.Root   bind:value type="single">
        <Select.Trigger  id={labelId} class="w-[180px] overflow-hidden" {onchange}>{value}</Select.Trigger>
        <Select.Content>
        {#each data as item }
        {@const selectedItem=selectItem(item)}
        <Select.Item value={selectedItem}>{selectedItem}</Select.Item>
        {/each}

          
        </Select.Content>
      </Select.Root>
</LabelErrorWrapper>

