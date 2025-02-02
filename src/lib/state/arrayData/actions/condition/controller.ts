import type { CondisionKeys, Condition } from "../../types"
export function updateConditionController(condition:Condition, key:CondisionKeys, ObjectKey:string):Condition{
    return {...condition,[key]:ObjectKey}
}