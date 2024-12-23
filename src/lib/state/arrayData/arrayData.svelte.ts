import { INIT_ARRAY_DATA } from "./data.js"
import type { ArrayDataType, InputValue} from "./types.ts"

class ArrayData{
     data=$state<ArrayDataType>(INIT_ARRAY_DATA)
    setInputValue=(value:InputValue )=>{
        this.data={...this.data,inputValue:value}
    }
} 

export let arrayData=new ArrayData()