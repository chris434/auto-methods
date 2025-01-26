import type { CondisionKeys, Condition } from "../types"
export function updateConditionController(condition:Condition, key:CondisionKeys, ObjectKey:string){
    return {...condition,[key]:ObjectKey}
}