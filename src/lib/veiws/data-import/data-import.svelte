<script>
	import Tabs from "$lib/components/custom/tabs/tabs.svelte";
	import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";
	import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
	import InputImport from "./inputImport/inputImport.svelte";
	import { importData } from "./state/importData/importData.svelte";
 let{data}= importData
</script>
<section>
    
</section>
{#snippet tabs()}
    <TabsTrigger disabled={importData.data.inputType==='array'} value="json">json file</TabsTrigger>
    <TabsTrigger disabled={importData.data.inputType==='json'}  value="array">js array or object</TabsTrigger>
{/snippet}

{#snippet content()}
    <TabsContent value="json">
     <InputImport inputType="json"/>
    </TabsContent>
    <TabsContent value="array">
        <InputImport inputType="array"/>
    </TabsContent>
{/snippet}

<section class="flex justify-center w-full m-5">
    <Tabs {tabs} {content} value={'json'}/>
</section>
<hr class="border"/>
