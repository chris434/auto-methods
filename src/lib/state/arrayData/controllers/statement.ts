import type {Statement } from "../types"
export function addConditionController(statement:Statement,type:string):Statement{
return {...statement,conditions: [...statement.conditions,{oparator:"",conditionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}
}