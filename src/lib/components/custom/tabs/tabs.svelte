<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
	import type { Props } from "./types";
    const {tabs,content,value}:Props=$props()
   </script>
    
   <Tabs.Root {value} class="w-[400px]">
    <Tabs.List class="grid w-full grid-cols-2">
      {@render tabs()}
    </Tabs.List>
      {@render content()}
   </Tabs.Root>