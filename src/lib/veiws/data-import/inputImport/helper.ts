import type { onChange } from "$lib/types/events/types";
import type { InputType } from "$lib/state/arrayData/types";
import { arrayData } from "$lib/state/arrayData/arrayData.svelte";

let {setInput}=arrayData
export function onchangeHandler(e:onChange,inputType:InputType){
    const currentTarget=e.currentTarget
    const isJson=inputType==='json'
    const isArray=inputType==='array'
    const value=isJson?currentTarget.files:currentTarget.value
    setInput(inputType,isJson&& value?.length?value[0]:isArray&&value?value:'')
}