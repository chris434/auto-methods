import type { onChange } from "$lib/types/events/types";
import type { InputType } from "$lib/state/arrayData/types";
import { fileReader } from "$lib/utitls/fileReader/fileReader";
import { isJson } from "$lib/utitls/json/json";
import { importData } from "../state/importData/importData.svelte";
import { findJsonArrays } from "./utils/findJsonArrays/findJsonArrays";
import { convertToJs } from "$lib/utitls/js/js";

let {setImportData}=importData
export function onchangeHandler(e:onChange,inputType:InputType){
    const currentTarget=e.currentTarget 
if(!currentTarget.value) return setImportData({})
    if(currentTarget.files?.length){
   fileReader(currentTarget.files[0]).then((fileValue =>{
      const {value,errorMessage}= isJson<[]|object>(fileValue as string)

      if(!value||errorMessage) return setImportData({errorMessage})
    
     if(!Array.isArray(value)){
       const arrays= findJsonArrays(value)
      return setImportData({value: arrays,inputType})
     }
     setImportData({value:[['root',value]],inputType})
   }))
   return
  }
  const FIXED_ERROR_MESSAGE='Invalid array or object'
  const returnValue = convertToJs(currentTarget.value,FIXED_ERROR_MESSAGE)
  const {value}=returnValue
  console.log(returnValue.value)
  if(typeof value !=='object'&&!Array.isArray(value)) return setImportData({errorMessage: FIXED_ERROR_MESSAGE})
  handler(returnValue,inputType)
}

function handler({value,errorMessage}:{value:any,errorMessage:string},inputType:InputType){
  if(!value||errorMessage) return setImportData({errorMessage})
    console.log(value)
  if(!Array.isArray(value)){
    const arrays= findJsonArrays(value as object)
    setImportData({value: arrays,inputType})
    return
}
setImportData({value:[['root',value]],inputType})
}