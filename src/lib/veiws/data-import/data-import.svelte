<script>
	import Tabs from "$lib/components/custom/tabs/tabs.svelte";
	import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";
	import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
	import InputImport from "./inputImport/inputImport.svelte";
	import { importData } from "./state/importData/importData.svelte";
 let{data}= importData

 $effect(()=>{
    console.log(data)
 })
</script>
{#snippet tabs()}
    <TabsTrigger disabled={importData.data.inputType==='array'} value="json">json file</TabsTrigger>
    <TabsTrigger disabled={importData.data.inputType==='json'}  value="array">js array</TabsTrigger>
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
