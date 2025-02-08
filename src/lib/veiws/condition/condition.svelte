<script lang="ts">
	import Input from "$lib/components/custom/input/input.svelte";
    import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Each from "$lib/layouts/each/each.svelte";
	import { arrayData} from "$lib/state/arrayData/arrayData.svelte";
	import type { StatementProps,Condition } from "$lib/state/arrayData/types";
	import { LOGICAL, OPORATORS } from "./data";
	import { conditionHelper } from "./helpers/conditionHelper.svelte";

    let statementProps:StatementProps=$props()
    const {type}=$derived(statementProps)
    const objectTypes =arrayData.data.inputValue.types.objectTypes
    const objectKeys = Object.keys(objectTypes)
    const {conditionActions}=arrayData

    const logicalText='Logical'
    const objectKeyText='Object key'
    const valueTypeText='Value type'
    const oporatorTypeText='Operator operat'
    const conditionText="condision value"
</script>

 {#snippet condition(condition:Condition, conditionIndex:number)}
    {@const {updateConditionHandler}=conditionHelper({...statementProps,conditionIndex})}
    {@const {deleteCondition}=conditionActions({...statementProps,conditionIndex})}
    {@const logicale=condition.logical}
    {@const valueType=condition.valueType}
    {@const oporator=condition.oparator}
    {@const conditionValue=condition.conditionValue}
    {@const selectedObjectKey=condition.selectedObjectKey}

    <section class="pl-3 pr-3 flex flex-col space-y-3">
        {#if conditionIndex }
        <Select name={logicalText} value={logicale} valueFallback="Select {logicalText}" label={logicalText} data={LOGICAL} onchange={value=>updateConditionHandler(value,'logical')}/>  
        {/if}
       
        <div class="flex space-x-3 items-center">
            <div class="flex pl-3 pr-3 items-center space-x-3 ">
                {#if type==='object' }
                <Select name={objectKeyText} value={selectedObjectKey} valueFallback="Select {objectKeyText}" label={objectKeyText} data={objectKeys} onchange={value=>updateConditionHandler(value,'selectedObjectKey')}/>
                    {#if selectedObjectKey}
                    <Select name={valueTypeText} value={valueType} valueFallback="Select {valueTypeText}" label={valueTypeText} data={objectTypes[selectedObjectKey].types} onchange={value=>updateConditionHandler(value,'valueType')} />
                   {/if}
                {/if}
            </div>
           
        </div>
        <div class="flex items-center space-x-3">
            {#if (type!=='object'||condition.valueType!=='object')&&condition.valueType}
            <Select name={oporatorTypeText} value={oporator} valueFallback="Select {oporatorTypeText}" label={oporatorTypeText} data={OPORATORS} selectItem={oporator => {return oporator}} onchange={value=>updateConditionHandler(value,'oparator')}/>
           
                {#if condition.valueType==='string'|| condition.valueType==='number'}
                <Input errorMessage="" value={conditionValue} label={conditionText} inputType="input" dataType={condition.valueType==='string'?'text':'number'} onchangeInput={e=>updateConditionHandler(e.currentTarget.value,'conditionValue')}/>
                {/if}
                {/if}
            <Button onclick={deleteCondition} class="mt-3" >delete</Button>
        </div>
    </section>
    {/snippet}

<Each key="conditions" props={statementProps} children={condition}/>
