<script>
	import Tabs from "$lib/components/custom/tabs/tabs.svelte";
	import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";
	import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
	import InputImport from "./inputImport/inputImport.svelte";
	import { importData } from "./state/importData/importData.svelte";
    import {Button} from "$lib/components/ui/button"
 let {toggle,setToggle,resetImportData}=importData
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
<div class="m-3">
{#if toggle.value==='show'||toggle.value==='edit' }
<section class="flex flex-col items-center justify-center w-full">
    <Tabs {tabs} {content} value={'json'}/>
    {#if toggle.value==='edit'}
    <Button class="w-[20rem]" onclick={resetImportData}>Cancel</Button>
    {/if}
</section>
{ :else if toggle.value==='none'}
<Button onclick={()=>setToggle('edit')}>Change</Button>
{/if}
</div>

<hr class="border"/>
