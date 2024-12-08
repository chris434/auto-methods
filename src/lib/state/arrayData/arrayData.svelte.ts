import { INIT_ARRAY_DATA } from "./data"
import type { ArrayDataType, InputType } from "./types"

function createArrayData(){
    let data=$state<ArrayDataType>(INIT_ARRAY_DATA)

   function setInput(inputType:InputType,value:unknown){
   if(!value){
     data.inputType=''
     data.inputValue=[]
    return
   }
   data.inputType=inputType
 }

    return {
        data,
        setInput
    }
}

export let arrayData=createArrayData()