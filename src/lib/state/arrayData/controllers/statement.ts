import type {Arrgs, Statement } from "../types"
import { deleteController } from "./delete"
export function addConditionController(statement:Statement,type:string):Statement{
return {...statement,conditions: [...statement.conditions,{oparator:"",conditionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}
}

export function deleteStatementController(arrg:Arrgs,statementIndex:number):Arrgs{
return deleteController(arrg,arrg.statements,statementIndex,'statements')
}