<script>
	import Tabs from "$lib/components/custom/tabs/tabs.svelte";
	import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";
	import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import InputImport from "./inputImport/inputImport.svelte";
 let{data}= arrayData
</script>
{#snippet tabs()}
    <TabsTrigger disabled={data.inputType==='array'} value="json">json file</TabsTrigger>
    <TabsTrigger disabled={data.inputType==='json'}  value="array">js array</TabsTrigger>
{/snippet}

{#snippet content()}
    <TabsContent value="json">
     <InputImport inputType="json"/>
    </TabsContent>
    <TabsContent value="array">
        <InputImport inputType="array"/>
    </TabsContent>
{/snippet}


<Tabs {tabs} {content} value={'json'}/>
