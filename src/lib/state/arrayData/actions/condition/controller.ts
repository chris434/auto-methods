import { deleteController } from "../../controllers/delete"
import type { CondisionKeys, Condition, Statement } from "../../types"
export function updateConditionController(condition:Condition, key:CondisionKeys, ObjectKey:string):Condition{
    return {...condition,[key]:ObjectKey}
}

export function deleteConditionController(statement:Statement,conditionIndex:number):Statement{
    return deleteController(statement, statement.conditions,conditionIndex,'conditions')
}