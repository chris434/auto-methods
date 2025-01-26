import type {Statement } from "../types"
export function addConditionController(statement:Statement,type:string){
return {...statement,conditions: [...statement.conditions,{oparator:"",condisionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}
}