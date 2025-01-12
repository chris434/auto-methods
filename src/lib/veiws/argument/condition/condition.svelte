<script lang="ts">
	import Input from "$lib/components/custom/input/input.svelte";
    import Select from "$lib/components/custom/select/select.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
	import { LOGICAL, OPORATORS } from "../data";
	import { conditionHelper } from "./helpers/conditionHelper.svelte";
    import type { Props } from "./types";

    let {condition,methodIndex,arrgIndex,statementIndex,conditionIndex,type}:Props=$props()
    const {updateConditionHandler}=conditionHelper(methodIndex,arrgIndex,statementIndex,conditionIndex)
    const objectTypes =arrayData.data.inputValue.types.objectTypes
    const objectKeys = Object.keys(objectTypes)
    const logicale=condition.logical
    const valueType=condition.valueType
    const oporator=condition.oparator
    const conditionValue=condition.condisionValue
    let selectedObjectKey=$derived(condition.selectedObjectKey)
    
    const logicalText='Logical'
    const objectKeyText='Object key'
    const valueTypeText='Value type'
    const oporatorTypeText='Operator operat'
    const conditionText="condision value"
</script>

<section class="pl-3 pr-3 flex flex-col space-y-3">
    {#if conditionIndex }
    <Select name={logicalText} value={logicale} valueFallback="Select {logicalText}" label={logicalText} data={LOGICAL} selectItem={oporator => {return oporator}} onchange={value=>updateConditionHandler(value,'logical')}/>  
    {/if}
   
    <div class="flex space-x-3 items-center">
        <div class="flex pl-3 pr-3 items-center space-x-3 ">
            {#if type==='object' }
            <Select name={objectKeyText} value={selectedObjectKey} valueFallback="Select {objectKeyText}" label={objectKeyText} data={objectKeys} selectItem={oporator => {return oporator}} onchange={value=>updateConditionHandler(value,'selectedObjectKey')}/>
                {#if selectedObjectKey}
                <Select name={valueTypeText} value={valueType} valueFallback="Select {valueTypeText}" label={valueTypeText} data={objectTypes[selectedObjectKey].types} selectItem={oporator => {return oporator}} onchange={value=>updateConditionHandler(value,'valueType')} />
               {/if}
            {/if}
        </div>
       
    </div>
    <div class="flex items-center space-x-3">
        {#if (type!=='object'||condition.valueType!=='object')&&condition.valueType}
        <Select name={oporatorTypeText} value={oporator} valueFallback="Select {oporatorTypeText}" label={oporatorTypeText} data={OPORATORS} selectItem={oporator => {return oporator}} onchange={value=>updateConditionHandler(value,'oparator')}/>
       
            {#if condition.valueType==='string'|| condition.valueType==='number'}
            <Input errorMessage="" value={conditionValue} label={conditionText} inputType="input" dataType={condition.valueType==='string'?'text':'number'} onchangeInput={e=>updateConditionHandler(e.currentTarget.value,'condisionValue')}/>
            {/if}
            {/if}
        <Button class="mt-3">delete</Button>
    </div>
</section>